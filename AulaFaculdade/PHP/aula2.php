<?php
$user = "usuario_do_banco";
$password = "senha_do_banco";
$database = "nome_do_banco";

$hostname = "localhost";

mysql_connect($hostname, $user, $password)
    or die('Erro na conexão');

mysql_select_db($database)
    or die('Erro na seleção do banco')

?>