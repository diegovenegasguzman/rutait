TEMA("ipv4", {
 "title": "Direccionamiento IPv4 y subredes",
 "mins": 18,
 "intro": "Cómo funcionan las direcciones IP y las máscaras, cómo calcular la red, el broadcast y los hosts de cualquier dirección, y cómo dividir una red en subredes.",
 "sections": [
  {
   "h": "La dirección IPv4",
   "html": "\n      <p>Una dirección IPv4 tiene <b>32 bits</b>, que se escriben como 4 números de 0 a 255 separados por puntos. Cada número es un <b>octeto</b> (8 bits).</p>\n      <p><code>192.168.10.77</code> en binario es <code>11000000.10101000.00001010.01001101</code>.</p>\n      <p>Toda dirección tiene dos partes: la <b>parte de red</b> (la misma para todos los equipos de esa red) y la <b>parte de host</b> (distinta para cada equipo). La máscara indica dónde acaba una y empieza la otra.</p>"
  },
  {
   "h": "La máscara y la notación CIDR",
   "html": "\n      <p>La máscara también tiene 32 bits: los <b>1</b> marcan la parte de red y los <b>0</b>, la de host. En notación CIDR se escribe solo cuántos unos tiene.</p>\n      <table>\n        <tr><th>CIDR</th><th>Máscara</th><th>Hosts utilizables</th></tr>\n        <tr><td>/8</td><td>255.0.0.0</td><td>16.777.214</td></tr>\n        <tr><td>/16</td><td>255.255.0.0</td><td>65.534</td></tr>\n        <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>\n        <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>\n        <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>\n        <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>\n        <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>\n      </table>\n      <p><b>Fórmula:</b> hosts utilizables = 2<sup>bits de host</sup> − 2. Se restan dos porque la primera dirección es la de <b>red</b> y la última es la de <b>broadcast</b>; ninguna se puede asignar a un equipo.</p>"
  },
  {
   "h": "Cálculo paso a paso",
   "html": "\n      <p>Vamos a calcular todo sobre <code>192.168.10.77/26</code>:</p>\n      <div class=\"work\">\n        <div class=\"stepn\"><i>1</i><span>/26 → máscara <code>255.255.255.192</code>. El octeto «interesante» es el cuarto.</span></div>\n        <div class=\"stepn\"><i>2</i><span>Tamaño de bloque: 256 − 192 = <b>64</b>. Las redes empiezan en .0, .64, .128 y .192.</span></div>\n        <div class=\"stepn\"><i>3</i><span>77 está entre 64 y 127 → dirección de red <code>192.168.10.64</code>.</span></div>\n        <div class=\"stepn\"><i>4</i><span>Broadcast: la siguiente red menos uno → <code>192.168.10.127</code>.</span></div>\n        <div class=\"stepn\"><i>5</i><span>Hosts: de <code>.65</code> a <code>.126</code>, es decir, 62 hosts (2⁶ − 2).</span></div>\n      </div>\n      <div class=\"note\"><b>Compruébalo</b>Escribe esta dirección en la calculadora de subredes de Herramientas y verás los mismos resultados.</div>"
  },
  {
   "h": "Dividir una red en subredes",
   "html": "\n      <p>Hacer <b>subnetting</b> es «pedir prestados» bits de host para crear más redes, más pequeñas. Con <i>n</i> bits prestados obtienes 2<sup>n</sup> subredes.</p>\n      <p><b>Ejemplo:</b> una empresa tiene <code>192.168.1.0/24</code> y necesita 4 redes (una por departamento).</p>\n      <div class=\"work\">\n        <div class=\"stepn\"><i>1</i><span>4 subredes = 2² → hay que pedir 2 bits → /24 + 2 = <b>/26</b>.</span></div>\n        <div class=\"stepn\"><i>2</i><span>Bloque de 64 direcciones, 62 hosts en cada una.</span></div>\n        <div class=\"stepn\"><i>3</i><span>Subredes: <code>.0/26</code>, <code>.64/26</code>, <code>.128/26</code> y <code>.192/26</code>.</span></div>\n      </div>"
  },
  {
   "h": "Direcciones privadas y especiales",
   "html": "\n<p>No todas las direcciones IPv4 sirven para lo mismo. Algunos rangos están reservados para redes privadas o para usos especiales que conviene reconocer de un vistazo.</p>\n<table>\n        <tr><th>Rango</th><th>Uso</th></tr>\n        <tr><td>10.0.0.0/8</td><td>Privada (redes grandes)</td></tr>\n        <tr><td>172.16.0.0/12</td><td>Privada (de 172.16 a 172.31)</td></tr>\n        <tr><td>192.168.0.0/16</td><td>Privada (hogares y pymes)</td></tr>\n        <tr><td>127.0.0.1</td><td>Loopback: el propio equipo</td></tr>\n        <tr><td>169.254.x.x</td><td>APIPA: el equipo no ha recibido IP del DHCP</td></tr>\n      </table>\n      <p>Las direcciones privadas no se enrutan por Internet. Para salir, el router traduce la IP privada a la pública mediante <b>NAT</b>.</p>\n      <div class=\"note exam\"><b>En soporte técnico</b>Si un usuario tiene una IP 169.254.x.x, el problema no es «Internet»: su equipo no ha conseguido IP del servidor DHCP. Revisa el cable, la VLAN o el servicio DHCP.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué máscara corresponde a /26?",
   "o": [
    "255.255.255.0",
    "255.255.255.128",
    "255.255.255.192",
    "255.255.255.224"
   ],
   "a": 2,
   "e": "26 unos: los tres primeros octetos a 255 y 11000000 = 192 en el cuarto."
  },
  {
   "q": "¿Cuántos hosts utilizables tiene una red /27?",
   "o": [
    "32",
    "30",
    "62",
    "14"
   ],
   "a": 1,
   "e": "Quedan 5 bits de host: 2⁵ − 2 = 30."
  },
  {
   "q": "¿Cuál es la dirección de red de 192.168.10.77/26?",
   "o": [
    "192.168.10.0",
    "192.168.10.64",
    "192.168.10.77",
    "192.168.10.128"
   ],
   "a": 1,
   "e": "Bloques de 64: 77 está en el bloque que va de 64 a 127."
  },
  {
   "q": "¿Cuál es el broadcast de la red 10.0.0.0/30?",
   "o": [
    "10.0.0.1",
    "10.0.0.2",
    "10.0.0.3",
    "10.0.0.255"
   ],
   "a": 2,
   "e": "Una /30 tiene 4 direcciones (.0 a .3); la última, .3, es el broadcast."
  },
  {
   "q": "Un equipo tiene la IP 169.254.12.5. ¿Qué indica?",
   "o": [
    "Que está bien configurado",
    "Que no ha recibido IP del DHCP",
    "Que tiene una IP pública",
    "Que es un servidor"
   ],
   "a": 1,
   "e": "169.254.x.x es APIPA: el sistema se la asigna a sí mismo cuando no obtiene respuesta del DHCP."
  },
  {
   "q": "Quieres dividir 192.168.1.0/24 en 8 subredes. ¿Qué prefijo usarás?",
   "o": [
    "/25",
    "/26",
    "/27",
    "/28"
   ],
   "a": 2,
   "e": "8 = 2³ → 3 bits prestados → /27."
  },
  {
   "q": "¿Qué dirección apunta al propio equipo (loopback)?",
   "o": [
    "192.168.1.1",
    "0.0.0.0",
    "127.0.0.1",
    "255.255.255.255"
   ],
   "a": 2,
   "e": "127.0.0.1 es la dirección de loopback: el equipo hablando consigo mismo."
  },
  {
   "q": "¿Cuántos bits tiene una dirección IPv4?",
   "o": [
    "16",
    "32",
    "64",
    "128"
   ],
   "a": 1,
   "e": "IPv4 tiene 32 bits; IPv6, 128."
  }
 ]
});
