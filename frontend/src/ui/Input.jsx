import { forwardRef } from "react";

const Input = forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-600 mb-1.5 ml-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400 focus:bg-white hover:bg-slate-100/50 ${
          error ? "border-red-300 focus:border-red-400 focus:ring-red-500/10" : ""
        } ${className}`}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-500 ml-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
