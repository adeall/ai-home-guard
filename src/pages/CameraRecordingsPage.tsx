import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video, ChevronRight, CalendarDays, Camera } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CameraRecordingsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const allRecs = useMemo(
    () => [
      { id: 201, cameraId: "1", title: "Kamera Depan", date: "Hari ini", time: "13:10" },
      { id: 202, cameraId: "2", title: "Kamera Belakang", date: "Kemarin", time: "22:41" },
      { id: 203, cameraId: "3", title: "Kamera Garasi", date: "2 hari lalu", time: "18:05" },
    ],
    [],
  );

  const recs = useMemo(() => {
    if (!id) return allRecs;
    return allRecs.filter((r) => r.cameraId === id);
  }, [allRecs, id]);

  return (
    <PageScaffold
      title="Rekaman Kamera"
      subtitle={id ? `Untuk kamera ID: ${id}` : "7 hari terakhir"}
      icon={<Video className="w-5 h-5 text-primary" />}
      metaDescription="Daftar rekaman kamera SafeHome untuk keamanan rumah."
    >
      <div className="space-y-2">
        {recs.map((r) => (
          <Card key={r.id} variant="interactive" onClick={() => navigate(`/camera-recording/${r.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{r.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <CalendarDays className="w-3.5 h-3.5" /> {r.date} • {r.time}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>

      {id ? (
        <Button variant="outline" className="w-full" onClick={() => navigate(`/camera-view/${id}`)}>
          <Camera className="w-4 h-4" />
          Kembali ke Live Camera
        </Button>
      ) : null}
    </PageScaffold>
  );
};

export default CameraRecordingsPage;
