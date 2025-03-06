let zaman = document.querySelector(".zaman");

// let options = {
//   second: "2-digit",
//   hour: "2-digit",
//   minute: "numeric",
//   hour12: false,
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
// };

// varzesh3.com ساعت شبیه سایت
let options = {
  hour: "2-digit",
  minute: "numeric",
  hour12: false,
  day: "numeric",
  month: "long",
  weekday: "long",
};

setInterval(() => {
  let tarikh = new Date();
  zaman.innerHTML = tarikh.toLocaleString("fa-IR", options).replace("ساعت", "-");
}, 1000);
