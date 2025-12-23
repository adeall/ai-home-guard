import { Mail, Copy } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const SUPPORT_EMAIL = "support@safehome.id";

const EmailSupportPage = () => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      toast({ title: "Email disalin", description: SUPPORT_EMAIL });
    } catch {
      toast({ title: "Gagal menyalin", description: "Silakan salin manual: " + SUPPORT_EMAIL });
    }
  };

  return (
    <PageScaffold
      title="Email Support"
      subtitle="Kirim email ke tim SafeHome"
      icon={<Mail className="w-5 h-5 text-primary" />}
      metaDescription="Kontak email support SafeHome untuk bantuan teknis dan pertanyaan layanan."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Alamat Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Kirim detail masalahmu ke:</p>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-secondary">
              <span className="font-medium">{SUPPORT_EMAIL}</span>
              <Button variant="outline" size="icon" onClick={copy} aria-label="Salin email">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <a
              className="block"
              href={`mailto:${SUPPORT_EMAIL}?subject=SafeHome%20Support`}
            >
              <Button className="w-full">Kirim Email</Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default EmailSupportPage;
