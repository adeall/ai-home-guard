import { useNavigate } from "react-router-dom";
import { BarChart3, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeeklyAnalysisPage = () => {
  const navigate = useNavigate();

  const highlights = [
    { id: "puncak", title: "Jam Puncak Aktivitas", desc: "Terjadi sekitar 19:00–21:00" },
    { id: "kamera", title: "Kamera Paling Aktif", desc: "Kamera Teras Depan" },
    { id: "sensor", title: "Sensor Terpicu", desc: "Sensor Gerak Koridor" },
  ];

  return (
    <PageScaffold
      title="Analisis Mingguan"
      subtitle="Ringkasan 7 hari terakhir"
      icon={<BarChart3 className="w-5 h-5 text-primary" />}
      metaDescription="Analisis mingguan SafeHome untuk ringkasan aktivitas dan keamanan."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Ringkasan</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Ini halaman analisis mingguan (demo UI). Tap highlight di bawah untuk membuka detail.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-2">
          {highlights.map((h) => (
            <Card
              key={h.id}
              variant="interactive"
              onClick={() => navigate(`/stat-detail/weekly-${h.id}`)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{h.title}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageScaffold>
  );
};

export default WeeklyAnalysisPage;
