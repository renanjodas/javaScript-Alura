var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); //tem todos os tipos de requisições (post, get, )

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //requisição do tipo GET

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){ //que deu tudo certo
            erroAjax.classList.add("invisivel"); //se der certo adiciona classe invisvel do css
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //transformar (parciador), o texto em um objeto JS

            pacientes.forEach(function(paciente){ //pega o paciente
                adicionaPacienteNaTabela(paciente); //adiciona ele na tabela em paciente
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel"); //se der errado retira classe invisvel do css
        }
        
    });
    xhr.send(); //realmente envia requisição
});