import React from "react";
import Heading from "../UI/Heading";

function ContactCard({ contact, ...props }) {
  return (
    <div className={"flex flex-col gap-2 " + props.className}>
      <Heading type="h3">Personal Contact Details</Heading>
      <div>Personal email: {contact?.email}</div>
      <div>Mobile Number: {contact?.mobile_number}</div>
      <div>Home Number: {contact?.home_number}</div>
      <div>Work Number: {contact?.work_number}</div>
    </div>
  );
}

export default ContactCard;
