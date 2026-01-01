import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CalendarClock, Clock, ChevronRight, Trash2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ScheduleDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Jadwal #${id ?? "-"}`, [id]);

  const remove = () => {
    toast({ title: "Jadwal dihapus", description: `${title} (demo UI).` });
    navigate("/schedule-settings");
  };

  return (
    <PageScaffold
      title="Detail Jadwal"
      subtitle={title}
      icon={<CalendarClock className="w-5 h-5 text-primary" />}
      metaDescription="Detail jadwal otomatis Mode Rumah SafeHome."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{title}</p>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> 22:00 – 06:00
          </p>
          <p>• Mode: Malam</p>
          <p>• Hari: Setiap Hari</p>
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/home-mode")}
      >
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Kembali ke Mode Rumah</p>
            <p className="text-xs text-muted-foreground">Lihat mode aktif & jadwal lain</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full" onClick={remove}>
        <Trash2 className="w-5 h-5" />
        Hapus Jadwal
      </Button>
    </PageScaffold>
  );
};

export default ScheduleDetailPage;
