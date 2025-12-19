import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import VisionPage from "./pages/VisionPage";
import AIExpertSystem from "./pages/AIExpertSystem";
import AIMLSystem from "./pages/AIMLSystem";
import AIDeepLearning from "./pages/AIDeepLearning";
import AIComputerVision from "./pages/AIComputerVision";
import ChatbotPage from "./pages/ChatbotPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import StatisticsPage from "./pages/StatisticsPage";
import ProfilePage from "./pages/ProfilePage";
import SecurityAnalysis from "./pages/SecurityAnalysis";
import SensorDoorPage from "./pages/SensorDoorPage";
import SensorMotionPage from "./pages/SensorMotionPage";
import CameraLivePage from "./pages/CameraLivePage";
import HomeModePage from "./pages/HomeModePage";
import ActivityAnalysisPage from "./pages/ActivityAnalysisPage";
import AlarmSettingsPage from "./pages/AlarmSettingsPage";
import GenericDetailPage from "./pages/GenericDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision" element={<VisionPage />} />
          
          {/* AI Modules */}
          <Route path="/ai-expert" element={<AIExpertSystem />} />
          <Route path="/ai-ml" element={<AIMLSystem />} />
          <Route path="/ai-deep" element={<AIDeepLearning />} />
          <Route path="/ai-vision" element={<AIComputerVision />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          
          {/* Main Features */}
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/security-analysis" element={<SecurityAnalysis />} />
          <Route path="/sensor-door" element={<SensorDoorPage />} />
          <Route path="/sensor-motion" element={<SensorMotionPage />} />
          <Route path="/camera-live" element={<CameraLivePage />} />
          <Route path="/home-mode" element={<HomeModePage />} />
          <Route path="/activity-analysis" element={<ActivityAnalysisPage />} />
          <Route path="/alarm-settings" element={<AlarmSettingsPage />} />
          
          {/* Generic detail routes for all interactive elements */}
          <Route path="/:page" element={<GenericDetailPage />} />
          <Route path="/:page/:id" element={<GenericDetailPage />} />
          <Route path="/:page/:id/:subpage" element={<GenericDetailPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
