import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layers, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatCategoryPageProps = {
  category: string;
};

const StatCategoryPage = ({ category }: StatCategoryPageProps) => {
  const navigate = useNavigate();

  const items = useMemo(
    () =>
      [
        { id: `${category.toLowerCase()}-trend`, title: "Tren", desc: "Perubahan minggu ini" },
        { id: `${category.toLowerCase()}-top`, title: "Top", desc: "Penyumbang utama" },
        { id: `${category.toLowerCase()}-alerts`, title: "Alert", desc: "Event paling penting" },
      ],
    [category]
  );

  return (
    <PageScaffold
      title={`Statistik ${category}`}
      subtitle="Rincian kategori"
      icon={<Layers className="w-5 h-5 text-primary" />}
      metaDescription={`Rincian statistik kategori ${category} di SafeHome.`}
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Ringkasan</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Tap item untuk membuka detail (demo UI).
          </CardContent>
        </Card>

        <div className="space-y-2">
          {items.map((it) => (
            <Card
              key={it.id}
              variant="interactive"
              onClick={() => navigate(`/stat-detail/${it.id}`)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{it.title}</p>
                  <p className="text-xs text-muted-foreground">{it.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageScaffold>
  );
};

export default StatCategoryPage;
