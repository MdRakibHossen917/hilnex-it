import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FreeConsultationAndFloatingContactButton from "../Components/FreeConsultationAndFloatingContactButton/FreeConsultationAndFloatingContactButton.jsx";
import ScrollProgressBar from "../Components/Shared/ScrollProgressBar/ScrollProgressBar.jsx";
import MenuButton from "../Components/Shared/MenuButton/MenuButton.jsx";
import Navbar from "../Components/Shared/Navbar/Navbar.jsx";
import Footer from "../Components/Shared/Footer/Footer.jsx";
import LoadingSpinner from "../Components/Shared/LoadingSpinner/LoadingSpinner.jsx";
import SubscribePopup from "../Components/SubscribePopup/SubscribePopup.jsx";

import usePageTracking from "../hooks/usePageTracking.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const RootLayout = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const { pathname } = location;
  const [initialLoading, setInitialLoading] = useState(true);

  usePageTracking(); // SPA pageview tracking

  useEffect(() => {
    if (window.fbq) window.fbq("track", "PageView");
    if (window.gtag) window.gtag("config", "AW-17627716456", { page_path: pathname });
  }, [pathname]);

  const hideOnPages = ["/login", "/register"];
  const shouldHide = hideOnPages.includes(pathname);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  const isRouteLoading = navigation.state === "loading";
  if (initialLoading) return <LoadingSpinner />;

  return (
    <>
   
      <ScrollToTop />
      {!shouldHide && <Navbar />}
      {isRouteLoading && <LoadingSpinner />}
      <Outlet />
      {!shouldHide && <Footer />}
      {!shouldHide && (
        <>
          {/* <SubscribePopup /> */}
          <FreeConsultationAndFloatingContactButton />
          <ScrollProgressBar />
          <MenuButton />
        </>
      )}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
  );
};

export default RootLayout;
