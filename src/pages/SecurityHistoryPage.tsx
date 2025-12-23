import { useNavigate } from "react-router-dom";
import { ShieldCheck, ChevronRight, Clock } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const SecurityHistoryPage = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, title: "Pintu depan dikunci", time: "5 menit lalu", route: "/sensor-door" },
    { id: 2, title: "Gerakan terdeteksi di halaman", time: "32 menit lalu", route: "/sensor-motion" },
    { id: 3, title: "Kamera depan online", time: "1 jam lalu", route: "/camera-live" },
  ];

  return (
    <PageScaffold
      title="Riwayat Keamanan"
      subtitle="Log keamanan terbaru"
      icon={<ShieldCheck className="w-5 h-5 text-primary" />}
      metaDescription="Riwayat keamanan SafeHome: ringkasan event sensor pintu, sensor gerak, dan kamera." 
    >
      <section className="space-y-2">
        {items.map((it) => (
          <Card key={it.id} variant="interactive" onClick={() => navigate(it.route)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{it.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {it.time}
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

export default SecurityHistoryPage;
