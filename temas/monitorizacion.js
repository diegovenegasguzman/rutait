TEMA("monitorizacion", {
title:"Monitorización e información del sistema", mins:13,
intro:"Cómo saber en todo momento qué le pasa a un servidor: qué datos mirar, con qué comandos y cómo montar alertas para enterarte antes que los usuarios.",
sections:[
{h:"Qué hay que vigilar", html:`
<table>
<tr><th>Recurso</th><th>Señal de alarma</th></tr>
<tr><td>CPU</td><td>Uso sostenido cerca del 100 %</td></tr>
<tr><td>Memoria</td><td>RAM llena y uso de swap o archivo de paginación</td></tr>
<tr><td>Disco</td><td>Particiones por encima del 85–90 %; disco con cola de espera alta</td></tr>
<tr><td>Red</td><td>Interfaces saturadas, errores, pérdida de paquetes</td></tr>
<tr><td>Servicios</td><td>Un servicio caído o reiniciándose</td></tr>
<tr><td>Registros</td><td>Errores repetidos, inicios de sesión fallidos</td></tr>
</table>`},
{h:"Comandos de información", html:`
<table>
<tr><th>Qué</th><th>Linux</th><th>Windows</th></tr>
<tr><td>Hardware y sistema</td><td><code>uname -a</code>, <code>lscpu</code>, <code>lsblk</code>, <code>lshw</code></td><td><code>systeminfo</code>, <code>Get-ComputerInfo</code></td></tr>
<tr><td>CPU y procesos</td><td><code>top</code>, <code>htop</code>, <code>uptime</code></td><td>Administrador de tareas, <code>Get-Process</code></td></tr>
<tr><td>Memoria</td><td><code>free -h</code></td><td>Monitor de recursos</td></tr>
<tr><td>Espacio en disco</td><td><code>df -h</code>, <code>du -sh carpeta</code></td><td><code>Get-PSDrive</code></td></tr>
<tr><td>Red</td><td><code>ip a</code>, <code>ss -tulpn</code></td><td><code>Get-NetIPAddress</code>, <code>netstat</code></td></tr>
<tr><td>Rendimiento en el tiempo</td><td><code>vmstat</code>, <code>iostat</code>, <code>sar</code></td><td>Monitor de rendimiento (perfmon)</td></tr>
</table>
<p><code>uptime</code> muestra la <b>carga media</b> de 1, 5 y 15 minutos. Como regla rápida, si la carga supera de forma sostenida el número de núcleos, el sistema va saturado.</p>`,
check:{q:"¿Qué comando de Linux muestra el espacio libre de cada partición?", o:["du","df -h","free","top"], a:1, e:"df muestra el uso de los sistemas de archivos; du, lo que ocupa una carpeta concreta."}},
{h:"Monitorización centralizada y alertas", html:`
<p>Con muchos servidores no se puede ir uno por uno. Se usan sistemas que recogen métricas de todos, guardan históricos y <b>avisan</b> cuando algo supera un umbral:</p>
<ul>
<li><b>Zabbix</b> y <b>Nagios</b>: clásicos de la monitorización de infraestructuras.</li>
<li><b>Prometheus + Grafana</b>: métricas y paneles muy visuales.</li>
<li><b>SNMP</b>: protocolo estándar para consultar el estado de routers, switches, impresoras y SAI.</li>
</ul>
<div class="caso"><b>Caso real</b>Zabbix avisa de madrugada de que el disco del servidor de correo está al 92 %. El técnico amplía el volumen por la mañana antes de que se llene. Sin monitorización, el aviso habría llegado en forma de «no me llegan los correos» de 200 usuarios.</div>`}
],
quiz:[
{q:"¿Qué comando de Linux muestra la memoria libre de forma legible?", o:["df -h","free -h","ls -h","top -m"], a:1, e:"-h muestra los valores en MB o GB."},
{q:"¿Qué indica la carga media que muestra uptime?", o:["La temperatura","Cuántos procesos esperan o usan CPU de media","El espacio en disco","La velocidad de red"], a:1, e:"Se compara con el número de núcleos."},
{q:"¿Qué comando de Windows resume la información del sistema?", o:["systeminfo","ipconfig","dir","ping"], a:0, e:"Muestra versión, parches, memoria, arranque, etc."},
{q:"¿Qué herramienta de Windows registra contadores de rendimiento a lo largo del tiempo?", o:["Monitor de rendimiento (perfmon)","Bloc de notas","Paint","Explorador"], a:0, e:"Permite crear conjuntos de recopiladores de datos."},
{q:"¿Qué protocolo permite consultar el estado de switches, impresoras o SAI?", o:["SMTP","SNMP","FTP","SSH"], a:1, e:"Simple Network Management Protocol."},
{q:"¿Qué ventaja da Zabbix o Nagios frente a revisar a mano?", o:["Nada","Vigilan todos los equipos continuamente y avisan al superar umbrales","Instalan programas","Hacen copias"], a:1, e:"Detectas los problemas antes que los usuarios."}
]});
