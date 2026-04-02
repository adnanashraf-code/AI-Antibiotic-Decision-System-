const Card = ({ children, className = "" }) => {
  return (
    <div className={`glass-card rounded-[1.5rem] p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
