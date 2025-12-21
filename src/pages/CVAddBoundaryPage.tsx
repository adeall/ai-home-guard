import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CVAddBoundaryPage = () => {
  const navigate = useNavigate();

  const onSave = () => {
    toast("Demo", { description: "Pembuatan batas virtual masih mock (UI)." });
    navigate("/cv-boundary-settings");
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
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Tambah Batas Virtual</h1>
              <p className="text-xs text-muted-foreground">Buat zona monitoring baru</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Informasi Zona</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm font-medium">Nama Zona</label>
              <Input placeholder="Contoh: Halaman Depan" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Kamera</label>
              <Input placeholder="Contoh: Kamera Depan" />
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

export default CVAddBoundaryPage;
