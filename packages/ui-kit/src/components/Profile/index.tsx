import styles from "./Profile.module.css";

interface UserType {
  picture?: string;
  name?: string;
  email?: string;
  view_count: number;
  update_count: number;
}

interface ProfileProps {
  user: UserType;
}

export default function Profile({ user }: ProfileProps) {
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
