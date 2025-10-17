const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

/*
 * Watch this tutorial on YouTube
 * https://youtu.be/1o3IToGRSoI
 */

const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  .matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches;
const shouldRun = !isReducedMotion && !isTouch;

if (shouldRun) {
  let mouseX = 0;
  let mouseY = 0;

  const pointer = document.querySelector(".pointer");
  const coordinates = document.querySelector("#coordinates strong");

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // console.log(mouseX, mouseY);
    if (coordinates) {
      coordinates.innerText = `x: ${mouseX} y: ${mouseY}`;
    }
  });

  function animate() {
    pointer.style.setProperty("--mouseX", `${mouseX}px`);
    pointer.style.setProperty("--mouseY", `${mouseY}px`);
    requestAnimationFrame(animate);
  }

  animate();
}

var overlay = document.getElementById("overlay");

window.addEventListener('load' ,function(){
      overlay.style.display = 'none';
})

// for form-contact running
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// for achivment section scrolling

let valueDisplays = document.querySelectorAll(".achievements-scrolling-animation");
let interval = 2500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
