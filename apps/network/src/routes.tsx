import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import { RecoilRoot } from "recoil";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <AppRoutingManager type="app-network" />
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App network Error</div>,
    children: [
      {
        index: true,
        element: <div className="network--text-9xl">네트워크 홈</div>,
      },
    ],
  },
];
