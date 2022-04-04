function escolherPrato (comida){
    console.log(comida);
    const selecionado = document.querySelector(".selecionado");


    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        
    }
    comida.classList.add("selecionado");
    

}