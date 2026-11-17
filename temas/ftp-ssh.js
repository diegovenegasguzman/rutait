TEMA("ftp-ssh", {
title:"Transferencia de archivos y acceso remoto", mins:13,
intro:"Cómo se mueven archivos entre equipos y cómo se administra un servidor a distancia de forma segura: FTP, SFTP, SSH con claves y escritorio remoto.",
sections:[
{h:"FTP y sus variantes", html:`
<table>
<tr><th>Protocolo</th><th>Puerto</th><th>Cifrado</th></tr>
<tr><td>FTP</td><td>21 (control) y 20 o puertos altos (datos)</td><td>No: usuario y contraseña viajan en claro</td></tr>
<tr><td>FTPS</td><td>21 o 990</td><td>Sí, FTP sobre TLS</td></tr>
<tr><td>SFTP</td><td>22</td><td>Sí, funciona sobre SSH (no tiene nada que ver con FTP)</td></tr>
</table>
<p>FTP tiene dos modos: <b>activo</b> (el servidor abre la conexión de datos hacia el cliente, lo que suele chocar con cortafuegos y NAT) y <b>pasivo</b> (el cliente abre ambas conexiones; es el habitual).</p>
<p>Servidores FTP: <b>vsftpd</b> y ProFTPD en Linux, IIS en Windows. Cliente gráfico muy usado: <b>FileZilla</b>.</p>`,
check:{q:"¿Qué protocolo de transferencia usa el puerto 22 y va cifrado sobre SSH?", o:["FTP","FTPS","SFTP","TFTP"], a:2, e:"SFTP es un subsistema de SSH."}},
{h:"SSH con claves", html:`
<p>SSH da una terminal cifrada en el servidor. Es más seguro usar <b>claves</b> que contraseñas:</p>
<pre><code>ssh-keygen -t ed25519                <span class="c"># crea clave privada y pública en ~/.ssh</span>
ssh-copy-id admin@192.168.1.20        <span class="c"># copia la pública al servidor</span>
ssh admin@192.168.1.20                <span class="c"># ya entra sin contraseña</span>
scp informe.pdf admin@192.168.1.20:/tmp/   <span class="c"># copiar un archivo</span></code></pre>
<p>Para endurecer el servidor, en <code>/etc/ssh/sshd_config</code>:</p>
<pre><code>PermitRootLogin no
PasswordAuthentication no     <span class="c"># solo claves</span></code></pre>
<p>La <b>clave privada</b> nunca sale de tu equipo; lo que se copia al servidor es la pública. Herramientas como <b>fail2ban</b> bloquean las IP que fallan muchas veces.</p>`,
check:{q:"¿Qué clave se copia al servidor para entrar por SSH con claves?", o:["La privada","La pública","Las dos","Ninguna"], a:1, e:"La privada se queda siempre en tu equipo."}},
{h:"Escritorio remoto", html:`
<ul>
<li><b>RDP</b> (puerto 3389): escritorio remoto de Windows. Con <b>NLA</b> activado, se autentica antes de abrir la sesión.</li>
<li><b>VNC</b>: multiplataforma; ve la misma pantalla que el usuario.</li>
<li>Herramientas de soporte: AnyDesk, TeamViewer, RustDesk.</li>
</ul>
<div class="caso"><b>Regla de oro</b>RDP, SSH o VNC nunca se abren directamente a Internet. Se accede a ellos a través de una VPN o un bastión: los puertos expuestos reciben miles de intentos de acceso cada día.</div>`}
],
quiz:[
{q:"¿Qué problema tiene el FTP clásico?", o:["Es lento","Envía las credenciales sin cifrar","No funciona en Linux","No permite carpetas"], a:1, e:"Cualquiera que capture el tráfico puede leerlas."},
{q:"¿Qué modo de FTP funciona mejor con cortafuegos y NAT?", o:["Activo","Pasivo","Binario","ASCII"], a:1, e:"En pasivo, el cliente abre las dos conexiones."},
{q:"¿Qué comando genera un par de claves SSH?", o:["ssh-copy-id","ssh-keygen","scp","sshd"], a:1, e:"ssh-keygen -t ed25519."},
{q:"¿Qué opción de sshd_config impide entrar como root?", o:["PermitRootLogin no","RootAccess off","DenyRoot yes","NoRoot"], a:0, e:"Se entra con un usuario normal y se usa sudo."},
{q:"¿Qué comando copia archivos por SSH?", o:["cp","scp","ftp","mv"], a:1, e:"scp origen usuario@servidor:destino."},
{q:"¿Qué puerto usa RDP?", o:["22","3389","5900","443"], a:1, e:"VNC usa el 5900."}
]});
