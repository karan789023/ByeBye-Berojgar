import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardList, Cpu, FolderOpen, Users } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: "Create Test",
      icon: <ClipboardList className="w-6 h-6 mr-2" />,
      color: "from-blue-500 to-indigo-600",
      route: "TestMaker",
    },
    {
      label: "Train Model",
      icon: <Cpu className="w-6 h-6 mr-2" />,
      color: "from-green-500 to-emerald-600",
      route: "/ModelTraning",
    },
    {
      label: "View All Tests",
      icon: <FolderOpen className="w-6 h-6 mr-2" />,
      color: "from-purple-500 to-pink-500",
      route: "/admin/all-tests",
    },
    {
      label: "Manage Users",
      icon: <Users className="w-6 h-6 mr-2" />,
      color: "from-orange-500 to-red-500",
      route: "/admin/users",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛠 Admin Dashboard
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-10 text-center text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome, Admin! Manage your platform easily — create tests, train AI models, and monitor users.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {buttons.map((btn, index) => (
          <motion.button
            key={btn.label}
            onClick={() => navigate(btn.route)}
            className={`flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r ${btn.color} shadow-lg hover:scale-105 transform transition-transform duration-300`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {btn.icon}
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Home;

