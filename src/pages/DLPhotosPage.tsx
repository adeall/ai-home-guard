import { useParams } from "react-router-dom";
import { Image } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const DLPhotosPage = () => {
  const { id } = useParams();

  return (
    <PageScaffold
      title="Foto Wajah"
      subtitle={id ? `Untuk wajah ID: ${id}` : undefined}
      icon={<Image className="w-5 h-5 text-primary" />}
      metaDescription="Koleksi foto wajah untuk Deep Learning SafeHome (demo UI)." 
    >
      <section className="grid grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} variant="glass">
            <CardContent className="p-4">
              <div className="aspect-square rounded-xl bg-secondary flex items-center justify-center">
                <Image className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Foto {i + 1}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default DLPhotosPage;
