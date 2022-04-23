const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.getElementById('saveButton');

	colorDemos[0].style.backgroundColor="rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	document.getElementById("kleur1").textContent=sliders[0].value;
	document.getElementById("kleur2").textContent=sliders[1].value;
	document.getElementById("kleur3").textContent=sliders[2].value;

	saveButton.addEventListener('click', save)
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");

	document.getElementById("kleur1").textContent=sliders[0].value;
	document.getElementById("kleur2").textContent=sliders[1].value;
	document.getElementById("kleur3").textContent=sliders[2].value;
	colorDemos[0].style.backgroundColor="rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";
}

const save = () => {
	let colorBox = document.createElement("div");
	let sliders = document.getElementsByClassName("slider");
	let deleteButton = document.createElement('button');

	deleteButton.append('X');
	deleteButton.style.position = 'relative';
	deleteButton.style.left = '80px';

	colorBox.style.border = "1px solid black";
	colorBox.style.width = '100px';
	colorBox.style.height = '100px';
	colorBox.style.float = 'left';
	colorBox.style.margin = '20px';
	colorBox.style.backgroundColor="rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";

	document.querySelector(".savedColors").append(colorBox);
	colorBox.append(deleteButton);
	colorBox.addEventListener("click", changeColor);
	deleteButton.addEventListener('click',deleteSwatch);
}

const deleteSwatch = (event) => {
	let colorBox = event.target.parentElement;
	colorBox.remove();
}

const changeColor = (event) => {
	let colorBox = event.target;
	let colorPickerDiv = document.querySelector(".colorDemo");
	colorBox.style.backgroundColor = colorPickerDiv.style.backgroundColor;
}
window.addEventListener("load", setup);