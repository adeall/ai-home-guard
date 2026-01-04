import { useNavigate, useParams } from "react-router-dom";
import { Image, Maximize2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraSnapshotDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PageScaffold
      title="Detail Snapshot"
      subtitle={id ? `ID snapshot: ${id}` : undefined}
      icon={<Image className="w-5 h-5 text-primary" />}
      metaDescription="Detail tangkapan layar kamera SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-4">
          <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
            <Image className="w-10 h-10 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-3">Preview snapshot (placeholder).</p>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={() => navigate(`/camera-snapshot/${id}/fullscreen`)}>
        <Maximize2 className="w-4 h-4" />
        Lihat Fullscreen
      </Button>
    </PageScaffold>
  );
};

export default CameraSnapshotDetailPage;
