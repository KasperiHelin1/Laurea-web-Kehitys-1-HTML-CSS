///muokataan otsikkoa kun nappia painetaan
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function() {
   taskOneHeading.textContent = "Muokattu otsikko!"; 
});

//muokkaa otsikon tyyliä kun nappia painetaan


const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
});

//muokkaa eläintekstin
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

    changeTextButton.addEventListener("click", function() {
        animalText.textContent = "Elefantit ovat maailman suurimpia maaeläimiä. Elefanteilla on jäätävän isot korvat ja ne ovat maailman suurimpia maanisäkkäitä!";
    })

// vaihtaa tausta väriä kun nappia painetaan
const changeBackgroundColorButton = document.querySelector("#changeBackgroundColorButton");
const body = document.querySelector("body");

changeBackgroundColorButton.addEventListener("click", function() {
    body.classList.toggle("dark-theme");
});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function(){
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu");
});






// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");



// listener for the select element from the drop down list.
animalSelect.addEventListener("change", function() {
    const selectedAnimal = animalSelect.value;

    console.log("selected animal:", selectedAnimal);
   
    if(selectedAnimal === "tiger"){
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia suuria kissaeläimiä, jotka elävät pääasiassa Aasiassa. Ne ovat tunnettuja voimastaan ja kauneudestaan.";


    }
    else if(selectedAnimal === "elephant"){
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Tämä on elefantti";
        animalDescription.textContent = "Elefantit ovat suuria nisäkkäitä, jotka tunnetaan pitkistä kärsistään ja suurista korvistaan. Ne elävät pääasiassa Afrikassa ja Aasiassa.";
    }
    else if(selectedAnimal === "panda"){
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Pandat ovat mustavalkoisia karhuja, jotka elävät pääasiassa Kiinassa. Ne tunnetaan erityisesti bambun syömisestä ja rauhallisesta luonteestaan.";
    }
    else if(selectedAnimal === "penguin"){
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Tämä on pingviini";
        animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja, jotka elävät pääasiassa eteläisellä pallonpuoliskolla. Ne ovat tunnettuja mustavalkoisesta ulkonäöstään ja kyvystään uida.";
    };
});

    // function to update the DOM based on the selected animal
