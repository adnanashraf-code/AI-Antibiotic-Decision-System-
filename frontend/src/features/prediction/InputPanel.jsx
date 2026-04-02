import { useState } from "react";
import GlassContainer from "../../layout/GlassContainer";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { predictResistance } from "../../services/api";
import { Beaker } from "lucide-react";

const InputPanel = ({ setData, setIsLoading, setError }) => {
  const [form, setForm] = useState({
    bacteria: "",
    feature1: "",
    feature2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.bacteria || form.feature1 === "" || form.feature2 === "") {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await predictResistance({
        bacteria: form.bacteria,
        feature1: Number(form.feature1),
        feature2: Number(form.feature2),
      });
      setData(result);
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to connect to the prediction engine. Ensure backend is running.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <GlassContainer className="shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-50 text-blue-500 p-2 rounded-xl">
          <Beaker className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Patient Sample</h2>
      </div>

      <form onSubmit={submit} className="space-y-5">
        <Input
          label="Bacteria Strain"
          placeholder="e.g., E. coli, S. aureus"
          value={form.bacteria}
          onChange={(e) => setForm({ ...form, bacteria: e.target.value })}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Marker Index A"
            type="number"
            step="any"
            placeholder="0.00"
            value={form.feature1}
            onChange={(e) => setForm({ ...form, feature1: e.target.value })}
          />
          <Input
            label="Marker Index B"
            type="number"
            step="any"
            placeholder="0.00"
            value={form.feature2}
            onChange={(e) => setForm({ ...form, feature2: e.target.value })}
          />
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full py-3.5 text-base shadow-lg shadow-blue-500/25" 
            isLoading={isSubmitting}
          >
            Run Neural Inference
          </Button>
        </div>
      </form>
    </GlassContainer>
  );
};

export default InputPanel;
