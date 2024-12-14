import { Outlet, useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function FacultyLayout() {
  const [faculty, setFaculty] = useState(useLoaderData());

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      setFaculty((prevFaculty) => {
        return {
          ...prevFaculty,
          picture: data.results[0].picture.large,
        };
      });
    })();
  }, []);

  return (
    <main className="flex gap-5">
      <menu className="basis-1/6 text-center h-[50vh] flex items-center">
        <div className="grow flex flex-col bg-blue-600">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to=""
            end
          >
            Courses
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to="contact_details"
          >
            Contact Details
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              (isActive ? "bg-yellow-500 " : null) +
              " hover:bg-blue-950 hover:text-white text-xl p-2"
            }
            to="next_of_kin"
          >
            Next of Kin
          </NavLink>
        </div>
      </menu>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 p-4">
          <div>
            <img
              src={faculty.picture}
              className="h-[150px] w-[150px] rounded-[50%]"
              alt={faculty.user.first_name.concat(" ", faculty.user.last_name)}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">
              Faculty Name:{" "}
              {faculty.user.first_name.concat(" ", faculty.user.last_name)}
            </h1>
            <div className="flex gap-3">
              <p>Faculty Id: {faculty.id}</p>
              <p>Program: {faculty.program_of_study}</p>
            </div>
            <div className="flex gap-3">
              <p>GPA: {faculty.gpa}</p>
              <p>Faculty email: {faculty.ucc_email}</p>
            </div>
            <div className="flex gap-3">
              <p>Completed Credits: {faculty?.completedCredits}</p>
              <p>Advisor: {faculty?.advisor}</p>
            </div>
          </div>
        </div>
        <Outlet context={[faculty, setFaculty]} />
      </div>
    </main>
  );
}

export default FacultyLayout;

export async function loader({ params, request }) {
  const url = import.meta.env.VITE_BACKEND_URL + `staff/${params.id}`;
  const response = await axios.get(url);
  return response.data;
}
