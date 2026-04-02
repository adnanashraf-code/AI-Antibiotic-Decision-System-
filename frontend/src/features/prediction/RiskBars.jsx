import Card from "../../ui/Card";
import { ShieldAlert } from "lucide-react";

const getRiskColor = (resistance) => {
  if (resistance > 0.7) return "bg-red-500";
  if (resistance > 0.4) return "bg-amber-500";
  return "bg-emerald-500";
};

const RiskBars = ({ antibiotics }) => {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-2 mb-6">
        <ShieldAlert className="w-5 h-5 text-slate-400" />
        <h3 className="text-lg font-semibold text-slate-700">Resistance Risk</h3>
      </div>
      
      <div className="space-y-5">
        {antibiotics.map((a, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-end mb-1.5">
              <span className="text-sm font-medium text-slate-700">{a.name}</span>
              <span className="text-xs font-semibold text-slate-500">
                {(a.resistance * 100).toFixed(1)}%
              </span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${getRiskColor(a.resistance)}`}
                style={{ width: `${a.resistance * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RiskBars;
