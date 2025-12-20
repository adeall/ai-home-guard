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
import ExpertDecisionPage from "./pages/ExpertDecisionPage";
import MLTrainingPage from "./pages/MLTrainingPage";
import FaceDetailPage from "./pages/FaceDetailPage";
import CameraViewPage from "./pages/CameraViewPage";
import NotificationDetailPage from "./pages/NotificationDetailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerifyOTPPage from "./pages/VerifyOTPPage";
import FAQPage from "./pages/FAQPage";
import SmartDetailPage from "./pages/SmartDetailPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import AccountSecurityPage from "./pages/AccountSecurityPage";
import ConnectedDevicesPage from "./pages/ConnectedDevicesPage";
import SensorManagementPage from "./pages/SensorManagementPage";
import AlarmSensitivityPage from "./pages/AlarmSensitivityPage";
import SecurityModesPage from "./pages/SecurityModesPage";
import NotificationSettingsPage from "./pages/NotificationSettingsPage";
import ThemePreviewPage from "./pages/ThemePreviewPage";
import LanguageSettingsPage from "./pages/LanguageSettingsPage";
import HelpFaqPage from "./pages/HelpFaqPage";
import AboutAppPage from "./pages/AboutAppPage";
import LogoutConfirmPage from "./pages/LogoutConfirmPage";

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
          
          {/* Detail Pages */}
          <Route path="/expert-decision/:id" element={<ExpertDecisionPage />} />
          <Route path="/ml-training" element={<MLTrainingPage />} />
          <Route path="/dl-face-detail/:id" element={<FaceDetailPage />} />
          <Route path="/camera-view/:id" element={<CameraViewPage />} />
          <Route path="/notification/:id" element={<NotificationDetailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-otp" element={<VerifyOTPPage />} />
          <Route path="/faq" element={<FAQPage />} />
          
          {/* Settings Detail Pages */}
          <Route path="/profile-detail" element={<ProfileDetailPage />} />
          <Route path="/account-security" element={<AccountSecurityPage />} />
          <Route path="/connected-devices" element={<ConnectedDevicesPage />} />
          <Route path="/sensor-management" element={<SensorManagementPage />} />
          <Route path="/alarm-sensitivity" element={<AlarmSensitivityPage />} />
          <Route path="/security-modes" element={<SecurityModesPage />} />
          <Route path="/notification-settings" element={<NotificationSettingsPage />} />
          <Route path="/theme-preview" element={<ThemePreviewPage />} />
          <Route path="/language-settings" element={<LanguageSettingsPage />} />
          <Route path="/help-faq" element={<HelpFaqPage />} />
          <Route path="/about-app" element={<AboutAppPage />} />
          <Route path="/logout-confirm" element={<LogoutConfirmPage />} />
          
          {/* Smart dynamic detail routes for all interactive elements */}
          <Route path="/:page" element={<SmartDetailPage />} />
          <Route path="/:page/:id" element={<SmartDetailPage />} />
          <Route path="/:page/:id/:subpage" element={<SmartDetailPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
