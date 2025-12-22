import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Camera, Video } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CameraDetailPage = () => {
  const { id } = useParams();
  const title = useMemo(() => `Kamera #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Detail Kamera"
      subtitle={title}
      icon={<Camera className="w-5 h-5 text-primary" />}
      metaDescription="Detail kamera SafeHome: status, lokasi, dan pengaturan kamera."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Informasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Status: Online</p>
          <p>• Lokasi: Halaman Depan</p>
          <p>• Mode rekam: Aktif</p>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Aksi Cepat</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
          <Video className="w-4 h-4 text-primary" />
          <span>Kontrol kamera akan ditambahkan di iterasi berikutnya.</span>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default CameraDetailPage;
