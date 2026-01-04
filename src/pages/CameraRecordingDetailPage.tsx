import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video, CalendarDays, Camera, Play } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraRecordingDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const recording = useMemo(
    () => ({
      id: id ?? "-",
      cameraName: "Kamera Depan",
      date: "Hari ini",
      time: "13:10",
      duration: "00:32",
      resolution: "1080p",
    }),
    [id],
  );

  return (
    <PageScaffold
      title="Detail Rekaman"
      subtitle={id ? `ID rekaman: ${id}` : undefined}
      icon={<Video className="w-5 h-5 text-primary" />}
      metaDescription="Detail rekaman kamera SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2">
          <p className="font-semibold">{recording.cameraName}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> {recording.date} • {recording.time}
          </p>
          <div className="pt-2 text-sm text-muted-foreground space-y-1">
            <p>• Durasi: {recording.duration}</p>
            <p>• Resolusi: {recording.resolution}</p>
            <p>• Format: MP4 (demo)</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Button onClick={() => navigate(`/camera-recording/${recording.id}/play`)}>
          <Play className="w-4 h-4" />
          Putar
        </Button>
        <Button variant="outline" onClick={() => navigate("/camera-recordings")}>
          <Camera className="w-4 h-4" />
          Semua Rekaman
        </Button>
      </div>
    </PageScaffold>
  );
};

export default CameraRecordingDetailPage;
