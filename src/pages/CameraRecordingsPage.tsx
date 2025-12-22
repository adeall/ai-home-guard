import { useNavigate } from "react-router-dom";
import { Video, ChevronRight, CalendarDays } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const CameraRecordingsPage = () => {
  const navigate = useNavigate();

  const recs = [
    { id: 201, title: "Kamera Depan", date: "Hari ini", time: "13:10" },
    { id: 202, title: "Kamera Belakang", date: "Kemarin", time: "22:41" },
    { id: 203, title: "Kamera Garasi", date: "2 hari lalu", time: "18:05" },
  ];

  return (
    <PageScaffold
      title="Rekaman Kamera"
      subtitle="7 hari terakhir"
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
    </PageScaffold>
  );
};

export default CameraRecordingsPage;
