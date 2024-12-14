import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../../components/Search";
import FuzzySearch from "fuzzy-search";
import axios from "axios";
import StudentTable from "./StudentTable";

import Heading from "../../UI/Heading";

function Students() {
  // Save initial data received from the loader for resetting data
  const studentData = useLoaderData();
  //save initial data received from the loader to state
  const [students, setStudents] = useState(useLoaderData());
  const [enrollmentStatus, setEnrollmentStatus] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState({
    status: "all",
    program: "all",
  });

  useEffect(() => {
    //get all enrollment status from the database
    (async () => {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "enrollment_status"
      );
      setEnrollmentStatus(response.data);
    })();

    //get all programs of study from the database
    (async () => {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "program_of_study"
      );
      setPrograms(response.data);
    })();
  }, []);

  //update student data based on the filter value
  useEffect(() => {
    //if both filter values are all, set students to the initial data
    if (filter.status === "all" && filter.program === "all") {
      setStudents(studentData);
      return;
    }

    //if status is all, filter students based on program
    if (filter.status === "all") {
      setStudents(
        studentData.filter(
          (student) => student.program_of_study === filter.program
        )
      );
      return;
    }
    //if program is all, filter students based on status
    if (filter.program === "all") {
      setStudents(
        studentData.filter(
          (student) => student.enrollment_status === filter.status
        )
      );
      return;
    }
    //if both status and program are not all, filter students based on both status and program
    setStudents(
      studentData.filter(
        (student) =>
          student.status === filter.status &&
          student.program_of_study === filter.program
      )
    );
  }, [filter]);

  function handleFilterChange(e) {
    //update the filter state based on the filter value
    setFilter({ ...filter, [e.target.name]: e.target.value });
  }

  function handleSearch(e) {
    //check if search value is empty
    //check if search value is less than 3 characters
    if (e.target.value < 3) {
      setStudents(studentData);
      setFilter({ status: "all", program: "all" });
      return;
    }
    //if search value is greater than 3 characters query the database for the students that match the query
    const searcher = new FuzzySearch(
      students,
      ["user.first_name", "user.last_name", "user.id"],
      {
        caseSensitive: false,
      }
    );

    setStudents(searcher.search(e.target.value));
  }

  return (
    <>
      <div className="grid grid-cols-8 h-lvh gap-5 p-5">
        <aside className="bg-slate-100 col-span-2 flex flex-col gap-2 shadow-md p-5 rounded-md">
          {/* Search component */}
          <Search
            label="Search for a student: "
            placeholder="Start typing to search"
            handleSearch={handleSearch}
          />
          <div className="flex gap-2 flex-col justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="border border-blue-600 rounded-sm p-2"
                onChange={handleFilterChange}
              >
                <option value={"all"}>{"All"}</option>
                {enrollmentStatus.map((s) => (
                  <option value={s.status}>{s.status}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="program">Program</label>
              <select
                name="program"
                id="program"
                className="border border-blue-600 rounded-sm p-2"
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                {programs.map((p) => (
                  <option value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>
        <main className="col-span-6 grid grid-cols-[45%_auto_auto] auto-rows-min gap-5 p-5 rounded-md">
          {/* student table to display data */}
          <div className="col-span-3 flex flex-col ">
            <Heading type="h1">Students</Heading>
            <p className="text-sm">Found {students.length}</p>
          </div>
          <StudentTable students={students} className="col-span-3" />

          {/* <Table
            data={students}
            columns={[
              "id",
              "first_name",
              "last_name",
              "ucc_email",
              "program_of_study",
              "enrollment_status",
            ]}
          /> */}
        </main>
      </div>
    </>
  );
}

export default Students;

export async function loader() {
  const url = import.meta.env.VITE_BACKEND_URL + "student/";
  const response = await axios.get(url);
  console.log(response.data[0]);
  return response.data;
}
