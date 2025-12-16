import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Camera, Maximize2, Volume2, VolumeX, Video,
  Circle, Settings, ChevronRight, Wifi, WifiOff
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraLivePage = () => {
  const navigate = useNavigate();
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const cameras = [
    { id: 1, name: "Kamera Depan", location: "Halaman Depan", status: "online", recording: true },
    { id: 2, name: "Kamera Belakang", location: "Taman Belakang", status: "online", recording: true },
    { id: 3, name: "Kamera Garasi", location: "Garasi", status: "offline", recording: false },
  ];

  const activeCamera = cameras[selectedCamera];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
                <Camera className="w-5 h-5 text-background" />
              </div>
              <div>
                <h1 className="font-bold">Kamera Live</h1>
                <p className="text-xs text-muted-foreground">{cameras.filter(c => c.status === "online").length} kamera online</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/camera-settings')}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Main Camera View */}
        <Card
          variant="glow"
          className="overflow-hidden cursor-pointer"
          onClick={() => navigate(`/camera-fullscreen/${activeCamera.id}`)}
        >
          <div className="relative aspect-video bg-secondary">
            {/* Simulated camera feed */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-secondary flex items-center justify-center">
              {activeCamera.status === "online" ? (
                <div className="text-center">
                  <Camera className="w-16 h-16 text-muted-foreground mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Live Feed - {activeCamera.name}</p>
                </div>
              ) : (
                <div className="text-center">
                  <WifiOff className="w-16 h-16 text-red-400 mb-2 mx-auto" />
                  <p className="text-sm text-red-400">Kamera Offline</p>
                </div>
              )}
            </div>

            {/* Overlay Controls */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              {activeCamera.recording && (
                <div className="flex items-center gap-1 bg-red-500 px-2 py-1 rounded-full">
                  <Circle className="w-2 h-2 fill-current" />
                  <span className="text-xs font-medium">REC</span>
                </div>
              )}
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                activeCamera.status === "online" ? "bg-green-500/80" : "bg-red-500/80"
              }`}>
                {activeCamera.status === "online" ? (
                  <Wifi className="w-3 h-3" />
                ) : (
                  <WifiOff className="w-3 h-3" />
                )}
                <span className="text-xs font-medium capitalize">{activeCamera.status}</span>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{activeCamera.name}</p>
                <p className="text-xs text-muted-foreground">{activeCamera.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="glass"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="glass"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/camera-fullscreen/${activeCamera.id}`);
                  }}
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Camera Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {cameras.map((cam, i) => (
            <button
              key={cam.id}
              onClick={() => setSelectedCamera(i)}
              className={`flex-shrink-0 p-3 rounded-xl border transition-all ${
                selectedCamera === i
                  ? "bg-primary/20 border-primary"
                  : "bg-secondary border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${cam.status === "online" ? "bg-green-500" : "bg-red-500"}`} />
                <span className="text-sm font-medium whitespace-nowrap">{cam.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Camera List */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Semua Kamera</h3>
          <div className="space-y-2">
            {cameras.map((cam) => (
              <Card
                key={cam.id}
                variant="interactive"
                onClick={() => navigate(`/camera-detail/${cam.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      cam.status === "online" ? "bg-green-500/20" : "bg-red-500/20"
                    }`}>
                      <Video className={`w-6 h-6 ${cam.status === "online" ? "text-green-400" : "text-red-400"}`} />
                    </div>
                    <div>
                      <p className="font-medium">{cam.name}</p>
                      <p className="text-xs text-muted-foreground">{cam.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {cam.recording && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">REC</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recordings */}
        <Card variant="interactive" onClick={() => navigate('/camera-recordings')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Rekaman</h4>
              <p className="text-xs text-muted-foreground">Lihat rekaman 7 hari terakhir</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CameraLivePage;
