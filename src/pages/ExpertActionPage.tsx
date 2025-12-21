import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Zap, CheckCircle2, ClipboardList, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const ExpertActionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const checklist = [
    { id: "c1", text: "Periksa kondisi pintu & jendela" },
    { id: "c2", text: "Aktifkan mode malam" },
    { id: "c3", text: "Tinjau rekaman kamera terkait" },
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
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Tindakan Rekomendasi</h1>
              <p className="text-xs text-muted-foreground">ID rekomendasi: {id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="font-semibold">Tujuan</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Rekomendasi ini dibuat untuk menurunkan risiko ancaman berdasarkan pola sensor dan aturan aktif.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            Checklist
          </h2>
          <Card variant="glass">
            <CardContent className="p-0 divide-y divide-border">
              {checklist.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Checkbox id={c.id} />
                    <label htmlFor={c.id} className="text-sm">{c.text}</label>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExpertActionPage;
