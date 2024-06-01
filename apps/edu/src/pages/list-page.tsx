import { useAtomValue } from "jotai";
import { courseAtom } from "../atoms";
import React from "react";
import CourseListItem from "../components/course-list-item";

export default function ListPage() {
  const courses = useAtomValue(courseAtom);

  return (
    <>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course}></CourseListItem>
      ))}
    </>
  );
}
