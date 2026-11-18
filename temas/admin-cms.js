TEMA("admin-cms", {
 "title": "Administrar y adaptar un gestor de contenidos",
 "mins": 12,
 "intro": "El trabajo diario con un CMS ya instalado: usuarios y roles, actualizaciones, copias, rendimiento, seguridad y cómo adaptarlo con temas hijos y plugins propios.",
 "sections": [
  {
   "h": "Administración diaria",
   "html": "\n<p>Instalar un CMS es solo el principio. El trabajo de verdad es mantenerlo: decidir quién puede hacer qué, actualizarlo sin romper la web y tener copias.</p>\n<ul>\n<li><b>Usuarios y roles:</b> cada persona con el rol mínimo que necesita.</li>\n<li><b>Actualizaciones:</b> núcleo, temas y plugins. Primero en un entorno de pruebas (<b>staging</b>) si la web es crítica.</li>\n<li><b>Copias:</b> archivos y base de datos, automatizadas y guardadas fuera del servidor.</li>\n<li><b>Rendimiento:</b> caché de páginas, compresión de imágenes y una CDN.</li>\n<li><b>Registro de actividad:</b> quién publicó o cambió qué.</li>\n</ul>\n<p>Con <b>WP-CLI</b> se administra WordPress desde la terminal: <code>wp plugin update --all</code>, <code>wp user list</code>, <code>wp db export copia.sql</code>.</p>"
  },
  {
   "h": "Seguridad",
   "html": "\n<p>Un CMS muy usado, como WordPress, es un objetivo habitual de ataques automáticos. La mayoría se evitan con unas pocas medidas básicas.</p>\n<ul>\n<li>Contraseñas fuertes y <b>verificación en dos pasos</b> para los administradores.</li>\n<li>Limitar los intentos de inicio de sesión.</li>\n<li>Permisos de archivos correctos: el servidor web no debe poder escribir en todos los archivos.</li>\n<li>Prefijo de tablas distinto del predeterminado y el editor de archivos del panel desactivado (<code>DISALLOW_FILE_EDIT</code> en <code>wp-config.php</code>).</li>\n<li>Un cortafuegos de aplicaciones web (<b>WAF</b>) filtra ataques conocidos.</li>\n</ul>",
   "check": {
    "q": "¿Dónde conviene probar una actualización importante antes de aplicarla a la web real?",
    "o": [
     "Directamente en producción",
     "En un entorno de pruebas (staging)",
     "No hace falta probar",
     "En el móvil"
    ],
    "a": 1,
    "e": "Así, si algo se rompe, no afecta a los usuarios."
   }
  },
  {
   "h": "Adaptar el CMS",
   "html": "\n<p>Tarde o temprano el cliente pide un cambio que el CMS no trae. La regla es no tocar nunca los archivos originales, porque la siguiente actualización borraría tus cambios.</p>\n<ul>\n<li><b>Tema hijo:</b> hereda todo del tema original y solo contiene tus cambios. Si actualizas el tema padre, tus cambios no se pierden. Nunca se edita el tema original.</li>\n<li><b>Plugins propios:</b> la funcionalidad nueva va en un plugin, no en el tema, para que no dependa del diseño.</li>\n<li><b>Hooks</b> (ganchos): WordPress permite enganchar tu código en puntos concretos con <code>add_action()</code> y <code>add_filter()</code>, sin tocar el núcleo.</li>\n<li><b>Tipos de contenido personalizados</b> y campos propios para webs que no son un blog (catálogos, fichas…).</li>\n</ul>\n<pre><code><span class=\"c\">// functions.php del tema hijo: añadir un aviso al final de cada entrada</span>\nadd_filter('the_content', function($c) {\n    return $c . '&lt;p class=\"aviso\"&gt;¿Dudas? Escríbenos.&lt;/p&gt;';\n});</code></pre>\n<div class=\"caso\"><b>Caso real</b>Alguien cambió directamente los archivos del tema. Tras actualizarlo, la web perdió todas sus personalizaciones. Con un tema hijo no habría pasado.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué herramienta administra WordPress desde la terminal?",
   "o": [
    "WP-CLI",
    "phpMyAdmin",
    "FileZilla",
    "Composer"
   ],
   "a": 0,
   "e": "Permite actualizar, exportar la base de datos y gestionar usuarios."
  },
  {
   "q": "¿Qué es un tema hijo?",
   "o": [
    "Un tema gratuito",
    "Un tema que hereda de otro y contiene solo las modificaciones",
    "Un tema para móviles",
    "Un plugin"
   ],
   "a": 1,
   "e": "Protege tus cambios al actualizar el tema padre."
  },
  {
   "q": "¿Dónde debe ir una funcionalidad nueva que no depende del diseño?",
   "o": [
    "En el tema",
    "En un plugin",
    "En el núcleo",
    "En la base de datos"
   ],
   "a": 1,
   "e": "Así sigue funcionando aunque cambies de tema."
  },
  {
   "q": "¿Qué son los hooks de WordPress?",
   "o": [
    "Virus",
    "Puntos donde enganchar tu código sin modificar el núcleo",
    "Tipos de usuario",
    "Copias de seguridad"
   ],
   "a": 1,
   "e": "add_action y add_filter."
  },
  {
   "q": "¿Qué hace DISALLOW_FILE_EDIT en wp-config.php?",
   "o": [
    "Bloquea el inicio de sesión",
    "Desactiva el editor de archivos del panel",
    "Borra la caché",
    "Activa HTTPS"
   ],
   "a": 1,
   "e": "Si roban una cuenta de administrador, no podrán editar código desde el panel."
  },
  {
   "q": "¿Qué es un WAF?",
   "o": [
    "Un tipo de RAID",
    "Un cortafuegos de aplicaciones web",
    "Un formato de imagen",
    "Un servidor DNS"
   ],
   "a": 1,
   "e": "Filtra ataques como inyección SQL o XSS."
  }
 ]
});
