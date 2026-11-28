// Protótipos v2.1 (26/11): sistema "azul de ponta a ponta" nas cores que a Contele já usa no ar. Uso: node artes-v2.mjs [num...]
// Saída em artes-v2/ (a v1 em Sand/Ink/Sun fica em artes/ pra comparar). Mesmas PECAS e recortes da v1.
// Regra do sistema: todo post no mesmo azul, laranja só no acento, branco no texto. Logo, etiqueta, CTA e WhatsApp em posição fixa.
// v2.1 (PH, 26/11: "tá repetitivo, cadê os sublinhados, coisas menos padrão"): 3 layouts em xadrez no feed.
//  V = vídeo (quarta): foto grande, arco do horizonte com fio laranja e play. Fica na coluna da direita do feed.
//  T = tarja: foto em faixa embaixo do logo e manchete em marca-texto (barra branca + barra laranja), como as artes antigas da Contele.
//  R = recorte: manchete no topo com o final sublinhado em laranja (traço de pincel) e foto num quadro que sangra pra direita, com moldura laranja deslocada.
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { PECAS, recorte } from './artes.mjs';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const OUT=path.join(AQUI,'artes-v2'); fs.mkdirSync(OUT,{recursive:true});
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const FONTE=fs.readFileSync(path.join(AQUI,'../../identidade/fontes/plus-jakarta-sans.css'),'utf8');
// Cores amostradas da grade da Contele (print de PH, 26/11): azul elétrico, índigo das bordas, laranja vivo.
export const C={azul:'#2B37D4',azulClaro:'#3C4BF0',indigo:'#15127A',laranja:'#FC6C00',branco:'#FFFFFF'};
const W=1080,H=1440,M=72;
// Peças sem foto da Contele: cena gerada por IA (PH gerou em 26/11; originais em referencias/2026-11-26-artes-ia-dezembro, recorte em ia/ por ia-recortes.mjs).
// Produto de marca parceira (EcoFlow, BLUETTI) entra com a foto oficial, nunca gerada: o recorte do 09 corta a estação que a IA desenhou.
export const IA={
 '05':'Mesa de trabalho com a planta elétrica de uma casa impressa, pasta de documentos, capacete branco e celular. Luz de janela. Sem logo da Enel e sem painel em close.',
 '08':'Casa térrea da Região dos Lagos no fim da tarde, telhado de cerâmica ainda sem painéis, sol baixo e luz acesa na varanda.',
 '09':'Sala à noite com a rua apagada lá fora: luminária, roteador com as luzes acesas e câmera na parede. As estações entram com a foto oficial de cada marca.',
};
const IAFOTO=Object.fromEntries(Object.keys(IA).filter(n=>fs.existsSync(path.join(AQUI,'ia',n+'.jpg'))).map(n=>[n,'data:image/jpeg;base64,'+fs.readFileSync(path.join(AQUI,'ia',n+'.jpg')).toString('base64')]));
export const LAYOUT={'01':'V','04':'V','07':'V','10':'V','03':'T','05':'T','09':'T','11':'T','02':'R','06':'R','08':'R','12':'R'};
const fotoBg=(p,w,h)=>IAFOTO[p.n]?`background:url(${IAFOTO[p.n]}) center/cover no-repeat`:recorte(p.foto,w,h);
const PINCEL='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 30" preserveAspectRatio="none"><path d="M3 18 C 70 8, 170 6, 297 12 L 295 24 C 175 18, 85 21, 5 28 Z" fill="#FC6C00"/></svg>');
const CSS=`${FONTE}*{box-sizing:border-box;margin:0}
body{width:${W}px;height:${H}px;overflow:hidden;position:relative;font-family:'Plus Jakarta Sans',sans-serif;color:${C.branco};
 background:radial-gradient(120% 90% at 78% 8%,${C.azulClaro} 0%,${C.azul} 42%,${C.indigo} 100%)}
.foto{position:absolute;left:0;top:0;width:${W}px}
.sombra{position:absolute;left:0;top:0;width:${W}px;height:300px;background:linear-gradient(rgba(21,18,122,.78),rgba(21,18,122,0))}
.arco{position:absolute;width:2700px;height:2700px;left:${(W-2700)/2}px;border-radius:50%;border-top:9px solid ${C.laranja};
 background:radial-gradient(120% 40% at 70% 0%,${C.azulClaro} 0%,${C.azul} 30%,${C.indigo} 70%)}
.sol{position:absolute;border-radius:50%;background:${C.laranja}}
.logo{position:absolute;z-index:5;left:${M}px;top:${M-6}px;display:flex;align-items:center;gap:14px}
.logo img{width:66px;height:66px;display:block}
.logo b{display:block;font:800 40px/1 'Plus Jakarta Sans';letter-spacing:.02em}.logo small{display:block;font:500 17px/1 'Plus Jakarta Sans';letter-spacing:.18em;opacity:.85;margin-top:5px}
.k{position:absolute;z-index:5;right:${M}px;top:${M+6}px;font:700 22px/1 'Plus Jakarta Sans';letter-spacing:.14em;text-transform:uppercase;
 background:rgba(21,18,122,.55);padding:12px 16px;border-radius:6px}
h1{position:absolute;z-index:4;left:${M}px;right:${M}px;font-weight:800;line-height:1.04;letter-spacing:-.015em;text-wrap:balance}
h1 .kk{display:block;font:700 24px/1 'Plus Jakarta Sans';letter-spacing:.14em;text-transform:uppercase;color:${C.laranja};margin-bottom:30px}
h1 .a{color:${C.laranja};display:block}
.ap{position:absolute;z-index:4;left:${M}px;right:180px;font:500 32px/1.34 'Plus Jakarta Sans';opacity:.88}
.pe{position:absolute;z-index:5;left:${M}px;right:${M}px;bottom:${M}px;display:flex;justify-content:space-between;align-items:center;font:600 26px/1 'Plus Jakarta Sans'}
.pe .cta{font:700 30px/1 'Plus Jakarta Sans';display:flex;align-items:center;gap:16px}
.pe .cta i{width:60px;height:60px;border-radius:50%;background:${C.laranja};display:grid;place-items:center}
.pe .h{opacity:.75;font-weight:500}
.play{position:absolute;z-index:5;right:${M+10}px;width:118px;height:118px;border-radius:50%;background:${C.laranja};display:grid;place-items:center;box-shadow:0 10px 30px rgba(0,0,0,.25)}
.marcas{position:absolute;z-index:4;left:${M}px;right:${M}px;display:grid;grid-template-columns:1fr 1fr;gap:22px}
.marcas div{border:2px solid rgba(255,255,255,.7);border-radius:10px;padding:30px 0;text-align:center;font:800 42px/1 'Plus Jakarta Sans';letter-spacing:.02em}
.selo{position:absolute;z-index:5;background:${C.laranja};font:800 30px/1 'Plus Jakarta Sans';letter-spacing:.06em;padding:18px 24px;border-radius:6px}
/* T: tarja */
.banda{position:absolute;left:0;top:172px;width:${W}px;border-bottom:6px solid ${C.laranja}}
.banda:after{content:"";position:absolute;left:0;right:0;bottom:0;height:45%;background:linear-gradient(rgba(21,18,122,0),rgba(21,18,122,.5))}
h1.tj{line-height:1.38;letter-spacing:-.01em}.tj div{display:block;text-wrap:balance}
.tj span{box-decoration-break:clone;-webkit-box-decoration-break:clone;padding:.03em .22em .07em;border-radius:4px}
.tj .b span{background:${C.branco};color:${C.indigo}}.tj .l span{background:${C.laranja};color:${C.branco}}
/* R: recorte com sublinhado de pincel */
h1.rc .aw{text-wrap:balance}h1.rc .a{color:${C.branco};display:inline;background:url("${PINCEL}") left 100%/100% .36em no-repeat;box-decoration-break:clone;-webkit-box-decoration-break:clone;padding-bottom:.1em}
.quadro,.moldura{position:absolute;left:${M}px;width:${W-M}px;border-radius:26px 0 0 26px}
.quadro{z-index:2;box-shadow:0 22px 50px rgba(10,8,70,.35)}
.moldura{z-index:1;border:4px solid ${C.laranja};border-right:0;transform:translate(-22px,22px)}
`;
const seta=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg>`;
// Seta pra baixo: CTA que manda pra legenda (assunto que precisa de explicação, PH 26/11)
const setaBaixo=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M5 13l7 7 7-7"/></svg>`;
const SIMBOLO='data:image/png;base64,'+fs.readFileSync(path.join(AQUI,'../../identidade/logo-simbolo.png')).toString('base64');
const logo=`<div class="logo"><img src="${SIMBOLO}" alt=""><div><b>CONTELE</b><small>SOLAR ENERGY</small></div></div>`;
function html(p){
 const pe=(cta)=>`<div class="pe">${cta?`<div class="cta"><i>${/legenda/i.test(cta)?setaBaixo:seta}</i>${cta}</div>`:'<span class="h">@contelesolarenergy</span>'}<span class="h">${cta?'(22) 98806-0342':''}</span></div>`;
 const sz=Math.round((p.sz||84)*.78);
 const extras=`${p.ap?`<div class="ap" data-ap>${p.ap}</div>`:''}${p.marcas?`<div class="marcas" data-marcas><div>EcoFlow</div><div>BLUETTI</div></div>`:''}`;
 const L=LAYOUT[p.n];
 let corpo='';
 if(L==='V'){ // quarta: foto grande, arco baixo, play laranja no fio (posição final calculada no render)
  const fh=1000, at=900;
  corpo=`<div class="foto" data-foto style="height:${fh}px;${recorte(p.foto,W,1100)}${p.escuro?';filter:brightness(.5) saturate(.8)':''}"></div><div class="sombra"></div>
  <div class="arco" data-arco style="top:${at}px"></div><div class="play" data-play style="top:${at-50}px"><svg width="46" height="46" viewBox="0 0 24 24" fill="#fff"><path d="M7 4v16l13-8z"/></svg></div>
  <h1 data-h data-v style="top:${at+80}px;font-size:${Math.min(sz,62)}px;right:${M+20}px">${p.h} <span class="a">${p.a}</span></h1>${pe('')}`;
 } else if(L==='T'){ // tarja: faixa de foto + manchete em marca-texto
  const tz=Math.round((p.sz||84)*.64);
  corpo=`<div class="banda" data-banda style="height:600px;${fotoBg(p,W,760)}${p.tema==='natal'?';filter:saturate(1.05) brightness(.97)':''}"></div>
  <h1 class="tj" data-h data-t style="font-size:${tz}px;right:${M+30}px"><div class="b"><span>${p.h}</span></div><div class="l"><span>${p.a}</span></div></h1>
  ${extras}${pe(p.cta)}`;
 } else { // R: manchete no topo com sublinhado de pincel + foto em quadro
  corpo=`<h1 class="rc" data-h data-r style="top:196px;font-size:${sz}px">${p.h}<div class="aw"><span class="a">${p.a}</span></div></h1>
  ${extras}<div class="moldura" data-q></div><div class="quadro" data-q style="${fotoBg(p,W-M,660)}"></div>
  ${p.alt?`<div class="selo" data-selo style="left:${M+30}px;transform:rotate(-4deg)">2026</div>`:''}${pe(p.cta)}`;
 }
 return `<!doctype html><meta charset="utf-8"><style>${CSS}</style><body>${logo}<div class="k">${p.k.split(' · ')[0]}</div>${corpo}</body>`;
}
// posiciona cada layout a partir do rodapé e devolve aviso se algo apertar
function montar(){
 const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)], r=e=>e.getBoundingClientRect();
 const h=q('[data-h]'), ap=q('[data-ap]'), m=q('[data-marcas]'), peTop=r(q('.pe')).top;
 const abaixo=(y)=>{if(ap){ap.style.top=y+'px';y=r(ap).bottom+40}if(m){m.style.top=y+'px';y=r(m).bottom}return y};
 if(h.hasAttribute('data-v')){
  const top=peTop-80-r(h).height, arco=top-150; h.style.top=top+'px';
  qa('[data-arco]').forEach(e=>e.style.top=arco+'px'); qa('[data-foto]').forEach(e=>e.style.height=(arco+130)+'px'); qa('[data-play]').forEach(e=>e.style.top=(arco-50)+'px');
  return '';
 }
 if(h.hasAttribute('data-t')){
  const bh=r(h).height+(ap?30+r(ap).height:0)+(m?40+r(m).height:0);
  const top=peTop-70-bh; h.style.top=top+'px';
  const linha=parseFloat(getComputedStyle(h).fontSize)*1.38; const banda=q('[data-banda]'); const alt=Math.round(top+linha*.55-172); banda.style.height=alt+'px';
  const y=abaixo(r(h).bottom+30);
  return alt<400?`faixa de foto baixa (${alt}px)`:(y>peTop-24?'passa do rodapé':'');
 }
 const y=abaixo(r(h).bottom+30)+(ap||m?14:22);
 const alt=Math.round(peTop-56-y); qa('[data-q]').forEach(e=>{e.style.top=y+'px';e.style.height=alt+'px'});
 const selo=q('[data-selo]'); if(selo)selo.style.top=(y-28)+'px';
 return alt<400?`quadro de foto baixo (${alt}px)`:'';
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const so=process.argv.slice(2); const b=await chromium.launch({channel:'chrome'}); const pg=await b.newPage({viewport:{width:W,height:H}});
 for(const p of PECAS){ if(so.length&&!so.includes(p.n))continue; await pg.setContent(html(p)); await pg.evaluate(()=>document.fonts.ready);
  const prob=await pg.evaluate(montar); if(prob)console.log(p.n,prob);
  await pg.screenshot({path:`${OUT}/${p.n}.jpg`,type:'jpeg',quality:88}); }
 const g=[...PECAS].reverse().map(p=>`<img src="data:image/jpeg;base64,${fs.readFileSync(`${OUT}/${p.n}.jpg`).toString('base64')}" style="width:100%;display:block">`).join('');
 await pg.setViewportSize({width:1200,height:2140}); await pg.setContent(`<body style="margin:0;background:#fff;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;align-content:start">${g}`); await pg.waitForTimeout(400); await pg.screenshot({path:`${OUT}/feed.jpg`,type:'jpeg',quality:85});
 await b.close();
}
