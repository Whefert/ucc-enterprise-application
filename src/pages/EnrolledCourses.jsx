import React from "react";
import { studentData } from "../data";

import { useLoaderData } from "react-router-dom";

function EnrolledCourses() {
  const student = useLoaderData();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl underline">Enrolled Courses</h3>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p>Semester</p>
            <select className="border border-blue-900">
              <option value="fall">Fall</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
            </select>
          </div>
          <div>
            <p>Year</p>
            <select className="border border-blue-900">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse border text-center border-blue-600">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-blue-600 px-3 ">Course #</th>
            <th className="border border-blue-600 px-3">Course Name</th>
            <th className="border border-blue-600 px-3 ">Lecturer</th>
            <th className="border border-blue-600 px-3 ">Schedule</th>
            <th className="border border-blue-600 px-3">Semester/Year</th>
            <th className="border border-blue-600 px-3">Course Work Grade</th>
            <th className="border border-blue-600 px-3">
              Final Exam/Project Grade
            </th>
            <th className="border border-blue-600 px-3">Credits</th>
            <th className="border border-blue-600 px-3">Letter Grade</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default EnrolledCourses;

function loader({ params, request }) {
  const id = params.id;
  //return the student data
  const student = studentData.find((student) => student.id === id);
  return student;
}
