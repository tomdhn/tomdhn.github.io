const setup = () => {
    let gemeenten = [];
    let gemeente = "";
    let select = document.getElementById("gemeenten");
    let i = 0;
    do{
        gemeente = prompt("gemeente").trim()
        if(gemeente.localeCompare("stop")){
            gemeenten[i] = gemeente;
        }
        i++;
    }while(gemeente.localeCompare("stop") !== 0)

    gemeenten.sort();
    console.log(gemeenten);
    for (let i = 0; i < gemeenten.length ; i++) {
        select.innerHTML += "<option>" + gemeenten[i].trim() + "</option>"
    }
}
window.addEventListener("load", setup);