export default (function() {
/* In here i will edit main page of the restaurant webpage. */
const main = document.querySelector("main"); // Main content DOM elements.
// Creating main content elements.
const about = document.createElement("h1");
about.textContent = "About us";
// about.style.fontSize = "3rem";

// Div which will hold 4 grid items inside of it.
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

// Creates 4 grid items.
function createGridItems() {
    for (let i = 0; i < 5; i++) {
        const gridItem = document.createElement("div");
        gridContainer.appendChild(gridItem);

        // Adds different content to different grid item, based on their id.
        if (i === 0) {
            gridItem.textContent = `Nestled in the heart of a quiet village, this old Latgalian restaurant preserves the essence of regional 
                                    hospitality and culinary tradition. Every dish served is a reflection of ancestral recipes passed down 
                                    through generations. Here, time slows down, and each meal becomes a story told with firewood, clay pots, 
                                    and wild herbs. This is more than a restaurant—it’s a living memory of Latgale’s soul.`;
        }
        else if (i === 1) {
            gridItem.innerHTML = `<img src="${imgOne}" alt="A village restaurant in old Latgalian style with traditional wooden building.">`
        }
        else if (i === 2) {
            gridItem.innerHTML = `<img src="${imgTwo}" alt="A group of restaurant staff and possibly the owner stand together in front of a rustic wooden building with a thatched roof. The building has a sign above the entrance that reads RESTAURĀNS. The staff wear simple linen clothing and aprons, standing or sitting in a relaxed and proud pose. The setting conveys a warm, welcoming, and traditional atmosphere in a rural village environment." />`
        }
        else if (i === 3) {
            gridItem.textContent = `The inspiration to open this restaurant came from childhood memories spent in my grandmother’s kitchen,
                                    where the scent of freshly baked bread and simmering stews filled the air. 
                                    Each dish here is a tribute to the people who lived close to the land and cooked with heart. This place is 
                                    my way of keeping those roots alive and sharing them with others.`;
        }
        else if (i === 4) {
            gridItem.innerHTML = `<h2>Opening hours</h2>
                                  <ul>
                                    <li>Monday <span>12:00 - 21:00</span></li>
                                    <li>Tuesday <span>11:00 - 21:00</span></li>
                                    <li>Wednesday <span>12:00 - 21:00</span></li>
                                    <li>Thursday <span>12:00 - 22:00</span></li>
                                    <li>Friday <span>12:00 - 00:00</span></li>
                                    <li>Saturday <span>12:00 - 00:00</span></li>
                                    <li>Sunday <span>CLOSED</span></li>
                                  </ul>`;
        }
    }
}

main.appendChild(about);
main.appendChild(gridContainer);
createGridItems();

})();

import imgOne from "./assets/imgOne.png";
import imgTwo from "./assets/imgTwo.png";