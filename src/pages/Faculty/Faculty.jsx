import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../../components/Search";
import FuzzySearch from "fuzzy-search";
import axios from "axios";
import Heading from "../../UI/Heading";
import FacultyTable from "./FacultyTable";

function Faculty() {
  const { fData, depData, pData } = useLoaderData();

  //save initial data received from the loader to state
  const [faculty, setFaculty] = useState(fData);
  const [filter, setFilter] = useState({
    department: "all",
    position: "all",
  });

  //update faculty data based on the filter value
  useEffect(() => {
    //if both filter values are all, set faculty to the initial data
    if (filter.department === "all" && filter.position === "all") {
      setFaculty(fData);
      return;
    }

    //if department is all, filter faculty based on position
    if (filter.department === "all") {
      setFaculty(
        fData.filter((faculty) => faculty.position === filter.position)
      );
      return;
    }
    //if position is all, filter faculty based on department
    if (filter.position === "all") {
      setFaculty(
        fData.filter((faculty) => faculty.department === filter.department)
      );
      return;
    }
    //if both department and position are not all, filter faculty based on both department and position
    setFaculty(
      fData.filter(
        (faculty) =>
          faculty.department === filter.department &&
          faculty.program_of_study === filter.position
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
      setFaculty(fData);
      setFilter({ department: "all", position: "all" });
      return;
    }
    //if search value is greater than 3 characters query the database for the faculty that match the query
    const searcher = new FuzzySearch(
      faculty,
      ["user.first_name", "user.last_name", "user.id"],
      {
        caseSensitive: false,
      }
    );

    setFaculty(searcher.search(e.target.value));
  }

  return (
    <>
      <div className="grid grid-cols-8 h-lvh gap-5 p-5">
        <aside className="bg-slate-100 col-span-2 flex flex-col gap-2 shadow-md p-5 rounded-md">
          {/* Search component */}
          <Search
            label="Search for a faculty: "
            placeholder="Start typing to search"
            handleSearch={handleSearch}
          />
          <div className="flex gap-2 flex-col justify-between">
            <div className="flex flex-col gap-2">
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                className="border border-blue-600 rounded-sm p-2"
                onChange={handleFilterChange}
              >
                <option value={"all"}>{"All"}</option>
                {depData.map((dep) => (
                  <option value={dep.name}>{dep.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="position">Position</label>
              <select
                name="position"
                id="position"
                className="border border-blue-600 rounded-sm p-2"
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                {pData.map((p) =>
                  // map through the positions and display them as options
                  //if position name is equal to Staff then return null
                  p.name === "Staff" ? null : (
                    <option value={p.name}>{p.name}</option>
                  )
                )}
              </select>
            </div>
          </div>
        </aside>
        <main className="col-span-6 grid grid-cols-[45%_auto_auto] auto-rows-min gap-5 p-5 rounded-md">
          {/* faculty table to display data */}
          <div className="col-span-3 flex flex-col ">
            <Heading type="h1">Faculty</Heading>
            <p className="text-sm">Found {faculty.length}</p>
          </div>
          <FacultyTable faculty={faculty} className="col-span-3" />
        </main>
      </div>
    </>
  );
}

export default Faculty;

export async function loader() {
  // faculty query string
  const facultyUrl = import.meta.env.VITE_BACKEND_URL + "faculty/";
  // get all faculty from the database
  const facultyResponse = await axios.get(facultyUrl);

  //department query string
  const departmentUrl = import.meta.env.VITE_BACKEND_URL + "department";
  // get all departments from the database
  const departmentResponse = await axios.get(departmentUrl);

  //position query string
  const positionUrl = import.meta.env.VITE_BACKEND_URL + "position";
  // get all positions from the database
  const positionResponse = await axios.get(positionUrl);

  return {
    fData: facultyResponse.data,
    depData: departmentResponse.data,
    pData: positionResponse.data,
  };
}
