#!/usr/bin/env python3
"""Reconstruct corrected resource signatures in an isolated directory. No overwrite."""
from pathlib import Path
import argparse,hashlib,json,subprocess,tempfile
ROOT=Path(__file__).resolve().parents[1]
MANIFEST=ROOT/'docs/brand/resource-signatures-20261010.json'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def run(*args):subprocess.run(['magick',*map(str,args)],check=True)
def compose(item,target,manifest,verify=True):
 source=ROOT/('public'+item['source']);atlas=ROOT/manifest['atlas'];symbol=ROOT/('public'+manifest['symbol'])
 if sha(source)!=item['source_sha256'] or sha(atlas)!=manifest['atlas_sha256'] or sha(symbol)!=manifest['symbol_sha256']:raise RuntimeError('Source differs')
 if target.exists():raise RuntimeError('Refusing overwrite')
 target.parent.mkdir(parents=True,exist_ok=True)
 with tempfile.TemporaryDirectory(prefix='dejota-resource-signature-') as temp:
  d=Path(temp);cw=item['crop_width'];ch=item['crop_height'];i=item['tile'];box=item['removal_box_tile']
  run(atlas,'-crop',f'320x240+{i%5*320}+{i//5*240}','+repage','-resize',f'{cw}x{ch}!',d/'patch.png')
  c=[round(box[0]*cw/320),round(box[1]*ch/240),round(box[2]*cw/320),round(box[3]*ch/240)]
  run('-size',f'{cw}x{ch}','xc:black','-fill','white','-draw',f'rectangle {c[0]},{c[1]} {c[2]},{c[3]}','-blur','0x2',d/'mask.png')
  run(d/'patch.png',d/'mask.png','-alpha','off','-compose','CopyOpacity','-composite',d/'cut.png')
  run(source,d/'cut.png','-geometry','+0+0','-compose','Over','-composite',d/'clean.png')
  run('-background','none',symbol,'-resize','72x72',d/'symbol.png')
  run(d/'clean.png',d/'symbol.png','-geometry','+43+33','-compose','Over','-composite','-define','webp:lossless=true',target)
 if verify and sha(target)!=item['target_sha256']:raise RuntimeError('Reconstruction differs')
 return sha(target)
def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('--output-dir',type=Path,required=True);args=p.parse_args()
 manifest=json.loads(MANIFEST.read_text())
 for item in manifest['selected']:
  compose(item,args.output_dir/item['target'].lstrip('/'),manifest)
  print(item['id']+': exact SHA-256')
if __name__=='__main__':main()
