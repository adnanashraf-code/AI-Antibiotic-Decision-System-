import { useState } from "react";

const CompliancePage = ({ setView, user }) => {
  return (
    <div className="skeuo-bg text-slate-700 font-body min-h-screen antialiased overflow-x-hidden">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#e0e5ec]/90 backdrop-blur-md shadow-sm border-b border-white/40 flex justify-between items-center px-8 h-18 text-slate-800">
        <div className="flex items-center gap-10">
          <button onClick={() => setView('landing')} className="text-2xl font-black tracking-tighter text-blue-800 cursor-pointer hover:opacity-80 transition-opacity uppercase">AADS Governance</button>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setView('patients')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Patients</button>
            <button onClick={() => setView('prediction')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Predictions</button>
            <button onClick={() => setView('compliance')} className="text-blue-700 font-black uppercase text-[10px] tracking-[0.2em] px-4 py-2 skeuo-inner rounded-xl">Compliance</button>
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
              Secure Auth
            </button>
          )}
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col py-8 px-4 fixed left-0 top-0 h-screen w-64 border-r border-white/40 bg-[#e0e5ec] mt-18 z-40 shadow-[4px_0_15px_rgba(163,177,198,0.2)]">
        <div className="flex flex-col gap-2 flex-grow">
          <div className="mb-10 px-4">
            <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Clinical Suite</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Audit Protocol v4.2</p>
          </div>
          <nav className="space-y-4">
            <button onClick={() => setView('patients')} className="w-full flex items-center gap-3 px-4 py-4 text-slate-500 skeuo-btn font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl">group</span>
              <span>Patients</span>
            </button>
            <button onClick={() => setView('prediction')} className="w-full flex items-center gap-3 px-4 py-4 text-slate-500 skeuo-btn font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl">psychology</span>
              <span>Predictions</span>
            </button>
            <button onClick={() => setView('labs')} className="w-full flex items-center gap-3 px-4 py-4 text-slate-500 skeuo-btn font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl">biotech</span>
              <span>Labs</span>
            </button>
            <button onClick={() => setView('compliance')} className="w-full flex items-center gap-3 px-4 py-4 skeuo-inner text-blue-700 font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              <span>Compliance</span>
            </button>
            <button onClick={() => setView('settings')} className="w-full flex items-center gap-3 px-4 py-4 text-slate-500 skeuo-btn font-inter text-sm font-bold">
              <span className="material-symbols-outlined text-xl">settings</span>
              <span>Settings</span>
            </button>
          </nav>
        </div>
        <div className="mt-auto border-t border-white/50 pt-8 space-y-4">
          <button onClick={() => setView('support')} className="w-full flex items-center gap-4 px-4 py-2 text-slate-400 hover:text-slate-600 font-bold transition-colors">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span className="text-xs">System Support</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-24 pb-12 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-14">
            <span className="skeuo-inner px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block inline-block">Security Node Alpha</span>
            <h1 className="font-headline text-5xl font-black text-slate-800 tracking-tight mb-4">Compliance Portal</h1>
            <p className="text-slate-500 font-bold max-w-2xl text-xl leading-relaxed">
              Real-time immutable ledger of all PHI access and system telemetry for clinical governance.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-14">
            <div className="md:col-span-2 skeuo-card p-10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="skeuo-inner p-1 rounded-full"><span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span></span>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Regulatory Alignment</span>
                </div>
                <h3 className="text-5xl font-headline font-black text-slate-800 mb-2">100%</h3>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">HIPAA Compliance Index</p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 skeuo-inner p-10 rounded-full">
                <span className="material-symbols-outlined text-[120px]">verified_user</span>
              </div>
            </div>
            
            <div className="skeuo-card p-8 flex flex-col justify-between h-48">
              <div className="flex justify-between items-start">
                <div className="skeuo-inner p-2 rounded-xl text-blue-600">
                  <span className="material-symbols-outlined text-xl">shield_lock</span>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">24H</span>
              </div>
              <div>
                <h3 className="text-3xl font-headline font-black text-slate-800 tracking-tight">1.2K</h3>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Access Events</p>
              </div>
            </div>
            
            <div className="skeuo-card p-8 flex flex-col justify-between h-48">
              <div className="flex justify-between items-start">
                <div className="skeuo-inner p-2 rounded-xl text-orange-600">
                  <span className="material-symbols-outlined text-xl">update</span>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live</span>
              </div>
              <div>
                <h3 className="text-3xl font-headline font-black text-slate-800 tracking-tight">v4.2</h3>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Core Version</p>
              </div>
            </div>
          </div>

          {/* Audit Table Section */}
          <div className="skeuo-card overflow-hidden">
            {/* Filters Bar */}
            <div className="bg-white/10 px-8 py-6 flex flex-wrap gap-6 items-center justify-between border-b border-white/20">
              <div className="flex items-center gap-4">
                <button className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-blue-700 flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                  Filter Node Logs
                </button>
                <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 px-4 py-2 transition-colors">Export Ledger</button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Time Buffer:</span>
                <span className="skeuo-inner text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Active 24H</span>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase text-on-surface-variant tracking-widest">Timestamp</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase text-on-surface-variant tracking-widest">Subject ID</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase text-on-surface-variant tracking-widest">Action Performed</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase text-on-surface-variant tracking-widest">Resource</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold uppercase text-on-surface-variant tracking-widest">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-on-surface">Oct 24, 2023</span>
                        <span className="text-[10px] font-medium text-on-surface-variant">14:22:18.042 UTC</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">JD</div>
                        <span className="text-sm font-medium">user_9921_dr</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-body px-2 py-1 bg-surface-container text-on-surface-variant rounded text-xs">PHI_RECORD_VIEW</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium">Patient #44829</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                        <span className="text-xs font-bold text-tertiary uppercase">Success</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">more_vert</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-on-surface">Oct 24, 2023</span>
                        <span className="text-[10px] font-medium text-on-surface-variant">13:10:45.112 UTC</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-white font-bold text-xs">AI</div>
                        <span className="text-sm font-medium">system_engine_core</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-body px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">MODEL_WEIGHTS_UPDATE</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium">Sepsis-Alpha-v4.2</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                        <span className="text-xs font-bold text-tertiary uppercase">Verified</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">more_vert</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-on-surface">Oct 24, 2023</span>
                        <span className="text-[10px] font-medium text-on-surface-variant">12:55:01.889 UTC</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold text-xs">SA</div>
                        <span className="text-sm font-medium">admin_m_roth</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-body px-2 py-1 bg-error-container text-on-error-container rounded text-xs">DATA_EXPORT_BULK</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium">Compliance_Report_Q3.pdf</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs font-bold text-primary uppercase">MFA_PASSED</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">more_vert</button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-on-surface">Oct 24, 2023</span>
                        <span className="text-[10px] font-medium text-on-surface-variant">11:04:12.331 UTC</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">EL</div>
                        <span className="text-sm font-medium">user_0411_nurse</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-body px-2 py-1 bg-surface-container text-on-surface-variant rounded text-xs">LOGIN_ATTEMPT</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-medium">Web_Portal_Primary</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-error rounded-full"></span>
                        <span className="text-xs font-bold text-error uppercase">Blocked_Geo</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">more_vert</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Pagination Bar */}
            <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/30 pb-20 md:pb-4">
              <span className="text-xs font-medium text-on-surface-variant">Showing 1 to 25 of 14,882 entries</span>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container text-xs font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container text-xs font-medium">3</button>
                <span className="px-2 text-on-surface-variant">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Insight Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20 md:pb-0">
            <div className="lg:col-span-2 bg-tertiary-container/10 p-6 rounded-xl border-l-4 border-tertiary">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary">auto_awesome</span>
                <div>
                  <h4 className="text-sm font-bold text-tertiary uppercase mb-1">AI Compliance Insight</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Auditing pattern analysis shows a 12% decrease in unauthorized access attempts since the implementation of adaptive MFA. All current model training data remains fully de-identified and compliant with Section 164.514(b).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-2">history_edu</span>
              <p className="text-xs font-bold text-on-surface uppercase mb-1">Signed Evidence</p>
              <p className="text-[10px] text-on-surface-variant mb-3">SHA-256: 8f2b...3c11</p>
              <button onClick={() => alert("✅ Title II HIPAA Certificate is generated and being downloaded as PDF.")} className="bg-primary hover:bg-primary-container transition-colors text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">Generate Certificate</button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-container py-3 px-6 flex justify-around items-center z-50">
        <button onClick={() => setView('patients')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px]">Patients</span>
        </button>
        <button onClick={() => setView('compliance')} className="flex flex-col items-center gap-1 text-blue-700">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
          <span className="text-[10px] font-bold">Compliance</span>
        </button>
        <button onClick={() => setView('prediction')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">psychology</span>
          <span className="text-[10px]">AI</span>
        </button>
        <button onClick={() => setView('settings')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px]">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default CompliancePage;
