import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Search, ChevronRight, CheckCircle, AlertTriangle, Shield, Clock, Zap, Filter, Plus, Settings, FileText, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ExpertKnowledgePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const rules = [
    { 
      id: 1, 
      name: "Deteksi Penyusup Malam", 
      condition: "JIKA gerakan terdeteksi DAN waktu antara 22:00-06:00 DAN tidak ada penghuni terdaftar", 
      action: "MAKA aktifkan alarm dan kirim notifikasi darurat",
      status: "active",
      priority: "high",
      usageCount: 45
    },
    { 
      id: 2, 
      name: "Pintu Tidak Terkunci", 
      condition: "JIKA pintu tidak terkunci DAN waktu > 23:00 DAN mode malam aktif", 
      action: "MAKA kirim pengingat dan nyalakan lampu teras",
      status: "active",
      priority: "medium",
      usageCount: 128
    },
    { 
      id: 3, 
      name: "Deteksi Kebakaran", 
      condition: "JIKA sensor asap aktif ATAU suhu > 60°C", 
      action: "MAKA aktifkan alarm kebakaran, matikan listrik, dan hubungi pemadam",
      status: "active",
      priority: "critical",
      usageCount: 3
    },
    { 
      id: 4, 
      name: "Penghematan Energi", 
      condition: "JIKA tidak ada gerakan selama 30 menit DAN lampu menyala", 
      action: "MAKA matikan lampu otomatis",
      status: "active",
      priority: "low",
      usageCount: 892
    },
    { 
      id: 5, 
      name: "Kamera Otomatis", 
      condition: "JIKA bel pintu ditekan ATAU gerakan di pintu depan", 
      action: "MAKA rekam video 60 detik dan simpan snapshot",
      status: "active",
      priority: "medium",
      usageCount: 234
    },
    { 
      id: 6, 
      name: "Mode Liburan", 
      condition: "JIKA mode liburan aktif DAN waktu malam", 
      action: "MAKA nyalakan lampu acak untuk simulasi kehadiran",
      status: "inactive",
      priority: "low",
      usageCount: 12
    },
  ];

  const facts = [
    { id: 1, category: "Sensor", fact: "Sensor pintu depan: TERKUNCI", updatedAt: "2 menit lalu", confidence: 100 },
    { id: 2, category: "Sensor", fact: "Sensor jendela dapur: TERTUTUP", updatedAt: "5 menit lalu", confidence: 100 },
    { id: 3, category: "Waktu", fact: "Waktu saat ini: MALAM (22:00-06:00)", updatedAt: "Sekarang", confidence: 100 },
    { id: 4, category: "Penghuni", fact: "Penghuni terdaftar: 4 orang", updatedAt: "1 jam lalu", confidence: 95 },
    { id: 5, category: "Cuaca", fact: "Kondisi cuaca: HUJAN RINGAN", updatedAt: "30 menit lalu", confidence: 85 },
    { id: 6, category: "Sistem", fact: "Mode keamanan: AKTIF", updatedAt: "3 jam lalu", confidence: 100 },
    { id: 7, category: "Perangkat", fact: "Kamera depan: ONLINE", updatedAt: "1 menit lalu", confidence: 100 },
    { id: 8, category: "Perangkat", fact: "Kamera belakang: ONLINE", updatedAt: "1 menit lalu", confidence: 100 },
    { id: 9, category: "Aktivitas", fact: "Gerakan terakhir: Ruang tamu (15 menit lalu)", updatedAt: "15 menit lalu", confidence: 90 },
    { id: 10, category: "Suhu", fact: "Suhu ruangan: 25°C (Normal)", updatedAt: "10 menit lalu", confidence: 100 },
  ];

  const inferences = [
    { id: 1, conclusion: "Rumah dalam keadaan aman", basedOn: ["Semua pintu terkunci", "Tidak ada aktivitas mencurigakan", "Semua sensor normal"], time: "Baru saja", status: "valid" },
    { id: 2, conclusion: "Tidak perlu tindakan darurat", basedOn: ["Level ancaman rendah", "Sistem berfungsi normal"], time: "5 menit lalu", status: "valid" },
    { id: 3, conclusion: "Rekomendasi aktifkan mode malam", basedOn: ["Waktu sudah malam", "Mode malam belum aktif"], time: "10 menit lalu", status: "pending" },
  ];

  const filteredRules = rules.filter(rule => 
    rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rule.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFacts = facts.filter(fact => 
    fact.fact.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fact.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "bg-red-500/20 text-red-400";
      case "high": return "bg-orange-500/20 text-orange-400";
      case "medium": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-green-500/20 text-green-400";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Basis Pengetahuan</h1>
              <p className="text-xs text-muted-foreground">47 aturan • 156 fakta</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/expert-settings')}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Cari aturan atau fakta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <p className="text-lg font-bold">47</p>
            <p className="text-xs text-muted-foreground">Aturan</p>
          </Card>
          <Card className="p-3 text-center">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Brain className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-lg font-bold">156</p>
            <p className="text-xs text-muted-foreground">Fakta</p>
          </Card>
          <Card className="p-3 text-center">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-lg font-bold">23</p>
            <p className="text-xs text-muted-foreground">Inferensi</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rules">Aturan</TabsTrigger>
            <TabsTrigger value="facts">Fakta</TabsTrigger>
            <TabsTrigger value="inference">Inferensi</TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{filteredRules.length} aturan ditemukan</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/expert-add-rule')}>
                <Plus className="w-4 h-4 mr-1" /> Tambah
              </Button>
            </div>
            {filteredRules.map((rule) => (
              <Card
                key={rule.id}
                variant="interactive"
                onClick={() => navigate(`/expert-rule/${rule.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${rule.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`} />
                      <h4 className="font-medium">{rule.name}</h4>
                    </div>
                    <Badge className={getPriorityColor(rule.priority)}>
                      {rule.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-mono bg-secondary/50 p-2 rounded">
                    {rule.condition}
                  </p>
                  <p className="text-xs text-primary mb-2 font-mono bg-primary/10 p-2 rounded">
                    {rule.action}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      <Zap className="w-3 h-3 inline mr-1" />
                      Digunakan {rule.usageCount}x
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="facts" className="space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{filteredFacts.length} fakta tersimpan</p>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" /> Filter
              </Button>
            </div>
            {filteredFacts.map((fact) => (
              <Card key={fact.id} variant="interactive">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">{fact.category}</Badge>
                      <span className="text-xs text-muted-foreground">{fact.updatedAt}</span>
                    </div>
                    <p className="text-sm font-medium">{fact.fact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-xs px-2 py-1 rounded ${
                      fact.confidence === 100 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {fact.confidence}%
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="inference" className="space-y-3 mt-4">
            <p className="text-sm text-muted-foreground">{inferences.length} inferensi terbaru</p>
            {inferences.map((inf) => (
              <Card key={inf.id} variant="interactive">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {inf.status === "valid" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-400" />
                      )}
                      <h4 className="font-medium">{inf.conclusion}</h4>
                    </div>
                    <span className="text-xs text-muted-foreground">{inf.time}</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-muted-foreground">Berdasarkan:</p>
                    {inf.basedOn.map((basis, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span>{basis}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ExpertKnowledgePage;
