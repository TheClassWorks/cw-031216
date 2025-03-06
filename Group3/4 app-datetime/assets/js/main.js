let h2Elem = document.getElementById("zaman");

let options = {
  weekday: "long",
  //   year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  //   hour12: true,
};

setInterval(function () {
  let date = new Date();
  //   let str = date.toLocaleString("fa-IR", options);
  //   let s = str.replace("ساعت", "-");
  h2Elem.innerHTML = date.toLocaleString("fa-IR", options).replace("ساعت", "-");
}, 1000);
