TEMA("impresion", {
 "title": "Servidores de impresión",
 "mins": 10,
 "intro": "Por qué las impresoras de una empresa se gestionan desde un servidor, cómo se configura en Windows y en Linux con CUPS, y cómo se resuelven los problemas más típicos.",
 "sections": [
  {
   "h": "Por qué un servidor de impresión",
   "html": "\n<p>En una oficina con muchas impresoras y usuarios, gestionarlas equipo por equipo es inmanejable. Un servidor de impresión lo centraliza.</p>\n<ul>\n<li>Los <b>drivers</b> se instalan una vez en el servidor y los equipos los descargan solos.</li>\n<li>Se controlan <b>permisos</b> (quién imprime en color, en qué impresora) y <b>colas</b>.</li>\n<li>Se pueden contar las páginas por usuario o departamento.</li>\n<li>Con <b>impresión segura</b> (pull printing), el trabajo no sale hasta que el usuario se identifica en la impresora con su tarjeta o PIN: los documentos confidenciales no se quedan en la bandeja.</li>\n</ul>"
  },
  {
   "h": "En Windows y en Linux",
   "html": "\n<p><b>Windows Server:</b> rol «Servicios de impresión y documentos» y consola <b>Administración de impresión</b>. Las impresoras se publican en Active Directory y se despliegan a los usuarios por <b>GPO</b>.</p>\n<p><b>Linux:</b> el sistema de impresión es <b>CUPS</b>, que se administra desde el navegador en <code>http://localhost:631</code> o con comandos:</p>\n<pre><code>lpstat -p            <span class=\"c\"># estado de las impresoras</span>\nlp -d Planta1 doc.pdf <span class=\"c\"># imprimir en la impresora Planta1</span>\nlpq                   <span class=\"c\"># ver la cola</span>\ncancel 42             <span class=\"c\"># cancelar el trabajo 42</span></code></pre>\n<p>Protocolos habituales: <b>IPP</b> (puerto 631), <b>LPD</b> (515) y <b>RAW/JetDirect</b> (9100).</p>\n<p>En un dominio, las impresoras se despliegan a los usuarios por <b>GPO</b>: se asignan por grupo o por ubicación y aparecen solas al iniciar sesión.</p>\n",
   "check": {
    "q": "¿Cómo se llama el sistema de impresión estándar en Linux?",
    "o": [
     "Spooler",
     "CUPS",
     "LPD-NG",
     "PrintNightmare"
    ],
    "a": 1,
    "e": "CUPS se administra vía web en el puerto 631."
   }
  },
  {
   "h": "Problemas habituales",
   "html": "\n<p>La impresora es uno de los periféricos que más incidencias genera. La mayoría tienen causas conocidas.</p>\n<table>\n<tr><th>Síntoma</th><th>Qué revisar</th></tr>\n<tr><td>Trabajos atascados en la cola</td><td>Reiniciar el servicio de cola (Spooler en Windows, cups en Linux) y vaciar la cola</td></tr>\n<tr><td>Imprime caracteres raros</td><td>Driver incorrecto para ese modelo</td></tr>\n<tr><td>Nadie puede imprimir</td><td>IP de la impresora cambiada: dale IP fija o reserva DHCP</td></tr>\n<tr><td>Un usuario no ve la impresora</td><td>Permisos o la GPO que la despliega</td></tr>\n</table>\n<div class=\"caso\"><b>Caso real</b>En soporte es de las incidencias más frecuentes. Antes de nada: ¿hay papel?, ¿hay tóner?, ¿la impresora muestra un error en su pantalla? La mitad se resuelven ahí.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué ventaja tiene un servidor de impresión?",
   "o": [
    "Imprime más rápido",
    "Centraliza drivers, permisos y colas",
    "Elimina el papel",
    "Evita el tóner"
   ],
   "a": 1,
   "e": "La gestión se hace en un solo sitio."
  },
  {
   "q": "¿Qué es la impresión segura (pull printing)?",
   "o": [
    "Imprimir cifrado",
    "El trabajo sale solo cuando el usuario se identifica en la impresora",
    "Imprimir en PDF",
    "Imprimir sin red"
   ],
   "a": 1,
   "e": "Evita que se queden documentos confidenciales en la bandeja."
  },
  {
   "q": "¿En qué puerto se administra CUPS desde el navegador?",
   "o": [
    "80",
    "631",
    "9100",
    "3389"
   ],
   "a": 1,
   "e": "http://localhost:631."
  },
  {
   "q": "¿Qué servicio de Windows gestiona la cola de impresión?",
   "o": [
    "Spooler (Cola de impresión)",
    "DHCP",
    "DNS",
    "WinRM"
   ],
   "a": 0,
   "e": "Reiniciarlo suele desatascar los trabajos."
  },
  {
   "q": "¿Cómo se despliegan impresoras a los usuarios de un dominio?",
   "o": [
    "Una por una",
    "Por GPO",
    "Por correo",
    "Por DNS"
   ],
   "a": 1,
   "e": "Se asignan por grupo o por ubicación."
  },
  {
   "q": "La impresora imprime símbolos sin sentido. ¿Qué es lo más probable?",
   "o": [
    "Falta tóner",
    "Driver incorrecto",
    "Papel mal puesto",
    "Virus"
   ],
   "a": 1,
   "e": "El driver no corresponde al lenguaje de la impresora."
  }
 ]
});
