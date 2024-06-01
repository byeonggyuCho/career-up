import { Auth0Client } from "@auth0/auth0-spa-js";
import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

/**
 * 마이크로앱에서 별도로 토큰을 요청하고 있다.
 * app-shell에서 토큰을 공유하는 것과 이 방법을 비교해보기
 */

export const Auth0ClientContext = createContext<Auth0Client | null>(null);

interface Auth0ClientProviderProps {
  options: {
    domain: string;
    clientId: string;
    redirectUri: string;
  };
}

export default function Auth0ClientProvider({
  children,
  options,
}: PropsWithChildren<Auth0ClientProviderProps>) {
  const [authClient] = useState(
    () =>
      new Auth0Client({
        domain: options.domain,
        clientId: options.clientId,
        authorizationParams: {
          redirect_uri: options.redirectUri,
        },
      })
  );

  return (
    <Auth0ClientContext.Provider value={authClient}>
      {children}
    </Auth0ClientContext.Provider>
  );
}
