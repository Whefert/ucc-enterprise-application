import Heading from "../../UI/Heading";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/Search";
import FuzzySearch from "fuzzy-search";

import CourseTable from "./CourseTable";

function Courses() {
  // Save initial data received from the loader for resetting data
  const courseData = useLoaderData();
  //save initial data received from the loader to state
  const [courses, setCourses] = useState(useLoaderData());

  function handleSearch(e) {
    //check if search length is less than 3 characters
    if (e.target.value.length < 3) {
      console.log(e.target.value);
      setCourses(courseData);
      return;
    }
    //if search value is greater than 3 characters query the database for the courses that match the query
    const searcher = new FuzzySearch(courses, ["code", "title"], {
      caseSensitive: false,
    });

    setCourses(searcher.search(e.target.value));
  }

  return (
    <>
      <div className="grid grid-cols-8 h-lvh gap-5 p-5">
        <aside className="bg-slate-100 col-span-2 flex flex-col gap-2 shadow-md p-5 rounded-md">
          {/* Search component */}
          <Search
            label="Search for a course: "
            placeholder="Start typing to search"
            handleSearch={handleSearch}
          />
        </aside>
        <main className="col-span-6 grid grid-cols-[45%_auto_auto] auto-rows-min gap-5 p-5 rounded-md">
          {/* course table to display data */}
          <div className="col-span-3 flex flex-col ">
            <Heading type="h1">Courses</Heading>
            <p className="text-sm">Found {courses.length}</p>
          </div>
          <CourseTable courses={courses} className="col-span-3" />
        </main>
      </div>
    </>
  );
}

export default Courses;

export async function loader() {
  const url = import.meta.env.VITE_BACKEND_URL + "course/";
  const response = await axios.get(url);
  return response.data;
}
