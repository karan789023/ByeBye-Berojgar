import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TestMaker from "./Pages/TestMaker";
import ModelTraining from "./Pages/modelTraning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="TestMaker" element={<TestMaker/>} />
         <Route path="ModelTraning" element={<ModelTraining/>} />
      </Routes>
    </Router>
  );
}

export default App;