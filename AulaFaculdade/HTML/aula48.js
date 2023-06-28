// function divisao(){
//     var numero1 = parseInt(document.getElementById('num1').value);
//     var numero2 = parseInt(document.getElementById('num2').value);
//     var resultado = document.getElementById('res');
//     var divisao = numero1/numero2;
//     var resto = numero1 % numero2;

//     if(Number.isInteger(numero1) && Number.isInteger(numero2) && numero1 > 0 && numero2 > 0){
//         resultado.innerHTML = 'O resultado da divisão é: ' + divisao;
//         if (resto !== 0 ){
//             resultado.innerHTML = ' com resto ' + numero1 % numero2;
//         }
//     } 
//     else{
//         resultado.innerHTML = 'Digite apenas números inteiros positivos.';
//     }
    
// }

function divisao() {
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
    var resultado = document.getElementById('res');
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;
    
    if (numero1 > 0 && numero2 > 0) {
        if (resto !== 0) {
            resultado.innerHTML = 'O resultado da divisão é: ' + divisao + ' com resto ' + resto;
        } else {
            resultado.innerHTML = 'O resultado da divisão é: ' + divisao;
        }
    } else {
        resultado.innerHTML = 'Digite apenas números inteiros positivos.';
    }
}