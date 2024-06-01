import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import create from "./redux/create";
import { Provider } from "react-redux";
import ListPage from "./pages/list-page";
import DetailPage from "./pages/detail-page";

const store = create();

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type="app-job" />
          </Layout>
        </Auth0ClientProvider>
      </Provider>
    ),
    errorElement: <div>App job Error</div>,
    children: [
      {
        index: true,
        element: <ListPage />,
      },
      { path: ":id", element: <DetailPage /> },
    ],
  },
];
