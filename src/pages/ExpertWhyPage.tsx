import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Info, ChevronRight, CheckCircle2, Zap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExpertWhyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const triggeredRules = [
    { id: 12, name: "Gerakan Malam", match: "Gerakan terdeteksi 22:13" },
    { id: 5, name: "Kamera Otomatis", match: "Area pintu depan" },
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
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Mengapa Keputusan Ini?</h1>
              <p className="text-xs text-muted-foreground">ID keputusan: {id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="font-semibold">Penjelasan Singkat</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert System menggabungkan fakta dari sensor + aturan aktif untuk menghasilkan tindakan yang paling aman.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-3">Aturan yang Terpenuhi</h2>
          <div className="space-y-2">
            {triggeredRules.map((r) => (
              <Card key={r.id} variant="interactive" onClick={() => navigate(`/expert-rule/${r.id}`)}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.match}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card variant="interactive" onClick={() => navigate("/expert-knowledge")}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Lihat Basis Pengetahuan</p>
                <p className="text-xs text-muted-foreground">Detail aturan & fakta</p>
              </div>
            </div>
            <Zap className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertWhyPage;
