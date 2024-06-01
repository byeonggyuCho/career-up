import useShellEvent from "./hooks/use-shell-event";
import { injectFactory } from "./injector";
import AppRoutingManager from "./components/app-routing-manager";
import useAuth0Client from "./hooks/use-auth0-client";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import useShellNavigate from "./hooks/use-shell-navigate";
import useShellNavigateListener from "./hooks/use-shell-navigate-listener";
export type * from "./types";

export {
  injectFactory,
  useShellEvent,
  useAuth0Client,
  useShellNavigate,
  useShellNavigateListener,
  AppRoutingManager,
  Auth0ClientProvider,
};

//
