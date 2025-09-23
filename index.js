// <!-- Lightbox Custom Options -->



//  Theme Toggle Script 
const toggleButton = document.getElementById("toggleTheme");
const icon = document.getElementById("themeIcon");
const htmlElement = document.documentElement;

toggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-bs-theme", newTheme);
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
