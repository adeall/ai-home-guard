import { useNavigate } from "react-router-dom";
import { FileText, Download, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ActivityReportPage = () => {
  const navigate = useNavigate();

  return (
    <PageScaffold
      title="Laporan Aktivitas"
      subtitle="Ringkasan & export"
      icon={<FileText className="w-5 h-5 text-primary" />}
      metaDescription="Laporan aktivitas SafeHome (demo UI): ringkasan, filter, dan export."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
          <p>• Periode: 7 hari terakhir</p>
          <p>• Total aktivitas: 247</p>
          <p>• Anomali: 2</p>
        </CardContent>
      </Card>

      <section className="space-y-2">
        <Card variant="interactive" onClick={() => navigate("/date-range-picker")}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Ubah Rentang Tanggal</p>
              <p className="text-xs text-muted-foreground">Pilih periode laporan</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/export-report")}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Export Laporan</p>
              <p className="text-xs text-muted-foreground">Buka halaman export PDF</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>

      <Button className="w-full" onClick={() => navigate("/export-report")}
        >
        <Download className="w-5 h-5" />
        Export Sekarang
      </Button>
    </PageScaffold>
  );
};

export default ActivityReportPage;
