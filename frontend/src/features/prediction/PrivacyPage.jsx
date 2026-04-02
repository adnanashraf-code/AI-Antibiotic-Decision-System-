import { useState } from "react";

const PrivacyPage = ({ setView }) => {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm flex justify-between items-center px-8 h-16">
        <div className="flex items-center gap-8">
          <button onClick={() => setView('landing')} className="text-2xl font-black tracking-tighter text-blue-700 dark:text-blue-400 cursor-pointer hover:opacity-80 transition-opacity">AADS</button>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => setView('patients')} className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded-lg text-sm font-medium">Patients</button>
            <button onClick={() => setView('prediction')} className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded-lg text-sm font-medium">Predictions</button>
            <button onClick={() => setView('privacy')} className="text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 px-3 py-1 text-sm">Privacy</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-transform active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-transform active:scale-95">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="mb-8">
          <span className="text-blue-700 font-bold uppercase tracking-widest text-[10px] mb-2 block">Data Protection</span>
          <h1 className="font-headline text-4xl font-extrabold text-on-background tracking-tight mb-4">Privacy Policy & Patient Data</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            Explanation of Data Cryptography, AI Model Anonymization, and Information Storage adhering strictly to international data laws (HIPAA).
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Document area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 font-headline">1. HIPAA Compliance & AES-256</h2>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                AADS utilizes AES-256 Military Grade Encryption for all instances of structured and unstructured health data. 
                Protected Health Information (PHI) is isolated from the AI inference engine. Before model consumption, all text is piped through De-ID systems rendering the inputs completely anonymous.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 font-headline">2. Internal Telemetry Logs</h2>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                System telemetry metrics are kept to measure server latency, inference times, and memory usage. These logs NEVER contain PHI. Any accidental leakage in telemetry will result in immediate purging of logs via automated heuristics.
              </p>
              <div className="bg-error-container/20 p-4 rounded-xl border-l-4 border-error mb-4">
                <p className="text-xs font-semibold text-error">Warning: Any attempt to extract clear-text patient notes outside the application will trigger an irreversible Account Lockout.</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 font-headline">3. Request Personal Data Export</h2>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                Patients have the right to request a complete JSON footprint of their diagnostic history. Submit manual requests via the Compliance portal to generate these audits safely.
              </p>
            </div>
          </div>

          {/* Quick Links / TOC Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-surface-container-low p-6 rounded-2xl">
              <h3 className="font-bold mb-4 uppercase text-xs tracking-wider text-on-surface-variant">Legal Memos</h3>
              <ul className="space-y-3">
                <li><button className="text-sm font-medium text-primary hover:underline w-full text-left">Terms of Service</button></li>
                <li><button className="text-sm font-medium text-primary hover:underline w-full text-left">California CCPA Rider</button></li>
                <li><button className="text-sm font-medium text-primary hover:underline w-full text-left">Model Accountability Map</button></li>
              </ul>
            </div>
            
            <button onClick={() => setView('compliance')} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-md hover:bg-primary-container transition-colors group flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">verified_user</span> Audit Access Logs
            </button>
            <button onClick={() => setView('support')} className="w-full bg-surface-container-lowest text-primary font-bold border border-outline-variant/30 py-4 rounded-xl hover:bg-surface-container-low transition-colors group flex items-center justify-center gap-2">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
