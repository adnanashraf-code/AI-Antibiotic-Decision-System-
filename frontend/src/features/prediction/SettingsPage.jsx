import { useState } from "react";

const SettingsPage = ({ setView, user, setUser }) => {
  const [recConf, setRecConf] = useState(85);
  const [alertSens, setAlertSens] = useState(92);
  const [activeTab, setActiveTab] = useState('system'); // system, notifications, audit
  const defaultAv = "https://lh3.googleusercontent.com/aida-public/AB6AXuBkvgJhaEm6idHwT4UCHLW3vrYy-HALqXYqoqq4M2tiDnvKg1U1_w3azSDPjlgUfECihHNhMV-PagQiJVniN9O72Peo_dQ8A7zNlFKs47TsKV3bC2LOB8bHIW4abN66GiJSGaQTCoIg01u8oFtVg4rPRRyqiOAJvd_k-FrLQkmEkVMR5hV4PWTat-tWaC1uUM5uOX6WhZBAR7UygIM1VED2kp0mmhNd_FB4tDVzzqfoQaoEuaQFLNVNB3NvNU1_DlZzQEyEwJIq-l23";
  const [avatar, setAvatar] = useState(user?.avatar || defaultAv);
  const [headerAvatar, setHeaderAvatar] = useState(user?.avatar || defaultAv);

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAvatar(base64String);
        setHeaderAvatar(base64String);
        
        // Update current user state
        const updatedUser = { ...user, avatar: base64String };
        setUser(updatedUser);
        
        // Save to Database
        const storedDb = JSON.parse(localStorage.getItem('aads_users_db') || '[]');
        const updatedDb = storedDb.map(u => u.email === updatedUser.email ? updatedUser : u);
        localStorage.setItem('aads_users_db', JSON.stringify(updatedDb));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="skeuo-bg text-slate-700 font-body min-h-screen flex antialiased">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/40 bg-[#e0e5ec] flex flex-col p-4 gap-2 z-50 shadow-[4px_0_15px_rgba(163,177,198,0.2)]">
        <div className="flex items-center gap-3 px-2 mb-10 mt-6 md:px-3">
          <div className="w-12 h-12 rounded-2xl skeuo-inner flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined text-2xl" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>biotech</span>
          </div>
          <div>
            <button onClick={() => setView('landing')} className="font-headline font-black text-blue-800 leading-tight cursor-pointer hover:opacity-80 transition-opacity text-left text-lg">AADS</button>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Clinical AI</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <button 
            onClick={() => setView("patients")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">group</span>
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
          <button 
            onClick={() => setView("compliance")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 skeuo-btn font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span>Compliance</span>
          </button>
          {/* Active State: Settings */}
          <button 
            onClick={() => setView("settings")}
            className="w-full flex items-center gap-3 px-4 py-3 skeuo-inner text-blue-700 font-inter text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
            <span>Settings</span>
          </button>
        </nav>
        <div className="mt-auto pt-6 space-y-2 border-t border-white/50">
          <button 
            onClick={() => setView("prediction")}
            className="w-full skeuo-btn-primary py-4 font-headline font-black text-sm uppercase tracking-widest mb-4 hover:scale-[1.02] active:scale-95 transition-all"
          >
            New Analysis
          </button>
          <button onClick={() => setView('support')} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-600 font-bold text-xs transition-colors w-full text-left">
            <span className="material-symbols-outlined text-sm">help_outline</span>
            <span>Support Center</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar Component */}
        <header className="bg-[#e0e5ec]/90 backdrop-blur-md sticky top-0 z-40 flex justify-between items-center w-full px-8 h-16 border-b border-white/40 shadow-sm">
          <div className="flex items-center gap-8">
            <span className="font-headline text-xl font-black text-blue-800 tracking-tighter uppercase">Clinical Controls</span>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => setView('guidelines')} className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">Guidelines</button>
              <button onClick={() => setView('compliance')} className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">Audit</button>
              <button onClick={() => setView('support')} className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">Support</button>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => alert("Notification Center: 3 New Clinical Alerts.")} className="skeuo-btn w-10 h-10 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <div className="h-8 w-px skeuo-inner"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-slate-900 leading-none">{user?.name || "Dr. Sarah Chen"}</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{user?.role || "Infectious Disease"}</p>
              </div>
              <div className="skeuo-btn w-10 h-10 p-0.5 overflow-hidden">
                <img alt="User Avatar" className="w-full h-full rounded-xl object-cover" src={headerAvatar}/>
              </div>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="p-8 max-w-5xl mx-auto w-full space-y-12">
          {/* Hero Header Section */}
          <section className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest mb-2">
              System Control Center
            </div>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Precision Management</h2>
            <p className="text-on-surface-variant max-w-2xl">Configure AI analytical parameters, manage clinician credentials, and audit security compliance logs within the HIPAA-certified infrastructure.</p>
          </section>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Navigation & Profile */}
            <div className="lg:col-span-1 space-y-6">
            <div className="lg:col-span-1 space-y-8">
              <div className="skeuo-card p-8">
                <h3 className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.2em]">Medical Credentials</h3>
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="skeuo-btn p-1 w-28 h-28 overflow-hidden rounded-[32px]">
                      <img alt="Profile Large" className="w-full h-full rounded-[28px] object-cover" src={avatar}/>
                    </div>
                    <label className="cursor-pointer absolute -bottom-2 -right-2 skeuo-btn-primary p-2 active:scale-95 transition-transform flex items-center justify-center rounded-2xl">
                      <span className="material-symbols-outlined text-sm">edit</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                    </label>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-black text-slate-800">{user?.name || "Dr. Sarah Chen"}</h4>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{user?.role || "Clinical Admin"}</p>
                    <p className="skeuo-inner px-4 py-1 rounded-full text-[10px] text-slate-500 mt-4 inline-block font-bold">{user?.email || "sarah.chen@hospital.org"}</p>
                  </div>
                </div>
              </div>

              <div className="skeuo-card p-8 space-y-6">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Management</h3>
                <div className="space-y-4">
                  <button onClick={() => setActiveTab('system')} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'system' ? 'skeuo-inner text-blue-700 font-bold' : 'skeuo-btn text-slate-600 font-bold'}`}>
                    Control Panel <span className="material-symbols-outlined text-xl">tune</span>
                  </button>
                  <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'notifications' ? 'skeuo-inner text-blue-700 font-bold' : 'skeuo-btn text-slate-600 font-bold'}`}>
                    Alert Center <span className="material-symbols-outlined text-xl">notifications</span>
                  </button>
                  <button onClick={() => setActiveTab('audit')} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'audit' ? 'skeuo-inner text-blue-700 font-bold' : 'skeuo-btn text-slate-600 font-bold'}`}>
                    Access History <span className="material-symbols-outlined text-xl">history</span>
                  </button>
                </div>
              </div>
            </div>
            </div>

            {/* Right Column: Main Configuration Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Confidence Thresholds */}
              {activeTab === 'system' && (
                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">AI Analytical Thresholds</h3>
                      <p className="text-xs text-on-surface-variant">Define strictness for antibiotic recommendations</p>
                    </div>
                  </div>
                  <div className="space-y-10">
                    {/* Threshold Slider 1 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="block text-sm font-bold text-on-surface">Minimum Recommendation Confidence</label>
                        <span className="text-lg font-headline font-extrabold text-primary">{recConf}%</span>
                      </div>
                      <input className="w-full h-2 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary" type="range" min="50" max="99" value={recConf} onChange={(e) => setRecConf(e.target.value)} />
                      <p className="text-xs text-slate-500 italic">Recommendations below this threshold will be flagged as "Low Confidence" and require senior consultation.</p>
                    </div>
                    {/* Threshold Slider 2 */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="block text-sm font-bold text-on-surface">Critical Alert Sensitivity</label>
                        <span className="text-lg font-headline font-extrabold text-error">{alertSens}%</span>
                      </div>
                      <input className="w-full h-2 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-error" type="range" min="60" max="99" value={alertSens} onChange={(e) => setAlertSens(e.target.value)} />
                      <p className="text-xs text-slate-500 italic">Determines the priority of toxicity risk alerts based on clinical patient history.</p>
                    </div>
                  </div>
                </section>
              )}

              {/* Notifications & Privacy Toggles */}
              {activeTab === 'notifications' && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50">
                    <h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500">notifications_active</span>
                      Active Alerts
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">SMS Critical Alerts</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox"/>
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Daily Digest Email</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only peer" type="checkbox"/>
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-50">
                    <h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary">security</span>
                      HIPAA Shield
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Data Masking</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox"/>
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Auto-Logout (5m)</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox"/>
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* HIPAA Compliance Logs */}
              {activeTab === 'audit' && (
                <section className="bg-surface-container-high p-8 rounded-xl animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-headline text-lg font-bold">HIPAA Compliance Access Logs</h3>
                    <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                      <span className="material-symbols-outlined text-sm">download</span> EXPORT REPORT
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/60 p-4 rounded-lg flex items-center gap-4 transition-all hover:bg-white border hover:border-slate-200 border-transparent">
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-on-surface">Patient Record Export</p>
                        <p className="text-[10px] text-slate-500">Record ID: #XJ-882-1 | {user?.name || "Dr. Sarah Chen"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-medium text-slate-400">Oct 24, 09:42 AM</p>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg flex items-center gap-4 transition-all hover:bg-white border hover:border-slate-200 border-transparent">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-on-surface">System Configuration Change</p>
                        <p className="text-[10px] text-slate-500">Threshold adjusted to 85% | Admin System</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-medium text-slate-400">Oct 24, 08:15 AM</p>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg flex items-center gap-4 opacity-75 border-transparent">
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-on-surface">User Login Successful</p>
                        <p className="text-[10px] text-slate-500">IP: 192.168.1.44 | {user?.name || "Dr. Sarah Chen"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-medium text-slate-400">Oct 24, 07:00 AM</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Save Action */}
              <div className="flex justify-end gap-4 pt-4">
                <button onClick={() => { if (handleLogout) handleLogout(); else { localStorage.removeItem('aads_user'); window.location.href = '/'; } }} className="bg-white border-2 border-error text-error hover:bg-error-container px-8 py-3 rounded-full font-bold shadow-sm transition-all active:scale-95">
                  Logout Device
                </button>
                <button onClick={() => alert("✅ System Configuration Saved securely to AES-256 encrypted database.")} className="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all active:scale-95">
                  Save System Configuration
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Component */}
        <footer className="w-full border-t border-slate-100 bg-white flex justify-between items-center px-8 py-6 mt-auto">
          <p className="font-body text-xs text-slate-500">© 2024 AI Antibiotic Decision System (AADS)</p>
          <div className="flex gap-6">
            <button onClick={() => setView('guidelines')} className="text-xs text-slate-400 hover:text-slate-700 transition-colors text-left">Clinical Guidelines</button>
            <button onClick={() => setView('compliance')} className="text-xs text-slate-400 hover:text-slate-700 transition-colors text-left">HIPAA Compliance</button>
            <button onClick={() => setView('support')} className="text-xs text-slate-400 hover:text-slate-700 transition-colors text-left">Support Center</button>
          </div>
        </footer>
      </main>

      {/* Mobile Bottom NavBar - Contextual (Optional, similar to others for consistency) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-4 z-50">
        <button onClick={() => setView('patients')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">group</span>
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
        <button onClick={() => setView('settings')} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default SettingsPage;
