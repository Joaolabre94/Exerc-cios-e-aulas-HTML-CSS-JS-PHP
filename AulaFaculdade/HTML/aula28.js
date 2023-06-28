function soma(){
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);
    var resultado = document.getElementById('res');
    resultado.innerHTML  = `O restultado é:  ${(numero1+numero2)}`;
}