import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings2, Shield, Bell, Zap, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const ExpertSettingsPage = () => {
  const navigate = useNavigate();
  const [autoDecisions, setAutoDecisions] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(true);
  const [explainability, setExplainability] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Settings2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Pengaturan Expert System</h1>
              <p className="text-xs text-muted-foreground">Kontrol cara sistem mengambil keputusan</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glass">
          <CardContent className="p-0 divide-y divide-border">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Keputusan Otomatis</p>
                  <p className="text-xs text-muted-foreground">Izinkan sistem menjalankan tindakan otomatis</p>
                </div>
              </div>
              <Switch checked={autoDecisions} onCheckedChange={setAutoDecisions} />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Notifikasi Prioritas</p>
                  <p className="text-xs text-muted-foreground">Kirim alert saat risiko meningkat</p>
                </div>
              </div>
              <Switch checked={pushAlerts} onCheckedChange={setPushAlerts} />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Penjelasan (Explainability)</p>
                  <p className="text-xs text-muted-foreground">Tampilkan alasan di balik keputusan</p>
                </div>
              </div>
              <Switch checked={explainability} onCheckedChange={setExplainability} />
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/expert-knowledge")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kelola Basis Pengetahuan</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertSettingsPage;
