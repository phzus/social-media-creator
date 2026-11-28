// Protótipos 1080x1440 das 12 peças de dezembro da Contele. Uso: node artes.mjs [num...]
// Sistema do PADROES (aprovado em julho): Sand, Ink e Sun, serif itálico sem caixa alta, mono pra local e data,
// sem tarja de telefone. Segunda Sand (descobre), quarta capa de vídeo com foto real e faixa Ink, sexta Ink (fecha).
// Fotos: recortes da coleta do Instagram de 25/11 (frames da própria Contele, baixa resolução). A foto final vem do Drive ou da gravação.
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const COL=path.join(AQUI,'../../referencias/2026-11-25-coleta-instagram');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const b64=f=>'data:image/jpeg;base64,'+fs.readFileSync(path.join(COL,f)).toString('base64');
const REELS=b64('contelesolarenergy-aba-reels.jpg'), CASAL=b64('contelesolarenergy-post-02.jpg');
// recortes [imagem, x, y, largura, altura, largura natural, altura natural] em px da imagem original
const R=(x,y,w,h)=>[REELS,x,y,w,h,1019,3271];
export const FOTOS={
 casal:[CASAL,0,150,640,490,640,640],
 telhadoAereo:R(286,572,228,215),      // prédio com painéis, aba Reels (sem texto)
 telhadoTerraco:R(520,2025,226,300),   // painéis no terraço (171 mil views)
 carregandoPainel:R(520,935,226,215),  // instalador levando painel (sistemas instalados)
 casaComPainel:R(752,1295,230,185),    // casa com painéis no telhado
 vendedorCliente:R(286,2025,226,300),  // Vinicius com cliente (70,5 mil)
 equipe:R(752,2388,230,320),           // dois da equipe na frente de painéis
 logo:R(752,2810,232,300),
};
export const PECAS=[
 {n:'01',d:'02/12',tipo:'video',k:'Indique e Ganhe · Região dos Lagos',h:'Quantas pessoas já te perguntaram',a:'se energia solar vale a pena?',foto:'casal',sz:74},
 {n:'02',d:'04/12',tipo:'arte',tema:'ink',k:'Ar-condicionado novo · verão',h:'Comprou ar-condicionado na Black Friday?',a:'Ele vai aparecer na conta de janeiro.',ap:'Simule seu projeto solar já contando o ar novo.',cta:'Chame no WhatsApp',foto:'telhadoTerraco',sz:92,fh:480},
 {n:'03',d:'07/12',tipo:'carrossel',tema:'sand',k:'Projetos reais · Região dos Lagos',h:'Você pode encontrar nosso trabalho',a:'nos telhados da Região dos Lagos.',cta:'Arraste pro lado',foto:'telhadoAereo',sz:92},
 {n:'04',d:'09/12',tipo:'video',k:'Bastidores · instalação',h:'Você conhece quem vai subir',a:'no telhado da sua casa?',foto:'carregandoPainel'},
 {n:'05',d:'11/12',tipo:'arte',tema:'ink',k:'Projeto e homologação · Enel',h:'Sua preocupação deve ser a economia.',a:'Não a burocracia.',ap:'Do projeto à homologação junto à Enel, conte com a equipe da Contele.',cta:'Veja as etapas na legenda',sz:104},
 {n:'06',d:'14/12',tipo:'carrossel',tema:'sand',k:'Antes do orçamento · visita técnica',h:'Será que o seu telhado',a:'serve para energia solar?',cta:'Arraste pro lado',foto:'casaComPainel',sz:104},
 {n:'07',d:'16/12',tipo:'video',k:'Verão · ar ligado',h:'Quanto vai custar o seu verão',a:'com o ar ligado?',foto:'vendedorCliente'},
 {n:'08',d:'18/12',tipo:'arte',tema:'ink',k:'Orçamentos de 2026 · verão',h:'O orçamento ficou pra depois.',a:'O verão, não.',ap:'Já pediu orçamento em 2026? A gente refaz o cálculo com o ar-condicionado.',cta:'Veja como na legenda',sz:108},
 {n:'09',d:'21/12',tipo:'arte',tema:'sand',k:'Estação de energia · quando a luz cai',h:'Quando a luz acaba, o que não pode',a:'parar na sua casa?',ap:'Conheça as estações de energia EcoFlow e BLUETTI.',marcas:true,cta:'Garanta a sua com a Contele',sz:100},
 {n:'10',d:'23/12',tipo:'video',k:'EcoFlow e BLUETTI · demonstração',h:'O que acontece com a sua casa',a:'quando falta luz?',foto:'casaComPainel',escuro:true},
 {n:'11',d:'25/12',tipo:'arte',tema:'natal',k:'25 de dezembro',h:'A melhor parte da casa',a:'é quem está dentro dela.',ap:'Feliz Natal. Da equipe Contele para a sua família.',foto:'equipe',sz:92},
 {n:'12',d:'28/12',tipo:'carrossel',tema:'sand',k:'2026 · obras da região',h:'2026. Um ano de trabalho',a:'nos telhados da nossa região.',cta:'Arraste pro lado',foto:'telhadoAereo',sz:100,alt:true},
];
// desenha um recorte como fundo de um elemento de w×h px (cover)
export function recorte(nome,w,h,pos='center'){const [src,x,y,cw,ch,nw,nh]=FOTOS[nome];const s=Math.max(w/cw,h/ch);const ox=x*s+(cw*s-w)/2,oy=y*s+(ch*s-h)/2;
 return `background:url(${src}) -${ox.toFixed(1)}px -${oy.toFixed(1)}px/${(nw*s).toFixed(1)}px ${(nh*s).toFixed(1)}px no-repeat`}
const C={ink:'#0E1E33',sand:'#F5EEE0',sun:'#E8A233',deep:'#C57E1D',sea:'#6D96B0'};
const CSS=`*{box-sizing:border-box;margin:0}body{width:1080px;height:1440px;overflow:hidden;position:relative;font-family:'Segoe UI',system-ui,sans-serif}
.sand{background:${C.sand};color:${C.ink}}.ink,.video,.natal{background:${C.ink};color:${C.sand}}
.k{position:absolute;z-index:5;left:80px;top:80px;font:500 26px/1 Consolas,monospace;letter-spacing:.12em;text-transform:uppercase}
.sand .k{color:${C.deep}}.ink .k,.video .k,.natal .k{color:${C.sun}}
.d{position:absolute;z-index:5;right:80px;top:80px;font:500 26px/1 Consolas,monospace;letter-spacing:.12em;opacity:.7}
h1{position:absolute;left:80px;right:80px;font-family:'Palatino Linotype',Palatino,Georgia,serif;font-style:italic;font-weight:400;line-height:1.04;letter-spacing:-.5px;text-wrap:balance}
h1 .a{color:${C.sun};display:block}.sand h1 .a{color:${C.deep}}
.ap{position:absolute;left:80px;right:180px;font:400 34px/1.32 'Segoe UI',sans-serif;opacity:.9}
.pe{position:absolute;left:80px;right:80px;bottom:80px;display:flex;justify-content:space-between;align-items:center;font:500 25px/1 Consolas,monospace;letter-spacing:.1em}
.pe .cta{font:600 30px/1 'Segoe UI',sans-serif;letter-spacing:0;display:flex;align-items:center;gap:16px}
.pe .cta i{width:58px;height:58px;border-radius:50%;background:${C.sun};display:grid;place-items:center}
.pe .h{opacity:.65}
.foto{position:absolute}
.marcas{position:absolute;left:80px;right:80px;display:grid;grid-template-columns:1fr 1fr;gap:24px}
.marcas div{border:2px solid ${C.ink};padding:34px 0;text-align:center;font:500 44px/1 Consolas,monospace;letter-spacing:.08em}
.faixa{position:absolute;left:0;right:0;bottom:0;background:${C.ink}}
.play{position:absolute;right:80px;width:104px;height:104px;border-radius:50%;background:${C.sun};display:grid;place-items:center}
`;
const seta=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg>`;
function html(p){
 const pe=(cta)=>`<div class="pe">${cta?`<div class="cta"><i>${seta}</i>${cta}</div>`:'<span></span>'}<span class="h">@contelesolarenergy</span></div>`;
 let corpo='';
 if(p.tipo==='video'){
  const fh=860; corpo=`<div class="foto" style="left:0;top:0;width:1080px;height:${fh}px;${recorte(p.foto,1080,fh)}${p.escuro?';filter:brightness(.42) saturate(.7)':''}"></div>
  <div class="foto" style="left:0;top:0;width:1080px;height:260px;background:linear-gradient(rgba(14,30,51,.75),rgba(14,30,51,0))"></div>
  <div class="faixa" style="height:${1440-fh+40}px"></div><div class="play" style="top:${fh-52}px"><svg width="44" height="44" viewBox="0 0 24 24" fill="${C.ink}"><path d="M7 4v16l13-8z"/></svg></div>
  <h1 style="top:${fh+90}px;font-size:${p.sz||84}px;right:80px">${p.h} <span class="a">${p.a}</span></h1>${pe('')}`;
 } else if(p.tema==='natal'){
  corpo=`<div class="foto" style="left:0;top:0;width:1080px;height:900px;${recorte(p.foto,1080,900,'top')};filter:sepia(.25) saturate(1.05) brightness(.95)"></div>
  <div class="foto" style="left:0;top:560px;width:1080px;height:360px;background:linear-gradient(rgba(14,30,51,0),${C.ink})"></div>
  <h1 style="top:840px;font-size:${p.sz}px">${p.h} <span class="a">${p.a}</span></h1><div class="ap" data-ap style="top:0px">${p.ap}</div>${pe('')}`;
 } else {
  const temFoto=!!p.foto, fy=190, fhh=p.marcas?0:(temFoto?(p.fh||560):0);
  const hTop=temFoto?fy+fhh+70:(p.marcas?420:520);
  corpo=`${temFoto?`<div class="foto" style="left:80px;top:${fy}px;width:920px;height:${fhh}px;${recorte(p.foto,920,fhh)}"></div>`:''}
  ${p.alt?`<div style="position:absolute;left:80px;top:${fy+fhh-70}px;background:${C.sun};color:${C.ink};font:600 28px/1 Consolas,monospace;letter-spacing:.1em;padding:20px 24px">2026</div>`:''}
  <h1 style="top:${hTop}px;font-size:${p.sz}px">${p.h} <span class="a">${p.a}</span></h1>
  ${p.ap?`<div class="ap" data-ap style="top:0px">${p.ap}</div>`:''}
  ${p.marcas?`<div class="marcas" data-marcas style="top:0px"><div>EcoFlow</div><div>BLUETTI</div></div>`:''}
  ${pe(p.cta)}`;
 }
 return `<!doctype html><meta charset="utf-8"><style>${CSS}</style><body class="${p.tipo==='video'?'video':p.tema}"><div class="k">${p.k}</div><div class="d">${p.d}</div>${corpo}</body>`;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const so=process.argv.slice(2); const b=await chromium.launch({channel:'chrome'}); const pg=await b.newPage({viewport:{width:1080,height:1440}});
 for(const p of PECAS){ if(so.length&&!so.includes(p.n))continue; await pg.setContent(html(p)); await pg.evaluate(()=>document.fonts.ready);
  // apoio e marcas logo abaixo da headline
  const prob=await pg.evaluate(()=>{const h=document.querySelector('h1');const r=h.getBoundingClientRect();let y=r.bottom+34;
   const ap=document.querySelector('[data-ap]');if(ap){ap.style.top=y+'px';y=ap.getBoundingClientRect().bottom+40}
   const m=document.querySelector('[data-marcas]');if(m){m.style.top=y+'px';y=m.getBoundingClientRect().bottom}
   const pe=document.querySelector('.pe').getBoundingClientRect().top; return y>pe-30?`passa do rodapé (${Math.round(y)} > ${Math.round(pe-30)})`:''});
  if(prob)console.log(p.n,prob); await pg.screenshot({path:`${AQUI}/artes/${p.n}.jpg`,type:'jpeg',quality:88}); }
 const g=[...PECAS].reverse().map(p=>`<img src="data:image/jpeg;base64,${fs.readFileSync(`${AQUI}/artes/${p.n}.jpg`).toString('base64')}" style="width:100%;display:block">`).join('');
 await pg.setViewportSize({width:1200,height:2140}); await pg.setContent(`<body style="margin:0;background:#fff;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;align-content:start">${g}`); await pg.waitForTimeout(400); await pg.screenshot({path:`${AQUI}/artes/feed.jpg`,type:'jpeg',quality:85});
 await b.close();
}
