import { useNavigate } from "react-router-dom";
import { MessageCircle, Headset, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LiveChatSupportPage = () => {
  const navigate = useNavigate();

  return (
    <PageScaffold
      title="Live Chat Support"
      subtitle="Chat dengan tim bantuan"
      icon={<Headset className="w-5 h-5 text-primary" />}
      metaDescription="Live chat support SafeHome untuk bantuan cepat terkait sensor, kamera, dan keamanan."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Bantuan Cepat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Ini demo UI. Untuk simulasi chat, kamu bisa pakai SafeHome Assistant.
            </p>
            <Button className="w-full" onClick={() => navigate("/chatbot")}> 
              <MessageCircle className="w-5 h-5" />
              Buka SafeHome Assistant
            </Button>
          </CardContent>
        </Card>

        <Card variant="interactive" onClick={() => navigate("/help-faq")}> 
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium">Kembali ke Bantuan & FAQ</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>
    </PageScaffold>
  );
};

export default LiveChatSupportPage;
