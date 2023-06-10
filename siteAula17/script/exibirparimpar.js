function exibirParImpar(){
    let parLista= [];
    let imparLista= [];
    let contadorpar= 0;
    let contadorimpar= 0;
    numero=document.getElementById("numero").value;
    for (let contador=1; contador<=numero; contador++){
        if((contador%2)==0){
            parLista[contadorpar]=contador
            contadorpar++;
        }
        else{
            imparLista[contadorimpar]=contador
            contadorimpar++;
        }
    }
    document.getElementById("nPares").innerHTML=parLista;
    document.getElementById("nImpares").innerHTML=imparLista;
    document.getElementById("meuFormulario").reset();
}
function Limpar(){
    document.getElementById("nPares").innerHTML="";
    document.getElementById("nImpares").innerHTML="";
}