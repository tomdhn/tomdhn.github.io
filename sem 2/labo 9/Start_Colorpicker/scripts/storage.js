

const storeSliderValues = () => {
    let colorSettings = {};
    let settingsJSON;
    colorSettings.slider1 = document.getElementById("sldRed").value;
    colorSettings.slider2 = document.getElementById("sldBlue").value;
    colorSettings.slider3 = document.getElementById("sldGreen").value;

    settingsJSON = JSON.stringify(colorSettings);
    localStorage.setItem("VIVES.be.settingSliders", settingsJSON);
};

const restoreSliderValues = () => {
    if(localStorage.getItem("VIVES.be.settingSliders") != null){
        let colorSettings = JSON.parse(localStorage.getItem("VIVES.be.settingSliders"));
        document.getElementById("sldRed").value = colorSettings.slider1;
        document.getElementById("sldBlue").value = colorSettings.slider2;
        document.getElementById("sldGreen").value = colorSettings.slider3;
    } else {
        document.getElementById("sldRed").value = 0;
        document.getElementById("sldBlue").value = 0;
        document.getElementById("sldGreen").value = 0;
    }

};

const storeSwatches = () => {

    let swatches = [];
    let swatchElements = document.querySelectorAll(".swatch");

    for (let i = 0; i < swatchElements.length; i++) {
        let swatchColors = {
            color: swatchElements[i].style.background
        };
        swatches.push(swatchColors);
    }
    localStorage.setItem("VIVES.be.swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let swatchContainer = document.querySelector("#swatchComponents");
    let swatchColors = JSON.parse(localStorage.getItem("VIVES.be.swatches"));
    for (let i = 1; i < swatchColors.length; i++) {
        let div = document.createElement("div");
        div.style.background = swatchColors[i].color;
        div.className = "swatch";
        let del = document.createElement("input");
        del.type = "button";
        del.value = "X";
        div.append(del)
        swatchContainer.append(div);
    }
};
