const imgs = document.querySelectorAll(".carousel-item");
const totalImg = imgs.length;
let imgPosition = 0;
const previous = document.querySelector(".left");
const next = document.querySelector(".rigth");
previous.addEventListener("click", moveToPreImg);
next.addEventListener("click", moveToNextImg);

function moveToPreImg() {
  hideAll();
  if (imgPosition == 0) {
    imgPosition =  totalImg-1;
  } else {
    imgPosition--;
  }
  imgs[imgPosition].classList.add("visible");
}
function moveToNextImg() {
  hideAll();
  if (imgPosition == totalImg - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  imgs[imgPosition].classList.add("visible");
}
function hideAll() {
  for (let img of imgs) {
    img.classList.remove("visible");
  }
}
