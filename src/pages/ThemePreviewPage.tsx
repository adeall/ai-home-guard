import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Sun, Moon, Monitor, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ThemePreviewPage = () => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState("dark");

  const themes = [
    {
      id: "light",
      name: "Mode Terang",
      icon: Sun,
      preview: "bg-white",
      textColor: "text-gray-900",
    },
    {
      id: "dark",
      name: "Mode Gelap",
      icon: Moon,
      preview: "bg-gray-900",
      textColor: "text-white",
    },
    {
      id: "system",
      name: "Ikuti Sistem",
      icon: Monitor,
      preview: "bg-gradient-to-r from-white to-gray-900",
      textColor: "text-gray-500",
    },
  ];

  const accentColors = [
    { id: "cyan", name: "Cyan", color: "bg-cyan-500" },
    { id: "blue", name: "Biru", color: "bg-blue-500" },
    { id: "green", name: "Hijau", color: "bg-green-500" },
    { id: "purple", name: "Ungu", color: "bg-purple-500" },
    { id: "orange", name: "Oranye", color: "bg-orange-500" },
    { id: "pink", name: "Pink", color: "bg-pink-500" },
  ];

  const [activeAccent, setActiveAccent] = useState("cyan");

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    toast({
      title: "Tema Diubah",
      description: `${themes.find(t => t.id === themeId)?.name} diterapkan`,
    });
  };

  const handleAccentChange = (accentId: string) => {
    setActiveAccent(accentId);
    toast({
      title: "Warna Aksen Diubah",
      description: `Warna ${accentColors.find(a => a.id === accentId)?.name} diterapkan`,
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
              <Palette className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Tema & Tampilan</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Theme Selection */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">Pilih Tema</h3>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                variant="interactive"
                className={activeTheme === theme.id ? 'border-2 border-primary' : ''}
                onClick={() => handleThemeChange(theme.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-full h-16 ${theme.preview} rounded-lg mb-3 flex items-center justify-center border border-border`}>
                    <theme.icon className={`w-6 h-6 ${theme.id === 'dark' ? 'text-white' : theme.id === 'light' ? 'text-gray-900' : 'text-gray-500'}`} />
                  </div>
                  <p className="text-sm font-medium">{theme.name}</p>
                  {activeTheme === theme.id && (
                    <CheckCircle className="w-4 h-4 text-primary mx-auto mt-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accent Color */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Warna Aksen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-3">
              {accentColors.map((accent) => (
                <button
                  key={accent.id}
                  onClick={() => handleAccentChange(accent.id)}
                  className={`w-12 h-12 ${accent.color} rounded-xl flex items-center justify-center transition-transform hover:scale-110 ${
                    activeAccent === accent.id ? 'ring-2 ring-white ring-offset-2 ring-offset-background' : ''
                  }`}
                >
                  {activeAccent === accent.id && (
                    <CheckCircle className="w-5 h-5 text-white" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-secondary rounded-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl" />
                <div className="flex-1">
                  <div className="h-3 bg-foreground/20 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-foreground/10 rounded w-1/2" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="glow" size="sm">Tombol Utama</Button>
                <Button variant="outline" size="sm">Sekunder</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ThemePreviewPage;
