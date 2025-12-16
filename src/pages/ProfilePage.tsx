import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, User, Mail, Phone, MapPin, Shield, Edit2,
  ChevronRight, Crown, Bell, Settings, HelpCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    name: "Bapak Adi Wijaya",
    email: "adi.wijaya@email.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Keamanan No. 123, Jakarta",
    plan: "Premium",
    joinDate: "Januari 2024",
  };

  const menuItems = [
    { icon: Bell, label: "Preferensi Notifikasi", route: "/notification-settings" },
    { icon: Shield, label: "Riwayat Keamanan", route: "/security-history" },
    { icon: Settings, label: "Pengaturan Akun", route: "/account-settings" },
    { icon: HelpCircle, label: "Pusat Bantuan", route: "/help-faq" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold text-lg">Profil</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card variant="glow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-background" />
                </div>
                <button
                  onClick={() => navigate('/edit-avatar')}
                  className="absolute bottom-0 right-0 w-7 h-7 bg-secondary rounded-full flex items-center justify-center border-2 border-background"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" /> {user.plan}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Bergabung sejak {user.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card variant="interactive" onClick={() => navigate('/profile-detail')}>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Informasi Kontak</h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">{user.address}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <Card key={i} variant="interactive" onClick={() => navigate(item.route)}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Profile Button */}
        <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/edit-profile')}>
          <Edit2 className="w-5 h-5" />
          Edit Profil
        </Button>
      </main>
    </div>
  );
};

export default ProfilePage;
