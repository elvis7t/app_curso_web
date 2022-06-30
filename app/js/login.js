$(document).ready(function(){
   $("#lg_password").on("click", function (e){
    //Logar com o btn enter
     var tecla = (e.keyCode ? e.keyCode : e.which);
     if(tecla == 13){
        $("#bt_entrar").trigger("click");
     }
   });

    $("#bt_entrar").click(function(){
    //validar email
    $("#erd div").each(function() {
        $(this).remove();
    });
    $.post("../config/entrar.php",
    {
        usuario: $("#lg_email").val(),
        senha: $("#lg_password").val() 
    },
    function(data){
        if(data.status == "ok" ){
            $("#aguarde").modal("show");
            $("<div></div>").addClass("alert alert-sucess alert-dismissable").html(data.mensagem + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').appendTo("#ers").fadenIn("slow");
            console.log(data.mensagem);
            $(location).att("href", 'http://localhost:85/view/index.php?token=' + data.token);
        }
        else{
            $("<div></div>").addClass("alert alert-danger alert-dismissable").html(data.mensagem + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').appendTo("#ers").fadenIn("slow");
            console.log(data.mensagem);
        }
    },
    "json");
    });
});
