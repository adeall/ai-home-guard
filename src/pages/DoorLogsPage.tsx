import { useNavigate } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const DoorLogsPage = () => {
  const navigate = useNavigate();

  const logs = [
    { id: 1, title: "Pintu Depan", desc: "Dikunci otomatis", time: "14:32" },
    { id: 2, title: "Pintu Samping", desc: "Dibuka oleh pengguna", time: "14:02" },
    { id: 3, title: "Pintu Belakang", desc: "Dikunci", time: "09:15" },
  ];

  return (
    <PageScaffold
      title="Log Pintu"
      subtitle="Riwayat aktivitas sensor"
      icon={<Clock className="w-5 h-5 text-primary" />}
      metaDescription="Riwayat log aktivitas sensor pintu di SafeHome."
    >
      <div className="space-y-2">
        {logs.map((log) => (
          <Card key={log.id} variant="interactive" onClick={() => navigate(`/door-log/${log.id}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{log.title}</p>
                <p className="text-xs text-muted-foreground">{log.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{log.time}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageScaffold>
  );
};

export default DoorLogsPage;
