TEMA("nube-archivos", {
 "title": "Servicios de archivos en la web y nube privada",
 "mins": 11,
 "intro": "Cómo compartir y sincronizar archivos a través de la web: servicios en la nube como OneDrive o Google Drive, y cómo montar tu propia nube con Nextcloud.",
 "sections": [
  {
   "h": "Almacenamiento en la nube",
   "html": "\n<p>Guardar archivos en la nube significa guardarlos en servidores de otra empresa, accesibles desde cualquier sitio. Estos son los servicios que ofrece.</p>\n<ul>\n<li><b>Sincronización:</b> una carpeta del equipo se mantiene igual que la de la nube y la de tus otros dispositivos.</li>\n<li><b>Compartición:</b> con enlaces (con contraseña y fecha de caducidad) o con usuarios concretos y permisos de lectura o edición.</li>\n<li><b>Versiones:</b> recuperar estados anteriores de un archivo, muy útil ante borrados o ransomware.</li>\n<li><b>Coedición:</b> varias personas editando el mismo documento a la vez.</li>\n</ul>\n<p>Servicios públicos: OneDrive y SharePoint (Microsoft 365), Google Drive, Dropbox. Para empresas importa dónde están físicamente los datos y quién puede acceder a ellos, por la protección de datos.</p>"
  },
  {
   "h": "Tu propia nube con Nextcloud",
   "html": "\n<p><b>Nextcloud</b> es software libre que ofrece lo mismo que un Drive, pero en tu servidor: archivos, calendario, contactos, edición de documentos y videollamadas.</p>\n<pre><code><span class=\"c\"># Opción rápida para pruebas con Docker</span>\ndocker run -d -p 8080:80 -v nextcloud:/var/www/html nextcloud</code></pre>\n<ul>\n<li>Requiere servidor web, PHP y base de datos (o el contenedor).</li>\n<li>Clientes de escritorio y móvil para sincronizar.</li>\n<li>Se integra con LDAP/Active Directory, y se puede ampliar con apps.</li>\n<li>Siempre detrás de <b>HTTPS</b>, con copias y actualizaciones al día.</li>\n</ul>\n<p>La ventaja principal de una nube privada como Nextcloud es que los datos están en tu servidor y bajo tu control, no en los de otra empresa.</p>\n",
   "check": {
    "q": "¿Qué ventaja principal tiene una nube privada como Nextcloud?",
    "o": [
     "Es más rápida que todo",
     "Los datos están en tu servidor y bajo tu control",
     "No necesita mantenimiento",
     "No necesita Internet"
    ],
    "a": 1,
    "e": "A cambio, eres tú quien debe mantenerla, actualizarla y hacer copias."
   }
  },
  {
   "h": "Buenas prácticas",
   "html": "\n<p>La nube facilita compartir, y por eso mismo es fácil compartir de más. Unas pocas costumbres evitan filtraciones.</p>\n<ul>\n<li>Los enlaces públicos, con caducidad y contraseña cuando el contenido es sensible.</li>\n<li>Revisar periódicamente qué se ha compartido y con quién.</li>\n<li>La sincronización <b>no es una copia de seguridad</b>: si borras o cifras un archivo, se sincroniza el desastre. Activa el historial de versiones y haz copias aparte.</li>\n<li>Verificación en dos pasos en las cuentas.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Un empleado comparte una carpeta de RR. HH. con «cualquiera que tenga el enlace» para enviarla a un compañero. El enlace acaba reenviado fuera de la empresa. Compartir siempre con personas concretas.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es la sincronización de archivos?",
   "o": [
    "Comprimirlos",
    "Mantener la misma versión en la nube y en todos tus dispositivos",
    "Cifrarlos",
    "Borrarlos"
   ],
   "a": 1,
   "e": "Un cambio en un sitio se refleja en todos."
  },
  {
   "q": "¿Qué es Nextcloud?",
   "o": [
    "Un servicio de Google",
    "Software libre para montar tu propia nube",
    "Un antivirus",
    "Un navegador"
   ],
   "a": 1,
   "e": "Archivos, calendario, contactos y más en tu servidor."
  },
  {
   "q": "¿Es la sincronización una copia de seguridad?",
   "o": [
    "Sí",
    "No, los borrados y cifrados también se sincronizan",
    "Solo en OneDrive",
    "Solo de noche"
   ],
   "a": 1,
   "e": "Necesitas versiones y copias independientes."
  },
  {
   "q": "¿Qué conviene añadir a un enlace público de un documento sensible?",
   "o": [
    "Nada",
    "Contraseña y fecha de caducidad",
    "Más carpetas",
    "Un virus"
   ],
   "a": 1,
   "e": "Limita quién y hasta cuándo puede acceder."
  },
  {
   "q": "¿Qué servicio de Microsoft 365 se usa para sitios y bibliotecas de documentos de equipo?",
   "o": [
    "Outlook",
    "SharePoint",
    "Excel",
    "Teams Rooms"
   ],
   "a": 1,
   "e": "OneDrive es el almacenamiento personal; SharePoint, el de equipos."
  },
  {
   "q": "¿Por qué importa dónde están físicamente los datos en la nube?",
   "o": [
    "Por la velocidad solamente",
    "Por la normativa de protección de datos",
    "Por el idioma",
    "No importa"
   ],
   "a": 1,
   "e": "El RGPD regula las transferencias de datos fuera del Espacio Económico Europeo."
  }
 ]
});
