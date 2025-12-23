import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Edit, Save } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const DLEditFacePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("Bapak Adi");
  const [role, setRole] = useState("Pemilik Rumah");

  const save = () => {
    toast({ title: "Data wajah diperbarui", description: `ID ${id} (demo UI).` });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Edit Data Wajah"
      subtitle={id ? `ID: ${id}` : undefined}
      icon={<Edit className="w-5 h-5 text-primary" />}
      metaDescription="Edit data wajah Deep Learning SafeHome: ubah nama dan peran pengguna." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Informasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" />
            <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Peran" />
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

export default DLEditFacePage;
