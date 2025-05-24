const button = document.querySelectorAll("button");
const main = document.querySelector("main");

import "modern-css-reset";
import "normalize.css";
import "./styles.css";
import mainPage from "./home.js";


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        import(`./${btn.dataset.class}`); // Imports module based on their data-class
    });
})

// TODO: Need to implement function to reset inner html of main section, and then replace it.

