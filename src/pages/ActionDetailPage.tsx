import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Zap, ChevronRight, Info } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

function humanize(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const ActionDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const title = useMemo(() => humanize(id ?? "aksi"), [id]);

  const run = () => {
    toast({ title: "Aksi dijalankan (demo)", description: `${title} berhasil diproses.` });
    navigate(-1);
  };

  return (
    <PageScaffold
      title="Aksi"
      subtitle={title}
      icon={<Zap className="w-5 h-5 text-primary" />}
      metaDescription="Halaman detail untuk aksi cepat SafeHome dari notifikasi (demo UI)."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-2 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{title}</p>
          <p>Menampilkan ringkasan dan konfirmasi untuk menjalankan aksi ini.</p>
          <div className="flex items-start gap-2 pt-2">
            <Info className="w-4 h-4 text-primary mt-0.5" />
            <p>Aksi ini hanya simulasi UI (tanpa backend).</p>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={run}>Jalankan Aksi</Button>

      <Card variant="interactive" onClick={() => navigate("/notifications")}>
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-medium">Kembali ke Notifikasi</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default ActionDetailPage;
