import { useNavigate } from "react-router-dom";
import { TrendingUp, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MLPredictionDetailPage = () => {
  const navigate = useNavigate();

  const factors = [
    { id: "cuaca", title: "Cuaca", desc: "Hujan ringan meningkatkan false-positive" },
    { id: "jam", title: "Jam", desc: "Risiko lebih tinggi pada malam hari" },
    { id: "zona", title: "Zona", desc: "Koridor belakang lebih sering terpicu" },
  ];

  return (
    <PageScaffold
      title="Detail Prediksi Risiko"
      subtitle="Machine Learning (demo UI)"
      icon={<TrendingUp className="w-5 h-5 text-primary" />}
      metaDescription="Detail prediksi risiko berbasis Machine Learning SafeHome."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Ringkasan</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <p>• Skor Risiko: 0.62</p>
            <p>• Confidence: 78%</p>
            <p>• Rekomendasi: tingkatkan mode keamanan saat malam</p>
          </CardContent>
        </Card>

        <div className="space-y-2">
          {factors.map((f) => (
            <Card key={f.id} variant="interactive" onClick={() => navigate(`/stat-detail/ml-${f.id}`)}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="w-full" onClick={() => navigate("/ml-training")}>
          Lihat Training Model
        </Button>
        <Button variant="outline" className="w-full" onClick={() => navigate("/ai-ml")}>
          Kembali ke ML System
        </Button>
      </section>
    </PageScaffold>
  );
};

export default MLPredictionDetailPage;
