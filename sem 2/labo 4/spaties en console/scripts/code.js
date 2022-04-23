const setup = () => {

    let button = document.getElementById("button");

    button.addEventListener("click", Uitvoeren)
}
window.addEventListener("load", setup);

const Uitvoeren = () => {
    let woord = document.getElementById("input");
    console.log(MaakMetSpaties(woord))
}

const MaakMetSpaties = (input) => {

    let letters = input.value.split('');
    let woordMetSpaties = "";
    for (let i = 0; i < letters.length; i++) {
        if(letters[i] !== " "){
            woordMetSpaties += letters[i];
        }
    }

    return woordMetSpaties.split('').join(' ')
}