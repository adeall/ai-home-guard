import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, Lock, Fingerprint, MessageCircle, Eye, EyeOff, ArrowRight, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Login Berhasil",
        description: "Selamat datang di SafeHome!",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Error",
        description: "Masukkan email dan password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 mb-4">
            <Shield className="w-10 h-10 text-background" />
          </div>
          <h1 className="text-3xl font-bold text-gradient">SafeHome</h1>
          <p className="text-muted-foreground mt-1">Masuk ke akun Anda</p>
        </div>

        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 bg-secondary/50 border-border"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 bg-secondary/50 border-border"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-primary hover:underline"
              >
                Lupa Password?
              </button>

              <Button type="submit" className="w-full h-12" size="lg">
                Masuk
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground">atau masuk dengan</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12"
                onClick={() => navigate('/biometric-verify')}
              >
                <Fingerprint className="w-5 h-5 mr-2" />
                Biometrik
              </Button>
              <Button
                variant="outline"
                className="h-12"
                onClick={() => navigate('/chatbot-login')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chatbot
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Belum punya akun?{" "}
                <button
                  onClick={() => navigate('/register')}
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Daftar <UserPlus className="w-4 h-4" />
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
