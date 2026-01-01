import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserX, Clock, MapPin, Camera, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DLStrangerDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Deteksi Orang Asing #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Detail Orang Asing"
      subtitle={title}
      icon={<UserX className="w-5 h-5 text-primary" />}
      metaDescription="Detail deteksi orang asing oleh Deep Learning SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Ringkasan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Waktu: 14:32
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Lokasi: Depan Pagar
          </p>
          <p className="flex items-center gap-2">
            <Camera className="w-4 h-4" /> Kamera: Kamera Depan
          </p>
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/camera-live")}>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Buka Live Camera</p>
            <p className="text-xs text-muted-foreground">Lihat feed kamera terkait</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/dl-strangers")}>
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Kembali ke Daftar Orang Asing</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DLStrangerDetailPage;
