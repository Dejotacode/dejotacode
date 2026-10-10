#!/usr/bin/env python3
"""Rebuild two acervo adaptations into an isolated destination; never overwrites files.
Existing screenshots remain intact inside native SVG. Official symbol is composed
over an already unmarked illustration. No scene generation or external copying.
"""
from pathlib import Path
import argparse,base64,hashlib,json,subprocess,tempfile
ROOT=Path(__file__).resolve().parents[1]
REPORT=ROOT/'docs/auditorias/selecao-imagens-lote-20261010.json'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def main():
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--output-dir',type=Path,required=True)
 args=parser.parse_args()
 assets=json.loads(REPORT.read_text())['new_assets']
 for item in assets:
  target=args.output_dir/item['path'].lstrip('/')
  if target.exists():raise RuntimeError('Refusing overwrite: '+str(target))
  target.parent.mkdir(parents=True,exist_ok=True)
  if item.get('source'):
   source=ROOT/('public'+item['source'])
   if sha(source)!=item['source_sha256']:raise RuntimeError('Source differs')
   with tempfile.TemporaryDirectory(prefix='dejota-reuse-symbol-') as directory:
    symbol=Path(directory)/'symbol.png'
    subprocess.run(['magick','-background','none',str(ROOT/'public/assets/brand/dejotacode-symbol-dark.svg'),'-resize','36x36',str(symbol)],check=True)
    subprocess.run(['magick',str(source),str(symbol),'-geometry','+22+12','-compose','Over','-composite','-define','webp:lossless=true',str(target)],check=True)
  else:
   images=[]
   for x,src in zip([310,766],item['sources']):
    p=ROOT/('public'+src['path'])
    if sha(p)!=src['sha256']:raise RuntimeError('Screenshot differs')
    b64=base64.b64encode(p.read_bytes()).decode()
    images.append(f'<image x="{x}" y="135" width="364" height="810" preserveAspectRatio="xMidYMid meet" href="data:image/webp;base64,{b64}"/>')
   target.write_text('<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1080" viewBox="0 0 1440 1080"><title>Méliuz Pocket Sort: capturas reais de tarefas e extrato em 30 de setembro de 2026</title><desc>Capturas integrais. O saldo total inclui outro bônus; o resultado do teste é discriminado no artigo. Não comprova pagamento recebido.</desc><rect width="1440" height="1080" fill="#102333"/>'+''.join(images)+'</svg>\n')
  if sha(target)!=item['sha256']:raise RuntimeError('Reconstruction differs: '+str(target))
  print(item['path']+': identical SHA-256')
if __name__=='__main__':main()
