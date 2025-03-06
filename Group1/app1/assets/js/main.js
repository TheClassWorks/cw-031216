// let btn=document.querySelector("#btn")
let btn = document.getElementById("btn");
let ulElem = document.querySelector(".list");

btn.addEventListener("click", function () {
  let newLi = document.createElement("li");
  newLi.innerText = "متن جدید";
  //newLi.innerHTML
  //newLi.textContent
  ulElem.append(newLi);
});
