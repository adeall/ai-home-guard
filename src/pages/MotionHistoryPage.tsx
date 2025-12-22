import { useNavigate } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const MotionHistoryPage = () => {
  const navigate = useNavigate();
  const items = [
    { id: 11, location: "Teras Belakang", time: "08:00", desc: "Aktivitas pagi" },
    { id: 12, location: "Ruang Tamu", time: "10:45", desc: "Gerakan terdeteksi" },
    { id: 13, location: "Teras Depan", time: "12:15", desc: "Gerakan mencurigakan" },
  ];

  return (
    <PageScaffold
      title="Riwayat Gerak"
      subtitle="Log lengkap sensor"
      icon={<Clock className="w-5 h-5 text-primary" />}
      metaDescription="Riwayat lengkap deteksi gerak pada SafeHome."
    >
      <div className="space-y-2">
        {items.map((it) => (
          <Card key={it.id} variant="interactive" onClick={() => navigate(`/motion-detail/${it.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{it.location}</p>
                <p className="text-xs text-muted-foreground">{it.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{it.time}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageScaffold>
  );
};

export default MotionHistoryPage;
