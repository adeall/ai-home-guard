import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, BarChart3, Zap, Clock, ChevronRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExpertOverviewPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Keputusan (24 jam)", value: "15", icon: BarChart3 },
    { label: "Aturan Aktif", value: "47", icon: Zap },
    { label: "Update Terakhir", value: "2 menit", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Ringkasan Expert System</h1>
              <p className="text-xs text-muted-foreground">Status, aturan, dan performa analisis</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card variant="glow">
          <CardHeader>
            <CardTitle>Status Analisis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Sistem berjalan normal dan terus memantau kondisi rumah berdasarkan aturan dan fakta yang tersimpan.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <Card key={s.label} className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{s.value}</p>
                      <p className="text-[11px] text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/expert-knowledge")}> 
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Buka Basis Pengetahuan</p>
                <p className="text-xs text-muted-foreground">Aturan, fakta, dan inferensi</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertOverviewPage;
