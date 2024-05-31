import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-posting" />,
    errorElement: <div>App posting Error</div>,
    children: [
      {
        index: true,
        element: <div>app routing root</div>,
      },
      {
        path: "1",
        element: <div>app routing Page 1</div>,
      },
    ],
  },
];
