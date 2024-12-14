import { Link } from "react-router-dom";

function FacultyTable({ faculty, ...props }) {
  return (
    <table
      className={
        "table-auto border-collapse border text-center border-blue-600 " +
        props.className
      }
    >
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="border border-blue-600 px-3 ">Employee Id</th>
          <th className="border border-blue-600 px-3">Title</th>
          <th className="border border-blue-600 px-3 w-[30%]"> Name</th>
          <th className="border border-blue-600 px-3">Department</th>
          <th className="border border-blue-600 px-3">Position</th>
          <th className="border border-blue-600 px-3">Email</th>
        </tr>
      </thead>
      <tbody>
        {faculty &&
          faculty.map((faculty) => (
            <tr key={faculty?.id}>
              <td className="border border-blue-600 text-center p-2">
                <Link to={`${faculty?.id}`} className="underline text-blue-900">
                  {faculty?.id}
                </Link>
              </td>
              <td className="border border-blue-600 p-2">
                {faculty?.user.title}
              </td>
              <td className="border border-blue-600 p-2">
                {faculty?.user.first_name.concat(" ", faculty?.user.last_name)}
              </td>
              <td className="border border-blue-600 p-2">
                {faculty?.department}
              </td>
              <td className="border border-blue-600 p-2">
                {faculty?.position}
              </td>
              <td className="border border-blue-600 p-2">
                {faculty?.ucc_email}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default FacultyTable;
