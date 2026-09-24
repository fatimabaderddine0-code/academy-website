const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value;
  if (name === "" || email === "" || phone === "" || course === "") {
  alert("Please fill in all required fields.");
  return;
}
if (!email.includes("@")) {
  alert("Please enter a valid email address.");
  return;
}
if (phone.length < 8) {
  alert("Please enter a valid phone number.");
  return;
}
const registration = {
  name: name,
  email: email,
  phone: phone,
  course: course,
  message: message
};
let registrations =
  JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push(registration);
  localStorage.setItem(
  "registrations",
  JSON.stringify(registrations)
);
alert("Registration submitted successfully!");
form.reset();
});