const palette = ["yellow","blue","red","green","brown","teal","silver",
"purple","orange","magenta","crimson","goldenrod","darkviolet","chocolate",
"bisque","beige","cadetblue","darkblue","indigo","khaki","olive","seagreen",
"tomato","yellowgreen","sienna","seashell","lightsalmon","firebrick","navy"]
const btn = document.getElementById('btn')
const color = document.querySelector('.clr')

btn.addEventListener('click', () => {
    let randomNum = randomNumber()
    document.body.style.backgroundColor = palette[randomNum]
    color.textContent = palette[randomNum]
    color.style.color = palette[randomNum]
})

function randomNumber(){
    return Math.floor(Math.random() * palette.length)
}