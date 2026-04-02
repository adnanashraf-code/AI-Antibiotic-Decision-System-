import Card from "../../ui/Card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Layers } from "lucide-react";

const FeatureChart = ({ features }) => {
  return (
    <Card className="h-full min-h-[300px] flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-slate-400" />
        <h3 className="text-lg font-semibold text-slate-700">Feature Importance</h3>
      </div>
      
      <div className="flex-1 w-full h-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={features} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
            />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
              {features.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#3b82f6" fillOpacity={0.8 - (index * 0.15)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default FeatureChart;
