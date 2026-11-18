TEMA("linux-comandos", {
 "title": "La terminal de Linux",
 "mins": 16,
 "intro": "Los comandos que necesitas para moverte, gestionar archivos, cambiar permisos, administrar usuarios e instalar programas desde la terminal de Linux.",
 "sections": [
  {
   "h": "La terminal y las rutas",
   "html": "\n<p>Al abrir una terminal ves el <b>prompt</b>, por ejemplo <code>ana@servidor:~$</code>. Te dice el usuario, el equipo y la carpeta actual. El símbolo final indica quién eres:</p>\n<ul>\n<li><code>$</code>: usuario normal.</li>\n<li><code>#</code>: <b>root</b>, el administrador. Cuidado: puede borrar cualquier cosa.</li>\n</ul>\n<p>Las rutas pueden ser:</p>\n<ul>\n<li><b>Absolutas:</b> empiezan en la raíz. <code>/home/ana/documentos</code></li>\n<li><b>Relativas:</b> parten de la carpeta actual. <code>documentos/notas.txt</code></li>\n</ul>\n<p>Atajos: <code>~</code> es tu carpeta personal, <code>.</code> la carpeta actual y <code>..</code> la carpeta de arriba. Pulsa <b>Tab</b> para autocompletar nombres; te ahorrará muchos errores.</p>"
  },
  {
   "h": "Moverse y ver archivos",
   "html": "\n<p>Estos son los comandos para saber dónde estás, moverte entre carpetas y ver qué hay dentro. Son los que más vas a escribir.</p>\n<table>\n<tr><th>Comando</th><th>Qué hace</th></tr>\n<tr><td><code>pwd</code></td><td>Muestra en qué carpeta estás.</td></tr>\n<tr><td><code>ls -la</code></td><td>Lista los archivos: <code>-l</code> con detalles y <code>-a</code> incluyendo los ocultos (los que empiezan por punto).</td></tr>\n<tr><td><code>cd /etc</code></td><td>Cambia de carpeta. <code>cd</code> solo te lleva a tu carpeta personal; <code>cd ..</code>, a la de arriba.</td></tr>\n<tr><td><code>cat archivo</code></td><td>Muestra el contenido de un archivo.</td></tr>\n<tr><td><code>less archivo</code></td><td>Lo muestra página a página (sal con <code>q</code>).</td></tr>\n<tr><td><code>tail -f /var/log/syslog</code></td><td>Muestra el final de un archivo y sigue mostrando lo que se añade. Perfecto para ver logs en directo.</td></tr>\n<tr><td><code>man comando</code></td><td>Abre el manual del comando.</td></tr>\n</table>"
  },
  {
   "h": "Gestionar archivos y buscar",
   "html": "\n<p>Con estos comandos creas, copias, mueves y borras archivos, y buscas lo que necesites. Ojo: en la terminal no hay papelera.</p>\n<table>\n<tr><th>Comando</th><th>Qué hace</th></tr>\n<tr><td><code>mkdir -p a/b/c</code></td><td>Crea carpetas; <code>-p</code> crea también las intermedias.</td></tr>\n<tr><td><code>touch nota.txt</code></td><td>Crea un archivo vacío.</td></tr>\n<tr><td><code>cp -r origen destino</code></td><td>Copia; <code>-r</code> para carpetas.</td></tr>\n<tr><td><code>mv viejo nuevo</code></td><td>Mueve o renombra.</td></tr>\n<tr><td><code>rm -r carpeta</code></td><td>Borra. No hay papelera: lo borrado no se recupera.</td></tr>\n<tr><td><code>find / -name \"*.conf\"</code></td><td>Busca archivos por nombre.</td></tr>\n<tr><td><code>grep \"error\" archivo</code></td><td>Busca un texto dentro de archivos.</td></tr>\n</table>\n<p>Con la <b>tubería</b> <code>|</code> la salida de un comando pasa a ser la entrada de otro: <code>ls -la /etc | grep ssh</code>. Con <code>&gt;</code> guardas la salida en un archivo y con <code>&gt;&gt;</code> la añades al final.</p>"
  },
  {
   "h": "Permisos",
   "html": "\n<p>Con <code>ls -l</code> ves algo como <code>-rwxr-xr--  1 ana  profes  informe.sh</code>. Los 9 caracteres de permisos se leen en tres grupos:</p>\n<table>\n<tr><th>Propietario (ana)</th><th>Grupo (profes)</th><th>Otros</th></tr>\n<tr><td><code>rwx</code>: leer, escribir y ejecutar</td><td><code>r-x</code>: leer y ejecutar</td><td><code>r--</code>: solo leer</td></tr>\n</table>\n<p>En modo numérico, cada permiso vale: <b>r = 4, w = 2, x = 1</b>. Se suman por grupo:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Propietario rwx = 4+2+1 = <b>7</b></span></div>\n<div class=\"stepn\"><i>2</i><span>Grupo r-x = 4+0+1 = <b>5</b></span></div>\n<div class=\"stepn\"><i>3</i><span>Otros r-- = 4+0+0 = <b>4</b> → <code>chmod 754 informe.sh</code></span></div>\n</div>\n<p>También en modo simbólico: <code>chmod u+x script.sh</code> (añade ejecución al propietario) o <code>chmod o-r secreto.txt</code> (quita lectura a otros). Para cambiar el propietario: <code>chown ana:profes archivo</code>.</p>"
  },
  {
   "h": "Usuarios, paquetes y servicios",
   "html": "\n<p>Algunas tareas solo las puede hacer el administrador: crear usuarios, instalar programas o arrancar servicios. Para eso se usa sudo.</p>\n<ul>\n<li><code>sudo comando</code>: ejecuta un comando como administrador, si tu usuario está autorizado.</li>\n<li><code>sudo adduser luis</code>: crea un usuario. <code>passwd</code> cambia contraseñas. <code>sudo usermod -aG grupo luis</code> lo añade a un grupo.</li>\n</ul>\n<p>En Debian y Ubuntu los programas se instalan con el gestor de paquetes <b>apt</b>:</p>\n<pre><code>sudo apt update          <span class=\"c\"># actualiza la lista de paquetes disponibles</span>\nsudo apt upgrade         <span class=\"c\"># instala las actualizaciones</span>\nsudo apt install nginx   <span class=\"c\"># instala un programa</span></code></pre>\n<p>Los servicios se gestionan con <code>systemctl</code>:</p>\n<pre><code>systemctl status ssh       <span class=\"c\"># ¿está funcionando?</span>\nsudo systemctl restart ssh <span class=\"c\"># reiniciarlo</span>\nsudo systemctl enable ssh  <span class=\"c\"># que arranque al iniciar el equipo</span></code></pre>\n<div class=\"note\"><b>Red Hat y derivadas</b>En Red Hat, Fedora o Rocky Linux el gestor de paquetes es <code>dnf</code> en lugar de <code>apt</code>. El resto de comandos es igual.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué permisos da chmod 755?",
   "o": [
    "rwxr-xr-x",
    "rwxrwxrwx",
    "rw-r--r--",
    "rwxr-----"
   ],
   "a": 0,
   "e": "7 = rwx para el propietario y 5 = r-x para grupo y otros."
  },
  {
   "q": "¿Qué comando muestra la carpeta en la que estás?",
   "o": [
    "ls",
    "cd",
    "pwd",
    "whoami"
   ],
   "a": 2,
   "e": "pwd (print working directory) muestra la ruta actual."
  },
  {
   "q": "¿Qué hace la opción -a de ls?",
   "o": [
    "Ordena alfabéticamente",
    "Muestra también los archivos ocultos",
    "Muestra solo carpetas",
    "Muestra el tamaño"
   ],
   "a": 1,
   "e": "Los archivos que empiezan por punto están ocultos; -a los muestra."
  },
  {
   "q": "El prompt termina en #. ¿Qué significa?",
   "o": [
    "Que hay un error",
    "Que estás como root",
    "Que estás en /home",
    "Que no hay conexión"
   ],
   "a": 1,
   "e": "# indica que la sesión es del administrador (root)."
  },
  {
   "q": "¿Qué permisos da chmod 640?",
   "o": [
    "Propietario lee y escribe; grupo lee; otros nada",
    "Todos leen y escriben",
    "Propietario todo; resto nada",
    "Propietario lee; grupo escribe; otros ejecutan"
   ],
   "a": 0,
   "e": "6 = rw-, 4 = r-- y 0 = ---."
  },
  {
   "q": "¿Qué comando actualiza la lista de paquetes disponibles en Ubuntu?",
   "o": [
    "apt upgrade",
    "apt update",
    "apt install",
    "apt list"
   ],
   "a": 1,
   "e": "update descarga la lista; upgrade instala las actualizaciones."
  },
  {
   "q": "¿Qué comando busca un texto dentro de los archivos?",
   "o": [
    "find",
    "grep",
    "cat",
    "locate"
   ],
   "a": 1,
   "e": "grep busca texto; find busca archivos por nombre u otras características."
  },
  {
   "q": "¿Cómo haces que un servicio arranque automáticamente al encender el equipo?",
   "o": [
    "systemctl start",
    "systemctl enable",
    "systemctl status",
    "service on"
   ],
   "a": 1,
   "e": "enable lo activa en el arranque; start solo lo inicia ahora."
  }
 ]
});
