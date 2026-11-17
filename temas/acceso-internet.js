TEMA("acceso-internet", {
title:"Acceso a Internet desde una red local", mins:14,
intro:"Las tecnologías con las que una empresa se conecta a Internet y qué hay que configurar para que toda la red local salga por esa conexión de forma controlada.",
sections:[
{h:"Tecnologías de acceso", html:`
<table>
<tr><th>Tecnología</th><th>Medio</th><th>Comentario</th></tr>
<tr><td>Fibra hasta el hogar (FTTH)</td><td>Fibra óptica hasta el cliente</td><td>La más extendida en España; velocidades simétricas altas</td></tr>
<tr><td>ADSL / VDSL</td><td>Par de cobre telefónico</td><td>En retirada; la velocidad baja mucho con la distancia a la central</td></tr>
<tr><td>Cable (HFC)</td><td>Fibra y cable coaxial</td><td>Redes de operadores de cable</td></tr>
<tr><td>4G / 5G</td><td>Radio (red móvil)</td><td>Zonas sin fibra o como línea de respaldo</td></tr>
<tr><td>Satélite</td><td>Radio vía satélite</td><td>Zonas aisladas; las constelaciones de órbita baja tienen menos latencia</td></tr>
</table>
<p>Las empresas que no pueden quedarse sin conexión contratan <b>dos líneas de proveedores distintos</b> y un router que cambie de una a otra si falla la principal.</p>`},
{h:"El router de salida", html:`
<p>El router que conecta la LAN con el proveedor hace varias funciones a la vez:</p>
<ul>
<li><b>NAT/PAT:</b> traduce las IP privadas a la IP pública.</li>
<li><b>Ruta por defecto</b> hacia el proveedor.</li>
<li><b>DHCP</b> para los equipos (en redes pequeñas).</li>
<li><b>Reenviador DNS:</b> los equipos le preguntan a él y él pregunta a los DNS del proveedor.</li>
<li><b>Cortafuegos</b> básico.</li>
</ul>
<pre><code><span class="c">! Configuración de PAT en Cisco</span>
interface g0/0
 ip nat inside                          <span class="c">! hacia la LAN</span>
interface g0/1
 ip nat outside                         <span class="c">! hacia el proveedor</span>
access-list 1 permit 192.168.0.0 0.0.255.255
ip nat inside source list 1 interface g0/1 overload
ip route 0.0.0.0 0.0.0.0 g0/1</code></pre>
<p><code>overload</code> es lo que convierte el NAT en PAT: todos los equipos salen con la IP de la interfaz exterior.</p>`,
check:{q:"En la configuración de NAT, ¿qué interfaz se marca como ip nat outside?", o:["La que va a la LAN","La que va al proveedor de Internet","Todas","Ninguna"], a:1, e:"inside es la red interna y outside, la que da a Internet."}},
{h:"Proxy y filtrado", html:`
<p>Un <b>proxy</b> hace de intermediario: los equipos le piden las webs a él y él las solicita a Internet.</p>
<ul>
<li><b>Control:</b> permite bloquear categorías de webs o registrar qué se visita (siempre informando a los empleados, por la normativa de protección de datos).</li>
<li><b>Caché:</b> guarda copias de lo más visitado y ahorra ancho de banda.</li>
<li><b>Proxy transparente:</b> el tráfico pasa por él sin configurar nada en los equipos.</li>
</ul>
<p>El proxy libre más conocido es <b>Squid</b>. Hoy muchas empresas usan filtrado por DNS o soluciones en la nube.</p>
<div class="caso"><b>Caso real</b>En un hospital, los equipos clínicos no deberían navegar libremente por Internet. Se les da salida solo hacia los servicios que necesitan y el resto se bloquea en el cortafuegos o el proxy. Menos superficie de ataque.</div>`},
{h:"Publicar servicios hacia fuera", html:`
<p>Si un servidor interno tiene que ser accesible desde Internet:</p>
<ul>
<li>Se coloca preferiblemente en una <b>DMZ</b>.</li>
<li>Se crea una <b>redirección de puertos</b> (NAT estática) solo para el puerto necesario.</li>
<li>Si la IP pública cambia (líneas domésticas), se usa <b>DNS dinámico</b> (DDNS), que actualiza el nombre cada vez que cambia la IP.</li>
</ul>
<p>Muchos proveedores domésticos usan <b>CG-NAT</b>: varios clientes comparten una misma IP pública. Con CG-NAT no se pueden abrir puertos hacia dentro; hay que pedir al proveedor una IP pública propia.</p>`,
check:{q:"Has abierto el puerto en tu router, pero desde fuera sigue sin llegar nada, y la IP WAN del router es 100.72.x.x. ¿Qué ocurre?", o:["El cable está mal","Estás detrás de CG-NAT del proveedor","El DNS falla","La VLAN es incorrecta"], a:1, e:"El rango 100.64.0.0/10 es el que usan los operadores para CG-NAT: tu router no tiene IP pública propia."}}
],
quiz:[
{q:"¿Qué tecnología de acceso usa fibra hasta el domicilio del cliente?", o:["ADSL","FTTH","HFC","4G"], a:1, e:"Fiber To The Home."},
{q:"¿Qué palabra convierte el NAT de Cisco en PAT?", o:["static","overload","pool","inside"], a:1, e:"overload permite que muchas IP privadas compartan una pública."},
{q:"¿Qué función hace un reenviador DNS en el router?", o:["Bloquea webs","Recibe las consultas de los equipos y las reenvía a otros DNS","Asigna IP","Cifra el tráfico"], a:1, e:"Los equipos preguntan al router y él consulta a los DNS del proveedor."},
{q:"¿Qué ventaja da un proxy con caché?", o:["Más seguridad física","Ahorro de ancho de banda al guardar lo más visitado","Más IP públicas","Mejor Wi-Fi"], a:1, e:"Sirve copias locales de los contenidos repetidos."},
{q:"¿Cuál es el proxy libre más conocido?", o:["Apache","Squid","Bind","Samba"], a:1, e:"Squid es el proxy-caché libre por excelencia."},
{q:"¿Para qué sirve el DNS dinámico (DDNS)?", o:["Para cifrar DNS","Para mantener un nombre apuntando a una IP pública que cambia","Para asignar IP privadas","Para bloquear webs"], a:1, e:"Actualiza el registro cada vez que cambia la IP."},
{q:"¿Por qué con CG-NAT no puedes abrir puertos hacia dentro?", o:["Porque el router no lo permite","Porque compartes la IP pública con otros clientes y no la controlas","Porque es ilegal","Porque no hay DNS"], a:1, e:"La IP pública está en el equipo del operador, no en tu router."},
{q:"¿Qué medida evita quedarse sin Internet si falla el proveedor?", o:["Un proxy","Una segunda línea de otro proveedor","Más switches","Un servidor DNS"], a:1, e:"La redundancia de líneas con conmutación automática."}
]});
