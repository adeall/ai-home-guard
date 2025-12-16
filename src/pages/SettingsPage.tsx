import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Settings, User, Shield, Bell, Wifi, Palette, Globe,
  HelpCircle, Info, LogOut, ChevronRight, Lock, Smartphone, Volume2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  const navigate = useNavigate();

  const settingsGroups = [
    {
      title: "Akun",
      items: [
        { icon: User, label: "Profil", desc: "Kelola informasi akun Anda", route: "/profile-detail" },
        { icon: Lock, label: "Keamanan Akun", desc: "Password, 2FA, biometrik", route: "/account-security" },
        { icon: Smartphone, label: "Perangkat Terhubung", desc: "3 perangkat aktif", route: "/connected-devices" },
      ],
    },
    {
      title: "Perangkat",
      items: [
        { icon: Wifi, label: "Sensor", desc: "Kelola sensor dan kamera", route: "/sensor-management" },
        { icon: Volume2, label: "Sensitivitas Alarm", desc: "Atur tingkat sensitivitas", route: "/alarm-sensitivity" },
        { icon: Shield, label: "Mode Keamanan", desc: "Atur mode rumah otomatis", route: "/security-modes" },
      ],
    },
    {
      title: "Preferensi",
      items: [
        { icon: Bell, label: "Notifikasi", desc: "Atur jenis notifikasi", route: "/notification-settings" },
        { icon: Palette, label: "Tema", desc: "Mode gelap aktif", route: "/theme-preview" },
        { icon: Globe, label: "Bahasa", desc: "Bahasa Indonesia", route: "/language-settings" },
      ],
    },
    {
      title: "Lainnya",
      items: [
        { icon: HelpCircle, label: "Bantuan & FAQ", desc: "Pusat bantuan", route: "/help-faq" },
        { icon: Info, label: "Tentang Aplikasi", desc: "SafeHome v1.0.0", route: "/about-app" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Pengaturan</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium text-muted-foreground mb-2 px-1">{group.title}</h3>
            <Card variant="glass">
              <CardContent className="p-0 divide-y divide-border">
                {group.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(item.route)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Button
          variant="destructive"
          size="lg"
          className="w-full"
          onClick={() => navigate('/logout-confirm')}
        >
          <LogOut className="w-5 h-5" />
          Keluar
        </Button>
      </main>
    </div>
  );
};

export default SettingsPage;
