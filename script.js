let leftBtn = document.querySelector('.leftButton');
let rightBtn = document.querySelector('.rightButton');
let quoteContainerMain = document.querySelector('.quoteContainerMain');
let mid = document.querySelector('.mid');
let right = document.querySelector('.right');
let originalQuote = document.querySelector('.original');
let currentQuote = 0;
let direction;

objectArray = [
  {
    img: './images/tonysoprano.webp',
    quote: '“Even a broken clock is right twice a day.” \nTony Soprano',
  },
  {
    img: './images/nuckythomson.webp',
    quote: `"The beginning's over. The end hasn't come yet. All I care about is now." \nEnoch Nucky Thomson`,
  },
  {
    img: './images/saulgoodman.webp',
    quote: `"Perfection Is The Enemy Of Perfectly Adequate." \nSaul Goodman`,
  },
  {
    img: './images/franklin.webp',
    quote: `"The Pentagon spends 250 Billion a year on Defense but you needed my pocket change!!!"  \nFranklin`,
  },
  {
    img: './images/stevemurphy.webp',
    quote: `"Nothing gives the fearful more courage than another's fear." \nSteve Murphy`,
  },
];

leftBtn.addEventListener('click', () => {
  if (originalQuote) {
    originalQuote.className = 'left';
    setTimeout(() => {
      originalQuote.remove();
    }, 550);
  }
  quoteContainerMain.lastChild.className = 'left';
  removeLeft();
  direction = 'left';
  let image;
  let quote;
  if (currentQuote === 0) {
    currentQuote = 4;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    createQuote(image, quote);
    console.log(currentQuote);
  } else {
    --currentQuote;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    createQuote(image, quote);
  }
});

rightBtn.addEventListener('click', () => {
  if (originalQuote) {
    originalQuote.className = 'right';
    setTimeout(() => {
      originalQuote.remove();
    }, 550);
  }
  quoteContainerMain.lastChild.className = 'right';
  removeRight();
  direction = 'right';
  let image;
  let quote;
  if (currentQuote === 4) {
    currentQuote = 0;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    createQuote(image, quote);
    console.log(currentQuote);
  } else {
    ++currentQuote;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    createQuote(image, quote);
  }
});

function createQuote(image, quote) {
  console.log(quote);
  let divMid = document.createElement('div');
  let imgMid = document.createElement('img');
  let quoteMid = document.createElement('p');
  if (direction === 'left') {
    divMid.classList.add('right');
    setTimeout(() => {
      divMid.className = 'mid';
    });
  } else if (direction === 'right') {
    divMid.classList.add('left');
    setTimeout(() => {
      divMid.className = 'mid';
    });
  }

  quoteMid.className = 'quote';
  imgMid.src = image;
  quoteMid.textContent = quote;
  quoteContainerMain.append(divMid);
  divMid.append(imgMid);
  divMid.append(quoteMid);
}

function removeLeft() {
  setTimeout(() => {
    let leftClass = document.querySelector('.left');
    leftClass.remove();
  }, 2000);
}

function removeRight() {
  setTimeout(() => {
    let rightClass = document.querySelector('.right');
    rightClass.remove();
  }, 2000);
}
