import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, AlertTriangle, Activity, Camera, MessageCircle, Volume2, Vibrate, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const NotificationSettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    pushEnabled: true,
    soundEnabled: true,
    vibrationEnabled: true,
    alertNotif: true,
    motionNotif: true,
    cameraNotif: true,
    systemNotif: true,
    quietHours: false,
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleSave = () => {
    toast({
      title: "Pengaturan Disimpan",
      description: "Preferensi notifikasi berhasil diperbarui",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
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
              <h1 className="font-bold text-lg">Pengaturan Notifikasi</h1>
            </div>
          </div>
          <Button variant="glow" size="sm" onClick={handleSave}>
            <Save className="w-4 h-4 mr-1" />
            Simpan
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* General Settings */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Pengaturan Umum</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Push Notification</p>
                  <p className="text-xs text-muted-foreground">Terima notifikasi langsung</p>
                </div>
              </div>
              <Switch
                checked={settings.pushEnabled}
                onCheckedChange={(v) => updateSetting('pushEnabled', v)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Suara Notifikasi</p>
                  <p className="text-xs text-muted-foreground">Bunyi untuk setiap notifikasi</p>
                </div>
              </div>
              <Switch
                checked={settings.soundEnabled}
                onCheckedChange={(v) => updateSetting('soundEnabled', v)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Vibrate className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Getar</p>
                  <p className="text-xs text-muted-foreground">Getaran untuk notifikasi</p>
                </div>
              </div>
              <Switch
                checked={settings.vibrationEnabled}
                onCheckedChange={(v) => updateSetting('vibrationEnabled', v)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Types */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Jenis Notifikasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <div>
                  <p className="font-medium">Peringatan Keamanan</p>
                  <p className="text-xs text-muted-foreground">Ancaman & intrusi</p>
                </div>
              </div>
              <Switch
                checked={settings.alertNotif}
                onCheckedChange={(v) => updateSetting('alertNotif', v)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-medium">Deteksi Gerakan</p>
                  <p className="text-xs text-muted-foreground">Aktivitas sensor gerak</p>
                </div>
              </div>
              <Switch
                checked={settings.motionNotif}
                onCheckedChange={(v) => updateSetting('motionNotif', v)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Deteksi Kamera</p>
                  <p className="text-xs text-muted-foreground">Objek & wajah terdeteksi</p>
                </div>
              </div>
              <Switch
                checked={settings.cameraNotif}
                onCheckedChange={(v) => updateSetting('cameraNotif', v)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-medium">Notifikasi Sistem</p>
                  <p className="text-xs text-muted-foreground">Update & informasi</p>
                </div>
              </div>
              <Switch
                checked={settings.systemNotif}
                onCheckedChange={(v) => updateSetting('systemNotif', v)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quiet Hours */}
        <Card variant="interactive" onClick={() => navigate('/quiet-hours')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Jam Tenang</p>
              <p className="text-sm text-muted-foreground">
                {settings.quietHours ? "22:00 - 07:00" : "Nonaktif"}
              </p>
            </div>
            <Switch
              checked={settings.quietHours}
              onCheckedChange={(v) => updateSetting('quietHours', v)}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NotificationSettingsPage;
