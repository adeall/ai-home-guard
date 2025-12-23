import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, Save } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "Bapak Adi Wijaya",
    email: "adi.wijaya@email.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Keamanan No. 123, Jakarta",
  });

  const save = () => {
    toast({ title: "Profil disimpan", description: "Perubahan disimpan (demo UI)." });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Edit Profil"
      subtitle="Perbarui informasi akun"
      icon={<UserRound className="w-5 h-5 text-primary" />}
      metaDescription="Edit profil SafeHome: ubah nama, email, nomor telepon, dan alamat." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Data Profil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Nama"
            />
            <Input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="Email"
            />
            <Input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              placeholder="Nomor telepon"
            />
            <Input
              value={form.address}
              onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
              placeholder="Alamat"
            />
            <Button className="w-full" onClick={save}>
              <Save className="w-5 h-5" />
              Simpan
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default EditProfilePage;
