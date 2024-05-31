import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import HomPage from "./pages/home-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-posting" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App posting Error</div>,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
    ],
  },
];
