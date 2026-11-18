TEMA("soporte-incidencias", {
 "title": "Gestión de incidencias y asistencia técnica",
 "mins": 13,
 "intro": "Cómo se organiza un departamento de soporte: niveles, tickets, prioridades y acuerdos de servicio, buenas prácticas ITIL y herramientas para ayudar al usuario a distancia.",
 "sections": [
  {
   "h": "Incidencia, petición y problema",
   "html": "\n<p>En soporte se distinguen tres cosas, según el marco de buenas prácticas <b>ITIL</b>:</p>\n<table>\n<tr><th>Concepto</th><th>Qué es</th><th>Ejemplo</th></tr>\n<tr><td>Incidencia</td><td>Algo que funcionaba y ha dejado de hacerlo, o va peor</td><td>«La impresora no imprime»</td></tr>\n<tr><td>Petición de servicio</td><td>Algo nuevo que el usuario necesita</td><td>«Necesito acceso a la carpeta de Compras»</td></tr>\n<tr><td>Problema</td><td>La causa de fondo de una o varias incidencias</td><td>«Esa impresora se cuelga cada vez que se actualiza su firmware»</td></tr>\n</table>\n<p>Ante una incidencia, lo prioritario es <b>restablecer el servicio</b> cuanto antes, aunque sea con una solución temporal. Investigar la causa de fondo es trabajo de la gestión de problemas.</p>",
   "check": {
    "q": "Un usuario pide que le instalen un programa nuevo que necesita para su trabajo. ¿Qué es?",
    "o": [
     "Una incidencia",
     "Una petición de servicio",
     "Un problema",
     "Un cambio de emergencia"
    ],
    "a": 1,
    "e": "No hay nada roto: es una solicitud de algo nuevo."
   }
  },
  {
   "h": "Niveles de soporte",
   "html": "\n<p>En un servicio de soporte, las incidencias se reparten por niveles según su dificultad. Así los técnicos especializados no pierden el tiempo con lo sencillo.</p>\n<table>\n<tr><th>Nivel</th><th>Quién</th><th>Qué hace</th></tr>\n<tr><td>Nivel 1</td><td>Centro de atención (help desk)</td><td>Recibe, registra, clasifica y resuelve lo frecuente: contraseñas, configuraciones, dudas</td></tr>\n<tr><td>Nivel 2</td><td>Técnicos especializados</td><td>Lo que el nivel 1 no puede resolver: servidores, redes, aplicaciones</td></tr>\n<tr><td>Nivel 3</td><td>Expertos o el fabricante</td><td>Fallos complejos, errores del software, desarrollo</td></tr>\n</table>\n<p>Pasar una incidencia al nivel siguiente se llama <b>escalar</b>. Un buen nivel 1 resuelve la mayoría de las incidencias en la primera llamada.</p>"
  },
  {
   "h": "Tickets, prioridades y SLA",
   "html": "\n<p>Cada incidencia se registra en un <b>ticket</b> con: quién la comunica, qué ocurre, a quién afecta, la prioridad, las acciones realizadas y la solución.</p>\n<p>La <b>prioridad</b> se calcula combinando:</p>\n<ul>\n<li><b>Impacto:</b> a cuántas personas o servicios afecta.</li>\n<li><b>Urgencia:</b> lo rápido que hace falta resolverla.</li>\n</ul>\n<p>Un <b>SLA</b> (acuerdo de nivel de servicio) fija los tiempos comprometidos, por ejemplo: prioridad crítica, respuesta en 15 minutos y resolución en 4 horas.</p>\n<p>Herramientas de tickets habituales: <b>GLPI</b> (libre, incluye inventario), osTicket, Jira Service Management o ServiceNow.</p>\n<div class=\"caso\"><b>Caso real</b>En un hospital, un fallo en el ordenador de un médico con consulta llena tiene más urgencia que el mismo fallo en un despacho administrativo vacío. Mismo problema técnico, distinta prioridad.</div>",
   "check": {
    "q": "Se cae el servidor de correo de toda la empresa. ¿Qué prioridad tiene?",
    "o": [
     "Baja: impacto bajo, urgencia baja",
     "Crítica: impacto alto y urgencia alta",
     "Media siempre",
     "Depende de la hora"
    ],
    "a": 1,
    "e": "Afecta a todos y se necesita ya: impacto y urgencia máximos."
   }
  },
  {
   "h": "Asistencia remota y comunicación",
   "html": "\n<p>Mucho soporte se da sin moverse de la mesa. Las herramientas remotas lo permiten, siempre con el permiso del usuario.</p>\n<ul>\n<li><b>Herramientas de acceso remoto:</b> Asistencia rápida de Windows, Escritorio remoto (RDP), AnyDesk, TeamViewer, RustDesk, VNC. Siempre con el <b>permiso del usuario</b> y avisando de lo que vas a hacer.</li>\n<li><b>Base de conocimiento:</b> artículos con soluciones a lo frecuente, para el equipo de soporte y para que los usuarios se autoayuden.</li>\n<li><b>Comunicación:</b> lenguaje sencillo y sin tecnicismos, confirmar que el usuario está de acuerdo en que el problema está resuelto antes de cerrar el ticket.</li>\n</ul>\n<div class=\"note exam\"><b>Cuidado con las estafas</b>Los timos del «falso soporte técnico» piden al usuario que instale una herramienta de acceso remoto. Ningún técnico legítimo llama sin aviso pidiendo acceso al equipo.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es una incidencia?",
   "o": [
    "Una solicitud de algo nuevo",
    "Algo que funcionaba y ha dejado de funcionar o funciona peor",
    "Un cambio planificado",
    "Una compra"
   ],
   "a": 1,
   "e": "Lo prioritario es restablecer el servicio."
  },
  {
   "q": "¿Qué es un problema en ITIL?",
   "o": [
    "Una incidencia urgente",
    "La causa de fondo de una o varias incidencias",
    "Una queja",
    "Un ticket cerrado"
   ],
   "a": 1,
   "e": "La gestión de problemas busca evitar que las incidencias se repitan."
  },
  {
   "q": "¿Qué nivel de soporte recibe y registra las incidencias?",
   "o": [
    "Nivel 1",
    "Nivel 2",
    "Nivel 3",
    "El fabricante"
   ],
   "a": 0,
   "e": "El help desk es el punto único de contacto."
  },
  {
   "q": "¿Cómo se llama pasar una incidencia al nivel superior?",
   "o": [
    "Cerrar",
    "Escalar",
    "Priorizar",
    "Documentar"
   ],
   "a": 1,
   "e": "Se escala cuando el nivel actual no puede resolverla."
  },
  {
   "q": "¿Con qué dos factores se calcula la prioridad?",
   "o": [
    "Coste y tiempo",
    "Impacto y urgencia",
    "Usuario y departamento",
    "Hora y día"
   ],
   "a": 1,
   "e": "Impacto: a cuántos afecta. Urgencia: lo rápido que hay que resolverlo."
  },
  {
   "q": "¿Qué es un SLA?",
   "o": [
    "Un tipo de cable",
    "Un acuerdo con los tiempos de servicio comprometidos",
    "Un antivirus",
    "Un nivel de soporte"
   ],
   "a": 1,
   "e": "Service Level Agreement."
  },
  {
   "q": "¿Qué herramienta libre de tickets incluye además inventario de equipos?",
   "o": [
    "GLPI",
    "Wireshark",
    "Squid",
    "Clonezilla"
   ],
   "a": 0,
   "e": "GLPI es muy usada en administraciones y centros educativos."
  },
  {
   "q": "¿Qué es imprescindible antes de conectarte en remoto al equipo de un usuario?",
   "o": [
    "Reiniciarlo",
    "Su permiso",
    "Cambiar su contraseña",
    "Desactivar el antivirus"
   ],
   "a": 1,
   "e": "Además de informarle de lo que vas a hacer."
  }
 ]
});
