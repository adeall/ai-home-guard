import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Shield, CheckCircle, AlertTriangle, Clock,
  ChevronRight, Activity, DoorOpen, Camera, Wifi
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SecurityAnalysis = () => {
  const navigate = useNavigate();

  const securityFactors = [
    { id: 1, name: "Sensor Pintu", status: "safe", detail: "Semua pintu terkunci", route: "/sensor-door" },
    { id: 2, name: "Sensor Gerak", status: "safe", detail: "Tidak ada aktivitas mencurigakan", route: "/sensor-motion" },
    { id: 3, name: "Kamera", status: "safe", detail: "3 kamera online", route: "/camera-live" },
    { id: 4, name: "Jaringan", status: "warning", detail: "Koneksi lambat", route: "/network-status" },
  ];

  const recentEvents = [
    { id: 1, event: "Pintu depan dikunci", time: "5 menit lalu", type: "success" },
    { id: 2, event: "Gerakan terdeteksi di halaman", time: "32 menit lalu", type: "info" },
    { id: 3, event: "Wajah dikenal (Ibu Sri)", time: "1 jam lalu", type: "success" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h1 className="font-bold">Analisis Keamanan</h1>
              <p className="text-xs text-green-400">Status: Aman</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Overall Status */}
        <Card variant="glow" className="bg-green-500/10 border-green-500/30 glow-success">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">Rumah Aman</h2>
            <p className="text-muted-foreground">
              Semua sistem keamanan berfungsi normal. Tidak ada ancaman terdeteksi.
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" /> Terakhir diperbarui: Baru saja
            </p>
          </CardContent>
        </Card>

        {/* Security Factors */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Faktor Keamanan</h3>
          <div className="space-y-2">
            {securityFactors.map((factor) => (
              <Card
                key={factor.id}
                variant="interactive"
                onClick={() => navigate(factor.route)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      factor.status === "safe" ? "bg-green-500/20" : "bg-yellow-500/20"
                    }`}>
                      {factor.status === "safe" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{factor.name}</p>
                      <p className="text-xs text-muted-foreground">{factor.detail}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Aktivitas Terkini</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/activity-history')}>
              Lihat Semua
            </Button>
          </div>
          <Card variant="glass">
            <CardContent className="p-0 divide-y divide-border">
              {recentEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => navigate(`/event-detail/${event.id}`)}
                  className="w-full flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    event.type === "success" ? "bg-green-500" : "bg-primary"
                  }`} />
                  <div className="flex-1 text-left">
                    <p className="text-sm">{event.event}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* AI Analysis */}
        <Card variant="interactive" onClick={() => navigate('/ai-expert')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Analisis AI Lanjutan</h4>
              <p className="text-xs text-muted-foreground">Powered by Expert System & Machine Learning</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SecurityAnalysis;
