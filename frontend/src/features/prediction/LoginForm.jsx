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

  const handleGoogleAuth = () => {
    // Simulate Google Login for any email entered, or create a mock user dynamically
    const email = formData.email || "mock.user@hospital.org";
    onLogin({
      name: email.split('@')[0].replace('.', ' '),
      email: email,
      role: "Google Authenticated User"
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center p-4">
      <div className="clay-card p-10 w-full max-w-md relative overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          <div className="text-center mb-10 scale-90">
            <img src="/logo.png" alt="AADS Logo" className="h-16 mx-auto mb-4 drop-shadow-xl"/>
            <h1 className="font-headline text-3xl font-extrabold text-blue-800 tracking-tighter mb-2">AADS</h1>
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-sm text-slate-500">
              {isLogin ? "Log in to access your clinical dashboard" : "Sign up for clinical decision support"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required={!isLogin}
                  className="clay-input w-full p-4 text-sm text-slate-700"
                  placeholder="Dr. John Doe"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="clay-input w-full p-4 text-sm text-slate-700"
                placeholder="doctor@hospital.org"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required
                className="clay-input w-full p-4 text-sm text-slate-700"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required={!isLogin}
                    className="clay-input w-full p-4 text-sm text-slate-700"
                    placeholder="••••••••"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Role</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Doctor", "Researcher", "Admin", "Patient"].map((r) => (
                      <label key={r} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer p-2 bg-slate-50/50 rounded-lg hover:bg-slate-100 transition-colors">
                        <input 
                          type="radio" 
                          name="role" 
                          value={r} 
                          checked={formData.role === r} 
                          onChange={handleChange} 
                          className="accent-primary"
                        />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="clay-btn-primary w-full py-4 font-bold text-sm uppercase tracking-widest mt-2">
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-px bg-slate-300 flex-1"></div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Or</span>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleAuth}
            className="clay-btn w-full mt-6 py-4 flex items-center justify-center gap-3 text-slate-600 font-bold text-sm"
          >
            <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" className="w-5 h-5"/>
            Continue with Google
          </button>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                type="button" 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-primary font-bold hover:underline"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">HIPAA Compliant Protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
