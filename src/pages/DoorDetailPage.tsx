import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { DoorClosed, DoorOpen, Lock, Unlock } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const DoorDetailPage = () => {
  const { id } = useParams();
  const doorName = useMemo(() => `Pintu #${id ?? "-"}`, [id]);
  const [locked, setLocked] = useState(true);

  const handleToggle = () => {
    setLocked((v) => !v);
    toast({
      title: locked ? "Pintu dibuka" : "Pintu dikunci",
      description: `${doorName} ${locked ? "dibuka" : "dikunci"} melalui kontrol aplikasi.`,
    });
  };

  return (
    <PageScaffold
      title="Detail Pintu"
      subtitle={doorName}
      icon={(locked ? <DoorClosed className="w-5 h-5 text-primary" /> : <DoorOpen className="w-5 h-5 text-primary" />)}
      metaDescription="Detail sensor pintu SafeHome: status kunci, aktivitas, dan kontrol pintu."
    >
      <Card variant="glow">
        <CardHeader>
          <CardTitle className="text-base">Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{locked ? "Terkunci" : "Terbuka"}</p>
              <p className="text-sm text-muted-foreground">ID Sensor: {id ?? "-"}</p>
            </div>
            <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
              {locked ? <Lock className="w-6 h-6 text-primary" /> : <Unlock className="w-6 h-6 text-primary" />}
            </div>
          </div>

          <Button variant={locked ? "outline" : "glow"} className="w-full" onClick={handleToggle}>
            {locked ? "Buka" : "Kunci"}
          </Button>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Ringkasan</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Baterai: 80%</li>
            <li>• Aktivitas terakhir: 30 menit lalu</li>
            <li>• Mode: Monitoring aktif</li>
          </ul>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DoorDetailPage;
