import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, Laptop, Tablet, LogOut, CheckCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ConnectedDevicesPage = () => {
  const navigate = useNavigate();

  const devices = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      type: "phone",
      icon: Smartphone,
      location: "Jakarta, Indonesia",
      lastActive: "Aktif sekarang",
      isCurrent: true,
    },
    {
      id: 2,
      name: "MacBook Pro",
      type: "laptop",
      icon: Laptop,
      location: "Jakarta, Indonesia",
      lastActive: "2 jam yang lalu",
      isCurrent: false,
    },
    {
      id: 3,
      name: "iPad Air",
      type: "tablet",
      icon: Tablet,
      location: "Bandung, Indonesia",
      lastActive: "1 hari yang lalu",
      isCurrent: false,
    },
  ];

  const handleLogoutDevice = (deviceId: number, deviceName: string) => {
    toast({
      title: "Perangkat Dikeluarkan",
      description: `${deviceName} telah dikeluarkan dari akun Anda`,
    });
  };

  const handleLogoutAllDevices = () => {
    toast({
      title: "Semua Perangkat Dikeluarkan",
      description: "Semua perangkat kecuali perangkat ini telah dikeluarkan",
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
              <Smartphone className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Perangkat Terhubung</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <p className="text-muted-foreground text-sm">
          Perangkat yang sedang login ke akun SafeHome Anda
        </p>

        {/* Device List */}
        <div className="space-y-3">
          {devices.map((device) => (
            <Card key={device.id} variant="glass">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      device.isCurrent ? 'bg-primary/20' : 'bg-secondary'
                    }`}>
                      <device.icon className={`w-6 h-6 ${device.isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{device.name}</p>
                        {device.isCurrent && (
                          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Perangkat ini
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {device.location}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {device.lastActive}
                      </div>
                    </div>
                  </div>
                  {!device.isCurrent && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleLogoutDevice(device.id, device.name)}
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logout All Button */}
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogoutAllDevices}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Keluarkan Semua Perangkat Lain
        </Button>
      </main>
    </div>
  );
};

export default ConnectedDevicesPage;
