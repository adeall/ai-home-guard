import { useNavigate, useParams } from "react-router-dom";
import { FileText, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PageScaffold
      title={`Detail Event #${id}`}
      subtitle="Rincian aktivitas"
      icon={<FileText className="w-5 h-5 text-primary" />}
      metaDescription="Detail event SafeHome: rincian aktivitas keamanan rumah." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Ringkasan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><span className="text-foreground">ID:</span> {id}</p>
            <p><span className="text-foreground">Status:</span> Tercatat</p>
            <p><span className="text-foreground">Catatan:</span> Halaman ini demo UI agar tidak jatuh ke halaman detail generik.</p>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/activity-history")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Riwayat Aktivitas</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full" onClick={() => navigate("/security-analysis")}>
          Lihat Analisis Keamanan
        </Button>
      </section>
    </PageScaffold>
  );
};

export default EventDetailPage;
