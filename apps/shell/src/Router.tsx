import React, { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { appPostingBaseName } from "./constants/prefix";
import Layout from "./components/layout";
import Auth0ProviderWIthNavigator from "./components/auto0-provider-with-navigator";

const AppPostingLazy = lazy(() => import("./components/app-posting"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWIthNavigator>
        <Layout />
      </Auth0ProviderWIthNavigator>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={appPostingBaseName}></Navigate>,
      },
      {
        path: `${appPostingBaseName}/*`,
        element: (
          <Suspense fallback={<div>로딩중</div>}>
            <AppPostingLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
