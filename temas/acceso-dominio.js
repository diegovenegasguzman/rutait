TEMA("acceso-dominio", {
 "title": "Acceso al dominio: equipos, perfiles y autenticación",
 "mins": 14,
 "intro": "Qué pasa cuando un equipo se une al dominio y un usuario inicia sesión: cómo se autentica, dónde se guardan su perfil y sus documentos, y cómo se le conectan automáticamente sus unidades de red.",
 "sections": [
  {
   "h": "Unir un equipo al dominio",
   "html": "\n<p>Para que un usuario del dominio pueda iniciar sesión en un PC, ese PC tiene que formar parte del dominio. Unirlo es un proceso corto, pero falla si te saltas el primer paso.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>El equipo debe usar como <b>DNS</b> el del controlador de dominio. Es el error más común.</span></div>\n<div class=\"stepn\"><i>2</i><span>En Configuración del sistema → Cambiar nombre del equipo o dominio, escribe el dominio (<code>empresa.local</code>).</span></div>\n<div class=\"stepn\"><i>3</i><span>Introduce un usuario con permiso para unir equipos.</span></div>\n<div class=\"stepn\"><i>4</i><span>Reinicia. El equipo aparece en Active Directory, en el contenedor Computers, y se puede mover a la OU que le corresponda.</span></div>\n</div>\n<p>Con PowerShell: <code>Add-Computer -DomainName empresa.local -Restart</code>. En Linux también se pueden unir equipos a un dominio Windows con <code>realm join</code> (SSSD).</p>",
   "check": {
    "q": "Al unir un equipo al dominio aparece «No se pudo contactar con un controlador de dominio». ¿Qué revisas primero?",
    "o": [
     "La tarjeta gráfica",
     "Que el equipo use como DNS el del controlador de dominio",
     "El antivirus",
     "La resolución de pantalla"
    ],
    "a": 1,
    "e": "El equipo localiza el controlador de dominio mediante consultas DNS."
   }
  },
  {
   "h": "Cómo se autentica: Kerberos",
   "html": "\n<p>En un dominio de Active Directory la autenticación se hace con <b>Kerberos</b>, un sistema basado en <b>tickets</b>:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Al iniciar sesión, el equipo demuestra al controlador de dominio que el usuario conoce su contraseña, sin enviarla por la red.</span></div>\n<div class=\"stepn\"><i>2</i><span>El controlador le da un <b>TGT</b> (ticket de concesión de tickets), válido unas horas.</span></div>\n<div class=\"stepn\"><i>3</i><span>Cuando el usuario accede a un recurso (una carpeta compartida, una impresora), usa el TGT para pedir un ticket de servicio para ese recurso concreto.</span></div>\n</div>\n<p>Así el usuario solo escribe su contraseña una vez (inicio de sesión único). Kerberos necesita que los relojes de los equipos estén sincronizados: con más de <b>5 minutos</b> de diferencia, la autenticación falla.</p>\n<div class=\"caso\"><b>Caso real</b>Un portátil lleva semanas fuera de la oficina y su reloj va 10 minutos adelantado. Al volver, el usuario no puede iniciar sesión en el dominio. Se sincroniza la hora (<code>w32tm /resync</code>) y el problema desaparece.</div>"
  },
  {
   "h": "Perfiles y carpetas",
   "html": "\n<p>El perfil es la carpeta con el escritorio, los documentos y la configuración de cada usuario. Según dónde se guarde, el usuario encuentra o no sus cosas al cambiar de ordenador.</p>\n<table>\n<tr><th>Tipo de perfil</th><th>Dónde se guarda</th><th>Efecto</th></tr>\n<tr><td>Local</td><td>En cada equipo</td><td>En cada PC el usuario empieza de cero</td></tr>\n<tr><td>Móvil</td><td>En el servidor; se copia al equipo al iniciar sesión</td><td>El usuario encuentra su escritorio en cualquier equipo</td></tr>\n<tr><td>Obligatorio</td><td>En el servidor, de solo lectura</td><td>Los cambios se pierden al cerrar sesión (aulas, quioscos)</td></tr>\n</table>\n<p>Para no copiar perfiles enormes, lo habitual es usar <b>redirección de carpetas</b>: Documentos y Escritorio se guardan directamente en el servidor, y además se incluyen en las copias de seguridad.</p>\n<p>La <b>carpeta particular</b> (home folder) es una carpeta personal en el servidor que se conecta como una unidad, por ejemplo <code>H:</code>.</p>",
   "check": {
    "q": "En un aula, quieres que cada alumno encuentre siempre el mismo escritorio y que sus cambios se borren al cerrar sesión. ¿Qué perfil usas?",
    "o": [
     "Local",
     "Móvil",
     "Obligatorio",
     "Temporal"
    ],
    "a": 2,
    "e": "El perfil obligatorio es de solo lectura: los cambios no se guardan."
   }
  },
  {
   "h": "Conectar recursos automáticamente",
   "html": "\n<p>En una empresa nadie quiere ir PC por PC conectando unidades e impresoras. Las directivas de grupo lo hacen solas cuando el usuario inicia sesión.</p>\n<ul>\n<li><b>Unidades de red por GPO:</b> en las preferencias de directiva se crean unidades asignadas (por ejemplo, <code>S:</code> → <code>\\\\servidor\\Comun</code>) que solo aparecen a los miembros de ciertos grupos.</li>\n<li><b>Impresoras por GPO:</b> igual, según el grupo o la ubicación del equipo.</li>\n<li><b>Scripts de inicio de sesión:</b> el método clásico, con un <code>.bat</code> o <code>.ps1</code> que ejecuta <code>net use</code>.</li>\n</ul>\n<pre><code>net use S: \\\\servidor\\Comun /persistent:yes</code></pre>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué DNS debe usar un equipo para unirse a un dominio de AD?",
   "o": [
    "8.8.8.8",
    "El del controlador de dominio",
    "El del router",
    "Cualquiera"
   ],
   "a": 1,
   "e": "Sin él no encuentra los registros que indican dónde está el controlador."
  },
  {
   "q": "¿Qué protocolo de autenticación usa Active Directory?",
   "o": [
    "Telnet",
    "Kerberos",
    "FTP",
    "SNMP"
   ],
   "a": 1,
   "e": "Kerberos, basado en tickets."
  },
  {
   "q": "¿Qué diferencia de hora máxima tolera Kerberos por defecto?",
   "o": [
    "1 minuto",
    "5 minutos",
    "1 hora",
    "No importa la hora"
   ],
   "a": 1,
   "e": "Con más de 5 minutos de desfase, los tickets se rechazan."
  },
  {
   "q": "¿Qué perfil permite al usuario encontrar su escritorio en cualquier equipo del dominio?",
   "o": [
    "Local",
    "Móvil",
    "Obligatorio",
    "De invitado"
   ],
   "a": 1,
   "e": "Se guarda en el servidor y se descarga al iniciar sesión."
  },
  {
   "q": "¿Qué ventaja tiene la redirección de carpetas?",
   "o": [
    "Acelera el procesador",
    "Los documentos se guardan en el servidor y entran en las copias",
    "Elimina las contraseñas",
    "Evita usar GPO"
   ],
   "a": 1,
   "e": "Además, los perfiles pesan mucho menos."
  },
  {
   "q": "¿Cómo conectas una unidad de red solo a los miembros de un grupo?",
   "o": [
    "Con una regla del cortafuegos",
    "Con preferencias de GPO filtradas por grupo",
    "Con DHCP",
    "Con el registro de Windows"
   ],
   "a": 1,
   "e": "Las preferencias de directiva permiten segmentar por grupo."
  },
  {
   "q": "¿Qué cmdlet une un equipo al dominio?",
   "o": [
    "Join-Domain",
    "Add-Computer",
    "New-ADUser",
    "Set-Domain"
   ],
   "a": 1,
   "e": "Add-Computer -DomainName dominio -Restart."
  },
  {
   "q": "¿Qué comando conecta una unidad de red desde la línea de comandos de Windows?",
   "o": [
    "net use",
    "mount",
    "map",
    "share"
   ],
   "a": 0,
   "e": "net use letra: \\\\servidor\\recurso."
  }
 ]
});
