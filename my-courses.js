const container = document.getElementById("myCoursesContainer");

const registrations =
  JSON.parse(localStorage.getItem("registrations")) || [];
if (registrations.length === 0) {
  container.innerHTML = `
    <div class="col-12 text-center">
      <p class="lead">You have not registered for any courses yet.</p>

      <a href="courses.html" class="btn btn-primary">
        Explore Courses
      </a>
    </div>
  `;
}
registrations.forEach((registration) => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">

          <h5 class="card-title">
            ${registration.course}
          </h5>

          <p class="card-text">
            <strong>Name:</strong> ${registration.name}
          </p>

          <p class="card-text">
            <strong>Email:</strong> ${registration.email}
          </p>

          <p class="card-text">
            <strong>Phone:</strong> ${registration.phone}
          </p>

        </div>
      </div>
    </div>
  `;
});