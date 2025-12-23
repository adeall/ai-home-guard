import { useNavigate, useParams } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const DLDeleteFacePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onDelete = () => {
    toast({ title: "Wajah dihapus", description: `ID ${id} (demo UI).` });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Hapus Data Wajah"
      subtitle={id ? `ID: ${id}` : undefined}
      icon={<Trash2 className="w-5 h-5 text-primary" />}
      metaDescription="Konfirmasi penghapusan data wajah Deep Learning SafeHome." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardContent className="p-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Aksi ini akan menghapus data wajah dari daftar (demo UI).
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => navigate(-1)}>Batal</Button>
              <Button variant="destructive" onClick={onDelete}>Hapus</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default DLDeleteFacePage;
