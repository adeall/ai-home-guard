import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SlidersHorizontal, Battery, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const SensorSettingsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Sensor #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Pengaturan Sensor"
      subtitle={title}
      icon={<SlidersHorizontal className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan detail per sensor SafeHome (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Aktifkan Sensor</p>
              <p className="text-sm text-muted-foreground">Sensor ikut monitoring & notifikasi</p>
            </div>
            <Switch
              checked
              onCheckedChange={() => toast({ title: "Tersimpan", description: "Status sensor diperbarui (demo)." })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-primary" />
              <p className="text-sm text-muted-foreground">Baterai</p>
            </div>
            <p className="text-sm font-medium">72%</p>
          </div>
        </CardContent>
      </Card>

      <Card variant="interactive" onClick={() => navigate("/sensor-management")}>
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Kembali ke Kelola Sensor</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" onClick={() => navigate("/network-status")}>
        Cek Status Jaringan
      </Button>
    </PageScaffold>
  );
};

export default SensorSettingsPage;
