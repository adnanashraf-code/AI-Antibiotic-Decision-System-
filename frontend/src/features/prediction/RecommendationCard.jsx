import { CheckCircle2 } from "lucide-react";
import GlassContainer from "../../layout/GlassContainer";

const RecommendationCard = ({ best }) => {
  return (
    <GlassContainer className="bg-gradient-to-br from-emerald-500 to-teal-600 border-none relative overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 flex items-start gap-5">
        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <p className="text-emerald-100 font-medium tracking-wide uppercase text-sm mb-1">
            Primary Recommendation
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {best}
          </h2>
          <p className="text-emerald-50 mt-2 text-sm max-w-xl">
            Highest predicted efficacy based on specific genetic markers and resistance profile. Minimum inhibitory concentration is within safe therapeutic bounds.
          </p>
        </div>
      </div>
    </GlassContainer>
  );
};

export default RecommendationCard;
