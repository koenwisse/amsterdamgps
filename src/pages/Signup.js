import { useState } from "react";

export default function Signup() {
  const [formState, setFormState] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    gender: 0,
    dob: undefined,
  });
  const [done, setDone] = useState(false);

  const onFieldUpdate = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    // Extra: check if all keys hold some value as validation

    const allFilled = Object.keys(formState).every((k) => !!formState[k]);

    if (allFilled) {
      setDone("Thank you for registering");
    } else {
      setDone("Please fill in all the fields in the form");
    }

    // Make it disappear after 2.5 seconds
    setTimeout(() => setDone(false), 2500);
  };

  const { fName, lName, email, phone, gender, dob } = formState;
  return (
    <div>
      <h1>Patient Signup</h1>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label>First name</label>
            <input
              type="text"
              value={fName}
              name="fName"
              onChange={onFieldUpdate}
            />
          </div>
          <div className="form-row">
            <label>Last name</label>
            <input
              type="text"
              value={lName}
              name="lName"
              onChange={onFieldUpdate}
            />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input
              type="text"
              value={email}
              name="email"
              onChange={onFieldUpdate}
            />
          </div>
          <div className="form-row">
            <label>Phone</label>
            <input
              type="number"
              value={phone}
              name="phone"
              onChange={onFieldUpdate}
            />
          </div>
          <div className="form-row">
            <label>Gender</label>
            <select value={gender} name="gender" onChange={onFieldUpdate}>
              <option value={0}>Select</option>
              <option value="f">Female</option>
              <option value="m">Male</option>
            </select>
          </div>
          <div className="form-row">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              name="dob"
              onChange={onFieldUpdate}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div style={{ marginTop: 20 }}>{done}</div>
    </div>
  );
}
