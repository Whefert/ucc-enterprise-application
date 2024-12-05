import Heading from "../UI/Heading";
import Address from "./Address";
import { useOutletContext } from "react-router-dom";

function ContactDetails() {
  const [student, setStudent] = useOutletContext();
  console.log(student);
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-2">
        <Heading type="h3">Contact Details</Heading>
        <div className="flex flex-col gap-2">
          <div id="emails" className="flex gap-5">
            {/* Student email input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="student_email">Student Email</label>
              <input
                type="email"
                name="student_email"
                id="student_email"
                className="border border-blue-600 rounded-sm p-2"
                defaultValue={student?.contactDetails?.student_email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="personal_email">Personal Email</label>
              <input
                type="email"
                name="personal_email"
                id="personal_email"
                className="border border-blue-600 rounded-sm p-2"
                defaultValue={student?.contactDetails?.personal_email}
              />
            </div>
          </div>
          <div id="emails" className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile_number">Mobile Number</label>
              <input
                type="text"
                name="mobile_number"
                id="mobile_number"
                className="border border-blue-600 rounded-sm p-2"
                defaultValue={student?.contactDetails?.mobile_number}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="home_number">Home Number</label>
              <input
                type="email"
                name="home_number"
                id="home_number"
                className="border border-blue-600 rounded-sm p-2"
                defaultValue={student?.contactDetails?.home_number}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="work_number">Work Number</label>
              <input
                type="email"
                name="work_number"
                id="work_number"
                className="border border-blue-600 rounded-sm p-2"
                defaultValue={student?.contactDetails?.work_number}
              />
            </div>
          </div>
        </div>

        <div>
          <Address />
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
