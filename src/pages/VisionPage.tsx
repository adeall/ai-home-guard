import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Eye, Heart, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VisionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold text-lg">Visi & Misi</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Vision */}
        <Card variant="glow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Visi</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi solusi keamanan rumah terdepan berbasis kecerdasan buatan yang memberikan 
              perlindungan proaktif, prediktif, dan adaptif untuk setiap rumah di Indonesia.
            </p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card variant="glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Misi</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-sm font-bold">1</span>
                </div>
                <p className="text-muted-foreground">
                  Mengintegrasikan teknologi AI canggih untuk deteksi ancaman secara real-time
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-sm font-bold">2</span>
                </div>
                <p className="text-muted-foreground">
                  Memberikan pengalaman pengguna yang intuitif dan mudah digunakan
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-sm font-bold">3</span>
                </div>
                <p className="text-muted-foreground">
                  Terus berinovasi dengan teknologi terkini untuk keamanan maksimal
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-400 text-sm font-bold">4</span>
                </div>
                <p className="text-muted-foreground">
                  Membangun ekosistem keamanan rumah yang terjangkau untuk semua lapisan masyarakat
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Values */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Nilai-Nilai Kami</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card variant="interactive" onClick={() => navigate('/value-innovation')}>
              <CardContent className="p-4 text-center">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-medium">Inovasi</p>
              </CardContent>
            </Card>
            <Card variant="interactive" onClick={() => navigate('/value-trust')}>
              <CardContent className="p-4 text-center">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="font-medium">Kepercayaan</p>
              </CardContent>
            </Card>
            <Card variant="interactive" onClick={() => navigate('/value-community')}>
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="font-medium">Komunitas</p>
              </CardContent>
            </Card>
            <Card variant="interactive" onClick={() => navigate('/value-excellence')}>
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="font-medium">Keunggulan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VisionPage;
