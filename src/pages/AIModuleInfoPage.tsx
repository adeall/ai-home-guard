import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Cpu, Brain, Eye, MessageCircle, BarChart3, ChevronRight, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIModuleInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const modules = [
    { icon: Cpu, name: "Expert System", dev: "Ade Alfian", desc: "Analisis keamanan berbasis aturan" },
    { icon: BarChart3, name: "Machine Learning", dev: "Alfat Maulana", desc: "Prediksi risiko keamanan" },
    { icon: Brain, name: "Deep Learning", dev: "Endang Cristina", desc: "Pengenalan wajah & aktivitas" },
    { icon: Eye, name: "Computer Vision", dev: "Muhammad Ikhlasul Amal", desc: "Deteksi objek & pelacakan" },
    { icon: MessageCircle, name: "NLP Chatbot", dev: "Putri Sissyprisilia", desc: "Asisten berbasis bahasa alami" },
  ];

  const idx = Number(id ?? "0");
  const module = modules[idx] ?? modules[0];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <module.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Info Modul AI</h1>
              <p className="text-xs text-muted-foreground">Modul #{id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardHeader>
            <CardTitle>{module.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Developer: </span>
              <span>{module.dev}</span>
            </div>
            <p className="text-sm text-muted-foreground">{module.desc}</p>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/about")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Tentang</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AIModuleInfoPage;
