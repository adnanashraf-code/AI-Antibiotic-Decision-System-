const GlassContainer = ({ children, className = "" }) => {
  return (
    <div className={`glass-panel rounded-[2rem] p-8 ${className}`}>
      {children}
    </div>
  );
};

export default GlassContainer;
