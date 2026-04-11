function displayInfo() {
  ///Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyDate = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyDate.format("MMMM Do, YYYY");
  sydneyTime.innerHTML = sydneyDate.format("h:mm:ss [<small>]A[</small>]");

  ///Detroit
  let detroitElement = document.querySelector("#detroit");

  let detroitTime = detroitElement.querySelector(".time");
  let detroitDateElement = detroitElement.querySelector(".date");
  let detroitDate = moment().tz("America/Detroit");

  detroitDateElement.innerHTML = detroitDate.format("MMMM Do, YYYY");
  detroitTime.innerHTML = detroitDate.format("h:mm:ss [<small>]A[</small>]");
}
displayInfo();
setInterval(displayInfo, 1000);

function updateCity(event) {
  let cityTz = null;
  cityTz = event.target.value;
  console.log(cityTz);
  if (cityTz === "current") {
    cityTz = moment.tz.guess();
  }
  if (cityTz === "city") {
    cityTz = moment.tz.guess();
  }

  function updateTime() {
    let cityElement = document.querySelector("#cities");
    let cityTime = moment().tz(cityTz).format("h:mm:ss [<small>]A[</small>]");
    let cityDate = moment().tz(cityTz).format("MMMM Do, YYYY");
    let cityName = cityTz.replace("_", " ").split("/")[1];
    cityElement.innerHTML = `<div class="time-clock" >
        <div class="city-info">
    <div class="city"> ${cityName}<div class="date">${cityDate}</div></div>
    <div class="time" id="time"> ${cityTime}
   </div></div></div> 
    <a href="/">All cities</a>`;

    if (
      cityElement ===
      `<div class="time-clock" >
        <div class="city-info">
    <div class="city"> ${cityName}<div class="date">${cityDate}</div></div>
    <div class="time" id="time"> ${cityTime}
   </div></div></div> 
    <a href="/">All cities</a>`
    ) {
      setTimeout();
    }
    console.log(cityTz);
  }
  //let selectChange = document.querySelector("#location")
  //selectChange.addEventListener("change", )
  //clearInterval();

  //updateTime();
  //timeSelect.addEventListener("change", clearInterval(updateTime));
  let intervalidId = null;

  function startInterval() {
    if (intervalidId !== null) {
      clearInterval(intervalidId);
    }
    intervalidId = setInterval(updateTime, 1000);
  }
  startInterval();
}

let timeSelectElement = document.querySelector("#location");
timeSelectElement.addEventListener("change", updateCity);
