const localTime = new Date().toString();
console.log(localTime);
const hourOfDay = new Date(localTime);
console.log(hourOfDay.getHours());
// expected output: 4
