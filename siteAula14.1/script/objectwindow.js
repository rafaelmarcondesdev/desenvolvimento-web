
//Apenas exibe a informação
alert("Objeto Janela de Alerta");

//Mostra a informação e exibe dois botões
//confirm("Voce esta entendendo javascript?");

var nome=window.prompt("Digite o primeiro nome?");
var sobrenome = prompt("Digite seu sobrenome");
var resposta=window.confirm(nome + " " + sobrenome + " Voce aprendeu Javascript? ");
if(resposta==true){
    window.alert("Parabéns! Continue assim");
}
else{
    window.alert("Voce precisa estudar mais");
    window.open("https://www.google.com");
}

alert("Seja bem vindo(a) "+ nome + " " + sobrenome);
if (nome == "Rafael"){
    alert("Voce tem um nome lindo")
}





