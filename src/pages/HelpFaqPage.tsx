import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HelpFaqPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Bagaimana cara menambahkan sensor baru?",
      answer: "Untuk menambahkan sensor baru, buka menu Pengaturan > Sensor > Tambah Sensor. Pastikan sensor dalam mode pairing dan ikuti instruksi di layar untuk menghubungkan sensor ke sistem SafeHome.",
    },
    {
      id: 2,
      question: "Mengapa saya menerima notifikasi alarm palsu?",
      answer: "Alarm palsu bisa terjadi karena sensitivitas sensor terlalu tinggi. Anda bisa mengatur sensitivitas di Pengaturan > Sensitivitas Alarm. Kurangi sensitivitas untuk menghindari deteksi gerakan kecil seperti hewan peliharaan.",
    },
    {
      id: 3,
      question: "Bagaimana cara mengakses rekaman kamera?",
      answer: "Buka menu Kamera > pilih kamera yang diinginkan > tap ikon Rekaman. Anda bisa melihat rekaman hingga 30 hari terakhir tergantung paket langganan Anda.",
    },
    {
      id: 4,
      question: "Apakah SafeHome bekerja tanpa internet?",
      answer: "SafeHome memerlukan koneksi internet untuk fitur notifikasi dan akses jarak jauh. Namun, sistem alarm lokal tetap berfungsi meskipun tanpa internet.",
    },
    {
      id: 5,
      question: "Bagaimana cara berbagi akses dengan anggota keluarga?",
      answer: "Buka Profil > Kelola Keluarga > Undang Anggota. Masukkan email anggota keluarga dan pilih level akses yang sesuai (Admin, Member, atau Guest).",
    },
    {
      id: 6,
      question: "Apa yang harus dilakukan jika sensor offline?",
      answer: "Periksa baterai sensor dan pastikan dalam jangkauan WiFi. Coba restart sensor dengan melepas dan memasang kembali baterai. Jika masih offline, lakukan re-pairing di Pengaturan > Sensor.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-background" />
            </div>
            <h1 className="font-bold text-lg">Bantuan & FAQ</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cari pertanyaan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground px-1">
            Pertanyaan Umum
          </h3>
          {filteredFaqs.map((faq) => (
            <Card
              key={faq.id}
              variant="glass"
              className="cursor-pointer"
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium">{faq.question}</p>
                  {expandedId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                {expandedId === faq.id && (
                  <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-border">
                    {faq.answer}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Butuh Bantuan Lebih?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate('/live-chat')}
            >
              <MessageCircle className="w-5 h-5 mr-3 text-primary" />
              Live Chat dengan Tim Support
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate('/email-support')}
            >
              <Mail className="w-5 h-5 mr-3 text-primary" />
              Kirim Email: support@safehome.id
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate('/phone-support')}
            >
              <Phone className="w-5 h-5 mr-3 text-primary" />
              Hubungi: 021-1234-5678
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HelpFaqPage;
