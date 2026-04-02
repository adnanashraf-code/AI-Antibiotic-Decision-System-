import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Doctor"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedDb = JSON.parse(localStorage.getItem('aads_users_db') || '[]');

    if (!isLogin) {
      // Registration path
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      
      const existingUser = storedDb.find(u => u.email === formData.email);
      if (existingUser) {
        alert("An account with this email already exists! Please Log in.");
        return;
      }

      const newUser = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role
      };
      
      storedDb.push(newUser);
      localStorage.setItem('aads_users_db', JSON.stringify(storedDb));
      
      onLogin({
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      });
      
    } else {
      // Login path
      const existingUser = storedDb.find(u => u.email === formData.email && u.password === formData.password);
      
      if (!existingUser) {
        alert("Invalid email or password");
        return;
      }
      
      onLogin({
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role
      });
    }
  };



  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="clay-card p-12 w-full max-w-lg relative z-10 transition-all duration-500 hover:scale-[1.01]">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="w-24 h-24 clay-btn-secondary mx-auto mb-6 flex items-center justify-center rounded-[32px] shadow-lg">
              <img src="/logo.png" alt="AADS Logo" className="h-14 w-auto drop-shadow-md"/>
            </div>
            <h1 className="font-headline text-4xl font-black text-blue-900 tracking-tighter mb-3 uppercase">AADS</h1>
            <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">
              {isLogin ? "Welcome Back" : "Clinical Registry"}
            </h2>
            <p className="text-sm font-bold text-slate-500 max-w-sm mx-auto">
              {isLogin ? "Secure access to AI-driven antibiotic protocols." : "Join the global network for antimicrobial stewardship."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {!isLogin && (
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 mb-1 ml-4 uppercase tracking-[0.2em]">Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required={!isLogin}
                  className="clay-input w-full p-5 text-sm font-bold text-slate-700 outline-none"
                  placeholder="e.g. Dr. Sarah Jenkins"
                />
              </div>
            )}

            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-400 mb-1 ml-4 uppercase tracking-[0.2em]">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="clay-input w-full p-5 text-sm font-bold text-slate-700 outline-none"
                placeholder="doctor@hospital.org"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-400 mb-1 ml-4 uppercase tracking-[0.2em]">Secret Key</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required
                className="clay-input w-full p-5 text-sm font-bold text-slate-700 outline-none"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 mb-1 ml-4 uppercase tracking-[0.2em]">Verify Secret Key</label>
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required={!isLogin}
                    className="clay-input w-full p-5 text-sm font-bold text-slate-700 outline-none"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-slate-400 mb-1 ml-4 uppercase tracking-[0.2em]">Designated Role</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Doctor", "Researcher", "Admin", "Patient"].map((r) => (
                      <label key={r} className={`flex items-center justify-center gap-3 p-4 rounded-2xl transition-all cursor-pointer ${formData.role === r ? 'clay-inner text-blue-700' : 'bg-slate-50/50 text-slate-400 hover:bg-slate-100'}`}>
                        <input 
                          type="radio" 
                          name="role" 
                          value={r} 
                          checked={formData.role === r} 
                          onChange={handleChange} 
                          className="hidden"
                        />
                        <span className="text-[10px] font-black uppercase tracking-widest">{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="pt-4">
              <button type="submit" className="clay-btn clay-btn-primary w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px] active:scale-95 shadow-xl">
                {isLogin ? "Neural Auth" : "Finalize Protocol"}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {isLogin ? "Unauthorized access?" : "Existing member?"}{" "}
              <button 
                type="button" 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-blue-600 font-black hover:text-blue-800 transition-colors ml-2 underline decoration-2 underline-offset-4"
              >
                {isLogin ? "Initialize Registry" : "Return to Login"}
              </button>
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 py-4 border-t border-slate-100">
            <span className="material-symbols-outlined text-slate-300 text-sm">verified</span>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">HIPAA Shield v4.2 Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
