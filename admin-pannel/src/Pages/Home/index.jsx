import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="adminhome-container">
      <h1>🛠 Admin Panel - Home</h1>
      <p>Welcome, Admin! Use the options below to manage tests, models, and users.</p>

      <div className="admin-buttons">
        <button onClick={() => navigate("/admin/test-maker")}>📝 Create Test</button>
        <button onClick={() => navigate("/admin/model-training")}>🤖 Train Model</button>
        <button onClick={() => navigate("/admin/all-tests")}>📂 View All Tests</button>
        <button onClick={() => navigate("/admin/users")}>👥 Manage Users</button>
      </div>
    </div>
  );
};

export default Home;
