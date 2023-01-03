//Carousel
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".button-next");
const prevSlide = document.querySelector(".button-prev");

let curSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
});

nextSlide.addEventListener("click", function(){
  if (curSlide === maxSlide){
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

prevSlide.addEventListener("click", function(){
  if (curSlide === 0){
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

