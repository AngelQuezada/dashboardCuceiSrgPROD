<?php
    $emailValue = $_GET["txtClave"];
    session_start();
    if($emailValue == "RkSJaLR18"){
        $_SESSION["personal"] = "verificado";
        echo "<script>window.location.replace(`validator.php`);</script>";
    }else{
        echo "<script>window.location.replace(`access.php`);</script>"; 
    }
?>