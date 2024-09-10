let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("menu-icon");
  navbar.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "25px",
  duration: 1000,
  reset: true,
});

sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 400, origin: "top" });
sr.reveal(".menu-btn", { delay: 520, origin: "right" });
sr.reveal(".home-text span", { delay: 600, origin: "top" });
sr.reveal(".home-text h1", { delay: 680, origin: "left" });
sr.reveal(".home-about", { delay: 750, origin: "right" });
sr.reveal(".main-btn", { delay: 860, origin: "bottom" });
sr.reveal(".home-img", { delay: 860, origin: "right" });
