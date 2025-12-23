import { Wifi, AlertTriangle, CheckCircle } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NetworkStatusPage = () => {
  return (
    <PageScaffold
      title="Status Jaringan"
      subtitle="Koneksi & sinkronisasi"
      icon={<Wifi className="w-5 h-5 text-primary" />}
      metaDescription="Status jaringan SafeHome: cek koneksi internet dan saran perbaikan saat koneksi lambat." 
    >
      <section className="space-y-4">
        <Card variant="glow">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-semibold">Koneksi lambat (demo)</p>
            </div>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Saran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /> Dekatkan perangkat ke router</p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /> Restart router jika perlu</p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /> Pastikan kamera/sensor punya sinyal stabil</p>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default NetworkStatusPage;
