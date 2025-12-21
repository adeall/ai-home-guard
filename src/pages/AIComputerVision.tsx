import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Camera, Box, MapPin, ChevronRight, Settings2, Play, Square, Flame, ShieldAlert, Users, Car, Package, AlertTriangle, Footprints, Moon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const AIComputerVision = () => {
  const navigate = useNavigate();

  const cameras = [
    { id: 1, name: "Kamera Depan", status: "online", objects: 3, location: "Halaman Depan" },
    { id: 2, name: "Kamera Belakang", status: "online", objects: 1, location: "Taman Belakang" },
    { id: 3, name: "Kamera Garasi", status: "offline", objects: 0, location: "Garasi" },
  ];

  const detectedObjects = [
    { id: 1, type: "Mobil", location: "Depan Garasi", time: "Baru saja", camera: "Kamera Depan" },
    { id: 2, type: "Kucing", location: "Taman", time: "5 menit lalu", camera: "Kamera Belakang" },
    { id: 3, type: "Orang", location: "Pagar Depan", time: "12 menit lalu", camera: "Kamera Depan" },
  ];

  const virtualBoundaries = [
    { id: 1, name: "Area Pagar Depan", active: true, alerts: 5 },
    { id: 2, name: "Pintu Masuk", active: true, alerts: 12 },
    { id: 3, name: "Taman Belakang", active: false, alerts: 0 },
  ];

  const smartDetections = [
    { id: 1, name: "Deteksi Kebakaran", icon: Flame, active: true, color: "text-orange-500", bgColor: "bg-orange-500/20", description: "Mendeteksi api dan asap" },
    { id: 2, name: "Deteksi Pencurian", icon: ShieldAlert, active: true, color: "text-red-500", bgColor: "bg-red-500/20", description: "Mendeteksi aktivitas mencurigakan" },
    { id: 3, name: "Deteksi Kerumunan", icon: Users, active: false, color: "text-blue-500", bgColor: "bg-blue-500/20", description: "Mendeteksi kerumunan orang" },
    { id: 4, name: "Deteksi Kendaraan", icon: Car, active: true, color: "text-green-500", bgColor: "bg-green-500/20", description: "Mendeteksi kendaraan asing" },
    { id: 5, name: "Deteksi Paket", icon: Package, active: false, color: "text-purple-500", bgColor: "bg-purple-500/20", description: "Mendeteksi paket ditinggalkan" },
    { id: 6, name: "Deteksi Penyusup", icon: Footprints, active: true, color: "text-yellow-500", bgColor: "bg-yellow-500/20", description: "Mendeteksi orang asing masuk" },
    { id: 7, name: "Deteksi Malam", icon: Moon, active: true, color: "text-indigo-500", bgColor: "bg-indigo-500/20", description: "Mode penglihatan malam" },
    { id: 8, name: "Deteksi Bahaya", icon: AlertTriangle, active: false, color: "text-amber-500", bgColor: "bg-amber-500/20", description: "Mendeteksi situasi berbahaya" },
  ];

  const recentAlerts = [
    { id: 1, type: "Asap Terdeteksi", location: "Dapur", time: "2 menit lalu", severity: "high", icon: Flame },
    { id: 2, type: "Orang Asing", location: "Pagar Depan", time: "15 menit lalu", severity: "medium", icon: ShieldAlert },
    { id: 3, type: "Kendaraan Tidak Dikenal", location: "Garasi", time: "1 jam lalu", severity: "low", icon: Car },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Computer Vision</h1>
              <p className="text-xs text-muted-foreground">Deteksi & Pelacakan Objek</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Camera List */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Kamera Aktif
          </h3>
          <div className="space-y-2">
            {cameras.map((cam) => (
              <Card
                key={cam.id}
                variant="interactive"
                onClick={() => navigate(`/camera-view/${cam.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      cam.status === "online" ? "bg-green-500/20" : "bg-red-500/20"
                    }`}>
                      <Camera className={`w-6 h-6 ${cam.status === "online" ? "text-green-400" : "text-red-400"}`} />
                    </div>
                    <div>
                      <p className="font-medium">{cam.name}</p>
                      <p className="text-xs text-muted-foreground">{cam.location} • {cam.objects} objek terdeteksi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${cam.status === "online" ? "bg-green-500" : "bg-red-500"}`} />
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Smart Detection Features */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-primary" />
            Deteksi Cerdas
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {smartDetections.map((detection) => (
              <Card key={detection.id} className="p-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${detection.bgColor}`}>
                      <detection.icon className={`w-4 h-4 ${detection.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-tight">{detection.name}</p>
                      <p className="text-xs text-muted-foreground">{detection.description}</p>
                    </div>
                  </div>
                  <Switch checked={detection.active} />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Peringatan Terbaru
          </h3>
          <div className="space-y-2">
            {recentAlerts.map((alert) => (
              <Card
                key={alert.id}
                variant="interactive"
                onClick={() => navigate(`/cv-alert/${alert.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      alert.severity === "high" ? "bg-red-500/20" : 
                      alert.severity === "medium" ? "bg-yellow-500/20" : "bg-green-500/20"
                    }`}>
                      <alert.icon className={`w-5 h-5 ${
                        alert.severity === "high" ? "text-red-400" : 
                        alert.severity === "medium" ? "text-yellow-400" : "text-green-400"
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{alert.type}</p>
                      <p className="text-xs text-muted-foreground">{alert.location} • {alert.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{obj.type}</span>
                      <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                        {obj.camera}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{obj.location} • {obj.time}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Virtual Boundaries */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Batas Virtual
            </h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/cv-boundary-settings')}>
              <Settings2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {virtualBoundaries.map((boundary) => (
              <Card
                key={boundary.id}
                variant="interactive"
                onClick={() => navigate(`/cv-boundary/${boundary.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      boundary.active ? "bg-primary/20" : "bg-secondary"
                    }`}>
                      {boundary.active ? (
                        <Play className="w-5 h-5 text-primary" />
                      ) : (
                        <Square className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{boundary.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {boundary.active ? `${boundary.alerts} peringatan hari ini` : "Tidak aktif"}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Boundary */}
        <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/cv-add-boundary')}>
          <MapPin className="w-5 h-5" />
          Tambah Batas Virtual
        </Button>
      </main>
    </div>
  );
};

export default AIComputerVision;
