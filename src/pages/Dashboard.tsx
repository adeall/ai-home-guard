import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield, Home, Bell, Settings, Camera, DoorOpen, Activity,
  AlertTriangle, CheckCircle, Cpu, Brain, Eye, MessageCircle,
  BarChart3, User, LogOut, Zap, ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type SecurityStatus = "safe" | "warning" | "danger";

const Dashboard = () => {
  const navigate = useNavigate();
  const [securityStatus] = useState<SecurityStatus>("safe");
  const [alarmActive, setAlarmActive] = useState(false);

  const statusConfig = {
    safe: {
      label: "Aman",
      icon: CheckCircle,
      color: "text-green-400",
      bg: "bg-green-500/20",
      border: "border-green-500/30",
      glow: "glow-success",
    },
    warning: {
      label: "Waspada",
      icon: AlertTriangle,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      border: "border-yellow-500/30",
      glow: "glow-warning",
    },
    danger: {
      label: "Bahaya!",
      icon: AlertTriangle,
      color: "text-red-400",
      bg: "bg-red-500/20",
      border: "border-red-500/30",
      glow: "glow-destructive",
    },
  };

  const currentStatus = statusConfig[securityStatus];
  const StatusIcon = currentStatus.icon;

  const sensorCards = [
    { id: "door", icon: DoorOpen, label: "Sensor Pintu", status: "Terkunci", route: "/sensor-door" },
    { id: "motion", icon: Activity, label: "Sensor Gerak", status: "Aktif", route: "/sensor-motion" },
    { id: "camera", icon: Camera, label: "Kamera", status: "3 Online", route: "/camera-live" },
  ];

  const aiModules = [
    { id: "expert", icon: Cpu, label: "Expert System", desc: "Analisis Keamanan", route: "/ai-expert" },
    { id: "ml", icon: BarChart3, label: "Machine Learning", desc: "Prediksi Risiko", route: "/ai-ml" },
    { id: "dl", icon: Brain, label: "Deep Learning", desc: "Pengenalan Wajah", route: "/ai-deep" },
    { id: "cv", icon: Eye, label: "Computer Vision", desc: "Deteksi Objek", route: "/ai-vision" },
    { id: "nlp", icon: MessageCircle, label: "NLP Chatbot", desc: "Asisten AI", route: "/chatbot" },
  ];

  const handleAlarmToggle = () => {
    setAlarmActive(!alarmActive);
    toast({
      title: alarmActive ? "Alarm Dinonaktifkan" : "Alarm Diaktifkan",
      description: alarmActive ? "Sistem alarm telah dimatikan" : "Sistem alarm aktif dan siap",
    });
    navigate('/alarm-settings');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/about')} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-gradient">SafeHome</span>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => navigate('/notifications')}>
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Security Status Card */}
        <Card
          variant="interactive"
          className={`${currentStatus.bg} ${currentStatus.border} ${currentStatus.glow}`}
          onClick={() => navigate('/security-analysis')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${currentStatus.bg} rounded-2xl flex items-center justify-center`}>
                  <StatusIcon className={`w-8 h-8 ${currentStatus.color}`} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Status Keamanan</p>
                  <h2 className={`text-2xl font-bold ${currentStatus.color}`}>{currentStatus.label}</h2>
                  <p className="text-sm text-muted-foreground">Tap untuk detail analisis</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Home Mode */}
        <Card variant="interactive" onClick={() => navigate('/home-mode')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Mode Rumah</p>
                <p className="text-sm text-muted-foreground">Mode: Di Rumah</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        {/* Sensor Cards */}
        <div className="grid grid-cols-3 gap-3">
          {sensorCards.map((sensor) => (
            <Card
              key={sensor.id}
              variant="interactive"
              onClick={() => navigate(sensor.route)}
              className="text-center"
            >
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-2">
                  <sensor.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">{sensor.label}</p>
                <p className="text-xs text-muted-foreground">{sensor.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alarm Button */}
        <Button
          variant={alarmActive ? "destructive" : "glow"}
          size="xl"
          className="w-full"
          onClick={handleAlarmToggle}
        >
          <Zap className="w-6 h-6" />
          {alarmActive ? "Nonaktifkan Alarm" : "Aktifkan Alarm"}
        </Button>

        {/* Activity Graph */}
        <Card variant="interactive" onClick={() => navigate('/activity-analysis')}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span className="text-base">Aktivitas Hari Ini</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 70, 45, 90, 60, 75, 50, 35].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>00:00</span>
              <span>12:00</span>
              <span>23:59</span>
            </div>
          </CardContent>
        </Card>

        {/* AI Modules */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Modul AI</h3>
          <div className="space-y-2">
            {aiModules.map((module) => (
              <Card
                key={module.id}
                variant="interactive"
                onClick={() => navigate(module.route)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{module.label}</p>
                      <p className="text-sm text-muted-foreground">{module.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-xl border-t border-border safe-area-inset-bottom">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-primary">
              <Home className="w-6 h-6" />
              <span className="text-xs">Beranda</span>
            </button>
            <button onClick={() => navigate('/statistics')} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Statistik</span>
            </button>
            <button onClick={() => navigate('/notifications')} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
              <span className="text-xs">Notifikasi</span>
            </button>
            <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <User className="w-6 h-6" />
              <span className="text-xs">Profil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
