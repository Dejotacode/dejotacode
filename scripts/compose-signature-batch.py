#!/usr/bin/env python3
"""Compose approved official SVG over locally cleaned corner crops.
Requires ImageMagick. Original images are never overwritten.
Run from any directory; manifest and prepared crops are repository-owned.
"""
from pathlib import Path
import argparse
import os
import hashlib
import json
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "docs/brand/signature-batch-20261009.json"
CROPS = ROOT / "docs/brand/signature-batch-sources"
SYMBOL = ROOT / "public/assets/brand/dejotacode-symbol-dark.svg"

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def run(*args):
    subprocess.run(["magick", *map(str, args)], check=True)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive-root", type=Path, default=Path(os.environ.get("DEJOTACODE_MEDIA_ARCHIVE", str(Path.home() / "Workspace/media-dejotacode/acervo"))))
    parser.add_argument("--verify-only", action="store_true", help="Confere fontes e destinos sem escrever imagens")
    parser.add_argument("--output-dir", type=Path, help="Reconstrução isolada; preserva caminhos assets/ abaixo do destino")
    parser.add_argument("--only-source", help="Reconstrói apenas o caminho de origem indicado no manifesto")
    args = parser.parse_args()
    manifest = json.loads(MANIFEST.read_text())
    with tempfile.TemporaryDirectory(prefix="dejotacode-signature-") as directory:
        work = Path(directory)
        for number, item in enumerate(manifest["selected"], 1):
            if args.only_source and item["source"] != args.only_source:
                continue
            source = ROOT / ("public" + item["source"])
            if not source.exists():
                source = args.archive_root / ("originais" + item["source"])
            target = ((args.output_dir / item["target"].lstrip("/")) if args.output_dir else ROOT / ("public" + item["target"]))
            if digest(source) != item["sha256"]:
                raise RuntimeError(f"Original changed: {source}")
            if args.verify_only:
                current = ROOT / ("public" + item["target"])
                if not current.exists():
                    current = args.archive_root / ("originais" + item["target"])
                if not current.exists() or digest(current) != item["target_sha256"]:
                    raise RuntimeError(f"Recorded delivery differs: {current}")
                print(f"{number}: archived source and recorded delivery verified")
                continue
            if target.exists():
                if digest(target) != item.get("target_sha256"):
                    raise RuntimeError(f"Existing version differs; refusing overwrite: {target}")
                print(f"{number}: existing version verified")
                continue
            if not args.output_dir and (args.archive_root / ("originais" + item["target"])).exists():
                raise RuntimeError("Historical delivery archived; use --output-dir for isolated recovery")
            target.parent.mkdir(parents=True, exist_ok=True)
            w, h, cw, ch = (item[key] for key in ("width", "height", "crop_width", "crop_height"))
            tile = item["tile"]
            patch, mask, cut, clean, symbol = (work / f"{name}.png" for name in ("patch", "mask", "cut", "clean", "symbol"))
            run(CROPS / f'clean-{item["atlas"]}.webp', "-crop", f"320x240+{tile % 4 * 320}+{tile // 4 * 240}", "+repage", "-resize", f"{cw}x{ch}!", patch)
            x1, y1, x2, y2 = item["removal_box_tile"]
            x1, x2 = round(x1 * cw / 320), round(x2 * cw / 320)
            y1, y2 = round(y1 * ch / 240), round(y2 * ch / 240)
            run("-size", f"{cw}x{ch}", "xc:black", "-fill", "white", "-draw", f"rectangle {x1},{y1} {x2},{y2}", "-blur", "0x2", mask)
            run(patch, mask, "-alpha", "off", "-compose", "CopyOpacity", "-composite", cut)
            run(source, cut, "-geometry", "+0+0", "-compose", "Over", "-composite", clean)
            size, sx, sy = round(w * .05), round(w * .03), round(h * .03)
            run("-background", "none", SYMBOL, "-resize", f"{size}x{size}", symbol)
            run(clean, symbol, "-geometry", f"+{sx}+{sy}", "-compose", "Over", "-composite", "-define", "webp:lossless=true", work / "master.webp")
            run(work / "master.webp", "-quality", str(item.get("delivery_quality", 90)), target)
            if digest(target) != item["target_sha256"]:
                raise RuntimeError(f"Composition differs from recorded version: {target}")
            print(f"{number}: version composed and verified")

if __name__ == "__main__":
    main()
