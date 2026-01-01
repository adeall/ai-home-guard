import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarChart3, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const StatDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => `Detail Statistik: ${id ?? "-"}`, [id]);

  const items = [
    { k: "Periode", v: "7 hari" },
    { k: "Total event", v: "128" },
    { k: "Prioritas", v: "Sedang" },
  ];

  return (
    <PageScaffold
      title="Detail Statistik"
      subtitle={title}
      icon={<BarChart3 className="w-5 h-5 text-primary" />}
      metaDescription="Detail statistik SafeHome untuk metrik tertentu."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardContent className="p-6 space-y-2">
            <p className="font-semibold">{title}</p>
            <div className="text-sm text-muted-foreground space-y-1">
              {items.map((it) => (
                <p key={it.k}>
                  • {it.k}: {it.v}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/statistics")}>
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Statistik</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default StatDetailPage;
