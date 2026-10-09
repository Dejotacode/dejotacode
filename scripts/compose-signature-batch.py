#!/usr/bin/env python3
"""Compose approved official SVG over locally cleaned corner crops.
Requires ImageMagick. Original images are never overwritten.
Run from any directory; manifest and prepared crops are repository-owned.
"""
from pathlib import Path
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
    manifest = json.loads(MANIFEST.read_text())
    with tempfile.TemporaryDirectory(prefix="dejotacode-signature-") as directory:
        work = Path(directory)
        for number, item in enumerate(manifest["selected"], 1):
            source = ROOT / ("public" + item["source"])
            target = ROOT / ("public" + item["target"])
            if digest(source) != item["sha256"]:
                raise RuntimeError(f"Original changed: {source}")
            if target.exists():
                if digest(target) != item.get("target_sha256"):
                    raise RuntimeError(f"Existing version differs; refusing overwrite: {target}")
                print(f"{number}: existing version verified")
                continue
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
            run(clean, symbol, "-geometry", f"+{sx}+{sy}", "-compose", "Over", "-composite", "-define", "webp:lossless=true", target)
            if digest(target) != item["target_sha256"]:
                raise RuntimeError(f"Composition differs from recorded version: {target}")
            print(f"{number}: version composed and verified")

if __name__ == "__main__":
    main()
