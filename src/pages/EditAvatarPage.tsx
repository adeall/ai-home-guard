import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image, CheckCircle } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const EditAvatarPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  const avatars = [1, 2, 3, 4, 5, 6];

  const save = () => {
    toast({ title: "Avatar diperbarui", description: "Avatar tersimpan (demo UI)." });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Ubah Avatar"
      subtitle="Pilih avatar profil"
      icon={<Image className="w-5 h-5 text-primary" />}
      metaDescription="Ubah avatar profil SafeHome dengan memilih avatar yang tersedia." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Pilih Avatar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {avatars.map((n) => (
                <button
                  key={n}
                  onClick={() => setSelected(n)}
                  className="rounded-2xl bg-secondary p-6 relative"
                  aria-label={`Pilih avatar ${n}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 mx-auto" />
                  {selected === n ? (
                    <CheckCircle className="w-5 h-5 text-primary absolute top-2 right-2" />
                  ) : null}
                </button>
              ))}
            </div>
            <Button className="w-full" onClick={save}>Simpan</Button>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default EditAvatarPage;
