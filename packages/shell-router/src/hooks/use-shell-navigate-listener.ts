import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const eventName = "[shell] navigate";

/**
 * app-shell에서 이벤트 수신해서 navigate하는 리스너 등록
 */
export default function useShellNavigateListener() {
  const navigate = useNavigate();
  useEffect(() => {
    function shellNavigateListener(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;

      navigate(pathname);
    }

    window.addEventListener(eventName, shellNavigateListener);
    return () => {
      window.removeEventListener(eventName, shellNavigateListener);
    };
  }, [navigate]);
}
