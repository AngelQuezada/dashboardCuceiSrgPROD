  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
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
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">     
              <span class="hidden-xs" id="nombrePersonal"></span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <p id="correoNavbar"></p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="mi-perfil.php" class="btn btn-default btn-flat">Perfil</a>
                </div>
                <div class="pull-right">
                  <a href="logout.php" class="btn btn-default btn-flat">Salir</a>
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
  function setNameNavBar() {
    return new Promise(resolve => {
      setTimeout(() => {
      document.getElementById("correoNavbar").innerHTML = localStorage.getItem("email");
      document.getElementById("nombrePersonal").innerHTML = localStorage.getItem("nombreCompleto");
    }, 2000);
   });
  }
    async function inicio(){
      var result = await setNameNavBar();
    }
    inicio();
  </script>
