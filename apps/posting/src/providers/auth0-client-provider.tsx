import React from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { PropsWithChildren, createContext } from "react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL || "";

/**
 * 마이크로앱에서 별도로 토큰을 요청하고 있다.
 * app-shell에서 토큰을 공유하는 것과 이 방법을 비교해보기
 */
const auth0Client = new Auth0Client({
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: redirectUri,
  },
});

export const Auth0ClientContext = createContext<Auth0Client>(auth0Client);
export default function Auth0ClientProvider({ children }: PropsWithChildren) {
  return (
    <Auth0ClientContext.Provider value={auth0Client}>
      {children}
    </Auth0ClientContext.Provider>
  );
}
