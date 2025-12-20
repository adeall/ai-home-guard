import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Camera, Mail, Phone, MapPin, Calendar, Edit2, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ProfileDetailPage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ahmad Rizky",
    email: "ahmad.rizky@email.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Keamanan No. 123, Jakarta",
    birthDate: "15 Maret 1990",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profil Disimpan",
      description: "Perubahan profil berhasil disimpan",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="font-bold text-lg">Detail Profil</h1>
          </div>
          <Button
            variant={isEditing ? "glow" : "ghost"}
            size="sm"
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit2 className="w-4 h-4 mr-2" />}
            {isEditing ? "Simpan" : "Edit"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center">
              <User className="w-14 h-14 text-background" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background">
              <Camera className="w-5 h-5 text-background" />
            </button>
          </div>
          <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
          <p className="text-muted-foreground">Member sejak 2023</p>
        </div>

        {/* Profile Fields */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Informasi Pribadi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <User className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Nama Lengkap</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-transparent border-b border-primary outline-none w-full"
                  />
                ) : (
                  <p className="font-medium">{profile.name}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <Mail className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-transparent border-b border-primary outline-none w-full"
                  />
                ) : (
                  <p className="font-medium">{profile.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <Phone className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Nomor Telepon</p>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="bg-transparent border-b border-primary outline-none w-full"
                  />
                ) : (
                  <p className="font-medium">{profile.phone}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Alamat</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="bg-transparent border-b border-primary outline-none w-full"
                  />
                ) : (
                  <p className="font-medium">{profile.address}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Tanggal Lahir</p>
                <p className="font-medium">{profile.birthDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProfileDetailPage;
