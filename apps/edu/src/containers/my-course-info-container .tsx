import { useAtom } from "jotai";
import React from "react";
import { userAtom } from "../atoms";
import MyCourseInfo from "../components/my-course-info";

/**
 * 비즈니스 모델을 주입한다.
 * @returns
 */
export function MyCourseInfoContainer() {
  const [user] = useAtom(userAtom);

  if (!user) return null;

  return <MyCourseInfo user={user} />;
}
