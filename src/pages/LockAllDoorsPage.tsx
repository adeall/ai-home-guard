import { useNavigate } from "react-router-dom";
import { Lock, ShieldCheck } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const LockAllDoorsPage = () => {
  const navigate = useNavigate();

  const handleLock = () => {
    toast({
      title: "Semua pintu dikunci",
      description: "Perintah penguncian dikirim ke seluruh sensor pintu.",
    });
    navigate("/sensor-door");
  };

  return (
    <PageScaffold
      title="Kunci Semua Pintu"
      subtitle="Konfirmasi aksi"
      icon={<Lock className="w-5 h-5 text-primary" />}
      metaDescription="Konfirmasi untuk mengunci semua pintu pada sistem keamanan rumah SafeHome."
    >
      <Card variant="glow">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Siap mengunci semua pintu?</p>
              <p className="text-sm text-muted-foreground">Aksi ini bisa dibatalkan kapan saja.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Batal
            </Button>
            <Button variant="glow" onClick={handleLock}>
              Kunci Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default LockAllDoorsPage;
