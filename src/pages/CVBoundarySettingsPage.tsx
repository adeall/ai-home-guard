import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings2, MapPin, Plus, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CVBoundarySettingsPage = () => {
  const navigate = useNavigate();

  const presets = [
    { id: 1, name: "Pagar Depan", desc: "Zona larangan masuk" },
    { id: 2, name: "Pintu Masuk", desc: "Area dengan prioritas tinggi" },
    { id: 3, name: "Taman Belakang", desc: "Monitoring ringan" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Settings2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Pengaturan Batas Virtual</h1>
              <p className="text-xs text-muted-foreground">Kelola zona dan aturan notifikasi</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate("/cv-add-boundary")}>
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-3">
        {presets.map((p) => (
          <Card key={p.id} variant="interactive" onClick={() => navigate(`/cv-boundary/${p.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default CVBoundarySettingsPage;
