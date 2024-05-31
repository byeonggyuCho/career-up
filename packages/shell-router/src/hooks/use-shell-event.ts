import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export class AppNavigateEvent extends CustomEvent<string> {
  constructor(type: string, eventInitDict?: CustomEventInit<string>) {
    super(type, eventInitDict);
  }
}

/**
 * 쉘에서 사용
 * 쉘의 변경에 따라 이벤트를 내보내고 마이크로 앱의 변경에 따라 쉘에서 이벤트를 수신한다.
 */
export default function useShellEvent(type: string, basename: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const appNavigateEventHandler = (event: Event) => {
      const pathname = (event as AppNavigateEvent).detail;
      const newPathname =
        pathname === "/" ? basename : `${basename}${pathname}`;

      if (newPathname === location.pathname) return;

      navigate(newPathname);
    };
    const eventType = `[${type}] navigated`;
    window.addEventListener(eventType, appNavigateEventHandler);

    return () => {
      window.removeEventListener(eventType, appNavigateEventHandler);
    };
  }, [basename, location, navigate, type]);

  useEffect(() => {
    if (location.pathname.startsWith(basename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(basename, ""),
        })
      );
    }
  }, [basename, location]);
}
