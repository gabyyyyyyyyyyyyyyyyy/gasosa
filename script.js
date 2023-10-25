function calcular(){
    var etanol = parseFloat(eta.value);
    var gasolina = parseFloat(gas.value);
    var custo = (etanol/gasolina);

    if(custo > 0.7){
        alert("É mais econômico utilizar gasolina.")
    }
    else if(custo < 0.7){
        alert("É mais econômico utilizar etanol.")
    }
    else if(custo = 0.7){
        alert("O custo será o mesmo: escolha qual preferir.")
    }
}