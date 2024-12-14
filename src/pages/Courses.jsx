import Heading from "../UI/Heading";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState(useLoaderData());

  return (
    <div className="flex-col justify-stat items-center">
      <Heading type={"h1"}>Courses</Heading>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course) => (
              <tr>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.credits}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;

export async function loader() {
  const url = import.meta.env.VITE_BACKEND_URL + "course/";
  const response = await axios.get(url);
  return response.data;
}
