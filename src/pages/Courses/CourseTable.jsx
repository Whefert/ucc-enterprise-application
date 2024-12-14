import { Link } from "react-router-dom";

function CourseTable({ courses, ...props }) {
  return (
    <table
      className={
        "table-auto border-collapse border text-center border-blue-600 " +
        props.className
      }
    >
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="border border-blue-600 px-3 ">CourseI d</th>
          <th className="border border-blue-600 px-3 ">Code</th>
          <th className="border border-blue-600 px-3">Title</th>
          <th className="border border-blue-600 px-3">Credits</th>
        </tr>
      </thead>
      <tbody>
        {courses &&
          courses.map((course) => (
            <tr key={course.id}>
              <td className="border border-blue-600 text-center p-2">
                <Link to={`${course.id}`} className="underline text-blue-900">
                  {course.id}
                </Link>
              </td>

              <td className="border border-blue-600 p-2">{course?.code}</td>
              <td className="border border-blue-600 p-2">{course?.title}</td>
              <td className="border border-blue-600 p-2">{course?.credits}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default CourseTable;
