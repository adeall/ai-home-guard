import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Send, Mic, MicOff, Bot, User, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
  action?: { label: string; route: string };
}

const ChatbotPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Halo! Saya asisten keamanan SafeHome. Ada yang bisa saya bantu? Anda bisa bertanya tentang kondisi rumah, status sensor, atau memberikan perintah.",
      time: "Baru saja",
    },
  ]);

  const quickQuestions = [
    "Apakah rumah aman?",
    "Ada orang asing tidak?",
    "Status sensor pintu",
    "Aktifkan alarm",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      text: input,
      time: "Baru saja",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse: Message;

      if (input.toLowerCase().includes("aman") || input.toLowerCase().includes("status")) {
        botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "✅ Status rumah Anda saat ini: AMAN. Semua sensor berfungsi normal, pintu depan dan belakang terkunci, serta tidak ada aktivitas mencurigakan terdeteksi dalam 6 jam terakhir.",
          time: "Baru saja",
          action: { label: "Lihat Detail", route: "/security-analysis" },
        };
      } else if (input.toLowerCase().includes("orang asing") || input.toLowerCase().includes("stranger")) {
        botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "⚠️ Dalam 24 jam terakhir, sistem Deep Learning mendeteksi 2 wajah yang tidak terdaftar. Terakhir terdeteksi di depan pagar pada pukul 14:32.",
          time: "Baru saja",
          action: { label: "Lihat Deteksi", route: "/dl-strangers" },
        };
      } else if (input.toLowerCase().includes("pintu") || input.toLowerCase().includes("sensor")) {
        botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "🚪 Status Sensor Pintu:\n• Pintu Depan: Terkunci ✓\n• Pintu Belakang: Terkunci ✓\n• Pintu Garasi: Terkunci ✓\n\nSemua pintu dalam kondisi aman.",
          time: "Baru saja",
          action: { label: "Detail Sensor", route: "/sensor-door" },
        };
      } else if (input.toLowerCase().includes("alarm") || input.toLowerCase().includes("aktifkan")) {
        botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "🔔 Apakah Anda ingin mengaktifkan sistem alarm? Ini akan mengaktifkan semua sensor dan kamera dalam mode siaga tinggi.",
          time: "Baru saja",
          action: { label: "Aktifkan Alarm", route: "/alarm-settings" },
        };
      } else {
        botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "Saya mengerti pertanyaan Anda. Berdasarkan analisis Expert System, kondisi rumah Anda saat ini normal. Apakah ada hal spesifik yang ingin Anda ketahui?",
          time: "Baru saja",
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition simulation
    if (!isListening) {
      setTimeout(() => {
        setInput("Apakah rumah aman?");
        setIsListening(false);
      }, 2000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">SafeHome Assistant</h1>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Online • NLP Aktif
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
          >
            <div className={`flex gap-2 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === "user" ? "bg-primary" : "bg-secondary"
                }`}
              >
                {msg.type === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Bot className="w-4 h-4 text-primary" />
                )}
              </div>
              <div>
                <Card className={msg.type === "user" ? "bg-primary" : "bg-secondary"}>
                  <CardContent className="p-3">
                    <p className={`text-sm whitespace-pre-line ${msg.type === "user" ? "text-primary-foreground" : ""}`}>
                      {msg.text}
                    </p>
                    {msg.action && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => navigate(msg.action!.route)}
                      >
                        {msg.action.label}
                      </Button>
                    )}
                  </CardContent>
                </Card>
                <p className="text-xs text-muted-foreground mt-1 px-1">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Quick Questions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {quickQuestions.map((q, i) => (
          <Button
            key={i}
            variant="outline"
            size="sm"
            className="whitespace-nowrap"
            onClick={() => {
              setInput(q);
            }}
          >
            {q}
          </Button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-card/50 backdrop-blur-xl">
        <div className="flex gap-2">
          <Button
            variant={isListening ? "destructive" : "outline"}
            size="icon"
            onClick={toggleVoice}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pesan atau gunakan suara..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} disabled={!input.trim()}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
