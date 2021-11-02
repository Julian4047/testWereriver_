<?php

$servername = "bd0kp6pbuzd7pdnz82st-mysql.services.clever-cloud.com";
$database = "bd0kp6pbuzd7pdnz82st";
$username = "uxh9tay4uillinby";
$password = "ZGCD7IDcNV3ukzkdMyRx";

$conexion = mysqli_connect($servername, $username, $password, $database)
or die(mysql_error($mysqli));

insertar($conexion);

function insertar($conexion) {
    $Id = $_POST['Id'];
    $Nombre = $_POST['Nombre'];
    $Apellido = $_POST['Apellido'];
    $Producto = $_POST['Producto'];

    $consulta = "INSERT INTO orders(Id,Nombre,Apellido,Producto) VALUES ('$Id','$Nombre','$Apellido','$Producto')";

    mysqli_query($conexion,$consulta);
    mysqli_close($conexion); 
}

?>
 
