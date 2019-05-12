  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">C<b>SRG</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">CUCEI<b>-</b><b>SRG-</b>ADMIN </span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
<nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <!-- <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a> -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <ul class="dropdown-menu">
              <li class="user-header" id="user-header">
                <div id="correoNavbar">
                </div>
              </li>
              <li class="user-footer">
                <div style="text-align: center">
                </div>
              </li>
            </ul>
          </li>
          <li>
          <b>Cerrar Sesión </b><button class="btn btn-danger btn-circle btn-xl" id="btnCerrarSesion" style="background: #f44336; width: 35px; height: 35px; padding: 10px 10px; border-radius: 30px; font-size: 15px; line-height: 1.33;"><i class="fa fa-power-off" style="color: white"></i></button>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-paint-brush"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
<script defer type="text/javascript">
const URL = localStorage.getItem('url');
document.getElementById('btnCerrarSesion').addEventListener('click',function(){
  window.location.replace(`${URL}/logout.php`);
});
</script>