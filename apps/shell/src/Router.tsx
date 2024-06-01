import React, { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { microAppRoute } from "./constants/prefix";
import Layout from "./components/layout";
import Auth0ProviderWIthNavigator from "./components/auto0-provider-with-navigator";
import AppPosting from "./components/app-posting";
import AppEdu from "./components/app-edu";
import AppNetwork from "./components/app-network";
import AppJob from "./components/app-job";

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
        element: <Navigate to={microAppRoute.posting}></Navigate>,
      },
      {
        path: `${microAppRoute.posting}/*`,
        element: <AppPosting />,
      },
      {
        path: `${microAppRoute.edu}/*`,
        element: <AppEdu />,
      },
      {
        path: `${microAppRoute.network}/*`,
        element: <AppNetwork />,
      },
      {
        path: `${microAppRoute.job}/*`,
        element: <AppJob />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
