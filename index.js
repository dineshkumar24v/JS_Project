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

// contact form script
const form = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        form.classList.remove("was-validated");
        form.classList.add("d-none");
        thankYou.classList.remove("d-none");

        // 🎉 Fire confetti burst!
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        });

        // ⏱️ Optional: hide the thank-you after 6 seconds
        setTimeout(() => {
          thankYou.classList.add("d-none");
          form.classList.remove("d-none");
        }, 9000);
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch((error) => {
      alert("Error submitting form.");
    });
});
