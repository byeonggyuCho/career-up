import { Auth0Client } from "@auth0/auth0-spa-js";
import { useContext } from "react";
import { Auth0ClientContext } from "../providers/auth0-client-provider";

export default function useAuth0Client(): Auth0Client {
  const auth0Client = useContext(Auth0ClientContext);
  return auth0Client;
}
