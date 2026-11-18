TEMA("ofimatica-web", {
 "title": "Ofimática web y aplicaciones web de escritorio",
 "mins": 10,
 "intro": "Cómo se trabaja con documentos desde el navegador, qué ventajas tiene la coedición, cómo se despliegan estas herramientas en una organización y qué son las aplicaciones web instalables.",
 "sections": [
  {
   "h": "Ofimática en el navegador",
   "html": "\n<p>Las suites ofimáticas ya funcionan dentro del navegador, sin instalar nada. Estas son las más usadas.</p>\n<ul>\n<li><b>Microsoft 365</b> (Word, Excel y PowerPoint en la web) y <b>Google Workspace</b> (Documentos, Hojas de cálculo, Presentaciones).</li>\n<li>Libres y autoalojables: <b>Collabora Online</b> (basado en LibreOffice) y <b>OnlyOffice</b>, que se integran con Nextcloud o Moodle.</li>\n</ul>\n<p>Ventajas: nada que instalar, acceso desde cualquier equipo, <b>coedición en tiempo real</b>, comentarios e historial de versiones. Inconvenientes: dependen de la conexión y algunas funciones avanzadas solo están en las versiones de escritorio.</p>\n<p>Su gran ventaja es la <b>coedición</b>: varias personas editando el mismo documento a la vez, viendo los cambios de los demás en directo.</p>\n"
  },
  {
   "h": "Administrarla en una organización",
   "html": "\n<p>En una empresa, la ofimática web no se deja al gusto de cada uno. El administrador controla usuarios, licencias y qué se puede compartir.</p>\n<ul>\n<li>Alta de usuarios y licencias, normalmente sincronizados con el directorio de la empresa.</li>\n<li>Políticas de compartición: si se permite compartir fuera de la organización y con qué límites.</li>\n<li>Retención y copias de los documentos.</li>\n<li>Plantillas corporativas comunes para todos.</li>\n<li>Formación de los usuarios: la mayoría de incidencias son de uso, no técnicas.</li>\n</ul>\n<p>Sincronizar las cuentas con el directorio de la empresa permite dar de alta y de baja a los usuarios en un solo sitio.</p>\n",
   "check": {
    "q": "¿Qué es la coedición?",
    "o": [
     "Imprimir a doble cara",
     "Varias personas editando el mismo documento a la vez",
     "Traducir un documento",
     "Convertir a PDF"
    ],
    "a": 1,
    "e": "Cada uno ve en tiempo real los cambios de los demás."
   }
  },
  {
   "h": "Aplicaciones web de escritorio (PWA)",
   "html": "\n<p>Una <b>PWA</b> (aplicación web progresiva) es una web que se puede <b>instalar</b> desde el navegador: tiene su propio icono y ventana, puede funcionar sin conexión y enviar notificaciones. Ejemplos: Outlook web, Spotify web o Google Docs sin conexión.</p>\n<p>Otras «apps de escritorio» están hechas con tecnologías web dentro de <b>Electron</b>: Visual Studio Code, Slack o Discord son, por dentro, una web empaquetada.</p>\n<div class=\"caso\"><b>Lo verás en soporte</b>Muchos «programas» que usan los empleados son en realidad aplicaciones web. Cuando fallan, la primera prueba es la de cualquier web: borrar la caché del navegador, probar en ventana privada o en otro navegador.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué alternativas libres de ofimática web se integran con Nextcloud?",
   "o": [
    "Collabora Online y OnlyOffice",
    "Word y Excel",
    "Photoshop",
    "Thunderbird"
   ],
   "a": 0,
   "e": "Permiten editar documentos en el navegador en tu propio servidor."
  },
  {
   "q": "¿Qué inconveniente tiene la ofimática web?",
   "o": [
    "No permite compartir",
    "Depende de la conexión a Internet",
    "No guarda versiones",
    "No funciona en Windows"
   ],
   "a": 1,
   "e": "Aunque algunas permiten trabajar sin conexión."
  },
  {
   "q": "¿Qué es una PWA?",
   "o": [
    "Un tipo de virus",
    "Una web que se puede instalar como aplicación",
    "Un formato de documento",
    "Un protocolo"
   ],
   "a": 1,
   "e": "Aplicación web progresiva."
  },
  {
   "q": "¿Qué tecnología usan apps como Visual Studio Code o Slack?",
   "o": [
    "Electron",
    "Java Swing",
    "Flash",
    "COBOL"
   ],
   "a": 0,
   "e": "Son aplicaciones web empaquetadas como programas de escritorio."
  },
  {
   "q": "Una aplicación web de la empresa falla en un equipo. ¿Qué pruebas primero?",
   "o": [
    "Reinstalar Windows",
    "Borrar la caché o probar en ventana privada u otro navegador",
    "Cambiar el monitor",
    "Llamar al fabricante"
   ],
   "a": 1,
   "e": "Muchos fallos vienen de datos antiguos guardados en el navegador."
  },
  {
   "q": "¿Por qué conviene sincronizar las cuentas de la ofimática web con el directorio?",
   "o": [
    "No conviene",
    "Para dar de alta y baja usuarios en un solo sitio",
    "Para que vaya más rápido",
    "Para imprimir"
   ],
   "a": 1,
   "e": "Evita cuentas olvidadas de personas que ya no están."
  }
 ]
});
