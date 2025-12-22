import { Camera, Settings2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const CameraSettingsPage = () => {
  return (
    <PageScaffold
      title="Pengaturan Kamera"
      subtitle="Rekaman, kualitas, dan notifikasi"
      icon={<Settings2 className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan kamera SafeHome: rekaman, kualitas video, dan notifikasi kamera."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Rekaman</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Rekam otomatis</p>
              <p className="text-sm text-muted-foreground">Rekam saat ada pergerakan.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" />
              <p className="font-medium">Overlay status</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default CameraSettingsPage;
