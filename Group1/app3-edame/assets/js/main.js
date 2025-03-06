let err_msg = document.querySelector(".err");
let btn = document.getElementById("login");
let username = document.getElementById("username");
let password = document.querySelector(".pass");

function usernamevalidation() {
  if (username.value.length <= 3 || username.value.length >= 8) {
    // err_msg.style.display = "block";
    err_msg.style.visibility = "visible";
    err_msg.style.color = "red";
    err_msg.innerHTML = "نام کاربری نادرست است";
    err_msg.style.fontSize = "12px";
  }
  setTimeout(function () {
    // err_msg.style.display="none"
    err_msg.style.visibility = "hidden";
  }, 2000);
}
function passwordvalidation() {
  if (password.value.length <= 8) {
    // err_msg.style.display = "block";
    err_msg.style.visibility = "visible";
    err_msg.style.color = "red";
    err_msg.innerHTML = "گذرواژه نادرست است";
    err_msg.style.fontSize = "12px";
  }
  setTimeout(function () {
    // err_msg.style.display="none"
    err_msg.style.visibility = "hidden";
  }, 2000);
}

//--------------------- show password --------------------------
let cheshm = document.querySelector(".eye");
function showpass() {
  if (cheshm.getAttribute("class") == "fa-regular fa-eye-slash position-absolute eye") {
    cheshm.setAttribute("class", "fa-regular fa-eye position-absolute eye");
    password.setAttribute("type", "text");
  } else {
    cheshm.setAttribute("class", "fa-regular fa-eye-slash position-absolute eye");
    password.setAttribute("type", "password");
  }
}

console.log(cheshm.getAttribute("class") == "fa-regular fa-eye-slash position-absolute eye");

// console.log(isNaN(123));

//-------------------- blur , focus
password.addEventListener("blur", function () {
  console.log("از باکس پسورد خارج شدی");
});
username.addEventListener("input", function () {
  console.log("وارد باکس یوزر شدی");
});
