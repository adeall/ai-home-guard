import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video, MapPin, Clock, ShieldAlert, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DLActivityDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const label = useMemo(() => `Aktivitas #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Detail Aktivitas"
      subtitle={label}
      icon={<ShieldAlert className="w-5 h-5 text-primary" />}
      metaDescription="Detail aktivitas mencurigakan yang terdeteksi oleh Deep Learning SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Informasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Waktu: 03:15
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Lokasi: Samping Rumah
          </p>
          <p className="flex items-center gap-2">
            <Video className="w-4 h-4" /> Jenis: Gerakan Mencurigakan
          </p>
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/camera-live")}>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Buka Live Camera</p>
            <p className="text-xs text-muted-foreground">Pantau area terkait secara real-time</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/notification-history")}>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Lihat Riwayat Notifikasi</p>
            <p className="text-xs text-muted-foreground">Cek kejadian terkait lainnya</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DLActivityDetailPage;
