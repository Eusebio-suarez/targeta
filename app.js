//elementon card
const card = document.getElementById("card")

//input con el color
const color = document.getElementById("color")

//evento que llama a la funcion
color.addEventListener("input",actualizarValor)

//funcion para actualizar el valor del input
function actualizarValor() {
    console.log(color.value)
    document.documentElement.style.setProperty(`--colorBorde`,`${color.value}`)
}