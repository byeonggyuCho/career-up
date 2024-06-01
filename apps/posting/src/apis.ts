import type { PostType, UserType } from "./types";

const serverBaseUrl = "http://localhost:4000";

const createApiClient = (token: string) => {
  return (input: string, init?: RequestInit) =>
    fetch(input, {
      headers: { Authorization: `Bearer ${token}`, ...init?.headers },
      ...init,
    }).then((res) => res.json());
};

export async function getPosts(token: string): Promise<PostType[]> {
  const apiClient = createApiClient(token);
  const posts = await apiClient(`${serverBaseUrl}/posts?_sort=id&_order=decs`);
  return posts;
}
export async function createPost(
  token: string,
  body: { message: string }
): Promise<void> {
  const apiClient = createApiClient(token);
  await apiClient(`${serverBaseUrl}/posts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function removePost(token: string, id: number): Promise<void> {
  const apiClient = createApiClient(token);
  return apiClient(`${serverBaseUrl}/posts/${id}`, {
    method: "DELETE",
  });
}

export async function getUser(token: string): Promise<UserType> {
  const apiClient = createApiClient(token);
  return apiClient(`${serverBaseUrl}/user`);
}
