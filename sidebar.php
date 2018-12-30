<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel" id="user-panel"></div>
     
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">PANEL NAVEGACION</li>
        <li class="active treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <!--Bloque Dashboard Mantenimiento-Seguridad -->
          <ul class="treeview-menu">
            <li class="active"><a href="dashboard-mantenimiento.php"><i class="fa fa-circle-o"></i> Dashboard Mantenimiento</a></li>
            <li><a href="dashboard-seguridad.php"><i class="fa fa-circle-o"></i> Dashboard Seguridad</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-cog"></i>
            <span>Reportes Mantenimiento</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="generar-reporte.php"><i class="fa fa-circle-o"></i> Nuevo reporte</a></li>
            <li><a href="ver-reportes.php"><i class="fa fa-circle-o"></i> Ver nuevos reportes</a></li>
            <li><a href="reportes-asignados.php"><i class="fa fa-circle-o"></i>Ver reportes asignados</a></li>
            <li><a href="reportes-finalizados.php"><i class="fa fa-circle-o"></i>Ver reportes finalizados</a></li>
            <li><a href="reportes-cancelados.php"><i class="fa fa-circle-o"></i>Ver reportes cancelados</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-plus-square"></i>
            <span>Reportes Seguridad</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="generar-reporte-seguridad-1.php"><i class="fa fa-circle-o"></i>Nuevo Reporte Formato 1</a></li>
            <li><a href="generar-reporte-seguridad-2.php"><i class="fa fa-circle-o"></i>Nuevo Reporte Formato 2</a></li>
            <li><a href="reportes-seguridad.php"><i class="fa fa-circle-o"></i>Ver reportes</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-user-circle"></i>
            <span>Administrar Usuarios</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right">
              </i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="administrar-usuarios.php"><i class="fa fa-circle-o"></i>Administrar Usuarios</a></li>
          </ul>
        </li>

       
        <li>
          <a href="administracion-graficas.php">
            <i class="fa fa-pie-chart"></i> <span>Graficas</span>
            <span class="pull-right-container">
            </span>
          </a>
        </li>

      </ul>
    </section>
  </aside>
  <script type="text/javascript">
  function setNameSideBar() {
    return new Promise(resolve => {
      setTimeout(() => {
      $('#user-panel').append('<span>'+localStorage.getItem("nombreCompleto")+'</span>');
    }, 1000);
   });
  }
  async function inicio(){
    var result = await setNameSideBar();
  }
    inicio();
  </script>
