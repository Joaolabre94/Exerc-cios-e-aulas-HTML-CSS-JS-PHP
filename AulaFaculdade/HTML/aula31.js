function divisao(){
    var numero1 = document.getElementById('num1').value
    var numero2 = document.getElementById('num2').value
    var resultado = document.getElementById('res')
    resultado.innerHTML = 'O resultado da divisão é igual a: ' + parseInt(numero1/numero2) ;
    var resto = numero1 % numero2;
    if (resto !== 0){
        resultado.innerHTML +=  ' com resto ' +  numero1%numero2;
    }
}