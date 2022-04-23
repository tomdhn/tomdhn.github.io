const setup = () => {
    let passagiers = document.getElementById("passagiers").value.split(",");
    let output = "";
    let outputText = document.getElementsByTagName("div");

}

const GeefWagens = (passagier1, passagier2) => {
    return passagier1 + "------" + passagier2 + "\n";
}
window.addEventListener("load", setup);