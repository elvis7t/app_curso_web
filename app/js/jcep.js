
/*--------------------------------|INICIA QUANDO O DOCUMENTO ESTIVER CARREGADO|--------*/
$(document).ready(function(){
	var tipo="";
	/*AjaxStart e AjaxStop*/
/*-----------------------------busca_cep------------------------------------*/	
	function limpa_formulario_all(){
		$(".form-control").each(function(){
			$(this).val("");
		});
	}	
	function limpa_formulario_cep() {
		// Limpa valores do formul�rio de cep.
		$("#log").val("");
		$("#bai").val("");
		$("#cid").val("");
		$("#uf").val("");
	}

	//Quando o campo cep perde o foco.
	$("#cep").blur(function() {

	//Nova vari�vel "cep" somente com d�gitos.
	var cep = $(this).val().replace(/\D/g, '');

	//Verifica se campo cep possui valor informado.
	if (cep != "") {

	//Express�o regular para validar o CEP.
	var validacep = /^[0-9]{8}$/;

	//Valida o formato do CEP.
	if(validacep.test(cep)) {

		//Preenche os campos com "..." enquanto consulta webservice.
		$("#log").val("...");
		$("#bai").val("...");
		$("#cid").val("...");
		$("#uf").val("...");


	//Consulta o webservice viacep.com.br/
		$.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
			if (!("erro" in dados)) {
				//Atualiza os campos com os valores da consulta.
				$("#log").val(dados.logradouro);
				$("#bai").val(dados.bairro);
				$("#cid").val(dados.localidade);
				$("#uf").val(dados.uf);
				$("#num").focus();
			} //end if.
			else {
				//CEP pesquisado n�o foi encontrado.
				limpa_formulario_cep();
				alert("CEP n�o encontrado.");
			}
			});
		} //end if.
		else {
			//cep � inv�lido.
			limpa_formulario_cep();
			alert("Formato de CEP inv�lido.");
			}
		} //end if.
		else {
			//cep sem valor, limpa formul�rio.
			limpa_formulario_cep();
		}
	});
 
});