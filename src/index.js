import "modern-css-reset";
import "normalize.css";
import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const homeBtn = document.querySelector('button[data-class="home"]');
const aboutBtn = document.querySelector('button[data-class="about"]');
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    // Changes module on click based on their data-class.
    // Underlines clicked button and removes underline from other buttons.
    button.addEventListener("click", () => {
        for (const button of buttons) {
            button.classList.remove("underline");
        }
        if (button === homeBtn)renderHome();
        else if (button === aboutBtn) renderAbout(); 
        else renderMenu();
        button.classList.add("underline");
    });
});

 // Renders home page on load event.
window.addEventListener("load", () => {
    homeBtn.classList.add("underline");
    renderHome();
})


