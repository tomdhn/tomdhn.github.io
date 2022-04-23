const setup = () =>{
    const substring = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        txtOutput.innerHTML = tekst.substring((i1.value-1), i2.value);
    }

    let btnSubstring= document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

window.addEventListener("load", setup);