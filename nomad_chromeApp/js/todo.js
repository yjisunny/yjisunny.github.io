const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

// const toDos = [];  
/*
  [] 항상 빈 배열로 하면 새로 리스트를 생성시 이전 localStroage 값들이 지워짐 
  let으로 잡아주고 하단에서 parsedToDos 값들을 넣어줌.
*/ 
let toDos = [];
const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // handleToDoSubmit 함수에서 담은 배열
}

function deleteToDo(event) {
  // console.dir(event.target.parentElement.innerText);  
  // 버튼의 부모는 li인 상태.
  // 어떤 button이 선택되어졌는지 콘솔창에서 확인가능
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));  // li.id와 다른 id의 toDo만 남김(return) = 선택한 id 삭제
  saveToDos();
}

function paintToDo(newTodo) {
  // console.log('I will paint', newTodo);
  const li = document.createElement('li');
  li.id = newTodo.id;   // li에 id생성, object의 "id"
  const span = document.createElement('span');
  span.innerText = newTodo.text;  // object의 "text"
  const button = document.createElement('button');
  button.title = '완료';
  button.innerText = '✔';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.prepend(li);
  // console.log(toDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  
  const newTodo = toDoInput.value;
  toDoInput.value = ''; // 입력 및 저장 후 빈칸으로 만들어줌
  // console.log(newTodo, "/" ,toDoInput.value);
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // delete시 각각의 값을 불러올수 있게 랜덤한 id를 부여한 object형태로 저장
  };
  toDos.push(newTodoObj);  // 배열에 담아 localStorage에 담을 예정.
  // console.log(toDos);
  paintToDo(newTodoObj); // ul 밑에 li,span,innerText 생성 작업
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

////////// 브라우저 load시 자동 실행 /////////////
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null) { // localStorage값이 비어있지 않으면
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}