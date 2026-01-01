import { useNavigate } from "react-router-dom";
import { CalendarClock, ChevronRight, Plus } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ScheduleSettingsPage = () => {
  const navigate = useNavigate();

  const schedules = [
    { id: 1, mode: "Malam", start: "22:00", end: "06:00", days: "Setiap Hari" },
    { id: 2, mode: "Pergi", start: "08:00", end: "17:00", days: "Senin - Jumat" },
  ];

  const add = () => {
    toast({ title: "Tambah jadwal", description: "Demo UI: membuka detail jadwal baru." });
    navigate("/schedule/3");
  };

  return (
    <PageScaffold
      title="Jadwal Otomatis"
      subtitle="Mode keamanan berdasarkan waktu"
      icon={<CalendarClock className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan jadwal otomatis untuk Mode Rumah SafeHome."
    >
      <section className="space-y-2">
        {schedules.map((s) => (
          <Card key={s.id} variant="interactive" onClick={() => navigate(`/schedule/${s.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">Mode {s.mode}</p>
                <p className="text-xs text-muted-foreground">
                  {s.start}–{s.end} • {s.days}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Button className="w-full" onClick={add}>
        <Plus className="w-5 h-5" />
        Tambah Jadwal
      </Button>

      <Card variant="interactive" onClick={() => navigate("/mode-details")}>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Lihat Detail Konfigurasi Mode</p>
            <p className="text-xs text-muted-foreground">Atur rule mode untuk jadwal</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ScheduleSettingsPage;
