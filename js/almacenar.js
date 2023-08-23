const iteminput = document.getElementById("item");
const buttonagregar = document.getElementById("agregar")
const buttonlimpiar = document.getElementById("limpiar")
const msgdisplay = [];
const contenedor = document.getElementById("contenedor")

buttonagregar.addEventListener("click", function(e){
    if (iteminput.value.length > 0){
        msgdisplay.push(iteminput.value)
        localStorage.setItem("array", msgdisplay + "\n")
        iteminput.value = "";
    }
        contenedor.innerHTML += `<li>${msgdisplay[msgdisplay.length-1]}</li>`;
})
buttonlimpiar.addEventListener("click", function(e){
    localStorage.removeItem("array");
    contenedor.innerHTML= "";
})

document.addEventListener("keydown", function(event) {
    if (event.code == "Enter") {
        buttonagregar.click()
    }
});