<?php
$banco = "app_db";
$usuario = "db_user";
$senha = "db_user_pass";
$hostname = "mysql";
$conn = mysqli_connect($hostname,$usuario,$senha, $banco) or die( "Não foi possível conectar ao banco MySQL");
if (!$conn) {echo "Não foi possível conectar ao banco MySQL."; exit;}
else {echo "Parabéns!! A conexão ao banco de dados ocorreu normalmente!.";
}

mysqli_select_db($conn, $banco);
$query = sprintf("SELECT * FROM `sys_usuario`");
// mysqli_close($conn);
$dados = mysqli_query($conn, $query) or die(mysqli_error($conn));
// transforma os dados em um array
$linha = mysqli_fetch_assoc($dados);
// calcula quantos dados retornaram
$total = mysqli_num_rows($dados);
?>

<html>
	<head>
	<title>Exemplo</title>
</head>
<body>
<?php
	// se o número de resultados for maior que zero, mostra os dados
	if($total > 0) {
		// inicia o loop que vai mostrar todos os dados
		do {
?>
			<p><?=$linha['usu_nome']?> / <?=$linha['usu_email']?></p>
<?php
		// finaliza o loop que vai mostrar os dados
		}while($linha = mysqli_fetch_assoc($dados));
	// fim do if
	}
?>
</body>
</html>
<?php
// tira o resultado da busca da memória
mysqli_free_result($dados);