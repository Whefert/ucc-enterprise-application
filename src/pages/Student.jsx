import React from "react";
import ucc_student from "../assets/ucc_students.jpg";
import { studentData } from "../data";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Student() {
  const student = useLoaderData();

  return (
    <main className="flex gap-5">
      <menu className="basis-1/6 bg-blue-600 self-start text-center my-auto ">
        <ul>
          <li className="hover:bg-yellow-500 p-2 text-xl">Courses</li>
          <li className="hover:bg-yellow-500 p-2 text-xl">Contact Details</li>
          <li className="hover:bg-yellow-500 p-2 text-xl">Next of Kin</li>
        </ul>
      </menu>
      <div className="flex flex-col gap-5">
        {/* Student component */}
        <div className="flex gap-2 p-4">
          <div>
            <img
              src={ucc_student}
              className="h-[200px] w-[200px] rounded-[50%]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">Student Name: Jane J. Daley</h1>
            <div className="flex gap-3">
              <p>Student Id: 20141254</p>
              <p>Program: Information Technology</p>
            </div>
            <div className="flex gap-3">
              <p>GPA: 3.74</p>
              <p>Student email: jane.j.daley@stu.ucc.edu.com</p>
            </div>
            <div className="flex gap-3">
              <p>Completed Credits: 80</p>
              <p>Advisor: Otis Osbourne</p>
            </div>
          </div>
        </div>
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
    </main>
  );
}

export default Student;

function loader({ params, request }) {
  const id = params.id;
  //return the student data
  const student = studentData.find((student) => student.id === id);
  return student;
}
