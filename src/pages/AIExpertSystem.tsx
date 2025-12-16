import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cpu, AlertTriangle, CheckCircle, Info, ChevronRight, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIExpertSystem = () => {
  const navigate = useNavigate();

  const threatLevels = [
    { level: "Rendah", count: 12, color: "bg-green-500", textColor: "text-green-400" },
    { level: "Sedang", count: 3, color: "bg-yellow-500", textColor: "text-yellow-400" },
    { level: "Tinggi", count: 0, color: "bg-red-500", textColor: "text-red-400" },
  ];

  const decisions = [
    {
      id: 1,
      title: "Pintu Depan Dikunci",
      status: "safe",
      reason: "Sensor mendeteksi pintu dalam posisi terkunci sejak 22:00",
      action: "Tidak diperlukan tindakan",
      time: "2 menit lalu",
    },
    {
      id: 2,
      title: "Gerakan di Halaman",
      status: "warning",
      reason: "Sensor gerak mendeteksi pergerakan di area halaman depan",
      action: "Kamera diaktifkan untuk monitoring",
      time: "15 menit lalu",
    },
    {
      id: 3,
      title: "Sistem Dalam Kondisi Normal",
      status: "safe",
      reason: "Semua sensor berfungsi dengan baik",
      action: "Monitoring rutin berlanjut",
      time: "1 jam lalu",
    },
  ];

  const recommendations = [
    { id: 1, text: "Aktifkan mode malam pada pukul 22:00", priority: "high" },
    { id: 2, text: "Periksa sensor gerak di garasi", priority: "medium" },
    { id: 3, text: "Update firmware kamera belakang", priority: "low" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
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
              <h1 className="font-bold">Expert System</h1>
              <p className="text-xs text-muted-foreground">Analisis Keamanan Cerdas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Overview Card */}
        <Card variant="glow" className="cursor-pointer" onClick={() => navigate('/expert-overview')}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Status Analisis
              </h3>
              <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Aman
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Expert System menganalisis 15 keputusan dalam 24 jam terakhir menggunakan 47 aturan aktif.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {threatLevels.map((t) => (
                  <div key={t.level} className="text-center">
                    <div className={`w-8 h-8 ${t.color} rounded-lg flex items-center justify-center mb-1`}>
                      <span className="text-sm font-bold text-background">{t.count}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.level}</span>
                  </div>
                ))}
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Decisions */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Keputusan Terkini
          </h3>
          <div className="space-y-3">
            {decisions.map((d) => (
              <Card
                key={d.id}
                variant="interactive"
                onClick={() => navigate(`/expert-decision/${d.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {d.status === "safe" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      )}
                      <h4 className="font-medium">{d.title}</h4>
                    </div>
                    <span className="text-xs text-muted-foreground">{d.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{d.reason}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-primary flex items-center gap-1">
                      <Zap className="w-3 h-3" /> {d.action}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/expert-why/${d.id}`);
                      }}
                      className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                    >
                      <Info className="w-3 h-3" /> Mengapa?
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Rekomendasi Tindakan</h3>
          <div className="space-y-2">
            {recommendations.map((r) => (
              <Card
                key={r.id}
                variant="interactive"
                onClick={() => navigate(`/expert-action/${r.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        r.priority === "high"
                          ? "bg-red-500"
                          : r.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                    <p className="text-sm">{r.text}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Knowledge Base */}
        <Card variant="interactive" onClick={() => navigate('/expert-knowledge')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Basis Pengetahuan</h4>
              <p className="text-sm text-muted-foreground">47 aturan aktif • 156 fakta tersimpan</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AIExpertSystem;
