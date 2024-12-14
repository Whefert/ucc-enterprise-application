import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../UI/Heading";

function CourseLayout() {
  // const { fData, tCourses } = useLoaderData();
  const [courseEnrollments, setCourseEnrollments] = useState(useLoaderData());

  return (
    <main className="w-[1100px] mx-auto bg-slate-100  gap-5 grid grid-cols-[50%,_auto_,_auto_] p-5 rounded-md shadow-lg my-5  ">
      <div className="col-span-3 gap-4 flex flex-col">
        <Heading type="h3">Course Enrollments</Heading>
        <table
          className={
            "table-auto border-collapse border text-center border-blue-600"
          }
        >
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-blue-600 px-2 ">Course #</th>
              <th className="border border-blue-600 px-2">Course Name</th>
              <th className="border border-blue-600 px-2 ">Lecturer</th>
              <th className="border border-blue-600 px-2 ">Days</th>
              <th className="border border-blue-600 px-2">Semester/Year</th>
              <th className="border border-blue-600 px-2">Credits</th>
            </tr>
          </thead>
          <tbody>
            {courseEnrollments.map((course) => (
              <tr key={course.id}>
                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.course.code}
                </td>

                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.course.title}
                </td>
                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.course.title}
                </td>
                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.day1} -{" "}
                  {course?.course_schedule?.day2}{" "}
                  {course?.course_schedule?.start_time} -{" "}
                  {course?.course_schedule?.end_time}
                </td>
                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.semester.name}{" "}
                  {course?.course_schedule?.year}
                </td>

                <td className="border border-blue-600 p-2">
                  {course?.course_schedule?.course.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default CourseLayout;

export async function loader({ params, request }) {
  const url =
    import.meta.env.VITE_BACKEND_URL + `course_enrollment/${params.id}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}
