import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useAppEvent(type: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;

      if (location.pathname === pathname) {
        return;
      }

      navigate(pathname);
    };
    const eventType = `[app-shell] navigated`;

    window.addEventListener(eventType, shellNavigationHandler);

    return () => {
      window.removeEventListener(eventType, shellNavigationHandler);
    };
  }, [location, navigate]);

  // 이벤트 발생
  useEffect(() => {
    const eventType = `[${type}] navigated`;
    window.dispatchEvent(
      new CustomEvent(eventType, {
        detail: location.pathname,
      })
    );
  }, [location, type]);
}
