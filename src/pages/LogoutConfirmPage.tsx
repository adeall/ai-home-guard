import { useNavigate } from "react-router-dom";
import { LogOut, Shield, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const LogoutConfirmPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Berhasil Keluar",
      description: "Anda telah keluar dari akun SafeHome",
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card variant="glass" className="text-center">
          <CardContent className="p-8 space-y-6">
            {/* Icon */}
            <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
              <LogOut className="w-10 h-10 text-destructive" />
            </div>

            {/* Title */}
            <div>
              <h2 className="text-xl font-bold mb-2">Keluar dari SafeHome?</h2>
              <p className="text-muted-foreground text-sm">
                Anda akan keluar dari akun dan perlu login kembali untuk mengakses aplikasi
              </p>
            </div>

            {/* Warning */}
            <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <p className="text-sm text-yellow-400">
                <strong>Perhatian:</strong> Notifikasi keamanan tidak akan diterima 
                selama Anda tidak login
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Button
                variant="destructive"
                size="lg"
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Ya, Keluar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Batal
              </Button>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center gap-2 pt-4 opacity-50">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">SafeHome</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogoutConfirmPage;
