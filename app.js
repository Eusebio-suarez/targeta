//elementon card
const card = document.getElementById("card")

//obtener todos los inputs de tipo color
const colors = document.querySelectorAll(".color")

//valores iniciales de los inputs
colors[0].value="#ff4545"
colors[1].value="#00ff99"
colors[2].value="#006aff"
colors[3].value="#ff0095"
colors[4].value="#ff4545"


//funcion para actualizar el color en la targeta
function actualizarColor(id) {
    document.documentElement.style.setProperty(`--colorBorde${id}`,`${colors[id-1].value}`)
}