import { useNavigate, useParams } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const LocationDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const suggestions = [
    { label: "Cek Sensor Pintu", route: "/sensor-door" },
    { label: "Cek Sensor Gerak", route: "/sensor-motion" },
    { label: "Cek Kamera", route: "/camera-live" },
  ];

  return (
    <PageScaffold
      title="Detail Lokasi"
      subtitle={slug ? slug.replace(/-/g, " ") : "Lokasi"}
      icon={<MapPin className="w-5 h-5 text-primary" />}
      metaDescription="Detail lokasi SafeHome: ringkasan lokasi deteksi dan tautan cepat ke sensor terkait." 
    >
      <section className="space-y-2">
        {suggestions.map((s) => (
          <Card key={s.route} variant="interactive" onClick={() => navigate(s.route)}>
            <CardContent className="p-4 flex items-center justify-between">
              <span className="font-medium">{s.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default LocationDetailPage;
