const burger = document.getElementById("burger");
const burgerSlider = document.getElementById("burger__slider");

if (burger && burgerSlider) {
  burger.addEventListener("click", () => {
    console.log("click");
    burgerSlider.classList.toggle("hide");
  });
}
