// Contador
var contadorImagen = 1;
mostrarImagenes(contadorImagen);

// Botones
function sumarImagen(numero_imagen) {
    mostrarImagenes(contadorImagen += numero_imagen);
}

// Mostrar imagen de la fila
function imagenActual(numero_imagen) {
    mostrarImagenes(contadorImagen = numero_imagen);
}

function mostrarImagenes(numero_imagen) {
    var i;
    var imagenes = document.getElementsByClassName("imagen");
    var dots = document.getElementsByClassName("demo");
    var descripcion = document.getElementById("descripcion_imagen");

    if (numero_imagen > imagenes.length) {
        contadorImagen = 1
    }

    if (numero_imagen < 1) {
        contadorImagen = imagenes.length
    }

    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" primer_plano", "");
    }

    imagenes[contadorImagen - 1].style.display = "block";
    dots[contadorImagen - 1].className += " primer_plano";
    descripcion.innerHTML = dots[contadorImagen - 1].alt;
}