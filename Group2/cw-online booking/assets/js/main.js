let Data = {
  اصفهان: ["اصفهان", "کاشان", "شهرضا"],
  فارس: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  خوزستان: ["اهواز", "آبادان", "ماهشهر"],
  تهران: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  "خراسان رضوی": ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
  "استان مقصد را انتخاب کنید ...": ["انتخاب کنید ..."],
};

let ostan = document.getElementById("ostan");
let city = document.getElementById("shahr");

// console.log(Data["فارس"]);
ostan.addEventListener("change", function () {
  // console.log(ostan.value);
  console.log(Data[ostan.value]);
  let cities = Data[ostan.value];
  // cities.forEach(function (item) {
  //   let newCity = document.createElement("option");
  //   newCity.innerHTML = item;
  //   city.append(newCity);
  // });

  city.innerHTML = "";
  cities.forEach((item) => {
    let newCity = document.createElement("option");
    newCity.innerHTML = item;
    city.append(newCity);
  });
});
