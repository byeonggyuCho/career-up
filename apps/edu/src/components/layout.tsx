import type { PropsWithChildren } from "react";
import { LayoutWrapper } from "./layout.styles";
import React, { useEffect } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import { useSetAtom } from "jotai";
import { courseAtom, userAtom } from "../atoms";
import { getCourses, getUser } from "../apis";
import { ProfileContainer } from "../containers/profile-container";
import { MyCourseInfoContainer } from "../containers/my-course-info-container ";

/**
 * @todo 레이아웃에서 데이터를 주입한느 것이 어색하다.
 * @param props
 * @returns
 */
export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  const authClient = useAuth0Client();
  const setUser = useSetAtom(userAtom);
  const setCourses = useSetAtom(courseAtom);

  useEffect(() => {
    async function fetchData() {
      const token = await authClient.getTokenSilently();
      const [user, courses] = await Promise.all([
        getUser(token),
        getCourses(token),
      ]);
      setUser(user);
      setCourses(courses);
    }
    fetchData();
  }, [authClient, setCourses, setUser]);

  return (
    <LayoutWrapper>
      <div className="edu--layout-left">
        <ProfileContainer />
        <MyCourseInfoContainer />
      </div>
      <div className="edu--layout-center">{children}</div>
    </LayoutWrapper>
  );
}
