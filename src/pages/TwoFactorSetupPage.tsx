import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, KeyRound, QrCode, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const TwoFactorSetupPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const verify = () => {
    toast({ title: "2FA dikonfigurasi (demo)", description: "Perangkat autentikator berhasil ditautkan." });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Konfigurasi 2FA"
      subtitle="Autentikasi dua faktor"
      icon={<ShieldCheck className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan autentikasi dua faktor (2FA) untuk akun SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Langkah Singkat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>1) Scan QR code di aplikasi autentikator.</p>
          <p>2) Masukkan kode 6 digit.</p>
          <p>3) Simpan konfigurasi.</p>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
              <QrCode className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">QR Code (demo)</p>
              <p className="text-xs text-muted-foreground">Tampilkan untuk dipindai</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardContent className="p-4 space-y-2">
          <label className="text-sm font-medium">Kode 6 Digit</label>
          <div className="flex items-center gap-2">
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456" inputMode="numeric" />
            <Button onClick={verify} disabled={code.trim().length < 6}>
              <KeyRound className="w-5 h-5" />
              Verifikasi
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default TwoFactorSetupPage;
