import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info, Shield, Cpu, Brain, Eye, MessageCircle, Star, FileText, Lock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutAppPage = () => {
  const navigate = useNavigate();

  const aiFeatures = [
    { icon: Cpu, name: "Expert System", desc: "Sistem pakar analisis keamanan" },
    { icon: Brain, name: "Machine Learning", desc: "Prediksi risiko berbasis data" },
    { icon: Brain, name: "Deep Learning", desc: "Pengenalan wajah & aktivitas" },
    { icon: Eye, name: "Computer Vision", desc: "Deteksi objek real-time" },
    { icon: MessageCircle, name: "NLP Chatbot", desc: "Asisten keamanan cerdas" },
  ];

  const menuItems = [
    { icon: Star, label: "Beri Rating", route: "/rate-app" },
    { icon: FileText, label: "Syarat & Ketentuan", route: "/terms" },
    { icon: Lock, label: "Kebijakan Privasi", route: "/privacy" },
    { icon: FileText, label: "Lisensi Open Source", route: "/licenses" },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Tentang Aplikasi</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* App Info */}
        <div className="text-center py-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-12 h-12 text-background" />
          </div>
          <h2 className="text-2xl font-bold text-gradient mb-1">SafeHome</h2>
          <p className="text-muted-foreground">Versi 1.0.0</p>
          <p className="text-sm text-muted-foreground mt-2">
            Sistem Keamanan Rumah Berbasis AI
          </p>
        </div>

        {/* Description */}
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              SafeHome adalah aplikasi keamanan rumah pintar yang menggunakan 
              teknologi kecerdasan buatan (AI) untuk melindungi rumah Anda. 
              Dengan kombinasi sensor canggih, kamera pintar, dan algoritma 
              machine learning, SafeHome memberikan perlindungan 24/7 untuk 
              ketenangan pikiran Anda.
            </p>
          </CardContent>
        </Card>

        {/* AI Features */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Teknologi AI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-secondary/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{feature.name}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card variant="glass">
          <CardContent className="p-0 divide-y divide-border">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => navigate(item.route)}
                className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          © 2024 SafeHome. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default AboutAppPage;
