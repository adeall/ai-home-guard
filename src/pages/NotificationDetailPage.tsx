import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Bell, Clock, MapPin, Camera, ChevronRight, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotificationDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const notifications: Record<string, {
    title: string;
    description: string;
    type: "alert" | "info" | "warning" | "success";
    time: string;
    date: string;
    location: string;
    camera?: string;
    actions: string[];
    relatedEvents: { id: number; title: string; time: string }[];
  }> = {
    "1": {
      title: "Gerakan Terdeteksi",
      description: "Sensor gerak mendeteksi aktivitas di halaman depan. Kamera otomatis diaktifkan untuk merekam.",
      type: "alert",
      time: "14:32",
      date: "Hari ini",
      location: "Halaman Depan",
      camera: "Kamera Depan",
      actions: ["Lihat Rekaman", "Tandai Aman", "Laporkan"],
      relatedEvents: [
        { id: 1, title: "Kamera diaktifkan", time: "14:32" },
        { id: 2, title: "Rekaman dimulai", time: "14:32" },
        { id: 3, title: "Analisis AI selesai", time: "14:33" },
      ]
    },
    "2": {
      title: "Pintu Dibuka",
      description: "Pintu depan dibuka dan ditutup kembali. Tidak ada anomali terdeteksi.",
      type: "info",
      time: "12:15",
      date: "Hari ini",
      location: "Pintu Depan",
      actions: ["Lihat Detail", "Cek Sensor"],
      relatedEvents: [
        { id: 1, title: "Pintu dibuka", time: "12:15" },
        { id: 2, title: "Wajah dikenali: Bapak Adi", time: "12:15" },
        { id: 3, title: "Pintu ditutup", time: "12:16" },
      ]
    },
    "3": {
      title: "Sistem Normal",
      description: "Pemeriksaan rutin selesai. Semua sensor berfungsi dengan baik.",
      type: "success",
      time: "08:00",
      date: "Hari ini",
      location: "Sistem",
      actions: ["Lihat Laporan"],
      relatedEvents: [
        { id: 1, title: "Pemeriksaan dimulai", time: "08:00" },
        { id: 2, title: "12 sensor diperiksa", time: "08:01" },
        { id: 3, title: "Semua OK", time: "08:01" },
      ]
    }
  };

  const notification = notifications[id || "1"] || notifications["1"];

  const getTypeIcon = () => {
    switch (notification.type) {
      case "alert": return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case "warning": return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case "success": return <CheckCircle className="w-6 h-6 text-green-400" />;
      default: return <Info className="w-6 h-6 text-blue-400" />;
    }
  };

  const getTypeBg = () => {
    switch (notification.type) {
      case "alert": return "bg-red-500/20";
      case "warning": return "bg-yellow-500/20";
      case "success": return "bg-green-500/20";
      default: return "bg-blue-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-bold">Detail Notifikasi</h1>
            <p className="text-xs text-muted-foreground">{notification.date}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Main Card */}
        <Card className={getTypeBg()}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 ${getTypeBg()} rounded-xl flex items-center justify-center`}>
                {getTypeIcon()}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{notification.title}</h2>
                <p className="text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Waktu</p>
                <p className="font-medium">{notification.time}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Lokasi</p>
                <p className="font-medium">{notification.location}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Camera Link */}
        {notification.camera && (
          <Card variant="interactive" onClick={() => navigate('/camera-live')}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{notification.camera}</p>
                  <p className="text-sm text-muted-foreground">Lihat rekaman terkait</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        )}

        {/* Related Events */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Timeline Kejadian</h3>
          <div className="space-y-2">
            {notification.relatedEvents.map((event) => (
              <Card 
                key={event.id} 
                variant="interactive"
                onClick={() => navigate(`/event/${event.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <p>{event.title}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{event.time}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          {notification.actions.slice(0, 2).map((action, i) => (
            <Button 
              key={i} 
              variant={i === 0 ? "default" : "outline"}
              onClick={() => navigate(`/action/${action.toLowerCase().replace(/\s/g, '-')}`)}
            >
              {action}
            </Button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NotificationDetailPage;
