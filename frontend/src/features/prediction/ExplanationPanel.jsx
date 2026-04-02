import GlassContainer from "../../layout/GlassContainer";
import { BrainCircuit } from "lucide-react";

const ExplanationPanel = ({ text }) => {
  return (
    <GlassContainer className="bg-white/40 border border-blue-100/50">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-gradient-to-br from-indigo-50 to-blue-50 p-2.5 rounded-xl border border-blue-100">
          <BrainCircuit className="w-6 h-6 text-indigo-500" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-2">
            AI Explanation
            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">SHAP ENGINE</span>
          </h3>
          <p className="text-slate-600 leading-relaxed text-[15px]">
            {text}
          </p>
        </div>
      </div>
    </GlassContainer>
  );
};

export default ExplanationPanel;
