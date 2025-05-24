import mapImg from "./assets/map.jpg"

export default function renderAbout() {
    const main = document.querySelector("main");
    main.innerHTML = ` `;

    main.innerHTML = `
        <h1>You can find us here</h1>
        <img id="map" src="${mapImg}">
    `;
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">Name: 
        <input id="name" name="guest-name" type="text"></input>
        <label for="email">Email: 
        <input id="email" name="guest-email" type="email"></input>
        <label for="info">Additional information: 
        <textarea placeholder="E.g how many guests"></textarea>
        <button type="submit">Submit</button>
    `;

    main.appendChild(form);
};