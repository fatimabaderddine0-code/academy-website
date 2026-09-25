const container = document.getElementById("myCoursesContainer");

const registrations =
  JSON.parse(localStorage.getItem("registrations")) || [];
const currentUserEmail =
  localStorage.getItem("currentUserEmail");
const myRegistrations = registrations.filter((registration) => {
  return registration.email === currentUserEmail;
});
if (myRegistrations.length === 0) {
  container.innerHTML = `
    <div class="col-12 text-center">
      <p class="lead">You have not registered for any courses yet.</p>

      <a href="courses.html" class="btn btn-primary">
        Explore Courses
      </a>
    </div>
  `;
}
myRegistrations.forEach((registration) => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">

          <h5 class="card-title">
            ${registration.course}
          </h5>

          <p class="card-text">
            <strong>Status:</strong> Registered
          </p>

        </div>
      </div>
    </div>
  `;
});