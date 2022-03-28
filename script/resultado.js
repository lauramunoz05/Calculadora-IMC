let peso = localStorage.getItem('Peso');
let altura = localStorage.getItem('Altura');
let resultado = document.getElementById('resultado');
resultado.value = localStorage.getItem('IMC');
let leyenda;

if (resultado > 39) {
    rango = 39;
} else if (resultado < 18) {
    rango = 18;
} else {
    rango = resultado.value;
}

let valor = document.getElementById('rango').value = rango;

operacion = (altura * altura * 20.5).toFixed(1);


if (resultado.value < 18.5) {
    leyenda = "Peso Ideal: " + operacion + " (KG)";

} else if (resultado.value >= 25.5) {
    leyenda = "Peso Ideal: " + operacion + " (KG)";

} else {
    leyenda = "Estas en tu peso ideal";
}


let pesoIdeal = document.getElementById('pesoIdeal').value = leyenda;

