import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <Layout>
          <AppRoutingManager type="app-network" />
        </Layout>
      </Auth0ClientProvider>
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
