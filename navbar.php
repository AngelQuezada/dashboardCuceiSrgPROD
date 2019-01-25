  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">C<b>SRG</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">CUCEI<b>SRG-</b>ADM</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
<nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="nombrePersonal"></a>
            <ul class="dropdown-menu">
              <li class="user-header" id="user-header">
                <div id="correoNavbar">
                  <img src="assets/img/cucei-srg-logo.png" width="50%">
                </div>
              </li>
              <li class="user-footer">
                <div style="text-align: center">
                  <a href="logout.php" class="btn btn-danger btn-flat">Salir</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
<script type="text/javascript">
/*
* Funcion obtener el nombre completo del usuario logeado
* @return promise
*/
let setNameNavBar = () => {
  return new Promise(resolve => {
    setTimeout(() => {
    $('#correoNavbar').append('<span>'+localStorage.getItem("email")+'</span>');
    $('#nombrePersonal').append('<span>'+localStorage.getItem("nombreCompleto")+'</span>');
  }, 1000);
  });
}
/*
* Funcion asincrona llamando a otra funcion
*/
async function inicio(){
  let result = await setNameNavBar();
}
inicio();
</script>
