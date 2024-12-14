import Heading from "../UI/Heading";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

function AllFaculty() {
  const [faculty, setFaculty] = useState(useLoaderData());
  console.log(faculty);
  return (
    <>
      <div className="flex-col justify-center items-center mx-auto">
        {" "}
        {/*  */}
        <Heading type={"h1"}>All Faculty </Heading>
        {/* table to show all faculty */}
        <table className="table-auto">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {faculty &&
              faculty.map((f) => (
                <tr>
                  <td>
                    <Link to={"/faculty/" + f.id}>{f.id}</Link>
                  </td>
                  <td>{}</td>
                  <td>{f.user.first_name}</td>
                  <td>{f.user.last_name}</td>
                  <td>{f.department}</td>
                  <td>{f.position}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllFaculty;

//loader to get all faculty
export async function loader() {
  //url query string
  const url = import.meta.env.VITE_BACKEND_URL + "faculty/";
  const response = await axios.get(url);
  return response.data;
}
