import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const ActivityCalendarPage = () => {
  const navigate = useNavigate();

  const days = useMemo(() => {
    const base = new Date();
    return Array.from({ length: 14 }).map((_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() - i);
      return {
        key: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    });
  }, []);

  return (
    <PageScaffold
      title="Kalender Aktivitas"
      subtitle="Pilih tanggal untuk melihat analisis"
      icon={<CalendarDays className="w-5 h-5 text-primary" />}
      metaDescription="Pilih tanggal untuk melihat analisis aktivitas SafeHome (demo UI)."
    >
      <section className="space-y-2">
        {days.map((d) => (
          <Card
            key={d.key}
            variant="interactive"
            onClick={() => navigate("/activity-analysis")}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{d.label}</p>
                <p className="text-xs text-muted-foreground">Tap untuk membuka analisis harian</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default ActivityCalendarPage;
