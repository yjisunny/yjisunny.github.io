const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bgImage = document.createElement('img');
bgImage.src = `img/bg/${chosenImage}`;

// document.body.appendChild(bgImage); 
// 제일 마지막에 추가, prepend는 맨위에 추가
document.querySelector('.cover').appendChild(bgImage);
