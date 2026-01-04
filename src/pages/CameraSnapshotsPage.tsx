import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, ChevronRight, Camera } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraSnapshotsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const items = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: 400 + i,
        label: `Snapshot #${400 + i}`,
        time: `${10 + i}:0${i}`,
      })),
    [],
  );

  return (
    <PageScaffold
      title="Tangkapan Layar"
      subtitle={id ? `Untuk kamera ID: ${id}` : undefined}
      icon={<Image className="w-5 h-5 text-primary" />}
      metaDescription="Koleksi tangkapan layar kamera SafeHome (demo UI)."
    >
      <section className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <Card key={it.id} variant="interactive" onClick={() => navigate(`/camera-snapshot/${it.id}`)}>
            <CardContent className="p-4 space-y-2">
              <div className="aspect-square rounded-xl bg-secondary flex items-center justify-center">
                <Image className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{it.time}</p>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {id ? (
        <Button variant="outline" className="w-full" onClick={() => navigate(`/camera-view/${id}`)}>
          <Camera className="w-4 h-4" />
          Kembali ke Live Camera
        </Button>
      ) : null}
    </PageScaffold>
  );
};

export default CameraSnapshotsPage;
