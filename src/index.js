import "modern-css-reset";
import "normalize.css";
import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const homeBtn = document.querySelector('button[data-class="home"]');
const aboutBtn = document.querySelector('button[data-class="about"]');
const menuBtn = document.querySelector('button[data-class="menu"]');
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        for (const button of buttons) {
            button.classList.remove("underline");
        }
        button.classList.add("underline");
    });
});

 // Renders home page on load event.
window.addEventListener("load", () => {
    homeBtn.classList.add("underline");
    renderHome();
})
// Changes module on click based on their data-class.
homeBtn.addEventListener("click", () => {
    renderHome();
});
aboutBtn.addEventListener("click", () => {
    renderAbout();
});
menuBtn.addEventListener("click", () => {
    renderMenu();
});


