import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../UI/Heading";

function StudentCard({ student, completedCredits, ...props }) {
  return (
    <div className={"flex flex-col gap-2 " + props.className}>
      <div className="flex gap-2">
        <div>
          <img
            src={student.picture}
            className="h-[150px] w-auto rounded-[50%]"
            alt={student.user.first_name.concat(" ", student.user.last_name)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Heading type="h3">
            Overview
            {/* {" "}
            {student.user.first_name.concat(" ", student.user.last_name)} -{" "}
            {student.id} */}
          </Heading>

          <p>Program: {student.program_of_study}</p>

          <div className="flex gap-3">
            <p>GPA: {student.calculate_gpa}</p>
            <p>{student.ucc_email}</p>
          </div>

          <p>Completed Credits: {student.completed_credits}</p>
          <p>
            Advisor: {student?.advisor.user.first_name}{" "}
            {student?.advisor.user.last_name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
