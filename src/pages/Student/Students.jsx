import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Search from "../../components/Search";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import StudentTable from "./StudentTable";
import StudentCard from "../../components/StudentCard";
import AddressCard from "../../components/AddressCard";
import Heading from "../../UI/Heading";
import ContactCard from "../../components/ContactCard";
import EnrolledCourses from "../EnrolledCourses";

function Students() {
  const [students, setStudents] = useState(useLoaderData());
  const [filter, setFilter] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const searchRef = useRef(null);

  //Get enrolled courses
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + `student/${students[0].id}/courses`
      );
      console.log(response.data);
      setEnrolledCourses(response.data);
    })();
  }, []);

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
    <>
      <div className="grid grid-cols-8 h-lvh gap-5 p-5">
        <aside className="bg-slate-100 col-span-2 flex flex-col gap-5 shadow-md p-5 rounded-md">
          {/* Search component */}
          <Search
            label="Search for a student: "
            placeholder="Start typing to search"
            handleSearch={handleSearch}
          />
          <div className="flex justify-between">
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
          </div>
        </aside>
        <main className="col-span-6 grid grid-cols-[45%_auto_auto] auto-rows-min gap-5 p-5 rounded-md">
          {/* student table to display data */}
          {/* <StudentTable students={students} /> */}
          <div className="col-span-3">
            <Heading type="h1"> {students[0].user.first_name}</Heading>
          </div>

          <StudentCard
            student={students[0]}
            className="bg-slate-100 rounded-md p-2"
          />
          <AddressCard
            address={students[0].user.address}
            className="bg-slate-100 rounded-md p-2"
          />
          <ContactCard
            contact={students[0].user.contact_details}
            className="bg-slate-100 rounded-md p-2"
          />

          <div className="col-span-3">
            <Heading type="h1"> Enrolled Courses</Heading>
            <EnrolledCourses enrolledCourses={enrolledCourses} />
          </div>
        </main>
      </div>
    </>
    // <main className="mx-auto">
    //   <div className="flex flex-col gap-5 items-center bg-white p-5 rounded-sm">
    //     <div className="flex flex-col gap-2">
    //       {/* Search component */}
    //       <div className="flex gap-2 items-center">
    //         <label htmlFor="search">Search for a student: </label>
    //         <input
    //           type="text"
    //           name="search"
    //           id="search"
    //           placeholder="Start typing to search"
    //           className="border border-blue-600 rounded-sm p-2"
    //           ref={searchRef}
    //           onChange={handleSearch}
    //         />
    //       </div>
    //       {/* Filter component */}
    //       {/* <div className="flex ">
    //         <div className="flex flex-col gap-2">
    //           <label htmlFor="filter">Status</label>
    //           <select
    //             name="filter"
    //             id="filter"
    //             className="border border-blue-600 rounded-sm p-2"
    //           >
    //             <option value="all">All</option>
    //             <option value="active">Active</option>
    //             <option value="inactive">Inactive</option>
    //           </select>
    //         </div>
    //         <div className="flex flex-col gap-2">
    //           <label htmlFor="filter">Program</label>
    //           <select
    //             name="filter"
    //             id="filter"
    //             className="border border-blue-600 rounded-sm p-2"
    //           >
    //             <option value="all">All</option>
    //             <option value="active">Information Technology</option>
    //             <option value="inactive">Tourism & Hospitality</option>
    //           </select>
    //         </div>
    //       </div> */}
    //     </div>

    //   </div>
    // </main>
  );
}

export default Students;

export async function loader() {
  const url = import.meta.env.VITE_BACKEND_URL + "student/";
  const response = await axios.get(url);
  console.log(response.data[0].user);
  return response.data;
}
