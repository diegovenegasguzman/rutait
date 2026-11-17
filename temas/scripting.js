TEMA("scripting", {
title:"Automatización con Bash y PowerShell", mins:17,
intro:"Cómo escribir scripts que hagan por ti las tareas repetitivas de administración, cómo programarlos para que se ejecuten solos y cómo revisar los servicios y sus registros.",
sections:[
{h:"Por qué automatizar", html:`
<p>Un administrador que hace todo a mano comete errores y no escala: crear 50 usuarios, revisar el espacio de 30 servidores o hacer una copia cada noche son tareas para un <b>script</b>. Un script es un archivo de texto con comandos que se ejecutan en orden, con variables, condiciones y bucles.</p>
<ul>
<li><b>Bash</b> es el intérprete por defecto en Linux.</li>
<li><b>PowerShell</b> es el de Windows, y también funciona en Linux y macOS.</li>
</ul>`},
{h:"Scripts en Bash", html:`
<pre><code><span class="c">#!/bin/bash</span>
<span class="c"># copia.sh — copia una carpeta en /backup con la fecha</span>

origen=<span class="s">"$1"</span>                       <span class="c"># primer parámetro</span>
fecha=$(date +%F)                 <span class="c"># 2026-11-17</span>
destino=<span class="s">"/backup/copia-$fecha.tar.gz"</span>

<span class="k">if</span> [ ! -d <span class="s">"$origen"</span> ]; <span class="k">then</span>
  echo <span class="s">"La carpeta $origen no existe"</span>
  exit 1
<span class="k">fi</span>

tar -czf <span class="s">"$destino"</span> <span class="s">"$origen"</span>
echo <span class="s">"Copia creada en $destino"</span></code></pre>
<ul>
<li>La primera línea (<b>shebang</b>) <code>#!/bin/bash</code> indica qué intérprete usar.</li>
<li>Las variables se asignan <b>sin espacios</b> alrededor del <code>=</code> y se leen con <code>$</code>.</li>
<li><code>$1</code>, <code>$2</code>… son los parámetros; <code>$#</code>, cuántos hay; <code>$?</code>, el código de salida del último comando (0 = éxito).</li>
<li>Para ejecutarlo: <code>chmod +x copia.sh</code> y luego <code>./copia.sh /home/ana</code>.</li>
</ul>
<pre><code><span class="c"># Bucle: crear usuarios a partir de una lista</span>
<span class="k">for</span> u <span class="k">in</span> $(cat usuarios.txt); <span class="k">do</span>
  sudo useradd -m <span class="s">"$u"</span>
<span class="k">done</span></code></pre>`},
{h:"PowerShell", html:`
<p>Los comandos de PowerShell se llaman <b>cmdlets</b> y siguen la forma <b>Verbo-Sustantivo</b>: <code>Get-Service</code>, <code>Stop-Process</code>, <code>New-LocalUser</code>. A diferencia de Bash, la tubería pasa <b>objetos</b> con propiedades, no texto.</p>
<pre><code><span class="c"># Servicios detenidos</span>
Get-Service | Where-Object Status -eq <span class="s">'Stopped'</span>

<span class="c"># Los 5 procesos que más memoria usan</span>
Get-Process | Sort-Object WS -Descending | Select-Object -First 5

<span class="c"># Crear usuarios del dominio desde un CSV</span>
Import-Csv usuarios.csv | ForEach-Object {
  New-ADUser -Name $_.Nombre -SamAccountName $_.Usuario -Enabled $true
}</code></pre>
<p>Los scripts tienen extensión <code>.ps1</code>. Por seguridad, Windows puede bloquear su ejecución; lo controla la <b>política de ejecución</b> (<code>Get-ExecutionPolicy</code>). Para aprender un cmdlet: <code>Get-Help Get-Service -Examples</code>.</p>`},
{h:"Programar tareas", html:`
<p>En Linux, <b>cron</b> ejecuta tareas periódicas. Se editan con <code>crontab -e</code> y cada línea tiene cinco campos de tiempo:</p>
<table>
<tr><th>Minuto</th><th>Hora</th><th>Día del mes</th><th>Mes</th><th>Día de la semana</th><th>Comando</th></tr>
<tr><td>0</td><td>2</td><td>*</td><td>*</td><td>*</td><td><code>/root/copia.sh /home</code></td></tr>
<tr><td>30</td><td>3</td><td>*</td><td>*</td><td>1</td><td><code>apt update</code></td></tr>
</table>
<p>La primera línea se ejecuta todos los días a las 2:00; la segunda, los lunes a las 3:30 (domingo es 0 o 7). El <code>*</code> significa «cualquiera».</p>
<p>En Windows se usa el <b>Programador de tareas</b>, desde la interfaz gráfica o con <code>Register-ScheduledTask</code>.</p>`},
{h:"Servicios y registros", html:`
<ul>
<li><code>systemctl status nginx</code>: estado del servicio y sus últimas líneas de registro.</li>
<li><code>journalctl -u nginx --since today</code>: registros del servicio desde hoy.</li>
<li><code>journalctl -f</code>: registros del sistema en directo.</li>
<li>Muchos programas escriben también en <code>/var/log</code> (por ejemplo, <code>/var/log/auth.log</code> registra los inicios de sesión).</li>
</ul>
<p>En Windows, los registros están en el <b>Visor de eventos</b>, o con PowerShell: <code>Get-WinEvent -LogName System -MaxEvents 20</code>.</p>
<div class="note"><b>Buena práctica</b>Haz que tus scripts escriban en un log lo que han hecho y si ha habido errores. Cuando algo falle a las 3 de la mañana, será lo único que tengas.</div>`}
],
quiz:[
{q:"¿Cuál debe ser la primera línea de un script de Bash?", o:["#!/bin/bash","// bash","<?bash?>","@echo off"], a:0, e:"El shebang indica al sistema qué intérprete debe ejecutar el script."},
{q:"¿Cuándo se ejecuta la línea de cron «30 3 * * 1 comando»?", o:["El día 1 de cada mes a las 3:30","Los lunes a las 3:30","Cada 30 minutos","El 3 de enero a las 1:30"], a:1, e:"Minuto 30, hora 3, cualquier día, cualquier mes, día de la semana 1 (lunes)."},
{q:"¿Cuál es la forma correcta de asignar una variable en Bash?", o:["nombre = \"Ana\"","nombre=\"Ana\"","$nombre=\"Ana\"","set nombre \"Ana\""], a:1, e:"En Bash no puede haber espacios alrededor del =."},
{q:"¿Qué contiene $1 en un script de Bash?", o:["El nombre del script","El primer parámetro","El código de salida","El número de parámetros"], a:1, e:"$0 es el nombre del script; $1, el primer parámetro."},
{q:"¿Qué estructura siguen los cmdlets de PowerShell?", o:["Sustantivo-Verbo","Verbo-Sustantivo","Siempre una sola palabra","Prefijo PS-"], a:1, e:"Por ejemplo, Get-Service o New-ADUser."},
{q:"¿Qué comando da permiso de ejecución a un script?", o:["chown +x","chmod +x","run +x","exec script"], a:1, e:"chmod +x añade el permiso de ejecución."},
{q:"¿Cómo consultas los registros de un servicio gestionado por systemd?", o:["journalctl -u servicio","cat /etc/servicio","systemctl enable","ps aux"], a:0, e:"journalctl -u filtra los registros de una unidad concreta."},
{q:"¿Qué indica $? = 0 en Bash?", o:["Que el comando anterior falló","Que el comando anterior terminó bien","Que no hay parámetros","Que el script ha terminado"], a:1, e:"Por convención, 0 es éxito y cualquier otro valor indica un error."}
]});
