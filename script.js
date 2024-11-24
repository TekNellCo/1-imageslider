let leftBtn = document.querySelector('.leftButton');
let rightBtn = document.querySelector('.rightButton');
let btn = document.querySelectorAll('.btn');
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
    bg: 'url(./images/backgrounds/sopranosbg.webp)',
  },
  {
    img: './images/nuckythomson.webp',
    quote: `"The beginning's over. The end hasn't come yet. All I care about is now." \nEnoch Nucky Thomson`,
    bg: 'url(./images/backgrounds/boardwalkbg.webp)',
  },
  {
    img: './images/saulgoodman.webp',
    quote: `"Perfection is the enemy of perfectly adequate." \nSaul Goodman`,
    bg: 'url(./images/backgrounds/saulbg.webp)',
  },
  {
    img: './images/franklin.webp',
    quote: `"The Pentagon spends 250 Billion a year on defense but you needed my pocket change?!"  \nFranklin`,
    bg: 'url(./images/backgrounds/snowfallbg.webp)',
  },
  {
    img: './images/stevemurphy.webp',
    quote: `"Nothing gives the fearful more courage than another's fear." \nSteve Murphy`,
    bg: 'url(./images/backgrounds/narcosbg.webp)',
  },
  {
    img: './images/penguin.webp',
    quote: `"How's anyone supposed to know your worth unless you tell 'em, huh?"  \nOswald Cobb`,
    bg: 'url(./images/backgrounds/penguinbg.webp)',
  },
  {
    img: './images/gennaro.webp',
    quote: `"Nasty thing, fear. If you can't manage it, it gets dangerous, you lose your mental clarity. It takes practice to manage fear."  \nGennaro Savastano`,
    bg: 'url(./images/backgrounds/gommorahbg.webp)',
  },
];

rightBtn.addEventListener('click', () => {
  rightBtn.classList.add('clicked');

  setTimeout(() => {
    rightBtn.classList.remove('clicked');
  }, 100);
  if (originalQuote) {
    originalQuote.className = 'left';
    setTimeout(() => {
      originalQuote.remove();
    }, 100);
  }

  quoteContainerMain.lastChild.className = 'left';
  removeLeft();
  direction = 'left';
  let image;
  let quote;
  let bg;
  if (currentQuote === 0) {
    currentQuote = 6;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    bg = objectArray[currentQuote].bg;
    createQuote(image, quote, bg);
    console.log(currentQuote);
  } else {
    --currentQuote;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    bg = objectArray[currentQuote].bg;
    createQuote(image, quote, bg);
  }
});

leftBtn.addEventListener('click', () => {
  leftBtn.classList.add('clicked');

  setTimeout(() => {
    leftBtn.classList.remove('clicked');
  }, 100);
  if (originalQuote) {
    originalQuote.className = 'right';
    setTimeout(() => {
      originalQuote.remove();
    }, 100);
  }
  quoteContainerMain.lastChild.className = 'right';
  removeRight();
  direction = 'right';
  let image;
  let quote;
  let bg;
  if (currentQuote === 6) {
    currentQuote = 0;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    bg = objectArray[currentQuote].bg;
    createQuote(image, quote, bg);
    console.log(currentQuote);
  } else {
    ++currentQuote;
    image = objectArray[currentQuote].img;
    quote = objectArray[currentQuote].quote;
    bg = objectArray[currentQuote].bg;

    createQuote(image, quote, bg);
  }
});

function createQuote(image, quote, bg) {
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
  divMid.style.cssText = `background-image : ${bg}`;
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
    leftClass ? leftClass.remove() : null;
  }, 2000);
}

function removeRight() {
  setTimeout(() => {
    let rightClass = document.querySelector('.right');
    rightClass ? rightClass.remove() : null;
  }, 2000);
}
