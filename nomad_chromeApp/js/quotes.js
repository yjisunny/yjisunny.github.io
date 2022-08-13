const quotes = [
  {
    quote: '나이가 들수록 해보지 않았던 것에 대해서만 후회한다는 것을 발견하게 될 것이다.',
    author: 'Zachary Scott (재커리 스코트)',
  },
  {
    quote: '현재가 과거와 다르길 바란다면 과거를 공부하라.',
    author: 'Baruch Spinoza (바뤼흐 스피노자)',
  },
  {
    quote: '멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.',
    author: 'Anna Pavlova (안나 파블로바)',
  },
  {
    quote: '아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라. 우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.',
    author: 'Thomas Jefferson (토마스 제퍼슨)',
  },
  {
    quote: '조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다.',
    author: 'Oprah Winfrey (오프라 윈프리)',
  },
  {
    quote: '이 세상에 위대한 사람은 없다. 단지 평범한 사람들이 일어나 맞서는 위대한 도전이 있을 뿐이다.',
    author: 'William Frederick Halsey, Jr. (윌리엄 프레데릭 홀시)',
  },
  {
    quote: '난관은 낙담이 아닌 분발을 위한 것이다. 인간의 정신은 투쟁을 통해 강해진다.',
    author: 'William Ellery Channing (윌리엄 앨러리 채닝)',
  },
  {
    quote: '걱정거리를 두고 웃는 법을 배우지 못하면 나이가 들었을 때 웃을 일이 전혀 없을 것이다.',
    author: 'Edgar Watson Howe (에드가 왓슨 하우)',
  },
  {
    quote: '그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라, 시간이야말로 인생을 형성하는 재료이기 때문이다.',
    author: 'Benjamin Franklin (벤자민 프랭클린)',
  },
  {
    quote: '바쁜 자는 단지 마귀 하나로부터 유혹받지만, 한가로운 자는 수많은 마귀들로부터 유혹당한다.',
    author: 'Thomas Fuller (토마스 풀러)',
  },
];

const quote = document.querySelector("#quote p:nth-child(1)");
const author = document.querySelector("#quote p:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




