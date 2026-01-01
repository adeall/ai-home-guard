import { useNavigate } from "react-router-dom";
import { Users, UserPlus, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DLFacesRegisteredPage = () => {
  const navigate = useNavigate();

  const faces = [
    { id: 1, name: "Bapak Adi", role: "Pemilik" },
    { id: 2, name: "Ibu Sri", role: "Pemilik" },
    { id: 3, name: "Andi", role: "Anak" },
    { id: 4, name: "Mbak Rina", role: "Asisten" },
    { id: 5, name: "Pak Darto", role: "Satpam" },
  ];

  return (
    <PageScaffold
      title="Wajah Terdaftar"
      subtitle="Daftar identitas yang dikenali"
      icon={<Users className="w-5 h-5 text-primary" />}
      metaDescription="Daftar wajah yang terdaftar di Deep Learning SafeHome."
    >
      <section className="space-y-2">
        {faces.map((f) => (
          <Card
            key={f.id}
            variant="interactive"
            onClick={() => navigate(`/dl-face-detail/${f.id}`)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{f.name}</p>
                <p className="text-xs text-muted-foreground">{f.role}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Button className="w-full" onClick={() => navigate("/dl-add-face")}
        aria-label="Tambah wajah baru"
      >
        <UserPlus className="w-5 h-5" />
        Tambah Wajah Baru
      </Button>
    </PageScaffold>
  );
};

export default DLFacesRegisteredPage;
