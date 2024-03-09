


const form = document.querySelector("form");
const emailInput = document.querySelector("#e-mail");
const errorMsg = document.querySelector("#error-msg");
// errorInput.style.border = "1px solid rgb(160, 158, 158";


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    errorMsg.style.visibility = "visible";
    emailInput.classList.add("error"); // Add an 'error' class to the input
  } else {
    errorMsg.style.visibility = "hidden";
    emailInput.classList.remove("error"); // Remove the 'error' class if the email is valid
    window.location.href = "success_msg_page.html";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}