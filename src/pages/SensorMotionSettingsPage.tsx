import { useParams } from "react-router-dom";
import { Activity, SlidersHorizontal } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const SensorMotionSettingsPage = () => {
  const { id } = useParams();

  return (
    <PageScaffold
      title="Pengaturan Sensor"
      subtitle={`Sensor #${id ?? "-"}`}
      icon={<SlidersHorizontal className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan per-sensor gerak SafeHome: aktivasi, sensitivitas, dan notifikasi."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Kontrol</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              <p className="font-medium">Aktifkan sensor</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="text-sm text-muted-foreground">
            Sensitivitas & zona deteksi bisa disesuaikan pada iterasi berikutnya.
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default SensorMotionSettingsPage;
