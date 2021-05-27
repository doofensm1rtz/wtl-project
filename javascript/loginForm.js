const rm_checkbox = document.querySelector("#remember");
const labelText = document.querySelector(".rm__text");
const passwordIcon = document.querySelector(".pass__icon");
const passwordInput = document.querySelector("#pass__input");
const inputUserID = document.querySelector(".input__userID");
const userIDErrorMessage = document.querySelector(".error_username");
const passwordErrorMessage = document.querySelector(".error_password");
const loginButton = document.querySelector(".form__button");

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

// Check username validation
const usernameValidation = (e) => {
  const userID = e.target.value;
  const regex = new RegExp("^[a-zA-Z0-9]*$");

  if (regex.test(userID)) {
    if (userIDErrorMessage.classList.contains("active")) {
      userIDErrorMessage.classList.remove("active");
    }
  } else {
    if (!userIDErrorMessage.classList.contains("active")) {
      userIDErrorMessage.classList.add("active");
    }
  }
};

// Check password validation
$("#pass__input").on("input", (e) => {
  const passwordText = e.target.value;
  const regex = new RegExp("^[a-zA-Z0-9@#-]*$");

  if (regex.test(passwordText)) {
    if ($(".error_password").hasClass("active")) {
      $(".error_password").removeClass("active");
    }
  } else {
    if (!$(".error_password").hasClass("active")) {
      $(".error_password").addClass("active");
    }
  }
});

// Login button click
const loginButtonClick = (e) => {
  e.preventDefault();

  if ($("input[name=rd]:checked").length === 0) {
    alert("Select login type.");
    return;
  }

  if (passwordInput.value.length === 0 || inputUserID.value.length === 0) {
    alert("Empty inputs.");
    return;
  }

  if (passwordInput.value.length < 8) {
    alert("Enter password with length greater than 8");
    return;
  }

  alert("Successful login");
};

const loginMouseOver = () => {
  if (
    userIDErrorMessage.classList.contains("active") ||
    passwordErrorMessage.classList.contains("active")
  )
    loginButton.classList.add("form__button_disabled");
  else loginButton.classList.remove("form__button_disabled");
};

const loginMouseOut = () => {
  if (
    !userIDErrorMessage.classList.contains("active") &&
    !passwordErrorMessage.classList.contains("active")
  )
    loginButton.classList.remove("form__button_disabled");
};

rm_checkbox.addEventListener("click", changeLabelColor);
passwordIcon.addEventListener("click", changePasswordIcon);
inputUserID.addEventListener("input", usernameValidation);
loginButton.addEventListener("click", loginButtonClick);
loginButton.addEventListener("mouseover", loginMouseOver);
loginButton.addEventListener("mouseout", loginMouseOut);
