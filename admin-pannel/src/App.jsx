import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./Pages/Home";
import TestMaker from "./Pages/TestMaker";
import ModelTraining from "./Pages/modelTraning";
import alltest from "./Pages/alltests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="TestMaker" element={<TestMaker/>} />
         <Route path="ModelTraning" element={<ModelTraining/>} />
          <Route path="alltests" element={<alltests/>} />
      </Routes>
    </Router>
  );
}

export default App;