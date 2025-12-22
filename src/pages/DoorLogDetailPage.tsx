import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Info } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const DoorLogDetailPage = () => {
  const { id } = useParams();
  const title = useMemo(() => `Log #${id ?? "-"}`, [id]);

  return (
    <PageScaffold
      title="Detail Log"
      subtitle={title}
      icon={<Info className="w-5 h-5 text-primary" />}
      metaDescription="Detail log aktivitas sensor pintu SafeHome."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-muted-foreground">
            Menampilkan detail aktivitas (waktu, pelaku, dan alasan) untuk log ini.
          </p>
          <div className="pt-2 text-sm text-muted-foreground space-y-1">
            <p>• Waktu: 14:02</p>
            <p>• Lokasi: Pintu Samping</p>
            <p>• Aksi: Dibuka</p>
            <p>• Oleh: Bapak Adi</p>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DoorLogDetailPage;
