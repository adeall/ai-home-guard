import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Maximize2, Camera } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraFullscreenPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const camLabel = useMemo(() => `Kamera #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Tampilan Penuh"
      subtitle={camLabel}
      icon={<Maximize2 className="w-5 h-5 text-primary" />}
      metaDescription="Tampilan penuh kamera live SafeHome untuk monitoring keamanan rumah."
    >
      <Card variant="glow" className="overflow-hidden">
        <div className="relative aspect-video bg-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Live Feed — {camLabel}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <Button variant="outline" className="w-full" onClick={() => navigate(`/camera-detail/${id}`)}>
            Lihat Detail Kamera
          </Button>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default CameraFullscreenPage;
