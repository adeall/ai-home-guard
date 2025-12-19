import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, ChevronRight, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const navigate = useNavigate();

  const faqCategories = [
    {
      category: "Umum",
      questions: [
        { q: "Apa itu SafeHome?", a: "SafeHome adalah aplikasi keamanan rumah berbasis AI yang menyediakan monitoring real-time, deteksi ancaman cerdas, dan kontrol penuh atas sistem keamanan rumah Anda." },
        { q: "Bagaimana cara kerja SafeHome?", a: "SafeHome menggunakan sensor, kamera, dan kecerdasan buatan untuk memantau aktivitas di sekitar rumah Anda. Sistem akan mengirim notifikasi jika mendeteksi aktivitas mencurigakan." },
        { q: "Apakah SafeHome memerlukan internet?", a: "Ya, koneksi internet diperlukan untuk fitur monitoring real-time dan notifikasi. Namun, sistem alarm lokal tetap berfungsi tanpa internet." },
      ]
    },
    {
      category: "Perangkat",
      questions: [
        { q: "Sensor apa saja yang didukung?", a: "SafeHome mendukung sensor pintu/jendela, sensor gerak PIR, kamera IP, dan berbagai sensor IoT lainnya." },
        { q: "Bagaimana cara menambah sensor baru?", a: "Buka menu Pengaturan > Sensor > Tambah Sensor, lalu ikuti petunjuk pairing untuk jenis sensor yang Anda miliki." },
        { q: "Berapa banyak kamera yang bisa ditambahkan?", a: "Tidak ada batasan jumlah kamera. Namun, performa tergantung pada kapasitas bandwidth internet Anda." },
      ]
    },
    {
      category: "AI & Deteksi",
      questions: [
        { q: "Bagaimana AI mengenali wajah?", a: "AI menggunakan deep learning untuk menganalisis fitur wajah. Anda perlu mendaftarkan wajah anggota keluarga agar sistem dapat membedakan antara penghuni dan orang asing." },
        { q: "Seberapa akurat deteksi AI?", a: "Akurasi deteksi wajah mencapai 95%+ dalam kondisi pencahayaan normal. Deteksi objek memiliki akurasi 90%+ untuk objek umum seperti orang, kendaraan, dan hewan." },
        { q: "Apakah bisa mengurangi false alarm?", a: "Ya, sistem terus belajar dari feedback Anda. Tandai alarm palsu untuk meningkatkan akurasi sistem." },
      ]
    },
  ];

  const contactOptions = [
    { icon: MessageCircle, label: "Live Chat", desc: "Chat dengan tim support", route: "/support-chat" },
    { icon: Mail, label: "Email", desc: "support@safehome.id", route: "/support-email" },
    { icon: Phone, label: "Telepon", desc: "021-1234-5678", route: "/support-call" },
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
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold">Bantuan & FAQ</h1>
              <p className="text-xs text-muted-foreground">Pertanyaan yang sering diajukan</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <Card variant="interactive" onClick={() => navigate('/search-help')}>
          <CardContent className="p-4 flex items-center justify-between">
            <p className="text-muted-foreground">Cari pertanyaan...</p>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        {faqCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3">{category.category}</h3>
            <Card>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, i) => (
                  <AccordionItem key={i} value={`${idx}-${i}`} className="border-border">
                    <AccordionTrigger className="px-4 hover:no-underline">
                      <span className="text-left">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        ))}

        {/* Contact Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <div className="space-y-2">
            {contactOptions.map((option, i) => (
              <Card 
                key={i} 
                variant="interactive"
                onClick={() => navigate(option.route)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{option.label}</p>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
