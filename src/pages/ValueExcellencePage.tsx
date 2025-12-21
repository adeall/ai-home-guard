import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, CheckCircle2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ValueExcellencePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-bold">Nilai: Keunggulan</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <p className="text-muted-foreground">
              Keunggulan berarti kualitas, ketelitian, dan respons cepat dalam setiap fitur keamanan.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Presisi deteksi</div>
              <div className="flex items-center gap-2 text-sm"><Zap className="w-4 h-4 text-primary" /> Respon cepat</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> UI konsisten</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ValueExcellencePage;
