# 🧬 AI Antibiotic Decision System (AADS) - Professional Clinical Edition

[![Production Deployment](https://img.shields.io/badge/Status-Hackathon--Ready-blueviolet?style=for-the-badge&logo=vercel)](https://github.com/adnanashraf-code/AI-Antibiotic-Decision-System-)
[![Design System](https://img.shields.io/badge/Aesthetic-Hybrid--Glassmorphism-blue?style=for-the-badge)](https://github.com/adnanashraf-code/AI-Antibiotic-Decision-System-)

**AI Antibiotic Decision System (AADS)** is a state-of-the-art, full-stack AI platform designed to transform antimicrobial stewardship. By leveraging advanced machine learning, AADS provides real-time resistance predictions, explainable treatment recommendations, and robust clinical auditing within a high-fidelity **Hybrid Glassmorphic** user interface.

---

## 📖 Project Overview
Antimicrobial resistance (AMR) is a global health crisis. **AADS** empowers clinicians with a decision-support tool that predicts the probability of antibiotic resistance for specific bacterial strains based on isolate characteristics, patient history, and **over 15 refined comorbidities** (COPD, Heart Failure, Malignancy, etc.).

Unlike black-box AI, AADS integrates **Explainable AI (XAI)** using SHAP values, allowing doctors to understand *why* a particular treatment is recommended. The platform is designed for high-stakes environments, featuring **Role-Based Clinical Environments** and a mobile-first responsive architecture.

---

## 🔥 Key Innovation: The Hybrid Glassmorphic Experience
AADS features a world-class UI/UX designed for the modern medical terminal:
- **Clinical Infrastructure (Skeuomorphism)**: The main dashboard uses grounded, high-fidelity skeuomorphism to provide a stable, professional feel for data entry and monitoring.
- **Neural Assistant (Dark Glass)**: The AI reasoning hub is a futuristic **Dark Glass** floating panel with **28px backdrop blur** and **Role-Based Neon Glows**, creating a clear visual distinction between grounded data and intelligent insights.

---

## 🛠️ Tech Stack & Tools

### **Frontend**
- **React 18 & Vite**: Component-based modern frontend.
- **Hybrid CSS Architecture**: Vanilla CSS + TailwindCSS for the ultimate balance of utility and custom luxury aesthetics.
- **Skeuo-Glass Design System**: Custom 3D design tokens and glass-dark utility classes.
- **Framer Motion**: Smooth micro-animations for high-fidelity clinical transitions.
- **Recharts**: Data visualization for resistance probability indices.

### **Backend**
- **FastAPI**: High-performance Python web framework (Asynchronous).
- **Scikit-learn**: Random Forest models for resistance classification.
- **SHAP Engine**: Core transparency system for model interpretability.

---

## 🚀 Specialized Role Environments

### **1. Doctor Node (Blue Theme)**
- **Focus**: Diagnosis entry, patient registry, and clinical result analysis.
- **Workflow**: Automated resistant strain mapping for immediate point-of-care decisions.

### **2. Researcher Node (Purple Theme)**
- **Focus**: Isolate trend analysis and multi-modal resistance tracking.
- **Workflow**: Access to the "Trend Node" interface for longitudinal studies.

### **3. Admin Node (Teal Theme)**
- **Focus**: HIPAA Compliance, security telemetry, and live audit trails.
- **Workflow**: Managing system integrity and monitoring data hygiene.

---

## 📱 Mobile-First Clinical UI
AADS is fully optimized for **Mobile and Tablet** devices:
- **Adaptive Sidebars**: Mobile-specific navigation overlay and bottom action bars.
- **Card-Based View**: Data tables automatically transform into readable clinical cards for on-the-go isolate assessment.
- **Touch-Optimized**: Large action targets and smooth gesture-based interactions.

---

## ⚙️ Installation & Setup

### **Prerequisites**
- **Node.js** (v16.x or higher)
- **Python** (v3.10 or higher)

### **1. Repository Initialization**
```bash
git clone https://github.com/adnanashraf-code/AI-Antibiotic-Decision-System-.git
cd AI-Antibiotic-Decision-System-
```

### **2. Backend Deployment**
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
pip install -r requirements.txt
python main.py
```

### **3. Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

---

## 🔄 Technical Workflow

1.  **Ingestion**: PCR or isolate marker data is entered into the **Skeuomorphic Diagnostic Input**.
2.  **Inference**: FastAPI processes the markers through a **Random Forest** model ensemble.
3.  **Explanation**: SHAP values calculate the contribution of each marker (e.g., *Marker A* vs *Comorbidity B*).
4.  **Synthesis**: The **Dark Glass Assistant** interprets the results with role-specific context (Age-adjusted dosing, safety profiles).
5.  **Audit**: A cryptographically signed entry is added to the **Clinical Compliance Ledger**.

---

## 📜 Disclaimer
*AADS is a clinical decision support tool for authorized healthcare professionals. It is designed to augment, not replace, formal clinical microbiological assessment and medical intuition.*

---
**Crafted for Clinical Excellence & Hackathon Innovation.**
