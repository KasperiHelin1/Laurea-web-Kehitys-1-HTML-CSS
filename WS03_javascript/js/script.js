// Add your JavaScript solutions here.

const button = document.querySelector("#klikkasitMinua");
button.addEventListener("click", function(){
    alert("You clicked me!");
});

const naytaElaintaulukkoButton = document.querySelector("#naytaElaintaulukko");
naytaElaintaulukkoButton.addEventListener("click", function(){
    showTable();
});
function showTable() {
    const animal = ["Tiikeri", "Norsu"];
    const habitat = ["Metsä", "Savanni"];
    const diet = ["Liha", "Kasvi"];

    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal[0]}</td>
                <td>${habitat[0]}</td>
                <td>${diet[0]}</td>
            </tr>
            <tr>
                <td>${animal[1]}</td>
                <td>${habitat[1]}</td>
                <td>${diet[1]}</td>
            </tr>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");
    tableContainer.innerHTML = table;
}

const harjoitus2Header = document.querySelector("#harjoitus2");
harjoitus2Header.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});
const feedback = document.querySelector("#feedback");

const harjoitus1Header = document.querySelector("#harjoitus1");
harjoitus1Header.addEventListener("click", function() {
    harjoitus1Header.style.color = "red";
    harjoitus1Header.textContent = "Bye bye mouse!";
});
const feedbackForm = document.querySelector("#feedbackForm");


const status = document.querySelector("#status");

const charcount = document.querySelector("#charcount");

const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.textContent = "Kirjoita palautteesi tähän!";
    feedback.style.backgroundColor = "lightyellow";
});
feedback.addEventListener("blur", function(){
    status.textContent = "";
    feedback.style.backgroundColor = "white";
})
feedback.addEventListener("input", function() {
    const count = feedback.value.length;
    charcount.textContent = count +"/200";
    preview.textContent = feedback.value;
});
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const count = feedback.value.length;

    if (count < 10 || count > 200) {
        status.textContent ="Palaute täytyy olla 10–200 merkkiä pitkä.";
    }
    else {
        feedback.value ="";
        status.textContent = "Kiitos palautteestasi!";
    }

});


const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let count = 0;

document.addEventListener("keydown", function(event) {
    console.log(event);

    count++;
////käytin tekoälyä apuna, numeroiden laskemiseen ja onko ctrl alt yms////
    keyinfo.textContent =
        "Näppäin: " + event.key +
        ", koodi: " + event.code +
        ", painettu: " + count + " kertaa" +
        ", Shift: " + event.shiftKey +
        ", Ctrl: " + event.ctrlKey +
        ", Alt: " + event.altKey;

    keybox.textContent = event.key;
    keybox.style.fontSize = "3em";

    if (event.key === "Enter") {
        keybox.style.backgroundColor = "lightgreen";
    }
    else if (event.key === "Escape") {
        keybox.style.backgroundColor = "lightcoral";
    }
    else if (event.key === " ") {
        keybox.style.backgroundColor = "lightblue";
    }
    else {
        keybox.style.backgroundColor = "lightyellow";
    }
});
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    },
    (error) =>{
        console.log("Sijaintia ei voitu hake:", error.message);

    }   
);
const url = `https://www.google.com/maps?q=${lat},${lon}`;
window.location.href=url;