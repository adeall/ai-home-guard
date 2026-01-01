import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ModeDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const modes = useMemo(
    () =>
      [
        { id: "home", title: "Mode Rumah", desc: "Prioritaskan kenyamanan" },
        { id: "away", title: "Mode Pergi", desc: "Aktifkan proteksi penuh" },
        { id: "night", title: "Mode Malam", desc: "Proteksi saat tidur" },
      ],
    []
  );

  const selected = useMemo(() => modes.find((m) => m.id === id), [id, modes]);

  return (
    <PageScaffold
      title="Detail Mode"
      subtitle={selected ? selected.title : "Pilih mode"}
      icon={<Home className="w-5 h-5 text-primary" />}
      metaDescription="Detail mode keamanan SafeHome (demo UI)."
    >
      <section className="space-y-4">
        {selected ? (
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-base">{selected.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>{selected.desc}</p>
              <p>• Sensor: aktif sesuai profil</p>
              <p>• Notifikasi: disesuaikan</p>
              <p>• Aksi cepat: tersedia</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {modes.map((m) => (
              <Card key={m.id} variant="interactive" onClick={() => navigate(`/mode-details/${m.id}`)}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{m.title}</p>
                    <p className="text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Button variant="outline" className="w-full" onClick={() => navigate("/home-mode")}
          aria-label="Kembali ke halaman mode rumah"
        >
          Kembali ke Home Mode
        </Button>
      </section>
    </PageScaffold>
  );
};

export default ModeDetailsPage;
