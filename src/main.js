import "./style.css";

const titleSection = document.querySelector(".title_container");
const contactSection = document.querySelector(".contact_container");
const button = document.querySelector(".btn");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

button.addEventListener("click", () => {
  contactSection.style.display = "flex";
  titleSection.style.display = "none";
  button.remove();

  const buttonBack = document.createElement("button");
  buttonBack.textContent = "X";
  header.appendChild(buttonBack);

  buttonBack.addEventListener("click", () => {
    contactSection.style.display = "none";
    titleSection.style.display = "flex";
    buttonBack.remove();
    header.appendChild(button);
  });
});

function footerDate() {
  function time() {
    const date = new Date();
    return date.getFullYear();
  }

  footer.innerHTML = "Warszawa " + time();
}
footerDate();
