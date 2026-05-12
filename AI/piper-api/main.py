from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

import subprocess
import uuid
import os

PIPER_PATH = r"C:\Users\user\Desktop\Ibai Lana\RPG\AI\piper\piper.exe"

MODEL_PATH = r"C:\Users\user\Desktop\Ibai Lana\RPG\AI\piper\models\es_ES-sharvard-medium.onnx"

OUTPUT_DIR = r"C:\Users\user\Desktop\Ibai Lana\RPG\AI\generated_audio"

os.makedirs(OUTPUT_DIR, exist_ok=True)

app = FastAPI()


app.mount("/audio", StaticFiles(directory=OUTPUT_DIR), name="audio")


class TTSRequest(BaseModel):
    text: str


@app.post("/tts")
def generate_tts(req: TTSRequest):

    filename = f"{uuid.uuid4()}.wav"

    output_path = os.path.join(OUTPUT_DIR, filename)

    subprocess.run(
        [
            PIPER_PATH,
            "--model",
            MODEL_PATH,
            "--output_file",
            output_path
        ],
        input=req.text.encode("utf-8")
    )

    return {
        "audio_url": f"http://127.0.0.1:8000/audio/{filename}"
    }