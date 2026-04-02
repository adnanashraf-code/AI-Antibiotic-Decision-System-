import { useState, useEffect } from "react";

const PatientPortal = ({ setView, user }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Filter history for THIS patient (by email/name)
    const storedHistory = JSON.parse(localStorage.getItem('aads_prediction_history') || '[]');
    // In a real app, we would match by patient ID. Here we match by name for demo purposes.
    const myRecords = storedHistory.filter(h => h.name === user.name || h.patientName === user.name);
    setHistory(myRecords);
  }, [user]);

  return (
    <div className="skeuo-bg min-h-screen font-body text-slate-700 antialiased">
      {/* Patient Header */}
      <nav className="bg-[#e0e5ec] border-b border-white/50 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setView('landing')} className="text-2xl font-black text-blue-800 tracking-tighter">AADS</button>
          <span className="h-6 w-px bg-slate-300"></span>
          <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Patient Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900 leading-none">{user.name}</p>
            <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">Medical Profile</p>
          </div>
          <button onClick={() => setView('settings')} className="w-10 h-10 skeuo-btn p-0.5 overflow-hidden">
             <img src={user.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuBv8Y9NIfgCxBpjqGCWHJ_7CGGVZRPLj0V7xuoj5GCiNCjJJocRADLsaVQzCkmCrPLSf168x_H-tRFUUcUE907N0aGgC9VAmhsF_R54gDVClGOqsQozAwMLDQyoeDYfvspkGuYvnMqfNpdOgORON7z0kxjU41RDfWabzSIGbI9abTZephIHZYlcnFRz8H_xsmJmAD2-JA3ZWnoBoy8yaKzwQTjfa860W2fakdjiXajkNFidcdopevR7a5G6n2wXaNOt1sCYypIG1azu"} alt="Profile" className="w-full h-full object-cover rounded-xl" />
          </button>
          <button onClick={() => { if (handleLogout) handleLogout(); else { localStorage.removeItem('aads_user'); window.location.href = '/'; } }} className="skeuo-btn p-2 text-slate-500 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-xl">logout</span>
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 lg:p-12">
        <header className="mb-12">
            <h1 className="text-4xl font-headline font-extrabold text-slate-900 tracking-tight mb-2">My Health Records</h1>
            <p className="text-slate-500 text-lg">Securely view your antibiotic resistance tests and AI-assisted treatment history.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Health Overview Cards */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="skeuo-card p-8">
                    <span className="material-symbols-outlined text-blue-600 mb-4 skeuo-inner p-3 rounded-2xl">medical_services</span>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Last Visit</h3>
                    <p className="text-2xl font-black text-slate-800">{history[0]?.date || "Oct 24, 2023"}</p>
                </div>
                <div className="skeuo-card p-8">
                    <span className="material-symbols-outlined text-indigo-600 mb-4 skeuo-inner p-3 rounded-2xl">medication</span>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Active Prescriptions</h3>
                    <p className="text-2xl font-black text-slate-800">{history[0]?.recommended || "Ciprofloxacin"}</p>
                </div>
                <div className="skeuo-card p-8">
                    <span className="material-symbols-outlined text-red-500 mb-4 skeuo-inner p-3 rounded-2xl">assignment_late</span>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Known Resistance</h3>
                    <p className="text-2xl font-black text-slate-800">{history.length > 0 ? "Detected" : "None Detected"}</p>
                </div>
            </div>

            {/* Records List */}
            <div className="lg:col-span-8 skeuo-card overflow-hidden">
                <div className="p-8 border-b border-white/40 flex justify-between items-center bg-white/10">
                    <h3 className="font-black text-slate-800 text-lg">Available Test Reports</h3>
                    <span className="text-[10px] font-black skeuo-inner px-4 py-1.5 rounded-full text-slate-500 uppercase tracking-widest">{history.length} Reports</span>
                </div>
                {history.length > 0 ? (
                    <div className="divide-y divide-white/20">
                        {history.map((record, idx) => (
                            <div key={idx} className="p-8 hover:bg-white/20 transition-colors flex justify-between items-center group cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 skeuo-inner rounded-2xl flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined text-2xl">analytics</span>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 text-lg">{record.bacteria} Resistance Test</h4>
                                        <p className="text-sm text-slate-500 font-medium">Diagnostic Report • {record.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Optimized Rx</p>
                                        <p className="text-md font-black text-blue-700">{record.recommended}</p>
                                    </div>
                                    <button className="w-12 h-12 skeuo-btn group-hover:skeuo-btn-primary transition-all">
                                        <span className="material-symbols-outlined">download</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-24 text-center">
                        <span className="material-symbols-outlined text-7xl text-slate-300 mb-6 block">folder_open</span>
                        <p className="text-slate-400 font-bold italic text-lg">No clinical reports available yet.</p>
                    </div>
                )}
            </div>

            {/* Side Assistance */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <span className="material-symbols-outlined text-8xl" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 font-headline">Clinical Support</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6">Need help understanding your report? Connect with your care team or chat with our medical AI assistant.</p>
                        <button onClick={() => setView('support')} className="w-full bg-white text-blue-700 py-3 rounded-full font-bold text-sm shadow-sm hover:translate-y-[-2px] transition-transform">Contact Doctor</button>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Upcoming Appointments</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start pb-4 border-b border-slate-50">
                            <div className="bg-slate-100 px-3 py-2 rounded-lg text-center min-w-[50px]">
                                <span className="block text-xs font-bold text-slate-400">OCT</span>
                                <span className="block text-lg font-black text-slate-700">28</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">Tele-Consultation</p>
                                <p className="text-xs text-slate-400">Dr. Sarah Chen • 10:30 AM</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => alert("Redirecting to Appointment scheduling...")} className="w-full mt-6 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Schedule New Consult →</button>
                </div>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-10 mt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2024 AI Antibiotic Decision System (AADS) Patient Portal</p>
          <div className="flex gap-6">
              <button onClick={() => setView('guidelines')} className="text-xs text-slate-400 hover:text-slate-600">Health Guidelines</button>
              <button onClick={() => setView('compliance')} className="text-xs text-slate-400 hover:text-slate-600">Privacy Compliance</button>
          </div>
      </footer>
    </div>
  );
};

export default PatientPortal;
