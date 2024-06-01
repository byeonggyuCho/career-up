// 이벤트를 발송함

import { useCallback } from "react";

const eventName = "[shell] navigate";

/**
 * 마이크로 앱에서 쉘로 navigate를 CustomEvent를 통해 요청함
 * 마이크로 앱에서 다른 마이크로앱의 특정위치로 이동하는 경우
 * @example /posting -> /job/2
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
