TEMA("routers", {
 "title": "Configuración básica de routers",
 "mins": 14,
 "intro": "Cómo poner en marcha un router desde cero: interfaces, rutas estáticas, la tabla de rutas y cómo comprobar que todo funciona.",
 "sections": [
  {
   "h": "Qué hace un router",
   "html": "\n<p>Un router conecta <b>redes distintas</b> y decide por dónde enviar cada paquete según su IP de destino. Cada interfaz del router pertenece a una red diferente y su IP es la <b>puerta de enlace</b> de esa red.</p>\n<pre><code>        Red A 192.168.10.0/24                Red B 192.168.20.0/24\n   PCs ──── switch ──── [g0/0 .1] ROUTER [g0/1 .1] ──── switch ──── PCs</code></pre>\n<p>Los PC de la red A tendrán como puerta de enlace la 192.168.10.1, y los de la red B, la 192.168.20.1.</p>"
  },
  {
   "h": "Configurar las interfaces",
   "html": "\n<pre><code>enable\nconfigure terminal\nhostname R1\n\ninterface g0/0\n description LAN Administración\n ip address 192.168.10.1 255.255.255.0\n no shutdown\n\ninterface g0/1\n description LAN Alumnos\n ip address 192.168.20.1 255.255.255.0\n no shutdown\nend\ncopy running-config startup-config</code></pre>\n<div class=\"note exam\"><b>El olvido número uno</b>En los routers Cisco, las interfaces están apagadas por defecto. Sin <code>no shutdown</code> no funcionan, aunque la IP esté bien puesta.</div>",
   "check": {
    "q": "Has configurado la IP de una interfaz del router, pero no responde a ping. ¿Qué es lo primero que revisas?",
    "o": [
     "El DNS",
     "Que la interfaz tenga no shutdown",
     "La tabla ARP de los PC",
     "El servidor DHCP"
    ],
    "a": 1,
    "e": "Las interfaces de un router Cisco vienen administrativamente apagadas."
   }
  },
  {
   "h": "Rutas estáticas",
   "html": "\n<p>Un router conoce solo las redes en las que tiene interfaz. Para llegar a otras hay que decírselo:</p>\n<pre><code><span class=\"c\">! Para llegar a 10.0.0.0/8, envíalo al router vecino 172.16.0.2</span>\nip route 10.0.0.0 255.0.0.0 172.16.0.2\n\n<span class=\"c\">! Ruta por defecto: todo lo demás, hacia el proveedor</span>\nip route 0.0.0.0 0.0.0.0 80.58.1.1</code></pre>\n<p>El formato es: <b>red de destino, máscara y siguiente salto</b> (la IP del router vecino al que se entrega el paquete).</p>\n<p>Las rutas estáticas son sencillas y seguras, pero no se adaptan solas: si un enlace cae, hay que cambiarlas a mano. Para redes grandes se usa enrutamiento dinámico.</p>\n<div class=\"caso\"><b>Caso real</b>Dos sedes unidas por routers. Desde la sede A llegas a la B, pero las respuestas nunca vuelven. Falta la ruta de vuelta: el router de la sede B no sabe cómo llegar a la red de A. Las rutas se configuran siempre en los dos sentidos.</div>",
   "check": {
    "q": "En la ruta «ip route 10.0.0.0 255.0.0.0 172.16.0.2», ¿qué es 172.16.0.2?",
    "o": [
     "La red de destino",
     "La máscara",
     "El siguiente salto",
     "La IP del propio router"
    ],
    "a": 2,
    "e": "Es el router vecino al que se entregan los paquetes para esa red."
   }
  },
  {
   "h": "Comprobar que funciona",
   "html": "\n<p>Después de configurar hay que comprobar. Estos comandos te dicen si las interfaces están activas y por dónde enviará el router cada paquete.</p>\n<table>\n<tr><th>Comando</th><th>Qué muestra</th></tr>\n<tr><td><code>show ip interface brief</code></td><td>Cada interfaz con su IP y estado (up/down)</td></tr>\n<tr><td><code>show ip route</code></td><td>La tabla de rutas. <b>C</b> = conectada, <b>S</b> = estática, <b>O</b> = OSPF, <b>R</b> = RIP</td></tr>\n<tr><td><code>show running-config</code></td><td>La configuración activa completa</td></tr>\n<tr><td><code>ping</code> y <code>traceroute</code></td><td>Conectividad y camino hasta un destino</td></tr>\n</table>\n<p>En <code>show ip interface brief</code>, una interfaz <b>administratively down</b> está apagada con <code>shutdown</code>; si está <b>down/down</b>, el problema suele ser físico (cable o equipo del otro lado).</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿A qué pertenece cada interfaz de un router?",
   "o": [
    "A la misma red",
    "A una red distinta",
    "A Internet",
    "A una VLAN obligatoriamente"
   ],
   "a": 1,
   "e": "Cada interfaz conecta el router con una red diferente."
  },
  {
   "q": "¿Qué comando enciende una interfaz en un router Cisco?",
   "o": [
    "interface up",
    "no shutdown",
    "enable",
    "start"
   ],
   "a": 1,
   "e": "Las interfaces vienen apagadas por defecto."
  },
  {
   "q": "¿Qué tres datos lleva una ruta estática?",
   "o": [
    "IP, MAC y puerto",
    "Red de destino, máscara y siguiente salto",
    "Usuario, contraseña y puerto",
    "VLAN, puerto y MAC"
   ],
   "a": 1,
   "e": "ip route red máscara siguiente_salto."
  },
  {
   "q": "¿Cómo se escribe la ruta por defecto en Cisco?",
   "o": [
    "ip route default",
    "ip route 0.0.0.0 0.0.0.0 siguiente_salto",
    "ip default 0",
    "route add any"
   ],
   "a": 1,
   "e": "0.0.0.0/0 coincide con cualquier destino."
  },
  {
   "q": "En show ip route, ¿qué significa la letra C?",
   "o": [
    "Ruta estática",
    "Red directamente conectada",
    "Ruta de OSPF",
    "Ruta caducada"
   ],
   "a": 1,
   "e": "C = connected; S = static."
  },
  {
   "q": "Desde la sede A llegas a la B, pero no vuelven las respuestas. ¿Qué falta?",
   "o": [
    "Un switch",
    "La ruta de vuelta en el router de B",
    "Un servidor DNS",
    "Una VLAN"
   ],
   "a": 1,
   "e": "Las rutas tienen que existir en los dos sentidos."
  },
  {
   "q": "¿Qué comando muestra el estado de todas las interfaces de forma resumida?",
   "o": [
    "show ip interface brief",
    "show vlan",
    "show mac",
    "show arp"
   ],
   "a": 0,
   "e": "Indica IP y estado de cada interfaz."
  },
  {
   "q": "¿Qué desventaja tienen las rutas estáticas?",
   "o": [
    "Son inseguras",
    "No se adaptan solas si cae un enlace",
    "No funcionan en Cisco",
    "Ocupan mucha memoria"
   ],
   "a": 1,
   "e": "Hay que cambiarlas a mano cuando cambia la red."
  }
 ]
});
