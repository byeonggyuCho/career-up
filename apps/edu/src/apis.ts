import type { CourseContentsType, CourseType, UserType } from "./types";

export async function getCourses(token: string): Promise<CourseType[]> {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/courses?_sort=id&order=desc`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
}

export async function getCourseContents(
  token: string,
  id: number
): Promise<CourseContentsType> {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/course-contents/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
}

export async function getUser(token: string): Promise<UserType> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
