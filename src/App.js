import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PatientDatabase from "./pages/PatientDatabase";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientSignUp from "./pages/PatientSignUp";

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
        <Route path="/PatientSignUp" element={<PatientSignUp />} />
        {/* <Route path=":detail" element={<DetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
