var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //input possui atributo .value
    console.log(this.value); //a outra forma de identificar é o this, que pega informação do dono do evento, no caso campoFiltro
    var pacientes = document.querySelectorAll(".paciente"); //ele vai ter que fazer uma varredura e pegar todos os dados
    
    if(this.value.length > 0){
        for(var i = 0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = paciente.textContent;
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    
})


/*
campoFiltro.addEventListener("input", function(){ //input possui atributo .value
    console.log(campoFiltro.value); //possui duas formas de identificar e escrever o valor digitado no campo filtro
})
*/