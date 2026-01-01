import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, LifeBuoy, ChevronRight } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchHelpPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const items = useMemo(
    () =>
      [
        {
          id: "alarm",
          title: "Alarm tidak berbunyi",
          desc: "Cek mode keamanan & sensitivitas sensor.",
          to: "/alarm-settings",
        },
        {
          id: "notif",
          title: "Notifikasi terlambat",
          desc: "Pastikan izin notifikasi & koneksi stabil.",
          to: "/notification-settings",
        },
        {
          id: "kamera",
          title: "Kamera tidak tampil",
          desc: "Periksa jaringan dan status perangkat.",
          to: "/network-status",
        },
        {
          id: "support",
          title: "Butuh bantuan cepat",
          desc: "Hubungi dukungan melalui chat, email, atau telepon.",
          to: "/help-faq",
        },
      ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) => it.title.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <PageScaffold
      title="Cari Bantuan"
      subtitle="Temukan solusi cepat"
      icon={<Search className="w-5 h-5 text-primary" />}
      metaDescription="Pencarian bantuan SafeHome untuk menemukan solusi cepat dan jalur dukungan."
    >
      <section className="space-y-4">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Kata kunci</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik: alarm, notifikasi, kamera..."
              aria-label="Cari bantuan"
            />
            <Button variant="outline" className="w-full" onClick={() => navigate("/faq")}
              aria-label="Buka halaman FAQ"
            >
              <LifeBuoy className="w-5 h-5" />
              Buka FAQ
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-2">
          {filtered.map((it) => (
            <Card
              key={it.id}
              variant="interactive"
              onClick={() => navigate(it.to)}
              aria-label={`Buka: ${it.title}`}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{it.title}</p>
                  <p className="text-xs text-muted-foreground">{it.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageScaffold>
  );
};

export default SearchHelpPage;
