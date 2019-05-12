  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel" id="user-panel" style="text-align: center;">
          <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px" id="spinerEmail"></i><br/>
        <b id="txtRol" style="background-color: purple; color: white;"></b><br/>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">PANEL DE NAVEGACION</li>
        <li class="active treeview">
          <a href="#">
            <i class="fa fa-ravelry"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <!--Bloque Dashboard Mantenimiento-Seguridad -->
          <ul class="treeview-menu">
            <li id="dsMantenimiento"><a href="dashboard-mantenimiento.php"><i class="fa fa-cogs"></i> Dashboard Mantenimiento</a></li>
            <li id="dsSeguridad"><a href="dashboard-seguridad.php"><i class="fa fa-shield"></i> Dashboard Seguridad</a></li>
          </ul>
        </li>
        <li class="treeview" id="treeViewMantenimiento">
          <a href="#">
            <i class="fa fa-cog fa-spin fa-1x fa-fw"></i>
            <span>Mantenimiento</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
            <ul class="treeview-menu" id="opcionesMantenimiento"><li><a href="generar-reporte.php"><i class="fa fa-plus"></i> Nuevo reporte</a></li>
              <li><a href="buscar-reporte.php"><i class="fa fa-search"></i> Buscar Reportes</a></li>
              <li><a href="reportes-nuevos.php"><i class="fa fa-list-ul"></i> Ver nuevos reportes</a></li>
              <li><a href="reportes-encargado.php"><i class="fa fa-list-ul"></i> Encargados C/Reporte</a></li>
              <li><a href="reportes-asignados.php"><i class="fa fa-list-ul"></i>Ver reportes asignados</a></li>
              <li><a href="reportes-finalizados.php"><i class="fa fa-check"></i>Ver reportes finalizados</a></li>
              <li><a href="reportes-cancelados.php"><i class="fa fa-times"></i>Ver reportes cancelados</a></li>
              </ul>
        </li>
        <li class="treeview" id=treeViewSeguridad>
          <a href="#">
            <i class="fa fa-shield" aria-hidden="true"></i>
            <span>Seguridad</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="generar-reporte-seguridad-1.php"><i class="fa fa-plus"></i>Nuevo Reporte Formato 1</a></li>
            <li><a href="generar-reporte-seguridad-2.php"><i class="fa fa-plus"></i>Nuevo Reporte Formato 2</a></li>
            <li><a href="reportes-seguridad.php"><i class="fa fa-list-ul"></i>Ver reportes Formato 1</a></li>
            <li><a href="reportes-seguridad2.php"><i class="fa fa-list-ul"></i>Ver reportes Formato 2</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-users" aria-hidden="true"></i>
            <span>Usuarios</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right">
              </i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="administrar-encargados.php"><i class="fa fa-cubes"></i>Administrar Encargados</a></li>
            <li><a href="administrar-usuarios.php"><i class="fa fa-user-o"></i>Administrar Usuarios</a></li>
            <li><a href="administrar-personal.php"><i class="fa fa-address-card-o"></i>Administrar Personal</a></li>
          </ul>
        </li>
        <li>
          <a href="administracion-graficas.php">
            <i class="fa fa-pie-chart"></i><span>Graficas</span>
            <span class="pull-right-container">
            </span>
          </a>
        </li>
        <li>
          <a href="support.php">
            <i class="fa fa-life-ring" aria-hidden="true"></i><span>Soporte</span>
            <span class="pull-right-container">
            </span>
          </a>
        </li>

      </ul>
    </section>
  </aside>
<script defer type="text/javascript">

/*
* Funcion obtener el nombre completo del usuario logeado
* @return promise
*/
let setNameSideBar = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      let status = localStorage.getItem("status");
      let st;
      if(status === '3'){
        st = 'ADMIN MANTENIMIENTO';
      }else if(status === '4'){
        st = 'PERSONAL CSG';
      }else if(status === '5'){
        st = 'SERVICIO SOCIAL';
      }else if(status === '6'){
        st = 'ADMIN SEGURIDAD';
      }
    $("#txtRol").text(st);
    $('#user-panel').append('<span>'+localStorage.getItem("nombreCompleto")+'</span><br/>');
    $("#spinerEmail").remove();
    //$('#user-panel').append('<small>'+localStorage.getItem("email")+'</small>');
    //OCULTA PANEL SI NO ES DE SEGURIDAD
    
    // if(status === '6'){
    //   $("#treeViewMantenimiento").hide();
    //   $("#dsMantenimiento").hide();
    // }
    // //OCULTA PANEL SI NO ES DE MANTENIMIENTO
    // if(status === '3'){
    //   $("#treeViewSeguridad").hide();
    //   $("#dsSeguridad").hide();
    // }
    
  }, 1000);
  });
}
/*
* Funcion asincrona llamando a otra funcion
*/
async function inicio(){
  let result = await setNameSideBar();
}
inicio();

</script>
