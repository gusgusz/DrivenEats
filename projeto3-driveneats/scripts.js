let preçoComida = null;
let preçoSobremesa = null;
let preçoBebida = null;
let selecionadoComida;
let selecionadoBebida;
let selecionadoSobremesa;
let numero = prompt("Qual o seu número do whatsaap? (Não coloque o 0 na frente do DDD; ex: 48123451234");
        let nome = promp("Qual o seu nome?");


function escolherPrato (comida){
    selecionadoComida= document.querySelector(".selecionado-comida");

 
    if(selecionadoComida !== null){
      selecionadoComida.classList.remove("selecionado-comida");
        
    }
    comida.classList.add("selecionado-comida");
    preçoComida = document
    .querySelector(".selecionado-comida")
    .querySelector("span").innerHTML;
    console.log(preçoComida);
    botaoVerde();
    
}

function escolherBebida (bebida){
    
    selecionadoBebida = document.querySelector(".selecionado-bebida");
    


    if(selecionadoBebida !== null){
        selecionadoBebida.classList.remove("selecionado-bebida");
        
    }
    bebida.classList.add("selecionado-bebida");
    preçoBebida = document
    .querySelector(".selecionado-bebida")
    .querySelector("span").innerHTML;
    botaoVerde();
    

} 

function escolherSobremesa (sobremesa){
    
    selecionadoSobremesa = document.querySelector(".selecionado-sobremesa");
    


    if(selecionadoSobremesa !== null){
        selecionadoSobremesa.classList.remove("selecionado-sobremesa");
        
    }
    sobremesa.classList.add("selecionado-sobremesa");
    preçoSobremesa = document
    .querySelector(".selecionado-sobremesa")
    .querySelector("span").innerHTML;
    botaoVerde();
}
    

function botaoVerde () {

if((preçoComida !== null) && (preçoBebida !== null) && (preçoSobremesa !== null)){
    let botao = document.querySelector("button");
    
    botao.classList.add("selecionado-tudo");
    
}
}
function escolher (){
    if((preçoComida !== null) && (preçoBebida !== null) && (preçoSobremesa !== null)) {
        const el = document.querySelector(".escondido");
        el.classList.remove("escondido");

        document.querySelector(".ctnr").classList.add("escondido")
       

    }
    else {
        alert("voce deve marcar todas as opçoes");
    }

}