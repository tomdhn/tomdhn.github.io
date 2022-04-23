const setup = () => {
    let array = ['Tom','Geoffrey','christelle','Nathan','Raoul'];
    console.log(array.length);
    let voegNaamToe = (naam = prompt()) => {
        array.push(naam);
        console.log(array);
    }
    voegNaamToe();
    for(let i = 0; i < array.length; i+=2){
        console.log(array[i]);
    }

    console.log(array.join(", "));
}
window.addEventListener("load", setup);
