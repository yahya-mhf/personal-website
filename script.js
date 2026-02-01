let backgroundColor = "#e7e7e7";
let color = "#3f3f3f";

const themeImg = document.querySelector('#theme-img');

themeImg.addEventListener("click", e => {
    console.log("Hello");
    [backgroundColor, color] = [color, backgroundColor];
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
})
