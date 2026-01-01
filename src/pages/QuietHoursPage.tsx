import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Clock, Save } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const QuietHoursPage = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("22:00");
  const [to, setTo] = useState("07:00");

  const save = () => {
    toast({ title: "Jam tenang disimpan", description: `${from} – ${to} (demo UI).` });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Jam Tenang"
      subtitle="Reduksi notifikasi pada jam tertentu"
      icon={<Moon className="w-5 h-5 text-primary" />}
      metaDescription="Atur jam tenang untuk mengurangi notifikasi SafeHome pada waktu tertentu (demo UI)."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Jadwal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-sm font-medium">Mulai</label>
              <Input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="22:00" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Selesai</label>
              <Input value={to} onChange={(e) => setTo(e.target.value)} placeholder="07:00" />
            </div>
          </div>
          <Button className="w-full" onClick={save}>
            <Save className="w-5 h-5" />
            Simpan
          </Button>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" onClick={() => navigate("/notification-settings")}>
        Kembali ke Pengaturan Notifikasi
      </Button>
    </PageScaffold>
  );
};

export default QuietHoursPage;
