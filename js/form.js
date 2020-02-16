
/*    Adicionar em tabela   */
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //selecionamos apenas os valores, inseridos nos <input> e atribuiremos a variaveis
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //criando uma variavel atribuindo info de onde sera criado um novo elemento
    var pacienteTr = document.createElement("tr");

    //novas variaveis para criar elemento td, que receberá os dados do input acima
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //agora atribuiremos o conteudo a estas <td>, conforme valores 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    //agora será necessario, informar o 'pai' destas <td>, que é a <tr>, atribuida a pacienteTr, para isso temos a propriedade appendChild
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //utilizando do mesmo raciocinio de utiizar o appendChild para inserir os <td> na <tr>, vamos inserir o <tr> dentro da tabela pacientes, para que seja exibida e criado o novo usuario
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

//simplificando e a fim de reaproveitar a otencao dos dados do form
function obtemPacienteFormulario(form){
    //selecionamos apenas os valores, inseridos nos <input> e atribuiremos a variaveis
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}