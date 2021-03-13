//toggle menu
const selectElement = (el) => {
  return document.querySelector(el);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

//click body/link to close menu
document.addEventListener("click", (e) => {
  if (menuToggler.contains(e.target)) return;
  body.classList.remove("open");
});

//scroll reveal
ScrollReveal().reveal(".animate-left", {
  origin: "left",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});

ScrollReveal().reveal(".animate-right", {
  origin: "right",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});

ScrollReveal().reveal(".animate-top", {
  origin: "top",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});

ScrollReveal().reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1500,
  distance: "25rem",
  delay: 300,
});
