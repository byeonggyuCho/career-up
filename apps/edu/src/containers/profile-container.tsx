import { Profile } from "@career-up/ui-kit";
import { useAtom } from "jotai";
import React from "react";
import { userAtom } from "../atoms";

/**
 * 비즈니스 모델을 주입한다.
 * @returns
 */
export function ProfileContainer() {
  const [user] = useAtom(userAtom);

  if (!user) return null;

  return <Profile user={user} />;
}
