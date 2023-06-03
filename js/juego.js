var intentos = 0
var puntaje = 0

function opcion(valor) {
    var sol = document.getElementById("resultado")
    var punt = document.getElementById("puntaje")

    var int = document.getElementById("intentos")
    var imagen = document.getElementById("imgRes")
    sol.style = "background-color: blue;border: 2px solid black;font-family: 'Times New Roman', Times, serif;text-align: center;font - size: 10px; "


    if (valor) {
        intentos = intentos + 1
        sol.innerHTML = "<h1>Felicitaciones, has seleccionado la opción correcta</h1>"
        int.innerHTML = "Intentos: " + intentos
        imagen.setAttribute("src", "../img/pcolor.jpg")
        switch (intentos) {
            case 1:
                puntaje = 5
                break;
            case 2:
                puntaje = 3
                break;
            case 3:
                puntaje = 1
                break;

            default:
                break;
        }
        punt.innerHTML = "Puntaje: " + puntaje


    }

    else {
        sol.innerHTML = "<h1>Pokémon incorrecto, intentalo nuevamente</h1>"

        intentos = intentos + 1
        int.innerHTML = "Intentos: " + intentos
        if (intentos == 3) {
            reset()
        }
    }



}
function reset() {
    var punt = document.getElementById("puntaje")
    var int = document.getElementById("intentos")
    var tit = document.getElementById("tituloEstado")
    var sol = document.getElementById("resultado")
    sol.innerHTML = ""
    sol.style = ""
    punt.innerHTML = "Puntaje: "
    int.innerHTML = "Intentos: "
    tit.innerHTML = "Selecciona el pokemon correcto"
    intentos = 0
    puntaje = 0
}