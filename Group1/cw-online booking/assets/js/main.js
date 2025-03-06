let Data = {
  اصفهان: ["اصفهان", "کاشان", "شهرضا"],
  فارس: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  خوزستان: ["اهواز", "آبادان", "ماهشهر"],
  تهران: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  "خراسان رضوی": ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
  "استان مقصد را انتخاب کنید ...": ["انتخاب کنید ..."],
};

let ostan = document.getElementById("ostan");
let city = document.getElementById("city");

ostan.addEventListener("change", function () {
  //  console.log(Data[ostan.value]);
  let cities = Data[ostan.value];
  // console.log(cities);

  // cities.forEach(function (shahr) {
  //   let newCity = document.createElement("option");
  //   newCity.innerHTML = shahr;
  //   city.append(newCity);
  // });

  city.innerHTML = "";
  cities.forEach((shahr) => {
    let newCity = document.createElement("option");
    newCity.innerHTML = shahr;
    city.append(newCity);
  });
});
