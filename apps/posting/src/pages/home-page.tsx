import React, { useEffect, useState } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import "./home-page.scss";
import Profile from "../components/Profile";
import type { PostType } from "../types";
import { createPost, getPosts, removePost } from "../apis";
import Post from "../components/post";
import WritePost from "../components/write-post";

export default function HomPage() {
  const authClient = useAuth0Client();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    authClient.getTokenSilently().then(getPosts).then(setPosts);
  }, [authClient]);

  const deletePostById = async (id: number) => {
    const token = await authClient.getTokenSilently();
    await removePost(token, id);
    const posts = await getPosts(token);
    setPosts(posts);
  };

  const writePost = async (message: string) => {
    const token = await authClient.getTokenSilently();
    await createPost(token, { message });
    const posts = await getPosts(token);
    setPosts(posts);
  };

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {posts.map((post) => (
          <Post key={post.id} {...post} deletePostById={deletePostById} />
        ))}
      </div>
      <div className="posting--page-home-right">right</div>
    </div>
  );
}
