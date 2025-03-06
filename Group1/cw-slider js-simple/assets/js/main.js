let Data = [
  { id: 0, src: "assets/img/header-1.jpg" },
  { id: 1, src: "assets/img/header-2.jpg" },
  { id: 2, src: "assets/img/header-3.jpg" },
  { id: 3, src: "assets/img/header-4.jpg" },
];

// console.log(Data[1]);

let ax = document.querySelector(".slider-img");
let next = document.querySelector(".slider-forward-btn");
let back = document.querySelector(".slider-back-btn");

let clr = setInterval(nextimage, 3000);
next.addEventListener("click", nextimage);

let index = 0;
function nextimage() {
  index++;
  if (index >= 4) {
    index = 0;
  }
  // console.log(Data[index]);
  // console.log(Data[index].src);
  ax.setAttribute("src", Data[index].src);
  clearInterval(clr);
}

