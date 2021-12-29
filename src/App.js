import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PatientDatabase from "./pages/PatientDatabase";
import DoctorSchedule from "./pages/DoctorSchedule";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PatientDatabase" element={<PatientDatabase />} />
        <Route path="/DoctorSchedule" element={<DoctorSchedule />} />
        <Route path="/PatientSignUp" element={<Signup />} />
        {/* <Route path=":detail" element={<DetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
