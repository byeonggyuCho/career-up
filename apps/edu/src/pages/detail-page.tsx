import { useAtomValue } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { selectAtom } from "jotai/utils";
import { courseAtom } from "../atoms";
import CourseDetailItem from "../components/course-detail-item";
import React from "react";

import type { CourseContentsType } from "../types";
import { getCourseContents } from "../apis";
import CourseContents from "../components/course-contents";
import CourseActions from "../components/course-actions";
import { useAuth0Client } from "@career-up/shell-router";

export default function DetailPage() {
  const { id = "" } = useParams();
  const authClient = useAuth0Client();

  const [courseContents, setCourseContents] =
    useState<CourseContentsType | null>(null);

  const selectedAtom = useMemo(
    () =>
      selectAtom(courseAtom, (courses) =>
        courses.find((item) => item.id.toString() === id)
      ),
    [id]
  );
  const course = useAtomValue(selectedAtom);

  useEffect(() => {
    if (course === undefined) return;

    async function fetchCourseContents() {
      const token = await authClient.getTokenSilently();
      const courseContents = await getCourseContents(token, course!.id);

      setCourseContents(courseContents);
    }
    fetchCourseContents();
  }, [authClient, course]);

  if (!course) return null;

  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents && <CourseContents {...courseContents} />}
      <CourseActions />
    </>
  );
}
