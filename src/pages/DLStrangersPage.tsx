import { useNavigate } from "react-router-dom";
import { UserX, ChevronRight, ShieldAlert } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DLStrangersPage = () => {
  const navigate = useNavigate();

  const detections = [
    { id: 1, where: "Depan pagar", when: "5 menit lalu" },
    { id: 2, where: "Teras depan", when: "35 menit lalu" },
  ];

  return (
    <PageScaffold
      title="Orang Asing Terdeteksi"
      subtitle="Ringkasan deteksi Deep Learning"
      icon={<ShieldAlert className="w-5 h-5 text-primary" />}
      metaDescription="Ringkasan deteksi orang asing oleh modul Deep Learning SafeHome."
    >
      <div className="space-y-2">
        {detections.map((d) => (
          <Card key={d.id} variant="interactive" onClick={() => navigate(`/dl-stranger/${d.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                  <UserX className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Deteksi #{d.id}</p>
                  <p className="text-xs text-muted-foreground">{d.where} • {d.when}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full" onClick={() => navigate("/ai-deep")}
      >
        Buka Modul Deep Learning
      </Button>
    </PageScaffold>
  );
};

export default DLStrangersPage;
