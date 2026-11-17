TEMA("ipv6", {
title:"IPv6", mins:15,
intro:"Por qué IPv4 se quedó corto, cómo se escriben y se acortan las direcciones IPv6, qué tipos hay y cómo se configuran solas sin necesidad de DHCP.",
sections:[
{h:"Por qué hace falta IPv6", html:`
<p>IPv4 tiene 32 bits: unos 4.300 millones de direcciones. Parecían muchas en los años 80, pero hoy cada persona tiene móvil, portátil, tele, reloj… En 2011 se repartieron los últimos bloques libres de IPv4 a nivel mundial.</p>
<p>El parche para seguir funcionando ha sido el <b>NAT</b>: toda tu casa sale a Internet con una sola IP pública. Funciona, pero complica cosas como las videollamadas o los servidores domésticos.</p>
<p><b>IPv6</b> usa <b>128 bits</b>: unos 3,4 × 10<sup>38</sup> direcciones. Para hacerse una idea: se podría dar una IP a cada grano de arena de la Tierra… y sobrarían de sobra.</p>
<div class="caso"><b>Lo verás en el trabajo</b>Ejecuta <code>ipconfig</code> en cualquier Windows y verás una dirección que empieza por <code>fe80::</code>. Es IPv6, y está activa aunque nadie la haya configurado.</div>`},
{h:"Cómo se escribe una dirección", html:`
<p>Se escribe en <b>8 grupos de 4 dígitos hexadecimales</b> separados por dos puntos:</p>
<p><code>2001:0db8:0000:0000:0000:ff00:0042:8329</code></p>
<p>Como es largo, hay dos reglas para acortarlo:</p>
<div class="work">
<div class="stepn"><i>1</i><span>Se pueden quitar los <b>ceros a la izquierda</b> de cada grupo: <code>0db8</code> → <code>db8</code>, <code>0042</code> → <code>42</code>, <code>0000</code> → <code>0</code>.</span></div>
<div class="stepn"><i>2</i><span>Una serie de grupos seguidos que valen 0 se sustituye por <code>::</code>, pero <b>solo una vez</b> en toda la dirección (si no, no se sabría cuántos ceros hay en cada hueco).</span></div>
<div class="stepn"><i>3</i><span>Resultado: <code>2001:db8::ff00:42:8329</code></span></div>
</div>`,
check:{q:"¿Cuál es la forma abreviada correcta de 2001:0db8:0000:0000:0001:0000:0000:0001?", o:["2001:db8::1::1","2001:db8::1:0:0:1","2001:db8:0:0:1::1:1","2001:db8:1:1"], a:1, e:"Solo puede usarse :: una vez. Se aplica al primer bloque de ceros y el segundo se deja como 0:0. También sería válido 2001:db8:0:0:1::1."}},
{h:"Tipos de direcciones", html:`
<table>
<tr><th>Tipo</th><th>Empieza por</th><th>Para qué sirve</th></tr>
<tr><td>Unicast global</td><td><code>2000::/3</code> (2 o 3)</td><td>Dirección pública, enrutable en Internet</td></tr>
<tr><td>Link-local</td><td><code>fe80::/10</code></td><td>Solo dentro del mismo enlace. Todas las interfaces tienen una</td></tr>
<tr><td>Unique local</td><td><code>fd00::/8</code></td><td>Privada, para redes internas (como 192.168.x.x en IPv4)</td></tr>
<tr><td>Multicast</td><td><code>ff00::/8</code></td><td>Envío a un grupo de equipos</td></tr>
<tr><td>Loopback</td><td><code>::1</code></td><td>El propio equipo (como 127.0.0.1)</td></tr>
</table>
<p>En IPv6 <b>no existe el broadcast</b>. Lo que antes se enviaba a todos, ahora se envía a grupos multicast concretos, y así no se molesta a equipos que no lo necesitan.</p>`,
check:{q:"Un equipo tiene la dirección fe80::1c2a:3bff:fe4d:12. ¿Qué tipo es?", o:["Pública","Link-local","Multicast","Loopback"], a:1, e:"Todo lo que empieza por fe80 es link-local: solo vale para comunicarse dentro del mismo segmento de red."}},
{h:"Prefijos y subredes", html:`
<p>En IPv6 no se usan máscaras con puntos: siempre se escribe el prefijo, como <code>/64</code>.</p>
<ul>
<li>Un proveedor suele dar a cada cliente o sede un <b>/48</b> o un <b>/56</b>.</li>
<li>Cada subred (cada VLAN) es un <b>/64</b>. Es el estándar y no conviene usar otro tamaño.</li>
<li>Los 64 bits restantes son el <b>identificador de interfaz</b> de cada equipo.</li>
</ul>
<p>Con un /48 tienes 16 bits para subredes: 65.536 redes /64 distintas. Aquí no se calcula para «no desperdiciar direcciones» como en IPv4: sobran.</p>`},
{h:"Autoconfiguración y convivencia con IPv4", html:`
<ul>
<li><b>SLAAC:</b> el router anuncia el prefijo de la red (mensaje <i>Router Advertisement</i>) y cada equipo se genera solo su dirección añadiendo su identificador de interfaz. No hace falta servidor DHCP.</li>
<li><b>DHCPv6:</b> se usa cuando se quiere controlar qué dirección recibe cada equipo o dar opciones extra.</li>
<li><b>NDP</b> (Neighbor Discovery) sustituye a ARP para averiguar la MAC de los vecinos.</li>
</ul>
<p>IPv4 e IPv6 conviven todavía. Lo más habitual es la <b>doble pila (dual stack)</b>: cada equipo tiene dirección IPv4 e IPv6 y usa la que pueda. También existen túneles y traducción (NAT64) para conectar redes de un solo tipo.</p>
<div class="note exam"><b>Comandos útiles</b><code>ping ::1</code> comprueba la pila IPv6 local. En Windows, <code>ping -6 google.com</code> fuerza IPv6. En Linux, <code>ip -6 addr</code> muestra las direcciones IPv6.</div>`}
],
quiz:[
{q:"¿Cuántos bits tiene una dirección IPv6?", o:["32","64","128","256"], a:2, e:"IPv6 tiene 128 bits, frente a los 32 de IPv4."},
{q:"¿Cuántas veces puede aparecer :: en una dirección IPv6?", o:["Ninguna","Una","Dos","Las que haga falta"], a:1, e:"Si apareciera dos veces, no se podría saber cuántos ceros representa cada una."},
{q:"¿Qué prefijo identifica las direcciones link-local?", o:["2000::/3","fe80::/10","ff00::/8","fd00::/8"], a:1, e:"fe80::/10 son direcciones válidas solo dentro del enlace local."},
{q:"¿Cuál es la dirección de loopback en IPv6?", o:["::","::1","fe80::1","127.0.0.1"], a:1, e:"::1 equivale a 127.0.0.1 en IPv4."},
{q:"¿Qué tipo de envío ya no existe en IPv6?", o:["Unicast","Multicast","Broadcast","Anycast"], a:2, e:"El broadcast se sustituye por multicast."},
{q:"¿Qué tamaño de prefijo se usa normalmente para cada subred IPv6?", o:["/24","/48","/64","/128"], a:2, e:"El /64 es el estándar para una subred; deja 64 bits para el identificador de interfaz."},
{q:"¿Qué mecanismo permite a un equipo configurarse una IPv6 sin servidor DHCP?", o:["APIPA","SLAAC","NAT64","ARP"], a:1, e:"Con SLAAC el equipo usa el prefijo que anuncia el router para generarse su dirección."},
{q:"¿Qué protocolo sustituye a ARP en IPv6?", o:["ICMP","NDP","DHCPv6","DNS"], a:1, e:"Neighbor Discovery Protocol (NDP) descubre vecinos, routers y direcciones MAC."}
]});
