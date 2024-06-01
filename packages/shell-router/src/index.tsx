import useShellEvent from "./hooks/use-shell-event";
import { injectFactory } from "./injector";
import AppRoutingManager from "./components/app-routing-manager";
import useAuth0Client from "./hooks/use-auth0-client";
import Auth0ClientProvider from "./providers/auth0-client-provider";
export type * from "./types";

export {
  useShellEvent,
  useAuth0Client,
  injectFactory,
  AppRoutingManager,
  Auth0ClientProvider,
};

//
