import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Percent, ChevronRight, Images, RefreshCcw } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DLConfidencePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const faceId = useMemo(() => id ?? "-", [id]);

  return (
    <PageScaffold
      title="Skor Keyakinan"
      subtitle={id ? `Untuk wajah ID: ${id}` : undefined}
      icon={<Percent className="w-5 h-5 text-primary" />}
      metaDescription="Detail skor keyakinan pengenalan wajah (demo UI) untuk Deep Learning SafeHome."
    >
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-base">Ringkasan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• ID wajah: {faceId}</p>
          <p>• Confidence rata-rata: 96%</p>
          <p>• Kondisi pencahayaan: Normal</p>
          <p>• Model: DL Face v1.0</p>
        </CardContent>
      </Card>

      <section className="grid grid-cols-2 gap-3">
        <Card variant="interactive" onClick={() => navigate(`/dl-photos/${faceId}`)}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 font-medium">
              <Images className="w-4 h-4 text-primary" />
              Foto Wajah
            </div>
            <p className="text-xs text-muted-foreground mt-1">Lihat koleksi foto untuk pelatihan</p>
            <div className="pt-2 flex items-center justify-end">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate(`/dl-retrain/${faceId}`)}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 font-medium">
              <RefreshCcw className="w-4 h-4 text-primary" />
              Latih Ulang
            </div>
            <p className="text-xs text-muted-foreground mt-1">Tingkatkan akurasi pengenalan</p>
            <div className="pt-2 flex items-center justify-end">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </section>

      <Button variant="outline" className="w-full" onClick={() => navigate(`/dl-face-detail/${faceId}`)}>
        Kembali ke Detail Wajah
      </Button>
    </PageScaffold>
  );
};

export default DLConfidencePage;
