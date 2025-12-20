import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  Bell,
  Brain,
  Camera,
  ChevronRight,
  Cpu,
  Eye,
  FileText,
  HelpCircle,
  Info,
  Lock,
  Settings,
  Shield,
  Star,
  User,
  Wifi,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type QuickLink = { label: string; route: string };

type PagePreset = {
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  quickLinks?: QuickLink[];
  tips?: string[];
};

const titleFromSlug = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const buildPreset = (page: string, id?: string, subpage?: string): PagePreset => {
  // Exact routes (menu utama)
  switch (page) {
    case "privacy-policy":
    case "privacy":
      return {
        title: "Kebijakan Privasi",
        subtitle: "SafeHome",
        description:
          "Ringkasan bagaimana SafeHome mengelola data Anda (contoh konten).",
        icon: FileText,
        tips: [
          "Data yang tampil di demo ini tidak disimpan ke server.",
          "Anda bisa menambahkan detail kebijakan sesuai kebutuhan.",
        ],
      };

    case "terms-of-service":
    case "terms":
      return {
        title: "Syarat & Ketentuan",
        subtitle: "SafeHome",
        description:
          "Aturan penggunaan aplikasi SafeHome (contoh konten) agar penggunaan tetap aman dan tertib.",
        icon: FileText,
        tips: [
          "Tambahkan kebijakan pembatalan, batasan tanggung jawab, dan privasi.",
          "Cantumkan kontak resmi untuk pertanyaan legal.",
        ],
      };

    case "licenses":
      return {
        title: "Lisensi Open Source",
        subtitle: "SafeHome",
        description:
          "Daftar lisensi komponen open-source yang digunakan aplikasi (placeholder).",
        icon: FileText,
        quickLinks: [
          { label: "Tentang Aplikasi", route: "/about-app" },
          { label: "Bantuan & FAQ", route: "/help-faq" },
        ],
      };

    case "rate-app":
      return {
        title: "Beri Rating",
        subtitle: "Terima kasih",
        description:
          "Berikan penilaian untuk membantu kami meningkatkan pengalaman pengguna (placeholder).",
        icon: Star,
        quickLinks: [
          { label: "Kembali ke Dashboard", route: "/dashboard" },
          { label: "Tentang SafeHome", route: "/about" },
        ],
      };

    case "ai-module-info":
      return {
        title: "Info Modul AI",
        subtitle: id ? `Modul #${Number(id) + 1}` : "Detail modul",
        description:
          "Halaman ini menampilkan ringkasan modul AI yang dipilih, tujuan, dan contoh outputnya (placeholder).",
        icon: Cpu,
        quickLinks: [
          { label: "Expert System", route: "/ai-expert" },
          { label: "Machine Learning", route: "/ai-ml" },
          { label: "Deep Learning", route: "/ai-deep" },
          { label: "Computer Vision", route: "/ai-vision" },
        ],
      };

    case "value-innovation":
      return {
        title: "Nilai: Inovasi",
        subtitle: "Visi & Misi",
        description:
          "Kami terus memperbaiki model, sensor, dan pengalaman pengguna untuk keamanan yang lebih proaktif.",
        icon: Info,
        quickLinks: [{ label: "Kembali ke Visi & Misi", route: "/vision" }],
      };

    case "value-trust":
      return {
        title: "Nilai: Kepercayaan",
        subtitle: "Visi & Misi",
        description:
          "Keamanan data dan transparansi menjadi fondasi, agar pengguna merasa aman dan percaya.",
        icon: Shield,
        quickLinks: [{ label: "Kembali ke Visi & Misi", route: "/vision" }],
      };

    case "value-community":
      return {
        title: "Nilai: Komunitas",
        subtitle: "Visi & Misi",
        description:
          "Kami membangun ekosistem keamanan rumah yang kolaboratif bersama keluarga dan komunitas.",
        icon: User,
        quickLinks: [{ label: "Kembali ke Visi & Misi", route: "/vision" }],
      };

    case "value-excellence":
      return {
        title: "Nilai: Keunggulan",
        subtitle: "Visi & Misi",
        description:
          "Standar kualitas tinggi untuk deteksi, notifikasi, dan reliability perangkat.",
        icon: Settings,
        quickLinks: [{ label: "Kembali ke Visi & Misi", route: "/vision" }],
      };

    case "security-history":
      return {
        title: "Riwayat Keamanan",
        subtitle: "Profil",
        description:
          "Menampilkan ringkasan riwayat kejadian keamanan, alarm, dan deteksi terbaru (placeholder).",
        icon: Shield,
        quickLinks: [
          { label: "Analisis Keamanan", route: "/security-analysis" },
          { label: "Notifikasi", route: "/notifications" },
        ],
      };

    case "account-settings":
      return {
        title: "Pengaturan Akun",
        subtitle: "Profil",
        description:
          "Atur preferensi akun, informasi dasar, dan pengaturan umum lainnya (placeholder).",
        icon: Settings,
        quickLinks: [
          { label: "Keamanan Akun", route: "/account-security" },
          { label: "Profil Detail", route: "/profile-detail" },
        ],
      };

    case "edit-avatar":
      return {
        title: "Ubah Avatar",
        subtitle: "Profil",
        description:
          "Pilih foto profil baru atau gunakan avatar default (placeholder).",
        icon: User,
        tips: [
          "Integrasi upload file bisa ditambahkan bila diperlukan.",
          "Untuk sekarang, halaman ini hanya contoh UI.",
        ],
      };

    case "edit-profile":
      return {
        title: "Edit Profil",
        subtitle: "Profil",
        description:
          "Perbarui data pengguna seperti nama, kontak, dan alamat (placeholder).",
        icon: User,
        quickLinks: [{ label: "Kembali ke Profil", route: "/profile" }],
      };

    case "notification-history":
      return {
        title: "Riwayat Notifikasi",
        subtitle: "Notifikasi",
        description:
          "Daftar notifikasi lama untuk audit dan penelusuran kejadian (placeholder).",
        icon: Bell,
        quickLinks: [{ label: "Pengaturan Notifikasi", route: "/notification-settings" }],
      };

    case "add-sensor":
      return {
        title: "Tambah Sensor",
        subtitle: "Perangkat",
        description:
          "Panduan pairing sensor baru ke sistem SafeHome (placeholder).",
        icon: Wifi,
        quickLinks: [{ label: "Kelola Sensor", route: "/sensor-management" }],
      };

    case "network-status":
      return {
        title: "Status Jaringan",
        subtitle: "Analisis Keamanan",
        description:
          "Ringkasan kualitas koneksi, latensi, dan rekomendasi perbaikan (placeholder).",
        icon: Wifi,
        tips: [
          "Cek router/WiFi mesh dan pastikan kamera berada dalam jangkauan.",
          "Pertimbangkan mode hemat data untuk koneksi lambat.",
        ],
      };

    case "live-chat":
    case "support-chat":
      return {
        title: "Live Chat Support",
        subtitle: "Bantuan",
        description:
          "Hubungi tim support via live chat (placeholder).",
        icon: HelpCircle,
        quickLinks: [{ label: "Kembali ke Bantuan", route: "/help-faq" }],
      };

    case "email-support":
    case "support-email":
      return {
        title: "Dukungan via Email",
        subtitle: "Bantuan",
        description:
          "Kirim email ke support@safehome.id (placeholder).",
        icon: HelpCircle,
        quickLinks: [{ label: "Kembali ke Bantuan", route: "/help-faq" }],
      };

    case "phone-support":
    case "support-call":
      return {
        title: "Dukungan via Telepon",
        subtitle: "Bantuan",
        description:
          "Hubungi 021-1234-5678 untuk bantuan (placeholder).",
        icon: HelpCircle,
        quickLinks: [{ label: "Kembali ke Bantuan", route: "/help-faq" }],
      };

    default:
      break;
  }

  // Prefix-based routes (banyak item klik di dalam halaman)
  if (page.startsWith("expert-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Expert System",
      description:
        "Detail fitur Expert System (placeholder) untuk membantu memahami hasil analisis dan rekomendasi.",
      icon: Cpu,
      quickLinks: [
        { label: "Kembali ke Expert System", route: "/ai-expert" },
        { label: "Analisis Keamanan", route: "/security-analysis" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Gunakan halaman ini untuk menampilkan alasan/aturan yang dipakai."]
        : ["Gunakan halaman ini untuk ringkasan aturan, fakta, dan rekomendasi."],
    };
  }

  if (page.startsWith("ml-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Machine Learning",
      description:
        "Detail prediksi, pola risiko, atau informasi model ML (placeholder).",
      icon: Cpu,
      quickLinks: [
        { label: "Kembali ke Machine Learning", route: "/ai-ml" },
        { label: "Latih Model", route: "/ml-training" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Tambahkan grafik/penjelasan faktor risiko di sini."]
        : ["Tambahkan grafik dan detail metrik model di sini."],
    };
  }

  if (page.startsWith("dl-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Deep Learning",
      description:
        "Detail deteksi wajah/aktivitas dan tingkat keyakinan model (placeholder).",
      icon: Brain,
      quickLinks: [
        { label: "Kembali ke Deep Learning", route: "/ai-deep" },
        { label: "Lihat Wajah", route: "/dl-faces-registered" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Gunakan halaman ini untuk menampilkan gambar/rekaman dan confidence."]
        : ["Gunakan halaman ini untuk daftar deteksi dan ringkasan statistik."],
    };
  }

  if (page.startsWith("cv-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Computer Vision",
      description:
        "Detail objek terdeteksi dan pengaturan batas virtual (placeholder).",
      icon: Eye,
      quickLinks: [
        { label: "Kembali ke Computer Vision", route: "/ai-vision" },
        { label: "Kamera Live", route: "/camera-live" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Tampilkan snapshot objek, lokasi, dan timestamp di sini."]
        : ["Tampilkan daftar boundary aktif dan aturan alert."],
    };
  }

  if (page.startsWith("camera-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Kamera",
      description:
        "Halaman kamera (placeholder) untuk fullscreen, rekaman, detail kamera, atau pengaturan.",
      icon: Camera,
      quickLinks: [
        { label: "Kembali ke Kamera Live", route: "/camera-live" },
        { label: "Pengaturan", route: "/camera-settings" },
      ],
      tips: id
        ? ["ID kamera: " + id, "Tampilkan feed, status, dan opsi rekaman di sini."]
        : ["Tampilkan daftar kamera dan opsi pengaturan."],
    };
  }

  if (page.startsWith("door-") || page === "sensor-door-settings" || page === "lock-all-doors" || page === "unlock-confirm") {
    return {
      title: titleFromSlug(page),
      subtitle: "Sensor Pintu",
      description:
        "Detail sensor pintu, log, penguncian massal, dan pengaturan (placeholder).",
      icon: Lock,
      quickLinks: [
        { label: "Kembali ke Sensor Pintu", route: "/sensor-door" },
        { label: "Analisis Keamanan", route: "/security-analysis" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Gunakan halaman ini untuk menampilkan detail pintu atau log tertentu."]
        : ["Gunakan halaman ini untuk pengaturan dan tindakan cepat."],
    };
  }

  if (page.startsWith("motion-") || page === "motion-history" || page === "motion-settings" || page === "motion-calibration" || (page === "sensor-motion" && subpage === "settings")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Sensor Gerak",
      description:
        "Detail histori gerakan, pengaturan sensor, dan kalibrasi (placeholder).",
      icon: Activity,
      quickLinks: [
        { label: "Kembali ke Sensor Gerak", route: "/sensor-motion" },
        { label: "Analisis Keamanan", route: "/security-analysis" },
      ],
      tips: id
        ? ["ID konteks: " + id, "Tampilkan event gerakan, lokasi, dan severity di sini."]
        : ["Tampilkan ringkasan sensor dan saran sensitivitas."],
    };
  }

  if (page.startsWith("activity-") || page.startsWith("event-")) {
    return {
      title: titleFromSlug(page),
      subtitle: "Aktivitas",
      description:
        "Riwayat aktivitas dan detail event keamanan (placeholder).",
      icon: Activity,
      quickLinks: [
        { label: "Kembali ke Analisis Keamanan", route: "/security-analysis" },
        { label: "Statistik", route: "/statistics" },
      ],
      tips: id
        ? ["ID event: " + id, "Tampilkan timeline dan sumber sensor di sini."]
        : ["Gunakan halaman ini untuk daftar event dan filter tanggal."],
    };
  }

  // Default fallback (tetap informatif)
  return {
    title: titleFromSlug(page || "detail"),
    subtitle: "Detail",
    description:
      "Halaman detail ini bersifat dinamis. Tambahkan konfigurasi khusus agar konten lebih spesifik untuk menu ini.",
    icon: Info,
    tips: [
      id ? `ID: ${id}` : "",
      "Jika Anda sebutkan menu mana yang masih terasa sama, saya bisa buat konten yang benar-benar spesifik.",
    ].filter(Boolean),
  };
};

const SmartDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { page = "detail", id, subpage } = useParams();

  const preset = useMemo(() => buildPreset(page, id, subpage), [page, id, subpage]);

  useEffect(() => {
    const fullTitle = `${preset.title} | SafeHome`;
    document.title = fullTitle;

    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) metaDesc.content = preset.description;

    // Canonical
    const canonicalHref = `${window.location.origin}${location.pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [preset.title, preset.description, location.pathname]);

  const Icon = preset.icon;

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Kembali">
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h1 className="font-bold truncate">{preset.title}</h1>
              <p className="text-xs text-muted-foreground truncate">
                {preset.subtitle}{id ? ` • ID: ${id}` : ""}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <section aria-label="Ringkasan">
          <Card variant="glow">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-2">Ringkasan</h2>
              <p className="text-muted-foreground">{preset.description}</p>

              {preset.tips?.length ? (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Catatan</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {preset.tips.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </section>

        {preset.quickLinks?.length ? (
          <section aria-label="Aksi cepat">
            <h2 className="text-lg font-semibold mb-3">Aksi Cepat</h2>
            <div className="space-y-2">
              {preset.quickLinks.map((l, i) => (
                <Card key={i} variant="interactive" onClick={() => navigate(l.route)}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium">{l.label}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        <section aria-label="Navigasi terkait">
          <h2 className="text-lg font-semibold mb-3">Halaman Terkait</h2>
          <div className="space-y-2">
            {[
              { label: "Dashboard", route: "/dashboard" },
              { label: "Notifikasi", route: "/notifications" },
              { label: "Pengaturan", route: "/settings" },
            ].map((l, i) => (
              <Card key={i} variant="interactive" onClick={() => navigate(l.route)}>
                <CardContent className="p-4 flex items-center justify-between">
                  <span>{l.label}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SmartDetailPage;
