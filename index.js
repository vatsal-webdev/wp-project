//JavaScript for the form

const loginBtnElement = document.getElementById("login-buttons");

//Redirecting to the quiz page
loginBtnElement.addEventListener("click", () => {
  location.href = "quiz.html";
});
