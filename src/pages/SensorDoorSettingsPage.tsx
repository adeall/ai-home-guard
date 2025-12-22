import { DoorClosed, Bell, Shield, Lock } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageScaffold } from "@/components/layout/PageScaffold";

const SensorDoorSettingsPage = () => {
  return (
    <PageScaffold
      title="Pengaturan Sensor Pintu"
      subtitle="Notifikasi, keamanan, dan otomatisasi"
      icon={<DoorClosed className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan sensor pintu SafeHome: notifikasi, auto-lock, dan keamanan pintu rumah."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Notifikasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                Pintu terbuka
              </p>
              <p className="text-sm text-muted-foreground">Kirim notifikasi saat pintu terbuka.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Aktivitas mencurigakan
              </p>
              <p className="text-sm text-muted-foreground">Peringatan jika terbuka di jam rawan.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Otomatisasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Auto-lock
              </p>
              <p className="text-sm text-muted-foreground">Kunci otomatis setelah 30 detik.</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default SensorDoorSettingsPage;
