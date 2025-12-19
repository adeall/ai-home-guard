import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Moon, Sun, Plane, Shield, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const HomeModePage = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState("home");

  const modes = [
    { 
      id: "home", 
      label: "Di Rumah", 
      icon: Home, 
      description: "Keamanan standar, sensor pintu aktif",
      color: "text-green-400",
      bg: "bg-green-500/20"
    },
    { 
      id: "away", 
      label: "Pergi", 
      icon: Plane, 
      description: "Keamanan maksimal, semua sensor aktif",
      color: "text-blue-400",
      bg: "bg-blue-500/20"
    },
    { 
      id: "night", 
      label: "Malam", 
      icon: Moon, 
      description: "Mode tidur, alarm perimeter aktif",
      color: "text-purple-400",
      bg: "bg-purple-500/20"
    },
    { 
      id: "day", 
      label: "Siang", 
      icon: Sun, 
      description: "Keamanan ringan, pintu utama terpantau",
      color: "text-yellow-400",
      bg: "bg-yellow-500/20"
    },
  ];

  const schedules = [
    { id: 1, mode: "Malam", startTime: "22:00", endTime: "06:00", days: "Setiap Hari" },
    { id: 2, mode: "Pergi", startTime: "08:00", endTime: "17:00", days: "Senin - Jumat" },
  ];

  const handleModeChange = (modeId: string) => {
    setActiveMode(modeId);
    const mode = modes.find(m => m.id === modeId);
    toast({
      title: "Mode Diubah",
      description: `Mode rumah diubah ke "${mode?.label}"`,
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
            <h1 className="text-lg font-semibold">Mode Rumah</h1>
            <p className="text-sm text-muted-foreground">Atur mode keamanan rumah</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Current Mode */}
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mode Aktif Saat Ini</p>
              <p className="text-xl font-bold text-primary">
                {modes.find(m => m.id === activeMode)?.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {modes.find(m => m.id === activeMode)?.description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mode Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pilih Mode</h3>
          <div className="grid grid-cols-2 gap-3">
            {modes.map((mode) => (
              <Card
                key={mode.id}
                variant="interactive"
                className={activeMode === mode.id ? `${mode.bg} border-2 border-primary` : ''}
                onClick={() => handleModeChange(mode.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${mode.bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <mode.icon className={`w-6 h-6 ${mode.color}`} />
                  </div>
                  <p className="font-semibold">{mode.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scheduled Modes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Jadwal Otomatis</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/schedule-settings')}>
              Tambah
            </Button>
          </div>
          <div className="space-y-2">
            {schedules.map((schedule) => (
              <Card 
                key={schedule.id} 
                variant="interactive"
                onClick={() => navigate(`/schedule/${schedule.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Mode {schedule.mode}</p>
                      <p className="text-sm text-muted-foreground">
                        {schedule.startTime} - {schedule.endTime}
                      </p>
                      <p className="text-xs text-muted-foreground">{schedule.days}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mode Details */}
        <Card variant="interactive" onClick={() => navigate('/mode-details')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold">Detail Konfigurasi Mode</p>
              <p className="text-sm text-muted-foreground">Lihat dan ubah pengaturan setiap mode</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HomeModePage;
