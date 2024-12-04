import React from "react";
import ucc_students from "../assets/ucc_students.jpg";

function Login() {
  return (
    <>
      <div className="flex flex-col">
        {/* Header with image */}
        <header
          className="flex justify-between items-center h-[45vh] text-black"
          style={{
            backgroundImage: `url(${ucc_students})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Main section with the login form */}
        <main className="flex gap-10  justify-center p-4 bg-gray-100">
          <div className="flex flex-col gap-2 items-center bg-white p-5 rounded-sm">
            <h1 className="text-3xl">Login</h1>
            <form action="">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="border border-blue-600 rounded-sm p-2"
                  />{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-blue-600 rounded-sm p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-sm"
                >
                  Login
                </button>{" "}
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">Create Account</h1>
            <p className="text-center">
              If you don’t have an account,
              <br /> click{" "}
              <a href="#" className="underline text-blue-600">
                {" "}
                here
              </a>{" "}
              to create one
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export function loginLoader() {
  //
}

export default Login;
