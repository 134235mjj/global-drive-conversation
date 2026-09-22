"""Generate local English scripts with country-specific Edge voices."""
import argparse, asyncio, json, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / ".tools" / "edge_tts"))
import edge_tts
VOICES = {"narin":"th-TH-NiwatNeural", "pim":"th-TH-PremwadeeNeural", "anan":"th-TH-NiwatNeural", "mali":"th-TH-PremwadeeNeural", "aina":"ms-MY-YasminNeural", "budi":"id-ID-ArdiNeural", "linh":"vi-VN-HoaiMyNeural", "miguel":"en-PH-JamesNeural"}
def load_questions():
    raw=(ROOT/"data.js").read_text(encoding="utf-8")
    return json.loads(raw.split("window.GD_DATA =",1)[1].strip().removesuffix(";"))["questions"]
async def main(country,force=False,scene=None):
    questions=[q for q in load_questions() if q["customer"]["country"]==country and (scene is None or q["scene"]==scene)]
    if not questions: raise SystemExit(f"无 {country} 客户题目。")
    out=ROOT/"audio"/"regional"/country; out.mkdir(parents=True,exist_ok=True)
    for index,q in enumerate(questions,1):
        customer=q["id"].split("-")[-1]; voice=VOICES[customer]; target=out/f'{q["id"]}.mp3'
        print(f"[{index:02}/{len(questions)}] {voice} -> {target.name}")
        if not force and target.exists() and target.stat().st_size>1000: continue
        for attempt in range(3):
            try:
                await edge_tts.Communicate(q["script"],voice,rate="-8%").save(str(target))
                if target.stat().st_size>1000: break
            except Exception:
                if attempt==2: raise
                await asyncio.sleep(2)
if __name__=="__main__":
    p=argparse.ArgumentParser(); p.add_argument("--country",default="TH",choices=["TH","MY","ID","VN","PH","OTHER"]); p.add_argument("--scene",type=int,choices=range(4)); p.add_argument("--force",action="store_true"); args=p.parse_args()
    if args.country=="OTHER":
        for code in ["MY","ID","VN","PH"]: asyncio.run(main(code,args.force,args.scene))
    else: asyncio.run(main(args.country,args.force,args.scene))
