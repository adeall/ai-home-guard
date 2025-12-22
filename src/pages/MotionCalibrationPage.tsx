import { Activity, ListChecks } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const MotionCalibrationPage = () => {
  const steps = [
    "Pastikan sensor terpasang stabil.",
    "Jauhkan dari sumber panas langsung.",
    "Lakukan uji gerakan selama 30 detik.",
    "Simpan hasil kalibrasi.",
  ];

  return (
    <PageScaffold
      title="Kalibrasi Sensor"
      subtitle="Sensor gerak"
      icon={<Activity className="w-5 h-5 text-primary" />}
      metaDescription="Kalibrasi sensor gerak SafeHome untuk meningkatkan akurasi deteksi."
    >
      <Card variant="glass">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="w-5 h-5 text-primary" />
            <p className="font-semibold">Langkah singkat</p>
          </div>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default MotionCalibrationPage;
