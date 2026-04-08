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
