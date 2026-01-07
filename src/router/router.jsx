import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout/DashboardLayout"));

// Pages
const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Services = lazy(() => import("../pages/Services/Services"));
const Solutions = lazy(() => import("../pages/Solutions/Solutions"));
const More = lazy(() => import("../pages/More/More"));
const Package = lazy(() => import("../pages/Package/Package"));
const Error = lazy(() => import("../pages/Error/Error"));

// Services subpages
const WebDevelopment = lazy(() => import("../pages/Services/WebDevelopment/WebDevelopment"));
const SoftwareDevelopment = lazy(() => import("../pages/Services/SoftwareDevelopment/SoftwareDevelopment"));
const GraphicsDesign = lazy(() => import("../pages/Services/GraphicsDesign/GraphicsDesign"));
const DigitalMarketing = lazy(() => import("../pages/Services/DigitalMarketing/DigitalMarketing"));
const ITConsultancy = lazy(() => import("../pages/Services/ITConsultancy/ITConsultancy"));
const AppDevelopment = lazy(() => import("../pages/Services/AppDevelopment/AppDevelopment"));

// Solutions subpages
const HostedPBX = lazy(() => import("../pages/Solutions/HostedPBX/HostedPBX"));
const VPSServer = lazy(() => import("../pages/Solutions/VPSServer/VPSServer"));
const CloudServer = lazy(() => import("../pages/Solutions/CloudServer/CloudServer"));
const DedicatedHosting = lazy(() => import("../pages/Solutions/DedicatedHosting/DedicatedHosting"));
const MuskingSMS = lazy(() => import("../pages/Solutions/MuskingSMS/MuskingSMS"));
const MarketingSoftware = lazy(() => import("../pages/Solutions/MarketingSoftware/MarketingSoftware"));
const PaymentGateway = lazy(() => import("../pages/Solutions/PaymentGateway/PaymentGateway"));

// More pages
const PrivacyPolicy = lazy(() => import("../pages/More/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/More/TermsAndConditions/TermsAndConditions"));
const ContactUs = lazy(() => import("../pages/More/ContactUs/ContactUs"));
const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
const SiteMap = lazy(() => import("../pages/SiteMap/SiteMap"));

// Resources
const Resources = lazy(() => import("../pages/Resources/Resources"));

// Auth pages
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword/ForgotPassword"));

// Dashboard pages
const Client = lazy(() => import("../pages/Dashboard/Client/Client"));
const Files = lazy(() => import("../pages/Dashboard/Files/Files"));
const Finance = lazy(() => import("../pages/Dashboard/Finance/Finance"));
const Reports = lazy(() => import("../pages/Dashboard/Reports/Reports"));
const Projects = lazy(() => import("../pages/Dashboard/Projects/Projects"));
const Employees = lazy(() => import("../pages/Dashboard/Employees/Employees"));
const Settings = lazy(() => import("../pages/Dashboard/Settings/Settings"));
const Messages = lazy(() => import("../pages/Dashboard/Messages/Messages"));


// Protected Wrapper
import { AuthProvider } from "../context/AuthContext";

const ProtectedDashboardLayout = () => (
  <AuthProvider>
    <DashboardLayout />
  </AuthProvider>
);

// Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "services/web-development", element: <WebDevelopment /> },
      { path: "services/software-development", element: <SoftwareDevelopment /> },
      { path: "services/app-development", element: <AppDevelopment /> },
      { path: "services/graphics-design", element: <GraphicsDesign /> },
      { path: "services/digital-marketing", element: <DigitalMarketing /> },
      { path: "services/it-consultancy", element: <ITConsultancy /> },

      { path: "solutions", element: <Solutions /> },
      { path: "solutions/hosted-pbx", element: <HostedPBX /> },
      { path: "solutions/vps-server", element: <VPSServer /> },
      { path: "solutions/cloud-server", element: <CloudServer /> },
      { path: "solutions/dedicated-hosting", element: <DedicatedHosting /> },
      { path: "solutions/musking-sms", element: <MuskingSMS /> },
      { path: "solutions/marketing-software", element: <MarketingSoftware /> },
      { path: "solutions/payment-gateway", element: <PaymentGateway /> },

      { path: "package", element: <Package /> },
      { path: "more", element: <More /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-condition", element: <TermsAndConditions /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "faq-company", element: <FAQ /> },
      { path: "site-map", element: <SiteMap /> },
      { path: "resources", element: <Resources /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <ProtectedDashboardLayout />
      </Suspense>
    ),
    children: [
      { path: "clients", element: <Client /> },
      { path: "files", element: <Files /> },
      { path: "finance", element: <Finance /> },
      { path: "reports", element: <Reports /> },
      { path: "projects", element: <Projects /> },
      { path: "employees", element: <Employees /> },
      { path: "messages", element: <Messages /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
