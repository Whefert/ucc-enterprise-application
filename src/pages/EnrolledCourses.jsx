import dayjs from "dayjs";

function EnrolledCourses({ enrolledCourses, ...props }) {
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
          <th className="border border-blue-600 px-2 ">Days</th>
          <th className="border border-blue-600 px-2">Semester/Year</th>
          <th className="border border-blue-600 px-2">Course Work Grade</th>
          <th className="border border-blue-600 px-2">
            Final Exam/Project Grade
          </th>
          <th className="border border-blue-600 px-2">Final Grade</th>
          <th className="border border-blue-600 px-2">Credits</th>
          <th className="border border-blue-600 px-2">Letter Grade</th>
          <th className="border border-blue-600 px-2">Quality Points</th>
        </tr>
      </thead>
      <tbody>
        {enrolledCourses.map((course) => (
          <tr key={course.id}>
            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.course.code}
            </td>

            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.course.title}
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
              {course?.courseWorkGrade}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.finalExamProjectGrade}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.final_grade}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.course_schedule?.course.credits}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.letter_grade}
            </td>
            <td className="border border-blue-600 p-2">
              {course?.quality_points}
            </td>
            {/* <td className="border border-blue-600 p-2">{course.schedule}</td>
              <td className="border border-blue-600 p-2">{course.year}</td>
              <td className="border border-blue-600 p-2">
                {course.course_work}
              </td>
              <td className="border border-blue-600 p-2">
                {course.final_exam}
              </td>
              <td className="border border-blue-600 p-2">{course.credits}</td>
              <td className="border border-blue-600 p-2">
                {course.letter_grade}
              </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EnrolledCourses;

function loader({ params, request }) {
  const id = params.id;
  //return the student data
  const student = studentData.find((student) => student.id === id);
  return student;
}
// <div className="flex flex-col gap-5">
//   <div className="flex flex-col gap-3">
//     <h3 className="text-xl underline">Enrolled Courses</h3>
//     <div className="flex gap-5">
//       <div className="flex flex-col">
//         <p>Semester</p>
//         <select className="border border-blue-900">
//           <option value="fall">Fall</option>
//           <option value="spring">Spring</option>
//           <option value="summer">Summer</option>
//         </select>
//       </div>
//       <div>
//         <p>Year</p>
//         <select className="border border-blue-900">
//           <option value="2021">2021</option>
//           <option value="2022">2022</option>
//           <option value="2023">2023</option>
//         </select>
//       </div>
//     </div>
//   </div>
