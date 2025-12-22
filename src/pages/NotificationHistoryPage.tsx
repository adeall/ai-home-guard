import { useNavigate } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const NotificationHistoryPage = () => {
  const navigate = useNavigate();
  const history = [
    { id: 31, title: "Gerakan Terdeteksi", time: "Kemarin" },
    { id: 32, title: "Pintu Depan Dikunci", time: "2 hari lalu" },
    { id: 33, title: "Mode Malam Aktif", time: "3 hari lalu" },
  ];

  return (
    <PageScaffold
      title="Riwayat Notifikasi"
      subtitle="Semua notifikasi"
      icon={<Clock className="w-5 h-5 text-primary" />}
      metaDescription="Riwayat lengkap notifikasi sistem keamanan SafeHome."
    >
      <div className="space-y-2">
        {history.map((h) => (
          <Card key={h.id} variant="interactive" onClick={() => navigate(`/notification/${h.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{h.title}</p>
                <p className="text-xs text-muted-foreground">{h.time}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </PageScaffold>
  );
};

export default NotificationHistoryPage;
