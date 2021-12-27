// A page where patients can see who is on duty and contact details

import OpenCloseToggle from ".././components/OpenCloseToggle";

export default function DoctorSchedule() {
  return (
    <div>
      <h3>Who is on duty?</h3>

      <OpenCloseToggle />

      <p> To make an appointment </p>
      <p> Call: 030 197 5555 </p>
    </div>
  );
}
