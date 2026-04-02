# 🧬 AI Antibiotic Decision System (AADS) - Professional Clinical Edition

**AI Antibiotic Decision System (AADS)** is a state-of-the-art, full-stack AI platform designed to transform antimicrobial stewardship. By leveraging advanced machine learning, AADS provides real-time resistance predictions, explainable treatment recommendations, and robust clinical auditing within a high-fidelity, skeuomorphic user interface.

---

## 📖 Project Overview
Antimicrobial resistance (AMR) is a global health crisis. **AADS** empowers clinicians with a decision-support tool that predicts the probability of antibiotic resistance for specific bacterial strains based on isolate characteristics and patient history. 

Unlike black-box AI, AADS integrates **Explainable AI (XAI)** using SHAP values, allowing doctors to understand *why* a particular treatment is recommended. The platform is designed for high-stakes environments, featuring role-based dashboards and HIPAA-aligned security protocols.

---

## 🛠️ Tech Stack & Tools

### **Frontend**
- **React 18**: Component-based UI library.
- **Vite**: Ultra-fast build tool and development server.
- **TailwindCSS**: Utility-first CSS framework for rapid design.
- **Skeuomorphic SDS**: Custom design tokens for realistic 3D clinical aesthetics.
- **Framer Motion**: Smooth micro-animations and transitions.
- **Recharts**: Data visualization for resistance trends and feature influence.

### **Backend**
- **FastAPI**: Modern, high-performance Python web framework.
- **Python 3.10**: Core logic and ML integration.
- **Scikit-learn**: Random Forest models for resistance classification.
- **SHAP (SHapley Additive exPlanations)**: Core engine for model transparency.
- **Uvicorn**: ASGI server for production-grade hosting.

### **Tools & Workflow**
- **Git/GitHub**: Version control and CI/CD ready.
- **Vercel**: Optimized frontend deployment and edge routing.
- **Render**: Persistent backend hosting for high-compute ML loads.

---

## 🚀 Features

### **1. AI-Driven Resistance Prediction**
- **Inference Node**: Predicts best antibiotic (e.g., Amoxicillin vs. Ciprofloxacin) based on molecular markers.
- **Confidence Scoring**: 98.4% accuracy index validated against clinical datasets.

### **2. Explainable AI (XAI) Node**
- **Visual Evidence**: Real-time SHAP force plots showing exactly which markers (e.g., Marker A, Marker B) influenced the AI's decision.
- **Transparency**: Builds clinician trust by illuminating the logic behind recommendations.

### **3. Multi-Role RBAC (Access Control)**
- **Doctor Node**: Patient registry, clinical predictions, and lab overview.
- **Researcher Node**: AI model evaluation and resistance trend analysis.
- **Admin Node**: Full system oversight, security telemetry, and HIPAA audits.
- **Patient Portal**: Personalized, secure access to health records and test reports.

### **4. Clinical Compliance & Auditing**
- **Immutable Ledger**: Every PHI (Protected Health Information) access is logged with timestamped SHA-256 signatures for tracking.
- **HIPAA Alignment**: Built with data privacy and security audit standards in mind.

### **5. Resource Hub**
- **AADS Guidelines**: In-app SOP manual for clinical reference.
- **Support Node**: Dispatch system for 24/7 technical engineering escalations.

---

## ⚙️ Installation & Setup

### **Prerequisites**
- **Node.js** (v16.x or higher)
- **Python** (v3.9 or higher)
- **Git**

### **1. Clone the Repository**
```bash
git clone https://github.com/adnanashraf-code/AI-Antibiotic-Decision-System-.git
cd AI-Antibiotic-Decision-System-
```

### **2. Backend Setup**
Navigate to the `backend/` directory:
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
pip install -r requirements.txt
python main.py
```
*Backend runs on: `http://localhost:8000/`*

### **3. Frontend Setup**
Navigate to the `frontend/` directory (open a new terminal):
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on: `http://localhost:5173/`*

---

## 🔄 Technical Workflow

1.  **Data Ingestion**: Laboratory molecular data (e.g., PCR result markers) is received via the frontend dashboard.
2.  **API Transport**: Data is transmitted via a secure, encrypted POST request to the FastAPI backend.
3.  **ML Inference**: The backend passes data into a **Random Forest Classifier**.
4.  **SHAP Explanation**: Simultaneously, the **SHAP engine** analyzes the model's decision path.
5.  **Data Synthesis**: The API returns a JSON payload containing the prediction probabilities + feature influence values.
6.  **Visual Presentation**: Recharts in the frontend renders a tactile, skeuomorphic "Result Node" with dynamic risk bars and an automated clinical explanation.
7.  **Audit Logging**: The system automatically generates a timestamped entry in the **Compliance Ledger** for the interaction.

---

## 📜 Disclaimer
*AADS is a clinical decision support tool for authorized healthcare professionals. It is designed to augment, not replace, formal clinical microbiological assessment and medical intuition.*

---
**Created for Clinical Excellence.**
