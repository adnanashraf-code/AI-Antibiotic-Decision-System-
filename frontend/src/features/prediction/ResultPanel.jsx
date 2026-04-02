import RecommendationCard from "./RecommendationCard";
import RiskBars from "./RiskBars";
import ExplanationPanel from "./ExplanationPanel";
import FeatureChart from "./FeatureChart";
import Button from "../../ui/Button";
import { Download } from "lucide-react";

const ResultPanel = ({ data, isLoading }) => {
  if (isLoading) return null; // Handled by parent skeleton

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-semibold text-slate-800">Analysis Complete</h3>
        <Button 
          onClick={() => window.print()} 
          className="flex items-center gap-2 px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>
      <RecommendationCard best={data.best} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskBars antibiotics={data.antibiotics} />
        <FeatureChart features={data.features} />
      </div>

      <ExplanationPanel text={data.explanation} />
    </div>
  );
};

export default ResultPanel;
