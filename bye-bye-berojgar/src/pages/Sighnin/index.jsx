import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Fake check for demo, replace with your backend call
    const email = e.target.email.value;
    if (email === "newuser@example.com") {
      navigate("/signup");
    } else {
      alert("Signed in successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="my-4 text-center">or</div>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            alert("Google Sign-In success!");
          }}
          onError={() => {
            alert("Google Sign-In failed");
          }}
        />

        <p className="mt-4 text-center text-sm">
          New here?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-pink-500 font-bold cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

