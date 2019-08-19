<?php
$emailValue = $_GET["txtCorreo"];
//$CURL_DEV = 'http://localhost/APICuceiSrgPROD/index.php/personal/verifypersonal/'.$emailValue;
$CURL_PROD = 'http://apisrg.cucei.udg.mx/index.php/personal/verifypersonal/'.$emailValue;
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $CURL_PROD,
]);
// Send the request & save response to $resp
$resp = curl_exec($curl);
$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
if ($http_status==400) {
  $json2 = json_decode( $resp, true );
  $msg = $json2['mensaje'];
  echo "<script>";
  echo "if(alert('$msg'));";  
  echo "window.location = 'access.php';";
  echo "</script>";  
  return;
}
// Close request to clear up some resources
curl_close($curl);
$json = json_decode( $resp, true );
$correoValido = $json['correo'];
session_start();
$_SESSION["personal"] = $correoValido;
echo "<script>window.location.replace(`validator.php`);</script>";
?>
