import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, MessageCircle, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ValueCommunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-bold">Nilai: Komunitas</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <p className="text-muted-foreground">
              Komunitas berarti kolaborasi antar pengguna, keluarga, dan lingkungan untuk keamanan bersama.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-3 text-center"><MessageCircle className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">Berbagi info</p></Card>
              <Card className="p-3 text-center"><Handshake className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">Kolaborasi</p></Card>
              <Card className="p-3 text-center"><Users className="w-5 h-5 text-primary mx-auto mb-2" /><p className="text-xs text-muted-foreground">Saling bantu</p></Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ValueCommunityPage;
