import { useState } from "react";
import { Star } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RateAppPage = () => {
  const [rating, setRating] = useState(4);

  return (
    <PageScaffold
      title="Beri Rating"
      subtitle="Bantu kami jadi lebih baik"
      icon={<Star className="w-5 h-5 text-primary" />}
      metaDescription="Beri rating aplikasi SafeHome dan kirim masukan."
    >
      <Card variant="glass">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Seberapa puas Anda dengan pengalaman menggunakan SafeHome?
          </p>

          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const v = i + 1;
              const active = v <= rating;
              return (
                <button
                  key={v}
                  onClick={() => setRating(v)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label={`Pilih rating ${v}`}
                >
                  <Star className={`w-7 h-7 ${active ? "text-primary" : "text-muted-foreground"}`} />
                </button>
              );
            })}
          </div>

          <Button
            variant="glow"
            className="w-full"
            onClick={() => toast({ title: "Terima kasih!", description: `Rating Anda: ${rating}/5` })}
          >
            Kirim Rating
          </Button>
        </CardContent>
      </Card>
    </PageScaffold>
  );
};

export default RateAppPage;
