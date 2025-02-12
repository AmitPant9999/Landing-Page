import React from 'react'; // Import React if not already imported

interface LogoProps {} // Or define props if any

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="translate-x-3">
      <span className="bg-slate-300 text-xl px-6 py-2 font-bold relative z-10">LOGO</span>
    </div>
  );
};

export default Logo;
