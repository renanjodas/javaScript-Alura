
/*    Adicionar em tabela   */
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form, através do objeto declarado abaixo
    var paciente = obtemPacienteFormulario(form);

    // cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    //Se não for um paciente valido
    if(!validaPaciente(paciente)){
        console.log("Paciente Inválido");
        return; //para sair da função sem chegar na parte que ele adiciona na tabela - logo abaixo
    }

    //utilizando do mesmo raciocinio de utiizar o appendChild para inserir os <td> na <tr>, vamos inserir o <tr> dentro da tabela pacientes, para que seja exibida e criado o novo usuario
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //informando a tabela o filho paciente tr
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML ="";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//simplificando e a fim de reaproveitar a otencao dos dados do form
function obtemPacienteFormulario(form){

    //definimos o objeto e atribuimos suas propriedades (caracteristicas) - repare que é atribuido o valor com : (dois pontos) e o indicador de separação das propriedades é a virgula
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

//funcao montaTr que vai receber os dados do paciente.
function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; //ele vai pegar um dado e adicionar
    td.classList.add(classe); //pode adicionar qualquer classe, então como depende, pego a classe e a adiciono como argumento

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}



//selecionamos apenas os valores, inseridos nos <input> e atribuiremos a variaveis
/*
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
    
    simplificando este código acima através da função

    function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; //ele vai pegar um dado e adicionar
    td.classList.add(classe); //pode adicionar qualquer classe, então como depende, pego a classe e a adiciono como argumento

    return td;
}
*/