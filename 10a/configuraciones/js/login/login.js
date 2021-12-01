function login_usuario() {
    if ($('#user').val() == "") {
        var msg = "CAMPO USUARIO VACIO";
        msg_error(msg);
    } else if ($('#user_password').val() == "") {
        var msg = "CAMPO CONTRASEÑA VACIO";
        msg_error(msg);
    } else {
        var datos = new FormData();
        datos.append("usuario", $('#user').val());
        datos.append("contrasena", $('#user_password').val());
        $.ajax({
            url: "ctrl_login",
            type: 'POST',
            processData: false,
            contentType: false,
            data: datos,
            success: function(resp) {
                var resultado = JSON.parse(resp);
                if (resultado.status == 1) {

                }
            }
        });
    }
}

function cerrar() {
    document.getElementById('user').value = "";
    document.getElementById('contrasena').value = "";
    $('#modal_form_usuario').modal('hide');
}

function msg_success(msg) {

}

function msg_error(msg) {
    document.getElementById("msg_error").innerHTML =
        msg;
    $('#error_alert').addClass('show');
    setTimeout(function() {
        $('#error_alert').attr("class", "alert alert-dismissible alert-danger fade");
    }, 2000)
}