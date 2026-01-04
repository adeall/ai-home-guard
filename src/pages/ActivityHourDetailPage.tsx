import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock3, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const ActivityHourDetailPage = () => {
  const navigate = useNavigate();
  const { hour } = useParams();

  const items = useMemo(
    () =>
      [
        { id: 101, title: "Gerakan terdeteksi", place: "Ruang Tamu" },
        { id: 102, title: "Pintu dibuka", place: "Pintu Depan" },
        { id: 103, title: "Objek terdeteksi", place: "Kamera Teras" },
      ].map((x, i) => ({ ...x, time: `${hour ?? "--"} (${i + 1})` })),
    [hour]
  );

  return (
    <PageScaffold
      title="Detail Aktivitas per Jam"
      subtitle={hour ? `Jam: ${hour}` : undefined}
      icon={<Clock3 className="w-5 h-5 text-primary" />}
      metaDescription="Rincian aktivitas per jam pada sistem SafeHome (demo UI)."
    >
      <section className="space-y-2">
        {items.map((it) => (
          <Card
            key={it.id}
            variant="interactive"
            onClick={() => navigate(`/activity/${it.id}`)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{it.title}</p>
                <p className="text-xs text-muted-foreground">
                  {it.place} • {it.time}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Card variant="glass">
        <CardContent className="p-4 text-sm text-muted-foreground">
          Tap salah satu item untuk melihat detail kejadian.
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ActivityHourDetailPage;
