import { useNavigate } from "react-router-dom";
import { ArrowLeft, Activity, Clock, AlertTriangle, CheckCircle, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SensorMotionPage = () => {
  const navigate = useNavigate();

  const motionLogs = [
    { id: 1, location: "Ruang Tamu", time: "14:32", type: "normal", description: "Gerakan terdeteksi" },
    { id: 2, location: "Teras Depan", time: "12:15", type: "warning", description: "Gerakan mencurigakan" },
    { id: 3, location: "Ruang Keluarga", time: "10:45", type: "normal", description: "Aktivitas normal" },
    { id: 4, location: "Dapur", time: "09:20", type: "normal", description: "Gerakan terdeteksi" },
    { id: 5, location: "Teras Belakang", time: "08:00", type: "normal", description: "Aktivitas pagi" },
  ];

  const sensors = [
    { id: 1, name: "Sensor Ruang Tamu", status: "active", sensitivity: "Tinggi" },
    { id: 2, name: "Sensor Teras Depan", status: "active", sensitivity: "Sedang" },
    { id: 3, name: "Sensor Ruang Keluarga", status: "active", sensitivity: "Tinggi" },
    { id: 4, name: "Sensor Dapur", status: "inactive", sensitivity: "Rendah" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">Sensor Gerak</h1>
            <p className="text-sm text-muted-foreground">Monitor aktivitas pergerakan</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Overview */}
        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status Sistem</p>
              <p className="text-xl font-bold text-green-400">3 Sensor Aktif</p>
              <p className="text-sm text-muted-foreground">Monitoring berjalan normal</p>
            </div>
          </CardContent>
        </Card>

        {/* Sensors List */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Daftar Sensor</h3>
          <div className="space-y-2">
            {sensors.map((sensor) => (
              <Card 
                key={sensor.id} 
                variant="interactive"
                onClick={() => navigate(`/sensor-motion/${sensor.id}/settings`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      sensor.status === 'active' ? 'bg-green-500/20' : 'bg-muted'
                    }`}>
                      <Activity className={`w-5 h-5 ${
                        sensor.status === 'active' ? 'text-green-400' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{sensor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Sensitivitas: {sensor.sensitivity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      sensor.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {sensor.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Motion Log */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Log Pergerakan</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/motion-history')}>
              Lihat Semua
            </Button>
          </div>
          <div className="space-y-2">
            {motionLogs.map((log) => (
              <Card 
                key={log.id} 
                variant="interactive"
                onClick={() => navigate(`/motion-detail/${log.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      log.type === 'warning' ? 'bg-yellow-500/20' : 'bg-primary/20'
                    }`}>
                      {log.type === 'warning' 
                        ? <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        : <CheckCircle className="w-5 h-5 text-primary" />
                      }
                    </div>
                    <div>
                      <p className="font-medium">{log.location}</p>
                      <p className="text-sm text-muted-foreground">{log.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{log.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto py-4" onClick={() => navigate('/motion-settings')}>
            <div className="flex flex-col items-center gap-2">
              <Settings className="w-6 h-6" />
              <span>Pengaturan</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4" onClick={() => navigate('/motion-calibration')}>
            <div className="flex flex-col items-center gap-2">
              <Activity className="w-6 h-6" />
              <span>Kalibrasi</span>
            </div>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default SensorMotionPage;
