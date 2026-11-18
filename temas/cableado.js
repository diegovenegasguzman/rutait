TEMA("cableado", {
 "title": "Cableado y redes inalámbricas",
 "mins": 14,
 "intro": "Los medios físicos por los que viaja la información: tipos de cable, categorías, cómo se crimpa un RJ45, cómo se organiza el cableado de un edificio y qué hay que saber del Wi-Fi.",
 "sections": [
  {
   "h": "Medios de transmisión",
   "html": "\n<p>La información puede viajar por tres tipos de medio:</p>\n<table>\n<tr><th>Medio</th><th>Cómo transmite</th><th>Cuándo se usa</th></tr>\n<tr><td>Par trenzado (cobre)</td><td>Señales eléctricas por 4 pares de hilos trenzados</td><td>Conectar equipos dentro de un edificio</td></tr>\n<tr><td>Fibra óptica</td><td>Pulsos de luz por un núcleo de vidrio</td><td>Largas distancias, troncales entre edificios y conexiones de muy alta velocidad</td></tr>\n<tr><td>Inalámbrico</td><td>Ondas de radio</td><td>Portátiles, móviles y lugares donde no se puede cablear</td></tr>\n</table>\n<p>El par trenzado puede ser <b>UTP</b> (sin apantallar, el más común), <b>FTP</b> (con una lámina que envuelve todos los pares) o <b>STP</b> (cada par apantallado). El apantallado protege de interferencias electromagnéticas, por ejemplo cerca de motores o fluorescentes.</p>\n<p>La fibra puede ser <b>multimodo</b> (más barata, para distancias de cientos de metros) o <b>monomodo</b> (para kilómetros). La fibra no sufre interferencias eléctricas.</p>"
  },
  {
   "h": "Categorías del cable de par trenzado",
   "html": "\n<p>No todos los cables de red son iguales. La categoría, impresa en la funda, indica la velocidad y la frecuencia que soporta.</p>\n<table>\n<tr><th>Categoría</th><th>Velocidad</th><th>Frecuencia</th></tr>\n<tr><td>Cat 5e</td><td>1 Gb/s</td><td>100 MHz</td></tr>\n<tr><td>Cat 6</td><td>1 Gb/s (10 Gb/s hasta unos 55 m)</td><td>250 MHz</td></tr>\n<tr><td>Cat 6A</td><td>10 Gb/s a 100 m</td><td>500 MHz</td></tr>\n<tr><td>Cat 8</td><td>25–40 Gb/s hasta 30 m (centros de datos)</td><td>2.000 MHz</td></tr>\n</table>\n<div class=\"note\"><b>La regla de los 100 metros</b>Un enlace Ethernet de par trenzado no puede superar los <b>100 m</b>: 90 m de cableado fijo más 10 m de latiguillos. Si necesitas más distancia, pon un switch intermedio o usa fibra.</div>\n<p>Para 10 Gb/s a los 100 m completos de un enlace hace falta, como mínimo, <b>Cat 6A</b>.</p>\n"
  },
  {
   "h": "Conectores RJ45 y normas T568",
   "html": "\n<p>El conector del cable de red es el <b>RJ45</b> (técnicamente 8P8C: 8 posiciones y 8 contactos). El orden de los colores lo fijan dos normas:</p>\n<table>\n<tr><th>Pin</th><th>T568A</th><th>T568B</th></tr>\n<tr><td>1</td><td>Blanco-verde</td><td>Blanco-naranja</td></tr>\n<tr><td>2</td><td>Verde</td><td>Naranja</td></tr>\n<tr><td>3</td><td>Blanco-naranja</td><td>Blanco-verde</td></tr>\n<tr><td>4</td><td>Azul</td><td>Azul</td></tr>\n<tr><td>5</td><td>Blanco-azul</td><td>Blanco-azul</td></tr>\n<tr><td>6</td><td>Naranja</td><td>Verde</td></tr>\n<tr><td>7</td><td>Blanco-marrón</td><td>Blanco-marrón</td></tr>\n<tr><td>8</td><td>Marrón</td><td>Marrón</td></tr>\n</table>\n<ul>\n<li><b>Cable directo:</b> la misma norma en los dos extremos. Es el que se usa casi siempre.</li>\n<li><b>Cable cruzado:</b> T568A en un extremo y T568B en el otro. Antes se usaba para unir dos equipos iguales (PC con PC). Hoy los puertos tienen <b>Auto-MDIX</b> y detectan el tipo solos.</li>\n</ul>\n<p>Para hacer un cable necesitas la <b>crimpadora</b> (pone el conector) y un <b>tester</b> (comprueba que los 8 hilos tienen continuidad y están en orden).</p>"
  },
  {
   "h": "Cableado estructurado",
   "html": "\n<p>En un edificio, el cableado se organiza de forma estándar para que sea ordenado y fácil de ampliar:</p>\n<ul>\n<li><b>Armario o rack:</b> donde están los switches, el router y los servidores.</li>\n<li><b>Panel de parcheo:</b> donde terminan, en el rack, los cables que vienen de las rosetas. Con latiguillos cortos se conecta cada puerto del panel a un puerto del switch.</li>\n<li><b>Cableado horizontal:</b> va desde el panel hasta las rosetas de cada puesto, dentro de una planta.</li>\n<li><b>Cableado vertical o troncal (backbone):</b> une los armarios de distintas plantas o edificios. Suele ser fibra.</li>\n<li><b>Roseta:</b> la toma de la pared donde se conecta el equipo con un latiguillo.</li>\n</ul>\n<p>Los cables se conectan al panel y a las rosetas con una <b>herramienta de impacto (ponchadora)</b>. Cada punto debe estar <b>etiquetado</b> igual en la roseta y en el panel.</p>\n<div class=\"note exam\"><b>En soporte técnico</b>Si un usuario no tiene red, mira la etiqueta de su roseta, busca ese número en el panel de parcheo y comprueba que hay un latiguillo hasta el switch y que el puerto tiene luz.</div>"
  },
  {
   "h": "Redes inalámbricas (Wi-Fi)",
   "html": "\n<p>Wi-Fi es el nombre comercial de los estándares IEEE 802.11. Cada generación es más rápida y algunas añaden bandas de frecuencia nuevas.</p>\n<table>\n<tr><th>Estándar</th><th>Nombre comercial</th><th>Bandas</th></tr>\n<tr><td>802.11n</td><td>Wi-Fi 4</td><td>2,4 y 5 GHz</td></tr>\n<tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td></tr>\n<tr><td>802.11ax</td><td>Wi-Fi 6 / 6E</td><td>2,4, 5 y 6 GHz (6E)</td></tr>\n<tr><td>802.11be</td><td>Wi-Fi 7</td><td>2,4, 5 y 6 GHz</td></tr>\n</table>\n<ul>\n<li><b>2,4 GHz:</b> más alcance y atraviesa mejor las paredes, pero es más lenta y tiene más interferencias.</li>\n<li><b>5 y 6 GHz:</b> mucho más rápidas, pero con menos alcance.</li>\n</ul>\n<p><b>Seguridad:</b> usa <b>WPA3</b>, o WPA2 si algún equipo no lo admite. WEP y WPA están rotos y no deben usarse nunca. El nombre de la red se llama <b>SSID</b>.</p>\n<p>La banda de <b>2,4 GHz</b> llega más lejos y atraviesa mejor las paredes, porque las frecuencias bajas se atenúan menos. La de <b>5 GHz</b> es más rápida y tiene menos interferencias, pero alcanza menos.</p>\n"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuál es la longitud máxima de un enlace Ethernet de par trenzado?",
   "o": [
    "50 m",
    "100 m",
    "185 m",
    "500 m"
   ],
   "a": 1,
   "e": "100 m en total: 90 m de cableado fijo y 10 m de latiguillos."
  },
  {
   "q": "Un cable con la norma T568B en los dos extremos es un cable…",
   "o": [
    "Cruzado",
    "Directo",
    "De consola",
    "De fibra"
   ],
   "a": 1,
   "e": "Si los dos extremos siguen la misma norma, el cable es directo."
  },
  {
   "q": "¿Cuál es el color del pin 1 en la norma T568B?",
   "o": [
    "Blanco-verde",
    "Blanco-naranja",
    "Naranja",
    "Azul"
   ],
   "a": 1,
   "e": "T568B empieza por blanco-naranja y naranja; T568A, por blanco-verde y verde."
  },
  {
   "q": "¿Qué categoría mínima necesitas para 10 Gb/s a 100 m?",
   "o": [
    "Cat 5e",
    "Cat 6",
    "Cat 6A",
    "Cat 5"
   ],
   "a": 2,
   "e": "Cat 6 solo llega a 10 Gb/s hasta unos 55 m. Para 100 m hace falta Cat 6A."
  },
  {
   "q": "¿Qué tipo de fibra usarías para unir dos edificios a 10 km?",
   "o": [
    "Multimodo",
    "Monomodo",
    "UTP",
    "Coaxial"
   ],
   "a": 1,
   "e": "La fibra monomodo alcanza distancias de kilómetros."
  },
  {
   "q": "¿Dónde terminan, en el rack, los cables que vienen de las rosetas?",
   "o": [
    "En el router",
    "En el panel de parcheo",
    "En el SAI",
    "En la roseta"
   ],
   "a": 1,
   "e": "El panel de parcheo organiza los puntos de red, que luego se conectan al switch con latiguillos."
  },
  {
   "q": "¿Qué banda Wi-Fi tiene más alcance?",
   "o": [
    "2,4 GHz",
    "5 GHz",
    "6 GHz",
    "Todas igual"
   ],
   "a": 0,
   "e": "Las frecuencias bajas atraviesan mejor los obstáculos y llegan más lejos."
  },
  {
   "q": "¿Qué seguridad Wi-Fi es la recomendada hoy?",
   "o": [
    "WEP",
    "WPA",
    "WPA3",
    "Red abierta con contraseña en el router"
   ],
   "a": 2,
   "e": "WPA3 es el estándar actual. WEP y WPA son inseguros."
  }
 ]
});
