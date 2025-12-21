import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-bold">Kebijakan Privasi</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <p className="text-sm text-muted-foreground">
              Halaman ini berisi ringkasan kebijakan privasi (versi demo). Untuk produksi, isi dokumen legal lengkap.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Data yang dikumpulkan: aktivitas sensor, metadata perangkat, dan preferensi pengguna.</li>
              <li>Tujuan: keamanan, peningkatan fitur, dan diagnostik sistem.</li>
              <li>Kontrol: pengguna dapat mengubah preferensi notifikasi & perangkat terhubung.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
