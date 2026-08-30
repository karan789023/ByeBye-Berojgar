// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Goverment from "./pages/Goverment";
import Neet from "./pages/Neet";
import Jee from "./pages/Jee";
import Analysis from "./pages/Analysis";
import Skills from "./pages/Skills";
import Sighnin from "./pages/Sighnin";
import Sighnup from "./pages/Sighnup";
import Testpage from "./pages/Testpage";
import Govt from "./pages/Govt";
import GovernmentTests from "./pages/GovernmentTests/GovernmentTests";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Goverment" element={<Goverment />} />
         <Route path="Neet" element={<Neet />} />
         <Route path="Jee" element={<Jee />} />
         <Route path="Terms" element={<Terms />} />
         <Route path="ContactUs" element={<ContactUs />} />
         <Route path="AboutUs" element={<AboutUs/>} />
         <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
         <Route path="/Analysis" element={<Analysis />} />
         <Route path="Skills" element={<Skills />} />
         <Route path="Sighnin" element={<Sighnin />} />
         <Route path="Sighnup" element={<Sighnup />} />
         <Route path="/test/:id" element={<Testpage />} />
     


         <Route path="Govt" element={<Govt />} />
           <Route path="/government-tests" element={<GovernmentTests />} />
      </Routes>
    </Router>
  );
}

export default App;
