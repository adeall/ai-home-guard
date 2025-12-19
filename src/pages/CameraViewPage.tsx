import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Camera, Settings, Maximize, Volume2, VolumeX, Video, Circle, ChevronRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CameraViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const cameras: Record<string, {
    name: string;
    location: string;
    status: "online" | "offline";
    resolution: string;
    fps: number;
  }> = {
    "1": { name: "Kamera Depan", location: "Halaman Depan", status: "online", resolution: "1080p", fps: 30 },
    "2": { name: "Kamera Belakang", location: "Taman Belakang", status: "online", resolution: "1080p", fps: 30 },
    "3": { name: "Kamera Garasi", location: "Garasi", status: "offline", resolution: "720p", fps: 25 },
  };

  const camera = cameras[id || "1"] || cameras["1"];

  const detectedObjects = [
    { id: 1, type: "Mobil", confidence: 95, time: "Baru saja" },
    { id: 2, type: "Orang", confidence: 88, time: "2 menit lalu" },
    { id: 3, type: "Kucing", confidence: 76, time: "5 menit lalu" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold">{camera.name}</h1>
              <p className="text-xs text-muted-foreground">{camera.location}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate(`/camera-settings/${id}`)}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Live View */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative flex items-center justify-center">
            {camera.status === "online" ? (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Live Preview</p>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-white">LIVE</span>
                </div>
                {/* Info Badge */}
                <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full">
                  <span className="text-sm text-white">{camera.resolution} • {camera.fps}fps</span>
                </div>
                {/* Recording Indicator */}
                {isRecording && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-red-500/80 px-3 py-1 rounded-full">
                    <Circle className="w-3 h-3 fill-white text-white" />
                    <span className="text-sm text-white">REC</span>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <Camera className="w-16 h-16 text-red-500/50 mx-auto mb-2" />
                <p className="text-red-400">Kamera Offline</p>
              </div>
            )}
          </div>
          {/* Controls */}
          <CardContent className="p-4">
            <div className="flex items-center justify-around">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              <Button 
                variant={isRecording ? "destructive" : "default"}
                onClick={() => setIsRecording(!isRecording)}
              >
                <Video className="w-5 h-5 mr-2" />
                {isRecording ? "Stop" : "Rekam"}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate(`/camera-fullscreen/${id}`)}
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detected Objects */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Box className="w-5 h-5 text-primary" />
            Objek Terdeteksi
          </h3>
          <div className="space-y-2">
            {detectedObjects.map((obj) => (
              <Card 
                key={obj.id} 
                variant="interactive"
                onClick={() => navigate(`/cv-object/${obj.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{obj.type}</p>
                    <p className="text-sm text-muted-foreground">{obj.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                      {obj.confidence}%
                    </span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => navigate(`/camera-recordings/${id}`)}>
            Rekaman
          </Button>
          <Button variant="outline" onClick={() => navigate(`/camera-snapshots/${id}`)}>
            Tangkapan Layar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CameraViewPage;
