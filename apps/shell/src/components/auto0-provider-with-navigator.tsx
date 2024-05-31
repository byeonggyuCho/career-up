import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth0ProviderWIthNavigator({
  children,
}: PropsWithChildren) {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const isValid = domain && clientId && redirectUri;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!isValid) throw new Error("auth0필수정보가 누락되었습니다.");

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
