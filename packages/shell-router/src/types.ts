import { RouteObject } from "react-router-dom";
import { injectFactory } from ".";

export type RouterType = "browser" | "memory";

export interface CreateRouterProps {
  type: RouterType;
  routes: RouteObject[];
  basePath?: string;
}

export type InjectFunctionType = ReturnType<typeof injectFactory>;
