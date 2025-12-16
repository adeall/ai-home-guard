import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className={`relative z-10 flex flex-col items-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo - clickable */}
        <button 
          onClick={() => navigate('/about')}
          className="relative mb-8 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative w-32 h-32 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-16 h-16 text-background" />
          </div>
        </button>

        {/* App Name */}
        <h1 className="text-5xl font-bold text-gradient mb-4">SafeHome</h1>
        
        {/* Tagline - clickable */}
        <button 
          onClick={() => navigate('/vision')}
          className="text-muted-foreground text-lg mb-12 hover:text-primary transition-colors cursor-pointer"
        >
          AI-Powered Home Security
        </button>

        {/* Get Started Button */}
        <button
          onClick={() => navigate('/login')}
          className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          Mulai
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Version */}
        <p className="mt-16 text-sm text-muted-foreground/50">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default SplashScreen;
