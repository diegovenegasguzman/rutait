TEMA("so", {
 "title": "Introducción a los sistemas operativos",
 "mins": 13,
 "intro": "Qué es un sistema operativo, qué tareas realiza por debajo, qué tipos existen y cómo organiza los archivos en el disco.",
 "sections": [
  {
   "h": "Qué es un sistema operativo",
   "html": "\n      <p>El sistema operativo (SO) es el software que se carga al arrancar y que hace de <b>intermediario entre el hardware y las aplicaciones</b>. Un navegador no necesita saber cómo funciona tu tarjeta de red: se lo pide al sistema operativo, y este se encarga.</p>\n      <p>Ejemplos: <b>Windows</b> y <b>Windows Server</b>, distribuciones <b>GNU/Linux</b> (Ubuntu, Debian, Red Hat), <b>macOS</b>, <b>Android</b> e <b>iOS</b>.</p>"
  },
  {
   "h": "Funciones principales",
   "html": "\n      <table>\n        <tr><th>Gestión de…</th><th>Qué hace</th></tr>\n        <tr><td>Procesos</td><td>Reparte el tiempo de CPU entre los programas en ejecución. Un programa en ejecución se llama <b>proceso</b>.</td></tr>\n        <tr><td>Memoria</td><td>Asigna RAM a cada proceso e impide que uno lea la memoria de otro. Si falta RAM, usa parte del disco como <b>memoria virtual</b>.</td></tr>\n        <tr><td>Archivos</td><td>Organiza los datos del disco en archivos y carpetas mediante un sistema de archivos.</td></tr>\n        <tr><td>Entrada/salida</td><td>Se comunica con los dispositivos a través de los <b>drivers</b> (controladores).</td></tr>\n        <tr><td>Seguridad</td><td>Gestiona usuarios, contraseñas y permisos.</td></tr>\n      </table>"
  },
  {
   "h": "El núcleo (kernel)",
   "html": "\n      <p>El <b>kernel</b> es la parte central del sistema operativo y la única que accede directamente al hardware. Funciona en <b>modo privilegiado</b> (modo núcleo). Las aplicaciones funcionan en <b>modo usuario</b>, con permisos limitados, y cuando necesitan algo del hardware se lo piden al kernel mediante <b>llamadas al sistema</b>.</p>\n      <p>Gracias a esta separación, si una aplicación falla, normalmente no tumba todo el sistema.</p>\n      <div class=\"note\"><b>Linux no es el sistema completo</b>Estrictamente, Linux es solo el kernel. El sistema completo que usamos (con terminal, herramientas, etc.) se llama GNU/Linux, y cada empaquetado concreto es una distribución.</div>"
  },
  {
   "h": "Tipos de sistemas operativos",
   "html": "\n      <ul>\n        <li><b>Por usuarios:</b> <i>monousuario</i> (un solo usuario a la vez) o <i>multiusuario</i> (varios usuarios simultáneos, como un servidor Linux).</li>\n        <li><b>Por tareas:</b> <i>monotarea</i> (un programa cada vez, como el antiguo MS-DOS) o <i>multitarea</i> (varios programas a la vez).</li>\n        <li><b>Por uso:</b> <i>monopuesto</i> (para un equipo de escritorio) o <i>en red</i> (ofrecen servicios a otros equipos, como Windows Server).</li>\n        <li><b>Por licencia:</b> <i>propietario</i> (Windows, macOS: no puedes ver ni modificar el código) o <i>libre</i> (GNU/Linux, con licencia GPL: puedes usarlo, estudiarlo, modificarlo y redistribuirlo).</li>\n      </ul>"
  },
  {
   "h": "Sistemas de archivos",
   "html": "\n      <p>El sistema de archivos define cómo se guardan y organizan los datos en una partición.</p>\n      <table>\n        <tr><th>Sistema</th><th>Dónde se usa</th><th>Detalle importante</th></tr>\n        <tr><td>NTFS</td><td>Windows</td><td>Permisos, cifrado y registro de cambios (journaling).</td></tr>\n        <tr><td>FAT32</td><td>Memorias USB antiguas</td><td>Archivos de 4 GB como máximo.</td></tr>\n        <tr><td>exFAT</td><td>USB y tarjetas SD</td><td>Sin el límite de 4 GB; compatible con Windows, macOS y Linux.</td></tr>\n        <tr><td>ext4</td><td>Linux</td><td>El más habitual en distribuciones Linux.</td></tr>\n      </table>\n      <p>Windows asigna una letra a cada unidad (<code>C:\\</code>, <code>D:\\</code>). Linux tiene un único árbol que empieza en la raíz <code>/</code>; los discos se <b>montan</b> en carpetas de ese árbol. Carpetas importantes: <code>/home</code> (usuarios), <code>/etc</code> (configuración) y <code>/var/log</code> (registros).</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué parte del sistema operativo accede directamente al hardware?",
   "o": [
    "La shell",
    "El kernel",
    "El escritorio",
    "El gestor de paquetes"
   ],
   "a": 1,
   "e": "El kernel funciona en modo privilegiado y es el único que habla directamente con el hardware."
  },
  {
   "q": "Quieres copiar un archivo de 6 GB a un USB formateado en FAT32. ¿Qué pasa?",
   "o": [
    "Se copia sin problemas",
    "Da error: FAT32 no admite archivos de más de 4 GB",
    "Se comprime automáticamente",
    "Se copia más lento"
   ],
   "a": 1,
   "e": "FAT32 limita cada archivo a 4 GB. Habría que formatear en exFAT o NTFS."
  },
  {
   "q": "¿Qué permite la licencia GPL de GNU/Linux?",
   "o": [
    "Usarlo solo en casa",
    "Usar, estudiar, modificar y redistribuir el software",
    "Usarlo gratis durante 30 días",
    "Nada sin pagar una licencia"
   ],
   "a": 1,
   "e": "La GPL es una licencia libre que garantiza esas cuatro libertades."
  },
  {
   "q": "Un sistema que ejecuta varios programas a la vez es…",
   "o": [
    "Monotarea",
    "Multitarea",
    "Monousuario",
    "Monopuesto"
   ],
   "a": 1,
   "e": "Multitarea significa que puede ejecutar varios procesos simultáneamente."
  },
  {
   "q": "¿Qué es un proceso?",
   "o": [
    "Un archivo del disco",
    "Un programa en ejecución",
    "Un driver",
    "Una partición"
   ],
   "a": 1,
   "e": "Cuando un programa se ejecuta, el sistema lo gestiona como un proceso."
  },
  {
   "q": "¿Qué sistema de archivos es el más habitual en Linux?",
   "o": [
    "NTFS",
    "ext4",
    "FAT32",
    "APFS"
   ],
   "a": 1,
   "e": "ext4 es el sistema de archivos por defecto en la mayoría de distribuciones."
  },
  {
   "q": "¿Cómo se comunica una aplicación con el hardware?",
   "o": [
    "Directamente",
    "A través de llamadas al sistema que gestiona el kernel",
    "A través de la BIOS",
    "No puede comunicarse"
   ],
   "a": 1,
   "e": "Las aplicaciones están en modo usuario y piden recursos al kernel mediante llamadas al sistema."
  },
  {
   "q": "¿En qué carpeta de Linux se guarda normalmente la configuración del sistema?",
   "o": [
    "/home",
    "/etc",
    "/bin",
    "/tmp"
   ],
   "a": 1,
   "e": "/etc contiene los archivos de configuración del sistema y de los servicios."
  }
 ]
});
