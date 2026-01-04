import { useNavigate, useParams } from "react-router-dom";
import { Image, ArrowLeft } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraSnapshotFullscreenPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PageScaffold
      title="Snapshot Fullscreen"
      subtitle={id ? `ID snapshot: ${id}` : undefined}
      icon={<Image className="w-5 h-5 text-primary" />}
      metaDescription="Tampilan fullscreen snapshot kamera SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-4">
          <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
            <Image className="w-12 h-12 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" onClick={() => navigate(`/camera-snapshot/${id}`)}>
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Detail Snapshot
      </Button>
    </PageScaffold>
  );
};

export default CameraSnapshotFullscreenPage;
