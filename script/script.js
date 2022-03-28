let sexo;
let imc = 0;
let hombre = document.getElementById('man');
let mujer = document.getElementById('woman');

hombre.addEventListener('click', () => {
    sexo = "Hombre";
    seleccion();
})

mujer.addEventListener('click', () => {
    sexo = "Mujer";
    seleccion();
})

function seleccion() {
    if (sexo == "Hombre") {
        hombre.style.color = "green";
        mujer.style.color = "gray";

    } else if (sexo == "Mujer") {
        mujer.style.color = "green";
        hombre.style.color = "gray";
        
    } else {
        sexo = "gray";
    }
}

function capturarDatos(){
    let edad = Number(document.getElementById('edad').value);
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value/100);
    imc =  Number(peso/(altura*altura));
    localStorage.setItem('Sexo', sexo);
    localStorage.setItem('Peso', peso);
    localStorage.setItem('Altura', altura);
    localStorage.setItem('IMC', imc.toFixed(2));
}


