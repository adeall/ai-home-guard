import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, Clock, Cpu, Zap, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExpertDecisionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const decisions: Record<string, {
    title: string;
    status: "safe" | "warning" | "danger";
    reason: string;
    action: string;
    time: string;
    rules: string[];
    facts: string[];
  }> = {
    "1": {
      title: "Pintu Depan Dikunci",
      status: "safe",
      reason: "Sensor mendeteksi pintu dalam posisi terkunci sejak 22:00",
      action: "Tidak diperlukan tindakan",
      time: "2 menit lalu",
      rules: ["IF pintu_status = 'terkunci' AND waktu > 22:00 THEN status = 'aman'", "IF semua_pintu = 'terkunci' THEN keamanan_perimeter = 'aktif'"],
      facts: ["pintu_depan_status: terkunci", "waktu_kunci: 22:00:15", "sensor_id: DOOR_001"]
    },
    "2": {
      title: "Gerakan di Halaman",
      status: "warning",
      reason: "Sensor gerak mendeteksi pergerakan di area halaman depan",
      action: "Kamera diaktifkan untuk monitoring",
      time: "15 menit lalu",
      rules: ["IF gerakan_terdeteksi AND lokasi = 'halaman' AND waktu = 'malam' THEN status = 'waspada'", "IF status = 'waspada' THEN aktifkan_kamera"],
      facts: ["gerakan_terdeteksi: true", "lokasi: halaman_depan", "waktu: 23:45", "kamera_status: aktif"]
    },
    "3": {
      title: "Sistem Dalam Kondisi Normal",
      status: "safe",
      reason: "Semua sensor berfungsi dengan baik",
      action: "Monitoring rutin berlanjut",
      time: "1 jam lalu",
      rules: ["IF semua_sensor = 'aktif' AND anomali = 'tidak_ada' THEN status = 'normal'"],
      facts: ["sensor_aktif: 12/12", "anomali_terdeteksi: 0", "sistem_health: 100%"]
    }
  };

  const decision = decisions[id || "1"] || decisions["1"];
  const StatusIcon = decision.status === "safe" ? CheckCircle : AlertTriangle;
  const statusColor = decision.status === "safe" ? "text-green-400" : decision.status === "warning" ? "text-yellow-400" : "text-red-400";
  const statusBg = decision.status === "safe" ? "bg-green-500/20" : decision.status === "warning" ? "bg-yellow-500/20" : "bg-red-500/20";

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Cpu className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Detail Keputusan</h1>
              <p className="text-xs text-muted-foreground">Expert System Analysis</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Decision Card */}
        <Card className={`${statusBg} border-${decision.status === "safe" ? "green" : decision.status === "warning" ? "yellow" : "red"}-500/30`}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 ${statusBg} rounded-xl flex items-center justify-center`}>
                <StatusIcon className={`w-7 h-7 ${statusColor}`} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{decision.title}</h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{decision.time}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reason */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Alasan Keputusan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{decision.reason}</p>
          </CardContent>
        </Card>

        {/* Action Taken */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Tindakan yang Diambil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary">{decision.action}</p>
          </CardContent>
        </Card>

        {/* Rules Used */}
        <Card variant="interactive" onClick={() => navigate(`/expert-rules/${id}`)}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>Aturan yang Digunakan</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {decision.rules.map((rule, i) => (
                <div key={i} className="p-3 bg-secondary/50 rounded-lg font-mono text-xs text-muted-foreground">
                  {rule}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Facts */}
        <Card variant="interactive" onClick={() => navigate(`/expert-facts/${id}`)}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>Fakta Terkait</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {decision.facts.map((fact, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground font-mono">{fact}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExpertDecisionPage;
