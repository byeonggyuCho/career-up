import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
// import Layout from "./components/layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        {/* <Layout> */}
        <AppRoutingManager type="app-job" />
        {/* </Layout> */}
      </Auth0ClientProvider>
    ),
    errorElement: <div>App job Error</div>,
    children: [
      {
        index: true,
        element: <div>잡 홈</div>,
      },
    ],
  },
];
