import React from "react";
import Heading from "../UI/Heading";
import { useOutletContext } from "react-router-dom";

function Address() {
  const [student, setStudent] = useOutletContext();

  return (
    <div className="flex flex-col gap-5">
      <Heading type="h3">Address</Heading>
      <div id="address1" className="flex gap-5">
        {/* Student email input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="student_email">Address Line 1</label>
          <input
            type="text"
            name="address_line1"
            id="address_line1"
            className="border border-blue-600 rounded-sm p-2"
            defaultValue={student?.address?.street}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="personal_email">Address Line 1</label>
          <input
            type="text"
            name="address_line2"
            id="address_line2"
            className="border border-blue-600 rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="personal_email">Parish</label>
          <input
            type="email"
            name="personal_email"
            id="personal_email"
            placeholder="Enter personal email"
            className="border border-blue-600 rounded-sm p-2"
            defaultValue={student?.address?.parish}
          />
        </div>
      </div>
      <div id="address2" className="flex gap-5">
        {/* Student email input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="student_email">Student Email</label>
          <input
            type="email"
            name="student_email"
            id="student_email"
            placeholder="Enter your student email"
            className="border border-blue-600 rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="personal_email">Personal Email</label>
          <input
            type="email"
            name="personal_email"
            id="personal_email"
            placeholder="Enter personal email"
            className="border border-blue-600 rounded-sm p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Address;
