import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Info, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GenericDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Generate page title from path
  const getPageTitle = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const title = segments[0]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return title;
  };

  const relatedPages = [
    { label: "Kembali ke Dashboard", route: "/dashboard" },
    { label: "Lihat Statistik", route: "/statistics" },
    { label: "Pengaturan", route: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">{getPageTitle()}</h1>
              {id && <p className="text-xs text-muted-foreground">ID: {id}</p>}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card variant="glow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">{getPageTitle()}</h2>
            <p className="text-muted-foreground mb-4">
              Halaman detail ini menampilkan informasi lengkap tentang {getPageTitle().toLowerCase()}.
              Semua fitur interaktif dan dapat diklik.
            </p>
            <p className="text-sm text-primary">
              Tap pada item untuk melihat detail lebih lanjut
            </p>
          </CardContent>
        </Card>

        {/* Sample Interactive Items */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Informasi Detail</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                variant="interactive"
                onClick={() => navigate(`${location.pathname}/sub-${i}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Detail Item {i}</p>
                    <p className="text-xs text-muted-foreground">Klik untuk informasi lebih lanjut</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Halaman Terkait</h3>
          <div className="space-y-2">
            {relatedPages.map((page, i) => (
              <Card
                key={i}
                variant="interactive"
                onClick={() => navigate(page.route)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <span>{page.label}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GenericDetailPage;
