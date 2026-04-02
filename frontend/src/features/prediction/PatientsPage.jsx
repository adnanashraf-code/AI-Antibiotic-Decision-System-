import { useState } from "react";

const PatientsPage = ({ setView, user }) => {
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

      {/* SideNavBar */}
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
        <nav className="flex-1 flex flex-col gap-2">
          <button 
            onClick={() => setView("patients")}
            className="w-full flex items-center gap-3 px-4 py-3 skeuo-inner text-blue-700 font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span>Patients</span>
          </button>
          <button 
            onClick={() => setView("prediction")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">psychology_alt</span>
            <span>Predictions</span>
          </button>
          <button 
            onClick={() => setView("labs")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">biotech</span>
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
        <button 
          onClick={() => setView("prediction")}
          className="mt-6 mb-8 skeuo-btn-primary py-4 px-4 font-headline font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Analysis
        </button>
        <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-white/50">
          <button onClick={() => setView('support')} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-600 font-bold transition-colors w-full text-left">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span className="text-xs">Support Center</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col w-full overflow-x-hidden">
        {/* TopNavBar (Shared Component) */}
        <header className="flex justify-between items-center w-full px-6 lg:px-8 h-16 sticky top-0 bg-white/80 backdrop-blur-xl shadow-sm z-40 border-b border-slate-100">
          <div className="flex items-center gap-4 lg:gap-8">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 skeuo-btn text-slate-600"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <button onClick={() => setView('landing')} className="font-extrabold text-blue-700 text-xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">AADS</button>
            <nav className="hidden lg:flex items-center gap-6 font-manrope tracking-tight text-sm">
              <button onClick={() => setView('guidelines')} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Guidelines</button>
              <button onClick={() => setView('compliance')} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Compliance</button>
              <button onClick={() => setView('support')} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Support</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">search</span>
              <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-48 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="Patient ID..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                {user ? (
                  <button onClick={() => setView('settings')} className="skeuo-btn w-10 h-10 p-0.5 overflow-hidden">
                    <img alt={user.name} className="w-full h-full rounded-xl object-cover" src={user.avatar || "/logo.png"}/>
                  </button>
                ) : (
                  <button onClick={() => setView('login')} className="skeuo-btn-primary px-5 py-2 text-xs font-bold shadow-md">
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="skeuo-inner px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block inline-block">Secure Isolate Registry</span>
            <h2 className="text-4xl font-headline font-black text-slate-800 tracking-tight">Active Assessments</h2>
            <p className="text-slate-500 font-bold mt-2 max-w-md">Real-time antibiotic protocol tracking and neural resistance risk modeling.</p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex skeuo-inner p-1.5 rounded-2xl">
              <button className="px-6 py-2.5 skeuo-card text-[10px] font-black uppercase tracking-widest text-blue-700">All Nodes</button>
              <button className="px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">Recent</button>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 skeuo-btn text-[10px] font-black uppercase tracking-widest text-slate-600">
              <span className="material-symbols-outlined text-lg">filter_list</span>
              Neural Filter
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="skeuo-card p-8 flex flex-col justify-between h-44">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Monitored Isolate</span>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-headline font-black text-slate-800">128</span>
              <span className="text-blue-600 text-xs font-black skeuo-inner px-2 py-1 rounded-lg">
                +4.2%
              </span>
            </div>
          </div>
          <div className="skeuo-card p-8 flex flex-col justify-between h-44 border-red-200/50">
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Critical Resistance</span>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-headline font-black text-red-600">07</span>
              <div className="w-12 h-12 rounded-2xl skeuo-inner text-red-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 skeuo-card p-8 flex flex-col justify-between h-44 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Regional Strain Index</span>
              <h4 className="text-xl font-headline font-black text-slate-800 mt-2">Klebsiella Activity</h4>
            </div>
            <div className="absolute right-0 bottom-0 w-3/4 h-2/3 skeuo-inner rounded-l-[40px] opacity-40">
              {/* Abstract depth representation */}
            </div>
            <span className="text-blue-700 text-[10px] font-black relative z-10 uppercase tracking-widest bg-white/40 px-3 py-1 rounded-full inline-block">Protocol Optimized: 92%</span>
          </div>
        </div>

          {/* Patient List (Precision Curator Layout) */}
          <div className="space-y-4">
          {/* Table Headers (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 px-8 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest gap-4">
            <div className="col-span-4">Patient Information</div>
            <div className="col-span-3">Treatment Protocol</div>
            <div className="col-span-2">Last Analysis</div>
            <div className="col-span-2 text-center">Risk Level</div>
            <div className="col-span-1"></div>
          </div>

          {/* Patient Card 1 */}
          <div className="flex flex-col md:grid md:grid-cols-12 items-start md:items-center p-6 md:px-8 md:py-5 bg-white rounded-2xl hover:translate-x-1 transition-all duration-300 ambient-shadow gap-4 md:gap-0 cursor-pointer" onClick={() => setView('patientDetail')}>
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold overflow-hidden border-2 border-white ring-4 ring-slate-50">
                <img alt="Patient" src="/logo.png"/>
              </div>
              <div>
                <p className="font-headline font-black text-slate-800 leading-tight">Elena Rodriguez</p>
                <p className="text-[10px] text-slate-400 font-bold tracking-widest mt-0.5">#8821-XP</p>
              </div>
            </div>
            <div className="col-span-3 flex md:block items-center justify-between w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs font-bold text-blue-700">Vancomycin</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold md:mt-1 ml-2 md:ml-1">IV • 250mg • q12h</p>
            </div>
            <div className="col-span-2 hidden md:block">
              <p className="text-xs font-bold text-slate-800">14 Oct, 2024</p>
              <p className="text-[9px] text-slate-400 font-black tracking-widest">08:45 AM</p>
            </div>
            <div className="col-span-2 flex items-center justify-between md:justify-center w-full">
              <div className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
                Low Risk
              </div>
              <button className="md:hidden skeuo-btn w-10 h-10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="col-span-1 hidden md:flex justify-end">
              <button className="w-10 h-10 skeuo-btn flex items-center justify-center text-slate-300 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

            {/* Patient Card 2 (Critical State) */}
            <div className="grid grid-cols-12 items-center px-8 py-5 bg-white rounded-xl hover:translate-x-1 transition-all duration-300 group ambient-shadow cursor-pointer relative overflow-hidden" onClick={() => setView('patientDetail')}>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
              <div className="col-span-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold overflow-hidden border-2 border-white">
                  <img alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf18pDn5oaw3ZHocvOYESA8JIlJzV8nRnX7SkIh-tFHpk4Cy9r0vX9ROkZnB8mSwnIxhaR004dQTfc7IqV4Td11i7_Msui_suKChNKvlRqts2gw8meOOtWkoZaBPl9JVufBTsVqCiujSxHbY2e3FRsJRhfhFhm04C6wbU4aswqR6HFtXHz-1XR8vcEmHjsGOoDSGxVrX3eHkgDnkIEsVHfx771w6G7bxieaJcyx6xri80kJXNF2-sFejSC_OTfwWNHgl4XKU396iJd"/>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Marcus Thorne</p>
                  <p className="text-xs text-on-surface-variant font-mono">ID: #9042-AL</p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="text-sm font-medium text-on-surface-variant">Ceftriaxone</span>
                </div>
                <p className="text-[10px] text-error font-bold mt-1 ml-1 uppercase">Adjustment Recommended</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-on-surface">15 Oct, 2024</p>
                <p className="text-[10px] text-error font-bold">Just Now</p>
              </div>
              <div className="col-span-2 flex justify-center">
                <div className="px-4 py-1.5 bg-error-container text-error rounded-full text-xs font-bold border border-error/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>priority_high</span>
                  High Risk
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-error hover:bg-error-container transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Patient Card 3 */}
            <div className="grid grid-cols-12 items-center px-8 py-5 bg-white rounded-xl hover:translate-x-1 transition-all duration-300 group ambient-shadow cursor-pointer" onClick={() => setView('patientDetail')}>
              <div className="col-span-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold overflow-hidden border-2 border-white">
                  <img alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq41MrsnRDIg-aMWWKQowyGNKq9goytsNWTxH8f1ZRWQGS66Yo-SGzFDUvT3gw3C4Lmy13ztqW3fupGRoVI8p3jqcUO7wVHKQlxNsMTAuf4hk80at_AGB-X_NsXX3eClKoXgp7eGxl2yIolJobJ6NDKBRDEoX0p8GQSsQEV2aVwiBAV9JfGZheF_nISky6jMDXgaP0y-9cK-5TKl4dCZmpvp5Uh5UsvRfVe6ZmqahaQwSt5kMqErDXNVVey4CfCMlaJ3S3FQF4m-YE"/>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Dr. Silas Vane</p>
                  <p className="text-xs text-on-surface-variant font-mono">ID: #4432-JJ</p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="text-sm font-medium text-on-surface-variant">Observation Only</span>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-on-surface">13 Oct, 2024</p>
                <p className="text-[10px] text-slate-400 font-bold">Yesterday</p>
              </div>
              <div className="col-span-2 flex justify-center">
                <div className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold border border-outline-variant/30">
                  Moderate
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-primary hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Patient Card 4 */}
            <div className="grid grid-cols-12 items-center px-8 py-5 bg-white rounded-xl hover:translate-x-1 transition-all duration-300 group ambient-shadow cursor-pointer" onClick={() => setView('prediction')}>
              <div className="col-span-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold overflow-hidden border-2 border-white">
                  <img alt="Patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzb-0f00mZFTHo3MAox4I7PVruCN5GLxDnD3WhqdwvHd8_lz2ccu75wK6dL4CGM1nAopYBQNA1cGN8b50gmsDhKNriR5z7OHtbInIAGVONcwrg7YtH2mzXAIDzx386erKbxqWP1XKrYR5OpcRVGA55klVOhs_QgSsbysuGdBUeDuCA2TIZKmyFJQ05Evrg4Jw28aKbA1d79tR5Epu5tHRDrFbhvboMOgYfIrheX25_G4_i3DO-JUgJH-n94V8ZuURAO9hPimowSdLU"/>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Julian Chen</p>
                  <p className="text-xs text-on-surface-variant font-mono">ID: #5512-KL</p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-sm font-medium text-on-surface-variant">Amoxicillin</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 ml-1">PO • 500mg • q8h</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-on-surface">14 Oct, 2024</p>
                <p className="text-[10px] text-tertiary font-bold">11:30 AM</p>
              </div>
              <div className="col-span-2 flex justify-center">
                <div className="px-4 py-1.5 bg-tertiary-container/10 text-tertiary-container rounded-full text-xs font-bold border border-tertiary-container/20">
                  Low Risk
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-primary hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Insight Chip (Contextual Highlight) */}
          <div className="mt-12 bg-tertiary-container/5 rounded-2xl p-6 border border-tertiary-fixed-dim/20 glass-blur">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-tertiary-container">Resistance Intelligence Update</h4>
                <p className="text-sm text-on-tertiary-fixed-variant mt-1">Cross-referencing current patient cohort with regional pathogen database. 3 patients show early signatures of ESBL-producing organisms. Review suggested.</p>
                <button onClick={() => setView('prediction')} className="mt-3 text-xs font-bold text-tertiary underline decoration-2 underline-offset-4 hover:text-tertiary-container transition-colors">Run Cohort Deep Analysis</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Shared Component) */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-10 w-full mt-auto border-t border-white/40 bg-[#e0e5ec] pb-32 md:pb-10">
          <div className="font-inter text-xs text-slate-400 font-black uppercase tracking-widest mb-6 md:mb-0">
            © 2024 AI Antibiotic Decision System (AADS)
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Guidelines', 'Compliance', 'Support'].map(f => (
              <button key={f} onClick={() => setView('support')} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-700 transition-colors">{f}</button>
            ))}
          </div>
        </footer>
      </main>

      {/* Mobile Bottom NavBar (Shared Component Trigger) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-4 z-50">
        <button onClick={() => setView('patients')} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
          <span className="text-[10px] font-bold">Patients</span>
        </button>
        <button onClick={() => setView('prediction')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">psychology_alt</span>
          <span className="text-[10px] font-medium">Trends</span>
        </button>
        <button onClick={() => setView('labs')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">biotech</span>
          <span className="text-[10px] font-medium">Labs</span>
        </button>
        <button onClick={() => setView("settings")} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default PatientsPage;
