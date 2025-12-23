import { Phone, ExternalLink } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SUPPORT_PHONE = "021-1234-5678";

const PhoneSupportPage = () => {
  return (
    <PageScaffold
      title="Telepon Support"
      subtitle="Hubungi tim bantuan"
      icon={<Phone className="w-5 h-5 text-primary" />}
      metaDescription="Nomor telepon support SafeHome untuk bantuan cepat terkait keamanan rumah." 
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Kontak</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Nomor support:</p>
            <div className="p-3 rounded-xl bg-secondary font-medium">{SUPPORT_PHONE}</div>
            <a className="block" href={`tel:${SUPPORT_PHONE.replace(/\D/g, "")}`}
              aria-label="Panggil support via telepon"
            >
              <Button className="w-full">
                <ExternalLink className="w-5 h-5" />
                Panggil Sekarang
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default PhoneSupportPage;
