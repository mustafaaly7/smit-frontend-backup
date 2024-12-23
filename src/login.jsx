// MOIZ WORK
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-OpazD70S.png";
import BlueButton from "./components/button";
import ThemeText from "./components/Themetext";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <style>
        {`
          input::placeholder {
            color: #44a1dc;
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 animate-fade-in gap-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-slide-up">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-32" />
          </div>
          <h1
            className="text-xl font-bold text-center"
            style={{ color: "#44a1dc" }}
          >
            <ThemeText text={"Management System"} />
          </h1>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className={`p-2 px-4 rounded-lg font-medium transition-colors ${
                !isRegister
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
            <button
              className={`p-2 px-4 rounded-lg font-medium transition-colors ${
                isRegister
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>
          <br />
          {isRegister ? (
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <Link to={"/register-success"}>
                <BlueButton text={"Register"} />
              </Link>
            </form>
          ) : (
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <Link to={"/admin"}>
                <BlueButton text={"Log In"} />
              </Link>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
