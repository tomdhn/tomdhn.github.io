const setup = () => {
    window.alert("dit is een alert");
    console.log(window.confirm("weet u het zeker?"));
    console.log(window.prompt("wat is uw naam?"));
}
window.addEventListener("load", setup);