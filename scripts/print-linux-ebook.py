#!/usr/bin/env python3
import argparse
import base64
import json
from pathlib import Path
import shutil
import subprocess
import sys
import time
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "docs/prototypes/linux-do-zero-full-v0.6/index.html"
STAMP = ROOT / "scripts/stamp-linux-ebook.py"


def request_json(base, path, data=None, method="POST"):
    body = None if data is None else json.dumps(data).encode()
    req = urllib.request.Request(
        base + path,
        data=body,
        method=method,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=90) as response:
        return json.loads(response.read().decode())


def wait_driver(base, timeout=15):
    start = time.time()
    while time.time() - start < timeout:
        try:
            with urllib.request.urlopen(base + "/status", timeout=1):
                return
        except Exception:
            time.sleep(0.25)
    raise RuntimeError("geckodriver não iniciou dentro do tempo esperado")

def main():
    parser = argparse.ArgumentParser(description="Exporta o HTML do Linux do Zero para PDF usando Firefox.")
    parser.add_argument("--output", required=True, help="Caminho do PDF de saída")
    args = parser.parse_args()

    driver = shutil.which("geckodriver")
    if not driver:
        raise SystemExit("geckodriver não encontrado no PATH")
    if not HTML.exists():
        raise SystemExit(f"HTML não encontrado: {HTML}. Rode build-linux-ebook.py primeiro.")

    port = 4445
    base = f"http://127.0.0.1:{port}"
    proc = subprocess.Popen([driver, "--port", str(port)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    session_id = None
    try:
        wait_driver(base)
        session = request_json(base, "/session", {
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "firefox",
                    "moz:firefoxOptions": {"args": ["-headless"]},
                }
            }
        })
        session_id = session["value"]["sessionId"]
        request_json(base, f"/session/{session_id}/url", {"url": HTML.resolve().as_uri()})
        time.sleep(2)
        result = request_json(base, f"/session/{session_id}/print", {
            "background": True,
            "orientation": "portrait",
            "scale": 1,
            "shrinkToFit": True,
            "page": {"width": 8.2677, "height": 11.6929},
            "margin": {"top": 0, "bottom": 0, "left": 0, "right": 0},
        })
        output = Path(args.output).expanduser().resolve()
        output.parent.mkdir(parents=True, exist_ok=True)
        raw_output = output.with_name(f"{output.stem}.firefox-raw{output.suffix}")
        raw_output.write_bytes(base64.b64decode(result["value"]))
        subprocess.run(
            [
                sys.executable,
                str(STAMP),
                "--input",
                str(raw_output),
                "--output",
                str(output),
            ],
            check=True,
        )
        raw_output.unlink()
        print(f"PDF gerado: {output}")
    finally:
        if session_id:
            try:
                request_json(base, f"/session/{session_id}", None, "DELETE")
            except Exception:
                pass
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()


if __name__ == "__main__":
    main()
