import mapImg from "./assets/map.jpg"

export default function renderAbout() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const img = document.createElement("img");
    img.classList.add("map");
    img.src = mapImg;
    img.alt = "Map of area where to find restaurant";

    const h1 = document.createElement("h1");
    h1.textContent = "You can find us here";

    const h2 = document.createElement("h2");
    h2.textContent = "reserve a table";

    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">Name:</label>
        <input id="name" name="guest-name" type="text">
        <label for="email">Email: </label>
        <input id="email" name="guest-email" type="email">
        <label for="info">Additional information: </label>
        <textarea rows="4" id="info" name="additional-info" placeholder="E.g how many guests"></textarea>
        <button type="submit">Submit</button>
    `;

    main.appendChild(h1);
    main.appendChild(img);
    main.appendChild(h2)
    main.appendChild(form);
};