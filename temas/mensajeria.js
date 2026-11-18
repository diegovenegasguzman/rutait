TEMA("mensajeria", {
 "title": "Mensajería instantánea, foros y listas de distribución",
 "mins": 10,
 "intro": "Los servicios de comunicación de una organización más allá del correo: chat corporativo, listas de distribución y foros, y cómo se montan con software libre.",
 "sections": [
  {
   "h": "Mensajería instantánea",
   "html": "\n<p>Permite conversaciones en tiempo real, presencia (conectado, ocupado) y grupos. Protocolos y plataformas:</p>\n<ul>\n<li><b>XMPP</b> (antes Jabber): protocolo abierto y federado. Servidores: ejabberd, Prosody, Openfire.</li>\n<li><b>Matrix</b>: protocolo abierto moderno, federado y con cifrado de extremo a extremo. Servidor Synapse, cliente Element.</li>\n<li>Plataformas que se pueden instalar en tu servidor: <b>Rocket.Chat</b> y <b>Mattermost</b>.</li>\n<li>En la nube: Microsoft Teams o Slack.</li>\n</ul>\n<p><b>Federado</b> significa que usuarios de servidores distintos pueden hablar entre sí, como pasa con el correo.</p>",
   "check": {
    "q": "¿Qué significa que un sistema de mensajería sea federado?",
    "o": [
     "Que es de pago",
     "Que usuarios de servidores distintos pueden comunicarse entre sí",
     "Que solo funciona en una empresa",
     "Que no tiene cifrado"
    ],
    "a": 1,
    "e": "Igual que el correo: cada organización tiene su servidor y todos se comunican."
   }
  },
  {
   "h": "Listas de distribución y foros",
   "html": "\n<p>No toda la comunicación necesita una respuesta inmediata. Para avisos a mucha gente o debates ordenados hay herramientas asíncronas.</p>\n<ul>\n<li><b>Lista de distribución:</b> una dirección de correo que reenvía cada mensaje a todos sus suscriptores. Puede ser de anuncios (solo escriben los moderadores) o de debate. Software clásico: <b>GNU Mailman</b>.</li>\n<li><b>Grupos de noticias (Usenet, protocolo NNTP):</b> el antecesor de los foros, hoy casi en desuso.</li>\n<li><b>Foros web:</b> conversaciones por temas que quedan archivadas y se pueden buscar. Software: <b>Discourse</b>, phpBB.</li>\n</ul>"
  },
  {
   "h": "Qué elegir y cómo administrarlo",
   "html": "\n<p>Cada herramienta encaja en una necesidad distinta. Elegir mal hace que la información se pierda o que todo el mundo reciba lo que no le toca.</p>\n<table>\n<tr><th>Necesidad</th><th>Herramienta</th></tr>\n<tr><td>Coordinación diaria de un equipo</td><td>Chat (Mattermost, Teams)</td></tr>\n<tr><td>Avisos a muchas personas</td><td>Lista de distribución</td></tr>\n<tr><td>Preguntas y respuestas que deben quedar para el futuro</td><td>Foro</td></tr>\n</table>\n<p>Como administrador: integración con el directorio (LDAP/AD) para no duplicar usuarios, copias de seguridad, cifrado TLS, y normas de uso y retención de mensajes.</p>\n<div class=\"caso\"><b>Caso real</b>Un hospital no puede permitir que se compartan datos de pacientes por aplicaciones de mensajería personales. Por eso despliega una plataforma corporativa propia, con cifrado y control de quién accede.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué protocolo abierto de mensajería se llamaba antes Jabber?",
   "o": [
    "SMTP",
    "XMPP",
    "SIP",
    "IRC"
   ],
   "a": 1,
   "e": "Extensible Messaging and Presence Protocol."
  },
  {
   "q": "¿Qué es Matrix?",
   "o": [
    "Un antivirus",
    "Un protocolo abierto y federado de mensajería con cifrado de extremo a extremo",
    "Un servidor web",
    "Un ERP"
   ],
   "a": 1,
   "e": "Su cliente más conocido es Element."
  },
  {
   "q": "¿Qué software libre gestiona listas de distribución de correo?",
   "o": [
    "Mailman",
    "Squid",
    "Bind",
    "Samba"
   ],
   "a": 0,
   "e": "GNU Mailman."
  },
  {
   "q": "¿Qué protocolo usaban los grupos de noticias de Usenet?",
   "o": [
    "NNTP",
    "SNMP",
    "NTP",
    "SMTP"
   ],
   "a": 0,
   "e": "Network News Transfer Protocol."
  },
  {
   "q": "¿Qué plataformas de chat se pueden instalar en un servidor propio?",
   "o": [
    "Mattermost y Rocket.Chat",
    "Solo WhatsApp",
    "Gmail",
    "Excel"
   ],
   "a": 0,
   "e": "Son alternativas autoalojadas a Slack o Teams."
  },
  {
   "q": "¿Qué herramienta es mejor para preguntas y respuestas que deban quedar archivadas?",
   "o": [
    "Chat",
    "Foro",
    "Llamada",
    "SMS"
   ],
   "a": 1,
   "e": "Los foros organizan los temas y se pueden buscar."
  }
 ]
});
