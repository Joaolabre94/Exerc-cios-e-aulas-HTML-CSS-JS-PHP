<?php
$var1 = 5;
$var2 = '5';
if($var1 == $var2){
    echo "$var1 é igual a $var2 \n\n";
}else{
    echo "$var1 NÃO é igual a $var2 \n\n";
}

echo "Operador ternário \n\n";
$comparaçao = (($var1 === $var2)) ? "Iguais e do mesmo tipo" : "Apenas iguais";
echo "$comparaçao \n\n"; 

$fruta = 'Laranja';
switch($fruta){
    case 'Laranja':
        echo 'A fruta é laranja ';
        break;
    case 'Maça':
        echo 'A fruta é maça';
        break;
    case 'Limão':
        echo 'A fruta é limão';
        break;
    default:
        echo 'A fruta é desconhecida';
        break;
}