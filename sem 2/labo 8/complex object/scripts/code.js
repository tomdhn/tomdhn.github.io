const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993‐12‐31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
    }
    let student2 = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"}}';

    let leerling1 = JSON.stringify(student1);
    let leerling2 = JSON.parse(student2);
    console.log(leerling1);
    console.log(leerling2.voornaam);
    console.log(leerling2);
}
window.addEventListener("load", setup);