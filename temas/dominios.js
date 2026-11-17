TEMA("dominios", {
title:"Dominios y Active Directory", mins:16,
intro:"Cómo se gestionan cientos de usuarios y equipos desde un servidor: grupos de trabajo frente a dominios, Active Directory, grupos, directivas y permisos de carpetas compartidas.",
sections:[
{h:"Grupo de trabajo o dominio", html:`
<table>
<tr><th></th><th>Grupo de trabajo</th><th>Dominio</th></tr>
<tr><td>Usuarios</td><td>Cada equipo tiene sus propias cuentas</td><td>Cuentas centralizadas en un servidor</td></tr>
<tr><td>Inicio de sesión</td><td>Solo en el equipo donde existe la cuenta</td><td>En cualquier equipo del dominio</td></tr>
<tr><td>Administración</td><td>Equipo por equipo</td><td>Desde un único punto</td></tr>
<tr><td>Tamaño adecuado</td><td>Casa u oficina muy pequeña</td><td>Cualquier organización</td></tr>
</table>
<p>En un dominio, el servidor que guarda las cuentas y comprueba las contraseñas se llama <b>controlador de dominio</b> (DC). Lo normal es tener al menos dos, por si uno falla.</p>`},
{h:"Active Directory", html:`
<p><b>Active Directory Domain Services (AD DS)</b> es el servicio de directorio de Windows Server. Es una base de datos jerárquica con todos los <b>objetos</b> de la organización: usuarios, grupos, equipos e impresoras.</p>
<ul>
<li><b>Dominio:</b> la unidad básica, con un nombre DNS (por ejemplo <code>empresa.local</code>).</li>
<li><b>Árbol y bosque:</b> varios dominios relacionados forman un árbol; varios árboles, un bosque.</li>
<li><b>Unidades organizativas (OU):</b> carpetas dentro del dominio para organizar los objetos (por departamentos, sedes…) y aplicarles directivas.</li>
</ul>
<div class="note"><b>AD depende del DNS</b>Los equipos encuentran al controlador de dominio preguntando al DNS. Si el DNS falla o los clientes no apuntan al DNS del dominio, no podrán unirse ni iniciar sesión. Es la causa número uno de problemas con AD.</div>
<p>En Linux se consigue algo parecido con <b>Samba</b> (que puede actuar como controlador de dominio compatible con Windows) y <b>OpenLDAP</b>.</p>`},
{h:"Usuarios y grupos", html:`
<p>Nunca se dan permisos a usuarios sueltos: se dan a <b>grupos</b> y se meten los usuarios en ellos. Así, cuando alguien cambia de puesto, basta con cambiarle de grupo.</p>
<ul>
<li><b>Tipos de grupo:</b> de <b>seguridad</b> (para dar permisos) y de <b>distribución</b> (solo listas de correo).</li>
<li><b>Ámbitos:</b> <b>global</b> (agrupa usuarios del propio dominio), <b>dominio local</b> (se usa para asignar permisos sobre recursos) y <b>universal</b> (para bosques con varios dominios).</li>
</ul>
<p><b>Estrategia AGDLP:</b> cuentas (<b>A</b>ccounts) → grupos <b>G</b>lobales → grupos de <b>D</b>ominio <b>L</b>ocal → <b>P</b>ermisos. Por ejemplo: los usuarios de contabilidad van al grupo global <code>G_Contabilidad</code>, que se mete en el grupo local <code>DL_Facturas_Modificar</code>, que es el que tiene permiso sobre la carpeta de facturas.</p>`},
{h:"Directivas de grupo (GPO)", html:`
<p>Una <b>GPO</b> es un conjunto de configuraciones que se aplica automáticamente a usuarios o equipos: política de contraseñas, fondo de escritorio, unidades de red, instalación de programas, bloqueo del panel de control…</p>
<p>Se vinculan a sitios, dominios u OU y se aplican en este orden, de modo que la última gana si hay conflicto:</p>
<div class="work">
<div class="stepn"><i>1</i><span><b>L</b>ocal (la del propio equipo)</span></div>
<div class="stepn"><i>2</i><span><b>S</b>itio</span></div>
<div class="stepn"><i>3</i><span><b>D</b>ominio</span></div>
<div class="stepn"><i>4</i><span><b>OU</b> (de la más externa a la más interna)</span></div>
</div>
<p>Para forzar que un equipo aplique ya los cambios: <code>gpupdate /force</code>. Para ver qué directivas tiene aplicadas: <code>gpresult /r</code>.</p>`},
{h:"Carpetas compartidas y permisos", html:`
<p>Una carpeta compartida se accede por red con una <b>ruta UNC</b>: <code>\\\\servidor\\Facturas</code>. En Windows hay dos capas de permisos:</p>
<ul>
<li><b>Permisos de recurso compartido:</b> se aplican solo al entrar por red (Lectura, Cambio, Control total).</li>
<li><b>Permisos NTFS:</b> se aplican siempre, por red y en local, y son más detallados.</li>
</ul>
<p>Al acceder por red, el permiso efectivo es <b>el más restrictivo de los dos</b>.</p>
<div class="work">
<div class="stepn"><i>1</i><span>Compartido: Lectura. NTFS: Control total.</span></div>
<div class="stepn"><i>2</i><span>Por red, el usuario solo podrá <b>leer</b>.</span></div>
</div>
<div class="note exam"><b>Práctica habitual</b>Muchas empresas dan «Control total» a Todos en el compartido y controlan el acceso solo con NTFS. Así solo hay una capa que revisar.</div>`}
],
quiz:[
{q:"¿Cómo se llama el servidor que guarda las cuentas del dominio y valida los inicios de sesión?", o:["Servidor DHCP","Controlador de dominio","Servidor de archivos","Proxy"], a:1, e:"El controlador de dominio (DC) aloja Active Directory y autentica a los usuarios."},
{q:"¿Qué contenedor usas para organizar objetos en AD y aplicarles directivas?", o:["Unidad organizativa (OU)","Bosque","Grupo de distribución","Carpeta compartida"], a:0, e:"Las OU organizan los objetos y son donde normalmente se vinculan las GPO."},
{q:"¿Qué comando fuerza que un equipo aplique las directivas en ese momento?", o:["ipconfig /renew","gpupdate /force","gpresult /r","netstat"], a:1, e:"gpupdate /force vuelve a aplicar todas las directivas."},
{q:"Permiso compartido: Lectura. Permiso NTFS: Control total. ¿Qué puede hacer el usuario por red?", o:["Control total","Modificar","Solo leer","Nada"], a:2, e:"Por red se aplica el permiso más restrictivo de los dos."},
{q:"¿Qué servicio es imprescindible para que funcione Active Directory?", o:["FTP","DNS","SMTP","Telnet"], a:1, e:"Los clientes localizan los controladores de dominio mediante registros DNS."},
{q:"¿En qué orden se aplican las GPO?", o:["OU, dominio, sitio, local","Local, sitio, dominio, OU","Dominio, OU, local, sitio","Todas a la vez"], a:1, e:"LSDOU: local, sitio, dominio y OU. La última aplicada gana en caso de conflicto."},
{q:"¿Cuál es una ruta UNC válida?", o:["C:/servidor/datos","\\\\servidor\\datos","http://servidor/datos","//datos:servidor"], a:1, e:"Las rutas UNC empiezan por dos barras invertidas y el nombre del servidor."},
{q:"¿Qué caracteriza a un grupo de trabajo?", o:["Un servidor centraliza todas las cuentas","Cada equipo gestiona sus propios usuarios","Necesita Windows Server","Usa GPO"], a:1, e:"En un grupo de trabajo no hay administración centralizada."}
]});
