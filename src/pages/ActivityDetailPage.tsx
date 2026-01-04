import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Info, ChevronRight, Camera, DoorOpen, Activity } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const ActivityDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const detail = useMemo(() => {
    const label = `Aktivitas #${id ?? "-"}`;
    return {
      label,
      time: "14:32",
      location: "Ruang Tamu",
      summary: "Demo UI: detail aktivitas terdeteksi, termasuk sumber sensor dan aksi lanjutan.",
    };
  }, [id]);

  return (
    <PageScaffold
      title="Detail Aktivitas"
      subtitle={detail.label}
      icon={<Activity className="w-5 h-5 text-primary" />}
      metaDescription="Detail aktivitas keamanan SafeHome: waktu, lokasi, dan tindakan lanjutan."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2">
          <p className="font-semibold">{detail.label}</p>
          <p className="text-sm text-muted-foreground">{detail.summary}</p>
          <div className="pt-2 space-y-1 text-sm text-muted-foreground">
            <p>• Waktu: {detail.time}</p>
            <p>• Lokasi: {detail.location}</p>
            <p>• Tingkat: Waspada</p>
          </div>
        </CardContent>
      </Card>

      <section className="space-y-2">
        <Card variant="interactive" onClick={() => navigate("/camera-live")}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Buka Live Camera</p>
                <p className="text-xs text-muted-foreground">Lihat rekaman sekitar waktu kejadian</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/sensor-door")}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <DoorOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Cek Sensor Terkait</p>
                <p className="text-xs text-muted-foreground">Menuju ringkasan sensor pintu</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>

      <Card variant="glass">
        <CardContent className="p-4 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="w-4 h-4 text-primary mt-0.5" />
          <p>Semua tombol di halaman ini mengarah ke halaman lain (sesuai aturan interaksi).</p>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ActivityDetailPage;
