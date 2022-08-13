const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const ddayForm = document.querySelector("#dday-form");
const ddayTitleInput = document.querySelector("#dday-form input:nth-child(1)");
const ddayInput = document.querySelector("#dday-form input:nth-child(2)");
const ddayClock = document.querySelector("#ddayClock");

const HIDDEN_CLASSNAME = "hidden";  // 클래스 이름 변수로 잡아줌(중복돼서)
const USERNAME_KEY = "username";
const DDAYTITLE_KEY = "ddaytitle";
const DDAY_KEY = "dday";

function untilChristmas(title, date) {
  const newDate = new Date(date);
  const today = new Date();
  const dday = newDate - today;

  const day = Math.floor(dday / (1000*60*60*24));
  // const hour = (Math.floor((dday / (1000*60*60)) % 24)).toString().padStart(2, "0");
  // const min = (Math.floor((dday / (1000*60)) % 60)).toString().padStart(2, "0");
  // const sec = (Math.floor(dday / 1000 % 60)).toString().padStart(2, "0");

  ddayClock.querySelector('span:nth-child(1)').innerText = `${title}\n( ${date} )\n`; // p에 삽입
  ddayClock.querySelector('span:nth-child(2)').innerText = `D-${day}`; // p에 삽입
  ddayClock.classList.remove(HIDDEN_CLASSNAME);  // p .hidden css 제거
}

function onSaveSubmit(event) {
  event.preventDefault(); // 새로고침 되지 않도록
  
  if(event.target.id === 'login-form') {
    loginForm.classList.add(HIDDEN_CLASSNAME);  // .hidden css 추가
  
    const username = loginInput.value;  // input값 가져오기
    localStorage.setItem(USERNAME_KEY, username); // username 할당
  
    paintScreen(username, 'login');
  } else if(event.target.id === 'dday-form') {
    // 날짜 정규식
    const pattern = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    const newDate = new Date(ddayInput.value);
    const today = new Date();

    if(newDate < today) {
      alert('현재 시점보다 나중으로 입력하세요.');
      ddayInput.value = '';
      ddayInput.focus();
    } else if (pattern.test(ddayInput.value)) {
      ddayForm.classList.add(HIDDEN_CLASSNAME);  // .hidden css 추가
      
      const dday = ddayInput.value;
      localStorage.setItem(DDAY_KEY, dday);

      const ddaytitle = ddayTitleInput.value;
      localStorage.setItem(DDAYTITLE_KEY, ddaytitle);
      
      paintScreen(ddaytitle, dday);
    } else {
      alert('yyyy-mm-dd 형식으로 입력해주세요.');
      ddayInput.value = '';
      ddayInput.focus();
    }
  }
}

function paintScreen(saved, name) {
  if(name === 'login') {
    greeting.innerText = `${saved}'s Home`; // h1에 삽입
    greeting.classList.remove(HIDDEN_CLASSNAME);  // h1 .hidden css 제거
    document.title = `${saved}'s Home`;
  } else {
    untilChristmas(saved, name);
  }
}

function checkLocalStorage(USERNAME_KEY, DDAYTITLE_KEY) {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  const savedDdaytitle = localStorage.getItem(DDAYTITLE_KEY);
  const savedDday = localStorage.getItem(DDAY_KEY);
  //localStorage : 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB같은 API
  
  if(savedUsername === null) {
    // form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSaveSubmit);  // submit버튼 클릭시 이벤트
  } else {
    // h1 보여주기 
    paintScreen(savedUsername, 'login');
  }
  
  if(savedDdaytitle === null) {
    // form 보여주기
    ddayForm.classList.remove(HIDDEN_CLASSNAME);
    ddayForm.addEventListener("submit", onSaveSubmit);  // submit버튼 클릭시 이벤트
  } else {
    // p 보여주기 
    paintScreen(savedDdaytitle, savedDday);
  }
}

checkLocalStorage(USERNAME_KEY, DDAYTITLE_KEY);