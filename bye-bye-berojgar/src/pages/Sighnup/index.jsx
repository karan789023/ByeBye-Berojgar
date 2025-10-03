import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center">or</div>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            alert("Google Sign-Up success!");
          }}
          onError={() => {
            alert("Google Sign-Up failed");
          }}
        />

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-500 font-bold cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
