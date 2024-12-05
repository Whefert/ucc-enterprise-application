import React from "react";

function Heading({ type, children }) {
  let h1 = <h1 className="text-2xl">{children}</h1>;
  let h2 = <h2 className="text-xl">{children}</h2>;
  let h3 = <h3 className="text-lg underline uppercase">{children}</h3>;
  let h4 = <h4 className="text-md">{children}</h4>;

  return (
    <>
      {type === "h1" && h1}
      {type === "h2" && h2}
      {type === "h3" && h3}
      {type === "h4" && h4}
    </>
  );
}

export default Heading;
