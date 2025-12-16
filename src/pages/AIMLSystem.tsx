import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, Clock, AlertTriangle, ChevronRight, Play, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIMLSystem = () => {
  const navigate = useNavigate();

  const riskTimes = [
    { time: "02:00 - 05:00", risk: 75, label: "Tinggi" },
    { time: "18:00 - 20:00", risk: 45, label: "Sedang" },
    { time: "12:00 - 14:00", risk: 20, label: "Rendah" },
  ];

  const predictions = [
    { id: 1, date: "Besok", risk: 35, trend: "up", factors: ["Cuaca mendung", "Akhir pekan"] },
    { id: 2, date: "Lusa", risk: 28, trend: "down", factors: ["Hari kerja normal"] },
    { id: 3, date: "3 Hari", risk: 42, trend: "up", factors: ["Libur nasional"] },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Machine Learning</h1>
              <p className="text-xs text-muted-foreground">Prediksi Risiko Keamanan</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Risk Prediction Graph */}
        <Card variant="glow" onClick={() => navigate('/ml-prediction-detail')}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Prediksi Risiko 7 Hari
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-end gap-3 mb-4">
              {[30, 45, 25, 60, 35, 50, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t-md transition-all cursor-pointer hover:opacity-100 ${
                      h > 50 ? "bg-red-500 opacity-80" : h > 35 ? "bg-yellow-500 opacity-80" : "bg-green-500 opacity-80"
                    }`}
                    style={{ height: `${h * 2}px` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tap grafik untuk detail</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Risk Time Analysis */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Waktu Rawan
          </h3>
          <div className="space-y-2">
            {riskTimes.map((t, i) => (
              <Card
                key={i}
                variant="interactive"
                onClick={() => navigate(`/ml-risk-pattern/${i}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{t.time}</span>
                    <span
                      className={`text-sm font-medium ${
                        t.risk > 60 ? "text-red-400" : t.risk > 35 ? "text-yellow-400" : "text-green-400"
                      }`}
                    >
                      {t.label}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        t.risk > 60 ? "bg-red-500" : t.risk > 35 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${t.risk}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Predictions */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Prediksi Mendatang
          </h3>
          <div className="space-y-2">
            {predictions.map((p) => (
              <Card
                key={p.id}
                variant="interactive"
                onClick={() => navigate(`/ml-prediction/${p.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{p.date}</span>
                      <span
                        className={`text-sm px-2 py-0.5 rounded-full ${
                          p.risk > 40 ? "bg-red-500/20 text-red-400" : p.risk > 30 ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {p.risk}% Risiko
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Faktor: {p.factors.join(", ")}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Train Model Button */}
        <Button
          variant="glow"
          size="lg"
          className="w-full"
          onClick={() => navigate('/ml-training')}
        >
          <Play className="w-5 h-5" />
          Latih Model
        </Button>

        {/* Model Info */}
        <Card variant="interactive" onClick={() => navigate('/ml-model-info')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-medium">Info Model</h4>
                <p className="text-xs text-muted-foreground">Akurasi: 94.5% • Data: 12,847 records</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AIMLSystem;
