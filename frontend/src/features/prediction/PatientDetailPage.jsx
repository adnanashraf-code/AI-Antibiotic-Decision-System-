import { useState } from "react";

const PatientDetailPage = ({ setView }) => {
  return (
    <div className="bg-background font-body text-on-surface flex min-h-screen">
      {/* SideNavBar Anchor */}
      <aside className="hidden md:flex flex-col h-screen py-6 px-4 fixed left-0 top-0 w-64 bg-slate-50 dark:bg-slate-950 z-40 border-r border-slate-100">
        <div className="mb-10 px-4">
          <button onClick={() => setView('landing')} className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight cursor-pointer hover:opacity-80 transition-opacity text-left">AADS</button>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Clinical AI</p>
        </div>
        <nav className="flex-1 space-y-2">
          {/* Active Tab: Patients */}
          <button 
            onClick={() => setView("patients")}
            className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-semibold"
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span className="font-label text-sm">Patients</span>
          </button>
          <button 
            onClick={() => setView("prediction")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 transition-all ease-in-out rounded-xl"
          >
            <span className="material-symbols-outlined">psychology_alt</span>
            <span className="font-label text-sm">Predictions</span>
          </button>
          <button 
            onClick={() => setView("labs")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 transition-all ease-in-out rounded-xl"
          >
            <span className="material-symbols-outlined">biotech</span>
            <span className="font-label text-sm">Labs</span>
          </button>
          <button 
            onClick={() => setView("compliance")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 transition-all ease-in-out rounded-xl"
          >
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-label text-sm">Compliance</span>
          </button>
          <button 
            onClick={() => setView("settings")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 transition-all ease-in-out rounded-xl"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label text-sm">Settings</span>
          </button>
        </nav>
        <div className="mt-auto space-y-2">
          <button onClick={() => setView('support')} className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all rounded-xl">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label text-sm">Support</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all rounded-xl">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopNavBar Anchor */}
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none md:pr-64">
          <div className="flex items-center gap-4">
            <button onClick={() => setView('landing')} className="md:hidden font-extrabold text-blue-700 text-xl tracking-tighter mr-2 cursor-pointer hover:opacity-80 transition-opacity">AADS</button>
            <div className="hidden md:block h-6 w-px bg-surface-container-highest"></div>
            <h2 className="font-headline font-semibold text-on-surface">Patient Detail</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 ring-primary/20 transition-all" placeholder="Global search..." type="text"/>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100 p-2 rounded-full cursor-pointer transition-colors">notifications</span>
              <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100 p-2 rounded-full cursor-pointer transition-colors">account_circle</span>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="pt-24 p-8 min-h-screen">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hero Patient Section */}
            <section className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 relative">
                <img alt="Elena Rodriguez" className="w-40 h-40 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmNevEtkhbOn0P-eRCKM1zYKhPgfKjBi4qw7kHWiQNOErla0hDez5EN-p5LTU_1_qP1OoeQsBYnP2DK7zy3CPt0Tg4fMmzGMYp_mMtoTBXm-IkMOzmQPKKkDuA_Jcj-LxYPTav4uEZOx5bBOVFjCL6c9JXQGLju4iqz0RxZ90IUXZkrTUbtIoJaBTZmAdok5FSzbp_lskg40XJdOsDuy0faMeEID24xFXObzVLoXTc3I8tGsGKCF16_DSvk2OV67y8jFF0c6OByj31"/>
                <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span> Stable
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <button 
                  onClick={() => setView('patients')}
                  className="mb-2 text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 hover:underline"
                >
                  <span className="material-symbols-outlined text-[10px]">arrow_back</span> Back to Registry
                </button>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Medical Record #29402-B</p>
                <h3 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface">Elena Rodriguez</h3>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">cake</span>
                    <span className="font-label text-sm">34 Years</span>
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">female</span>
                    <span className="font-label text-sm">Female</span>
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">bloodtype</span>
                    <span className="font-label text-sm">O Positive</span>
                  </div>
                  <div className="bg-error-container text-on-error-container px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span>
                    <span className="font-label text-sm font-semibold">Allergy: Penicillin</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                <button className="bg-surface-container-high px-6 py-3 rounded-full font-label text-sm font-semibold text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  Edit Profile
                </button>
                <button 
                  onClick={() => setView('prediction')}
                  className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-label text-sm font-semibold shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-sm">add</span> New Encounter
                </button>
              </div>
            </section>

            {/* Bento Grid Content */}
            <div className="grid grid-cols-12 gap-6">
              {/* Clinical Timeline (Asymmetric Layout) */}
              <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-lg p-8">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-2xl font-headline font-bold">Clinical History Timeline</h4>
                  <button className="text-primary font-label text-sm font-bold flex items-center gap-1">
                    Full History <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="space-y-0 relative">
                  {/* Tonal shift timeline connector */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-surface-container-highest"></div>
                  
                  <div className="relative flex gap-8 pb-10">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-on-primary text-xl">emergency</span>
                    </div>
                    <div className="flex-1 bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                      <span className="text-xs font-label text-on-surface-variant uppercase font-bold tracking-tighter">Oct 12, 2023 • Emergency Admission</span>
                      <h5 className="text-lg font-headline font-bold mt-1">Acute Appendicitis</h5>
                      <p className="text-on-surface-variant mt-2 leading-relaxed">Patient presented with severe right lower quadrant pain. Emergency appendectomy performed by Dr. Aris. Recovery uneventful.</p>
                    </div>
                  </div>

                  <div className="relative flex gap-8 pb-10">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center z-10 shadow-lg shadow-tertiary/20">
                      <span className="material-symbols-outlined text-on-tertiary-container text-xl">stethoscope</span>
                    </div>
                    <div className="flex-1 bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                      <span className="text-xs font-label text-on-surface-variant uppercase font-bold tracking-tighter">Jan 04, 2024 • Routine Follow-up</span>
                      <h5 className="text-lg font-headline font-bold mt-1">Post-Op Assessment</h5>
                      <p className="text-on-surface-variant mt-2 leading-relaxed">Wound healed completely. No residual discomfort. Recommended dietary adjustments for gastrointestinal health.</p>
                    </div>
                  </div>

                  <div className="relative flex gap-8">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center z-10 shadow-lg shadow-secondary/20">
                      <span className="material-symbols-outlined text-on-secondary-container text-xl">medication</span>
                    </div>
                    <div className="flex-1 bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                      <span className="text-xs font-label text-on-surface-variant uppercase font-bold tracking-tighter">Current Phase • Treatment Plan</span>
                      <h5 className="text-lg font-headline font-bold mt-1">Secondary Respiratory Infection</h5>
                      <p className="text-on-surface-variant mt-2 leading-relaxed">Mild symptoms following seasonal flu. Initiated targeted antibiotic therapy.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Treatment & Labs */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                {/* Antibiotic Card (Glassmorphism) */}
                <div className="glass-panel border border-white/40 p-6 rounded-lg shadow-xl shadow-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>vaccines</span>
                    </div>
                    <h4 className="text-lg font-headline font-bold">Active Medication</h4>
                  </div>
                  <div className="bg-primary p-6 rounded-lg text-on-primary">
                    <p className="text-xs font-label opacity-70 uppercase tracking-widest font-bold">Antibiotic</p>
                    <h5 className="text-xl font-headline font-extrabold mt-1">Ciprofloxacin</h5>
                    <div className="mt-4 flex justify-between items-end">
                      <div>
                        <p className="text-xs font-label opacity-70 uppercase font-bold">Dosage</p>
                        <p className="font-bold">500mg • BID</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-label opacity-70 uppercase font-bold">Duration</p>
                        <p className="font-bold">Day 4 of 7</p>
                      </div>
                    </div>
                    {/* Simple Vitality Sparkline */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-label font-bold">Adherence Tracking</span>
                        <span className="text-xs font-label">98%</span>
                      </div>
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[98%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lab Snapshots */}
                <div className="bg-surface-container-low p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-headline font-bold">Recent Lab Results</h4>
                    <button onClick={() => setView('labs')} className="text-primary text-xs font-bold hover:underline">View All</button>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface-container-lowest p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-xs font-label text-on-surface-variant font-bold">WBC Count</p>
                        <p className="text-lg font-headline font-bold">8.2 <span className="text-xs font-label text-on-surface-variant">x10³/µL</span></p>
                      </div>
                      <div className="bg-tertiary-container/10 text-tertiary px-2 py-1 rounded text-[10px] font-bold">NORMAL</div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-xs font-label text-on-surface-variant font-bold">CRP Level</p>
                        <p className="text-lg font-headline font-bold">4.1 <span className="text-xs font-label text-on-surface-variant">mg/L</span></p>
                      </div>
                      <div className="bg-error-container/10 text-error px-2 py-1 rounded text-[10px] font-bold">ELEVATED</div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-xs font-label text-on-surface-variant font-bold">Hemoglobin</p>
                        <p className="text-lg font-headline font-bold">13.8 <span className="text-xs font-label text-on-surface-variant">g/dL</span></p>
                      </div>
                      <div className="bg-tertiary-container/10 text-tertiary px-2 py-1 rounded text-[10px] font-bold">NORMAL</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinician Notes Section */}
              <div className="col-span-12 bg-surface-container-low rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <h4 className="text-2xl font-headline font-bold">Clinician Observation Notes</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative">
                      <textarea className="w-full bg-surface-container-lowest border-none rounded-lg p-6 font-body text-sm text-on-surface-variant focus:ring-2 ring-primary/20 placeholder:text-outline" placeholder="Add a new observation..." rows="6"></textarea>
                      <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer text-lg hover:text-primary transition-colors">mic</span>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer text-lg hover:text-primary transition-colors">attach_file</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-primary hover:bg-primary-container transition-colors text-white px-6 py-2 rounded-full font-label text-sm font-semibold">Save Note</button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6 py-1">
                      <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant font-bold mb-1">
                        <span>DR. SARAH JENKINS</span>
                        <span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
                        <span>2 HOURS AGO</span>
                      </div>
                      <p className="text-on-surface leading-relaxed">Patient reports improving appetite but persistent fatigue. Suggested continued hydration and monitored activity. Vital signs stable at rest. Next assessment scheduled for Thursday morning.</p>
                    </div>
                    <div className="border-l-4 border-surface-container-highest pl-6 py-1">
                      <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant font-bold mb-1">
                        <span>DR. ROBERT ARIS</span>
                        <span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
                        <span>YESTERDAY</span>
                      </div>
                      <p className="text-on-surface-variant leading-relaxed italic text-sm">Post-op surgical site remains clean. No signs of secondary infection in the abdominal region. Focused on respiratory symptoms.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom NavBar Toggle */}
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
        <button onClick={() => setView('settings')} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default PatientDetailPage;
