function CadastroP() {
    var professor = {
        nome: "",
        sobrenome: "",
        aniversario: ""
    };
    var professorTemporario={
        CNPJ: ""

    };
    professor.nome=document.getElementById("nome").value;
    professor.sobrenome=document.getElementById("sobrenome").value;
    professor.aniversario=document.getElementById("dtnascimento").value;
    let data = new Date(professor.aniversario);
    let dataFormatada= data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    //alert(professor.nome);
    document.getElementById("nomeresp").innerHTML=professor.nome;
    document.getElementById("sobrenomeresp").innerHTML=professor.sobrenome;
    document.getElementById("dtnascimentoresp").innerHTML=dataFormatada;
    let categoria= prompt("Digite: \n T para professro Temporario\n E para professor Efetivo" );
    if(categoria.toUpperCase()=="E"){
        professorEfetivo= Object.create(professor);
        professorEfetivo.CPF= prompt("Informe o CPF do professor!");
        document.getElementById("documento").innerHTML="CPF: " + professorEfetivo.CPF;

    }
    else
        if(categoria.toUpperCase()=="T"){
                professorTemporario=Object.create(professor);
                professorTemporario.CNPJ= prompt("Informe o CNPJ do professor!");
                document.getElementById("documento").innerHTML= "CNPJ: " + professorTemporario.CNPJ;
        }
        else {
            alert ("Categoria informada inválida!!");
        }
}