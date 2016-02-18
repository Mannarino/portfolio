<?php
sleep(3);
$conexion=mysqli_connect("mysql.hostinger.com.ar","u854347937_moise","1111112311","u854347937_conta");
$nombre=$_POST["nombre"];
$texto=$_POST["comentario"];
$email=$_POST["email"];
$ingresar="insert into mensajes(id,nombre,texto,email)values(null,'$nombre','$texto','$email')";
$ingresarcon=mysqli_query($conexion,$ingresar);
$asunto="mensaje desde mi sitio web";
$cuerpo="$nombre <br>
	$texto <br>
	$email<br>";
mail("analista_software@hotmail.com",$asunto,$cuerpo);

echo "<div id='correcto'><img src='assets/img/carta.jpg'/><br>El mensaje fue enviado corretamente <img src='assets/img/correc.jpg' width='20px' height='20px' ></div>";
?> 	