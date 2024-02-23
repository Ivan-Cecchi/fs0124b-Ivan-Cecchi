let scrollThreshold = 500;

function cambiaColoreAllHeader() {
  let currentScrollPosition = window.scrollY;
  let header = document.querySelector("header");
  let nav = header.querySelector("nav");
  let button = nav.querySelector("button");

  if (currentScrollPosition > scrollThreshold) {
    header.classList.add("cambiaColore");
    button.classList.add("cambiaColoreBtn");
  } else {
    header.classList.remove("cambiaColore");
    button.classList.remove("cambiaColoreBtn");
  }
}

window.addEventListener("scroll", cambiaColoreAllHeader);
