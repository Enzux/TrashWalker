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

var larguraObj2 = 16;
var larguraObj2Porcentagem = larguraObj2 + "vw";
var alturaObj2 = 12;
var alturaObj2Porcentagem = alturaObj2 + "vw";
var alturaObjPulo = 0;


///

var movimentoObj = marginLeftObj + (-marginRightObj); 
var posicaoObjeto = movimentoObj;

var movimentoObj2 = marginLeftObj2 + (-marginRightObj2); 
var posicaoObjeto2 = movimentoObj2;

var colisao = false;
var pontos = 44;
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
    if(marginRightObj2 >= 150 && marginRightObj2 <= 175 && alturaObjPulo <= 125){
        var colisao = true;
    }
    if (colisao == true){
        clearInterval(mainLoop); 
        clearInterval(placar);
        document.getElementById("objeto").style.backgroundImage = "url('img/morre.png')";
        clearInterval(tempo);
        sprite_pulo = "url('img/morre.png')";
        sprite_corre = "url('img/morre.png')";
    }
     
    if(alturaObjPulo == 0){
        document.getElementById("objeto").style.backgroundImage = sprite_corre;
    }
   ///

    marginRightObj2 = marginRightObj2 + velocidadeObj2;
    if(marginRightObj2 > 200){
        marginRightObj2 = 6;
    }    
    marginRightObj2Porcentagem = marginRightObj2 + "vw";

    ///

    $("#objeto").css({"height" : alturaObjPorcentagem, "width" : larguraObjPorcentagem, "margin-left": marginLeftObjPorcentagem, "margin-right": marginRightObjPorcentagem});

    ///

    $("#objeto").css({"margin-bottom": alturaObjPulo});

    ///

    $("#objeto2").css({"height" : alturaObj2Porcentagem, "width" : larguraObj2Porcentagem, "margin-left": marginLeftObj2Porcentagem, "margin-right": marginRightObj2Porcentagem});

    ///

    if(pontos > 50){
        document.getElementById("corpo").style.backgroundImage = "url('img/Noite.png')";
        document.getElementById("pontuacao").style.color = "white";
        document.getElementById("sol").style.backgroundImage = "url('img/Lua.png')";
    }    
    if(pontos > 100){
        document.getElementById("corpo").style.backgroundImage = "url('img/ceuu.png')";
        document.getElementById("pontuacao").style.color = "black";
        document.getElementById("sol").style.backgroundImage = "url('img/Sol.png')";
    }
    if(pontos > 200){
        document.getElementById("corpo").style.backgroundImage = "url('img/Noite.png')";
        document.getElementById("pontuacao").style.color = "white";
        document.getElementById("sol").style.backgroundImage = "url('img/Lua.png')";
    }  
    if(pontos > 300){
        document.getElementById("corpo").style.backgroundImage = "url('img/ceuu.png')";
        document.getElementById("pontuacao").style.color = "black";
        document.getElementById("sol").style.backgroundImage = "url('img/Sol.png')";
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
    var sprite_pulo = "url('img/pulo.gif')";
    var sprite_corre = "url('img/corrida.gif')";


    window.addEventListener('keypress', (event) => {
        if (event.key === ' ' && alturaObjPulo == 0) {
            var subir = setInterval(pulo_subir, 5)
            contador = 0;
        }
        
        function pulo_subir(){
            if (alturaObjPulo == 200) {
                clearInterval(subir);
                tempo = setInterval(timer,100);
            } else {
                alturaObjPulo = alturaObjPulo + 2;
                document.getElementById("objeto").style.backgroundImage = sprite_pulo;
            }
        }
        
        function timer(){
            contador++;
            if (contador == 1){
                clearInterval(tempo);
                contador = 0;
                descer = setInterval(pulo_descer, 5);
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

