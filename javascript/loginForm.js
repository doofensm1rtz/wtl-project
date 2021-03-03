const rm_checkbox = document.querySelector("#remember");
const labelText = document.querySelector(".rm__text");
const passwordIcon = document.querySelector(".pass__icon");
const passwordInput = document.querySelector("#pass__input");

// Change checkbox label color on select
const changeLabelColor = () => {
  rm_checkbox.checked
    ? labelText.classList.add("rm__text-active")
    : labelText.classList.remove("rm__text-active");
};

// Change password icon on click
const changePasswordIcon = () => {
  const icon = passwordIcon.childNodes[0];
  if (icon.classList.contains("fa-eye-slash")) {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
};

rm_checkbox.addEventListener("click", changeLabelColor, false);
passwordIcon.addEventListener("click", changePasswordIcon, false);
