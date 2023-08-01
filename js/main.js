var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".ligtbox-container");
var lightBoxItem = document.querySelector(".ligtbox-item");
var closeIcon = document.getElementById("close");
var nextIcon = document.getElementById("next");
var prevIcon = document.getElementById("prev");
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    currentIndex = imgs.indexOf(e.target);
    var currentSrc = e.target.src;
    lightBoxContainer.style.display = "flex";
    lightBoxItem.style.backgroundImage = `url(${currentSrc})`;
  });
}
closeIcon.addEventListener("click", closeSlider);
function closeSlider() {
  lightBoxContainer.style.display = "none";
}
nextIcon.addEventListener("click", getNextSlide);

function getNextSlide() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  var currentSrc = imgs[currentIndex].src;
  lightBoxItem.style.backgroundImage = `url(${currentSrc})`;
}
prevIcon.addEventListener("click", getprevSlide);

function getprevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  var currentSrc = imgs[currentIndex].src;
  lightBoxItem.style.backgroundImage = `url(${currentSrc})`;
}

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    getNextSlide();
  } else if (e.key == "ArrowLeft") {
    getprevSlide();
  } else if (e.key == "Escape") {
    closeSlider();
  }
});
