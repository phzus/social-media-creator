// Documento do cliente: gera HTML (tela + impressão) e PDF. Uso: node doc.mjs
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { PECAS, recorte } from './artes.mjs'; import { C } from './artes-v2.mjs'; import { T,SEM,SLIDES,VIDEO,ARTE } from './textos.mjs';
const AQUI=path.dirname(fileURLToPath(import.meta.url)), SAIDA=path.join(AQUI,'..');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const b64=(f,t)=>`data:${t};base64,`+fs.readFileSync(f).toString('base64');
const A=Object.fromEntries(PECAS.map(p=>[p.n,b64(`${AQUI}/artes-v2/${p.n}.jpg`,'image/jpeg')]));
const FONTE=fs.readFileSync(path.join(AQUI,'../../identidade/fontes/plus-jakarta-sans.css'),'utf8');
const simbolo=b64(path.join(AQUI,'../../identidade/logo-simbolo.png'),'image/png');
const lone=b64(path.join(AQUI,'../../../../shared/identidade-lone/lone-midia-logo-branco-azul.png'),'image/png');
const P=Object.fromEntries(PECAS.map(p=>[p.n,p]));
const ol=p=>`${p.h} ${p.a}`;
const vars=Object.entries(A).map(([n,u])=>`--i${n}:url(${u})`).join(';');
const IC={carrossel:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10a3 3 0 0 1 3 3v10" fill="none" stroke="#fff" stroke-width="2.4"/></svg>',video:'<svg viewBox="0 0 24 24"><path d="M6 3.5v17l15-8.5z"/></svg>',arte:''};
const art=(n,c='')=>`<div class="art ${c}" role="img" aria-label="Arte de ${P[n].d}: ${ol(P[n])}" style="background-image:var(--i${n})">${c==='g'?`<i>${IC[P[n].tipo]}</i>`:''}</div>`;
const FT={arte:'Arte única',carrossel:'Carrossel',video:'Vídeo'};
const DIA={seg:'segunda',qua:'quarta',sex:'sexta'};
const linhas=[1,2,3,4,5].map(s=>{const ps=PECAS.filter(p=>T[p.n].sem===s);const cel=d=>{const p=ps.find(p=>T[p.n].dia===d);return p?`<div class="cel">${art(p.n)}<div><b>${p.d}</b><span>${T[p.n].eq}</span></div></div>`:`<div class="cel vazio">${s===5&&d==='qua'?'<span class="sp">30/12 sem post</span>':''}</div>`};return `<div class="sem"><div class="semt"><b>${SEM[s][0]}</b><span>${SEM[s][1]}</span></div>${cel('seg')}${cel('qua')}${cel('sex')}</div>`}).join('');
const paras=t=>t.split('\n\n').map(x=>`<p>${x.replace(/\n/g,'<br>')}</p>`).join('');
const esq=n=>{const p=P[n];
 if(SLIDES[n])return `<div><b>Slides</b><ol class="sl">${SLIDES[n].map(x=>`<li>${x}</li>`).join('')}</ol></div>`;
 if(VIDEO[n])return `<div><b>Briefing do vídeo</b>${VIDEO[n].brief.map(x=>`<p>${x}</p>`).join('')}<p class="mo"><em>Plano B</em> ${VIDEO[n].motion}</p></div>`;
 if(ARTE[n])return `<div><b>Texto da arte</b><p class="ta">${ARTE[n][0]}</p><p>${ARTE[n][1]}</p></div>`;
 return '';};
const cards=PECAS.map(p=>{const t=T[p.n];return `<article class="card">${art(p.n)}<div class="ct"><div class="cab"><b>${p.d}</b><span>${DIA[t.dia]}</span><em>${FT[p.tipo]}</em></div><h3>${t.eq}</h3><p class="obj">${t.obj}</p><div class="leg">${esq(p.n)}<div><b>Legenda</b>${paras(t.leg)}<p class="tg">${t.tags}</p></div></div></div></article>`}).join('');
// foto da capa pré-recortada em arquivo (o recorte por offset sai deslocado no PDF)
const nav=await chromium.launch({channel:'chrome'});{const pc=await nav.newPage({viewport:{width:600,height:794}});
 await pc.setContent(`<body style="margin:0"><div style="width:600px;height:794px;${recorte('casal',600,794)}"><div style="width:600px;height:794px;background:linear-gradient(90deg,#15127A 0%,rgba(21,18,122,.6) 30%,rgba(21,18,122,0) 65%)"></div></div>`);await pc.waitForTimeout(200);
 await pc.screenshot({path:`${AQUI}/artes-v2/capa.jpg`,type:'jpeg',quality:85});await pc.close();}
const capaFoto=b64(`${AQUI}/artes-v2/capa.jpg`,'image/jpeg');
const html=`<title>Dezembro da Contele</title>
<style>
/* sistema v2 da Contele (26/11): azul de ponta a ponta, laranja no acento, Plus Jakarta Sans sem caixa alta; no papel vira A4 deitado */
${FONTE}
:root{--ink:#15127A;--sand:#FFFFFF;--sun:#FC6C00;--deep:#2B37D4;--sea:#6b74c9;--azul:#2B37D4;--papel:#F6F7FF;--cinza:#5b6178;--linha:#dfe2f5;${vars}}
*{box-sizing:border-box}body{background:var(--papel);color:var(--ink);font:400 16px/1.5 'Plus Jakarta Sans',system-ui,sans-serif;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}
h1,h2,h3,p{margin:0}h1,h2{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;letter-spacing:-.02em;line-height:1.05;text-wrap:balance}
.mono{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.in{max-width:1120px;margin:0 auto;padding-left:max(20px,env(safe-area-inset-left,0px));padding-right:max(20px,env(safe-area-inset-right,0px))}
.capa{position:relative;background:radial-gradient(120% 120% at 30% 0%,#3C4BF0,#2B37D4 45%,#15127A);color:var(--sand);overflow:hidden}
.capa .ft{position:absolute;left:46%;top:0;height:100%;width:54%;object-fit:cover;object-position:left center;display:block}
.capa .in{position:relative;padding-block:52px 46px;display:grid;gap:24px}
.capa .k{color:var(--sun);font-size:15px}.capa h1{font-size:clamp(52px,8.4vw,100px);max-width:7.5em}.capa h1 span{color:var(--sun)}.capa p{font-size:20px;max-width:27em}
.capa .lg{display:flex;align-items:center;gap:18px;margin-top:16px}.capa .lone{height:30px}.capa .lg span{font-size:13px;opacity:.75}
section{padding-block:56px}section+section{border-top:1px solid var(--linha)}
h2{font-size:clamp(36px,4.6vw,54px);margin-bottom:10px}h2 span{color:var(--sun)}.sub{font-size:18px;color:var(--cinza);max-width:42em;margin-bottom:28px}
.tres{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px}.tres h3{font:800 30px/1.05 'Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;margin-bottom:8px}.tres h3 i{color:var(--deep)}
.tres .mono{display:block;font-size:12px;color:var(--deep);margin-bottom:6px}
.art{position:relative;aspect-ratio:3/4;background-size:cover;background-position:center;width:100%;max-width:100%}.art i{position:absolute;right:5px;top:4px;width:15px;height:15px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.55))}.art i svg{width:100%;display:block;fill:#fff}
.prev{display:grid;grid-template-columns:minmax(0,470px) minmax(0,1fr);gap:56px;align-items:start}
.fone{background:#fff;border:1px solid var(--linha);border-radius:26px;overflow:hidden;box-shadow:0 18px 50px rgba(14,30,51,.16)}
.ig{display:grid;grid-template-columns:84px 1fr;gap:18px;padding:22px 20px 16px;align-items:center}.av{width:84px;height:84px;border-radius:50%;border:1px solid var(--linha);background:#fff url(${simbolo}) center/62% no-repeat}
.ig b{display:block;font-size:17px}.ig span{display:block;font-size:14px;color:var(--cinza);line-height:1.35}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.regras{display:grid;gap:20px}.regras b{display:block;font-size:19px}.regras p{color:var(--cinza);max-width:32em}
.sw{display:flex;gap:8px;margin-top:8px}.sw i{width:34px;height:20px;display:block;border:1px solid var(--linha)}
.sem{display:grid;grid-template-columns:1.25fr 1fr 1fr 1fr;gap:16px;align-items:center;padding-block:14px;border-top:1px solid var(--linha)}.sem.th{border:0;padding-block:0 8px;font-weight:600;color:var(--deep)}
.semt b{display:block;font:800 22px/1.1 'Plus Jakarta Sans',sans-serif;letter-spacing:-.01em}.semt span{color:var(--cinza);font-size:15px}
.cel{display:grid;grid-template-columns:64px minmax(0,1fr);gap:12px;align-items:center;font-size:14px;line-height:1.3}.cel b{display:block;font-size:16px}.cel span{color:var(--cinza)}.sp{font-size:13px;color:var(--cinza)}
.cards{display:grid;gap:40px}.card{display:grid;grid-template-columns:minmax(0,300px) minmax(0,1fr);gap:34px;align-items:start}
.cab{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:baseline;margin-bottom:6px}.cab b{font:800 24px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.02em}.cab span{color:var(--cinza)}.cab em{font-style:normal;font-weight:600;font-size:13px;background:#ffe7d6;color:#a14400;padding:3px 10px}
.card h3{font:800 25px/1.1 'Plus Jakarta Sans',sans-serif;letter-spacing:-.01em;margin-bottom:4px}.obj{color:var(--cinza);margin-bottom:14px}
.leg{border-top:1px solid var(--linha);padding-top:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:26px}.leg>div{display:grid;gap:6px;align-content:start}.leg b{color:var(--deep);font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
.sl{margin:0;padding-left:20px;display:grid;gap:5px}.ta{font:700 19px/1.25 'Plus Jakarta Sans',sans-serif}.mo{background:#eceefe;padding:8px 10px;margin-top:4px}.mo em{font-style:normal;font-weight:600}.tg{color:var(--sea);font-size:13px}
.nota{color:var(--cinza);font-size:14px;margin-top:22px}
.lista{display:grid;gap:12px;padding:0;margin:0;list-style:none;max-width:56em}.lista li{display:grid;grid-template-columns:26px 1fr;gap:12px;align-items:start}.lista li:before{content:"";width:18px;height:18px;border:2px solid var(--sun);margin-top:3px}.lista li em{font-style:normal;font:700 .85em 'Plus Jakarta Sans',sans-serif;color:var(--sun);white-space:nowrap;margin-left:6px}
@media screen and (max-width:820px){.prev{grid-template-columns:1fr;gap:32px}.card{grid-template-columns:1fr;gap:16px}.card .art{max-width:340px}.sem{grid-template-columns:1fr}.sem.th{display:none}.cel.vazio{display:none}.capa .ft{inset:0;opacity:.35}}
@page{size:A4 landscape;margin:0}
@media print{body{background:#fff;font-size:10pt}.in{max-width:none;padding:0 14mm!important}
 section,.capa{break-before:page;page-break-before:always;break-inside:avoid;border:0!important;padding-block:11mm 0}.capa{min-height:209.5mm;break-before:auto;page-break-before:auto;display:grid;align-items:center;padding:0}
 .capa .in{width:100%}h2{font-size:30pt;margin-bottom:2mm}.sub{font-size:12pt;margin-bottom:5mm}
 .prev{grid-template-columns:97mm 1fr;gap:18mm}.fone{box-shadow:none}.ig{padding:3mm 5mm 2.5mm;grid-template-columns:14mm 1fr}.av{width:14mm;height:14mm}.ig span{font-size:8.5pt}
 .regras{gap:3.4mm}.sem{grid-template-columns:1.25fr 1fr 1fr 1fr;padding-block:1.7mm}.tres{gap:8mm}.semt b{font-size:16pt}.cel{font-size:9.5pt}.sem .cel .art{width:15mm}.sem.th{display:grid}.cel{grid-template-columns:15mm 1fr}.cel.vazio{display:block}
 .pecas{padding-block:11mm 0}.cards{display:block}.card{grid-template-columns:58mm 1fr;gap:8mm;height:92mm;overflow:hidden;break-inside:avoid;page-break-inside:avoid;margin:0 0 5mm}.card .art{height:77.3mm;width:58mm}
 .leg{grid-template-columns:1fr 1fr;gap:7mm;font-size:8.3pt;line-height:1.3;padding-top:2mm}.leg>div{gap:1.2mm}.obj{margin-bottom:2mm;font-size:9.5pt}.card h3{font-size:16pt}.cab b{font-size:15pt}.ta{font-size:11pt}.tg{font-size:7.5pt}.leg b{font-size:7.5pt}
 .card:nth-child(2n){break-after:page;page-break-after:always;margin-bottom:0}.card:last-child{break-after:auto;page-break-after:auto}.card:nth-child(2n+1):not(:first-child){margin-top:11mm}
 .pecas .head{display:none}.lista{font-size:10.5pt;gap:2.4mm;max-width:none}.lista li{grid-template-columns:8mm 1fr}.nota{font-size:10pt}.regras b{font-size:14pt}.regras p{font-size:11pt}}
</style>
<div class="capa"><img class="ft" src="${capaFoto}" alt=""><div class="in"><span class="k mono">Contele Solar · Região dos Lagos</span><h1>Planejamento de <span>dezembro</span></h1><p>12 publicações para o começo do verão: 3 carrosséis, 4 vídeos e 5 artes.</p><div class="lg"><img class="lone" src="${lone}" alt="Lone Mídia"><span>Material para aprovação · versão 2</span></div></div></div>
<section><div class="in"><h2>Como o mês <span>funciona</span></h2><p class="sub">Dezembro mostra trabalho real da Contele na região e fala com quem já conhece vocês. Toda semana anda em três passos e termina numa conversa no WhatsApp.</p>
<div class="tres"><div><span class="mono">Segunda</span><h3><i>Descobre</i></h3><p>Uma dúvida ou uma situação da casa, e o que a Contele faz por ela.</p></div><div><span class="mono">Quarta</span><h3><i>Vê funcionando</i></h3><p>Vídeo com a equipe, a obra ou um cliente. Se não der pra gravar, o vídeo sai em motion com fotos reais de vocês.</p></div><div><span class="mono">Sexta</span><h3><i>Fecha</i></h3><p>Um motivo pra chamar agora: limpeza, homologação, orçamento parado. No Natal, só a mensagem da equipe.</p></div></div>
<div style="margin-top:34px"><div class="sem th"><div>Tema da semana</div><div>Segunda</div><div>Quarta</div><div>Sexta</div></div>${linhas}</div></div></section>
<section><div class="in"><div class="prev"><div class="fone"><div class="ig"><div class="av" role="img" aria-label="Logo da Contele"></div><div><b>contelesolarenergy</b><span>Contele - Energia Solar na Região dos Lagos<br>+ de 700 sistemas montados</span></div></div><div class="grid">${[...PECAS].reverse().map(p=>art(p.n,'g')).join('')}</div></div>
<div><h2>Prévia do <span>feed</span></h2><p class="sub">Assim fica o perfil no fim do mês, do mais novo pro mais antigo.</p><div class="regras">
<div><b>O azul da Contele em todo post</b><p>As cores que vocês já usam, agora com regra: fundo azul sempre, laranja só no destaque. O perfil fica reconhecível de longe.</p><div class="sw"><i style="background:#2B37D4"></i><i style="background:#15127A"></i><i style="background:#FC6C00"></i><i style="background:#fff"></i></div></div>
<div><b>Três formatos que se alternam</b><p>Vídeo com o arco laranja, frase em marca-texto sobre a foto e frase com o final sublinhado ao lado de uma foto emoldurada. O feed fica organizado sem ficar repetido.</p></div>
<div><b>Frase direta, com o destaque marcado</b><p>Sem caixa alta e sem excesso de texto. O marca-texto e o sublinhado laranja apontam a parte que importa, e dá pra ler passando o dedo.</p></div>
<div><b>Obra e equipe de verdade</b><p>Fotos e vídeos da Contele, de telhados da região. Nas peças sem foto de vocês, nosso designer produz a imagem da cena.</p></div>
<div><b>Logo no topo, WhatsApp no rodapé</b><p>O tema da peça fica em cima e o número aparece pequeno embaixo, sem tarja.</p></div>
<div><b>As duas marcas juntas</b><p>EcoFlow e BLUETTI aparecem sempre lado a lado, no mesmo tamanho.</p></div></div>
<p class="nota">As imagens são protótipos montados com quadros dos vídeos de vocês. A foto final de cada peça sai das fotos e gravações de dezembro. Em 04, 11, 18 e 21/12 a cena é produzida pelo nosso designer, e em 21/12 as estações entram com a foto oficial da EcoFlow e da BLUETTI.</p></div></div></div></section>
<section class="pecas"><div class="in"><div class="head"><h2>As 12 <span>publicações</span></h2><p class="sub">Arte, objetivo e texto de cada uma.</p></div><div class="cards">${cards}</div></div></section>
<section><div class="in"><h2>O que precisamos <span>de vocês</span></h2><p class="sub">Com isso, dezembro começa no dia 2.</p><ul class="lista">
<li><span>Aprovação do padrão visual e dos textos. <em>até 30/11</em></span></li>
<li><span>Quem grava em dezembro e quantos vídeos dá pra fazer (02, 09, 16 e 23/12). Sem gravação, a quarta sai em motion com fotos reais de vocês. <em>até 27/11</em></span></li>
<li><span>Os vídeos originais das instalações já publicadas (Ocean Park, Casa do Dragão, São Pedro da Aldeia e Búzios). <em>até 30/11</em></span></li>
<li><span>Indique e Ganhe: valor da comissão, quando é paga e quem atende a indicação. <em>até 30/11</em></span></li>
<li><span>Fechando o projeto em dezembro, quando o sistema começa a gerar (16 e 18/12). E se vocês fazem ampliação pra quem já tem placa e comprou ar novo (04/12). <em>até 02/12</em></span></li>
<li><span>Projetos reais (07/12): quais obras entram, com cidade, potência, conta antes e depois e a autorização do cliente. <em>até 02/12</em></span></li>
<li><span>Etapas da homologação na Enel, pra conferir o texto de 11/12. <em>até 07/12</em></span></li>
<li><span>O que a visita técnica avalia no telhado (14/12). <em>até 09/12</em></span></li>
<li><span>Como responder quem recebeu orçamento antes do reajuste dos kits (18/12). <em>até 14/12</em></span></li>
<li><span>Estações EcoFlow e BLUETTI: quais modelos seguram câmera, roteador e luz, e fotos das duas (21 e 23/12). <em>até 14/12</em></span></li>
<li><span>Fotos das obras de 2026, com a cidade de cada uma (28/12). <em>até 18/12</em></span></li></ul>
<p class="nota">Nos stories: horário de Natal e Réveillon, quando vocês confirmarem.</p></div></section>`;
const base='2026-11-26-planejamento-dezembro';
const doc=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${html}</body></html>`;
fs.writeFileSync(`${SAIDA}/${base}.html`,doc);
const b=nav; const pg=await b.newPage({viewport:{width:1200,height:850}});
await pg.setContent(doc,{waitUntil:'load'}); await pg.evaluate(()=>document.fonts.ready); await pg.waitForTimeout(500);
await pg.emulateMedia({media:'print'});
const cortado=await pg.evaluate(()=>[...document.querySelectorAll('.card')].filter(c=>c.scrollHeight>c.clientHeight+2).map(c=>c.querySelector('.cab b').textContent+' (+'+(c.scrollHeight-c.clientHeight)+'px)'));
if(cortado.length)console.log('card cortado no PDF:',cortado.join(', '));
await pg.pdf({path:`${SAIDA}/${base}.pdf`,preferCSSPageSize:true,printBackground:true}); await b.close();
