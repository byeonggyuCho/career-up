import React, { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { appPostingBaseName } from "./constants/prefix";
import Layout from "./components/layout";

const AppPostingLazy = lazy(() => import("./components/app-posting"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
