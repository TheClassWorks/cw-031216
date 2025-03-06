let h2Elem = document.getElementById("zaman");
// let options = {
//  weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// };

// varzesh3.com مثل سایت
let options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};
setInterval(() => {
  let zaman = new Date();
//   let str = zaman.toLocaleString("fa-IR", options);
//   let s = str.replace("ساعت", "-");
//   h2Elem.innerHTML = s;

  h2Elem.innerHTML = zaman.toLocaleString("fa-IR", options).replace("ساعت", "-");
}, 1000);
