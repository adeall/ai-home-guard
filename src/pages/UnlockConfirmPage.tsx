import { useNavigate } from "react-router-dom";
import { Unlock, AlertTriangle } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const UnlockConfirmPage = () => {
  const navigate = useNavigate();

  const handleUnlock = () => {
    toast({
      title: "Perintah buka dikirim",
      description: "Semua pintu akan dibuka sesuai izin perangkat.",
      variant: "destructive",
    });
    navigate("/sensor-door");
  };

  return (
    <PageScaffold
      title="Buka Semua Pintu"
      subtitle="Perlu konfirmasi keamanan"
      icon={<Unlock className="w-5 h-5 text-primary" />}
      metaDescription="Konfirmasi untuk membuka semua pintu pada sistem keamanan rumah SafeHome."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Aksi ini berisiko</p>
              <p className="text-sm text-muted-foreground">
                Membuka semua pintu dapat mengurangi keamanan. Pastikan Anda berada di lokasi yang aman.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleUnlock}>
              Ya, Buka
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default UnlockConfirmPage;
