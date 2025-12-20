import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Fingerprint, Smartphone, Key, Shield, Eye, EyeOff, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const AccountSecurityPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleChangePassword = () => {
    toast({
      title: "Ubah Password",
      description: "Link reset password telah dikirim ke email Anda",
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
              <Lock className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Keamanan Akun</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Password Section */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              Password
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
              <div>
                <p className="font-medium">Password Saat Ini</p>
                <p className="text-sm text-muted-foreground">
                  {showPassword ? "MySecurePass123" : "••••••••••••"}
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
            <Button variant="outline" className="w-full" onClick={handleChangePassword}>
              Ubah Password
            </Button>
          </CardContent>
        </Card>

        {/* Biometric */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Fingerprint className="w-5 h-5 text-primary" />
              Login Biometrik
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sidik Jari / Face ID</p>
                <p className="text-sm text-muted-foreground">Login cepat dengan biometrik</p>
              </div>
              <Switch
                checked={biometricEnabled}
                onCheckedChange={(checked) => {
                  setBiometricEnabled(checked);
                  toast({
                    title: checked ? "Biometrik Diaktifkan" : "Biometrik Dinonaktifkan",
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* 2FA */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Autentikasi 2 Faktor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Aktifkan 2FA</p>
                <p className="text-sm text-muted-foreground">Lapisan keamanan tambahan</p>
              </div>
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={(checked) => {
                  setTwoFactorEnabled(checked);
                  toast({
                    title: checked ? "2FA Diaktifkan" : "2FA Dinonaktifkan",
                  });
                }}
              />
            </div>
            {twoFactorEnabled && (
              <Button variant="outline" className="w-full" onClick={() => navigate('/2fa-setup')}>
                Konfigurasi 2FA
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card variant="interactive" onClick={() => navigate('/connected-devices')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Sesi Aktif</p>
                <p className="text-sm text-muted-foreground">3 perangkat terhubung</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AccountSecurityPage;
