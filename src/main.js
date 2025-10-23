import "./style.css";

document.querySelector("#app").innerHTML = `
  <header>
    <button class="btn">Kontakt</button>
  </header>                                                                                                                                                                                                                                                                                                                     
  <div class="title_container">
    <img src="./src/assets/logo_web_light.png" alt="Logo" /> 
    <h1>website creation for business</h1>
    <h2>Michał Barański</h2>
    <h3>Web Developer</h3>
  </div>
  <div class="contact_container">
    <h4>Kontakt</h4>
    <h5>Email: michal.baranski.dev@gmail.com</h5>
    <h6>Phone: +48 665 323 204</h6>
  </div>
  <footer>Warszawa ${time()}</footer>
`;

const titleSection = document.querySelector(".title_container");
const contactSection = document.querySelector(".contact_container");
const button = document.querySelector(".btn");
const header = document.querySelector("header");

function time() {
  const date = new Date();
  return date.getFullYear();
}

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
