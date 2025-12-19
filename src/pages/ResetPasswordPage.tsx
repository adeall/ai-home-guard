import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Masukkan email Anda",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitted(true);
    toast({
      title: "Email Terkirim",
      description: "Link reset password telah dikirim ke email Anda",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold">Reset Password</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {!isSubmitted ? (
          <Card className="w-full max-w-md">
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Lupa Password?</h2>
                <p className="text-muted-foreground text-sm">
                  Masukkan email yang terdaftar. Kami akan mengirimkan link untuk reset password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button type="submit" variant="glow" className="w-full">
                  Kirim Link Reset
                </Button>
              </form>

              <div className="text-center">
                <button
                  onClick={() => navigate('/login')}
                  className="text-sm text-primary hover:underline"
                >
                  Kembali ke Login
                </button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Email Terkirim!</h2>
                <p className="text-muted-foreground text-sm">
                  Link reset password telah dikirim ke <strong>{email}</strong>. 
                  Periksa inbox atau folder spam Anda.
                </p>
              </div>
              <div className="space-y-3">
                <Button variant="glow" className="w-full" onClick={() => navigate('/login')}>
                  Kembali ke Login
                </Button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-primary hover:underline"
                >
                  Kirim ulang email
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ResetPasswordPage;
