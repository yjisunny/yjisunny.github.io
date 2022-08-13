const clock = document.querySelector("span#clock");
// clock.innerText = "tik tok...";

function getClock() {
  const date = new Date();
  
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const days = ['일','월','화','수','목','금','토'];
  
  days.forEach((item, index) => {
    if(date.getDay() === index) {
      clock.innerText = `${year}-${month}-${day} ${item}요일 \n${hours}시 ${minutes}분 ${seconds}초`;
      return false;
    }
  });


}

getClock();
setInterval(getClock, 1000); // 1초마다 반복실행
// setTimeout(getClock, 1000); // 1초뒤에 한번 실행