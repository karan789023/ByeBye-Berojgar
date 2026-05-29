
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SIGNUP
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATION
    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://byebye-berojgar-7.onrender.com/api/auth/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      // SAVE USER
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Account Created Successfully ✅");

      // REDIRECT
      navigate("/signin");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Signup Failed ❌"
      );

    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleSignUp = () => {
    window.location.href =
      "https://byebye-berojgar-7.onrender.com/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

      {/* BG EFFECT */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px]" />

      <div className="absolute w-[350px] h-[350px] bg-pink-500 rounded-full blur-[140px] opacity-20 bottom-[-100px] right-[-100px]" />

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8"
      >

        {/* LOGO */}
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
            <Sparkles
              className="text-white"
              size={32}
            />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Register with Email & Password 🚀
        </p>

        {/* NAME */}
        <div className="mb-5">
          <label className="text-gray-200 text-sm mb-2 block">
            Full Name
          </label>

          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">

            <User
              className="text-gray-300 mr-3"
              size={20}
            />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-gray-200 text-sm mb-2 block">
            Email
          </label>

          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">

            <Mail
              className="text-gray-300 mr-3"
              size={20}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-gray-200 text-sm mb-2 block">
            Password
          </label>

          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3">

            <Lock
              className="text-gray-300 mr-3"
              size={20}
            />

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-lg"
        >
          {loading
            ? "Creating Account..."
            : "Sign Up"}
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/20"></div>

          <span className="text-gray-300 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-white/20"></div>
        </div>

        {/* GOOGLE */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 rounded-xl font-medium"
        >
          <FcGoogle size={24} />

          Continue with Google
        </button>

        {/* FOOTER */}
        <p className="text-center text-gray-300 text-sm mt-8">
          Already have an account?{" "}

          <a
            href="/signin"
            className="text-pink-300 font-semibold"
          >
            Sign In
          </a>
        </p>

      </form>
    </div>
  );
};

export default SignUp;

