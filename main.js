// Function Typing
var typed = new Typed(".develop", {
  strings: ["Frontend Developer", "Full Stack Developer", "Designer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

//Function  button change
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const icon =toggleBtn.querySelector("i");
  if (body.classList.contains("dark-mode")){
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
  else{
     icon.classList.remove("fa-moon");
     icon.classList.add("fa-sun")
  }
});
 
// image slider
const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".slide-btn.left");
const rightBtn = document.querySelector(".slide-btn.right");

let position = 0;
const moveAmount = 310;
const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;

rightBtn.addEventListener("click", () => {
  position -= moveAmount;

  if (Math.abs(position) > maxScroll) {
    position = 0;
  }

  slider.style.transform = `translateX(${position}px)`;
});

leftBtn.addEventListener("click", () => {
  position += moveAmount;

  if (position > 0) {
    position = -maxScroll;
  }

  slider.style.transform = `translateX(${position}px)`;
});

