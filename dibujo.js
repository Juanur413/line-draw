var texto = document.getElementById ("texto_lineas");
var boton = document.getElementById ("botoncito");
boton.addEventListener ("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle= color;
lienzo.moveTo (xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick ()
{
    var xxx = parseInt (texto.value);
    var lineas = xxx;
    var l = 0;
    var yi, xf;
    var yf, xi;
    var xf2;
    var colorcito = "skyblue";
    var colorf = "blue";
    var espacio = ancho / lineas;

for (l = 0; l < lineas; l++)
{
    yi = yf = espacio  * l;
    xf = xi = espacio * (l + 1);
    xf2 = xi2 = 300 - (l * espacio);
    dibujarLinea (colorcito, xi, 0, 300, yf);
    dibujarLinea (colorcito, 0, yi, xf, 300);
    dibujarLinea (colorcito, 300, yi, xf2, 300);
    dibujarLinea (colorcito, xi2, 0, 0, yf);
    console.log ("Linea " + l);
}
dibujarLinea(colorf, 1, 1, 1, 300);
dibujarLinea(colorf, 1, 299, 299, 299);
dibujarLinea(colorf, 1, 1, 299, 1);
dibujarLinea(colorf, 299, 1, 299, 299);

}