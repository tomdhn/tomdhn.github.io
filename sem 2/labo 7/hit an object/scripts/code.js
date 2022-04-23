const setup = () => {
    startButton.addEventListener("click", start);
    klikObject.addEventListener("click", click);
}

let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    timerId: 0
};

const score = document.getElementById("score");
const klikObject = document.getElementById("klikObject");
const startButton = document.getElementById("startButton");

const alert = () => {
    window.alert("GAME OVER");
}

const click = (event) => {
    if(global.timeoutId !== 0){
        if(event.target.src.slice(-5) !== "0.png") {
            global.score += 1;
            score.innerText = "score : " + global.score;
            clearInterval(global.timerId);
            global.timerId = setInterval(verplaats, global.MOVE_DELAY);
            verplaats();
        } else {
            global.score = 0;
            score.innerText = "score : " + global.score;
            startButton.style.display = "block";
            klikObject.style.top = "0px";
            klikObject.style.left = "0px";
            alert();
            clearInterval(global.timerId);
        }
    }
}

const verplaats = () => {
    if(global.timeoutId !== 0){
            klikObject.style.top = Math.random() * 752 + "px";
            klikObject.style.left = Math.random() * 552 + "px";
            klikObject.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
    }
}

const start = () => {
    global.timerId = setInterval(verplaats, global.MOVE_DELAY);
    global.timeoutId = 1;
    startButton.style.display = "none";
    verplaats();
}

window.addEventListener("load", setup);