import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Box, Camera, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CVObjectDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const objectDetail = {
    id,
    type: "Orang",
    camera: "Kamera Depan",
    location: "Pagar Depan",
    time: "12 menit lalu",
    confidence: "92%",
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
              <Box className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Detail Objek</h1>
              <p className="text-xs text-muted-foreground">Objek ID: {objectDetail.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">{objectDetail.type}</p>
              <span className="text-sm text-muted-foreground">Confidence: {objectDetail.confidence}</span>
            </div>
            <p className="text-sm text-muted-foreground">{objectDetail.location} • {objectDetail.time}</p>
            <Card variant="glass">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{objectDetail.camera}</p>
                    <p className="text-xs text-muted-foreground">Buka live view kamera</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CVObjectDetailPage;
