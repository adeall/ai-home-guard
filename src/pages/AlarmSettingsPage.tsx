import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Volume2, Clock, Shield, Zap, ChevronRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const AlarmSettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    sirenEnabled: true,
    notificationEnabled: true,
    autoCallEnabled: false,
    delayEnabled: true,
  });

  const alarmLogs = [
    { id: 1, type: "triggered", time: "2024-01-15 14:32", reason: "Sensor pintu depan", status: "resolved" },
    { id: 2, type: "test", time: "2024-01-14 10:00", reason: "Uji coba manual", status: "completed" },
    { id: 3, type: "triggered", time: "2024-01-10 22:15", reason: "Sensor gerak teras", status: "resolved" },
  ];

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast({
      title: "Pengaturan Diperbarui",
      description: "Perubahan telah disimpan",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">Pengaturan Alarm</h1>
            <p className="text-sm text-muted-foreground">Konfiguasi sistem alarm</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Current Status */}
        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Status Alarm</p>
              <p className="text-xl font-bold text-green-400">Siap & Aktif</p>
              <p className="text-sm text-muted-foreground">Terakhir diuji: 2 hari lalu</p>
            </div>
            <Button size="sm" onClick={() => navigate('/alarm-test')}>
              Uji Alarm
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="destructive" 
            className="h-auto py-4"
            onClick={() => navigate('/alarm-trigger')}
          >
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6" />
              <span>Aktifkan Alarm</span>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-4"
            onClick={() => navigate('/alarm-panic')}
          >
            <div className="flex flex-col items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span>Tombol Panik</span>
            </div>
          </Button>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pengaturan</h3>
          <div className="space-y-2">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Sirene</p>
                    <p className="text-sm text-muted-foreground">Aktifkan suara sirene</p>
                  </div>
                </div>
                <Switch 
                  checked={settings.sirenEnabled} 
                  onCheckedChange={() => handleToggle('sirenEnabled')} 
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Notifikasi Push</p>
                    <p className="text-sm text-muted-foreground">Kirim notifikasi saat alarm aktif</p>
                  </div>
                </div>
                <Switch 
                  checked={settings.notificationEnabled} 
                  onCheckedChange={() => handleToggle('notificationEnabled')} 
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Delay Alarm</p>
                    <p className="text-sm text-muted-foreground">Tunggu 30 detik sebelum alarm berbunyi</p>
                  </div>
                </div>
                <Switch 
                  checked={settings.delayEnabled} 
                  onCheckedChange={() => handleToggle('delayEnabled')} 
                />
              </CardContent>
            </Card>

            <Card variant="interactive" onClick={() => navigate('/alarm-volume')}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Volume Sirene</p>
                    <p className="text-sm text-muted-foreground">Atur volume sirene alarm</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alarm Log */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Riwayat Alarm</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/alarm-history')}>
              Lihat Semua
            </Button>
          </div>
          <div className="space-y-2">
            {alarmLogs.map((log) => (
              <Card 
                key={log.id} 
                variant="interactive"
                onClick={() => navigate(`/alarm-log/${log.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      log.type === 'triggered' ? 'bg-red-500/20' : 'bg-blue-500/20'
                    }`}>
                      <Bell className={`w-5 h-5 ${
                        log.type === 'triggered' ? 'text-red-400' : 'text-blue-400'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{log.reason}</p>
                      <p className="text-sm text-muted-foreground">{log.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    log.status === 'resolved' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {log.status === 'resolved' ? 'Selesai' : 'Selesai'}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlarmSettingsPage;
