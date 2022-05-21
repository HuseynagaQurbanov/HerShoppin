var passwordIcon = document.querySelector(".password-icon");
var passwordInput = document.querySelector(".password-input");

passwordIcon.addEventListener("click", () => {
  if (passwordIcon.classList.contains("fa-eye-slash") == true) {
    passwordIcon.classList.replace("fa-eye-slash", "fa-eye");

    passwordInput.setAttribute("type" , "text");
  } else if (passwordIcon.classList.contains("fa-eye") == true) {
    passwordIcon.classList.replace("fa-eye", "fa-eye-slash");

    passwordInput.setAttribute("type" , "password");
  }
});
