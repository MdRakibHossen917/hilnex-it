// src/hooks/usePageTracking.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    });
  }, [location]);
}
