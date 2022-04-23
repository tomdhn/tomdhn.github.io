const setup = () => {
    let Btn = document.getElementById("action");
    Btn.addEventListener("click", instappen);
}

const instappen = () => {
    let tekst = document.getElementById("passagiers").value;
    let personen = tekst.split(",");
    let div = document.getElementsByTagName("div")
    for (let i = 1;i < personen.length; i += 2)
    {
        if (personen.length % 2 === 0)
        {
            console.log("hello world");
            div[0].value = personen[i].value.concat(personen[i-1].value, '\n');
            personen.remove(i);
            personen.remove(i-1);

        }
    }
}
window.addEventListener("load", setup);