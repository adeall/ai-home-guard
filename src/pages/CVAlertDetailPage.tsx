import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, AlertTriangle, ChevronRight, Camera, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CVAlertDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const alert = {
    id,
    title: "Asap Terdeteksi",
    severity: "High",
    location: "Dapur",
    time: "2 menit lalu",
    cameraId: 1,
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Detail Peringatan</h1>
              <p className="text-xs text-muted-foreground">Alert ID: {alert.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-2">
            <p className="text-lg font-semibold">{alert.title}</p>
            <p className="text-sm text-muted-foreground">Level: {alert.severity} • {alert.time}</p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{alert.location}</span>
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate(`/camera-view/${alert.cameraId}`)}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Buka Kamera Terkait</p>
                <p className="text-xs text-muted-foreground">Lihat feed untuk konfirmasi</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CVAlertDetailPage;
