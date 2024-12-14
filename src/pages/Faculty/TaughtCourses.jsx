import dayjs from "dayjs";

function TaughtCourses({ taughtCourses, ...props }) {
  return (
    <table
      className={
        "table-auto border-collapse border text-center border-blue-600" +
        props.className
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
        {taughtCourses.map((course) => (
          <tr key={course.id}>
            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.course.code}
            </td>

            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.course.title}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.lecturer.user.first_name
                .concat(" ")
                .concat(course?.lecturer.user.last_name)}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.day1} - {course?.course_schedule?.day2}{" "}
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

export default TaughtCourses;

function loader({ params, request }) {
  const id = params.id;
  //return the student data
  const student = studentData.find((student) => student.id === id);

  return student;
}
