import { useParams } from "react-router-dom";
import { Camera, Clock, MapPin } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DLDetectionDetailPage = () => {
  const { id } = useParams();

  return (
    <PageScaffold
      title="Detail Deteksi"
      subtitle={id ? `ID deteksi: ${id}` : undefined}
      icon={<Camera className="w-5 h-5 text-primary" />}
      metaDescription="Detail deteksi Deep Learning SafeHome." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Informasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Waktu: 14:32</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lokasi: Pintu Depan</p>
            <p className="flex items-center gap-2"><Camera className="w-4 h-4" /> Kamera: Kamera Depan</p>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default DLDetectionDetailPage;
