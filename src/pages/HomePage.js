// A homepage with contact details

import { NavLink } from "react-router-dom";
import OpenCloseToggle from ".././components/OpenCloseToggle";

export default function HomePage() {
  return (
    <div>
      <h3> Welcome to Utrecht Doctors </h3>
      <OpenCloseToggle />
      <p> To make an appointment </p>
      <p> Call: 030 197 5555 </p>

      <button>
        <NavLink to="/DoctorSchedule">Doctor Schedule</NavLink>
      </button>
      <button>
        <NavLink to="/PatientSignup">I am a new patient</NavLink>
      </button>
    </div>
  );
}
