import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cpu, ChevronRight, Code } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExpertRulesUsedPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Aturan untuk Keputusan #${id ?? "-"}`, [id]);

  const rules = [
    "IF gerakan_terdeteksi AND lokasi = 'halaman' THEN status = 'waspada'",
    "IF status = 'waspada' THEN aktifkan_kamera",
    "IF waktu > 22:00 THEN tingkatkan_sensitivitas",
  ];

  return (
    <PageScaffold
      title="Aturan yang Digunakan"
      subtitle={title}
      icon={<Cpu className="w-5 h-5 text-primary" />}
      metaDescription="Daftar aturan Expert System yang digunakan untuk menghasilkan keputusan keamanan (demo UI)."
    >
      <section className="space-y-2">
        {rules.map((r, idx) => (
          <Card key={idx} variant="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" /> Rule {idx + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground font-mono">{r}</CardContent>
          </Card>
        ))}
      </section>

      <Button variant="outline" className="w-full" onClick={() => navigate(`/expert-decision/${id ?? 1}`)}>
        Kembali ke Detail Keputusan
      </Button>

      <Card variant="interactive" onClick={() => navigate("/expert-knowledge")}>
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Buka Basis Pengetahuan</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ExpertRulesUsedPage;
