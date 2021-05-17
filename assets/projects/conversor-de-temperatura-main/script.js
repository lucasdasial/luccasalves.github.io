let numInserido = document.getElementById("entrada");
let resultado = document.getElementById("resultado");
let medPrimaria = document.getElementById("medidaPrimaria");
let medSecundaria = document.getElementById("medidaSecundaria");



numInserido.addEventListener("keyup", temperatura);
medPrimaria.addEventListener("change", temperatura);
medSecundaria.addEventListener("change", temperatura);


function temperatura(){
    //alert("trocou")

    //de celsius para:
    if(medPrimaria.value == "celsius" && medSecundaria.value == "celsius"){
        resultado.value = numInserido.value
    }else if(medPrimaria.value == "celsius" && medSecundaria.value == "fahren"){
        resultado.value = numInserido.value * 9/5 + 32
    }else if(medPrimaria.value == "celsius" && medSecundaria.value == "kelvin"){
        resultado.value = numInserido.value + 273
    }

    //de fahren pra :
    if(medPrimaria.value == "fahren" && medSecundaria.value == "celsius"){
        resultado.value = (numInserido.value - 32) * 5/9
    }else if(medPrimaria.value == "fahren" && medSecundaria.value == "fahren"){
        resultado.value = numInserido.value 
    }else if(medPrimaria.value == "fahren" && medSecundaria.value == "kelvin"){
        resultado.value = (numInserido.value - 32) * 5/9 + 273
    }

    //de kelvin para:
    if(medPrimaria.value == "kelvin" && medSecundaria.value == "celsius"){
        resultado.value = numInserido.value - 273
    }else if(medPrimaria.value == "kelvin" && medSecundaria.value == "fahren"){
        resultado.value = (numInserido.value -273) * 9/5 +32
    }else if(medPrimaria.value == "kelvin" && medSecundaria.value == "kelvin"){
        resultado.value = numInserido.value 
    }
    
}
