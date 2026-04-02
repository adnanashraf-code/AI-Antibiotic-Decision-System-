import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import shap

class AIEngine:
    def __init__(self):
        # Create a dummy dataset
        np.random.seed(42)
        X = pd.DataFrame({
            'Marker_A': np.random.rand(100) * 10,
            'Marker_B': np.random.rand(100) * 10
        })
        # Dummy logic: if Marker_A > 5 and Marker_B > 5 -> high probability of class 1 (e.g. Ciprofloxacin best)
        y = (X['Marker_A'] + X['Marker_B'] > 10).astype(int)
        
        self.model = RandomForestClassifier(n_estimators=50, random_state=42)
        self.model.fit(X, y)
        self.explainer = shap.TreeExplainer(self.model)

    def predict(self, feature1, feature2):
        X_new = pd.DataFrame({'Marker_A': [feature1], 'Marker_B': [feature2]})
        
        # Predict class probabilities
        probs = self.model.predict_proba(X_new)[0]
        
        # Calculate SHAP values for explanation
        shap_values = self.explainer.shap_values(X_new)
        # Random Forest in shap returns list of arrays for each class
        if isinstance(shap_values, list):
            shap_vals = shap_values[1][0] # explanations for class 1
        else:
            shap_vals = shap_values[0, :, 1] if len(shap_values.shape) == 3 else shap_values[0]

        # Dummy feature importance processing
        features_imp = [
            {"name": "Marker_A", "value": abs(float(shap_vals[0]))},
            {"name": "Marker_B", "value": abs(float(shap_vals[1]))}
        ]
        
        # Sort by importance
        features_imp.sort(key=lambda x: x["value"], reverse=True)

        is_high_risk = (feature1 + feature2) > 10
        
        if is_high_risk:
            best_drug = "Ciprofloxacin"
            amox_res = min(0.95, 0.5 + (feature1 / 20))
            cipro_res = max(0.1, 0.4 - (feature2 / 20))
            explanation = f"High resistance predicted. {features_imp[0]['name']} is the primary driver for this assessment, suggesting genetic mutations resistant to standard therapeutics."
        else:
            best_drug = "Amoxicillin"
            amox_res = max(0.1, 0.4 - (feature1 / 20))
            cipro_res = min(0.95, 0.5 + (feature2 / 20))
            explanation = f"Low resistance pattern detected. Both treatments are viable, with {features_imp[0]['name']} slightly favoring standard care protocols."

        return {
            "best": best_drug,
            "antibiotics": [
                {"name": "Amoxicillin", "resistance": float(amox_res)},
                {"name": "Ciprofloxacin", "resistance": float(cipro_res)}
            ],
            "features": features_imp,
            "explanation": explanation
        }

engine = AIEngine()
