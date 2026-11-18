TEMA("cms", {
 "title": "Aplicaciones web y gestores de contenidos",
 "mins": 14,
 "intro": "Qué es una aplicación web, qué piezas necesita para funcionar y cómo se instala, se administra y se protege un gestor de contenidos como WordPress.",
 "sections": [
  {
   "h": "Qué es una aplicación web",
   "html": "\n<p>Una aplicación web se usa desde el navegador: no hay que instalar nada en el equipo del usuario. Webmail, tiendas online, campus virtuales o la intranet de una empresa son aplicaciones web.</p>\n<ul>\n<li><b>Ventajas:</b> funciona en cualquier sistema operativo, se actualiza en un único sitio (el servidor) y se puede usar desde cualquier lugar.</li>\n<li><b>Inconvenientes:</b> depende de la conexión y, si está en Internet, está expuesta a ataques.</li>\n</ul>"
  },
  {
   "h": "Las piezas: la pila LAMP",
   "html": "\n<p>Para funcionar, una aplicación web típica necesita varias capas trabajando juntas:</p>\n<table>\n<tr><th>Capa</th><th>Función</th><th>Ejemplos</th></tr>\n<tr><td>Sistema operativo</td><td>Base del servidor</td><td><b>L</b>inux, Windows Server</td></tr>\n<tr><td>Servidor web</td><td>Recibe las peticiones del navegador y devuelve las páginas</td><td><b>A</b>pache, Nginx, IIS</td></tr>\n<tr><td>Base de datos</td><td>Guarda usuarios, entradas, productos…</td><td><b>M</b>ySQL, MariaDB</td></tr>\n<tr><td>Lenguaje de servidor</td><td>Genera las páginas con los datos</td><td><b>P</b>HP, Python, Java</td></tr>\n</table>\n<p>Con las iniciales de Linux, Apache, MySQL y PHP se forma <b>LAMP</b>. En Windows se habla de <b>WAMP</b>, y <b>XAMPP</b> es un paquete que instala todo de una vez para hacer pruebas en local.</p>"
  },
  {
   "h": "Gestores de contenidos (CMS)",
   "html": "\n<p>Un CMS permite crear y mantener una web sin programar. Los más conocidos:</p>\n<ul>\n<li><b>WordPress:</b> blogs y webs corporativas. Es el más usado del mundo y está escrito en PHP.</li>\n<li><b>Joomla</b> y <b>Drupal:</b> webs más complejas.</li>\n<li><b>Moodle:</b> plataforma de aprendizaje (LMS) para cursos online.</li>\n<li><b>WooCommerce</b> (para WordPress) y <b>PrestaShop:</b> tiendas online.</li>\n</ul>\n<p>Conceptos clave de WordPress: los <b>temas</b> controlan el aspecto; los <b>plugins</b> añaden funciones (formularios, SEO, copias de seguridad); los <b>roles</b> limitan lo que puede hacer cada usuario:</p>\n<table>\n<tr><th>Rol</th><th>Puede…</th></tr>\n<tr><td>Administrador</td><td>Todo: plugins, temas, usuarios y ajustes</td></tr>\n<tr><td>Editor</td><td>Publicar y editar las entradas de todos</td></tr>\n<tr><td>Autor</td><td>Publicar y editar sus propias entradas</td></tr>\n<tr><td>Colaborador</td><td>Escribir entradas, pero no publicarlas</td></tr>\n<tr><td>Suscriptor</td><td>Solo gestionar su perfil</td></tr>\n</table>\n<p>Un <b>plugin</b> (o extensión) añade funcionalidades al CMS sin programar: un formulario de contacto, una tienda, copias de seguridad… El <b>tema</b>, en cambio, solo cambia el aspecto.</p>\n"
  },
  {
   "h": "Instalar WordPress",
   "html": "\n<p>WordPress es el CMS más usado y se instala sobre la pila LAMP que acabas de ver. Estos son los pasos.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Instala el servidor web, PHP y MySQL o MariaDB.</span></div>\n<div class=\"stepn\"><i>2</i><span>Crea una base de datos y un usuario con permisos solo sobre ella.</span></div>\n<div class=\"stepn\"><i>3</i><span>Descarga WordPress y copia sus archivos en la carpeta de la web (por ejemplo <code>/var/www/html</code>).</span></div>\n<div class=\"stepn\"><i>4</i><span>Configura la conexión a la base de datos en <code>wp-config.php</code> (o deja que lo haga el instalador).</span></div>\n<div class=\"stepn\"><i>5</i><span>Abre la web en el navegador y completa el asistente: título, usuario administrador y contraseña.</span></div>\n</div>\n<div class=\"note\"><b>Nunca uses «admin» como usuario</b>Es el primer nombre que prueban los ataques automáticos de fuerza bruta.</div>"
  },
  {
   "h": "Mantenimiento y seguridad",
   "html": "\n<p>Una web WordPress sin mantener acaba hackeada tarde o temprano. Mantenerla consiste sobre todo en actualizar y en quitar lo que no se usa.</p>\n<ul>\n<li><b>Actualiza</b> el núcleo, los temas y los plugins. La mayoría de webs WordPress atacadas lo son por plugins desactualizados.</li>\n<li><b>Borra</b> los plugins y temas que no uses.</li>\n<li><b>Copias de seguridad</b> de las dos partes: los <b>archivos</b> (temas, plugins y contenido subido) y la <b>base de datos</b> (entradas, usuarios y ajustes). Una sin la otra no sirve.</li>\n<li>Usa <b>HTTPS</b>, contraseñas fuertes y, si es posible, verificación en dos pasos para los administradores.</li>\n</ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué significan las siglas LAMP?",
   "o": [
    "Linux, Apache, MySQL, PHP",
    "Local, Apache, Mail, Proxy",
    "Linux, Access, MongoDB, Python",
    "LAN, Apache, Moodle, PHP"
   ],
   "a": 0,
   "e": "Es la pila clásica de servidor web libre."
  },
  {
   "q": "¿En qué lenguaje está escrito WordPress?",
   "o": [
    "Java",
    "Python",
    "PHP",
    "C#"
   ],
   "a": 2,
   "e": "WordPress está hecho en PHP y usa MySQL o MariaDB."
  },
  {
   "q": "¿En qué archivo guarda WordPress los datos de conexión a la base de datos?",
   "o": [
    "index.php",
    "wp-config.php",
    ".htaccess",
    "config.xml"
   ],
   "a": 1,
   "e": "wp-config.php contiene el nombre de la base de datos, el usuario y la contraseña."
  },
  {
   "q": "¿Qué incluye una copia de seguridad completa de WordPress?",
   "o": [
    "Solo la base de datos",
    "Solo los archivos",
    "Los archivos y la base de datos",
    "Solo los plugins"
   ],
   "a": 2,
   "e": "El contenido está en la base de datos y los temas, plugins e imágenes, en archivos."
  },
  {
   "q": "¿Para qué sirve un plugin?",
   "o": [
    "Para cambiar el aspecto",
    "Para añadir funcionalidades",
    "Para crear usuarios",
    "Para alojar la web"
   ],
   "a": 1,
   "e": "Los plugins amplían lo que hace WordPress; el aspecto lo controla el tema."
  },
  {
   "q": "¿Qué es Moodle?",
   "o": [
    "Una tienda online",
    "Una plataforma de aprendizaje (LMS)",
    "Un servidor web",
    "Una base de datos"
   ],
   "a": 1,
   "e": "Moodle se usa para cursos online; muchos centros educativos lo utilizan."
  },
  {
   "q": "¿Qué rol de WordPress puede publicar sus propias entradas, pero no gestionar plugins?",
   "o": [
    "Administrador",
    "Autor",
    "Suscriptor",
    "Colaborador"
   ],
   "a": 1,
   "e": "El colaborador escribe pero no publica; el autor sí publica lo suyo."
  },
  {
   "q": "¿Cuál es la causa más habitual de que hackeen una web WordPress?",
   "o": [
    "Usar Linux",
    "Plugins y temas desactualizados",
    "Tener muchas visitas",
    "Usar HTTPS"
   ],
   "a": 1,
   "e": "Las vulnerabilidades conocidas en plugins sin actualizar son la vía más común."
  }
 ]
});
