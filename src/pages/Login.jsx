import React from "react";
import ucc_students from "../assets/ucc_students.jpg";
import Button from "../UI/Button";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Form, useNavigate } from "react-router-dom";

function Login() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginResult = authCtx.onLogin(email, password);

    if (!loginResult) {
      alert("Invalid login credentials  ");
    }

    //redirect to the students page
    if (loginResult) navigate("/students");
  }

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
          <div className="flex flex-col gap-2 items-center min-w-[50vh] bg-white p-5 rounded-sm">
            <h1 className="text-3xl">Login</h1>
            <Form action="" className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="border border-blue-600 rounded-sm p-2"
                  />{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="border border-blue-600 rounded-sm p-2"
                  />
                </div>
                <Button type="primary">Login</Button>
              </div>
            </Form>
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
