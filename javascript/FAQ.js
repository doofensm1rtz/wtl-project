const questions = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

questions.forEach((question) =>
  question.addEventListener("click", toggleAccordion)
);
