document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("saludarBtn");
    boton.addEventListener("click", function() {
        saludar();
    });
});

function saludar() {
    alert("¡Hola! ¡Bienvenido a mi página!");
}
