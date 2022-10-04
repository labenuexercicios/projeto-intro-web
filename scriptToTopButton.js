// cria a função scrollToTop button que joga a visão até o topo
let toTop = document.getElementById("scroll-top");

window.onscroll = () => scrollFunction()

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}