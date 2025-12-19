import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3, Play, CheckCircle, Database, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MLTrainingPage = () => {
  const navigate = useNavigate();
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");

  const stages = [
    { name: "Mengambil Data", progress: 20 },
    { name: "Preprocessing", progress: 40 },
    { name: "Training Model", progress: 70 },
    { name: "Validasi", progress: 90 },
    { name: "Selesai", progress: 100 },
  ];

  const trainingHistory = [
    { id: 1, date: "2024-01-15", accuracy: "94.5%", duration: "12 menit", status: "success" },
    { id: 2, date: "2024-01-10", accuracy: "93.2%", duration: "15 menit", status: "success" },
    { id: 3, date: "2024-01-05", accuracy: "91.8%", duration: "18 menit", status: "success" },
  ];

  const startTraining = () => {
    setIsTraining(true);
    setProgress(0);
    
    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setStage(stages[currentStage].name);
        setProgress(stages[currentStage].progress);
        currentStage++;
      } else {
        clearInterval(interval);
        setIsTraining(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-background" />
            </div>
            <div>
              <h1 className="font-bold">Latih Model</h1>
              <p className="text-xs text-muted-foreground">Machine Learning Training</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Training Status */}
        <Card variant="glow">
          <CardContent className="p-6">
            {isTraining ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Training Berlangsung</h3>
                  <span className="text-primary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-sm text-muted-foreground text-center">{stage}</p>
              </div>
            ) : progress === 100 ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Training Selesai!</h3>
                <p className="text-muted-foreground">Model berhasil diperbarui dengan akurasi 95.2%</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Siap untuk Training</h3>
                <p className="text-muted-foreground mb-4">Latih ulang model dengan data terbaru</p>
                <Button variant="glow" onClick={startTraining}>
                  <Play className="w-5 h-5" />
                  Mulai Training
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Model Info */}
        <div className="grid grid-cols-2 gap-3">
          <Card variant="interactive" onClick={() => navigate('/ml-dataset')}>
            <CardContent className="p-4 text-center">
              <Database className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">12,847</p>
              <p className="text-xs text-muted-foreground">Data Records</p>
            </CardContent>
          </Card>
          <Card variant="interactive" onClick={() => navigate('/ml-accuracy')}>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">94.5%</p>
              <p className="text-xs text-muted-foreground">Akurasi Saat Ini</p>
            </CardContent>
          </Card>
        </div>

        {/* Training History */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Riwayat Training</h3>
          <div className="space-y-2">
            {trainingHistory.map((history) => (
              <Card 
                key={history.id} 
                variant="interactive"
                onClick={() => navigate(`/ml-training-detail/${history.id}`)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">{history.date}</p>
                      <p className="text-sm text-muted-foreground">Akurasi: {history.accuracy}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{history.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Settings */}
        <Button variant="outline" className="w-full" onClick={() => navigate('/ml-settings')}>
          Pengaturan Training Lanjutan
        </Button>
      </main>
    </div>
  );
};

export default MLTrainingPage;
