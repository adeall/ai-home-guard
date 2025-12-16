import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, AlertTriangle, CheckCircle, Info, Clock, ChevronRight, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NotificationsPage = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Orang Asing Terdeteksi",
      message: "Deep Learning mendeteksi wajah tidak dikenal di depan pagar",
      time: "5 menit lalu",
      route: "/dl-strangers",
    },
    {
      id: 2,
      type: "success",
      title: "Pintu Depan Dikunci",
      message: "Pintu depan telah dikunci otomatis",
      time: "1 jam lalu",
      route: "/sensor-door",
    },
    {
      id: 3,
      type: "info",
      title: "Mode Malam Aktif",
      message: "Sistem keamanan beralih ke mode malam",
      time: "3 jam lalu",
      route: "/home-mode",
    },
    {
      id: 4,
      type: "warning",
      title: "Gerakan Terdeteksi",
      message: "Sensor gerak mendeteksi aktivitas di halaman belakang",
      time: "5 jam lalu",
      route: "/sensor-motion",
    },
    {
      id: 5,
      type: "success",
      title: "Sistem Update",
      message: "Model ML telah diperbarui dengan data terbaru",
      time: "1 hari lalu",
      route: "/ml-model-info",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      default:
        return <Info className="w-5 h-5 text-primary" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-yellow-500/20";
      case "success":
        return "bg-green-500/20";
      default:
        return "bg-primary/20";
    }
  };

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
                <Bell className="w-5 h-5 text-background" />
              </div>
              <div>
                <h1 className="font-bold">Notifikasi</h1>
                <p className="text-xs text-muted-foreground">{notifications.length} notifikasi baru</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate('/notification-settings')}>
            Kelola
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-3">
        {notifications.map((notif) => (
          <Card
            key={notif.id}
            variant="interactive"
            onClick={() => navigate(notif.route)}
            className="animate-slide-up"
            style={{ animationDelay: `${notif.id * 50}ms` }}
          >
            <CardContent className="p-4 flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getBg(notif.type)}`}>
                {getIcon(notif.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium truncate">{notif.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {notif.time}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{notif.message}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </CardContent>
          </Card>
        ))}

        {/* View History */}
        <Card variant="interactive" onClick={() => navigate('/notification-history')} className="mt-6">
          <CardContent className="p-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>Lihat Riwayat Lengkap</span>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NotificationsPage;
