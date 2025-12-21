import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpenCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LicensesPage = () => {
  const navigate = useNavigate();

  const licenses = [
    { name: "React", license: "MIT" },
    { name: "Tailwind CSS", license: "MIT" },
    { name: "Lucide", license: "ISC" },
    { name: "Radix UI", license: "MIT" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <BookOpenCheck className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-bold">Lisensi Open Source</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-2">
        {licenses.map((l) => (
          <Card key={l.name} variant="glass">
            <CardContent className="p-4 flex items-center justify-between">
              <span className="font-medium">{l.name}</span>
              <span className="text-sm text-muted-foreground">{l.license}</span>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default LicensesPage;
