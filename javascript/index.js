function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let italyElement = document.querySelector("#italy");
  if (italyElement) {
    let italyDateElement = italyElement.querySelector(".date");
    let italyTimeElement = italyElement.querySelector(".time");
    let italyTime = moment().tz("Europe/Prague");

    italyDateElement.innerHTML = italyTime.format("MMMM	Do YYYY");
    italyTimeElement.innerHTML = italyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let meridaElement = document.querySelector("#merida");
  if (meridaElement) {
    let meridaDateElement = merida.querySelector(".date");
    let meridaTimeElement = merida.querySelector(".time");
    let meridaTime = moment().tz("America/Merida");

    meridaDateElement.innerHTML = meridaTime.format("MMMM	Do YYYY");
    meridaTimeElement.innerHTML = meridaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("MMMM	Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
