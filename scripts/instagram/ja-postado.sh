#!/bin/bash
# Confere se um produto já apareceu nos posts recentes de um ou mais perfis do Instagram.
# Sem login, o Instagram só mostra os 12 posts mais recentes de cada perfil (≈ 1 mês).
# Busca na legenda e nas hashtags; produto que só aparece dentro da arte (carrossel/encarte) não é pego.
# Uso: scripts/instagram/ja-postado.sh "perfil1 perfil2" "termo1|termo2" [pasta-cache]
# Ex.:  scripts/instagram/ja-postado.sh "bazarribeiro_marica bazarribeiro_saquarema" "maxi ?ducha|prote ?raio"
set -e
perfis="$1"; termos="$2"; cache="${3:-${TMPDIR:-/tmp}/ig-ja-postado}"
[ -z "$perfis" ] || [ -z "$termos" ] && { sed -n 2,6p "$0"; exit 1; }
raiz="$(cd "$(dirname "$0")/../.." && pwd)"
for u in $perfis; do
  json="$cache/$u/$u.json"
  # Reaproveita a coleta do mesmo dia pra não bater no Instagram a cada consulta.
  if [ ! -f "$json" ] || [ "$(date -r "$json" +%F)" != "$(date +%F)" ]; then
    node "$raiz/scripts/instagram/coletar-perfil.mjs" "$u" "$cache/$u" 12 >/dev/null
  fi
  python3 - "$json" "$termos" <<'EOF'
import json, re, sys, unicodedata
def norm(t): return unicodedata.normalize('NFKD', t or '').encode('ascii', 'ignore').decode().lower()
d = json.load(open(sys.argv[1])); padrao = re.compile(norm(sys.argv[2]))
achados = [p for p in d['posts'] if padrao.search(norm(p.get('legenda')))]
datas = [p.get('data') for p in d['posts'] if p.get('data')]
print(f"== @{d['usuario']} ({len(d['posts'])} posts lidos)")
for p in achados:
    trecho = re.sub(r'\s+', ' ', p.get('legenda') or '')[:140]
    print(f"  JÁ POSTADO {p.get('data')} · {p.get('link', '')}\n    {trecho}")
if not achados: print("  nada encontrado nos posts recentes")
EOF
done
