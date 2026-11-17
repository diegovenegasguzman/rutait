TEMA("so-servidor", {
title:"Instalar un sistema operativo de servidor", mins:12,
intro:"En qué se diferencia un sistema operativo de servidor de uno de escritorio, qué ediciones hay y qué pasos se siguen para dejar un servidor listo para trabajar.",
sections:[
{h:"Servidor frente a escritorio", html:`
<p>Un sistema operativo de servidor está pensado para dar servicios a otros equipos 24 horas al día: más memoria y procesadores admitidos, funciones de red avanzadas, roles de servidor (DNS, DHCP, dominio, archivos) y, a menudo, <b>sin interfaz gráfica</b> para consumir menos y ser más seguro.</p>
<table>
<tr><th>Sistema</th><th>Características</th></tr>
<tr><td>Windows Server (Standard, Datacenter)</td><td>Roles con asistentes gráficos, Active Directory; licencia por núcleos y licencias de acceso de cliente (CAL)</td></tr>
<tr><td>Windows Server Core</td><td>Sin escritorio; se administra con PowerShell o remotamente</td></tr>
<tr><td>Ubuntu Server, Debian</td><td>Libres, gratuitos, muy usados en web y nube</td></tr>
<tr><td>Red Hat Enterprise Linux, Rocky, AlmaLinux</td><td>Linux empresarial con soporte largo</td></tr>
</table>`},
{h:"Pasos de la instalación", html:`
<div class="work">
<div class="stepn"><i>1</i><span>Comprueba hardware y compatibilidad; configura el RAID en la controladora si lo hay.</span></div>
<div class="stepn"><i>2</i><span>Instala desde ISO (USB, iDRAC/iLO del servidor o como máquina virtual).</span></div>
<div class="stepn"><i>3</i><span>Pon nombre al equipo y una <b>IP fija</b>: un servidor no debe depender del DHCP.</span></div>
<div class="stepn"><i>4</i><span>Actualiza el sistema antes de exponerlo a la red.</span></div>
<div class="stepn"><i>5</i><span>Añade los <b>roles</b> que necesites (Administrador del servidor o <code>Install-WindowsFeature</code>; <code>apt install</code> en Linux).</span></div>
<div class="stepn"><i>6</i><span>Configura cortafuegos, copias y monitorización. Documenta todo.</span></div>
</div>
<div class="caso"><b>Caso real</b>Un servidor de archivos obtenía su IP por DHCP. Tras un corte de luz recibió otra distinta y nadie pudo abrir las carpetas compartidas. Los servidores siempre con IP fija o reserva DHCP.</div>`,
check:{q:"¿Por qué un servidor debe tener IP fija?", o:["Porque es más rápido","Porque los clientes lo localizan por esa dirección y no debe cambiar","Porque lo exige la licencia","No hace falta"], a:1, e:"Si su IP cambia, los registros DNS, accesos y configuraciones que apuntan a él dejan de funcionar."}},
{h:"Administración remota", html:`
<ul>
<li><b>Windows:</b> Escritorio remoto, PowerShell remoto (<code>Enter-PSSession servidor</code>), Windows Admin Center (consola web) y las herramientas RSAT desde un PC.</li>
<li><b>Linux:</b> SSH, y paneles web como Cockpit.</li>
</ul>
<p>Los servidores se administran desde un equipo de administración, no sentándose delante: así el servidor ni siquiera necesita escritorio.</p>`}
],
quiz:[
{q:"¿Qué es Windows Server Core?", o:["Una versión de prueba","Windows Server sin interfaz gráfica de escritorio","Un antivirus","Un tipo de licencia"], a:1, e:"Consume menos recursos y tiene menos superficie de ataque."},
{q:"¿Qué se añade a un Windows Server para que haga de DNS, DHCP o dominio?", o:["Programas portables","Roles","Drivers","Perfiles"], a:1, e:"Se instalan desde el Administrador del servidor o PowerShell."},
{q:"¿Qué distribuciones Linux se usan en servidores empresariales con soporte largo?", o:["Solo Ubuntu Desktop","Red Hat, Rocky o AlmaLinux","Android","Windows"], a:1, e:"Son distribuciones pensadas para producción."},
{q:"¿Qué cmdlet instala roles en Windows Server?", o:["Install-WindowsFeature","Add-Role","apt install","New-Server"], a:0, e:"Por ejemplo, Install-WindowsFeature DHCP -IncludeManagementTools."},
{q:"¿Qué haces antes de exponer un servidor recién instalado a la red?", o:["Nada","Actualizarlo","Desactivar el cortafuegos","Instalar juegos"], a:1, e:"Un sistema sin parches es vulnerable desde el primer minuto."},
{q:"¿Qué herramienta web administra Linux desde el navegador?", o:["Cockpit","Paint","Excel","Wireshark"], a:0, e:"Cockpit muestra servicios, registros, almacenamiento y más."}
]});
