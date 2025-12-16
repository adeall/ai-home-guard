import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Password tidak cocok",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Registrasi Berhasil",
      description: "Silakan verifikasi OTP",
    });
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 mb-3">
            <Shield className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-2xl font-bold text-gradient">Buat Akun</h1>
          <p className="text-muted-foreground text-sm">Daftar untuk keamanan rumah Anda</p>
        </div>

        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Registrasi</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-11 h-11 bg-secondary/50"
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Masukkan nama lengkap sesuai KTP</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-11 h-11 bg-secondary/50"
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Format: email@domain.com</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-11 h-11 bg-secondary/50"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-11 pr-11 h-11 bg-secondary/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Konfirmasi Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-11 h-11 bg-secondary/50"
                />
              </div>

              <Button type="submit" className="w-full h-11 mt-4">
                Daftar <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <button onClick={() => navigate('/login')} className="text-primary font-semibold hover:underline">
                Masuk
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
