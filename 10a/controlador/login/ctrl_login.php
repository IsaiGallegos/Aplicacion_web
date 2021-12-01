<?php
session_start();
include("../../modelo/mdl_login.php");
$obj = new class_login();

if(isset($_POST['usuario'])){
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $query = "SELECT * FROM usuarios WHERE usuario_correo= '$usuario' AND usuario_contrasena = '$contrasena'";
    $resultado = $obj -> login($query);
    if(empty(resultado)){
        $mensaje = "Usuario y/o contraseña son incorrectos";
        exit(json_encode([
            "status" => "2",
            "mensaje" = ""
        ]));
    }
    /*$mensaje = "CORRECTO";
    exit (json_encode([
        "status" => "1",
        "mensaje" => $mensaje
    ]));*/
}else{
    echo "no se encuentra la info solicitada";
}


?>