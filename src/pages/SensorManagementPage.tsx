import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Wifi, DoorOpen, Activity, Camera, Plus, Settings, Trash2, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const SensorManagementPage = () => {
  const navigate = useNavigate();

  const [sensors, setSensors] = useState([
    { id: 1, name: "Pintu Utama", type: "door", icon: DoorOpen, status: "online", enabled: true, battery: 85 },
    { id: 2, name: "Pintu Belakang", type: "door", icon: DoorOpen, status: "online", enabled: true, battery: 72 },
    { id: 3, name: "Sensor Ruang Tamu", type: "motion", icon: Activity, status: "online", enabled: true, battery: 90 },
    { id: 4, name: "Sensor Kamar", type: "motion", icon: Activity, status: "offline", enabled: false, battery: 15 },
    { id: 5, name: "Kamera Depan", type: "camera", icon: Camera, status: "online", enabled: true, battery: 100 },
    { id: 6, name: "Kamera Garasi", type: "camera", icon: Camera, status: "online", enabled: true, battery: 100 },
  ]);

  const toggleSensor = (id: number) => {
    setSensors(sensors.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
    toast({
      title: "Status Sensor Diubah",
      description: "Perubahan berhasil disimpan",
    });
  };

  const deleteSensor = (id: number, name: string) => {
    setSensors(sensors.filter(s => s.id !== id));
    toast({
      title: "Sensor Dihapus",
      description: `${name} telah dihapus dari sistem`,
      variant: "destructive",
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
                <Wifi className="w-5 h-5 text-background" />
              </div>
              <h1 className="font-bold text-lg">Kelola Sensor</h1>
            </div>
          </div>
          <Button variant="glow" size="sm" onClick={() => navigate('/add-sensor')}>
            <Plus className="w-4 h-4 mr-1" />
            Tambah
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="glass" className="text-center">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-primary">{sensors.filter(s => s.status === 'online').length}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </CardContent>
          </Card>
          <Card variant="glass" className="text-center">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-destructive">{sensors.filter(s => s.status === 'offline').length}</p>
              <p className="text-xs text-muted-foreground">Offline</p>
            </CardContent>
          </Card>
          <Card variant="glass" className="text-center">
            <CardContent className="p-4">
              <p className="text-2xl font-bold">{sensors.length}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </CardContent>
          </Card>
        </div>

        {/* Sensor List */}
        <div className="space-y-3">
          {sensors.map((sensor) => (
            <Card key={sensor.id} variant="glass">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      sensor.status === 'online' ? 'bg-green-500/20' : 'bg-destructive/20'
                    }`}>
                      <sensor.icon className={`w-6 h-6 ${
                        sensor.status === 'online' ? 'text-green-400' : 'text-destructive'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{sensor.name}</p>
                      <div className="flex items-center gap-2 text-sm">
                        {sensor.status === 'online' ? (
                          <span className="flex items-center gap-1 text-green-400">
                            <CheckCircle className="w-3 h-3" /> Online
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-destructive">
                            <XCircle className="w-3 h-3" /> Offline
                          </span>
                        )}
                        <span className="text-muted-foreground">• Baterai {sensor.battery}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={sensor.enabled}
                      onCheckedChange={() => toggleSensor(sensor.id)}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigate(`/sensor-settings/${sensor.id}`)}
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => deleteSensor(sensor.id, sensor.name)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SensorManagementPage;
