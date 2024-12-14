import Heading from "../UI/Heading";

function FacultyCard({ faculty, ...props }) {
  return (
    <div className={"flex flex-col gap-2 " + props.className}>
      <div className="flex gap-2">
        <div>
          <img
            src={faculty.picture}
            className="h-[150px] w-auto rounded-[50%]"
            alt={faculty.user.first_name.concat(" ", faculty.user.last_name)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Heading type="h3">Overview</Heading>

          <p>Department: {faculty.department}</p>

          <div className="flex gap-3">
            <p>Position: {faculty.positon}</p>
          </div>

          <p> Email: {faculty.ucc_email}</p>

          <p></p>
        </div>
      </div>
    </div>
  );
}

export default FacultyCard;
