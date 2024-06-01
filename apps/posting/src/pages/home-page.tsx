import React, { Suspense, useEffect, useState } from "react";

import "./home-page.scss";
import Profile from "../components/Profile";
import type { PostType } from "../types";
import { createPost, getPosts, removePost } from "../apis";
import Post from "../components/post";
import WritePost from "../components/write-post";
import { useAuth0Client } from "@career-up/shell-router";
import { importRemote } from "@module-federation/utilities/.";
import { ErrorBoundary } from "react-error-boundary";

const RecommendsConnectionsContainer = React.lazy(() =>
  importRemote({
    scope: "fragment_recommend_connections",
    url: process.env.REACT_APP_MICRO_APP_FRAGMENT || "",
    module: "container",
    remoteEntryFileName: "remoteEntry.js",
  })
);
const RecommendsJobsContainer = React.lazy(() =>
  importRemote({
    scope: "job",
    url: process.env.REACT_APP_MICRO_APP_JOB_URL || "",
    module: "fragment-recommend-jobs",
    remoteEntryFileName: "remoteEntry.js",
  })
);

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
      <div className="posting--page-home-right">
        <ErrorBoundary
          fallback={<div>RecommendsConnectionsContainer이 안 나옴</div>}
        >
          <Suspense fallback="loading">
            <RecommendsConnectionsContainer />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>RecommendsJobsContainer가 안 나옴</div>}>
          <Suspense fallback="loading">
            <RecommendsJobsContainer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
