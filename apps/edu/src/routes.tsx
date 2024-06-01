import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";

import Layout from "./components/layout";
import ListPage from "./pages/list-page";
import DetailPage from "./pages/detail-page";

const authClientOptions = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL || "",
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider options={authClientOptions}>
        <Layout>
          <AppRoutingManager type="app-edu" />
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App edu Error</div>,
    children: [
      {
        index: true,
        element: <ListPage />,
      },
      {
        path: ":id",
        element: <DetailPage />,
      },
    ],
  },
];
