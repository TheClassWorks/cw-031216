let btn = document.getElementById("btn");
let ulElem = document.querySelector(".list");

btn.addEventListener("click", function () {
  let newLi = document.createElement("li");
  //   newLi.innerHTML;
  //   newLi.textContent
  newLi.innerText = "متن جدید";
  ulElem.append(newLi);
});
