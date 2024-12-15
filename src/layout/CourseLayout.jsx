import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../UI/Heading";
import { Link } from "react-router-dom";
import CourseEnrollments from "../pages/CourseEnrollments";

function CourseLayout() {
  const { courseEnrollments, cPrerequisites, course } = useLoaderData();

  return (
    <main className="w-[1100px] mx-auto bg-slate-100  gap-5 grid grid-cols-[50%,_auto_,_auto_] p-5 rounded-md shadow-lg my-5  ">
      <div className="col-span-3 flex flex-col gap-2">
        <Heading type="h1">{course.title}</Heading>
        <p className="">
          Prerequisites:{" "}
          {cPrerequisites.map((prerequisite) => (
            <Link
              to={`/courses/${prerequisite.prerequisite.id}`}
              className="underline text-blue-900"
            >
              {prerequisite.prerequisite.code}
            </Link>
          ))}
        </p>
      </div>

      <div className="col-span-3 gap-4 flex flex-col">
        <Heading type="h3">Course Enrollments</Heading>
        <CourseEnrollments courseEnrollments={courseEnrollments} className="" />
      </div>
    </main>
  );
}

export default CourseLayout;

export async function loader({ params, request }) {
  const courseEnrollmentUrl =
    import.meta.env.VITE_BACKEND_URL + `course_enrollment/${params.id}`;
  const courseEnrollmentUrlResponse = await axios.get(courseEnrollmentUrl);

  const coursePrerequisitesUrl =
    import.meta.env.VITE_BACKEND_URL + `course/${params.id}/prerequisites`;
  const coursePrerequisitesUrlResponse = await axios.get(
    coursePrerequisitesUrl
  );

  const courseUrl = import.meta.env.VITE_BACKEND_URL + `course/${params.id}`;
  const courseUrlResponse = await axios.get(courseUrl);

  return {
    courseEnrollments: courseEnrollmentUrlResponse.data,
    cPrerequisites: coursePrerequisitesUrlResponse.data,
    course: courseUrlResponse.data,
  };
}
