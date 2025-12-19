import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";

const VerifyOTPPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast({
        title: "Error",
        description: "Masukkan 6 digit kode OTP",
        variant: "destructive"
      });
      return;
    }
    setIsVerified(true);
    toast({
      title: "Verifikasi Berhasil",
      description: "Akun Anda telah terverifikasi",
    });
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  const handleResend = () => {
    toast({
      title: "Kode Terkirim",
      description: "Kode OTP baru telah dikirim ke nomor Anda",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold">Verifikasi OTP</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 space-y-6">
            {!isVerified ? (
              <>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Masukkan Kode OTP</h2>
                  <p className="text-muted-foreground text-sm">
                    Kode verifikasi 6 digit telah dikirim ke nomor telepon Anda
                  </p>
                </div>

                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <Button variant="glow" className="w-full" onClick={handleVerify}>
                  Verifikasi
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Tidak menerima kode?
                  </p>
                  <button
                    onClick={handleResend}
                    className="text-sm text-primary hover:underline"
                  >
                    Kirim Ulang Kode
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-green-400">Verifikasi Berhasil!</h2>
                <p className="text-muted-foreground">Mengalihkan ke dashboard...</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default VerifyOTPPage;
