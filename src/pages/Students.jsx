import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { studentData } from "../data";
import { useRef } from "react";
import FuzzySearch from "fuzzy-search";
import { Link } from "react-router-dom";
import Student from "./Student";

function Students() {
  const [students, setStudents] = useState(useLoaderData());
  const [filter, setFilter] = useState(null);
  const searchRef = useRef(null);

  function handleFilterChange(e) {}

  function handleSearch() {
    //check if search value is empty

    //check if search value is less than 3 characters
    if (searchRef.current.value.length < 3) {
      setStudents(studentData);
      return;
    }
    //if search value is greater than 3 characters query the database for the students that match the query
    const searcher = new FuzzySearch(
      students,
      ["firstName", "lastName", "id"],
      {
        caseSensitive: false,
      }
    );
    console.log(searchRef.current.value);
    console.log(searcher.search(searchRef.current.value));
    setStudents(searcher.search(searchRef.current.value));
  }

  return (
    <main className="mx-auto">
      <div className="flex flex-col gap-5 items-center bg-white p-5 rounded-sm">
        <div className="flex flex-col gap-2">
          {/* Search component */}
          <div className="flex gap-2 items-center">
            <label htmlFor="search">Search for a student: </label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Start typing to search"
              className="border border-blue-600 rounded-sm p-2"
              ref={searchRef}
              onChange={handleSearch}
            />
          </div>
          {/* Filter component */}
          {/* <div className="flex ">
            <div className="flex flex-col gap-2">
              <label htmlFor="filter">Status</label>
              <select
                name="filter"
                id="filter"
                className="border border-blue-600 rounded-sm p-2"
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="filter">Program</label>
              <select
                name="filter"
                id="filter"
                className="border border-blue-600 rounded-sm p-2"
              >
                <option value="all">All</option>
                <option value="active">Information Technology</option>
                <option value="inactive">Tourism & Hospitality</option>
              </select>
            </div>
          </div> */}
        </div>
        <table className="w-full border-collapse border text-center border-blue-600">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-blue-600 px-3 ">Id</th>
              <th className="border border-blue-600 px-3">Name</th>
              <th className="border border-blue-600 px-3 w-[30%]">Email</th>
              <th className="border border-blue-600 px-3 w-[25%]">Program</th>
              <th className="border border-blue-600 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border border-blue-600 text-center p-2">
                  <Link
                    to={`${student.id}`}
                    className="underline text-blue-900"
                  >
                    {student.id}
                  </Link>
                </td>
                <td className="border border-blue-600 p-2">
                  {student.firstName.concat(" ", student.lastName)}
                </td>
                <td className="border border-blue-600 p-2">
                  {student.contactDetails.student_email}
                </td>
                <td className="border border-blue-600 p-2">
                  {student.program}
                </td>
                <td className="border border-blue-600 p-2">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Students;

export function loader() {
  //query database for students
  //return students
  return studentData;
}
