TEMA("instalar-software", {
 "title": "Instalar software: aplicaciones, drivers y licencias",
 "mins": 12,
 "intro": "Cómo se instala, actualiza y desinstala software de forma profesional en Windows y Linux, qué tipos de licencia existen y cómo se despliegan programas en muchos equipos.",
 "sections": [
  {
   "h": "Tipos de licencia",
   "html": "\n<p>Antes de instalar un programa hay que saber qué te permite hacer su licencia. Instalar software sin licencia en una empresa es ilegal y puede costar multas.</p>\n<table>\n<tr><th>Tipo</th><th>Qué permite</th><th>Ejemplo</th></tr>\n<tr><td>Propietaria</td><td>Usar según las condiciones del fabricante; sin acceso al código</td><td>Microsoft Office, Photoshop</td></tr>\n<tr><td>Libre (GPL, MIT…)</td><td>Usar, estudiar, modificar y redistribuir</td><td>LibreOffice, Firefox, GIMP</td></tr>\n<tr><td>Freeware</td><td>Gratis, pero sin código ni derecho a modificar</td><td>Algunos visores y utilidades</td></tr>\n<tr><td>Shareware / prueba</td><td>Uso limitado en tiempo o funciones</td><td>Versiones de evaluación</td></tr>\n<tr><td>Suscripción</td><td>Uso mientras pagas</td><td>Microsoft 365, Adobe Creative Cloud</td></tr>\n</table>\n<p>Software libre no siempre significa gratuito, ni gratuito significa libre. Instalar programas sin licencia en una empresa es ilegal y un riesgo de seguridad.</p>"
  },
  {
   "h": "Instalar en Windows y en Linux",
   "html": "\n<p>Cada sistema tiene su forma de instalar programas. La más cómoda y segura es el gestor de paquetes, que descarga de un repositorio de confianza.</p>\n<ul>\n<li><b>Windows:</b> instaladores <code>.exe</code> o <code>.msi</code>, Microsoft Store y el gestor de paquetes <b>winget</b>:</li>\n</ul>\n<pre><code>winget search libreoffice\nwinget install TheDocumentFoundation.LibreOffice\nwinget upgrade --all</code></pre>\n<ul>\n<li><b>Linux:</b> gestores de paquetes desde repositorios oficiales (<code>apt</code>, <code>dnf</code>) y formatos universales (<b>Flatpak</b>, Snap).</li>\n</ul>\n<p>Los <b>drivers</b> se instalan preferiblemente desde Windows Update o la web del fabricante, nunca desde webs de descargas de terceros.</p>\n<p>La ventaja de un gestor de paquetes como winget o apt es que descarga de <b>fuentes fiables</b> y permite <b>actualizar todo de una vez</b>.</p>\n",
   "check": {
    "q": "¿Qué ventaja tiene instalar con un gestor de paquetes como winget o apt?",
    "o": [
     "Ninguna",
     "Descarga de fuentes fiables y permite actualizar todo de una vez",
     "Instala virus",
     "Solo funciona sin Internet"
    ],
    "a": 1,
    "e": "Además, se puede automatizar en scripts."
   }
  },
  {
   "h": "Desplegar en muchos equipos",
   "html": "\n<p>Cuando hay que instalar lo mismo en muchos equipos, nadie va puesto por puesto. Se instala sin preguntas y de forma remota.</p>\n<ul>\n<li><b>Instalación silenciosa:</b> sin preguntas, para scripts: <code>msiexec /i programa.msi /qn</code>.</li>\n<li><b>GPO</b> de instalación de software en un dominio (para paquetes MSI).</li>\n<li>Herramientas de gestión: Microsoft Intune, Configuration Manager, PDQ Deploy; en Linux, Ansible.</li>\n<li>Comprobar <b>requisitos</b> antes de instalar: sistema operativo, arquitectura (x64/ARM), espacio y dependencias.</li>\n</ul>\n<p>Por eso, en una empresa los usuarios no suelen ser administradores de su equipo: así no pueden instalar software no autorizado ni malware.</p>\n<div class=\"caso\"><b>Caso real</b>Un usuario descarga un «convertidor de PDF gratis» de una web cualquiera y con él se instala un programa espía. Por eso en las empresas los usuarios no son administradores y el software se instala desde un catálogo aprobado.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué permite una licencia libre como la GPL?",
   "o": [
    "Solo usar",
    "Usar, estudiar, modificar y redistribuir",
    "Solo ver el código",
    "Usar 30 días"
   ],
   "a": 1,
   "e": "Son las cuatro libertades del software libre."
  },
  {
   "q": "¿Es lo mismo freeware que software libre?",
   "o": [
    "Sí",
    "No: freeware es gratis pero sin acceso al código ni a modificarlo",
    "Solo en Linux",
    "Solo en Windows"
   ],
   "a": 1,
   "e": "Libre se refiere a libertades, no a precio."
  },
  {
   "q": "¿Qué es winget?",
   "o": [
    "Un antivirus",
    "El gestor de paquetes de Windows",
    "Un navegador",
    "Un tipo de licencia"
   ],
   "a": 1,
   "e": "winget install, upgrade, uninstall…"
  },
  {
   "q": "¿Qué opción de msiexec instala sin mostrar ventanas?",
   "o": [
    "/qn",
    "/show",
    "/help",
    "/fast"
   ],
   "a": 0,
   "e": "Instalación silenciosa para scripts y despliegues."
  },
  {
   "q": "¿De dónde conviene descargar los drivers?",
   "o": [
    "De cualquier web de descargas",
    "De Windows Update o la web del fabricante",
    "De un correo",
    "De un USB encontrado"
   ],
   "a": 1,
   "e": "Las webs de terceros pueden incluir malware."
  },
  {
   "q": "¿Por qué los usuarios de una empresa no suelen ser administradores de su equipo?",
   "o": [
    "Por ahorro",
    "Para que no instalen software no autorizado ni malware",
    "Porque Windows no lo permite",
    "Por velocidad"
   ],
   "a": 1,
   "e": "Reduce mucho el riesgo de infecciones."
  }
 ]
});
