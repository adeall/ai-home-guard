import { useNavigate, useParams } from "react-router-dom";
import { RefreshCcw } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const DLRetrainPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const start = () => {
    toast({ title: "Training dimulai", description: `Melatih ulang untuk ID ${id} (demo UI).` });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Latih Ulang Model"
      subtitle={id ? `Untuk wajah ID: ${id}` : undefined}
      icon={<RefreshCcw className="w-5 h-5 text-primary" />}
      metaDescription="Latih ulang model Deep Learning SafeHome untuk meningkatkan akurasi." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardContent className="p-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Ini hanya demo UI. Tombol di bawah mensimulasikan proses training.
            </p>
            <Button className="w-full" onClick={start}>Mulai Latih Ulang</Button>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default DLRetrainPage;
