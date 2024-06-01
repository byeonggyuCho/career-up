import type { ConnectionType, MyNetworkType } from "./types";

export async function getMyNetwork(token: string): Promise<MyNetworkType> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/my-network`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

export async function getConnections(token: string): Promise<ConnectionType[]> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/connections`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
