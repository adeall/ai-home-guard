import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, User, Camera, Clock, MapPin, Edit, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FaceDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const faces: Record<string, {
    name: string;
    role: string;
    confidence: number;
    registeredDate: string;
    lastSeen: string;
    totalDetections: number;
    locations: string[];
  }> = {
    "1": {
      name: "Bapak Adi",
      role: "Pemilik Rumah",
      confidence: 98,
      registeredDate: "15 Jan 2024",
      lastSeen: "Baru saja",
      totalDetections: 245,
      locations: ["Pintu Depan", "Ruang Tamu", "Garasi"]
    },
    "2": {
      name: "Ibu Sri",
      role: "Pemilik Rumah",
      confidence: 96,
      registeredDate: "15 Jan 2024",
      lastSeen: "2 jam lalu",
      totalDetections: 198,
      locations: ["Dapur", "Ruang Tamu", "Teras Belakang"]
    },
    "3": {
      name: "Andi",
      role: "Anak",
      confidence: 94,
      registeredDate: "16 Jan 2024",
      lastSeen: "Kemarin",
      totalDetections: 156,
      locations: ["Kamar", "Ruang Tamu", "Halaman"]
    }
  };

  const face = faces[id || "1"] || faces["1"];

  const recentDetections = [
    { id: 1, location: "Pintu Depan", time: "14:32", camera: "Kamera Depan" },
    { id: 2, location: "Ruang Tamu", time: "12:15", camera: "Kamera Indoor" },
    { id: 3, location: "Garasi", time: "08:30", camera: "Kamera Garasi" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold">Detail Wajah</h1>
              <p className="text-xs text-muted-foreground">Pengenalan Wajah</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => navigate(`/dl-edit-face/${id}`)}>
              <Edit className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate(`/dl-delete-face/${id}`)}>
              <Trash2 className="w-5 h-5 text-destructive" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card variant="glow">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{face.name}</h2>
            <p className="text-muted-foreground mb-4">{face.role}</p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              <span className="text-lg font-bold">{face.confidence}%</span>
              <span className="text-sm">Akurasi</span>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="interactive" onClick={() => navigate(`/dl-detections/${id}`)}>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{face.totalDetections}</p>
              <p className="text-xs text-muted-foreground">Total Deteksi</p>
            </CardContent>
          </Card>
          <Card variant="interactive" onClick={() => navigate(`/dl-locations/${id}`)}>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{face.locations.length}</p>
              <p className="text-xs text-muted-foreground">Lokasi</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold">{face.registeredDate}</p>
              <p className="text-xs text-muted-foreground">Terdaftar</p>
            </CardContent>
          </Card>
        </div>

        {/* Last Seen */}
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Terakhir Terlihat</p>
              <p className="font-semibold">{face.lastSeen}</p>
            </div>
          </CardContent>
        </Card>

        {/* Common Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Lokasi Umum</h3>
          <div className="flex flex-wrap gap-2">
            {face.locations.map((location, i) => (
              <button
                key={i}
                onClick={() => navigate(`/location/${location.toLowerCase().replace(/\s/g, '-')}`)}
                className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary/20 transition-colors"
              >
                <MapPin className="w-4 h-4 inline mr-1" />
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Detections */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Deteksi Terbaru</h3>
          <div className="space-y-2">
            {recentDetections.map((detection) => (
              <Card 
                key={detection.id} 
                variant="interactive"
                onClick={() => navigate(`/dl-detection/${detection.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{detection.location}</p>
                      <p className="text-sm text-muted-foreground">{detection.camera}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{detection.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => navigate(`/dl-retrain/${id}`)}>
            Latih Ulang
          </Button>
          <Button variant="outline" onClick={() => navigate(`/dl-photos/${id}`)}>
            Lihat Foto
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FaceDetailPage;
