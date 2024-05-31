import { useEffect, useState } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import type { UserType } from "../types";
import { getUser } from "../apis";
import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const authClient = useAuth0Client();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    authClient.getTokenSilently().then(getUser).then(setUser);
  }, [authClient]);

  if (!user) return null;
  const { picture, name, email, view_count, update_count } = user;
  return (
    <div>
      <div className={styles["profile-top"]}>
        <img className={styles["profile-img"]} src={picture} />
        <div className={styles["profile-name"]}>{name}</div>
        <div className={styles["profile-email"]}>{email}</div>
      </div>
      <div className={styles["profile-bottom"]}>
        <div className={styles["profile-bottom-item"]}>
          <div>프로필 조회자</div>
          <div className={styles["profile-bottom-item-count"]}>
            {view_count}
          </div>
        </div>
        <div className={styles["profile-bottom-item"]}>
          <div>업데이트 노출</div>
          <div className={styles["profile-bottom-item-count"]}>
            {update_count}
          </div>
        </div>
      </div>
    </div>
  );
}
