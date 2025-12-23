import { useNavigate } from "react-router-dom";
import { Activity, ChevronRight, Clock } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const ActivityHistoryPage = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: "Pintu depan dikunci", time: "5 menit lalu" },
    { id: 2, title: "Gerakan terdeteksi di halaman", time: "32 menit lalu" },
    { id: 3, title: "Wajah dikenal terdeteksi", time: "1 jam lalu" },
  ];

  return (
    <PageScaffold
      title="Riwayat Aktivitas"
      subtitle="Semua event sistem"
      icon={<Activity className="w-5 h-5 text-primary" />}
      metaDescription="Riwayat aktivitas SafeHome: daftar event sensor, kamera, dan keamanan." 
    >
      <section className="space-y-2">
        {events.map((ev) => (
          <Card key={ev.id} variant="interactive" onClick={() => navigate(`/event-detail/${ev.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{ev.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {ev.time}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default ActivityHistoryPage;
