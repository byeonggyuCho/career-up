import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import React from "react";
import type { RouteObject } from "react-router-dom";

import Layout from "./components/layout";
import create from "./redux/create";
import { Provider } from "react-redux";
import ListPage from "./pages/list-page";
import DetailPage from "./pages/detail-page";

const store = create();
const authClientOptions = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL || "",
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Auth0ClientProvider options={authClientOptions}>
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
