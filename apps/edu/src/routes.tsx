import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import ListPage from "./pages/list-page";
import DetailPage from "./pages/detail-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
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
