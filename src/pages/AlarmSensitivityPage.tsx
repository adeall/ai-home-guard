import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, Bell, Activity, Eye, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";

const AlarmSensitivityPage = () => {
  const navigate = useNavigate();
  const [motionSensitivity, setMotionSensitivity] = useState([70]);
  const [soundSensitivity, setSoundSensitivity] = useState([50]);
  const [cameraSensitivity, setCameraSensitivity] = useState([60]);
  const [alarmVolume, setAlarmVolume] = useState([80]);

  const getSensitivityLabel = (value: number) => {
    if (value < 30) return "Rendah";
    if (value < 70) return "Sedang";
    return "Tinggi";
  };

  const handleSave = () => {
    toast({
      title: "Pengaturan Disimpan",
      description: "Sensitivitas alarm berhasil diperbarui",
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
                <Volume2 className="w-5 h-5 text-background" />
              </div>
              <h1 className="font-bold text-lg">Sensitivitas Alarm</h1>
            </div>
          </div>
          <Button variant="glow" size="sm" onClick={handleSave}>
            <Save className="w-4 h-4 mr-1" />
            Simpan
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <p className="text-muted-foreground text-sm">
          Atur tingkat sensitivitas sensor untuk mengurangi alarm palsu
        </p>

        {/* Motion Sensitivity */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Sensor Gerak
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Sensitivitas</span>
              <span className="font-medium text-primary">{getSensitivityLabel(motionSensitivity[0])}</span>
            </div>
            <Slider
              value={motionSensitivity}
              onValueChange={setMotionSensitivity}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Sensitivitas tinggi mendeteksi gerakan kecil, sensitivitas rendah hanya mendeteksi gerakan besar
            </p>
          </CardContent>
        </Card>

        {/* Sound Sensitivity */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Sensor Suara
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Sensitivitas</span>
              <span className="font-medium text-primary">{getSensitivityLabel(soundSensitivity[0])}</span>
            </div>
            <Slider
              value={soundSensitivity}
              onValueChange={setSoundSensitivity}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Mendeteksi suara pecah kaca, teriakan, atau suara keras lainnya
            </p>
          </CardContent>
        </Card>

        {/* Camera Sensitivity */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              Deteksi Kamera
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Sensitivitas</span>
              <span className="font-medium text-primary">{getSensitivityLabel(cameraSensitivity[0])}</span>
            </div>
            <Slider
              value={cameraSensitivity}
              onValueChange={setCameraSensitivity}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Tingkat kepekaan AI dalam mendeteksi objek mencurigakan
            </p>
          </CardContent>
        </Card>

        {/* Alarm Volume */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-primary" />
              Volume Alarm
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Volume</span>
              <span className="font-medium text-primary">{alarmVolume[0]}%</span>
            </div>
            <Slider
              value={alarmVolume}
              onValueChange={setAlarmVolume}
              max={100}
              step={1}
              className="w-full"
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AlarmSensitivityPage;
