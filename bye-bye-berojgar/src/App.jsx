// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Goverment from "./pages/Goverment";
import Neet from "./pages/Neet";
import Jee from "./pages/Jee";
import Analyis from "./pages/Analyis";
import Skills from "./pages/Skills";
import Sighnin from "./pages/Sighnin";
import Sighnup from "./pages/Sighnup";
import Testpage from "./pages/Testpage";
import Govt from "./pages/Govt";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Goverment" element={<Goverment />} />
         <Route path="Neet" element={<Neet />} />
         <Route path="Jee" element={<Jee />} />
         <Route path="Analyis" element={<Analyis />} />
         <Route path="Skills" element={<Skills />} />
         <Route path="Sighnin" element={<Sighnin />} />
         <Route path="Sighnup" element={<Sighnup />} />
         <Route path="/test/:id" element={<Testpage />} />

         <Route path="Govt" element={<Govt />} />
      </Routes>
    </Router>
  );
}

export default App;
