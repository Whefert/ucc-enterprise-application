import { Link } from "react-router-dom";

function CourseEnrollments({ courseEnrollments, ...props }) {
  return (
    <table
      className={
        "table-auto border-collapse border text-center border-blue-600"
      }
    >
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="border border-blue-600 px-2 ">Course #</th>
          <th className="border border-blue-600 px-2">Course Name</th>
          <th className="border border-blue-600 px-2 ">Student</th>
          <th className="border border-blue-600 px-2 ">Days</th>
          <th className="border border-blue-600 px-2">Semester/Year</th>
          <th className="border border-blue-600 px-2">Credits</th>
        </tr>
      </thead>
      <tbody>
        {courseEnrollments &&
          courseEnrollments.map((course) => (
            <tr key={course.id}>
              <td className="border border-blue-600 p-2">
                {course?.course_schedule?.course.code}
              </td>

              <td className="border border-blue-600 p-2">
                {course?.course_schedule?.course.title}
              </td>

              <td className="border border-blue-600 p-2">
                <Link
                  to={`/students/${course.student.id}`}
                  className="underline text-blue-900"
                >
                  {course?.student.user.first_name.concat(
                    " ",
                    course.student.user.last_name
                  )}
                </Link>
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
  );
}

export default CourseEnrollments;
