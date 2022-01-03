import { useNavigate } from "react-router-dom";

export const PatientCard = ({
  patient: { firstName, lastName, id, birthDate },
}) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <p>Name: {firstName + " " + lastName}</p>
      <p>Id: {id}</p>
      <p>Date of Birth: {birthDate}</p>
      <button onClick={() => navigate(`/patients/${id}`)}>Show Details</button>
    </div>
  );
};
