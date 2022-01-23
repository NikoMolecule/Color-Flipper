const hexPalette = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn')
const color = document.querySelector(".clr")

btn.addEventListener('click', () => {
let hexColor = "#"
for(let i = 0; i < 6; i++){
    hexColor += hexPalette[randomNumber()]
}

color.textContent = hexColor
document.body.style.backgroundColor = hexColor
color.style.color = hexColor

})

function randomNumber(){
    return Math.floor(Math.random() * hexPalette.length)
}
