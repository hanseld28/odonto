function validar_campos(form_id){
    let form = $("#"+form_id)[0];
    let tamanho_form = form.length -1;
    let campos_vazios_do_form = 0;
    for(let i=0; i < tamanho_form ; i++)
   {   
        if(form[i].value == "")
        {
            campos_vazios_do_form++;
        }
   }
    if(campos_vazios_do_form > 0) {
        alert("Preencha todos os campos!");
    }else{
        submete_form_contato();
    }
}

function limpar_campos(campo1, campo2, campo3, campo4) {
    campo1.val("");
    campo2.val("");
    campo3.val("");
    campo4.val("");
}

function submete_form_contato(){
    let campo_nome = $("#nome-form-contato");
    let campo_email = $("#email-form-contato");
    let campo_assunto = $("#assunto-form-contato");
    let campo_descricao = $("#descricao-form-contato");

    $.ajax({
        url : "php/contact_message.php",
        type : 'post',
        data : {
            nome : campo_nome.val(),
            email : campo_email.val(),
            assunto : campo_assunto.val(),
            descricao : campo_descricao.prop("value")
        },
        beforeSend : function(){}
    })
    .done(function(msg){
        alert("Sua mensagem foi enviada! Aguarde o nosso contato.");
        limpar_campos(campo_nome, campo_email, campo_assunto, campo_descricao);
    })
    .fail(function(jqXHR, textStatus, msg){
        alert(msg);
        limpar_campos();
    });

}

function submete_form_agendamento_consulta(){
    let campo_nome = $("#nome-form-agendamento");
    let campo_sobrenome = $("#sobrenome-form-agendamento");
    let campo_data = $("#data-consulta-form-agendamento");
    let campo_horario = $("#horario-consulta-form-agendamento");

    $.ajax({
        url : "php/appointment_scheduling.php",
        type : 'post',
        data : {
            nome : campo_nome.val(),
            sobrenome : campo_sobrenome.val(),
            data : campo_data.val(),
            horario : campo_horario.val()
        },
        beforeSend : function(){}
    })
    .done(function(msg){
        alert("Sua consulta foi agendada! Venha até a clínica na data/horário marcados.");
        limpar_campos(campo_nome, campo_sobrenome, campo_data, campo_horario);
    })
    .fail(function(jqXHR, textStatus, msg){
        alert(msg);
    });

}
