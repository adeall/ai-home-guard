import { useNavigate } from "react-router-dom";
import { Settings, ChevronRight, Lock, Bell, User } from "lucide-react";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { Card, CardContent } from "@/components/ui/card";

const AccountSettingsPage = () => {
  const navigate = useNavigate();

  const items = [
    { icon: User, label: "Edit Profil", route: "/edit-profile" },
    { icon: Lock, label: "Keamanan Akun", route: "/account-security" },
    { icon: Bell, label: "Preferensi Notifikasi", route: "/notification-settings" },
  ];

  return (
    <PageScaffold
      title="Pengaturan Akun"
      subtitle="Kelola preferensi dan keamanan"
      icon={<Settings className="w-5 h-5 text-primary" />}
      metaDescription="Pengaturan akun SafeHome: edit profil, keamanan akun, dan preferensi notifikasi." 
    >
      <section className="space-y-2">
        {items.map((it) => (
          <Card key={it.label} variant="interactive" onClick={() => navigate(it.route)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <it.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{it.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </section>
    </PageScaffold>
  );
};

export default AccountSettingsPage;
