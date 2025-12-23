import { useNavigate, useParams } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const DLLocationsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const locations = ["Pintu Depan", "Ruang Tamu", "Garasi"].map((name) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <PageScaffold
      title="Lokasi Terdeteksi"
      subtitle={id ? `Untuk wajah ID: ${id}` : undefined}
      icon={<MapPin className="w-5 h-5 text-primary" />}
      metaDescription="Lokasi deteksi Deep Learning SafeHome untuk satu wajah." 
    >
      <section className="space-y-2">
        {locations.map((l) => (
          <Card key={l.slug} variant="interactive" onClick={() => navigate(`/location/${l.slug}`)}>
            <CardContent className="p-4 flex items-center justify-between">
              <span className="font-medium">{l.name}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default DLLocationsPage;
