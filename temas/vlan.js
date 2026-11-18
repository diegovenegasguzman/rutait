TEMA("vlan", {
 "title": "VLAN y enrutamiento",
 "mins": 16,
 "intro": "Cómo dividir una red física en varias redes lógicas con VLAN, cómo se transportan entre switches y cómo se comunican entre sí mediante enrutamiento.",
 "sections": [
  {
   "h": "Dominios de colisión y de difusión",
   "html": "\n<p>Para entender las VLAN hay que saber hasta dónde llega el tráfico en una red. Hay dos «zonas» que conviene distinguir.</p>\n<ul>\n<li><b>Dominio de colisión:</b> zona donde dos equipos que transmiten a la vez interfieren. Cada puerto de un switch es su propio dominio de colisión.</li>\n<li><b>Dominio de difusión (broadcast):</b> zona a la que llega un mensaje de broadcast, como un DHCP Discover. Un switch no separa dominios de difusión: todos sus puertos comparten uno.</li>\n</ul>\n<p>Solo un <b>router</b> (o un switch de capa 3) separa dominios de difusión. Si una red tiene cientos de equipos en el mismo dominio de difusión, el tráfico broadcast la ralentiza y cualquier equipo puede ver tráfico que no debería.</p>"
  },
  {
   "h": "Qué es una VLAN",
   "html": "\n<p>Una <b>VLAN</b> (red local virtual) divide un switch físico en varias redes lógicas independientes. Los equipos de VLAN distintas no se ven entre sí, aunque estén en el mismo switch.</p>\n<ul>\n<li><b>Seguridad:</b> separas, por ejemplo, la red de administración de la de invitados.</li>\n<li><b>Rendimiento:</b> cada VLAN es un dominio de difusión más pequeño.</li>\n<li><b>Organización:</b> agrupas por departamento o función, no por el lugar donde está el equipo.</li>\n</ul>\n<p>Cada VLAN se identifica con un número (VLAN ID) y lleva su propia subred. Por ejemplo: VLAN 10 Administración (<code>192.168.10.0/24</code>), VLAN 20 Alumnos (<code>192.168.20.0/24</code>). Por defecto, todos los puertos están en la <b>VLAN 1</b>.</p>"
  },
  {
   "h": "Puertos de acceso y troncales",
   "html": "\n<p>Cada puerto de un switch con VLAN es de uno de estos dos tipos, según lo que tenga conectado.</p>\n<table>\n<tr><th>Tipo de puerto</th><th>VLAN que lleva</th><th>Se conecta a</th></tr>\n<tr><td>Acceso</td><td>Una sola</td><td>Equipos finales: PC, impresoras</td></tr>\n<tr><td>Troncal (trunk)</td><td>Varias</td><td>Otros switches, routers o servidores de virtualización</td></tr>\n</table>\n<p>Por un troncal viajan tramas de muchas VLAN, así que cada trama lleva una <b>etiqueta</b> que indica a cuál pertenece. El estándar es <b>IEEE 802.1Q</b>: añade 4 bytes a la trama, con un VLAN ID de <b>12 bits</b> (hasta 4.094 VLAN utilizables).</p>\n<p>La <b>VLAN nativa</b> es la única que viaja sin etiquetar por el troncal. Por seguridad, conviene cambiarla de la VLAN 1 a una VLAN sin uso.</p>\n<p>En un troncal, cada trama lleva una etiqueta <b>802.1Q</b> con el número de VLAN. Ese identificador tiene <b>12 bits</b>, que permiten 4.096 valores.</p>\n"
  },
  {
   "h": "Configuración en un switch Cisco",
   "html": "\n<pre><code><span class=\"c\">! Crear las VLAN</span>\n<span class=\"k\">vlan</span> 10\n name ADMINISTRACION\n<span class=\"k\">vlan</span> 20\n name ALUMNOS\n\n<span class=\"c\">! Puerto de acceso para un PC de administración</span>\n<span class=\"k\">interface</span> fa0/1\n switchport mode access\n switchport access vlan 10\n\n<span class=\"c\">! Puerto troncal hacia otro switch</span>\n<span class=\"k\">interface</span> g0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20</code></pre>\n<p>Para comprobarlo: <code>show vlan brief</code> (qué puertos hay en cada VLAN) y <code>show interfaces trunk</code> (qué troncales hay y qué VLAN pasan).</p>"
  },
  {
   "h": "Enrutamiento entre VLAN",
   "html": "\n<p>Como cada VLAN es una red distinta, para que se comuniquen hace falta un equipo de capa 3:</p>\n<ul>\n<li><b>Router-on-a-stick:</b> un router con un único cable troncal hacia el switch y una <b>subinterfaz</b> por VLAN (<code>g0/0.10</code>, <code>g0/0.20</code>), cada una con la IP de puerta de enlace de su VLAN.</li>\n<li><b>Switch de capa 3:</b> crea una interfaz virtual (<b>SVI</b>) por VLAN (<code>interface vlan 10</code>) y enruta internamente. Es más rápido y es lo habitual en empresas.</li>\n</ul>\n<p>Los routers deciden por dónde enviar cada paquete según su <b>tabla de rutas</b>. Una ruta estática se añade a mano:</p>\n<pre><code>ip route 172.16.0.0 255.255.0.0 10.0.0.2   <span class=\"c\">! red destino, máscara, siguiente salto</span>\nip route 0.0.0.0 0.0.0.0 80.58.1.1         <span class=\"c\">! ruta por defecto (hacia Internet)</span></code></pre>\n<p>En redes grandes se usan <b>protocolos de enrutamiento dinámico</b> como OSPF, que aprenden las rutas automáticamente.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué estándar define el etiquetado de VLAN en los troncales?",
   "o": [
    "IEEE 802.3",
    "IEEE 802.11",
    "IEEE 802.1Q",
    "IEEE 802.1X"
   ],
   "a": 2,
   "e": "802.1Q añade una etiqueta de 4 bytes con el VLAN ID."
  },
  {
   "q": "¿Qué tipo de puerto transporta varias VLAN entre dos switches?",
   "o": [
    "De acceso",
    "Troncal",
    "De consola",
    "De gestión"
   ],
   "a": 1,
   "e": "Los troncales llevan tráfico de varias VLAN etiquetado."
  },
  {
   "q": "Dos PC del mismo switch están en VLAN distintas. ¿Pueden comunicarse directamente?",
   "o": [
    "Sí, siempre",
    "No, necesitan un router o un switch de capa 3",
    "Sí, si están en el mismo puerto",
    "Solo por broadcast"
   ],
   "a": 1,
   "e": "Cada VLAN es una red diferente; entre redes hace falta enrutamiento."
  },
  {
   "q": "¿Qué dispositivo separa dominios de difusión?",
   "o": [
    "Hub",
    "Switch de capa 2",
    "Router",
    "Repetidor"
   ],
   "a": 2,
   "e": "Los routers no reenvían broadcasts entre redes."
  },
  {
   "q": "¿Qué comando de Cisco muestra las VLAN y sus puertos?",
   "o": [
    "show ip route",
    "show vlan brief",
    "show running-config trunk",
    "show mac"
   ],
   "a": 1,
   "e": "show vlan brief resume las VLAN y los puertos asignados."
  },
  {
   "q": "¿Cuántos bits tiene el identificador de VLAN?",
   "o": [
    "8",
    "12",
    "16",
    "32"
   ],
   "a": 1,
   "e": "12 bits permiten 4.096 valores, de los que 4.094 son utilizables."
  },
  {
   "q": "¿Cómo se escribe la ruta por defecto?",
   "o": [
    "255.255.255.255/32",
    "0.0.0.0/0",
    "127.0.0.0/8",
    "192.168.0.0/16"
   ],
   "a": 1,
   "e": "0.0.0.0/0 coincide con cualquier destino que no tenga una ruta más concreta."
  },
  {
   "q": "¿Qué usa la técnica router-on-a-stick?",
   "o": [
    "Un cable por VLAN",
    "Subinterfaces sobre un único enlace troncal",
    "Un switch de capa 3",
    "Wi-Fi"
   ],
   "a": 1,
   "e": "Cada subinterfaz atiende una VLAN y hace de puerta de enlace."
  }
 ]
});
