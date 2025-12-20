import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, CheckCircle, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const LanguageSettingsPage = () => {
  const navigate = useNavigate();
  const [activeLanguage, setActiveLanguage] = useState("id");
  const [searchQuery, setSearchQuery] = useState("");

  const languages = [
    { id: "id", name: "Bahasa Indonesia", native: "Indonesia", flag: "🇮🇩" },
    { id: "en", name: "English", native: "English", flag: "🇺🇸" },
    { id: "ms", name: "Bahasa Melayu", native: "Melayu", flag: "🇲🇾" },
    { id: "zh", name: "中文", native: "Mandarin", flag: "🇨🇳" },
    { id: "ja", name: "日本語", native: "Japanese", flag: "🇯🇵" },
    { id: "ko", name: "한국어", native: "Korean", flag: "🇰🇷" },
    { id: "ar", name: "العربية", native: "Arabic", flag: "🇸🇦" },
    { id: "hi", name: "हिंदी", native: "Hindi", flag: "🇮🇳" },
  ];

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.native.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageChange = (langId: string) => {
    setActiveLanguage(langId);
    const lang = languages.find((l) => l.id === langId);
    toast({
      title: "Bahasa Diubah",
      description: `Aplikasi akan menggunakan ${lang?.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Pengaturan Bahasa</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari bahasa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Current Language */}
        <Card variant="glass" className="border-primary/50">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-2">Bahasa Saat Ini</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {languages.find((l) => l.id === activeLanguage)?.flag}
              </span>
              <div>
                <p className="font-medium">
                  {languages.find((l) => l.id === activeLanguage)?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {languages.find((l) => l.id === activeLanguage)?.native}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language List */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground px-1">
            Semua Bahasa
          </h3>
          {filteredLanguages.map((lang) => (
            <Card
              key={lang.id}
              variant="interactive"
              className={activeLanguage === lang.id ? "border-primary" : ""}
              onClick={() => handleLanguageChange(lang.id)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.native}</p>
                  </div>
                </div>
                {activeLanguage === lang.id && (
                  <CheckCircle className="w-5 h-5 text-primary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LanguageSettingsPage;
