.conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
border-bottom: 4px solid var(--botao-ativo); 
border-left: 2px solid var(--botao-ativo); 
border-right: 2px solid var(--botao-ativo); 
border-top: none;
.botoes {
    display: block;
}

@media screen and (min-width: 768px) {
    .botoes {
        display: flex;
    }
    .botao:first-child {
        border-radius: 40px 40px 0 0;
    }
    
    @media screen and (min-width: 768px) {
        .botoes {
            display: flex;
        }
    
        .botao:first-child {
            border-radius: 40px 0 0 0;
        }
    
        .botao:last-child {
            border-radius: 0 40px 0 0;
        }
    }
    .ativo{
        background-color: var(--botao-ativo);
        border-bottom: 4px solid var(--verde);
    }
    const botoes = document.querySelectorAll(".botao");
    console.log(botoes)
    const botoes = document.querySelectorAll(".botao");
    console.log(botoes)
    for(let i=0; i <  botoes.length; i++){
        console.log(i);
    }
    botoes[i].onclick = function(){
    
        botoes[i].classList.add("ativo");
    }
    for(let j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
}
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
for ([inicialização]; [condição]; [incremento]) {
    declaração
    }
    for (var i = 1; i <= 5; i++) {
        console.log(i);
      }
      for (var i = 0; i <= 10; i += 2) {
        console.log(i);
      }
      var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
      for (var i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
      }
      let contador = 5;
      contador += 3;
      let contador = 10;
      contador -= 4;
      var numero = 3;
      numero *= 2;
      var numero = 10;
      numero /= 2; 
      .abas-textos{
        background-color: var(--texto-fundo);
    }
    .abas-textos{
        background-color: var(--texto-fundo);
        padding: 40px;
        border-radius: 0 0 40px 40px;
    }
    .botao.ativo{
        background-color: var(--botao-ativo);
        border-bottom: 4px solid var(--verde);
    }
    .aba-conteudo.ativo{
        display:block;   
    }
    .aba-conteudo{
        display: none;
    }
    .aba-conteudo-titulo-principal{
        font-size: 28px;
        text-align: center;
    }
    .aba-conteudo-titulo-secundario{
        text-align: center;
        color: var(--verde);
        text-transform: uppercase;
    }
    const botoes = document.querySelectorAll(".botao");
    const textos = document.querySelectorAll(".aba-conteudo");
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
    
            for (let j = 0; j < botoes.length; j++) {
                botoes[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
            }
    
            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
        }
    }
    const contadores = document.querySelectorAll(".contador");
    contadores[0].textContent = "Contagem regressiva";
    const tempoObjetivo1 = new Date("2024-10-05");

    contadores[0].textContent = tempoObjetivo1;
    const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
    let tempoAtual = new Date();
    contadores[0].textContent = tempoObjetivo1 - tempoAtual;
    const contadores = document.querySelectorAll(".contador");
    const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
    let tempoAtual = new Date();
    
    contadores[0].textContent = tempoObjetivo1 - tempoAtual;
<p>       Vamos verificar o <strong>retorno!</strong> </p>
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07");

contadores[0].textContent = tempoObjetivo1;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getTime();

contadores[0].textContent = tempo;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getDate();

contadores[0].textContent = tempo;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getMonth();

contadores[0].textContent = tempo;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getFullYear();

contadores[0].textContent = tempo;
