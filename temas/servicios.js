TEMA("servicios", {
 "title": "Servicios de red: DHCP, DNS y acceso remoto",
 "mins": 17,
 "intro": "Los servicios que hacen funcionar cualquier red: cómo se reparten las IP, cómo se traducen los nombres, cómo se accede a un servidor a distancia y cómo viaja el correo.",
 "sections": [
  {
   "h": "Cliente, servidor y puertos",
   "html": "\n<p>Un <b>servicio</b> es un programa que espera peticiones en un <b>puerto</b>. El cliente se conecta a la IP del servidor y a ese puerto. Los más importantes:</p>\n<table>\n<tr><th>Servicio</th><th>Puerto</th><th>Para qué sirve</th></tr>\n<tr><td>DHCP</td><td>67 y 68 (UDP)</td><td>Asignar IP automáticamente</td></tr>\n<tr><td>DNS</td><td>53</td><td>Traducir nombres a IP</td></tr>\n<tr><td>HTTP / HTTPS</td><td>80 / 443</td><td>Web</td></tr>\n<tr><td>SSH</td><td>22</td><td>Terminal remota cifrada</td></tr>\n<tr><td>FTP</td><td>20 y 21</td><td>Transferencia de archivos (sin cifrar)</td></tr>\n<tr><td>SMTP</td><td>25 y 587</td><td>Envío de correo</td></tr>\n<tr><td>IMAP</td><td>143 y 993 (cifrado)</td><td>Lectura de correo</td></tr>\n<tr><td>RDP</td><td>3389</td><td>Escritorio remoto de Windows</td></tr>\n</table>"
  },
  {
   "h": "DHCP",
   "html": "\n<p>El servidor DHCP entrega a cada equipo su <b>IP, máscara, puerta de enlace y servidores DNS</b>. El proceso tiene cuatro mensajes, conocidos como <b>DORA</b>:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span><b>Discover:</b> el cliente grita a toda la red (broadcast) «¿hay algún servidor DHCP?».</span></div>\n<div class=\"stepn\"><i>2</i><span><b>Offer:</b> el servidor le ofrece una IP.</span></div>\n<div class=\"stepn\"><i>3</i><span><b>Request:</b> el cliente pide formalmente esa IP.</span></div>\n<div class=\"stepn\"><i>4</i><span><b>Acknowledge:</b> el servidor confirma. La IP queda asignada durante un tiempo (la <b>concesión</b>).</span></div>\n</div>\n<ul>\n<li><b>Ámbito:</b> el rango de direcciones que reparte, por ejemplo de .100 a .200.</li>\n<li><b>Exclusiones:</b> direcciones del rango que no debe dar.</li>\n<li><b>Reservas:</b> una IP fija para un equipo concreto, identificado por su <b>MAC</b>. Ideal para impresoras.</li>\n</ul>\n<p>En el cliente: <code>ipconfig /release</code> y <code>ipconfig /renew</code> en Windows; <code>dhclient</code> en Linux.</p>"
  },
  {
   "h": "DNS",
   "html": "\n<p>El DNS traduce nombres como <code>www.ejemplo.com</code> a direcciones IP. Es una base de datos distribuida y jerárquica: los servidores <b>raíz</b> conocen los de cada <b>TLD</b> (.com, .es), y estos, los de cada dominio.</p>\n<table>\n<tr><th>Registro</th><th>Qué guarda</th></tr>\n<tr><td>A</td><td>Nombre → dirección IPv4</td></tr>\n<tr><td>AAAA</td><td>Nombre → dirección IPv6</td></tr>\n<tr><td>CNAME</td><td>Alias de otro nombre</td></tr>\n<tr><td>MX</td><td>Servidor de correo del dominio</td></tr>\n<tr><td>NS</td><td>Servidores DNS autorizados para la zona</td></tr>\n<tr><td>PTR</td><td>IP → nombre (resolución inversa)</td></tr>\n</table>\n<p>Una <b>zona directa</b> traduce nombres a IP y una <b>zona inversa</b>, IP a nombres. Para hacer consultas: <code>nslookup ejemplo.com</code> o <code>dig ejemplo.com</code>.</p>\n<div class=\"note exam\"><b>Diagnóstico rápido</b>Si <code>ping 8.8.8.8</code> funciona pero <code>ping google.com</code> no, el problema es el DNS, no la conexión.</div>\n<p>El registro <b>MX</b> (Mail eXchanger) indica qué servidor recibe el correo de un dominio.</p>\n"
  },
  {
   "h": "Acceso remoto y transferencia de archivos",
   "html": "\n<p>Para administrar un servidor no hace falta estar delante. Se trabaja a distancia, siempre por canales cifrados.</p>\n<ul>\n<li><b>SSH:</b> terminal remota cifrada. <code>ssh usuario@192.168.1.20</code>. Sustituye a <b>Telnet</b>, que enviaba todo, contraseñas incluidas, en texto plano.</li>\n<li><b>Claves SSH:</b> más seguras que las contraseñas. Se generan con <code>ssh-keygen</code> y la pública se copia al servidor con <code>ssh-copy-id</code>.</li>\n<li><b>SFTP y SCP:</b> transfieren archivos sobre SSH, cifrados. El FTP clásico no cifra; si hay que usarlo, mejor FTPS.</li>\n<li><b>RDP:</b> escritorio remoto de Windows. No debe exponerse directamente a Internet: se accede a través de una VPN.</li>\n</ul>\n<p>Telnet y el FTP sin cifrar no se deben usar porque envían las credenciales en <b>texto plano</b>.</p>\n"
  },
  {
   "h": "Correo electrónico",
   "html": "\n<p>El correo funciona con varios protocolos: uno para enviar y dos posibles para recibir.</p>\n<ul>\n<li><b>SMTP:</b> envía el correo desde el cliente al servidor y entre servidores.</li>\n<li><b>POP3:</b> descarga los correos al dispositivo y normalmente los borra del servidor.</li>\n<li><b>IMAP:</b> los mantiene en el servidor y sincroniza todos los dispositivos. Es el más usado hoy.</li>\n</ul>\n<p>Para saber a qué servidor entregar un correo dirigido a <code>@empresa.es</code>, el servidor emisor consulta el registro <b>MX</b> de ese dominio. Los registros <b>SPF</b>, <b>DKIM</b> y <b>DMARC</b> ayudan a demostrar que un correo es legítimo y no suplantado.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuál es el orden de los mensajes DHCP?",
   "o": [
    "Request, Offer, Discover, Acknowledge",
    "Discover, Offer, Request, Acknowledge",
    "Offer, Discover, Acknowledge, Request",
    "Discover, Request, Offer, Acknowledge"
   ],
   "a": 1,
   "e": "DORA: Discover, Offer, Request y Acknowledge."
  },
  {
   "q": "¿Qué registro DNS indica el servidor de correo de un dominio?",
   "o": [
    "A",
    "CNAME",
    "MX",
    "PTR"
   ],
   "a": 2,
   "e": "MX (Mail Exchanger) apunta al servidor que recibe el correo."
  },
  {
   "q": "¿Qué registro DNS asocia un nombre a una dirección IPv4?",
   "o": [
    "A",
    "AAAA",
    "NS",
    "MX"
   ],
   "a": 0,
   "e": "A es para IPv4; AAAA, para IPv6."
  },
  {
   "q": "Quieres que una impresora reciba siempre la misma IP por DHCP. ¿Qué configuras?",
   "o": [
    "Una exclusión",
    "Una reserva por su MAC",
    "Un ámbito nuevo",
    "Un registro CNAME"
   ],
   "a": 1,
   "e": "La reserva asocia una IP concreta a la MAC del dispositivo."
  },
  {
   "q": "¿Qué puerto usa SSH?",
   "o": [
    "21",
    "22",
    "23",
    "3389"
   ],
   "a": 1,
   "e": "SSH usa el 22; Telnet, el 23."
  },
  {
   "q": "¿Por qué no se deben usar Telnet ni FTP sin cifrar?",
   "o": [
    "Son muy lentos",
    "Envían las credenciales en texto plano",
    "No funcionan en Linux",
    "Necesitan licencia"
   ],
   "a": 1,
   "e": "Cualquiera que capture el tráfico puede leer el usuario y la contraseña."
  },
  {
   "q": "ping 8.8.8.8 funciona, pero ping google.com no. ¿Dónde está el problema?",
   "o": [
    "En el cable",
    "En el DNS",
    "En la tarjeta de red",
    "En el DHCP"
   ],
   "a": 1,
   "e": "Hay conexión con Internet, pero no se pueden resolver nombres."
  },
  {
   "q": "¿Qué protocolo mantiene los correos en el servidor y sincroniza varios dispositivos?",
   "o": [
    "POP3",
    "SMTP",
    "IMAP",
    "FTP"
   ],
   "a": 2,
   "e": "IMAP sincroniza; POP3 descarga y suele borrar del servidor."
  }
 ]
});
