const setup = () => {
    let today = new Date();
    let verjaardag = new Date(2001,8,21);
    console.log(Math.floor((today.getTime() - verjaardag.getTime()) / (1000 * 60 * 60 * 24)) + " dagen dat ik leef") ;
}
window.addEventListener("load", setup);