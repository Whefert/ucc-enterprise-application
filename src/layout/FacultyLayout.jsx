import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FacultyCard from "../components/FacultyCard";
import AddressCard from "../components/AddressCard";
import ContactCard from "../components/ContactCard";
import Heading from "../UI/Heading";
import TaughtCourses from "../pages/Faculty/TaughtCourses";

function FacultyLayout() {
  const { fData, tCourses } = useLoaderData();
  const [faculty, setFaculty] = useState(fData);

  //function to fetch faculty picture
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
    <main className="w-[1100px] mx-auto bg-slate-100  gap-5 grid grid-cols-[50%,_auto_,_auto_] p-5 rounded-md shadow-lg my-5  ">
      <div className="col-span-3">
        <Heading type="h1">
          {faculty.user.first_name.concat(" ", faculty.user.last_name)}
        </Heading>
        <p className="text-xs">Id#: {faculty.id}</p>
      </div>
      <FacultyCard faculty={faculty} />
      <AddressCard address={faculty.user.address} />
      <ContactCard contact={faculty.user.contact_details} />
      <div className="col-span-3 gap-4 flex flex-col">
        <Heading type="h3">Taught Courses</Heading>
        <TaughtCourses taughtCourses={tCourses} className="" />
      </div>
    </main>
  );
}

export default FacultyLayout;

export async function loader({ params, request }) {
  // Faculty url
  const facultyUrl = import.meta.env.VITE_BACKEND_URL + `staff/${params.id}`;
  // Get faculty data
  const facultyRepresponse = await axios.get(facultyUrl);
  // Faculty lecturers  url
  const facultyLecturersUrl =
    import.meta.env.VITE_BACKEND_URL + `course_schedule_lecturer/${params.id}`;
  // Get faculty lecturers data
  const taughtCourses = await axios.get(facultyLecturersUrl);

  console.log(taughtCourses.data);
  return {
    fData: facultyRepresponse.data,
    tCourses: taughtCourses.data,
  };
}
