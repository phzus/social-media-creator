#!/usr/bin/env python3
"""Gera o HTML e o PDF de entrega de roteiro (padrão Lone de 2026-11-17) a partir de um JSON.

Uso:
    python3 shared/templates/gerar-roteiro-pdf.py <spec.json> <saida.html> [<saida.pdf>]

O CSS vem de shared/templates/roteiro-video-entrega-cliente.html, então mudar o visual
do template muda todos os PDFs gerados daqui pra frente.

Formato do JSON (texto das falas aceita HTML simples: <span class="quem">, <span class="fill">):
{
  "cliente": "MAICOM MINERAIS",
  "rodape": "MAICOM MINERAIS · SUPER FEIRÃO",
  "rotulo_acao": "Imagem",                  # opcional: rótulo da linha de ação (padrão "Cena")
  "capa": {"linha1": "O patrão", "linha2": "enlouqueceu", "lede": "..."},
  "como_gravar": ["...", "..."],            # opcional: página de instrução antes dos roteiros
  "roteiros": [
    {
      "eyebrow": "ROTEIRO 01 · FEIRÃO · COM VENDEDOR E PATRÃO",
      "titulo": "...",
      "meta": [["Cenas", "07"], ["Duração", "~35s"], ["Formato", "Reels"], ["CTA", "Visita à loja"]],
      "cenas": [{"titulo": "GANCHO | IDENTIFICAÇÃO", "acao": "...", "fala": "..."}],  # titulo opcional
      "quebra_apos": 5,                      # opcional: divide as cenas em 2 páginas
      "notas": [{"titulo": "Na edição", "paragrafos": ["..."]}]
    }
  ]
}
"""
import html
import json
import os
import re
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(AQUI, "roteiro-video-entrega-cliente.html")
IDENTIDADE = os.path.join(os.path.dirname(AQUI), "identidade-lone")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def esc(texto):
    return html.escape(texto, quote=False)


def css_do_template():
    with open(TEMPLATE, encoding="utf-8") as f:
        conteudo = f.read()
    m = re.search(r"<style>(.*?)</style>", conteudo, re.S)
    if not m:
        sys.exit("Não achei o <style> do template.")
    return m.group(1)


def topo(logo_preto, cliente, carimbo):
    return f"""
    <div class="top-bar"></div>
    <div class="inner">
      <div class="masthead-row">
        <img class="logo" src="{logo_preto}" alt="Lone Mídia">
        <div class="stamp">Cliente<strong>{esc(cliente)}</strong>{esc(carimbo)}</div>
      </div>"""


def rodape(texto):
    return f"""
      <div class="footer">
        <span><strong>Lone Mídia</strong> · Marketing &amp; Performance</span>
        <span>{esc(texto)}</span>
      </div>
    </div>"""


def montar(spec, saida_html):
    pasta = os.path.dirname(os.path.abspath(saida_html))
    logo_branco = os.path.relpath(os.path.join(IDENTIDADE, "lone-midia-logo-azul-branco.png"), pasta)
    logo_preto = os.path.relpath(os.path.join(IDENTIDADE, "lone-midia-logo-azul-preto.png"), pasta)
    cliente = spec["cliente"]
    capa = spec["capa"]

    partes = [f"""
  <section class="page cover">
    <div class="top-bar"></div>
    <div class="inner">
      <img class="logo" src="{logo_branco}" alt="Lone Mídia">
      <span class="pill">Roteiro de vídeo</span>
      <h1>{esc(capa['linha1'])}<span class="accent">{esc(capa['linha2'])}</span></h1>
      <p class="lede">{esc(capa['lede'])}</p>
      <div class="rule"></div>
      <div class="fields">
        <div class="field"><b>Cliente</b><span>{esc(cliente)}</span></div>
        <div class="field" style="text-align:right"><b>Produção</b><span>Lone Mídia</span></div>
      </div>
    </div>
  </section>"""]

    if spec.get("como_gravar"):
        itens = "".join(f"<li>{item}</li>" for item in spec["como_gravar"])
        partes.append(f"""
  <section class="page">{topo(logo_preto, cliente, "Antes de gravar")}
      <span class="eyebrow">Antes de gravar</span>
      <h2 class="title">Como gravar</h2>
      <ul class="lista">{itens}</ul>{rodape(spec["rodape"])}
  </section>""")

    rotulo_acao = spec.get("rotulo_acao", "Cena")
    for r in spec["roteiros"]:
        meta = "".join(f"<div><b>{esc(k)}</b><span>{esc(v)}</span></div>" for k, v in r["meta"])
        cenas = []
        for i, c in enumerate(r["cenas"], 1):
            linha_acao = (
                f'<div class="row"><span class="row-label">{esc(rotulo_acao)}</span><p class="acao">{esc(c["acao"])}</p></div>'
                if c.get("acao") else ""
            )
            chip = f"CENA {i:02d}" + (f" · {esc(c['titulo'])}" if c.get("titulo") else "")
            cenas.append(f"""
      <div class="cena">
        <span class="chip">{chip}</span>
        {linha_acao}
        <div class="row"><span class="row-label">Fala</span><p class="fala">{c["fala"]}</p></div>
      </div>""")
        notas = "".join(
            '<div class="note"><b>' + esc(n["titulo"]) + "</b>"
            + "".join(f"<p>{p}</p>" for p in n["paragrafos"]) + "</div>"
            for n in r.get("notas", [])
        )
        # "quebra_apos": N divide as cenas em duas páginas (a 2ª repete o título, sem a faixa de meta)
        n = r.get("quebra_apos")
        blocos = [cenas[:n], cenas[n:]] if n else [cenas]
        for k, bloco in enumerate(blocos):
            ultimo = k == len(blocos) - 1
            cabeca = f'<div class="meta">{meta}</div>' if k == 0 else ""
            sufixo = "" if k == 0 else " (continuação)"
            partes.append(f"""
  <section class="page">{topo(logo_preto, cliente, "Roteiro de vídeo")}
      <span class="eyebrow">{esc(r["eyebrow"])}</span>
      <h2 class="title">{esc(r["titulo"])}{sufixo}</h2>
      {cabeca}
      {"".join(bloco)}
      {notas if ultimo else ""}{rodape(spec["rodape"])}
  </section>""")

    doc = f"""<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Roteiro · {esc(cliente.title())}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap">
<style>{css_do_template()}</style>
</head>
<body>{"".join(partes)}
</body>
</html>
"""
    with open(saida_html, "w", encoding="utf-8") as f:
        f.write(doc)


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    spec_path, saida_html = sys.argv[1], sys.argv[2]
    with open(spec_path, encoding="utf-8") as f:
        spec = json.load(f)
    montar(spec, saida_html)
    print("HTML:", saida_html)
    if len(sys.argv) > 3:
        saida_pdf = os.path.abspath(sys.argv[3])
        subprocess.run([
            CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
            "--virtual-time-budget=8000", f"--print-to-pdf={saida_pdf}",
            "file://" + os.path.abspath(saida_html),
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print("PDF:", saida_pdf)


if __name__ == "__main__":
    main()
