import { useState } from "react";

const SupportPage = ({ setView, user }) => {
  return (
    <div className="skeuo-bg text-slate-700 font-body min-h-screen antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#e0e5ec]/90 backdrop-blur-md shadow-sm border-b border-white/40 flex justify-between items-center px-8 h-18 text-slate-800">
        <div className="flex items-center gap-10">
          <button onClick={() => setView('landing')} className="text-2xl font-black tracking-tighter text-blue-800 cursor-pointer hover:opacity-80 transition-opacity uppercase">AADS Support</button>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setView('patients')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Patients</button>
            <button onClick={() => setView('prediction')} className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-blue-600 transition-colors px-4 py-2 skeuo-btn rounded-xl">Predictions</button>
            <button onClick={() => setView('support')} className="text-blue-700 font-black uppercase text-[10px] tracking-[0.2em] px-4 py-2 skeuo-inner rounded-xl">Support</button>
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
              Access Support
            </button>
          )}
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto space-y-16">
        {/* Hero Search Section */}
        <section className="skeuo-card overflow-hidden p-2">
          <div className="skeuo-inner p-16 rounded-[40px] flex flex-col items-center text-center">
            <div className="relative z-10 max-w-2xl">
              <span className="skeuo-card px-4 py-1 rounded-full text-blue-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6 inline-block">Support Repository</span>
              <h1 className="text-5xl md:text-6xl font-headline font-black text-slate-800 tracking-tight mb-6 uppercase">How can we help?</h1>
              <p className="text-slate-500 font-bold text-lg mb-12">Search clinical documentation, API logic, and AI methodology.</p>
              <div className="relative w-full max-w-xl mx-auto">
                <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">search</span>
                <input className="skeuo-input w-full pl-16 pr-8 py-5 text-lg font-bold" placeholder="Search node logs..." type="text"/>
              </div>
            </div>
          </div>
        </section>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8 skeuo-card p-10 flex items-center justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Node Cluster Status</span>
              <div className="flex items-center gap-4">
                <div className="skeuo-inner p-1 rounded-full"><span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span></div>
                <span className="text-2xl font-black text-slate-800 uppercase tracking-tight">Active & Optimized</span>
              </div>
              <p className="text-sm font-bold text-slate-500">Real-time prediction engines are operating at &lt;42ms latency.</p>
            </div>
            <div className="hidden lg:flex gap-2 h-12 items-end skeuo-inner p-4 rounded-2xl">
              {[4, 8, 6, 12, 10, 12].map((h, i) => (
                <div key={i} className="w-2 bg-blue-600 rounded-full" style={{height: `${h*4}px`}}></div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 skeuo-card p-10 flex flex-col justify-center">
            <div className="skeuo-inner w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2 uppercase">AI Accuracy</h3>
            <p className="text-sm font-bold text-slate-500">Current confidence: <span className="text-blue-700">98.4%</span></p>
          </div>

          {[
            {icon: 'description', title: 'Manuals', desc: 'Clinical SOPs/Interpretations', action: 'guidelines'},
            {icon: 'integration_instructions', title: 'API Dev', desc: 'HMS System Integration', action: 'settings'},
            {icon: 'verified_user', title: 'Compliance', desc: 'HIPAA/GDPR Data Ledger', action: 'compliance'}
          ].map((item, idx) => (
            <div key={idx} className="md:col-span-4 skeuo-card p-10 group cursor-pointer hover:translate-y-[-4px] transition-all">
              <div className="skeuo-inner w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm font-bold text-slate-500 mb-10">{item.desc}</p>
              <button 
                onClick={() => setView(item.action)}
                className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-800 group-hover:text-blue-700 transition-colors"
                style={{cursor: 'pointer'}}
              >
                Access Hub
              </button>
            </div>
          ))}
        </div>

        {/* FAQ & Contact Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <h2 className="text-4xl font-headline font-black text-slate-800 tracking-tight uppercase">AI FAQ Node</h2>
            <div className="space-y-4">
              {[
                {q: 'Mortality Predictions?', a: 'Based on 500k+ anonymized ICU encounters.'},
                {q: 'Risk Score Overrides?', a: 'Clinician decision always overrides AI indices.'},
                {q: 'Data Latency?', a: 'Real-time buffers handle network jitter.'}
              ].map((faq, i) => (
                <div key={i} className="skeuo-card p-6">
                  <button className="flex justify-between items-center w-full text-left group">
                    <span className="font-black text-slate-800 uppercase tracking-tight group-hover:text-blue-700 transition-colors">{faq.q}</span>
                    <span className="material-symbols-outlined text-slate-400">expand_more</span>
                  </button>
                  <p className="text-xs font-bold text-slate-500 mt-4 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="skeuo-card p-12">
            <h3 className="text-3xl font-headline font-black text-slate-800 mb-4 uppercase tracking-tight">Engineering Support</h3>
            <p className="text-sm font-bold text-slate-500 mb-10">Clinical engineering team is available 24/7 for urgent escalations.</p>
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Responder Identity</label>
                  <input className="skeuo-input w-full p-4 text-xs font-bold" type="text" placeholder="Dr. John Doe"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Facility Node</label>
                  <input className="skeuo-input w-full p-4 text-xs font-bold" type="text" placeholder="TX-4229"/>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Support Category</label>
                <div className="skeuo-inner rounded-2xl overflow-hidden p-1">
                  <select className="w-full bg-transparent border-none p-4 text-xs font-bold text-slate-700 outline-none">
                    <option>Prediction Discrepancy</option>
                    <option>HMS Sync Issue</option>
                    <option>Credential Access</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Encryption Layer Message</label>
                <textarea className="skeuo-input w-full p-5 text-xs font-bold" rows="5" placeholder="Operational details..."></textarea>
              </div>
              <button className="skeuo-btn-primary w-full py-5 text-sm font-black uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95" type="submit">
                Dispatch Ticket
              </button>
            </form>
          </div>
        </section>

        {/* Informational Visual Block */}
        <section className="bg-surface-container-high rounded-xl p-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover grayscale brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzgAZk7HJzU3Fxrdo-Ng9QYBebOklnU1Qs-JijfnFkedm9ZcVVHDw9mipRp0Vx_mAV8f7cFKDyoYghCrmGth-HpJWpnWMRuXQaWe2aDRZtjXRzeoiyCG_oGf8zrx5A6chiaKehODfv-DWug33myexSsaxYYtt-0wMFGK_ua9daZtVx-6y5muGCns0Uo6dyuABs-E-gWZjEnEAHCx0LOu34dgC5CeV0PKUQP0O2yU855Sk66htRQ-Z5-ISpw7z80rYAZ_nrotOACjtC"/>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h3 className="text-2xl font-bold">The Precision Curator Engine</h3>
            <p className="text-on-surface-variant">AADS is more than a database; it is a clinical curator designed to reduce cognitive load. If you encounter UI friction or data clarity issues, please report them directly to our UX Research portal. Your input directly influences our clinical ethereal interface updates.</p>
            <div className="flex gap-4">
              <button className="bg-surface-container-lowest text-on-surface font-bold px-6 py-2 rounded-full text-sm border border-outline-variant/20 hover:bg-surface-container-low transition-colors">Submit Feedback</button>
              <button className="text-primary font-bold text-sm px-6 py-2 hover:bg-primary/5 rounded-full transition-colors">View Changelog</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#e0e5ec] border-t border-white/40 py-20 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-3xl font-black text-blue-800 uppercase tracking-tighter">AADS Hub</span>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-relaxed">© 2024 Clinical Suite AI. AES-256 Quantum Shield Active.</p>
          </div>
          <div className="flex gap-10">
            {['Legal', 'Data', 'GitHub', 'Contact'].map(link => (
              <button key={link} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-700 transition-colors">{link}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
