const setup = () => {
    let li = document.getElementsByTagName("li");
    let image = document.createElement('img');
    for (let i = 0; i < li.length; i++) {
        li[i].classList.add("listitem");
        li[i].style.color = "red";
    }
    image.src = "ik.jpg";
    document.getElementsByTagName('body')[0].append(image);
}
window.addEventListener("load", setup);