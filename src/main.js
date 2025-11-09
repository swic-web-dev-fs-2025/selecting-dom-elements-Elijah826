import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

const header = document.getElementById("main-header");
console.info(header);

const navbarLinks = document.querySelectorAll(".navbar a");
console.info(`Number of links in navbar: ${navbarLinks.length}`);

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.textContent += " [internal]";
});
console.info(`Number of internal links: ${internalLinks.length}`);

const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach((input) => {
  input.style.outline = "2px solid gold";
});
console.info(`Number of required inputs: ${requiredInputs.length}`);

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.setAttribute("data-viewed", "true");
});
console.info(`Number of cards: ${cards.length}`);
