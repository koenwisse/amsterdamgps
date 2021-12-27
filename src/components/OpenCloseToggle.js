// We also want to indicate wether the practice is **open**
// or **closed** at the moment when the user visit the page
// (updating open or closed while the user is already on the
// page is not required) Business logic: the practice is open
// between 08:00 and 16:59

const OpenCloseToggle = () => {
  const localTime = new Date().toString();
  console.log(localTime);
  const hourOfDay = new Date(localTime);
  console.log(hourOfDay.getHours());

  return 8 < hourOfDay.getHours() && hourOfDay.getHours() < 17
    ? "We are open"
    : "We are closed";
}; // when putting in the values directly from the var it works (8, 15, 20) but not when I put in the var

console.log(OpenCloseToggle());

export default OpenCloseToggle;
