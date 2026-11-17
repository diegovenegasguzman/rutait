TEMA("switching", {
title:"Conmutadores: configuración, STP y seguridad de puertos", mins:16,
intro:"Cómo aprende un switch dónde está cada equipo, cómo se configura uno desde cero, cómo evita STP que un bucle tumbe la red y cómo se protegen sus puertos.",
sections:[
{h:"Cómo trabaja un switch", html:`
<p>El switch mantiene una <b>tabla de direcciones MAC</b> (tabla CAM): qué MAC está conectada a cada puerto.</p>
<div class="work">
<div class="stepn"><i>1</i><span><b>Aprende:</b> cuando llega una trama, apunta la MAC de origen y el puerto por el que entró.</span></div>
<div class="stepn"><i>2</i><span><b>Reenvía:</b> si conoce la MAC de destino, envía la trama solo por ese puerto.</span></div>
<div class="stepn"><i>3</i><span><b>Inunda:</b> si no la conoce (o es un broadcast), la envía por todos los puertos menos por el de entrada.</span></div>
</div>
<p>Las entradas caducan si no se usan (normalmente a los 5 minutos). En Cisco se consulta con <code>show mac address-table</code>.</p>`,
check:{q:"Llega una trama para una MAC que no está en la tabla del switch. ¿Qué hace?", o:["La descarta","La envía por todos los puertos excepto por el de entrada","La envía al router","Pregunta por ARP"], a:1, e:"Inunda la trama; cuando el destino responda, el switch aprenderá en qué puerto está."}},
{h:"Configuración básica de un switch Cisco", html:`
<pre><code>enable
configure terminal
hostname SW-PLANTA1
enable secret Cl4ve-Segura          <span class="c">! contraseña del modo privilegiado (cifrada)</span>
service password-encryption
banner motd #Acceso solo a personal autorizado#

<span class="c">! IP de gestión para administrarlo por red</span>
interface vlan 1
 ip address 192.168.1.250 255.255.255.0
 no shutdown
ip default-gateway 192.168.1.1

<span class="c">! Acceso remoto solo por SSH</span>
ip domain-name empresa.local
crypto key generate rsa modulus 2048
username admin secret Otra-Clave
line vty 0 15
 transport input ssh
 login local
end
copy running-config startup-config</code></pre>
<p>La <b>running-config</b> es la configuración activa (en RAM). Si no la guardas en la <b>startup-config</b>, se pierde al reiniciar.</p>`},
{h:"STP: evitar bucles", html:`
<p>Para que la red no dependa de un solo cable se ponen enlaces redundantes entre switches. Pero en Ethernet un bucle es un desastre: los broadcasts dan vueltas sin fin, se multiplican y saturan la red en segundos (<b>tormenta de broadcast</b>).</p>
<p><b>STP</b> (Spanning Tree Protocol, IEEE 802.1D) lo evita:</p>
<ul>
<li>Los switches eligen un <b>puente raíz</b>: el de menor identificador (prioridad + MAC).</li>
<li>Cada switch calcula su camino más corto hasta la raíz.</li>
<li>Los puertos que crearían un bucle quedan <b>bloqueados</b>. Si un enlace activo cae, STP desbloquea el de reserva.</li>
</ul>
<p>El STP original tarda 30–50 segundos en reaccionar; por eso hoy se usa <b>RSTP</b> (802.1w), que lo hace en uno o dos segundos.</p>
<div class="caso"><b>Caso real</b>Alguien conecta un cable con los dos extremos al mismo switch «para ver qué pasa». Si STP está desactivado, toda la planta se queda sin red al momento.</div>`},
{h:"Seguridad de puertos", html:`
<p>Cualquiera que enchufe un portátil en una roseta libre está dentro de tu red. Algunas medidas básicas:</p>
<ul>
<li><b>Apagar los puertos que no se usan</b> (<code>shutdown</code>) y moverlos a una VLAN sin uso.</li>
<li><b>Port security:</b> limita cuántas MAC puede haber en un puerto y cuáles. Si aparece otra, el puerto se bloquea.</li>
<li><b>802.1X:</b> el equipo debe autenticarse (usuario o certificado) antes de que el puerto le dé acceso.</li>
</ul>
<pre><code>interface fa0/5
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation shutdown</code></pre>
<p>Con <code>sticky</code>, el switch aprende la primera MAC que se conecta y la fija como la única permitida.</p>`,
check:{q:"¿Qué hace port-security con violation shutdown si se conecta un equipo con una MAC no permitida?", o:["Nada","Desactiva el puerto","Lo cambia de VLAN","Avisa por correo"], a:1, e:"El puerto queda en estado err-disabled hasta que un administrador lo reactive."}}
],
quiz:[
{q:"¿Qué guarda la tabla CAM de un switch?", o:["IP y nombres","MAC y el puerto donde están","Rutas","Usuarios"], a:1, e:"Relaciona cada MAC con el puerto por el que se llega a ella."},
{q:"¿Qué MAC aprende el switch de cada trama?", o:["La de destino","La de origen","Las dos","Ninguna"], a:1, e:"Aprende de dónde viene cada equipo mirando la MAC de origen."},
{q:"¿Qué ocurre si no guardas la running-config antes de reiniciar?", o:["Nada","Se pierden los cambios","Se borra el IOS","Se guarda sola"], a:1, e:"Hay que copiarla a la startup-config (copy running-config startup-config)."},
{q:"¿Qué problema evita STP?", o:["Los virus","Los bucles de capa 2 y las tormentas de broadcast","Las colisiones","Los ataques DDoS"], a:1, e:"Bloquea los enlaces redundantes que formarían un bucle."},
{q:"¿Cómo se elige el puente raíz en STP?", o:["El switch más nuevo","El de menor identificador (prioridad + MAC)","El que tenga más puertos","El primero en encenderse"], a:1, e:"Gana el Bridge ID más bajo; se puede forzar bajando la prioridad."},
{q:"¿Qué ventaja tiene RSTP frente al STP original?", o:["Es más barato","Reacciona en segundos en lugar de 30 a 50","No necesita switches","Elimina las VLAN"], a:1, e:"RSTP converge mucho más rápido tras un cambio."},
{q:"¿Qué protocolo exige autenticarse antes de que un puerto dé acceso a la red?", o:["802.1Q","802.1X","802.3","802.11"], a:1, e:"802.1X es el control de acceso a red por puerto."},
{q:"¿Qué comando de Cisco obliga a acceder por SSH en lugar de Telnet?", o:["transport input ssh","ssh enable","no telnet","ip ssh only"], a:0, e:"Se configura en las líneas vty."}
]});
