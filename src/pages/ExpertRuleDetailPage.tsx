import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, FileText, Zap, ChevronRight, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const ExpertRuleDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const rule = {
    id,
    name: "Deteksi Penyusup Malam",
    condition: "JIKA gerakan terdeteksi DAN waktu antara 22:00-06:00 DAN tidak ada penghuni terdaftar",
    action: "MAKA aktifkan alarm dan kirim notifikasi darurat",
    priority: "high",
    active: true,
    used: 45,
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Detail Aturan</h1>
              <p className="text-xs text-muted-foreground">Rule ID: {rule.id}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toast("Demo", { description: "Edit aturan belum diaktifkan (UI saja)." })}
          >
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle>{rule.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Digunakan {rule.used}x</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{rule.priority}</Badge>
                <Switch checked={rule.active} onCheckedChange={() => toast("Demo", { description: "Toggle aturan masih mock." })} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">Kondisi (IF)</p>
              <p className="text-xs text-muted-foreground font-mono bg-secondary/50 p-3 rounded">{rule.condition}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Aksi (THEN)</p>
              <p className="text-xs text-primary font-mono bg-primary/10 p-3 rounded">{rule.action}</p>
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/expert-knowledge")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Basis Pengetahuan</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/ai-expert")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Expert System</span>
            <Zap className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertRuleDetailPage;
