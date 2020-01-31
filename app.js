const menu = document.querySelector(".menu--mobile");
const show = document.querySelector(".show");
const list = document.querySelectorAll(".list--drop-down");
const button = document.querySelector(".button-drop-down");
toggle(show);
function toggle(element) {
  if (element.style.display == "none") {
    element.style.display = "block";
    console.log(element.style.display);
  } else {
    element.style.display = "none";
    console.log(element.style.display);
  }
}
menu.addEventListener("click", () => toggle(show));
button.addEventListener("click", () => toggle(show));

list.forEach(item => {
  item.addEventListener("click", () => toggle(show));
});