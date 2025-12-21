import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PlusCircle, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ExpertAddRulePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [action, setAction] = useState("");

  const onSave = () => {
    toast("Demo", { description: "Penyimpanan aturan masih versi mock (UI saja)." });
    navigate("/expert-knowledge");
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <PlusCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Tambah Aturan</h1>
              <p className="text-xs text-muted-foreground">Buat rule IF-THEN untuk Expert System</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Detail Aturan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm font-medium">Nama Aturan</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Deteksi Penyusup Malam" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Kondisi (IF)</label>
              <Textarea value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Contoh: JIKA gerakan terdeteksi DAN waktu malam" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Aksi (THEN)</label>
              <Textarea value={action} onChange={(e) => setAction(e.target.value)} placeholder="Contoh: MAKA aktifkan alarm dan kirim notifikasi" />
            </div>
            <Button className="w-full" onClick={onSave}>
              <Save className="w-5 h-5" />
              Simpan
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertAddRulePage;
