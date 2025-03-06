let Data = {
  اصفهان: ["اصفهان", "کاشان", "شهرضا"],
  فارس: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  خوزستان: ["اهواز", "آبادان", "ماهشهر"],
  تهران: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  "خراسان رضوی": ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
  "استان مقصد را انتخاب کنید ...": ["انتخاب کنید ..."],
};

let ostan = document.getElementById("ostan");
let citySB = document.getElementById("shahr");

// console.log(Data["خراسان رضوی"]);

ostan.addEventListener("change", function () {
  // console.log(ostan.value);
  let cities = Data[ostan.value];
  console.log(cities);
  citySB.innerHTML = "";
  cities.forEach(function (city) {
    let newCity = document.createElement("option");
    newCity.innerHTML = city;
    citySB.append(newCity);
  });
});
