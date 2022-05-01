let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    if(document.querySelector(".invalid") === null){
        let persoon = geefPersoon();
        let lijst = document.querySelector("#lstPersonen");
        if(document.querySelector(".selected") === null){
            let persoonElement = document.createElement("option");
            persoonElement.append( persoon.familienaam + " " + persoon.voornaam);
            lijst.append(persoonElement);
            personen.push(persoon);
            bewerkNieuwePersoon();
            persoonElement.addEventListener("click", toonGegevens);
        } else {
            update(geefPersoon(),lijst.selectedIndex);
            lijst.children[lijst.selectedIndex].classList.remove("selected");
            bewerkNieuwePersoon();
        }
    }
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const geefPersoon = () => {
    return persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        kinderen: document.getElementById("txtAantalKinderen").value,
    };
}

const toonGegevens = (event) => {
    let persoonIndex = event.target.parentElement.selectedIndex;
    document.getElementById("txtVoornaam").value = personen[persoonIndex].voornaam;
    document.getElementById("txtFamilienaam").value = personen[persoonIndex].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[persoonIndex].geboorteDatum;
    document.getElementById("txtEmail").value = personen[persoonIndex].email;
    document.getElementById("txtAantalKinderen").value = personen[persoonIndex].kinderen;
    event.target.classList.add("selected");
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    document.querySelectorAll(".line").forEach(item => {
        item.children[1].value = "";
        clearError(item.children[1]);
        })
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const update = (persoon, index) => {
    document.querySelector('#lstPersonen').children[index].innerText = persoon.familienaam + " " + persoon.voornaam;
    personen[index] = persoon;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);