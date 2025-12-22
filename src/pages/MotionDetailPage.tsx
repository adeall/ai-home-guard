import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Info, Activity } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const MotionDetailPage = () => {
  const { id } = useParams();
  const title = useMemo(() => `Deteksi #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Detail Deteksi"
      subtitle={title}
      icon={<Activity className="w-5 h-5 text-primary" />}
      metaDescription="Detail deteksi sensor gerak SafeHome."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-3">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">
            Ringkasan kejadian yang terdeteksi oleh sensor gerak.
          </p>
          <div className="pt-2 space-y-1 text-sm text-muted-foreground">
            <p>• Lokasi: Teras Belakang</p>
            <p>• Waktu: 12:15</p>
            <p>• Tingkat: Waspada</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <Info className="w-4 h-4" />
            <span>Tap kembali untuk kembali ke daftar log.</span>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default MotionDetailPage;
