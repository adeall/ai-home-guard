import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Database, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExpertFactsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Fakta untuk Keputusan #${id ?? "-"}`, [id]);

  const facts = [
    "gerakan_terdeteksi: true",
    "lokasi: halaman_depan",
    "waktu: 23:45",
    "kamera_status: aktif",
  ];

  return (
    <PageScaffold
      title="Fakta Terkait"
      subtitle={title}
      icon={<Database className="w-5 h-5 text-primary" />}
      metaDescription="Fakta (working memory) yang dipakai Expert System untuk mengambil keputusan (demo UI)."
    >
      <section className="space-y-2">
        {facts.map((f) => (
          <Card key={f} variant="glass">
            <CardContent className="p-4 text-sm text-muted-foreground font-mono">{f}</CardContent>
          </Card>
        ))}
      </section>

      <Button variant="outline" className="w-full" onClick={() => navigate(`/expert-decision/${id ?? 1}`)}>
        Kembali ke Detail Keputusan
      </Button>

      <Card variant="interactive" onClick={() => navigate("/security-analysis")}>
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Buka Analisis Keamanan</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ExpertFactsPage;
