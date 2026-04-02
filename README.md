# AI Antibiotic Decision System 🚀

This is a **Production-Ready AI Healthcare SaaS** application built for a hackathon. It predicts antibiotic resistance, recommends the best antibiotic, and visually explains the predictions using a premium "Clinical Ethereal" interface design.

## 📁 Architecture

- **Frontend:** React + Vite, TailwindCSS (Clinical Ethereal Interface), Recharts, Axios
- **Backend:** FastAPI (Python), scikit-learn (RandomForestClassifier), SHAP (Explainability Engine)

## 🎨 UI/UX Features

- **Glassmorphism:** Elegant blur and depth effects for a premium app feel.
- **Micro-animations:** Smooth loading spin states, dynamic prediction risk bars, and skeleton structures.
- **Layered Surfaces:** Depth provided by shifted drop-shadows and radiant background glows without jarring borders.
- **High Readability:** Custom typography and high contrast recommendation cards.

## 🚀 Getting Started

If I haven't started it for you, you can manually run this project with:

### 1. Run the Backend (FastAPI + AI Engine)

Open a terminal and navigate to the `backend/` folder:

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
python main.py
```

*The backend will be available at `http://localhost:8000/`*

### 2. Run the Frontend (React + Vite)

Open a new terminal and navigate to the `frontend/` folder:

```bash
cd frontend
npm install
npm run dev
```

*The frontend will be available at `http://localhost:5173/`*

## 🧠 ML Details

- **Model:** Random Forest Classifier trained on sample telemetry to classify best treatments.
- **SHAP Integration:** TreeExplainer provides real-time AI explainability (showing exact feature influence).
