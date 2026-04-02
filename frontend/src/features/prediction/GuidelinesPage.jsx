import { useState } from "react";

const GuidelinesPage = ({ setView, user }) => {
  return (
    <div className="skeuo-bg text-slate-700 font-body min-h-screen antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#e0e5ec]/90 backdrop-blur-md shadow-sm border-b border-white/40 flex justify-between items-center px-8 h-18">
        <div className="flex items-center gap-10">
          <button onClick={() => setView('landing')} className="text-2xl font-black tracking-tighter text-blue-800 cursor-pointer hover:opacity-80 transition-opacity uppercase">AADS</button>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setView('patients')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Patients</button>
            <button onClick={() => setView('prediction')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Predictions</button>
            <button onClick={() => setView('guidelines')} className="text-blue-700 font-black uppercase text-[10px] tracking-[0.2em] px-4 py-2 skeuo-inner rounded-xl">Guidelines</button>
          </div>
        </div>
        <div className="flex items-center gap-6 pl-6 border-l border-white/50">
          {user ? (
            <div className="flex items-center gap-4">
              <button onClick={() => setView('settings')} className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="skeuo-btn w-10 h-10 p-0.5 overflow-hidden">
                  <img alt={user.name} className="w-full h-full rounded-xl object-cover" src={user.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuBv8Y9NIfgCxBpjqGCWHJ_7CGGVZRPLj0V7xuoj5GCiNCjJJocRADLsaVQzCkmCrPLSf168x_H-tRFUUcUE907N0aGgC9VAmhsF_R54gDVClGOqsQozAwMLDQyoeDYfvspkGuYvnMqfNpdOgORON7z0kxjU41RDfWabzSIGbI9abTZephIHZYlcnFRz8H_xsmJmAD2-JA3ZWnoBoy8yaKzwQTjfa860W2fakdjiXajkNFidcdopevR7a5G6n2wXaNOt1sCYypIG1azu"}/>
                </div>
                <span className="hidden lg:block text-xs font-black text-slate-800 uppercase tracking-widest">{user.name}</span>
              </button>
            </div>
          ) : (
            <button onClick={() => setView('login')} className="skeuo-btn-primary px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] shadow-md transition-all active:scale-95">
              Access Manuals
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="mb-12">
          <span className="skeuo-inner px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block inline-block">Clinical Reference Node</span>
          <h1 className="font-headline text-5xl font-black text-slate-800 tracking-tight mb-4">AADS Standards</h1>
          <p className="text-slate-500 font-bold max-w-2xl text-xl leading-relaxed">
            Standardized protocols for AI-assisted evaluations and susceptibility scaling.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Document area */}
          <div className="lg:col-span-2 space-y-12">
            <div className="skeuo-card p-10">
              <h2 className="text-2xl font-black mb-6 text-slate-800 uppercase tracking-tight">1. Machine Learning Integration</h2>
              <p className="text-sm font-bold text-slate-500 mb-6 leading-relaxed">
                The AI models provide supplemental diagnostic indices. Clinical intuition and formal microbiology always override AI confidence scores.
              </p>
              <div className="skeuo-inner p-6 rounded-2xl border-l-8 border-blue-600 text-blue-700 font-black text-xs uppercase tracking-widest">
                Protocol: Empirical culture required BEFORE AI-informed initiation.
              </div>
            </div>

            <div className="skeuo-card p-10">
              <h2 className="text-2xl font-black mb-6 text-slate-800 uppercase tracking-tight">2. Severity Matrix</h2>
              <div className="skeuo-inner rounded-2xl overflow-hidden">
                <table className="w-full text-left text-[11px] font-black uppercase tracking-widest">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/10">
                      <th className="px-6 py-4 text-slate-400">Index Range</th>
                      <th className="px-6 py-4 text-slate-400">Risk Node</th>
                      <th className="px-6 py-4 text-slate-400">Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-white/20">
                      <td className="px-6 py-4">0 - 30%</td>
                      <td className="px-6 py-4 text-blue-600">Standard</td>
                      <td className="px-6 py-4">Ward monitoring</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="px-6 py-4">31 - 65%</td>
                      <td className="px-6 py-4 text-orange-600">Moderate</td>
                      <td className="px-6 py-4">Preemptive Fluids</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">66 - 100%</td>
                      <td className="px-6 py-4 text-red-600">Critical</td>
                      <td className="px-6 py-4">ICU Consult</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="skeuo-card p-8">
              <h3 className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.2em]">Quick Documentation</h3>
              <ul className="space-y-4">
                <li><button className="skeuo-btn w-full px-6 py-4 text-xs font-bold text-slate-700 hover:text-blue-600 text-left">Antibiogram Logic</button></li>
                <li><button className="skeuo-btn w-full px-6 py-4 text-xs font-bold text-slate-700 hover:text-blue-600 text-left">Renal Adjustment Scale</button></li>
                <li><button className="skeuo-btn w-full px-6 py-4 text-xs font-bold text-slate-700 hover:text-blue-600 text-left">Confidence Benchmarks</button></li>
              </ul>
            </div>
            
            <button onClick={() => setView('compliance')} className="w-full skeuo-btn-primary py-5 px-6 font-headline font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-lg">verified_user</span> Compliance Node
            </button>
            <button onClick={() => setView('support')} className="w-full skeuo-btn py-5 px-6 font-headline font-black text-sm uppercase tracking-widest text-slate-600 transition-all active:scale-95 flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-lg">help_outline</span> System Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GuidelinesPage;
