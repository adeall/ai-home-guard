import { Activity, Settings2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const MotionSettingsPage = () => {
  return (
    <PageScaffold
      title="Pengaturan Sensor Gerak"
      subtitle="Atur deteksi & notifikasi"
      icon={<Settings2 className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan sensor gerak SafeHome: sensitivitas, jadwal, dan notifikasi."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Deteksi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Deteksi di malam hari
              </p>
              <p className="text-sm text-muted-foreground">Perketat deteksi saat jam rawan.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Mode hemat daya</p>
              <p className="text-sm text-muted-foreground">Kurangi frekuensi pemindaian.</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default MotionSettingsPage;
