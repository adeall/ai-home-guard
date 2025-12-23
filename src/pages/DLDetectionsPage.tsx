import { useNavigate, useParams } from "react-router-dom";
import { Camera, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const DLDetectionsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const detections = [
    { id: 101, label: "Deteksi #101", time: "14:32" },
    { id: 102, label: "Deteksi #102", time: "12:15" },
    { id: 103, label: "Deteksi #103", time: "08:30" },
  ];

  return (
    <PageScaffold
      title="Daftar Deteksi"
      subtitle={id ? `Untuk wajah ID: ${id}` : undefined}
      icon={<Camera className="w-5 h-5 text-primary" />}
      metaDescription="Daftar deteksi Deep Learning SafeHome untuk satu wajah tertentu." 
    >
      <section className="space-y-2">
        {detections.map((d) => (
          <Card key={d.id} variant="interactive" onClick={() => navigate(`/dl-detection/${d.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{d.label}</p>
                <p className="text-xs text-muted-foreground">{d.time}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default DLDetectionsPage;
