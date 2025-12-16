import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Cpu, Brain, Eye, MessageCircle, BarChart3, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const navigate = useNavigate();

  const aiModules = [
    { icon: Cpu, name: "Expert System", dev: "Ade Alfian", desc: "Analisis keamanan berbasis aturan" },
    { icon: BarChart3, name: "Machine Learning", dev: "Alfat Maulana", desc: "Prediksi risiko keamanan" },
    { icon: Brain, name: "Deep Learning", dev: "Endang Cristina", desc: "Pengenalan wajah & aktivitas" },
    { icon: Eye, name: "Computer Vision", dev: "Muhammad Ikhlasul Amal", desc: "Deteksi objek & pelacakan" },
    { icon: MessageCircle, name: "NLP Chatbot", dev: "Putri Sissyprisilia", desc: "Asisten berbasis bahasa alami" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold text-lg">Tentang SafeHome</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Logo & Info */}
        <div className="text-center py-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
            <Shield className="w-12 h-12 text-background" />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-2">SafeHome</h1>
          <p className="text-muted-foreground">AI-Powered Home Security</p>
          <p className="text-sm text-muted-foreground mt-1">Versi 1.0.0</p>
        </div>

        {/* Description */}
        <Card variant="glass">
          <CardContent className="p-5">
            <h3 className="font-semibold mb-3">Gambaran Umum</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SafeHome adalah aplikasi perlindungan rumah berbasis AI yang dirancang untuk membantu 
              pemilik rumah dalam memantau, menganalisis, dan mengamankan kondisi rumah secara 
              otomatis maupun interaktif. Aplikasi ini terhubung dengan berbagai sensor, kamera pintar, 
              serta sistem AI yang bekerja secara terintegrasi.
            </p>
          </CardContent>
        </Card>

        {/* AI Modules */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Modul AI</h3>
          <div className="space-y-2">
            {aiModules.map((module, i) => (
              <Card
                key={i}
                variant="interactive"
                onClick={() => navigate(`/ai-module-info/${i}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{module.name}</p>
                      <p className="text-xs text-muted-foreground">{module.dev}</p>
                      <p className="text-xs text-primary">{module.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <Card variant="interactive" onClick={() => navigate('/privacy-policy')}>
            <CardContent className="p-4 flex items-center justify-between">
              <span>Kebijakan Privasi</span>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card variant="interactive" onClick={() => navigate('/terms-of-service')}>
            <CardContent className="p-4 flex items-center justify-between">
              <span>Syarat & Ketentuan</span>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card variant="interactive" onClick={() => navigate('/licenses')}>
            <CardContent className="p-4 flex items-center justify-between">
              <span>Lisensi Open Source</span>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          © 2024 SafeHome. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
