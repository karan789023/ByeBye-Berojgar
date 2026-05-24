import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8 w-full max-w-md text-white"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            Welcome to
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
          ByeBye Berojgar
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block mb-1 font-medium text-white/90">
              Full Name
            </label>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-indigo-400 transition">
              <User size={20} className="mr-2 text-indigo-300" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-transparent w-full outline-none text-white placeholder-white/50"
              />
            </div>
          </div>

          {/* Mobile Number Input */}
          <div>
            <label className="block mb-1 font-medium text-white/90">
              Mobile Number
            </label>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-indigo-400 transition">
              <Phone size={20} className="mr-2 text-indigo-300" />
              <input
                type="tel"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength="10"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your 10-digit number"
                className="bg-transparent w-full outline-none text-white placeholder-white/50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:from-indigo-500 hover:to-pink-500 text-white shadow-lg transition-all"
          >
            Create Account
          </motion.button>
        </form>

        {/* Sign In Link */}
        <p className="text-center mt-6 text-white/80">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-300 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

