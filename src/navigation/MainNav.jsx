import React from "react";
import { Link } from "react-router-dom";
import ucc_logo from "../assets/ucc_logo.png";

function MainNav() {
  return (
    <>
      <nav className="flex bg-yellow-400 px-10 justify-start gap-96">
        <div className="flex items-center gap-2">
          {/* UCC Logo */}
          <Link to="/" className="flex items-center p-4">
            <img src={ucc_logo} alt="UCC Logo" className="w-36 h-auto" />
          </Link>
          <h1 className="text-xl text-black">
            Registry <br /> Management
          </h1>
        </div>
        {/* Navigation links */}
        <div className="flex justify-between flex-1">
          <ul className="flex gap-4 items-center justify-start ">
            <li>
              <Link
                to="students"
                className="text-black hover:border-b-2 border-black"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to="students"
                className="text-black hover:border-b-2 border-black"
              >
                Faculty
              </Link>
            </li>
            <li>
              <Link
                to="students"
                className="text-black hover:border-b-2 border-black"
              >
                Courses
              </Link>
            </li>
          </ul>
          <button>Logout</button>
        </div>
      </nav>
    </>
  );
}

export default MainNav;
