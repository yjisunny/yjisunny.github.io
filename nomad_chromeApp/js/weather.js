const API_KEY = 'd770543b6359d6d65bb50c39789c4964'; 

function onGeoOk(position){  // success
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude;  // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(url).then(response => response.json()).then(data => {
    const weatherDiv = document.querySelector('#weather');
    const city = document.querySelector('#weather p:nth-child(1)');
    const weather = document.querySelector('#weather p:nth-child(2)');
    const iconCode = data.weather[0].icon; // API 날짜별 아이콘 코드 (https://openweathermap.org/weather-conditions)
    const iconImg = document.createElement("img");
    iconImg.src = `img/weather/${iconCode}.svg`;

    weatherDiv.prepend(iconImg);
    city.innerText = `${data.name}`; // 도시 인듯
    weather.innerText = `날씨 : ${data.weather[0].main}\n온도 : ${data.main.temp}`; // json 타입에서 추출, weather는 그중에 배열이었음.
    /*
    feels_like: 30.54
    humidity: 69
    pressure: 1006
    temp: 28
    temp_max: 31.14
    temp_min: 27.05

    느낌: 30.54
    습도: 69
    압력: 1006
    온도: 28
    temp_max: 31.14
    temp_min: 27.05
    */
  
  });
  /*
    <promise타입>
    서버에 무언가 물어봤는데 서버가 응답하는데 5분이 걸린다고 예상했을때, then() 이용
  */
}

function onGeoError() { // error
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // (success, error)