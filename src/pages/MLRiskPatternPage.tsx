import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock, ShieldAlert, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MLRiskPatternPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const pattern = useMemo(() => {
    const idx = Number(id ?? 0);
    const presets = [
      { time: "02:00 - 05:00", risk: 75, label: "Tinggi", notes: ["Area gelap", "Aktivitas jalan sepi"] },
      { time: "18:00 - 20:00", risk: 45, label: "Sedang", notes: ["Jam pulang", "Lalu lintas meningkat"] },
      { time: "12:00 - 14:00", risk: 20, label: "Rendah", notes: ["Aktivitas normal", "Lingkungan ramai"] },
    ];
    const p = presets[idx] ?? presets[0];
    return { ...p, id: idx };
  }, [id]);

  return (
    <PageScaffold
      title="Pola Waktu Rawan"
      subtitle={`Risiko: ${pattern.label} • ${pattern.time}`}
      icon={<Clock className="w-5 h-5 text-primary" />}
      metaDescription="Detail pola waktu rawan berdasarkan Machine Learning SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-3">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold">Ringkasan Pola</p>
              <p className="text-sm text-muted-foreground">
                Risiko pada rentang {pattern.time} diperkirakan {pattern.risk}% (demo UI).
              </p>
            </div>
          </div>

          <div className="space-y-1 text-sm text-muted-foreground">
            {pattern.notes.map((n) => (
              <p key={n}>• {n}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="space-y-2">
        <Card variant="interactive" onClick={() => navigate("/ml-prediction-detail")}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Lihat Grafik 7 Hari</p>
              <p className="text-xs text-muted-foreground">Kembali ke ringkasan prediksi</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/security-analysis")}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Buka Analisis Keamanan</p>
              <p className="text-xs text-muted-foreground">Cek status sistem saat ini</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>

      <Button className="w-full" onClick={() => navigate(-1)}>
        Kembali
      </Button>
    </PageScaffold>
  );
};

export default MLRiskPatternPage;
