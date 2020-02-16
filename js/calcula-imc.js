var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//realizar o calculo, enquanto não alcançar o limite final do tamanho da lista
for(var i=0; i<pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var tdImc=paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso); // assumindo de boa fé que o peso é válido
    var alturaValido = validaAltura(altura); // assumindo de boa fé que a altura é válida

    if(!pesoValido){
        console.log("Peso inválido");
        tdPeso.textContent = "Peso Inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValido){
        console.log("Altura Inválida");
        tdAltura.textContent = "Altura Inválida";
        alturaValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValido && pesoValido){
        var imc = calculaImc(peso, altura); 
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}


/* códigos iniciais - antes da melhoria de código (deixar mais enxuto) 

//Operadores Lógicos (ou representado por || )

    var pesoValido = true; // assumindo de boa fé que o peso é válido
    var alturaValido = true; // assumindo de boa fé que a altura é válida


*/


