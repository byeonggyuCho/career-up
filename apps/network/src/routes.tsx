import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import { RecoilRoot } from "recoil";
import Layout from "./components/layout";
import HomPage from "./pages/home-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type="app-network" />
          </Layout>
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App network Error</div>,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
    ],
  },
];
