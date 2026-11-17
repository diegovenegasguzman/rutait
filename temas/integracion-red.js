TEMA("integracion-red", {
title:"Integrar equipos en una red y diagnosticarla", mins:15,
intro:"Qué necesita un equipo para comunicarse en red, cómo se averigua la MAC de un vecino con ARP y las herramientas con las que cualquier técnico localiza un problema de red en minutos.",
sections:[
{h:"Lo que necesita un equipo para tener red", html:`
<p>Para que un equipo navegue necesita cuatro datos. Si falta o falla uno, «no hay Internet»:</p>
<table>
<tr><th>Dato</th><th>Para qué sirve</th><th>Ejemplo</th></tr>
<tr><td>Dirección IP</td><td>Identificarse en la red</td><td>192.168.1.25</td></tr>
<tr><td>Máscara</td><td>Saber qué direcciones están en su misma red</td><td>255.255.255.0</td></tr>
<tr><td>Puerta de enlace</td><td>A quién enviar lo que va a otras redes (el router)</td><td>192.168.1.1</td></tr>
<tr><td>Servidor DNS</td><td>Traducir nombres a IP</td><td>192.168.1.1 u 8.8.8.8</td></tr>
</table>
<p>Para verlos: <code>ipconfig /all</code> en Windows o <code>ip a</code> e <code>ip route</code> en Linux.</p>`},
{h:"ARP: de la IP a la MAC", html:`
<p>Dentro de una red local, las tramas Ethernet se entregan por <b>dirección MAC</b>, no por IP. Cuando un equipo quiere hablar con 192.168.1.30 y no sabe su MAC:</p>
<div class="work">
<div class="stepn"><i>1</i><span>Envía un broadcast ARP: «¿Quién tiene la 192.168.1.30? Que me lo diga».</span></div>
<div class="stepn"><i>2</i><span>Solo responde el dueño de esa IP: «Soy yo, mi MAC es 3C:52:82:1A:F0:9B».</span></div>
<div class="stepn"><i>3</i><span>El equipo lo guarda unos minutos en su <b>caché ARP</b> para no volver a preguntar.</span></div>
</div>
<p>Si el destino está en <b>otra red</b>, el equipo no pregunta por la MAC del destino, sino por la de su <b>puerta de enlace</b>, y le entrega el paquete a ella. Puedes ver la caché con <code>arp -a</code>.</p>`,
check:{q:"Tu PC (192.168.1.25/24) envía datos a 8.8.8.8. ¿Por qué MAC pregunta con ARP?", o:["Por la MAC de 8.8.8.8","Por la de su puerta de enlace","Por la del servidor DNS","No usa ARP"], a:1, e:"8.8.8.8 no está en su red, así que el paquete se entrega al router. La MAC que necesita es la del router."}},
{h:"Herramientas de diagnóstico", html:`
<table>
<tr><th>Comando</th><th>Qué te dice</th></tr>
<tr><td><code>ping</code></td><td>Si un equipo responde y cuánto tarda (usa ICMP)</td></tr>
<tr><td><code>tracert</code> (Windows) / <code>traceroute</code> (Linux)</td><td>Por qué routers pasa el tráfico y dónde se corta</td></tr>
<tr><td><code>nslookup</code> / <code>dig</code></td><td>Si el DNS resuelve un nombre y a qué IP</td></tr>
<tr><td><code>netstat -an</code> / <code>ss -tulpn</code></td><td>Qué conexiones hay abiertas y qué puertos escuchan</td></tr>
<tr><td><code>ipconfig /release</code> y <code>/renew</code></td><td>Pedir de nuevo IP al DHCP</td></tr>
<tr><td><code>ipconfig /flushdns</code></td><td>Vaciar la caché DNS del equipo</td></tr>
</table>
<p>Para ver qué viaja realmente por la red, <b>Wireshark</b> captura los paquetes y los muestra capa por capa.</p>`},
{h:"Un orden para no perderse", html:`
<p>Cuando «no hay red», comprueba de dentro hacia fuera:</p>
<div class="work">
<div class="stepn"><i>1</i><span><code>ping 127.0.0.1</code>: la pila TCP/IP del propio equipo funciona.</span></div>
<div class="stepn"><i>2</i><span><code>ping</code> a tu propia IP: la tarjeta de red está bien configurada.</span></div>
<div class="stepn"><i>3</i><span><code>ping</code> a la puerta de enlace: llegas a tu router.</span></div>
<div class="stepn"><i>4</i><span><code>ping 8.8.8.8</code>: hay salida a Internet.</span></div>
<div class="stepn"><i>5</i><span><code>ping google.com</code>: el DNS funciona.</span></div>
</div>
<p>El primer paso que falla te dice dónde está el problema.</p>
<div class="caso"><b>Caso real</b>Un usuario no tiene red. <code>ipconfig</code> muestra 169.254.20.7. Ni siquiera hace falta hacer ping: es una APIPA, así que el equipo no ha recibido IP del DHCP. Revisa el cable, el puerto del switch y su VLAN.</div>`,
check:{q:"ping a la puerta de enlace funciona, pero ping 8.8.8.8 no. ¿Dónde está el problema?", o:["En el cable del equipo","En la tarjeta de red","Entre el router y el proveedor de Internet","En el DNS"], a:2, e:"Llegas a tu router, pero no más allá: el fallo está en la salida a Internet del router o en el proveedor."}}
],
quiz:[
{q:"¿Qué dato indica a un equipo a quién enviar el tráfico destinado a otras redes?", o:["La máscara","La puerta de enlace","El DNS","La MAC"], a:1, e:"La puerta de enlace es el router de su red."},
{q:"¿Para qué sirve ARP?", o:["Para traducir nombres a IP","Para averiguar la MAC que corresponde a una IP de la red local","Para asignar IP","Para cifrar"], a:1, e:"ARP resuelve IP → MAC dentro del mismo segmento."},
{q:"¿Qué comando muestra la caché ARP?", o:["ipconfig","arp -a","netstat","route print"], a:1, e:"arp -a funciona en Windows y en Linux."},
{q:"¿Qué protocolo usa ping?", o:["TCP","UDP","ICMP","ARP"], a:2, e:"ping envía mensajes ICMP Echo Request y espera Echo Reply."},
{q:"¿Qué herramienta muestra los routers por los que pasa el tráfico hasta un destino?", o:["nslookup","tracert / traceroute","arp","ipconfig"], a:1, e:"Muestra cada salto y en cuál se corta la comunicación."},
{q:"¿Qué comando vacía la caché DNS en Windows?", o:["ipconfig /renew","ipconfig /flushdns","nslookup /clear","dns reset"], a:1, e:"Útil cuando un nombre ha cambiado de IP y el equipo sigue usando la antigua."},
{q:"ping 127.0.0.1 falla. ¿Qué indica?", o:["Que no hay Internet","Que el DNS falla","Que la pila TCP/IP del propio equipo tiene un problema","Que el router está apagado"], a:2, e:"El loopback no sale del equipo; si falla, el problema es local."},
{q:"¿Qué herramienta captura y muestra los paquetes que viajan por la red?", o:["Wireshark","Notepad","tracert","GLPI"], a:0, e:"Wireshark analiza el tráfico capa por capa."}
]});
