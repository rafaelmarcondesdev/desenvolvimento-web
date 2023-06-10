function Proximo() {
    var pessoa = {
        nome: "",
        email: "",
        aniversario: "",
        celular: "",
        telefone: ""
    };


    pessoa.nome=document.getElementById("nome").value;
    pessoa.email=document.getElementById("email").value;
    pessoa.aniversario=document.getElementById("dtnascimento").value;
    let data = new Date(pessoa.aniversario);
    let dataformatada= data.toLocaleDateString('pt-br', {timeZone: 'UTC'});
    pessoa.celular=document.getElementById("celular").value;
    pessoa.telefone=document.getElementById("telefone").value;
    //pessoa.genero=document.getElementById("sex").value;
    let datad = data.getDay();

    


    document.getElementById("nomeresp").innerHTML=pessoa.nome;
    document.getElementById("emailresp").innerHTML=pessoa.email;
    document.getElementById("dtnascimentoresp").innerHTML=dataformatada;
    document.getElementById("celularresp").innerHTML=pessoa.celular;
    document.getElementById("telefoneresp").innerHTML=pessoa.telefone;
    //document.getElementById("generoresp").innerHTML=pessoa.genero;
    document.getElementById("datadia").innerHTML=datad;

}