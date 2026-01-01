import { useNavigate } from "react-router-dom";
import { Plus, DoorOpen, Activity, Camera, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const AddSensorPage = () => {
  const navigate = useNavigate();

  const types = [
    { id: "door", label: "Sensor Pintu", icon: DoorOpen, desc: "Kontak magnetik pintu/jendela" },
    { id: "motion", label: "Sensor Gerak", icon: Activity, desc: "PIR untuk deteksi gerakan" },
    { id: "camera", label: "Kamera", icon: Camera, desc: "Kamera IP untuk monitoring" },
  ];

  const startPair = (type: string) => {
    toast({ title: "Pairing dimulai (demo)", description: `Menambahkan: ${type}` });
    navigate("/sensor-management");
  };

  return (
    <PageScaffold
      title="Tambah Sensor"
      subtitle="Pilih jenis perangkat"
      icon={<Plus className="w-5 h-5 text-primary" />}
      metaDescription="Tambah perangkat sensor/kamera ke SafeHome (demo UI)."
    >
      <section className="space-y-2">
        {types.map((t) => (
          <Card key={t.id} variant="interactive" onClick={() => startPair(t.label)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Button variant="outline" className="w-full" onClick={() => navigate("/sensor-management")}>
        Kembali ke Kelola Sensor
      </Button>
    </PageScaffold>
  );
};

export default AddSensorPage;
