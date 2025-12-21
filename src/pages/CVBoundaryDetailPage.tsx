import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Play, Square } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const CVBoundaryDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const boundary = {
    id,
    name: `Batas Virtual #${id}`,
    active: true,
    alertsToday: 12,
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Detail Batas Virtual</h1>
              <p className="text-xs text-muted-foreground">ID: {boundary.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-4">
        <Card variant="glow">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold">{boundary.name}</p>
                <p className="text-sm text-muted-foreground">{boundary.alertsToday} peringatan hari ini</p>
              </div>
              <Switch
                checked={boundary.active}
                onCheckedChange={() => toast("Demo", { description: "Aktif/nonaktif masih mock." })}
              />
            </div>
            <div className="flex items-center gap-2 text-sm">
              {boundary.active ? (
                <Play className="w-4 h-4 text-primary" />
              ) : (
                <Square className="w-4 h-4 text-muted-foreground" />
              )}
              <span>{boundary.active ? "Aktif" : "Tidak aktif"}</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CVBoundaryDetailPage;
