import { useNavigate } from "react-router-dom";
import { ArrowLeft, Activity, Clock, TrendingUp, BarChart3, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActivityAnalysisPage = () => {
  const navigate = useNavigate();

  const hourlyData = [
    { hour: "00:00", value: 12 },
    { hour: "04:00", value: 5 },
    { hour: "08:00", value: 45 },
    { hour: "12:00", value: 78 },
    { hour: "16:00", value: 65 },
    { hour: "20:00", value: 42 },
  ];

  const dailyStats = [
    { label: "Total Aktivitas", value: "247", change: "+12%", positive: true },
    { label: "Rata-rata/Jam", value: "10.3", change: "+5%", positive: true },
    { label: "Puncak Aktivitas", value: "12:00", change: "", positive: true },
    { label: "Aktivitas Mencurigakan", value: "2", change: "-50%", positive: true },
  ];

  const recentActivities = [
    { id: 1, type: "motion", location: "Ruang Tamu", time: "14:32", description: "Gerakan terdeteksi" },
    { id: 2, type: "door", location: "Pintu Depan", time: "13:15", description: "Pintu dibuka" },
    { id: 3, type: "camera", location: "Kamera Teras", time: "12:45", description: "Objek terdeteksi" },
    { id: 4, type: "motion", location: "Dapur", time: "11:20", description: "Gerakan terdeteksi" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">Analisis Aktivitas</h1>
            <p className="text-sm text-muted-foreground">Detail aktivitas hari ini</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Date Selector */}
        <Card variant="interactive" onClick={() => navigate('/activity-calendar')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Hari Ini</p>
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString('id-ID', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 gap-3">
          {dailyStats.map((stat, index) => (
            <Card 
              key={index} 
              variant="interactive"
              onClick={() => navigate(`/stat-detail/${stat.label.toLowerCase().replace(/\s/g, '-')}`)}
            >
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  {stat.change && (
                    <span className={`text-xs ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Graph */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Grafik Aktivitas per Jam
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-end gap-3">
              {hourlyData.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-cyan-400 rounded-t-md cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ height: `${data.value}%` }}
                    onClick={() => navigate(`/activity-hour/${data.hour}`)}
                  />
                  <span className="text-xs text-muted-foreground">{data.hour}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Aktivitas Terbaru</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/activity-history')}>
              Lihat Semua
            </Button>
          </div>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <Card 
                key={activity.id} 
                variant="interactive"
                onClick={() => navigate(`/activity/${activity.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.location}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{activity.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Report */}
        <Card variant="interactive" onClick={() => navigate('/activity-report')}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Laporan Detail</p>
                <p className="text-sm text-muted-foreground">Unduh laporan aktivitas lengkap</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ActivityAnalysisPage;
