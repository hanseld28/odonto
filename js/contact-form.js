function limpar_campos() {
    $("#nome-form-contato").val("");
    $("#email-form-contato").val("");
    $("#assunto-form-contato").val("");
    $("#descricao-form-contato").val("");
}

function submete_form_contato(){
    
    $.ajax({
        url : "php/contact_message.php",
        type : 'post',
        data : {
            nome : $("#nome-form-contato").val(),
            email : $("#email-form-contato").val(),
            assunto : $("#assunto-form-contato").val(),
            descricao : $("#descricao-form-contato").prop("value")
        },
        beforeSend : function(){}
    })
    .done(function(msg){
        alert("Sua mensagem foi enviada! Aguarde o nosso contato.");
        limpar_campos();
    })
    .fail(function(jqXHR, textStatus, msg){
        alert(msg);
    });

}