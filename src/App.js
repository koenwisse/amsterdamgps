import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PatientDatabase from "./pages/PatientDatabase";
import DoctorSchedule from "./pages/DoctorSchedule";
import DetailPatient from "./pages/DetailPatient";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        {/* when the path  is "/" we want to render element Homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/PatientDatabase" element={<PatientDatabase />} />
        <Route path="/DoctorSchedule" element={<DoctorSchedule />} />
        <Route path="/PatientSignUp" element={<Signup />} />
        {/* use dynamic routing wih : to ask for data in your url. Parameters work like function arguments. Parameters allow you to input controllable variables through requests. */}
        <Route path="/patients/:id" element={<DetailPatient />} />
      </Routes>
    </div>
  );
}

export default App;
