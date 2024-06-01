import { useRecoilState } from "recoil";
import { myNetworkAtom } from "../atoms";
import useAuth0Client from "../hooks/use-auth0-client";

import { getMyNetwork } from "../apis";
import { useCallback } from "react";
import MyNetwork from "../components/my-network";
import React from "react";

export default function MyNetworkContainer() {
  const authClient = useAuth0Client();
  const [myNetwork, setMyNetWork] = useRecoilState(myNetworkAtom);

  const fetchNetwork = useCallback(async () => {
    const token = await authClient.getTokenSilently();
    const network = await getMyNetwork(token);
    setMyNetWork(network);
  }, [authClient, setMyNetWork]);

  return <MyNetwork myNetwork={myNetwork} fetchMyNetwork={fetchNetwork} />;
}
