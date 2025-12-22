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
import GenericDetailPage from "./pages/GenericDetailPage";
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
import ExpertKnowledgePage from "./pages/ExpertKnowledgePage";

// New dedicated pages (to avoid falling into GenericDetailPage)
import AIModuleInfoPage from "./pages/AIModuleInfoPage";
import ValueInnovationPage from "./pages/ValueInnovationPage";
import ValueTrustPage from "./pages/ValueTrustPage";
import ValueCommunityPage from "./pages/ValueCommunityPage";
import ValueExcellencePage from "./pages/ValueExcellencePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import LicensesPage from "./pages/LicensesPage";

import ExpertOverviewPage from "./pages/ExpertOverviewPage";
import ExpertWhyPage from "./pages/ExpertWhyPage";
import ExpertActionPage from "./pages/ExpertActionPage";
import ExpertSettingsPage from "./pages/ExpertSettingsPage";
import ExpertAddRulePage from "./pages/ExpertAddRulePage";
import ExpertRuleDetailPage from "./pages/ExpertRuleDetailPage";

import CVObjectDetailPage from "./pages/CVObjectDetailPage";
import CVAlertDetailPage from "./pages/CVAlertDetailPage";
import CVBoundarySettingsPage from "./pages/CVBoundarySettingsPage";
import CVBoundaryDetailPage from "./pages/CVBoundaryDetailPage";
import CVAddBoundaryPage from "./pages/CVAddBoundaryPage";

import SensorDoorSettingsPage from "./pages/SensorDoorSettingsPage";
import LockAllDoorsPage from "./pages/LockAllDoorsPage";
import UnlockConfirmPage from "./pages/UnlockConfirmPage";
import DoorDetailPage from "./pages/DoorDetailPage";
import DoorLogsPage from "./pages/DoorLogsPage";
import DoorLogDetailPage from "./pages/DoorLogDetailPage";

import MotionSettingsPage from "./pages/MotionSettingsPage";
import MotionCalibrationPage from "./pages/MotionCalibrationPage";
import MotionHistoryPage from "./pages/MotionHistoryPage";
import MotionDetailPage from "./pages/MotionDetailPage";
import SensorMotionSettingsPage from "./pages/SensorMotionSettingsPage";

import CameraSettingsPage from "./pages/CameraSettingsPage";
import CameraFullscreenPage from "./pages/CameraFullscreenPage";
import CameraDetailPage from "./pages/CameraDetailPage";
import CameraRecordingsPage from "./pages/CameraRecordingsPage";

import RateAppPage from "./pages/RateAppPage";
import DLStrangersPage from "./pages/DLStrangersPage";
import MLModelInfoPage from "./pages/MLModelInfoPage";
import NotificationHistoryPage from "./pages/NotificationHistoryPage";

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
          <Route path="/expert-knowledge" element={<ExpertKnowledgePage />} />
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
          <Route path="/help-faq" element={<HelpFaqPage />} />
          <Route path="/about-app" element={<AboutAppPage />} />
          <Route path="/logout-confirm" element={<LogoutConfirmPage />} />

          {/* About / Legal */}
          <Route path="/rate-app" element={<RateAppPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/licenses" element={<LicensesPage />} />

          {/* About module details */}
          <Route path="/ai-module-info/:id" element={<AIModuleInfoPage />} />

          {/* Values */}
          <Route path="/value-innovation" element={<ValueInnovationPage />} />
          <Route path="/value-trust" element={<ValueTrustPage />} />
          <Route path="/value-community" element={<ValueCommunityPage />} />
          <Route path="/value-excellence" element={<ValueExcellencePage />} />

          {/* Expert System */}
          <Route path="/expert-overview" element={<ExpertOverviewPage />} />
          <Route path="/expert-why/:id" element={<ExpertWhyPage />} />
          <Route path="/expert-action/:id" element={<ExpertActionPage />} />
          <Route path="/expert-settings" element={<ExpertSettingsPage />} />
          <Route path="/expert-add-rule" element={<ExpertAddRulePage />} />
          <Route path="/expert-rule/:id" element={<ExpertRuleDetailPage />} />

          {/* Computer Vision */}
          <Route path="/cv-object/:id" element={<CVObjectDetailPage />} />
          <Route path="/cv-alert/:id" element={<CVAlertDetailPage />} />
          <Route path="/cv-boundary-settings" element={<CVBoundarySettingsPage />} />
          <Route path="/cv-boundary/:id" element={<CVBoundaryDetailPage />} />
          <Route path="/cv-add-boundary" element={<CVAddBoundaryPage />} />

          {/* Sensor Door */}
          <Route path="/sensor-door-settings" element={<SensorDoorSettingsPage />} />
          <Route path="/lock-all-doors" element={<LockAllDoorsPage />} />
          <Route path="/unlock-confirm" element={<UnlockConfirmPage />} />
          <Route path="/door-detail/:id" element={<DoorDetailPage />} />
          <Route path="/door-logs" element={<DoorLogsPage />} />
          <Route path="/door-log/:id" element={<DoorLogDetailPage />} />

          {/* Sensor Motion */}
          <Route path="/sensor-motion/:id/settings" element={<SensorMotionSettingsPage />} />
          <Route path="/motion-history" element={<MotionHistoryPage />} />
          <Route path="/motion-detail/:id" element={<MotionDetailPage />} />
          <Route path="/motion-settings" element={<MotionSettingsPage />} />
          <Route path="/motion-calibration" element={<MotionCalibrationPage />} />

          {/* Camera */}
          <Route path="/camera-settings" element={<CameraSettingsPage />} />
          <Route path="/camera-fullscreen/:id" element={<CameraFullscreenPage />} />
          <Route path="/camera-detail/:id" element={<CameraDetailPage />} />
          <Route path="/camera-recordings" element={<CameraRecordingsPage />} />

          {/* Notifications */}
          <Route path="/dl-strangers" element={<DLStrangersPage />} />
          <Route path="/ml-model-info" element={<MLModelInfoPage />} />
          <Route path="/notification-history" element={<NotificationHistoryPage />} />

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
