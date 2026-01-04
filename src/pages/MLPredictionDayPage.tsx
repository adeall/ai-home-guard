import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarChart3, Camera, ChevronRight, Info } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MLPredictionDayPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = useMemo(() => {
    const idx = Number(id ?? 0);
    const presets = [
      { label: "Besok", risk: 35, factors: ["Cuaca mendung", "Akhir pekan"] },
      { label: "Lusa", risk: 28, factors: ["Hari kerja normal"] },
      { label: "3 Hari", risk: 42, factors: ["Libur nasional"] },
    ];
    return presets[(idx - 1 + presets.length) % presets.length] ?? presets[0];
  }, [id]);

  return (
    <PageScaffold
      title="Detail Prediksi"
      subtitle={id ? `Prediksi #${id} • ${data.label}` : data.label}
      icon={<BarChart3 className="w-5 h-5 text-primary" />}
      metaDescription="Detail prediksi risiko keamanan berdasarkan Machine Learning SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2">
          <p className="font-semibold">Risiko diperkirakan: {data.risk}%</p>
          <p className="text-sm text-muted-foreground">Faktor utama:</p>
          <div className="text-sm text-muted-foreground space-y-1">
            {data.factors.map((f) => (
              <p key={f}>• {f}</p>
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
              <p className="text-xs text-muted-foreground">Bandingkan prediksi hari lain</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/camera-live")}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Buka Kamera Live</p>
                <p className="text-xs text-muted-foreground">Monitoring saat risiko meningkat</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>

      <Card variant="glass">
        <CardContent className="p-4 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="w-4 h-4 text-primary mt-0.5" />
          <p>Ini demo UI. Nantinya prediksi diambil dari data sensor & model ML.</p>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={() => navigate("/ai-ml")}>Kembali ke Modul ML</Button>
    </PageScaffold>
  );
};

export default MLPredictionDayPage;
