import { useNavigate } from "react-router-dom";
import { Activity, ChevronRight, Filter } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DLDetectionsOverviewPage = () => {
  const navigate = useNavigate();

  const items = [
    { id: 101, label: "Deteksi Wajah", time: "14:32", place: "Pintu Depan" },
    { id: 102, label: "Orang Asing", time: "14:10", place: "Depan Pagar" },
    { id: 103, label: "Wajah Dikenali", time: "13:58", place: "Garasi" },
  ];

  return (
    <PageScaffold
      title="Deteksi Deep Learning"
      subtitle="Ringkasan & daftar deteksi"
      icon={<Activity className="w-5 h-5 text-primary" />}
      metaDescription="Ringkasan deteksi Deep Learning SafeHome dan navigasi ke detail deteksi."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Filter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => navigate("/date-range-picker")}
          >
            <span className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Pilih Rentang Tanggal
            </span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Button>
        </CardContent>
      </Card>

      <section className="space-y-2">
        {items.map((it) => (
          <Card
            key={it.id}
            variant="interactive"
            onClick={() => navigate(`/dl-detection/${it.id}`)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{it.label}</p>
                <p className="text-xs text-muted-foreground">
                  {it.place} • {it.time}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Card
        variant="interactive"
        onClick={() => navigate("/dl-strangers")}
      >
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Lihat Orang Asing</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default DLDetectionsOverviewPage;
