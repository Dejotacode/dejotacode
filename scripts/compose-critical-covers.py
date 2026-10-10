#!/usr/bin/env python3
"""Compose local SVG covers from preserved supplier photos and precise editorial vectors.
No generation, no source-pixel edits, no publication. Sources live outside repository.
"""
from pathlib import Path
import base64,hashlib,json,re,shutil,html,xml.etree.ElementTree as ET
ROOT=Path('/home/dejota/Workspace/fullstack/dejotacode')
MEDIA=Path('/home/dejota/Workspace/media-dejotacode/correcoes-criteriosas-20261010')
sources=json.loads((MEDIA/'fontes.json').read_text())
symbol=ET.fromstring((ROOT/'public/assets/brand/dejotacode-symbol-dark.svg').read_text())
symbol.attrib.update(x='43',y='24',width='72',height='72')
symbolmarkup=ET.tostring(symbol,encoding='unicode')
def text(x,y,value,size=30,color='#e6edf7',mono=False):
 return f'<text x="{x}" y="{y}" font-family="{("DejaVu Sans Mono" if mono else "DejaVu Sans")}" font-size="{size}" fill="{color}">{html.escape(value)}</text>'
def rect(x,y,w,h,fill='#122239',radius=24,stroke='#28425d'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="2"/>'
def wrap(title,body):
 return f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1440" height="810" viewBox="0 0 1440 810" role="img"><title>{html.escape(title)}</title><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#091522"/><stop offset="1" stop-color="#142c45"/></linearGradient></defs><rect width="1440" height="810" fill="url(#bg)"/><circle cx="1390" cy="470" r="340" fill="none" stroke="#25445c" stroke-width="2"/><circle cx="1390" cy="470" r="265" fill="none" stroke="#25445c" stroke-width="2"/>{body}{symbolmarkup}</svg>'''
items=[
 ('store','fifine-am8-usb-xlr','FIFINE AM8','fifine-am8.png','USB / XLR'),
 ('store','ugreen-hub-usb-c-6-em-1','UGREEN Uno','ugreen-uno.png','Hub USB-C 6 em 1'),
 ('store','baseus-fm11-10000mah','Baseus FM11','baseus-fm11.jpg','Carregamento magnético'),
 ('store','baseus-fc11-power-bank','Baseus FC11','baseus-fc11.webp','Referência: variante 10.000 mAh'),
]
records=[]
for family,id,title,source,subtitle in items:
 p=MEDIA/source;mime={'.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'}[p.suffix];data=p.read_bytes()
 # Original image is embedded intact and contained. Brand is on our surrounding layout.
 body=text(145,85,title,34)+rect(235,125,720,600,'#ffffff',32,'#ffffff')
 body+=f'<image x="265" y="145" width="660" height="560" preserveAspectRatio="xMidYMid meet" xlink:href="data:{mime};base64,{base64.b64encode(data).decode()}"/>'
 body+=text(235,770,subtitle,26,'#a9c3d9')
 out=ROOT/f'public/assets/{family}/{id}-referencia-assinatura-v3.svg'
 out.write_text(wrap(title+' — composição editorial com fotografia do fornecedor',body))
 records.append(dict(family=family,id=id,path='/'+str(out.relative_to(ROOT/'public')),source=str(p),source_url=sources[source.split('.')[0]],source_sha256=hashlib.sha256(data).hexdigest(),origin='foto-fornecedor-em-composicao-editorial',license_status='autorizacao-documental-pendente-antes-de-publicar'))
# Folder organisation: exact vocabulary from article, not a fictitious OS screenshot.
body=text(145,85,'Organização digital',34)+rect(155,160,870,540)
body+=text(205,235,'Tecnologia/',40,'#64d9e8',True)
folders=[('estudos/','Exercícios e anotações'),('projetos/','Trabalhos com começo, meio e fim'),('referencias/','Materiais para consultar'),('arquivos-temporarios/','Testes e arquivos passageiros')]
for n,(name,desc) in enumerate(folders):
 y=280+n*86
 body+=f'<path d="M205 {y+8}h27l10 10h38v37h-75z" fill="#e9b454"/>'
 body+=text(306,y+25,name,26,'#e6edf7',True)+text(306,y+55,desc,20,'#a9c3d9')
body+=text(195,750,'Nomes claros  ·  README  ·  Próximo passo',25)
posts=[('organizar-ambiente-estudos-tecnologia','Pastas digitais para organizar estudos e projetos',body)]
# JavaScript: functional example already in tutorial; labels group variable, condition, function.
body=text(145,85,'JavaScript',36)+rect(155,145,870,570)
lines=['function verificarMaioridade(idade) {','  if (idade >= 18) {','    return "Maior de idade";','  }','  return "Menor de idade";','}','const resultado = verificarMaioridade(20);','console.log(resultado);']
for n,line in enumerate(lines):
 body+=text(190,212+n*49,line,27,'#66dfe7' if n in [0,1,6] else '#e6edf7',True)
body+=rect(185,630,805,55,'#0a1728',12)+text(208,667,'→ Maior de idade',27,'#a4e8b4',True)
body+=text(175,765,'Variável  ·  Condição  ·  Função',28,'#c1d2e5')
posts.append(('javascript-variaveis-funcoes','Exemplo de variável, condição e função em JavaScript',body))
# Metricool: planning concept, expressly not a screenshot of the service.
body=text(145,85,'Metricool  /  Planejamento',34)+rect(155,155,870,555)
body+=text(195,217,'Calendário editorial',35)+text(195,254,'Exemplo conceitual de organização',22,'#a9c3d9')
cols=[('SEG','Vídeo','09:00','#163d49'),('QUA','Publicação','14:00','#342d4e'),('SEX','Revisão','10:00','#3c3529')]
for n,(day,task,hour,color) in enumerate(cols):
 x=195+n*265
 body+=rect(x,285,235,305,'#0b1c2e',18)+text(x+20,333,day,25,'#9fb5c9')
 body+=rect(x+15,369,205,155,color,14)+text(x+28,414,task,24)+text(x+28,454,hour,24,'#c1d2e5',True)
 body+=f'<circle cx="{x+34}" cy="495" r="7" fill="#64d9e8"/>'+text(x+52,502,'Planejado',19)
body+=text(195,654,'Texto + mídia  →  Data + horário  →  Revisão',23,'#64d9e8')
body+=text(195,765,'Preparar  ·  Agendar  ·  Conferir',28)
posts.append(('metricool-para-iniciantes-organizar-agendar-conteudo','Calendário editorial conceitual de planejamento e agendamento',body))
for id,title,body in posts:
 out=ROOT/f'public/assets/posts/{id}-referencia-assinatura-v3.svg';out.write_text(wrap(title,body))
 records.append(dict(family='post',id=id,path='/'+str(out.relative_to(ROOT/'public')),origin='svg-editorial-proprio',source='conteudo-do-artigo',license_status='vetor-proprio-simbolo-oficial'))
for r in records:
 p=ROOT/'public'/r['path'].lstrip('/');r.update(sha256=hashlib.sha256(p.read_bytes()).hexdigest(),bytes=p.stat().st_size,width=1440,height=810,signature=dict(x=43,y=24,size=72,official=True,count=1))
manifest=dict(date='2026-10-10',status='preparado-local-validacao-pendente',responsible='@control/@dev',scope='Quatro produtos e três capas editoriais',entries=records,scene_generation=False,source_pixels_modified=False,originals_deleted=False,published=False,external_copy=False,zero_monetary_cost=True)
(MEDIA/'composicoes.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'covers':len(records),'bytes':sum(r['bytes'] for r in records)},ensure_ascii=False))
