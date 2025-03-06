let dokme = document.getElementById("btn");
let ulElem = document.querySelector(".list");

dokme.addEventListener("click", function () {
  let newLi = document.createElement("li");
  //   newLi.innerHTML
  //   newLi.textContent
  newLi.innerText = "متن جدید";
  ulElem.append(newLi);
});

let arr = [12, 15, 2, 13, 9];
arr.forEach(function (adad) {
  console.log(adad * 2);
});
