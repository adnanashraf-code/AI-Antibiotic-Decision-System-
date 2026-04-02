import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PredictionPage from "./features/prediction/PredictionPage";
import PatientsPage from "./features/prediction/PatientsPage";
import LabsPage from "./features/prediction/LabsPage";
import SettingsPage from "./features/prediction/SettingsPage";
import PatientDetailPage from "./features/prediction/PatientDetailPage";
import CompliancePage from "./features/prediction/CompliancePage";
import SupportPage from "./features/prediction/SupportPage";
import GuidelinesPage from "./features/prediction/GuidelinesPage";
import PrivacyPage from "./features/prediction/PrivacyPage";
import LoginForm from "./features/prediction/LoginForm";
import PatientPortal from "./features/prediction/PatientPortal";

function App() {
  const [view, setView] = useState(() => {
    const saved = localStorage.getItem('aads_user');
    return saved ? "landing" : "login";
  }); // "landing", "prediction", "patients", "login", etc.
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('aads_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user) localStorage.setItem('aads_user', JSON.stringify(user));
    else localStorage.removeItem('aads_user');
  }, [user]);

  if (view === "login") {
    return <LoginForm onLogin={(u) => { setUser(u); setView('landing'); }} />;
  }

  if (view === "prediction") {
    if (user?.role === 'Patient') return <PatientPortal setView={setView} user={user} />;
    return <PredictionPage setView={setView} user={user} />;
  }
  
  if (view === "patients") {
    if (user?.role === 'Patient') return <PatientPortal setView={setView} user={user} />;
    return <PatientsPage setView={setView} user={user} />;
  }
  
  if (view === "labs") {
    if (user?.role === 'Patient') return <PatientPortal setView={setView} user={user} />;
    return <LabsPage setView={setView} user={user} />;
  }

  if (view === "settings") {
    return <SettingsPage setView={setView} user={user} setUser={setUser} />;
  }

  if (view === "patient-detail") {
    return <PatientDetailPage setView={setView} user={user} />;
  }

  if (view === "compliance") {
    if (user?.role === 'Patient') return <PatientPortal setView={setView} user={user} />;
    if (user?.role !== 'Admin') return <PredictionPage setView={setView} user={user} />;
    return <CompliancePage setView={setView} user={user} />;
  }

  if (view === "support") {
    return <SupportPage setView={setView} user={user} />;
  }

  if (view === "guidelines") {
    if (user?.role === 'Patient') return <PatientPortal setView={setView} user={user} />;
    return <GuidelinesPage setView={setView} user={user} />;
  }

  if (view === "privacy") {
    return <PrivacyPage setView={setView} user={user} />;
  }

  if (view === "patient-portal") {
    return <PatientPortal setView={setView} user={user} />;
  }

  // Login block removed because we allow visitors to view landing
  // and they explicitly click to open form via view === 'login'

  return (
    <GoogleOAuthProvider clientId="824040441534-v9b83k6f77i59j5q960e6n9r66v3q53f.apps.googleusercontent.com">
      <div className="skeuo-bg font-body text-slate-700 selection:bg-blue-200 min-h-screen antialiased">
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-[#e0e5ec]/90 backdrop-blur-md shadow-sm border-b border-white/50 flex justify-between items-center px-6 lg:px-10 h-20">
          <div className="flex items-center gap-12">
            <button onClick={() => {
              if (!user) setView('landing');
              else if (user.role === 'Patient') setView('patient-portal');
              else setView('prediction');
            }} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="AADS Logo" className="h-8 lg:h-10 w-auto"/>
              <span className="text-2xl lg:text-3xl font-black text-blue-800 tracking-tighter font-headline uppercase">AADS</span>
            </button>
            
            <div className="hidden lg:flex gap-4">
              <button onClick={() => setView('guidelines')} className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-700">Guidelines</button>
              <button onClick={() => setView('compliance')} className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-700">Audit</button>
              <button onClick={() => setView('support')} className="skeuo-btn px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-700">Support</button>
            </div>
          </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <button className="hidden sm:flex skeuo-btn w-12 h-12 items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          
          {user ? (
            <div className="flex items-center gap-4 lg:gap-6 pl-4 lg:pl-6 border-l border-white/50">
              <button onClick={() => setView('settings')} className="flex items-center gap-3 lg:gap-4 cursor-pointer group">
                <div className="skeuo-btn w-10 h-10 lg:w-12 lg:h-12 p-1 overflow-hidden transition-transform group-hover:scale-105">
                  <img alt={user.name} className="w-full h-full rounded-xl object-cover" src={user.avatar || "/logo.png"}/>
                </div>
                <div className="hidden xl:block text-left">
                  <p className="text-xs font-black text-slate-800 uppercase tracking-widest leading-none">{user.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{user.role}</p>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 pl-4 lg:pl-6 border-l border-white/50">
              <button onClick={() => setView('login')} className="skeuo-btn-primary px-6 lg:px-10 py-3 lg:py-4 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95">
                Portal
              </button>
            </div>
          )}

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden skeuo-btn w-12 h-12 flex items-center justify-center text-slate-600">
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-6 right-6 skeuo-card p-6 lg:hidden flex flex-col gap-4 animate-fade-in-up z-[60]">
            <button onClick={() => { setView('guidelines'); setIsMobileMenuOpen(false); }} className="w-full text-left p-4 skeuo-inner text-xs font-black uppercase tracking-widest text-slate-800">Guidelines</button>
            <button onClick={() => { setView('compliance'); setIsMobileMenuOpen(false); }} className="w-full text-left p-4 skeuo-btn text-xs font-black uppercase tracking-widest text-slate-500">Audit</button>
            <button onClick={() => { setView('support'); setIsMobileMenuOpen(false); }} className="w-full text-left p-4 skeuo-btn text-xs font-black uppercase tracking-widest text-slate-500">Support</button>
            {user && (
              <button 
                onClick={() => { localStorage.removeItem('aads_user'); window.location.reload(); }} 
                className="w-full text-left p-4 skeuo-btn text-xs font-black uppercase tracking-widest text-red-500"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center px-6 py-20 overflow-hidden bg-surface-container-low">
          {/* Background Visual Decor */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-container blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-tertiary blur-[100px]"></div>
          </div>
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content Side */}
            <div className="max-w-2xl text-center lg:text-left mt-20 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed mb-6 mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-primary text-sm" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>psychology_alt</span>
                <span className="text-on-primary-fixed text-xs font-bold uppercase tracking-widest">Advanced Clinical Intelligence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-6">
                AI Antibiotic <br/><span className="text-primary">Decision System</span>
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Predict resistance. Recommend treatment. A clinical-grade neural network designed to optimize antimicrobial stewardship in real-time.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => {
                    if (!user) setView('login');
                    else if (user.role === 'Patient') setView('patient-portal');
                    else setView('prediction');
                  }}
                  className="skeuo-btn-primary px-8 lg:px-10 py-4 lg:py-5 font-headline font-bold text-base lg:text-lg active:scale-95 transition-all">
                  {user?.role === 'Patient' ? 'My Health' : 'Start AI Engine'}
                </button>
                {(user?.role !== 'Patient') && (
                  <button 
                    onClick={() => setView("patients")}
                    className="skeuo-btn px-10 py-5 text-slate-600 font-headline font-bold text-lg hover:bg-white/40 transition-all">
                    View Patient Registry
                  </button>
                )}
              </div>
            </div>
            {/* Visual Side */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-[40px] overflow-hidden skeuo-card p-4">
                <img alt="Medical AI Visual" className="w-full h-full object-cover rounded-[30px]" data-alt="Conceptual medical visualization featuring a glowing blue neural network overlaying a laboratory microscope and medical glass vials, sterile clinical lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgddb0rWPVNnedPUv7E-SzsR8OZ8x2SwxdimbtIg6vBMLVX74Ys10nGT-EUkjfQjMJLzgDKJeWyCMZbW4dUlmYFhMOG-Rkqa_zGqwID7LnQxMXWumd2-kB0Woxxkgd5YRrivUUTCqOnjhEW5caQ4xC1CXPedRAhoG09BWT8bwvMTKeHEywfdgJ-LrTslaLheLI5ZKUEA3jnj3-B-pmpd5PKeQat1OqKtkRrTrQDDjSgCAjqO37ZcgqWzIf4-xGD2a_dMUTbqAT04AI"/>
              </div>
              {/* Skeuomorphic Stats Card */}
              <div className="skeuo-card absolute bottom-4 -left-4 md:bottom-8 md:-left-16 p-6 md:p-8 rounded-2xl max-w-[240px] md:max-w-sm border-white/40 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl skeuo-inner flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-slate-800 text-sm lg:text-base">98.4% Accuracy</h4>
                    <p className="text-[10px] text-slate-500 font-medium tracking-tight whitespace-nowrap">Clinical Verification</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 md:h-4 w-full skeuo-inner rounded-full overflow-hidden p-0.5 md:p-1">
                    <div className="h-full bg-blue-500 rounded-full w-[98%] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"></div>
                  </div>
                  <p className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                    Local Validation Peak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 bg-surface">
          <div className="container mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight mb-4">Precision Diagnostics, Elevated.</h2>
              <p className="text-on-surface-variant text-lg">Our system integrates multi-modal data to provide evidence-based recommendations that save lives and reduce hospital stays.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-[300px]">
              {/* Bento Item 1 */}
              <div className="md:col-span-12 lg:col-span-8 skeuo-card rounded-3xl p-6 lg:p-10 flex flex-col justify-between group transition-all h-auto min-h-[300px]">
                <div className="flex justify-between items-start mb-6 lg:mb-0">
                  <div className="p-4 rounded-2xl skeuo-inner text-blue-600">
                    <span className="material-symbols-outlined text-3xl lg:text-4xl">biotech</span>
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-bold text-blue-600 px-4 py-1.5 skeuo-inner uppercase tracking-[0.2em]">Core Analytics</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-headline font-extrabold mb-3 text-slate-800 leading-tight">Molecular Pathogen Profiling</h3>
                  <p className="text-slate-500 max-w-md text-base lg:text-lg">Real-time identification of bacterial strains and genetic resistance markers through PCR data ingestion.</p>
                </div>
              </div>
              {/* Bento Item 2 */}
              <div className="md:col-span-6 lg:col-span-4 skeuo-btn-primary rounded-3xl p-6 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl lg:text-5xl mb-6">clinical_notes</span>
                  <h3 className="text-xl lg:text-2xl font-headline font-bold mb-3 leading-tight">Patient History Link</h3>
                  <p className="opacity-80 text-sm lg:text-base">Automated EMR cross-referencing for past allergies and prior exposures.</p>
                </div>
                <div className="absolute bottom-[-30px] right-[-30px] opacity-10">
                  <span className="material-symbols-outlined text-[120px] lg:text-[150px]" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
                </div>
              </div>
              {/* Bento Item 3 */}
              <div className="md:col-span-6 lg:col-span-4 skeuo-card rounded-3xl p-6 lg:p-10 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="skeuo-inner w-14 lg:w-16 h-14 lg:h-16 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl lg:text-4xl text-blue-600">shield_with_heart</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-headline font-bold mb-3 text-slate-800">Stewardship First</h3>
                </div>
                <p className="text-slate-500 font-medium text-sm lg:text-base">Algorithmic bias towards narrow-spectrum agents to combat global resistance.</p>
              </div>
              {/* Bento Item 4 */}
              <div className="md:col-span-12 lg:col-span-8 skeuo-card rounded-3xl p-6 lg:p-10 grid md:grid-cols-2 gap-8 lg:gap-10 items-center h-auto min-h-[300px]">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl lg:text-3xl font-headline font-extrabold mb-4 text-slate-800 tracking-tight leading-tight">Instant Lab Integration</h3>
                  <p className="text-slate-500 mb-6 font-medium text-sm lg:text-base">Sync directly with hospital laboratory systems for sub-second data processing.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-xs lg:text-sm font-bold text-slate-600">
                      <span className="material-symbols-outlined text-green-500 skeuo-inner p-1 rounded-full text-[10px]">check</span> HL7/FHIR Compliant
                    </li>
                    <li className="flex items-center gap-3 text-xs lg:text-sm font-bold text-slate-600">
                      <span className="material-symbols-outlined text-green-500 skeuo-inner p-1 rounded-full text-[10px]">check</span> E2E Encryption
                    </li>
                  </ul>
                </div>
                <div className="skeuo-inner rounded-3xl p-6 lg:p-8 h-48 lg:h-full flex items-center justify-center group order-1 md:order-2">
                  <span className="material-symbols-outlined text-6xl lg:text-8xl text-slate-300 group-hover:text-blue-400 transition-colors">api</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-surface-container-low border-y border-outline-variant/10">
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-headline font-extrabold text-primary mb-2">2.4M</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-on-surface-variant">Validated Cases</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-headline font-extrabold text-tertiary mb-2">18%</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-on-surface-variant">Cost Reduction</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-headline font-extrabold text-on-surface mb-2">450+</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-on-surface-variant">Clinics Active</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-headline font-extrabold text-error mb-2">&lt;2s</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-on-surface-variant">Inference Time</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#e0e5ec] border-t border-white/40 py-16 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img src="/logo.png" alt="AADS Logo" className="h-10 lg:h-12 w-auto brightness-90 grayscale-0"/>
              <h4 className="text-3xl lg:text-4xl font-black text-blue-800 uppercase tracking-tighter">AADS Hub</h4>
            </div>
            <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] max-w-xs mx-auto md:mx-0 leading-loose">
              © 2024 Clinical Suite AI. Advanced decision support for authorized medical professionals. AES-256 Shield Active.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 order-1 md:order-2">
            {['Privacy', 'Legal', 'Github', 'Support'].map(link => (
              <button key={link} className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-700 transition-colors">{link}</button>
            ))}
          </div>
-
          <div className="flex justify-center md:justify-end gap-6 order-3">
            <button className="skeuo-btn w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center text-slate-400 hover:text-blue-600">
              <span className="material-symbols-outlined">description</span>
            </button>
            <button className="skeuo-btn w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center text-slate-400 hover:text-blue-600">
              <span className="material-symbols-outlined">security</span>
            </button>
          </div>
        </div>
      </footer>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
