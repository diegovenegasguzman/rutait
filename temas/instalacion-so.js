TEMA("instalacion-so", {
 "title": "Instalación de sistemas operativos y arranque",
 "mins": 16,
 "intro": "Todo lo que pasa antes de ver el escritorio: cómo planificar una instalación, cómo particionar con MBR o GPT, cómo arranca un equipo UEFI y cómo se instalan sistemas en cientos de equipos a la vez.",
 "sections": [
  {
   "h": "Planificar la instalación",
   "html": "\n<p>Antes de instalar, hay que decidir varias cosas:</p>\n<ul>\n<li><b>Requisitos:</b> que el hardware cumpla los mínimos (Windows 11, por ejemplo, exige TPM 2.0 y Secure Boot).</li>\n<li><b>Licencia:</b> qué edición y cómo se activará.</li>\n<li><b>Datos:</b> si hay algo que conservar, se hace copia antes.</li>\n<li><b>Tipo de instalación:</b></li>\n</ul>\n<table>\n<tr><th>Tipo</th><th>Cuándo se usa</th></tr>\n<tr><td>Limpia</td><td>Disco vacío o formateado. Es la más fiable</td></tr>\n<tr><td>Actualización</td><td>Sobre un sistema anterior, conservando programas y datos</td></tr>\n<tr><td>Desatendida</td><td>Las respuestas del asistente están en un archivo; no hay que estar delante</td></tr>\n<tr><td>Por red (PXE)</td><td>El equipo arranca desde la red y descarga el instalador o una imagen</td></tr>\n</table>"
  },
  {
   "h": "Particiones: MBR y GPT",
   "html": "\n<p>Antes de instalar hay que dividir el disco en <b>particiones</b>. Hay dos esquemas:</p>\n<table>\n<tr><th></th><th>MBR (antiguo)</th><th>GPT (actual)</th></tr>\n<tr><td>Particiones</td><td>4 primarias (o 3 + una extendida con lógicas dentro)</td><td>Hasta 128 en Windows</td></tr>\n<tr><td>Tamaño máximo de disco</td><td>2 TB</td><td>Prácticamente ilimitado</td></tr>\n<tr><td>Arranque</td><td>BIOS (o UEFI en modo heredado)</td><td>UEFI</td></tr>\n<tr><td>Fiabilidad</td><td>Una única tabla de particiones</td><td>Guarda una copia de la tabla al final del disco</td></tr>\n</table>\n<p>En Linux, además de la partición raíz (<code>/</code>), es habitual una de <b>intercambio (swap)</b>, aunque hoy también se usa un archivo de intercambio. Muchos administradores separan <code>/home</code> para poder reinstalar el sistema sin tocar los datos de los usuarios.</p>\n<p><b>MBR</b> admite como máximo <b>4 particiones primarias</b> (o 3 y una extendida con particiones lógicas dentro) y discos de hasta <b>2 TB</b>. Por encima de eso, o en equipos UEFI, se usa <b>GPT</b>.</p>\n",
   "check": {
    "q": "Tienes un disco de 4 TB y quieres aprovecharlo entero. ¿Qué esquema de particiones usas?",
    "o": [
     "MBR",
     "GPT",
     "Cualquiera",
     "FAT32"
    ],
    "a": 1,
    "e": "MBR solo gestiona hasta 2 TB; con GPT puedes usar todo el disco."
   }
  },
  {
   "h": "Cómo arranca un equipo UEFI",
   "html": "\n<p>Entender el arranque ayuda a resolver los «no arranca» más comunes. Con UEFI el proceso sigue estos pasos.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>La <b>UEFI</b> hace el POST y busca en el orden de arranque configurado.</span></div>\n<div class=\"stepn\"><i>2</i><span>Lee la <b>partición del sistema EFI (ESP)</b>: una partición pequeña en FAT32 donde está el gestor de arranque.</span></div>\n<div class=\"stepn\"><i>3</i><span>Ejecuta el <b>gestor de arranque</b>: Windows Boot Manager o GRUB en Linux.</span></div>\n<div class=\"stepn\"><i>4</i><span>El gestor carga el <b>kernel</b> del sistema operativo, que arranca el resto.</span></div>\n</div>\n<p><b>Secure Boot</b> comprueba que el gestor de arranque está firmado digitalmente, para impedir que un malware se cargue antes que el sistema.</p>\n<p>En los equipos antiguos con BIOS, el arranque se leía del <b>MBR</b>: los primeros 512 bytes del disco.</p>\n<div class=\"caso\"><b>Caso real</b>Instalas Linux en un USB en modo UEFI, pero la UEFI del equipo está configurada en modo heredado (CSM). El USB no aparece como opción de arranque. El modo del instalador y el de la UEFI tienen que coincidir.</div>",
   "check": {
    "q": "¿En qué partición busca la UEFI el gestor de arranque?",
    "o": [
     "En la partición swap",
     "En la partición del sistema EFI (ESP), en FAT32",
     "En /home",
     "En el MBR"
    ],
    "a": 1,
    "e": "La ESP contiene los gestores de arranque de los sistemas instalados."
   }
  },
  {
   "h": "Arranque dual",
   "html": "\n<p>Para tener Windows y Linux en el mismo equipo:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Instala <b>primero Windows</b>. Su instalador no reconoce otros sistemas y podría tomar el control del arranque.</span></div>\n<div class=\"stepn\"><i>2</i><span>Deja espacio sin particionar, o reduce la partición de Windows desde «Administración de discos».</span></div>\n<div class=\"stepn\"><i>3</i><span>Instala <b>Linux</b> en ese espacio. <b>GRUB</b> detectará Windows y te dejará elegir al arrancar.</span></div>\n</div>"
  },
  {
   "h": "Instalación en muchos equipos",
   "html": "\n<p>Instalar a mano está bien para un equipo. Para veinte se automatiza.</p>\n<ul>\n<li><b>Archivos de respuesta:</b> <code>autounattend.xml</code> en Windows; <b>preseed</b> en Debian/Ubuntu o <b>kickstart</b> en Red Hat. Contienen idioma, particiones, usuarios… y la instalación se hace sola.</li>\n<li><b>Arranque por red (PXE):</b> el equipo pide al DHCP la dirección de un servidor de despliegue y descarga desde él el instalador. En Windows Server, el servicio es <b>WDS</b>.</li>\n<li><b>Imágenes:</b> se prepara un equipo modelo, se generaliza con Sysprep y se clona.</li>\n</ul>\n<p>Después de instalar viene la <b>postinstalación</b>: drivers, actualizaciones, unirse al dominio, programas y una revisión final.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuántas particiones primarias admite MBR?",
   "o": [
    "2",
    "4",
    "128",
    "Ilimitadas"
   ],
   "a": 1,
   "e": "MBR admite 4 primarias, o 3 primarias y una extendida con lógicas."
  },
  {
   "q": "¿Cuál es el tamaño máximo de disco que gestiona MBR?",
   "o": [
    "500 GB",
    "2 TB",
    "16 TB",
    "Sin límite"
   ],
   "a": 1,
   "e": "Por encima de 2 TB hay que usar GPT."
  },
  {
   "q": "¿En qué sistema de archivos está la partición EFI?",
   "o": [
    "NTFS",
    "ext4",
    "FAT32",
    "exFAT"
   ],
   "a": 2,
   "e": "La especificación UEFI exige FAT32 para la ESP."
  },
  {
   "q": "¿Qué comprueba Secure Boot?",
   "o": [
    "Que la contraseña sea segura",
    "Que el gestor de arranque esté firmado",
    "Que el disco no tenga errores",
    "Que haya antivirus"
   ],
   "a": 1,
   "e": "Impide que se cargue código de arranque no firmado, como algunos rootkits."
  },
  {
   "q": "Para hacer arranque dual Windows + Linux, ¿qué se instala primero?",
   "o": [
    "Linux",
    "Windows",
    "Da igual",
    "Los dos a la vez"
   ],
   "a": 1,
   "e": "Windows sobrescribe el arranque sin tener en cuenta otros sistemas; GRUB sí detecta Windows."
  },
  {
   "q": "¿Qué gestor de arranque usan la mayoría de distribuciones Linux?",
   "o": [
    "Windows Boot Manager",
    "GRUB",
    "LILO",
    "UEFI"
   ],
   "a": 1,
   "e": "GRUB permite elegir entre los sistemas instalados."
  },
  {
   "q": "¿Qué archivo permite una instalación desatendida de Windows?",
   "o": [
    "boot.ini",
    "autounattend.xml",
    "grub.cfg",
    "preseed.cfg"
   ],
   "a": 1,
   "e": "preseed y kickstart cumplen la misma función en Linux."
  },
  {
   "q": "¿Qué permite el arranque PXE?",
   "o": [
    "Arrancar desde un USB",
    "Arrancar desde la red para instalar o desplegar sistemas",
    "Arrancar más rápido",
    "Arrancar sin disco duro para siempre"
   ],
   "a": 1,
   "e": "El equipo descarga el instalador o la imagen desde un servidor."
  }
 ]
});
