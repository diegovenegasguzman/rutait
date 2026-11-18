TEMA("streaming", {
 "title": "Servicios de audio y vídeo",
 "mins": 12,
 "intro": "Cómo se transmite audio y vídeo por la red: códecs y contenedores, emisión en directo y bajo demanda, protocolos de streaming, telefonía IP y videoconferencia.",
 "sections": [
  {
   "h": "Códecs, contenedores y calidad",
   "html": "\n<p>Para entender el audio y el vídeo digital hay que distinguir el códec (cómo se comprime) del contenedor (el archivo que lo guarda).</p>\n<ul>\n<li>Un <b>códec</b> comprime y descomprime el audio o el vídeo. Audio: MP3, AAC, Opus. Vídeo: H.264, H.265 (HEVC), VP9, AV1.</li>\n<li>Un <b>contenedor</b> es el archivo que guarda el audio, el vídeo y los subtítulos juntos: MP4, MKV, WebM.</li>\n<li>La <b>tasa de bits</b> (bitrate) marca calidad y consumo: un vídeo 1080p suele necesitar unos 5 Mb/s; 4K, unos 15–25 Mb/s.</li>\n</ul>\n<p>Herramienta clave: <b>FFmpeg</b>, que convierte entre formatos y puede emitir en directo: <code>ffmpeg -i entrada.mov -c:v libx264 -c:a aac salida.mp4</code>.</p>"
  },
  {
   "h": "Bajo demanda y en directo",
   "html": "\n<p>Hay dos formas de emitir audio y vídeo por la red, y cada una necesita una infraestructura distinta.</p>\n<table>\n<tr><th>Tipo</th><th>Ejemplo</th><th>Cómo funciona</th></tr>\n<tr><td>Bajo demanda (VoD)</td><td>Clases grabadas, plataformas de series</td><td>Los archivos están guardados y cada usuario los ve cuando quiere</td></tr>\n<tr><td>En directo</td><td>Retransmisión de un evento</td><td>Se codifica y se envía en tiempo real</td></tr>\n</table>\n<p>Protocolos de streaming:</p>\n<ul>\n<li><b>HLS</b> y <b>DASH</b>: el vídeo se trocea en segmentos pequeños servidos por HTTP, en varias calidades. El reproductor cambia de calidad según tu conexión (<b>bitrate adaptativo</b>).</li>\n<li><b>RTMP</b>: muy usado para enviar el directo desde el emisor (OBS) al servidor.</li>\n<li><b>WebRTC</b>: comunicación en tiempo real con latencia muy baja; base de las videollamadas en el navegador.</li>\n</ul>\n<p>Servidores: Nginx con módulo RTMP, Icecast (radio por Internet), Wowza; y redes de distribución (<b>CDN</b>) para llegar a mucho público.</p>",
   "check": {
    "q": "¿Qué técnica permite que el vídeo baje de calidad automáticamente si tu conexión empeora?",
    "o": [
     "Multicast",
     "Bitrate adaptativo (HLS/DASH)",
     "RAID",
     "NAT"
    ],
    "a": 1,
    "e": "El reproductor elige en cada segmento la calidad que tu conexión puede mantener."
   }
  },
  {
   "h": "Telefonía IP y videoconferencia",
   "html": "\n<p>Las llamadas telefónicas también viajan por redes IP. Así funciona la telefonía de empresa actual.</p>\n<ul>\n<li><b>VoIP:</b> voz sobre IP. El protocolo de señalización más usado es <b>SIP</b>, y la voz viaja por <b>RTP</b>.</li>\n<li>Centralita libre: <b>Asterisk</b> (y distribuciones como FreePBX).</li>\n<li>Videoconferencia libre: <b>Jitsi Meet</b> o BigBlueButton (muy usado en educación).</li>\n<li>La voz y el vídeo son sensibles al <b>retardo</b> y al <b>jitter</b> (variación del retardo). Con <b>QoS</b> se da prioridad a ese tráfico en la red.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Las videollamadas se cortan cada vez que alguien hace una copia grande. Configurando QoS en los switches y el router para priorizar el tráfico de voz y vídeo, el problema desaparece.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es un códec?",
   "o": [
    "Un archivo contenedor",
    "Un algoritmo que comprime y descomprime audio o vídeo",
    "Un protocolo de red",
    "Un reproductor"
   ],
   "a": 1,
   "e": "H.264, AAC u Opus son códecs; MP4 o MKV son contenedores."
  },
  {
   "q": "¿Cuál de estos es un contenedor?",
   "o": [
    "H.264",
    "AAC",
    "MP4",
    "Opus"
   ],
   "a": 2,
   "e": "El contenedor agrupa pistas de audio, vídeo y subtítulos."
  },
  {
   "q": "¿Qué protocolos trocean el vídeo en segmentos servidos por HTTP?",
   "o": [
    "SIP y RTP",
    "HLS y DASH",
    "FTP y SMTP",
    "SNMP y NTP"
   ],
   "a": 1,
   "e": "Permiten el bitrate adaptativo."
  },
  {
   "q": "¿Qué tecnología usan las videollamadas en el navegador?",
   "o": [
    "RTMP",
    "WebRTC",
    "FTP",
    "NFS"
   ],
   "a": 1,
   "e": "WebRTC ofrece comunicación en tiempo real con baja latencia."
  },
  {
   "q": "¿Qué protocolo de señalización se usa en telefonía IP?",
   "o": [
    "SIP",
    "HTTP",
    "IMAP",
    "DHCP"
   ],
   "a": 0,
   "e": "SIP establece y cierra las llamadas; RTP lleva la voz."
  },
  {
   "q": "¿Para qué sirve la QoS?",
   "o": [
    "Para cifrar",
    "Para priorizar tráfico sensible como voz y vídeo",
    "Para comprimir",
    "Para asignar IP"
   ],
   "a": 1,
   "e": "Reduce cortes y retardos en las llamadas."
  }
 ]
});
