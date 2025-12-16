import { useNavigate } from "react-router-dom";
import { ArrowLeft, DoorOpen, DoorClosed, Lock, Unlock, Clock, ChevronRight, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SensorDoorPage = () => {
  const navigate = useNavigate();

  const doors = [
    { id: 1, name: "Pintu Depan", status: "locked", lastActivity: "Dikunci 2 jam lalu", battery: 85 },
    { id: 2, name: "Pintu Belakang", status: "locked", lastActivity: "Dikunci 5 jam lalu", battery: 72 },
    { id: 3, name: "Pintu Garasi", status: "locked", lastActivity: "Dikunci 1 hari lalu", battery: 90 },
    { id: 4, name: "Pintu Samping", status: "unlocked", lastActivity: "Dibuka 30 menit lalu", battery: 45 },
  ];

  const recentLogs = [
    { id: 1, door: "Pintu Depan", action: "Dikunci", time: "14:32", by: "Otomatis" },
    { id: 2, door: "Pintu Samping", action: "Dibuka", time: "14:02", by: "Bapak Adi" },
    { id: 3, door: "Pintu Belakang", action: "Dikunci", time: "09:15", by: "Ibu Sri" },
  ];

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
                <DoorClosed className="w-5 h-5 text-background" />
              </div>
              <div>
                <h1 className="font-bold">Sensor Pintu</h1>
                <p className="text-xs text-muted-foreground">4 sensor aktif</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/sensor-door-settings')}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="glow" className="h-14" onClick={() => navigate('/lock-all-doors')}>
            <Lock className="w-5 h-5" />
            Kunci Semua
          </Button>
          <Button variant="outline" className="h-14" onClick={() => navigate('/unlock-confirm')}>
            <Unlock className="w-5 h-5" />
            Buka Semua
          </Button>
        </div>

        {/* Door List */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Status Pintu</h3>
          <div className="space-y-2">
            {doors.map((door) => (
              <Card
                key={door.id}
                variant="interactive"
                onClick={() => navigate(`/door-detail/${door.id}`)}
                className={door.status === "unlocked" ? "border-yellow-500/30" : ""}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      door.status === "locked" ? "bg-green-500/20" : "bg-yellow-500/20"
                    }`}>
                      {door.status === "locked" ? (
                        <Lock className="w-6 h-6 text-green-400" />
                      ) : (
                        <Unlock className="w-6 h-6 text-yellow-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{door.name}</p>
                      <p className="text-xs text-muted-foreground">{door.lastActivity}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 w-16 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              door.battery > 60 ? "bg-green-500" : door.battery > 30 ? "bg-yellow-500" : "bg-red-500"
                            }`}
                            style={{ width: `${door.battery}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{door.battery}%</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Logs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Log Aktivitas
            </h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/door-logs')}>
              Lihat Semua
            </Button>
          </div>
          <Card variant="glass">
            <CardContent className="p-0 divide-y divide-border">
              {recentLogs.map((log) => (
                <button
                  key={log.id}
                  onClick={() => navigate(`/door-log/${log.id}`)}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-sm font-medium">{log.door}</p>
                    <p className="text-xs text-muted-foreground">{log.action} oleh {log.by}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SensorDoorPage;
