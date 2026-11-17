TEMA("osi", {
 "title": "Modelos OSI y TCP/IP",
 "mins": 14,
 "intro": "Cómo viaja la información por una red, dividida en capas. Con estos modelos podrás entender qué hace cada dispositivo y localizar averías de forma ordenada.",
 "sections": [
  {
   "h": "Por qué se usan capas",
   "html": "\n      <p>Enviar un mensaje por una red implica muchas tareas: convertir datos en señales, saber a qué equipo van, comprobar que llegan completos, etc. Para organizarlo, la comunicación se divide en <b>capas</b>. Cada una se ocupa de una parte y solo se comunica con la de arriba y la de abajo.</p>\n      <p>Ventaja práctica: un fabricante de tarjetas de red no necesita saber nada de navegadores, y un programador web no necesita saber nada de cables.</p>"
  },
  {
   "h": "El modelo OSI",
   "html": "\n      <p>Es un modelo teórico de <b>7 capas</b> creado por la ISO. Se numeran de abajo (1) arriba (7):</p>\n      <table>\n        <tr><th>Nº</th><th>Capa</th><th>Qué hace</th><th>Ejemplos</th></tr>\n        <tr><td>7</td><td>Aplicación</td><td>Servicios que usa el usuario</td><td>HTTP, DNS, SMTP</td></tr>\n        <tr><td>6</td><td>Presentación</td><td>Formato, cifrado y compresión</td><td>TLS, JPEG</td></tr>\n        <tr><td>5</td><td>Sesión</td><td>Abre, mantiene y cierra el diálogo</td><td>RPC</td></tr>\n        <tr><td>4</td><td>Transporte</td><td>Entrega entre aplicaciones (puertos)</td><td>TCP, UDP</td></tr>\n        <tr><td>3</td><td>Red</td><td>Direccionamiento lógico y encaminamiento</td><td>IP, ICMP</td></tr>\n        <tr><td>2</td><td>Enlace</td><td>Entrega dentro de la red local (MAC)</td><td>Ethernet, Wi-Fi</td></tr>\n        <tr><td>1</td><td>Física</td><td>Bits como señales eléctricas, luz u ondas</td><td>Cable UTP, fibra</td></tr>\n      </table>\n      <div class=\"note\"><b>Para memorizarlo</b>De abajo arriba: «<b>F</b>ísica, <b>E</b>nlace, <b>R</b>ed, <b>T</b>ransporte, <b>S</b>esión, <b>P</b>resentación, <b>A</b>plicación». Inventa una frase con esas iniciales; la tuya se te olvidará menos que cualquiera que te den.</div>"
  },
  {
   "h": "El modelo TCP/IP",
   "html": "\n      <p>Es el modelo que se usa de verdad en Internet. Agrupa las capas de OSI en <b>4</b>:</p>\n      <table>\n        <tr><th>TCP/IP</th><th>Equivale en OSI a</th></tr>\n        <tr><td>Aplicación</td><td>Aplicación, Presentación y Sesión (7, 6 y 5)</td></tr>\n        <tr><td>Transporte</td><td>Transporte (4)</td></tr>\n        <tr><td>Internet</td><td>Red (3)</td></tr>\n        <tr><td>Acceso a la red</td><td>Enlace y Física (2 y 1)</td></tr>\n      </table>"
  },
  {
   "h": "Dispositivos de red por capa",
   "html": "\n      <ul>\n        <li><b>Hub (capa 1):</b> repite la señal por todos los puertos sin mirar a quién va. Está obsoleto.</li>\n        <li><b>Switch (capa 2):</b> aprende la <b>dirección MAC</b> de cada equipo conectado y envía cada trama solo por el puerto del destinatario.</li>\n        <li><b>Router (capa 3):</b> conecta redes distintas y decide la ruta de cada paquete según su <b>dirección IP</b>.</li>\n      </ul>\n      <div class=\"note exam\"><b>Diagnóstico por capas</b>En soporte, ve de abajo arriba: ¿está el cable conectado y hay luz en el puerto (1)? ¿El equipo ve su red local (2)? ¿Tiene IP y llega a la puerta de enlace con ping (3)? ¿Responde el servicio (4–7)?</div>"
  },
  {
   "h": "Encapsulación, TCP y UDP",
   "html": "\n      <p>Al enviar, cada capa añade su propia cabecera a los datos que recibe de la capa superior. Esto se llama <b>encapsulación</b>, y el bloque resultante tiene un nombre distinto en cada capa (PDU):</p>\n      <table>\n        <tr><th>Capa</th><th>PDU</th></tr>\n        <tr><td>Aplicación</td><td>Datos</td></tr>\n        <tr><td>Transporte</td><td>Segmento (TCP) o datagrama (UDP)</td></tr>\n        <tr><td>Red</td><td>Paquete</td></tr>\n        <tr><td>Enlace</td><td>Trama</td></tr>\n        <tr><td>Física</td><td>Bits</td></tr>\n      </table>\n      <p>En la capa de transporte hay dos protocolos principales:</p>\n      <ul>\n        <li><b>TCP:</b> orientado a conexión. Comprueba que todo llega y en orden, y reenvía lo que se pierde. Se usa en webs, correo y transferencia de archivos.</li>\n        <li><b>UDP:</b> sin conexión. No comprueba nada, pero es más rápido. Se usa en videollamadas, juegos online y DNS.</li>\n      </ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿En qué capa de OSI trabaja un switch?",
   "o": [
    "Capa 1, física",
    "Capa 2, enlace",
    "Capa 3, red",
    "Capa 4, transporte"
   ],
   "a": 1,
   "e": "El switch trabaja con direcciones MAC, que pertenecen a la capa de enlace."
  },
  {
   "q": "¿Qué dirección usa un router para decidir la ruta de un paquete?",
   "o": [
    "La dirección MAC",
    "La dirección IP",
    "El número de puerto",
    "El nombre del equipo"
   ],
   "a": 1,
   "e": "El router trabaja en la capa 3 y encamina según la IP de destino."
  },
  {
   "q": "¿Cuántas capas tiene el modelo OSI?",
   "o": [
    "4",
    "5",
    "7",
    "8"
   ],
   "a": 2,
   "e": "OSI tiene 7 capas; TCP/IP agrupa esas funciones en 4."
  },
  {
   "q": "¿Cómo se llama la PDU de la capa de red?",
   "o": [
    "Trama",
    "Segmento",
    "Paquete",
    "Bit"
   ],
   "a": 2,
   "e": "Capa 3 → paquete. Capa 2 → trama. Capa 4 → segmento o datagrama."
  },
  {
   "q": "¿Qué protocolo de transporte usarías para una videollamada?",
   "o": [
    "TCP, porque garantiza la entrega",
    "UDP, porque prima la velocidad",
    "HTTP",
    "IP"
   ],
   "a": 1,
   "e": "En tiempo real es mejor perder algún dato que esperar a reenviarlo, así que se usa UDP."
  },
  {
   "q": "¿En qué capa de OSI está el protocolo HTTP?",
   "o": [
    "Transporte",
    "Red",
    "Sesión",
    "Aplicación"
   ],
   "a": 3,
   "e": "HTTP es un protocolo de aplicación, el que usan los navegadores."
  },
  {
   "q": "Un equipo no tiene red. ¿Qué compruebas primero según el diagnóstico por capas?",
   "o": [
    "Que el navegador esté actualizado",
    "Que el DNS responda",
    "Que el cable esté conectado y haya luz en el puerto",
    "La configuración del proxy"
   ],
   "a": 2,
   "e": "Se empieza por la capa física: si no hay conexión física, el resto no puede funcionar."
  },
  {
   "q": "¿A qué capas de OSI equivale la capa de aplicación de TCP/IP?",
   "o": [
    "Solo a la 7",
    "A la 5, 6 y 7",
    "A la 4 y 7",
    "A la 3 y 4"
   ],
   "a": 1,
   "e": "TCP/IP agrupa sesión, presentación y aplicación en una sola capa."
  }
 ]
});
