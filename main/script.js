var marginLeftObj = 0;
var marginLeftObjPorcentagem = marginLeftObj + "vw";
var marginRightObj = 80;
var marginRightObjPorcentagem = marginRightObj + "vw";

var larguraObj = 10;
var larguraObjPorcentagem = larguraObj + "vw";
var alturaObj = 10;
var alturaObjPorcentagem = alturaObj + "vw";

///

var marginLeftObj2 = 90;
var marginLeftObj2Porcentagem = marginLeftObj2 + "vw";
var marginRightObj2 = 0;
var marginRightObj2Porcentagem = marginRightObj2 + "vw";

var larguraObj2 = 13;
var larguraObj2Porcentagem = larguraObj2 + "vw";
var alturaObj2 = 10
var alturaObj2Porcentagem = alturaObj2 + "vw";
var alturaObjPulo = 0;


///

var movimentoObj = marginLeftObj + (-marginRightObj); 
var posicaoObjeto = movimentoObj;

var movimentoObj2 = marginLeftObj2 + (-marginRightObj2); 
var posicaoObjeto2 = movimentoObj2;

var colisao = false;
var pontos = 0;
var velocidadeObj2 = 1;
///



function main() {

    ///

    movimentoObj = marginLeftObj + (-marginRightObj); 
    posicaoObjeto = movimentoObj;

    movimentoObj2 = marginLeftObj2 + (-marginRightObj2); 
    posicaoObjeto2 = movimentoObj2;

    ///
    console.log(alturaObjPulo);
    if(marginRightObj2 >= 153 && marginRightObj2 <= 180 && alturaObjPulo <= 103){
        var colisao = true;
    }
    if (colisao == true){
        clearInterval(mainLoop); 
        clearInterval(placar);
        
    }


   ///

    marginRightObj2 = marginRightObj2 + velocidadeObj2;
    if(marginRightObj2 > 200){
        marginRightObj2 = 0;
    }    
    marginRightObj2Porcentagem = marginRightObj2 + "vw";

    ///

    $("#objeto").css({"height" : alturaObjPorcentagem, "width" : larguraObjPorcentagem, "margin-left": marginLeftObjPorcentagem, "margin-right": marginRightObjPorcentagem});

    ///

    $("#objeto").css({"margin-bottom": alturaObjPulo});

    ///

    $("#objeto2").css({"height" : alturaObj2Porcentagem, "width" : larguraObj2Porcentagem, "margin-left": marginLeftObj2Porcentagem, "margin-right": marginRightObj2Porcentagem});

    ///

    if(pontos >= 30){
        velocidadeObj2 = 1;
    }    
   
}

var mainLoop = setInterval(main, 10);
var placar = setInterval(pont, 1000);

    function pont(){
        pontos = pontos + 3;
        document.getElementById("pontuacao").innerHTML = pontos;
    }

    let contador = 0
    let tempo
    let descer


    window.addEventListener('keypress', (event) => {
        if (event.key === ' ' && alturaObjPulo == 0) {
            var subir = setInterval(pulo_subir, 8 )
            contador = 0;
        }
        
        function pulo_subir(){
            if (alturaObjPulo == 200) {
                clearInterval(subir);
                tempo = setInterval(timer,100);
            } else {
                alturaObjPulo = alturaObjPulo + 2;
            }
        }
        
        function timer(){
            contador++;
            if (contador == 1){
                clearInterval(tempo);
                contador = 0;
                descer = setInterval(pulo_descer, 8);
            }
        }
        
        function pulo_descer(){
            if (alturaObjPulo == 0) {
                clearInterval(descer);
            } else {
                alturaObjPulo = alturaObjPulo - 2;
            }
        }
    })

