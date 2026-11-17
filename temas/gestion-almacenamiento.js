TEMA("gestion-almacenamiento", {
title:"Administración y protección de la información en disco", mins:15,
intro:"Cómo se gestionan discos, particiones y volúmenes en un servidor, cómo se controlan los permisos y el espacio de cada usuario, y cómo se protege la información frente a fallos.",
sections:[
{h:"Discos, particiones y montaje", html:`
<table>
<tr><th>Tarea</th><th>Windows</th><th>Linux</th></tr>
<tr><td>Ver discos y particiones</td><td>Administración de discos, <code>diskpart</code></td><td><code>lsblk</code>, <code>fdisk -l</code></td></tr>
<tr><td>Crear particiones</td><td>Administración de discos, <code>diskpart</code></td><td><code>fdisk</code>, <code>parted</code></td></tr>
<tr><td>Dar formato</td><td>NTFS, ReFS</td><td><code>mkfs.ext4 /dev/sdb1</code></td></tr>
<tr><td>Hacer accesible</td><td>Asignar una letra</td><td>Montar en una carpeta: <code>mount /dev/sdb1 /datos</code></td></tr>
</table>
<p>En Linux, para que un disco se monte solo al arrancar se añade al archivo <code>/etc/fstab</code>, identificándolo por su <b>UUID</b> (con <code>blkid</code>) en lugar de por <code>/dev/sdb1</code>, porque ese nombre puede cambiar si se añaden discos.</p>`,
check:{q:"¿Por qué conviene usar el UUID en /etc/fstab en lugar de /dev/sdb1?", o:["Porque es más corto","Porque el nombre /dev/sdX puede cambiar al añadir o quitar discos","Porque /dev no existe","Porque lo exige Windows"], a:1, e:"El UUID identifica el sistema de archivos de forma única aunque cambie el orden de los discos."}},
{h:"Volúmenes lógicos (LVM) y espacios de almacenamiento", html:`
<p>Con particiones normales, ampliar un disco que se ha quedado pequeño es complicado. Los <b>volúmenes lógicos</b> lo resuelven:</p>
<ul>
<li>En Linux, <b>LVM</b> agrupa discos físicos (PV) en un grupo de volúmenes (VG), y de ahí se crean volúmenes lógicos (LV) que se pueden <b>ampliar en caliente</b> añadiendo discos.</li>
<li>En Windows, <b>Espacios de almacenamiento</b> agrupa discos en un grupo y crea discos virtuales, con opción de espejo o paridad.</li>
<li>El <b>RAID por software</b> (<code>mdadm</code> en Linux, o volúmenes reflejados en Windows) da redundancia sin controladora dedicada.</li>
</ul>
<pre><code>lvextend -L +50G /dev/vg_datos/lv_datos   <span class="c"># ampliar el volumen 50 GB</span>
resize2fs /dev/vg_datos/lv_datos          <span class="c"># ampliar el sistema de archivos ext4</span></code></pre>`},
{h:"Permisos sobre archivos", html:`
<p>En <b>NTFS</b> (Windows) los permisos se definen con <b>listas de control de acceso (ACL)</b>: cada usuario o grupo puede tener Control total, Modificar, Leer y ejecutar, Leer o Escribir, y cada permiso puede permitirse o <b>denegarse</b>.</p>
<ul>
<li>Los permisos se <b>heredan</b> de la carpeta padre, salvo que se rompa la herencia.</li>
<li>Un <b>Denegar</b> explícito prevalece sobre un Permitir.</li>
<li>El propietario de un archivo siempre puede cambiar sus permisos.</li>
</ul>
<p>En Linux, además de los permisos clásicos rwx, existen ACL ampliadas con <code>setfacl</code> y <code>getfacl</code>, para dar permisos a varios usuarios o grupos concretos.</p>`,
check:{q:"Un usuario está en un grupo con permiso de Modificar sobre una carpeta, y en otro grupo con Denegar escritura. ¿Puede escribir?", o:["Sí, gana Modificar","No, el Denegar explícito prevalece","Depende del orden de los grupos","Solo en subcarpetas"], a:1, e:"Los permisos de denegación explícitos tienen prioridad sobre los de permitir."}},
{h:"Cuotas e instantáneas", html:`
<ul>
<li><b>Cuotas de disco:</b> limitan cuánto espacio puede ocupar cada usuario o carpeta. Así un usuario no llena el servidor con sus vídeos. En Windows Server se gestionan con el <b>Administrador de recursos del servidor de archivos (FSRM)</b>, que también permite bloquear tipos de archivo. En Linux, con <code>quota</code>.</li>
<li><b>Instantáneas (shadow copies):</b> Windows guarda versiones anteriores de las carpetas compartidas. El usuario puede recuperar por sí mismo un archivo que ha estropeado desde «Versiones anteriores», sin llamar a soporte.</li>
</ul>
<div class="caso"><b>Caso real</b>Una usuaria sobrescribe por error la hoja de cálculo de todo el departamento. Con las instantáneas activadas, hace clic derecho, «Restaurar versiones anteriores», y recupera la de hace dos horas en un minuto.</div>`}
],
quiz:[
{q:"¿Qué comando de Linux muestra los discos y sus particiones en forma de árbol?", o:["lsblk","ls -l","df","du"], a:0, e:"lsblk lista los dispositivos de bloque."},
{q:"¿En qué archivo se configuran los montajes automáticos en Linux?", o:["/etc/passwd","/etc/fstab","/etc/hosts","/boot/grub"], a:1, e:"fstab indica qué montar, dónde y con qué opciones."},
{q:"¿Qué ventaja principal tiene LVM?", o:["Cifra los discos","Permite ampliar volúmenes añadiendo discos, incluso en caliente","Hace copias automáticas","Es más rápido que un SSD"], a:1, e:"Abstrae los discos físicos en volúmenes flexibles."},
{q:"En NTFS, ¿qué prevalece si hay un Permitir y un Denegar explícito?", o:["Permitir","Denegar","El más reciente","El del grupo con más usuarios"], a:1, e:"La denegación explícita siempre gana."},
{q:"¿De dónde heredan los permisos un archivo nuevo en NTFS?", o:["Del usuario","De la carpeta que lo contiene","Del disco","De ninguna parte"], a:1, e:"La herencia aplica los permisos de la carpeta padre."},
{q:"¿Para qué sirven las cuotas de disco?", o:["Para cifrar","Para limitar el espacio que puede usar cada usuario","Para hacer copias","Para desfragmentar"], a:1, e:"Evitan que un usuario llene el almacenamiento compartido."},
{q:"¿Qué permiten las instantáneas (shadow copies)?", o:["Clonar el disco","Que el usuario recupere versiones anteriores de los archivos","Acelerar el disco","Bloquear archivos"], a:1, e:"Guardan versiones periódicas de las carpetas compartidas."},
{q:"¿Qué herramientas gestionan ACL ampliadas en Linux?", o:["chmod y chown","setfacl y getfacl","mount y umount","lvextend y resize2fs"], a:1, e:"Permiten dar permisos a varios usuarios y grupos concretos."}
]});
