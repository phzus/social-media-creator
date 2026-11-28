// Recorta a cena das artes geradas por IA (PH, 26/11) sem o logo, a etiqueta e o texto que a IA desenhou. Uso: node ia-recortes.mjs
// 09: corta antes da estação BLUETTI desenhada pela IA (produto parceiro entra com a foto oficial, PADROES §0).
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const SRC=path.join(AQUI,'../../referencias/2026-11-26-artes-ia-dezembro');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
export const CORTES={'05':['11-12-homologacao.png',0,135,1122,500],'08':['18-12-orcamentos-2026.png',0,132,1086,548],'09':['21-12-estacao-de-energia.png',0,215,858,490]};
const b=await chromium.launch({channel:'chrome'}); const pg=await b.newPage();
for(const [n,[f,x,y,w,h]] of Object.entries(CORTES)){
 const src='data:image/png;base64,'+fs.readFileSync(path.join(SRC,f)).toString('base64');
 await pg.setViewportSize({width:w,height:h}); await pg.setContent(`<body style="margin:0;overflow:hidden"><img src="${src}" style="display:block;margin:-${y}px 0 0 -${x}px">`); await pg.waitForTimeout(150);
 await pg.screenshot({path:path.join(AQUI,'ia',`${n}.jpg`),type:'jpeg',quality:92}); }
await b.close();
