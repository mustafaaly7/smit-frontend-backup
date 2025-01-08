import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-OpazD70S.png";
import BlueButton from "./components/button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual backend integration
    console.log("Password reset link sent to:", email);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center items-center mb-4">
          <img src={logo} alt="Logo" className="h-32" />
        </div>
        <h1 className="text-xl font-bold text-center" style={{ color: "#44a1dc" }}>
          Forgot Password
        </h1>
        <br/>
        {success ? (
          <div className="text-center text-green-500 mt-4">
            A password reset link has been sent to your email.
            <br />
            <Link to="/" className="text-blue-500 hover:underline">
              Go back to Login
            </Link>
          </div>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
            <BlueButton text="Send Reset Link" className="w-full" />
          </form>
        )}
      </div>
    </div>
  );
}
