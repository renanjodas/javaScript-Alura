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

    //Operadores Lógicos (ou representado por || )

    var pesoValido = true; // assumindo de boa fé que o peso é válido
    var alturaValido = true; // assumindo de boa fé que a altura é válida

    if(peso <=0 || peso >=1000){
        console.log("Peso inválido");
        tdPeso.textContent = "Peso Inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(altura <=0 || altura >= 3.00){
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

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}





