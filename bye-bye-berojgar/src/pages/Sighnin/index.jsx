import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Mail, Lock, Sparkles } from "lucide-react";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // =========================
  // 🔐 NORMAL LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("https://byebye-berojgar-7.onrender.com/api/auth/login", {
        email,
        password
      });

      // ✅ SAVE USER + TOKEN
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login Success ✅");

      // 🔥 REDIRECT TO ACCOUNT
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 🔴 GOOGLE LOGIN
  // =========================
  const handleGoogleSignIn = () => {
    window.location.href = "https://byebye-berojgar-7.onrender.com/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute w-[350px] h-[350px] bg-pink-500 rounded-full blur-[140px] opacity-20 bottom-[-100px] right-[-100px]" />

      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8"
      >

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
            <Sparkles className="text-white" size={32} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Login to continue your journey 🚀
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="text-gray-200 text-sm mb-2 block">
            Email Address
          </label>

          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:border-purple-400 transition">
            <Mail className="text-gray-300 mr-3" size={20} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="text-gray-200 text-sm mb-2 block">
            Password
          </label>

          <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:border-purple-400 transition">
            <Lock className="text-gray-300 mr-3" size={20} />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <a
            href="/forgot-password"
            className="text-sm text-purple-300 hover:text-white transition"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          {loading ? "Logging in..." : "Sign In"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/20"></div>
          <span className="text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/20"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-8">
          Don’t have an account?{" "}
          <a
            href="ShinUp"
            className="text-pink-300 hover:text-white font-semibold"
          >
            Create Account
          </a>
        </p>

      </form>
    </div>
  );
};

export default SignIn;