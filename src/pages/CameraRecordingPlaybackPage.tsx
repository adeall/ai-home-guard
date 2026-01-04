import { useNavigate, useParams } from "react-router-dom";
import { Play, Video, ArrowLeft } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraRecordingPlaybackPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PageScaffold
      title="Pemutaran Rekaman"
      subtitle={id ? `Rekaman ID: ${id}` : undefined}
      icon={<Play className="w-5 h-5 text-primary" />}
      metaDescription="Pemutaran rekaman kamera SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-4">
          <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
            <div className="text-center">
              <Video className="w-10 h-10 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground mt-2">Player rekaman (placeholder)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" onClick={() => navigate(`/camera-recording/${id}`)}>
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Detail Rekaman
      </Button>
    </PageScaffold>
  );
};

export default CameraRecordingPlaybackPage;
