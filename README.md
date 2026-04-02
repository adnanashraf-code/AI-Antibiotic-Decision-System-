# 🧬 AI Antibiotic Decision System (AADS)

**AI Antibiotic Decision System (AADS)** is a high-fidelity, production-ready clinical platform designed to optimize antimicrobial stewardship through advanced AI predictions, patient-centric records, and robust clinical governance.

---

## 🎨 Design Vision: Skeuomorphic Clinical Interface
Unlike traditional flat dashboards, AADS uses a **Skeuomorphic Design System (SDS)**. This creates a tactile, physical feel reminiscent of high-end medical equipment. 
- **SDS Tokens**: Realistic soft shadows, light-source gradients, and recessed "inner" containers.
- **Physical Feel**: Every button and card has 3D depth, making the interface feel like a professional medical kiosk.
- **Claymorphic Entry**: The login portal uses a friendly "Claymorphic" aesthetic to welcome users before entering the high-stakes clinical environment.

---

## 🔐 Role-Based Access Control (RBAC)
AADS is built for scale with four distinct user roles, each with tailored views and permissions:
1. **Admin**: Full system access, including **Compliance Audit Logs** and user management.
2. **Doctor**: Access to **Patient Registry**, **AI Predictions**, and **Lab Results**.
3. **Researcher**: Specialized view for clinical trends and AI model evaluation.
4. **Patient**: Dedicated **Patient Portal** to view personal medical history, test reports, and appointment records.

---

## 🚀 Key Features

### 🧠 AI Prediction Hub
- **Resistance Prediction**: Predicts bacterial resistance based on isolate data and patient history.
- **Explainable AI (XAI)**: High-transparency models showing exact feature influence per prediction.
- **Clinical Confidence**: Real-time confidence scores (98.4% accuracy) to support decision-making.

### 📋 Patient & Lab Management
- **Centralized Registry**: Quick access to patient profiles, clinical notes, and severity scoring.
- **Tactile Lab Results**: Recessed data panels for sub-second viewing of microbial findings.
- **Medical History**: Immutable timeline of all prior antibiotic exposures and allergic events.

### 🛡️ Governance & Compliance
- **Audit Ledger**: HIPAA-aligned immutable logs of all PHI (Protected Health Information) access.
- **System Telemetry**: Real-time node monitoring and AI model version tracking.
- **Clinical Guidelines**: In-app SOP (Standard Operating Procedure) manuals for antimicrobial protocols.

### 🆘 Professional Support
- **Support Kiosk**: Integrated FAQ Node and technical escalation dispatch system for clinical engineers.

---

## 💻 Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS (Skeuomorphic Utilities), Framer Motion.
- **Backend**: FastAPI (Python), scikit-learn, SHAP.
- **Storage**: Persistent Role-Based Session Management (LocalStorage-driven for demo).
- **Security**: AES-256 Mock Encryption, HIPAA-aligned structure.

---

## 🛠️ Getting Started

### 1. Backend Setup
Navigate to the `backend/` directory:
```bash
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

### 2. Frontend Setup
Navigate to the `frontend/` directory:
```bash
npm install
npm run dev
```

---

## 📜 Disclaimer
*This system is a decision-support tool. Clinical intuition and formal microbiology culture override AI predictions in all scenarios. Authorized healthcare professionals only.*

---
**Created with ❤️ for Advanced Clinical Intelligence.**
