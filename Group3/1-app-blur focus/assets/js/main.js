let username = document.getElementById("username");
let ramz = document.getElementById("pass");

let btn = document.getElementById("login");
let err_msg = document.querySelector(".err");

function usernamevalidation() {
  if (username.value.length <= 3 || username.value.length >= 8) {
    // err_msg.style.display = "block";
    err_msg.style.visibility = "visible";
    err_msg.style.color = "red";
    err_msg.innerText = "نام کاربری مناسب نیست";
    err_msg.style.fontSize = "14px";
  }

  setTimeout(function () {
    // err_msg.style.display = "none";
    err_msg.style.visibility = "hidden";
  }, 2000);
}
function passwordvalidation() {
  if (ramz.value.length <= 8) {
    // err_msg.style.display = "block";
    err_msg.style.visibility = "visible";
    err_msg.style.color = "red";
    err_msg.innerText = "گذرواژه مناسب نیست";
    err_msg.style.fontSize = "14px";
  }

  setTimeout(function () {
    // err_msg.style.display = "none";
    err_msg.style.visibility = "hidden";
  }, 2000);
}

//--------------------- show password ---------------------------

let cheshm = document.querySelector(".eye");
function showPass() {
  if (cheshm.getAttribute("class") == "fa-regular fa-eye position-absolute eye") {
    cheshm.setAttribute("class", "fa-regular fa-eye-slash position-absolute eye");
    ramz.setAttribute("type", "password");
  } else {
    cheshm.setAttribute("class", "fa-regular fa-eye position-absolute eye");
    ramz.setAttribute("type", "text");
  }
}

//-------------------------- blur & focus ---------------------
ramz.addEventListener("blur", function () {
  console.log("از باکس رمز خارج شدی");
});

username.addEventListener("focus", function () {
  console.log("وارد باکس یوزر شدی");
});
