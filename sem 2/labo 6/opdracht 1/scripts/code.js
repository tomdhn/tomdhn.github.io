const setup = () => {
    let body = document.getElementsByTagName("body")[0];
    let oldP = body.firstElementChild;
    let newP = document.createTextNode("Good Job");
    oldP.firstChild.remove();
    oldP.prepend(newP);
}
window.addEventListener("load", setup);