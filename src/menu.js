import mainImg from "./assets/main.jpg";
import snackImg from "./assets/snack.jpg";
import drinkImg from "./assets/drink.jpg";

export default function renderMenu() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("menu-grid-container");

    function createGridItems() {
        for (let i = 0; i < menuGridItems.length; i++) {
            const gridItem = document.createElement("div");
            if (menuGridItems[i].type === "html") {
                gridItem.innerHTML = menuGridItems[i].content;
            }
            else {
                gridItem.innerHTML = `<img src="${menuGridItems[i].content}" alt="${menuGridItems[i].description}">`;
            }
            gridContainer.appendChild(gridItem);
        }
    }

    const menuGridItems = [
        {
            type: "html",
            description: "", // Alt for img.
            content: ` 
                <h2 class="grid-title">Main Course</h2>
                <ul class="menu-list">
                    <li><span class="food">Kļockys</span><span class="price">€12</span></li>
                    <li><span class="food">Guļbiņs</span><span class="price">€7</span></li>
                    <li><span class="food">Sīvys piereņš</span><span class="price">€7</span></li>
                    <li><span class="food">Asuškas</span><span class="price">€9</span></li>
                </ul>
            `
        },
        {
            type: "img",
            description: "Image of traditional eastern european food",
            content: mainImg
        },
        {
            type: "img",
            description: "Image of traditional eastern european snack",
            content: snackImg
        },
        {
            type: "html",
            description: "", // Alt for img.
            content: ` 
                <h2 class="grid-title">Appetizers</h2>
                <ul class="menu-list">
                    <li><span class="food">Kūpināta speķa šķēles ar sīpoliem</span><span class="price">€2</span></li>
                    <li><span class="food">Sālīta siļķe ar vārītiem kartupeļiem</span><span class="price">€3</span></li>
                    <li><span class="food">Skābu kāpostu salāti </span><span class="price">€3</span></li>
                    <li><span class="food">Rupjmaize ar biezpienu un zaļumiem</span><span class="price">€2</span></li>
                </ul>
            `
        },
        {
            type: "html",
            description: "", // Alt for img.
            content: ` 
                <h2 class="grid-title">Beverages</h2>
                <ul class="menu-list">
                    <li><span class="food">Kvass</span><span class="price">€2</span></li>
                    <li><span class="food">Mājās brūvēts alus </span><span class="price">€4</span></li>
                    <li><span class="food">Zāļu tēja</span><span class="price">€1</span></li>
                    <li><span class="food">Mājas upeņu sula</span><span class="price">€1</span></li>
                </ul>
            `
        },
        {
            type: "img",
            description: "Image of traditional eastern european drink",
            content: drinkImg
        }
    ];
    main.appendChild(gridContainer);
    createGridItems();
};