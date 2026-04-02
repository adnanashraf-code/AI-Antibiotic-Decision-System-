from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ml import engine
import uvicorn

app = FastAPI(title="AI Antibiotic API")

# Setup CORS for frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictRequest(BaseModel):
    bacteria: str
    feature1: float
    feature2: float

@app.post("/predict")
def predict_resistance(req: PredictRequest):
    return engine.predict(req.feature1, req.feature2)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
