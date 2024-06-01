import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";

import { RecoilRoot } from "recoil";
import Layout from "./components/layout";
import HomPage from "./pages/home-page";

const authClientOptions = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL || "",
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider options={authClientOptions}>
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
