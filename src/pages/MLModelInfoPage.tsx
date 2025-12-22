import { BarChart3, Info } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MLModelInfoPage = () => {
  return (
    <PageScaffold
      title="Info Model ML"
      subtitle="Versi & pembaruan"
      icon={<BarChart3 className="w-5 h-5 text-primary" />}
      metaDescription="Informasi model Machine Learning SafeHome: versi, pembaruan, dan ringkasan performa."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Status Model</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Versi: 1.0.3</p>
          <p>• Update terakhir: 1 hari lalu</p>
          <p>• Sumber data: aktivitas sensor (ringkas)</p>
          <div className="flex items-start gap-2 pt-2">
            <Info className="w-4 h-4 text-primary mt-0.5" />
            <p>Halaman ini menggantikan Generic Detail agar menu "Sistem Update" punya halaman sendiri.</p>
          </div>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default MLModelInfoPage;
