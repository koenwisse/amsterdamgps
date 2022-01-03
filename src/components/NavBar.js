import "../App.css";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <header className="App-header">
      <NavLink exact activeClassName="active" to="/">
        HOME
      </NavLink>
      <NavLink exact activeClassName="active" to="/PatientDatabase">
        PATIENT DATA
      </NavLink>
      <NavLink exact activeClassName="active" to="/DoctorSchedule">
        SCHEDULE
      </NavLink>
      <NavLink exact activeClassName="active" to="/PatientSignUp">
        SIGNUP
      </NavLink>
    </header>
  );
}
