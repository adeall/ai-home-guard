import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Camera, Save } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const DLAddFacePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const save = () => {
    toast({
      title: "Wajah ditambahkan (demo)",
      description: name ? `Nama: ${name}${role ? ` • Peran: ${role}` : ""}` : "Data tersimpan.",
    });
    navigate("/dl-faces-registered");
  };

  return (
    <PageScaffold
      title="Tambah Wajah"
      subtitle="Pendaftaran wajah baru"
      icon={<UserPlus className="w-5 h-5 text-primary" />}
      metaDescription="Form pendaftaran wajah baru untuk Deep Learning SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-4 space-y-3">
          <div className="space-y-1">
            <label className="text-sm font-medium">Nama</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Bapak Adi" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Peran</label>
            <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Contoh: Pemilik" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full justify-start"
            onClick={() => navigate("/camera-live")}
          >
            <Camera className="w-5 h-5" />
            Ambil Foto via Kamera
          </Button>

          <Button className="w-full" onClick={save}>
            <Save className="w-5 h-5" />
            Simpan
          </Button>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DLAddFacePage;
