const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const courseCards = document.querySelectorAll(".course-card");
function filterCourses() {
  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;
  const levelValue = levelFilter.value;
  courseCards.forEach((card) => {
  const courseName = card.dataset.name.toLowerCase();
  const courseCategory = card.dataset.category;
  const courseLevel = card.dataset.level;
  const matchesSearch = courseName.includes(searchValue);

  const matchesCategory =
    categoryValue === "all" || courseCategory === categoryValue;

  const matchesLevel =
    levelValue === "all" || courseLevel === levelValue;
    if (matchesSearch && matchesCategory && matchesLevel) {
     card.style.display = "block";
 } else {
     card.style.display = "none";
}
});
}
searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);
levelFilter.addEventListener("change", filterCourses);