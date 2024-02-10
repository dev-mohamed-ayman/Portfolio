const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const exampleText = ["Developer.", "Backend", "Frontend"];
const exampleTyping = new AutoTyping("#autoTyping", exampleText, {
  typeSpeed: 70,
  deleteSpeed: 70,
  waitBeforeDelete: 1500,
  waitBetweenWords: 1000,
});
exampleTyping.start();

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}
function mode() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.querySelector("html").classList.remove("dark");
  } else if (localStorage.theme === "light") {
    localStorage.theme = "dark";
    document.querySelector("html").classList.add("dark");
  } else {
    localStorage.theme = "dark";
    document.querySelector("html").classList.add("dark");
  }
}