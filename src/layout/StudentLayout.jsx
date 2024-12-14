import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "../components/StudentCard";
import AddressCard from "../components/AddressCard";
import ContactCard from "../components/ContactCard";
import EnrolledCourses from "../pages/EnrolledCourses";
import Heading from "../UI/Heading";

function StudentLayout() {
  const [student, setStudent] = useState(useLoaderData());

  //function to fetch student picture
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      setStudent((prevStudent) => {
        return {
          ...prevStudent,
          student: {
            ...prevStudent.student,
            picture: data.results[0].picture.large,
          },
        };
      });
    })();
  }, []);

  return (
    <main className="w-[1100px] mx-auto bg-slate-100  gap-5 grid grid-cols-[50%,_auto_,_auto_] p-5 rounded-md shadow-lg my-5  ">
      <div className="col-span-3">
        <Heading type="h1">
          {student.student.user.first_name.concat(
            " ",
            student.student.user.last_name
          )}
        </Heading>
        <p className="text-xs">Id#: {student.student.id}</p>
      </div>

      <StudentCard student={student.student} />
      <AddressCard address={student.student.user.address} />
      <ContactCard contact={student.student.user.contact_details} />
      <div className="col-span-3 gap-4 flex flex-col">
        <Heading type="h3">Enrolled Courses</Heading>
        <EnrolledCourses enrolledCourses={student.courses} className="" />
      </div>
    </main>
  );
}

export default StudentLayout;

export async function loader({ params, request }) {
  //Get student data
  const url = import.meta.env.VITE_BACKEND_URL + `student/${params.id}`;
  //Get enrolled course data
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}
