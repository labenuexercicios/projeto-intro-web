const btn = document.querySelector(".button-nav");
const menu = document.querySelector(".menu-ul");
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
}) 