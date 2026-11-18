TEMA("acceso-internet", {
 "title": "Acceso a Internet desde una red local",
 "mins": 14,
 "intro": "Las tecnologías con las que una empresa se conecta a Internet y qué hay que configurar para que toda la red local salga por esa conexión de forma controlada.",
 "sections": [
  {
   "h": "Tecnologías de acceso",
   "html": "\n<p>Antes de configurar nada, la red necesita una línea con el proveedor. Hay varias tecnologías; cambian el medio físico y la velocidad que puedes esperar.</p>\n<table>\n<tr><th>Tecnología</th><th>Medio</th><th>Comentario</th></tr>\n<tr><td>Fibra hasta el hogar (FTTH)</td><td>Fibra óptica hasta el cliente</td><td>La más extendida en España; velocidades simétricas altas</td></tr>\n<tr><td>ADSL / VDSL</td><td>Par de cobre telefónico</td><td>En retirada; la velocidad baja mucho con la distancia a la central</td></tr>\n<tr><td>Cable (HFC)</td><td>Fibra y cable coaxial</td><td>Redes de operadores de cable</td></tr>\n<tr><td>4G / 5G</td><td>Radio (red móvil)</td><td>Zonas sin fibra o como línea de respaldo</td></tr>\n<tr><td>Satélite</td><td>Radio vía satélite</td><td>Zonas aisladas; las constelaciones de órbita baja tienen menos latencia</td></tr>\n</table>\n<p>Las empresas que no pueden quedarse sin conexión contratan <b>dos líneas de proveedores distintos</b> y un router que cambie de una a otra si falla la principal.</p>"
  },
  {
   "h": "El router de salida",
   "html": "\n<p>El router que conecta la LAN con el proveedor hace varias funciones a la vez:</p>\n<ul>\n<li><b>NAT/PAT:</b> traduce las IP privadas a la IP pública.</li>\n<li><b>Ruta por defecto</b> hacia el proveedor.</li>\n<li><b>DHCP</b> para los equipos (en redes pequeñas).</li>\n<li><b>Reenviador DNS:</b> los equipos le preguntan a él y él pregunta a los DNS del proveedor.</li>\n<li><b>Cortafuegos</b> básico.</li>\n</ul>\n<pre><code><span class=\"c\">! Configuración de PAT en Cisco</span>\ninterface g0/0\n ip nat inside                          <span class=\"c\">! hacia la LAN</span>\ninterface g0/1\n ip nat outside                         <span class=\"c\">! hacia el proveedor</span>\naccess-list 1 permit 192.168.0.0 0.0.255.255\nip nat inside source list 1 interface g0/1 overload\nip route 0.0.0.0 0.0.0.0 g0/1</code></pre>\n<p><code>overload</code> es lo que convierte el NAT en PAT: todos los equipos salen con la IP de la interfaz exterior.</p>\n<p>Al configurar NAT se marca cada interfaz: <code>ip nat inside</code> en la que va a la LAN e <code>ip nat outside</code> en la que va al proveedor de Internet. El router también suele hacer de <b>reenviador DNS</b>: recibe las consultas de los equipos de la red y las reenvía a los DNS del proveedor o a otros públicos, guardando las respuestas en caché.</p>\n",
   "check": {
    "q": "En la configuración de NAT, ¿qué interfaz se marca como ip nat outside?",
    "o": [
     "La que va a la LAN",
     "La que va al proveedor de Internet",
     "Todas",
     "Ninguna"
    ],
    "a": 1,
    "e": "inside es la red interna y outside, la que da a Internet."
   }
  },
  {
   "h": "Proxy y filtrado",
   "html": "\n<p>Un <b>proxy</b> hace de intermediario: los equipos le piden las webs a él y él las solicita a Internet.</p>\n<ul>\n<li><b>Control:</b> permite bloquear categorías de webs o registrar qué se visita (siempre informando a los empleados, por la normativa de protección de datos).</li>\n<li><b>Caché:</b> guarda copias de lo más visitado y ahorra ancho de banda.</li>\n<li><b>Proxy transparente:</b> el tráfico pasa por él sin configurar nada en los equipos.</li>\n</ul>\n<p>El proxy libre más conocido es <b>Squid</b>. Hoy muchas empresas usan filtrado por DNS o soluciones en la nube.</p>\n<p>Un proxy con <b>caché</b> guarda las páginas y archivos más visitados. Si otro usuario pide lo mismo, se lo sirve desde la caché, así que se ahorra ancho de banda y la respuesta llega antes.</p>\n<div class=\"caso\"><b>Caso real</b>En un hospital, los equipos clínicos no deberían navegar libremente por Internet. Se les da salida solo hacia los servicios que necesitan y el resto se bloquea en el cortafuegos o el proxy. Menos superficie de ataque.</div>"
  },
  {
   "h": "Publicar servicios hacia fuera",
   "html": "\n<p>Si un servidor interno tiene que ser accesible desde Internet:</p>\n<ul>\n<li>Se coloca preferiblemente en una <b>DMZ</b>.</li>\n<li>Se crea una <b>redirección de puertos</b> (NAT estática) solo para el puerto necesario.</li>\n<li>Si la IP pública cambia (líneas domésticas), se usa <b>DNS dinámico</b> (DDNS), que actualiza el nombre cada vez que cambia la IP.</li>\n</ul>\n<p>Muchos proveedores domésticos usan <b>CG-NAT</b>: varios clientes comparten una misma IP pública. Con CG-NAT no se pueden abrir puertos hacia dentro; hay que pedir al proveedor una IP pública propia.</p>",
   "check": {
    "q": "Has abierto el puerto en tu router, pero desde fuera sigue sin llegar nada, y la IP WAN del router es 100.72.x.x. ¿Qué ocurre?",
    "o": [
     "El cable está mal",
     "Estás detrás de CG-NAT del proveedor",
     "El DNS falla",
     "La VLAN es incorrecta"
    ],
    "a": 1,
    "e": "El rango 100.64.0.0/10 es el que usan los operadores para CG-NAT: tu router no tiene IP pública propia."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué tecnología de acceso usa fibra hasta el domicilio del cliente?",
   "o": [
    "ADSL",
    "FTTH",
    "HFC",
    "4G"
   ],
   "a": 1,
   "e": "Fiber To The Home."
  },
  {
   "q": "¿Qué palabra convierte el NAT de Cisco en PAT?",
   "o": [
    "static",
    "overload",
    "pool",
    "inside"
   ],
   "a": 1,
   "e": "overload permite que muchas IP privadas compartan una pública."
  },
  {
   "q": "¿Qué función hace un reenviador DNS en el router?",
   "o": [
    "Bloquea webs",
    "Recibe las consultas de los equipos y las reenvía a otros DNS",
    "Asigna IP",
    "Cifra el tráfico"
   ],
   "a": 1,
   "e": "Los equipos preguntan al router y él consulta a los DNS del proveedor."
  },
  {
   "q": "¿Qué ventaja da un proxy con caché?",
   "o": [
    "Más seguridad física",
    "Ahorro de ancho de banda al guardar lo más visitado",
    "Más IP públicas",
    "Mejor Wi-Fi"
   ],
   "a": 1,
   "e": "Sirve copias locales de los contenidos repetidos."
  },
  {
   "q": "¿Cuál es el proxy libre más conocido?",
   "o": [
    "Apache",
    "Squid",
    "Bind",
    "Samba"
   ],
   "a": 1,
   "e": "Squid es el proxy-caché libre por excelencia."
  },
  {
   "q": "¿Para qué sirve el DNS dinámico (DDNS)?",
   "o": [
    "Para cifrar DNS",
    "Para mantener un nombre apuntando a una IP pública que cambia",
    "Para asignar IP privadas",
    "Para bloquear webs"
   ],
   "a": 1,
   "e": "Actualiza el registro cada vez que cambia la IP."
  },
  {
   "q": "¿Por qué con CG-NAT no puedes abrir puertos hacia dentro?",
   "o": [
    "Porque el router no lo permite",
    "Porque compartes la IP pública con otros clientes y no la controlas",
    "Porque es ilegal",
    "Porque no hay DNS"
   ],
   "a": 1,
   "e": "La IP pública está en el equipo del operador, no en tu router."
  },
  {
   "q": "¿Qué medida evita quedarse sin Internet si falla el proveedor?",
   "o": [
    "Un proxy",
    "Una segunda línea de otro proveedor",
    "Más switches",
    "Un servidor DNS"
   ],
   "a": 1,
   "e": "La redundancia de líneas con conmutación automática."
  }
 ]
});
