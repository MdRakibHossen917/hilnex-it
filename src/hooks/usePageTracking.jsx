// src/hooks/usePageTracking.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Page tracking logic can be added here if needed
    // Removed GTM dataLayer tracking
  }, [location]);
}
