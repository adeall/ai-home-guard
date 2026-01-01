import { useNavigate } from "react-router-dom";
import { FileDown, CheckCircle2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ExportReportPage = () => {
  const navigate = useNavigate();

  const generate = () => {
    toast({
      title: "Laporan dibuat",
      description: "Demo UI: file akan tersedia untuk diunduh.",
    });
  };

  return (
    <PageScaffold
      title="Export Laporan"
      subtitle="PDF / Ringkasan"
      icon={<FileDown className="w-5 h-5 text-primary" />}
      metaDescription="Export laporan keamanan dan aktivitas SafeHome (demo UI)."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Opsi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>• Rentang: mengikuti filter statistik</p>
            <p>• Format: PDF</p>
            <p>• Isi: ringkasan + daftar event penting</p>
          </CardContent>
        </Card>

        <Button className="w-full" onClick={generate}>
          <CheckCircle2 className="w-5 h-5" />
          Generate Laporan
        </Button>

        <Button variant="outline" className="w-full" onClick={() => navigate("/statistics")}>
          Kembali ke Statistik
        </Button>
      </section>
    </PageScaffold>
  );
};

export default ExportReportPage;
