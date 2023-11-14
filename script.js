const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const spancolor=document.querySelector(".color");

btn.addEventListener("click", function () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += color[randomno()];
    }

    spancolor.innerHTML=hex
    document.body.style.backgroundColor = hex;
});

function randomno() {
    return Math.floor(Math.random() * color.length);
}
