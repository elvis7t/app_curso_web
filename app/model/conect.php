<?php
require_once("config.php");
//Abre Conexao com mysql
function conecta(){
	$link = mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());
	mysqli_set_charset($link, DB_CHARSET) or die(mysqli_error($link));
	return $link;
	
}
if (!$link) {echo $link."Não foi possível conectar ao banco MySQL."; exit;}
	else {echo "Parabéns!! A conexão ao banco de dados ocorreu normalmente!.";
	}
function desconecta($link){
	mysqli_close($link);
}

?>