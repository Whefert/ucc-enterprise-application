import React from "react";
import { NavLink } from "react-router-dom";
import ucc_logo from "../assets/ucc_logo.png";
import Button from "../UI/Button";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { useNavigate } from "react-router-dom";

function MainNav() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  //Logout function
  function handleLogout() {
    authCtx.onLogout();
    navigate("/");
  }

  return (
    <>
      <nav className="flex bg-yellow-400 px-10 justify-between ">
        <div className="flex items-center gap-2">
          {/* UCC Logo */}
          <NavLink to="/" className="flex items-center p-4">
            <img src={ucc_logo} alt="UCC Logo" className="w-36 h-auto" />
          </NavLink>
          <h1 className="text-xl text-black">
            Registry <br /> Management
          </h1>
        </div>
        {/* Navigation links */}
        {/* Show navigation if the auth token is present in the context */}

        {authCtx.token && (
          <>
            <div className="flex justify-center ">
              <ul className="flex gap-4 items-center text-xl ">
                <li>
                  <NavLink
                    to="students"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black border-b-2 border-black"
                        : "text-black"
                    }
                  >
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="faculty"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "text-black border-b-2 border-black"
                        : "text-black"
                    }
                  >
                    Faculty
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="courses"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black border-b-2 border-black"
                        : "text-black"
                    }
                  >
                    Courses
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Button type="primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>{" "}
          </>
        )}
      </nav>
    </>
  );
}

export default MainNav;
