TEMA("cortafuegos", {
title:"Cortafuegos: diseño y configuración", mins:14,
intro:"Cómo se diseña la política de un cortafuegos y cómo se configura en la práctica en Linux (ufw y nftables), en Windows y en un cortafuegos de red como pfSense.",
sections:[
{h:"Tipos de cortafuegos", html:`
<table>
<tr><th>Tipo</th><th>Qué hace</th></tr>
<tr><td>De filtrado de paquetes</td><td>Decide por IP, puerto y protocolo</td></tr>
<tr><td>Con estado (stateful)</td><td>Recuerda las conexiones; deja pasar las respuestas de lo que se inició desde dentro</td></tr>
<tr><td>De aplicación / nueva generación (NGFW)</td><td>Entiende el tráfico de cada aplicación, inspecciona contenidos, detecta intrusiones (IPS)</td></tr>
<tr><td>Personal (de host)</td><td>En cada equipo: Firewall de Windows, ufw</td></tr>
<tr><td>De red (perimetral)</td><td>Entre redes: pfSense, OPNsense, FortiGate…</td></tr>
</table>
<p>Lo correcto es usar ambos: cortafuegos perimetral y de host (<b>defensa en profundidad</b>).</p>`},
{h:"En Linux", html:`
<pre><code><span class="c"># ufw: la forma sencilla</span>
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow from 192.168.1.0/24 to any port 22 proto tcp   <span class="c"># SSH solo desde la LAN</span>
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status numbered</code></pre>
<pre><code><span class="c"># nftables: el sistema de filtrado actual del kernel</span>
table inet filtro {
  chain entrada {
    type filter hook input priority 0; policy drop;
    ct state established,related accept
    iif lo accept
    tcp dport { 22, 443 } accept
  }
}</code></pre>
<p><code>ct state established,related accept</code> es la regla «con estado»: acepta las respuestas a conexiones ya abiertas. Sin ella, el servidor ni siquiera recibiría las respuestas de sus propias consultas DNS.</p>`,
check:{q:"¿Qué hace la política «default deny incoming» de ufw?", o:["Bloquea todo lo saliente","Bloquea todo lo entrante salvo lo que se permita explícitamente","Permite todo","Desactiva el cortafuegos"], a:1, e:"Es la política recomendada: denegar por defecto y abrir solo lo necesario."}},
{h:"En Windows y en la red", html:`
<pre><code><span class="c"># Firewall de Windows con PowerShell</span>
New-NetFirewallRule -DisplayName <span class="s">"Web HTTPS"</span> -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow
Get-NetFirewallProfile | Select Name, Enabled</code></pre>
<p>Windows tiene tres perfiles (Dominio, Privado y Público), y en un dominio las reglas se despliegan por <b>GPO</b>.</p>
<p><b>pfSense</b> y <b>OPNsense</b> son cortafuegos de red libres, con interfaz web: reglas por interfaz, NAT, VPN, proxy y detección de intrusiones (Suricata).</p>
<div class="caso"><b>Revisión de reglas</b>Con los años se acumulan reglas «temporales» que nadie quita. Revisar periódicamente y documentar cada regla (quién la pidió y por qué) es parte del trabajo.</div>`}
],
quiz:[
{q:"¿Qué ventaja tiene un cortafuegos con estado?", o:["Es más barato","Recuerda las conexiones y permite automáticamente sus respuestas","No necesita reglas","Cifra el tráfico"], a:1, e:"No hace falta abrir puertos para las respuestas."},
{q:"¿Qué es la defensa en profundidad?", o:["Un solo cortafuegos muy potente","Varias capas de protección, como cortafuegos perimetral y de host","Un antivirus","Un RAID"], a:1, e:"Si una capa falla, las demás siguen protegiendo."},
{q:"¿Qué comando de ufw permite HTTPS?", o:["ufw open 443","ufw allow 443/tcp","ufw enable 443","ufw accept https"], a:1, e:"ufw allow puerto/protocolo."},
{q:"¿Cuál es el sistema de filtrado actual del kernel de Linux?", o:["ipchains","nftables","Squid","SELinux"], a:1, e:"Sustituye a iptables."},
{q:"¿Qué cmdlet crea una regla en el Firewall de Windows?", o:["New-NetFirewallRule","Add-Firewall","Set-Port","New-Rule"], a:0, e:"Las reglas también pueden desplegarse por GPO."},
{q:"¿Qué es pfSense?", o:["Un antivirus","Un cortafuegos de red libre con interfaz web","Un navegador","Un servidor de correo"], a:1, e:"OPNsense es una alternativa derivada."}
]});
