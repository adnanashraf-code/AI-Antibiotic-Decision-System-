const LabsPage = ({ setView, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="skeuo-bg font-body text-slate-700 min-h-screen flex antialiased overflow-x-hidden">
      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Side Navigation Shell */}
      <aside className={`flex flex-col p-4 gap-2 h-screen w-64 fixed left-0 top-0 border-r border-white/40 bg-[#e0e5ec] z-[70] shadow-[4px_0_15px_rgba(163,177,198,0.2)] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex items-center gap-3 px-2 py-6 mb-6">
          <div className="w-12 h-12 rounded-2xl skeuo-inner flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined text-2xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
          </div>
          <div>
            <button onClick={() => setView('landing')} className="font-headline font-black text-blue-800 text-lg leading-none cursor-pointer hover:opacity-80 transition-opacity text-left">AADS</button>
            <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase mt-1">Clinical AI</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <button 
            onClick={() => setView("patients")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined">group</span>
            <span>Patients</span>
          </button>
          <button 
            onClick={() => setView("prediction")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined">psychology_alt</span>
            <span>Predictions</span>
          </button>
          {/* Active Tab: Labs */}
          <button 
            onClick={() => setView("labs")}
            className="w-full flex items-center gap-3 px-4 py-3 skeuo-inner text-blue-700 font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
            <span>Labs</span>
          </button>
          {user?.role === 'Admin' && (
            <button 
              onClick={() => setView("compliance")}
              className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
            >
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span>Compliance</span>
            </button>
          )}
          <button 
            onClick={() => setView("settings")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </button>
        </nav>
        <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-white/50">
          <button 
            onClick={() => setView("prediction")}
            className="w-full skeuo-btn-primary py-4 px-4 font-headline font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mb-4"
          >
            New Analysis
          </button>
          <button onClick={() => setView('support')} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-600 font-bold transition-colors w-full text-left">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span className="text-xs">Support Center</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col w-full overflow-x-hidden">
        {/* Top App Bar */}
        <header className="flex justify-between items-center w-full px-6 lg:px-8 h-16 border-b border-white/40 bg-[#e0e5ec]/90 backdrop-blur-md sticky top-0 z-40 shadow-sm text-slate-800">
          <div className="flex items-center gap-4 lg:gap-8">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 skeuo-btn text-slate-600"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <button onClick={() => setView('landing')} className="text-lg lg:text-xl font-black text-blue-800 uppercase tracking-tighter cursor-pointer hover:opacity-80 transition-opacity text-left">AADS Lab</button>
            <div className="hidden lg:flex gap-8">
              <button onClick={() => setView('guidelines')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors">Guidelines</button>
              <button onClick={() => setView('support')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors">Support</button>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-3 lg:gap-4 pl-4 lg:pl-6 border-l border-white/50">
              {user ? (
                <button onClick={() => setView('settings')} className="skeuo-btn w-10 h-10 p-0.5 overflow-hidden">
                  <img alt={user.name} className="w-full h-full rounded-xl object-cover" src={user.avatar || "/logo.png"}/>
                </button>
              ) : (
                <button onClick={() => setView('login')} className="skeuo-btn-primary px-6 lg:px-8 py-2 md:py-3 text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-md">
                  Portal
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Lab Content Area */}
        <div className="p-8 lg:p-12 space-y-12">
          {/* Header Section */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="skeuo-inner px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block inline-block">Neural Diagnosis Node</span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-slate-800 tracking-tight">Clinical Lab Reports</h2>
              <p className="text-sm lg:text-base text-slate-500 font-bold mt-2 max-w-md">Real-time processing of bacterial isolates and MIC assessments.</p>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="skeuo-input pl-12 pr-6 py-3 w-full md:w-64 text-sm font-bold" placeholder="Node Logs..." type="text"/>
              </div>
              <button className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 border border-white/40">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filter
              </button>
            </div>
          </section>

          {/* Main Layout: Table + Detail View (Asymmetric Grid) */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Recent Findings Table */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-bold text-on-surface">Recent Laboratory Findings</h3>
                <span className="text-xs text-on-surface-variant">Showing 24 results</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 bg-surface-container/30">
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Patient</th>
                      <th className="px-6 py-4 font-semibold">Test Name</th>
                      <th className="px-6 py-4 font-semibold">Collected</th>
                      <th className="px-6 py-4 font-semibold">Flag</th>
                      <th className="px-6 py-4 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {/* Row 1: Active Selection */}
                    <tr className="bg-surface-container-lowest group cursor-pointer transition-colors" onClick={() => setView('prediction')}>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary text-[10px] font-bold uppercase">Finalized</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">John Doe</p>
                            <p className="text-[10px] text-on-surface-variant">MRN: 882190</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-on-surface">Blood Culture (Aerobic)</td>
                      <td className="px-6 py-5 text-xs text-on-surface-variant">Oct 24, 08:30 AM</td>
                      <td className="px-6 py-5">
                        <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-surface-container-lowest group cursor-pointer transition-colors" onClick={() => setView('prediction')}>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-secondary-container/10 text-secondary text-[10px] font-bold uppercase">Pending</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">EM</div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">Elena Martinez</p>
                            <p className="text-[10px] text-on-surface-variant">MRN: 442901</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-on-surface">Wound Culture (Swab)</td>
                      <td className="px-6 py-5 text-xs text-on-surface-variant">Oct 23, 02:15 PM</td>
                      <td className="px-6 py-5">
                        <span className="material-symbols-outlined text-outline-variant">horizontal_rule</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-surface-container-lowest group cursor-pointer transition-colors" onClick={() => setView('prediction')}>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary text-[10px] font-bold uppercase">Finalized</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RT</div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">Robert Taylor</p>
                            <p className="text-[10px] text-on-surface-variant">MRN: 319202</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-on-surface">Respiratory Panel PCR</td>
                      <td className="px-6 py-5 text-xs text-on-surface-variant">Oct 22, 11:45 AM</td>
                      <td className="px-6 py-5">
                        <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detail View: Selected Lab Report */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-on-surface/5 p-8 border border-outline-variant/10 relative overflow-hidden">
                {/* AI Insight Badge */}
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-bl-xl rounded-tr-xl flex items-center gap-2 backdrop-blur-md">
                    <span className="material-symbols-outlined text-xs">auto_awesome</span>
                    AI ANALYSIS ACTIVE
                  </span>
                </div>
                <header className="mb-8">
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Detailed Report</p>
                  <h3 className="font-manrope text-2xl font-extrabold text-on-surface">John Doe</h3>
                  <p className="text-sm text-on-surface-variant">Blood Culture (Aerobic) • #LAB-882-90</p>
                </header>

                {/* Sensitivity Results Grid */}
                <div className="space-y-6">
                  <div className="p-4 bg-error-container/20 rounded-xl border-l-4 border-error">
                    <p className="text-xs font-bold text-error uppercase mb-2">Critical Finding</p>
                    <p className="text-sm font-bold text-on-background">Staphylococcus aureus (MRSA)</p>
                    <p className="text-xs text-on-surface-variant mt-1">Identified via MALDI-TOF mass spectrometry.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-4">Antibiotic Sensitivity (AST)</h4>
                    <div className="space-y-3">
                      {/* Sensitivity Item */}
                      <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                        <span className="text-sm font-medium">Vancomycin</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-tertiary">S</span>
                          <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="w-1/4 h-full bg-tertiary"></div>
                          </div>
                          <span className="text-xs text-on-surface-variant">≤ 2</span>
                        </div>
                      </div>
                      
                      {/* Sensitivity Item */}
                      <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                        <span className="text-sm font-medium">Oxacillin</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-error">R</span>
                          <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-error"></div>
                          </div>
                          <span className="text-xs text-on-surface-variant">≥ 16</span>
                        </div>
                      </div>
                      
                      {/* Sensitivity Item */}
                      <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                        <span className="text-sm font-medium">Daptomycin</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-tertiary">S</span>
                          <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-tertiary"></div>
                          </div>
                          <span className="text-xs text-on-surface-variant">1.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendation Block */}
                  <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-xl">clinical_notes</span>
                      <h4 className="text-sm font-bold text-primary">AADS AI Recommendation</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Patient shows high sensitivity to <span className="font-bold text-on-surface">Vancomycin</span>. Based on renal function (CrCl: 72 mL/min), recommend loading dose 25-30 mg/kg followed by maintenance dosing. 
                    </p>
                    <button 
                      onClick={() => setView('prediction')}
                      className="mt-4 w-full bg-primary text-white py-2.5 rounded-full text-xs font-bold hover:scale-[0.98] transition-transform"
                    >
                      Initiate Prescription Protocol
                    </button>
                  </div>
                </div>
              </div>

              {/* Side Utility: Lab Trend */}
              <div className="bg-surface-container-low rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold uppercase text-on-surface-variant">WBC Count Trend</h4>
                  <span className="text-xs font-bold text-error">+12.4%</span>
                </div>
                <div className="h-16 flex items-end gap-1">
                  <div className="flex-1 bg-surface-container-high rounded-t-sm h-[40%]"></div>
                  <div className="flex-1 bg-surface-container-high rounded-t-sm h-[45%]"></div>
                  <div className="flex-1 bg-surface-container-high rounded-t-sm h-[35%]"></div>
                  <div className="flex-1 bg-surface-container-high rounded-t-sm h-[60%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[85%]"></div>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-2 text-center">Last 5 measurements (K/uL)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-10 w-full mt-auto border-t border-white/40 bg-[#e0e5ec] pb-32 md:pb-10">
          <div className="font-inter text-xs text-slate-400 font-black uppercase tracking-widest mb-6 md:mb-0">
            © 2024 AI Antibiotic Decision System (AADS)
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Guidelines', 'Privacy', 'Support'].map(f => (
              <button key={f} onClick={() => setView('support')} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-700 transition-colors">{f}</button>
            ))}
          </div>
        </footer>
      </main>

      {/* FAB for Quick Actions */}
      <button 
        onClick={() => setView('prediction')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform group"
      >
        <span className="material-symbols-outlined text-2xl group-rotate-90 transition-transform">add</span>
      </button>

      {/* Mobile Bottom NavBar (Shared Component Trigger) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-4 z-50">
        <button onClick={() => setView('patients')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold">Patients</span>
        </button>
        <button onClick={() => setView('prediction')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">psychology_alt</span>
          <span className="text-[10px] font-medium">Trends</span>
        </button>
        <button onClick={() => setView('labs')} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
          <span className="text-[10px] font-medium">Labs</span>
        </button>
        <button onClick={() => setView('settings')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default LabsPage;
