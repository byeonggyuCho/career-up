// 이벤트를 발송함

import { useCallback } from "react";

const eventName = "[shell] navigate";

/**
 * 마이크로 앱에서 쉘로 navigate를 CustomEvent를 통해 요청함
 */
export default function useShellNavigate() {
  const shellNavigate = useCallback((pathname: string) => {
    window.dispatchEvent(
      new CustomEvent(eventName, {
        detail: pathname,
      })
    );
  }, []);

  return shellNavigate;
}
