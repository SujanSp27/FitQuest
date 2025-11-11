import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to the top whenever the route changes
    // Use multiple methods to ensure it works across all browsers
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Prevent any auto-focus that might cause scrolling
      if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
      }
    };

    // Immediate scroll
    scrollToTop();

    // Also scroll after a brief delay to handle any async rendering
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
