import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Home, Briefcase, Moon, Plane, Settings, CheckCircle, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const SecurityModesPage = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState("home");
  const [autoSwitch, setAutoSwitch] = useState(true);

  const modes = [
    {
      id: "home",
      name: "Mode Rumah",
      icon: Home,
      description: "Sensor pintu aktif, sensor gerak nonaktif",
      color: "text-green-400",
      bg: "bg-green-500/20",
    },
    {
      id: "away",
      name: "Mode Pergi",
      icon: Briefcase,
      description: "Semua sensor dan kamera aktif",
      color: "text-primary",
      bg: "bg-primary/20",
    },
    {
      id: "night",
      name: "Mode Malam",
      icon: Moon,
      description: "Sensor perimeter aktif, dalam rumah nonaktif",
      color: "text-purple-400",
      bg: "bg-purple-500/20",
    },
    {
      id: "vacation",
      name: "Mode Liburan",
      icon: Plane,
      description: "Keamanan maksimal, simulasi kehadiran",
      color: "text-orange-400",
      bg: "bg-orange-500/20",
    },
  ];

  const handleModeChange = (modeId: string) => {
    setActiveMode(modeId);
    const mode = modes.find(m => m.id === modeId);
    toast({
      title: `${mode?.name} Diaktifkan`,
      description: mode?.description,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Mode Keamanan</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Auto Switch */}
        <Card variant="glass">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Ganti Mode Otomatis</p>
              <p className="text-sm text-muted-foreground">Berdasarkan lokasi & jadwal</p>
            </div>
            <Switch
              checked={autoSwitch}
              onCheckedChange={(checked) => {
                setAutoSwitch(checked);
                toast({
                  title: checked ? "Mode Otomatis Aktif" : "Mode Otomatis Nonaktif",
                });
              }}
            />
          </CardContent>
        </Card>

        {/* Mode Selection */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground px-1">Pilih Mode</h3>
          {modes.map((mode) => (
            <Card
              key={mode.id}
              variant="interactive"
              className={activeMode === mode.id ? `border-2 ${mode.bg} border-current` : ''}
              onClick={() => handleModeChange(mode.id)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${mode.bg} rounded-xl flex items-center justify-center`}>
                    <mode.icon className={`w-6 h-6 ${mode.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{mode.name}</p>
                    <p className="text-sm text-muted-foreground">{mode.description}</p>
                  </div>
                </div>
                {activeMode === mode.id && (
                  <CheckCircle className={`w-6 h-6 ${mode.color}`} />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule Settings */}
        <Card variant="interactive" onClick={() => navigate('/mode-schedule')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Jadwal Mode</p>
                <p className="text-sm text-muted-foreground">Atur pergantian mode otomatis</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SecurityModesPage;
