import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, User, UserX, Activity, ChevronRight, Percent, Video, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIDeepLearning = () => {
  const navigate = useNavigate();

  const recognizedFaces = [
    { id: 1, name: "Bapak Adi", role: "Pemilik", lastSeen: "Baru saja", confidence: 98 },
    { id: 2, name: "Ibu Sri", role: "Pemilik", lastSeen: "2 jam lalu", confidence: 96 },
    { id: 3, name: "Andi", role: "Anak", lastSeen: "Kemarin", confidence: 94 },
  ];

  const suspiciousActivities = [
    { id: 1, type: "Orang Asing", location: "Depan Pagar", time: "14:32", severity: "high" },
    { id: 2, type: "Gerakan Mencurigakan", location: "Samping Rumah", time: "03:15", severity: "medium" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Deep Learning</h1>
              <p className="text-xs text-muted-foreground">Pengenalan Wajah & Aktivitas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Face Recognition Stats */}
        <Card variant="glow">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="cursor-pointer" onClick={() => navigate('/dl-faces-registered')}>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <User className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground">Wajah Terdaftar</p>
              </div>
              <div className="cursor-pointer" onClick={() => navigate('/dl-strangers')}>
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <UserX className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs text-muted-foreground">Orang Asing</p>
              </div>
              <div className="cursor-pointer" onClick={() => navigate('/dl-detections')}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">127</p>
                <p className="text-xs text-muted-foreground">Deteksi Hari Ini</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recently Detected Faces */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Wajah Terdeteksi
          </h3>
          <div className="space-y-2">
            {recognizedFaces.map((face) => (
              <Card
                key={face.id}
                variant="interactive"
                onClick={() => navigate(`/dl-face-detail/${face.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-cyan-400/30 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{face.name}</p>
                      <p className="text-xs text-muted-foreground">{face.role} • {face.lastSeen}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/dl-confidence/${face.id}`);
                      }}
                      className="flex items-center gap-1 text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded-lg"
                    >
                      <Percent className="w-3 h-3" />
                      {face.confidence}%
                    </button>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Suspicious Activities */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            Aktivitas Mencurigakan
          </h3>
          <div className="space-y-2">
            {suspiciousActivities.map((activity) => (
              <Card
                key={activity.id}
                variant="interactive"
                className={activity.severity === "high" ? "border-red-500/30" : "border-yellow-500/30"}
                onClick={() => navigate(`/dl-activity/${activity.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activity.severity === "high" ? "bg-red-500/20" : "bg-yellow-500/20"
                    }`}>
                      <Video className={`w-5 h-5 ${activity.severity === "high" ? "text-red-400" : "text-yellow-400"}`} />
                    </div>
                    <div>
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-xs text-muted-foreground">{activity.location} • {activity.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Face Button */}
        <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/dl-add-face')}>
          <User className="w-5 h-5" />
          Tambah Wajah Baru
        </Button>
      </main>
    </div>
  );
};

export default AIDeepLearning;
