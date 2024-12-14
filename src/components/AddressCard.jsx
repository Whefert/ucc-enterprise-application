import React from "react";
import Heading from "../UI/Heading";

function AddressCard({ address, ...props }) {
  return (
    <div className={"flex flex-col gap-2 " + props.className}>
      <Heading type="h3">Address</Heading>
      <div>Line 1: {address?.line1}</div>
      <div>Line 2: {address?.line2}</div>
      <div>Country: {address?.country}</div>
    </div>
  );
}

export default AddressCard;
