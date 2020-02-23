var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

console.log(pacientes);


/*  Evento dblclick em casa elemento da tabela (cada linha)

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado");
        this.remove();
    })
});

 variavel tabela, adficiona um evento que escuta/identifica um duplo clique, e então executa funcão no evento acionado dentro desta tabela, junto com o target - alvo do evento
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover

    paiDoAlvo.remove();

})

*/