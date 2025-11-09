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
