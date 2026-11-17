TEMA("proxy", {
title:"Servidores proxy", mins:11,
intro:"Qué hace un servidor proxy, los tipos que existen y cómo se configura Squid para controlar y acelerar la navegación de una organización.",
sections:[
{h:"Tipos de proxy", html:`
<table>
<tr><th>Tipo</th><th>Qué hace</th></tr>
<tr><td>Proxy directo (forward)</td><td>Los equipos internos navegan a través de él: filtra, registra y guarda caché</td></tr>
<tr><td>Proxy transparente</td><td>Igual, pero sin configurar nada en los equipos: el router le desvía el tráfico</td></tr>
<tr><td>Proxy inverso</td><td>Está delante de los servidores y recibe las peticiones de Internet (Nginx, HAProxy)</td></tr>
<tr><td>Proxy anónimo</td><td>Oculta la IP del cliente ante el destino</td></tr>
</table>
<p>Con HTTPS, el proxy solo ve el dominio de destino, no el contenido, salvo que haga <b>inspección TLS</b> (requiere instalar en los equipos un certificado de la empresa y avisar a los usuarios).</p>`},
{h:"Configurar Squid", html:`
<pre><code><span class="c"># /etc/squid/squid.conf</span>
http_port 3128

acl red_local src 192.168.1.0/24
acl bloqueadas dstdomain "/etc/squid/bloqueadas.txt"
acl horario_laboral time MTWHF 08:00-15:00

http_access deny bloqueadas horario_laboral
http_access allow red_local
http_access deny all

cache_dir ufs /var/spool/squid 2000 16 256   <span class="c"># 2 GB de caché en disco</span></code></pre>
<ul>
<li>Las <b>ACL</b> definen condiciones (red de origen, dominio, horario…).</li>
<li>Las reglas <code>http_access</code> se evalúan <b>en orden</b> y se aplica la primera que coincide.</li>
<li>La última, <code>deny all</code>, cierra todo lo que no se haya permitido.</li>
<li>Los accesos quedan en <code>/var/log/squid/access.log</code>.</li>
</ul>`,
check:{q:"¿Cómo evalúa Squid las reglas http_access?", o:["Todas a la vez","En orden, aplicando la primera que coincide","De abajo arriba","Al azar"], a:1, e:"Por eso el orden de las reglas es fundamental."}},
{h:"Configurar los clientes", html:`
<ul>
<li><b>Manual:</b> en la configuración de red o del navegador (IP del proxy y puerto 3128).</li>
<li><b>Por GPO</b> en un dominio.</li>
<li><b>Autoconfiguración:</b> un archivo <b>PAC</b> o el protocolo <b>WPAD</b> indican a los navegadores qué proxy usar.</li>
<li><b>Transparente:</b> el router redirige el puerto 80 al proxy.</li>
</ul>
<div class="caso"><b>Legalidad</b>Registrar la navegación de los empleados es legal si se les informa previamente y se respeta la proporcionalidad. Hay que incluirlo en la política de uso de los recursos informáticos.</div>`}
],
quiz:[
{q:"¿Qué tipo de proxy no requiere configurar los equipos?", o:["Directo","Transparente","Anónimo","SOCKS manual"], a:1, e:"El router desvía el tráfico hacia él."},
{q:"¿Dónde se sitúa un proxy inverso?", o:["En cada PC","Delante de los servidores, recibiendo las peticiones de Internet","En el móvil","En el DNS"], a:1, e:"Protege y balancea los servidores internos."},
{q:"¿Qué puerto usa Squid por defecto?", o:["80","3128","8080","443"], a:1, e:"Se configura con http_port."},
{q:"¿Qué ve un proxy del tráfico HTTPS sin inspección TLS?", o:["Todo el contenido","Solo el dominio de destino","Las contraseñas","Nada"], a:1, e:"El contenido va cifrado de extremo a extremo."},
{q:"¿Qué archivo o protocolo permite autoconfigurar el proxy en los navegadores?", o:["PAC o WPAD","DHCP","DNSSEC","SNMP"], a:0, e:"Indican qué proxy usar para cada destino."},
{q:"¿En qué archivo registra Squid las páginas visitadas?", o:["/var/log/squid/access.log","/etc/squid/users","/var/www/log","/etc/hosts"], a:0, e:"Cada línea es una petición."}
]});
