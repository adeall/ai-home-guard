import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, BarChart3, TrendingUp, TrendingDown, Activity,
  Shield, Camera, DoorOpen, ChevronRight, Calendar, Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StatisticsPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Deteksi", value: "1,247", change: "+12%", trend: "up" },
    { label: "Ancaman Dicegah", value: "23", change: "+5%", trend: "up" },
    { label: "Alarm Palsu", value: "8", change: "-15%", trend: "down" },
    { label: "Uptime Sistem", value: "99.9%", change: "+0.1%", trend: "up" },
  ];

  const weeklyData = [65, 78, 82, 70, 95, 88, 92];

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-background" />
              </div>
              <h1 className="font-bold text-lg">Statistik</h1>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/date-range-picker')}>
            <Calendar className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <Card
              key={i}
              variant="interactive"
              onClick={() => navigate(`/stat-detail/${i}`)}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <div className={`flex items-center gap-1 text-xs ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {stat.change} dari minggu lalu
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Activity */}
        <Card variant="glow" onClick={() => navigate('/weekly-analysis')}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Aktivitas Mingguan
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-end gap-3">
              {weeklyData.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-cyan-400 rounded-t-md cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ height: `${h * 1.4}px` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Stats */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Per Kategori</h3>
          <div className="space-y-2">
            <Card variant="interactive" onClick={() => navigate('/stat-security')}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Keamanan</p>
                    <p className="text-xs text-muted-foreground">156 event minggu ini</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>

            <Card variant="interactive" onClick={() => navigate('/stat-cameras')}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Kamera</p>
                    <p className="text-xs text-muted-foreground">892 deteksi objek</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>

            <Card variant="interactive" onClick={() => navigate('/stat-sensors')}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <DoorOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Sensor</p>
                    <p className="text-xs text-muted-foreground">199 aktivasi sensor</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Export Report */}
        <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/export-report')}>
          <Download className="w-5 h-5" />
          Export Laporan PDF
        </Button>
      </main>
    </div>
  );
};

export default StatisticsPage;
