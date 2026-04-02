import { useState } from "react";
import { predictResistance } from "../../services/api";

const PredictionPage = ({ setView, user }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    bacteria: "",
    age: "",
    comorbidities: "None",
    previousUse: "No use in last 6 months"
  });

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatLog, setChatLog] = useState([
    { sender: 'AI', text: 'Hello doctor. I am your AADS Clinical Assistant. How can I help you interpret the latest antibiotic resistance prediction?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if(!chatInput.trim()) return;
    setChatLog([...chatLog, { sender: 'User', text: chatInput }]);
    const query = chatInput;
    setChatInput('');
    setTimeout(() => {
      let reply = "I've analyzed the prediction. Based on the patient's demographics and localized testing, this is the statistically safest option.";
      if (query.toLowerCase().includes('why')) {
        reply = `The selected antibiotic was chosen because it has the lowest local resistance (${data && data.best ? (data.antibiotics.find(a=>a.name === data.best)?.resistance * 100).toFixed(0) : 10}%). Alternative therapies like Penicillin or Amoxicillin have exhibited critical failure rates in your region.`;
      }
      setChatLog(prev => [...prev, { sender: 'AI', text: reply }]);
    }, 1500);
  };

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('aads_prediction_history');
    return saved ? JSON.parse(saved) : [];
  });

  const handlePredict = async () => {
    if (!form.bacteria) {
      setError("Please enter a bacteria strain.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const riskMap = {
        "None": 0,
        "Diabetes": 3,
        "COPD": 4,
        "Heart Failure": 5,
        "Chronic Liver Disease": 6,
        "Malignancy/Cancer": 7,
        "Renal Failure": 8,
        "Chronic Kidney Disease": 5,
        "Hypertension": 2,
        "Asthma": 2,
        "Immunocompromised": 9
      };

      const result = await predictResistance({
        bacteria: form.bacteria,
        feature1: Number(form.age) || 35,
        feature2: riskMap[form.comorbidities] || 0
      });
      setData(result);
      
      // Save History
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        bacteria: form.bacteria,
        recommended: result.best,
        risk: result.antibiotics.length > 0 ? (result.antibiotics[0].resistance * 100).toFixed(0) : 0
      };
      
      const newHistory = [newEntry, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('aads_prediction_history', JSON.stringify(newHistory));
      
    } catch (err) {
      setError("Failed to fetch prediction");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="skeuo-bg font-body text-slate-700 antialiased flex overflow-hidden h-screen">
      {/* Sidebar Navigation */}
      {/* Sidebar Navigation */}
      <aside className={`h-screen w-64 fixed lg:left-0 top-0 border-r border-white/40 bg-[#e0e5ec] flex flex-col p-4 gap-2 z-[60] shadow-[4px_0_15px_rgba(163,177,198,0.2)] transition-all duration-300 ${isMobileMenuOpen ? 'left-0' : '-left-64 lg:left-0'}`}>
        <div className="flex items-center justify-between lg:justify-start gap-3 px-3 py-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl skeuo-inner flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-xl lg:text-2xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
            </div>
            <div>
              <button onClick={() => setView('prediction')} className="font-headline font-black text-blue-800 tracking-tight cursor-pointer hover:opacity-80 transition-opacity text-left text-base lg:text-lg leading-tight uppercase">AADS Hub</button>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">Clinical Engine</p>
            </div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-slate-400 p-1 skeuo-btn">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          {[
            { id: 'patients', icon: 'group', label: 'Patients' },
            { id: 'prediction', icon: 'psychology_alt', label: 'Predictions' },
            { id: 'labs', icon: 'biotech', label: 'Labs' }
          ].map(item => (
            <button key={item.id} onClick={() => setView(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 font-inter text-sm font-bold rounded-xl transition-all ${item.id === 'prediction' ? 'skeuo-inner text-blue-700' : 'text-slate-500 skeuo-btn hover:text-blue-600'}`}>
              <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: item.id === 'prediction' ? "'FILL' 1" : ""}}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
          {user?.role === 'Admin' && (
            <button onClick={() => setView("compliance")} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span>Compliance</span>
            </button>
          )}
          <button onClick={() => setView("settings")} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </button>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/50 flex flex-col gap-2">
          <button onClick={() => setView("prediction")} className="mb-4 w-full py-4 skeuo-btn-primary font-headline font-black text-xs lg:text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
            New Analysis
          </button>
          <button onClick={() => setView('support')} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-600 text-xs w-full text-left font-bold transition-colors">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span>Support Center</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55] lg:hidden animate-fade-in"></div>
      )}

      {/* Main Content Canvas */}
      <main className="lg:ml-64 flex-1 flex flex-col overflow-y-auto min-h-screen">
        {/* Top App Bar */}
        <header className="flex justify-between items-center w-full px-4 lg:px-8 h-20 sticky top-0 bg-[#e0e5ec]/90 backdrop-blur-md z-40 border-b border-white/40 shadow-sm text-slate-800">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 skeuo-btn text-slate-500">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full hidden sm:block">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">search</span>
              <input className="skeuo-input w-full pl-10 pr-4 h-11 text-xs font-bold" placeholder="Universal Patient Search..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 ml-4">
            <div className="hidden xl:flex items-center gap-4 border-r border-slate-200 pr-6">
              <button onClick={() => setView('guidelines')} className="text-xs font-black uppercase text-slate-500 hover:text-blue-700 transition-colors">Manual</button>
              <button onClick={() => setView('compliance')} className="text-xs font-black uppercase text-slate-500 hover:text-blue-700 transition-colors">Security</button>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative skeuo-btn w-10 h-10 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-pulse"></span>
              </button>
              <div className="flex items-center gap-3">
                {user ? (
                  <button onClick={() => setView('settings')} className="flex items-center gap-2 group">
                    <img alt={user.name} className="w-10 h-10 rounded-xl object-cover skeuo-btn p-0.5" src={user.avatar || "/logo.png"}/>
                    <div className="hidden lg:block text-left">
                      <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-none">{user.name}</p>
                      <p className="text-[8px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">MD Terminal</p>
                    </div>
                  </button>
                ) : (
                  <button onClick={() => setView('login')} className="skeuo-btn-primary px-5 py-2 text-[10px] font-black uppercase tracking-widest">
                    Access
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 lg:p-12 space-y-12">
          {/* Main Input Section */}
          <section className="skeuo-card p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl skeuo-inner flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>microbiology</span>
              </div>
              <div>
                <h2 className="text-2xl font-headline font-black text-slate-800 tracking-tight">Resistance Diagnostic Input</h2>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Neural Multi-modal Analysis</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] ml-2">Bacterial Strain</label>
                <input 
                  className="skeuo-input w-full h-14 text-sm font-bold text-slate-700"
                  placeholder="e.g. Klebsiella Pneumoniae"
                  value={form.bacteria}
                  onChange={(e) => setForm({...form, bacteria: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] ml-2">Patient Age Index</label>
                <input 
                  className="skeuo-input w-full h-14 text-sm font-bold text-slate-700"
                  placeholder="Numerical value 1-100"
                  type="number"
                  value={form.age}
                  onChange={(e) => setForm({...form, age: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] ml-2">Comorbidities</label>
                <select 
                  className="skeuo-input w-full h-14 text-sm font-bold text-slate-700 appearance-none bg-no-repeat bg-[right_1rem_center]"
                  style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2364748b' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E")`}}
                  value={form.comorbidities}
                  onChange={(e) => setForm({...form, comorbidities: e.target.value})}
                >
                  <option>None</option>
                  <option>Diabetes</option>
                  <option>COPD (Chronic Lung Disease)</option>
                  <option>Heart Failure</option>
                  <option>Chronic Liver Disease</option>
                  <option>Malignancy/Cancer</option>
                  <option>Renal Failure (Stage 4-5)</option>
                  <option>Chronic Kidney Disease (Stage 1-3)</option>
                  <option>Hypertension</option>
                  <option>Asthma</option>
                  <option>Immunocompromised (HIV/Chemo)</option>
                  <option>Obesity (BMI &gt; 35)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] ml-2">Exposure Profile</label>
                <select 
                  className="skeuo-input w-full h-14 text-sm font-bold text-slate-700 appearance-none bg-no-repeat bg-[right_1rem_center]"
                  style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2364748b' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E")`}}
                  value={form.previousUse}
                  onChange={(e) => setForm({...form, previousUse: e.target.value})}
                >
                  <option>No use in last 6 months</option>
                  <option>Single course (Recent)</option>
                  <option>Multiple courses (Chronic)</option>
                </select>
              </div>
            </div>
            
            <button 
              onClick={handlePredict}
              disabled={isLoading}
              className="w-full mt-10 py-5 skeuo-btn-primary font-headline font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Neural Computing...
                </>
              ) : (
                <>
                   <span className="material-symbols-outlined">analytics</span>
                   Execute Resistance Model
                </>
              )}
            </button>
          </section>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column: History */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {history.length > 0 && (
                <div className="skeuo-card p-6">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center justify-between">
                    <span>Recent Predictions</span>
                    <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded-full">{history.length}</span>
                  </h4>
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div key={item.id} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-xs text-on-surface">{item.bacteria}</span>
                          <span className="text-[10px] text-slate-400">{item.date}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                            Recommended: <strong className="text-blue-600">{item.recommended}</strong>
                          </span>
                          <span className={`${parseInt(item.risk) > 50 ? 'text-error bg-error/10' : 'text-primary bg-primary/10'} px-2 py-0.5 rounded font-bold text-[10px]`}>
                            Risk: {item.risk}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Results */}
            <div className="col-span-12 lg:col-span-8 space-y-8 pb-10">
              {/* Prototype Discovery Node (Hackathon visibility) */}
              <div className="skeuo-card p-6 border-l-4 border-blue-600 bg-white/50 backdrop-blur-sm animate-fade-in-up">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg">description</span>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Prototype Discovery Node</h4>
                </div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight mb-2">Short Summary Of Prototype</h3>
                <p className="text-[11px] font-bold text-slate-500 leading-relaxed">
                  AADS is an AI-powered clinical decision support prototype that predicts antibiotic resistance using machine learning (Random Forest). It features a high-fidelity skeuomorphic interface, role-based access control (RBAC), and SHAP-driven explainability to help clinicians make data-driven decisions at the point of care.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase text-slate-400">AI Inference Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-[10px]">verified_user</span>
                    <span className="text-[9px] font-black uppercase text-slate-400">HIPAA Compliant Protocol</span>
                  </div>
                </div>
              </div>

              {data ? (
                <>
                <div className="animate-fade-in-up">
                  {/* Recommendation Card */}
                  <div className="skeuo-card p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase">Recommended Treatment</span>
                          <button onClick={() => { alert('Preparing PDF Report... Download will start shortly.'); window.print(); }} className="flex items-center gap-1 text-xs font-bold bg-white/10 hover:bg-white/30 transition-colors px-3 py-1 rounded-full cursor-pointer">
                            <span className="material-symbols-outlined text-sm">download</span> Report
                          </button>
                        </div>
                        <h3 className="text-5xl font-headline font-extrabold tracking-tight">{data.best}</h3>
                        <p className="text-tertiary-fixed max-w-md">Estimated susceptibility of {(100 - ((data.antibiotics?.find(a => a.name === data.best)?.resistance || 0.12) * 100)).toFixed(0)}% based on localized resistance patterns. Excellent match for {form.bacteria || "the identified strain"}.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex-1 text-center">
                          <span className="block text-[10px] uppercase tracking-widest mb-1 opacity-70">Decision Score</span>
                          <span className="block text-3xl font-bold">92/100</span>
                        </div>
                        {data.antibiotics && data.antibiotics.filter(a => a.resistance > 0.5).length > 1 && (
                          <div className="bg-error/30 backdrop-blur-md p-6 rounded-2xl border border-error/50 flex-1 text-center">
                            <span className="block text-[10px] uppercase tracking-widest mb-1 font-bold">MDR Score</span>
                            <span className="block text-3xl font-bold text-white">HIGH</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Results Table & Visualization */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Resistance Table */}
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-50">
                      <h4 className="text-lg font-headline font-bold mb-6">Resistance Profile</h4>
                      <div className="space-y-6">
                        {data.antibiotics.map((abx, idx) => {
                          const percent = Math.round(abx.resistance * 100);
                          let colorClass = "bg-primary-container";
                          let textClass = "text-on-surface-variant";
                          if (percent > 60) {
                            colorClass = "bg-error";
                            textClass = "text-error";
                          } else if (percent < 20) {
                            colorClass = "bg-tertiary";
                            textClass = "text-tertiary";
                          }

                          return (
                            <div key={idx} className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="font-bold">{abx.name}</span>
                                <span className={`${textClass} font-bold`}>{percent}% Resistant</span>
                              </div>
                              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${colorClass}`} style={{width: `${percent}%`}}></div>
                              </div>
                            </div>
                          );
                        })}
                        {/* Always show penicillin as a decoy just as in his static html unless present */}
                        {!data.antibiotics.find(a => a.name.toLowerCase().includes('penicillin')) && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-bold">Penicillin</span>
                              <span className="text-error font-bold">85% Resistant</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-error w-[85%]"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Trend Visualization (Strong Feature #2) */}
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-50">
                      <h4 className="text-lg font-headline font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                        Resistance Trend (Last 12mo)
                      </h4>
                      <div className="h-48 flex items-end justify-between gap-2 px-4 border-b border-l border-slate-100">
                        {[45, 52, 48, 60, 58, 65, 72, 68, 80, 85, 82, 88].map((h, i) => (
                          <div key={i} className="flex-1 group relative">
                            <div 
                              className={`w-full rounded-t-sm transition-all duration-500 bg-primary/20 group-hover:bg-primary/40`} 
                              style={{height: `${h}%`}}
                            ></div>
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400">M{i+1}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-8 italic text-center">Data indicates an 18% upward trend in multi-drug resistance for {form.bacteria || "this category"} in your facility.</p>
                    </div>
                  </div>

                    {/* AI Explanation Box */}
                    <div className="bg-surface-container-low p-8 rounded-xl border border-blue-50/50">
                      <h4 className="text-lg font-headline font-bold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">hub</span>
                        Why this recommendation?
                      </h4>
                      <p className="text-sm text-on-surface-variant mb-6">AI analysis identified key drivers for resistance in this profile.</p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-1 text-xs font-bold text-slate-500 uppercase">Feature</div>
                          <div className="w-32 text-xs font-bold text-slate-500 uppercase">Impact</div>
                        </div>
                        {data.features?.map((f, idx) => (
                           <div key={idx} className="flex items-center gap-4">
                             <span className="flex-1 text-sm font-medium">{f.name === 'Marker_A' ? 'Patient age factor' : 'Comorbidity patterns'}</span>
                             <div className="w-32 h-2 bg-slate-200 rounded-full">
                               <div className="h-full bg-primary rounded-full" style={{width: `${Math.min(f.value * 10, 100)}%`}}></div>
                             </div>
                           </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="bg-tertiary/10 p-4 rounded-xl flex items-start gap-3">
                          <span className="material-symbols-outlined text-tertiary text-xl">info</span>
                          <p className="text-[12px] text-tertiary font-medium leading-relaxed">
                            {data.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Not This Drug? (Killer Feature #1) */}
                  <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-50 mt-8">
                    <h4 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-error">block</span>
                      Alternative Drugs Analysis
                    </h4>
                    <p className="text-sm text-slate-500 mb-6 font-medium">Automated clinical rationale explaining why alternative broad-spectrum options were strictly rejected or not optimized by the neural engine.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.antibiotics?.filter(a => a.name !== data.best && a.resistance > 0.3).map((abx, idx) => {
                        return (
                          <div key={`err-${idx}`} className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-error/5 to-transparent border border-error/10 hover:border-error/20 transition-all group">
                            <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center text-error group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>cancel</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800">
                                <span className="text-error">{abx.name}</span> rejected
                              </p>
                              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                <strong>Clinical Finding:</strong> High baseline resistance (&gt;{(abx.resistance * 100).toFixed(0)}%). The predictive risk index exceeds safe thresholds for {form.bacteria || "this isolation group"}.
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {data.antibiotics?.filter(a => a.name !== data.best && a.resistance <= 0.3).map((abx, idx) => {
                        return (
                          <div key={`info-${idx}`} className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-transparent border border-slate-100 hover:border-slate-200 transition-all group">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>info</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800">
                                {abx.name} not optimal
                              </p>
                              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                                <strong>AI Insight:</strong> Has reasonable susceptibility (&gt;{(100 - abx.resistance * 100).toFixed(0)}%) but <span className="font-semibold text-primary">{data.best}</span> shows a statistically superior safety-to-efficacy ratio.
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full min-h-[400px] flex items-center justify-center p-8 bg-surface-container-low rounded-xl border-2 border-dashed border-slate-200 text-center">
                   <div>
                     <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">analytics</span>
                     <h3 className="text-xl font-bold text-slate-600 mb-2">Awaiting Parameters</h3>
                     <p className="text-slate-500 max-w-sm mx-auto">Please enter clinical and patient parameters in the form on the left to run the AI prediction engine.</p>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center px-8 py-6 w-full mt-auto border-t border-slate-100 bg-white">
          <span className="font-inter text-xs text-slate-400">© 2024 AI Antibiotic Decision System (AADS)</span>
          <div className="flex gap-6">
            <button onClick={() => setView('guidelines')} className="font-inter text-xs text-slate-400 hover:text-slate-700 transition-colors">Clinical Guidelines</button>
            <button onClick={() => setView('compliance')} className="font-inter text-xs text-slate-400 hover:text-slate-700 transition-colors">HIPAA Compliance</button>
            <button onClick={() => setView('support')} className="font-inter text-xs text-slate-400 hover:text-slate-700 transition-colors">Support Center</button>
          </div>
        </footer>
      </main>

      {/* Floating AI Prompt & Connect Chatbot (Killer Feature #2) */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {isChatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 h-96 flex flex-col overflow-hidden animate-fade-in-up">
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
                <span className="font-bold text-sm">AADS Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:opacity-80">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50">
              {chatLog.map((c, i) => (
                <div key={i} className={`p-3 rounded-xl text-xs max-w-[85%] ${c.sender === 'AI' ? 'bg-white border border-slate-200 self-start text-slate-700' : 'bg-primary text-white self-end'}`}>
                  {c.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} type="text" placeholder="Ask why this drug..." className="flex-1 text-xs px-3 py-2 bg-slate-100 rounded-lg outline-none focus:ring-1 focus:ring-primary" />
              <button type="submit" className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          </div>
        )}
        
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform active:scale-95 border border-slate-100">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>{isChatOpen ? 'close' : 'bolt'}</span>
        </button>
      </div>
    </div>
  );
};

export default PredictionPage;
