
// VARIABLES DECLARATION AND INITIALIZATION

//add images to html file
const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.down');
const prev = document.querySelector('.up');

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

next.addEventListener('click',nextFunction);
prev.addEventListener('click',prevFunction);

// Conditional statement for images visualization
for(let i = 1; i <= numImages; i++){
  sliderHtml += `
      <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  thumbsHtml += `
      <img  class="item-thumb" src="img/0${i}.jpg" alt="">
  `;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');

function nextFunction(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages++;
  if(counterImages === numImages) counterImages = 0;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');

};

function prevFunction(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages--;
  if(counterImages < 0) counterImages = numImages - 1;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
};

//Carousel autoplay function

slider.addEventListener('mouseover', autoPlayStop);
slider.addEventListener('mouseout', autoPlayStart);

function playCarousel(){
  setInterval(nextFunction, 2000);
};

//Stop play when mouse over slider
function autoPlayStop(){
  clearInterval(nextFunction);
  console.log ("falso");
};

//Start again when mouse out of slider
function autoPlayStart(){
  playCarousel(true);
  console.log ("vero");
};

// playCarousel();