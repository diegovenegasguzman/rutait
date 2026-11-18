TEMA("servidor-web", {
 "title": "Servidores web y despliegue",
 "mins": 17,
 "intro": "Cómo funciona HTTP, cómo se configuran Apache y Nginx para alojar varios sitios, cómo se activa HTTPS y cómo se ponen en producción las aplicaciones, incluidos los contenedores Docker.",
 "sections": [
  {
   "h": "El protocolo HTTP",
   "html": "\n<p>El navegador envía una <b>petición</b> y el servidor devuelve una <b>respuesta</b> con un código de estado y el contenido.</p>\n<table>\n<tr><th>Método</th><th>Uso</th></tr>\n<tr><td>GET</td><td>Pedir un recurso. Los datos van en la URL (<code>?id=5</code>).</td></tr>\n<tr><td>POST</td><td>Enviar datos, por ejemplo un formulario. Van en el cuerpo de la petición.</td></tr>\n<tr><td>PUT / PATCH</td><td>Modificar un recurso.</td></tr>\n<tr><td>DELETE</td><td>Borrar un recurso.</td></tr>\n</table>\n<table>\n<tr><th>Código</th><th>Significado</th></tr>\n<tr><td>200</td><td>OK</td></tr>\n<tr><td>301 / 302</td><td>Redirección permanente / temporal</td></tr>\n<tr><td>401 / 403</td><td>Hace falta autenticarse / acceso prohibido</td></tr>\n<tr><td>404</td><td>No encontrado</td></tr>\n<tr><td>500</td><td>Error interno del servidor</td></tr>\n<tr><td>503</td><td>Servicio no disponible (sobrecargado o en mantenimiento)</td></tr>\n</table>\n<p>Regla rápida: los <b>4xx</b> son errores del cliente y los <b>5xx</b>, del servidor.</p>\n<p>Los códigos más habituales: <b>200</b> (correcto), <b>301</b> (movido), <b>403</b> (prohibido), <b>404</b> (el recurso no existe) y <b>500</b> (error en el servidor).</p>\n"
  },
  {
   "h": "Apache y Nginx",
   "html": "\n<p>Apache y Nginx son los dos servidores web más usados. Hacen lo mismo, pero con enfoques distintos.</p>\n<ul>\n<li><b>Apache:</b> muy configurable mediante módulos; permite configuración por carpeta con archivos <code>.htaccess</code>.</li>\n<li><b>Nginx:</b> muy eficiente con muchas conexiones simultáneas. Se usa mucho como <b>proxy inverso</b>: recibe las peticiones y las reenvía a la aplicación que hay detrás.</li>\n</ul>\n<p>En Debian y Ubuntu, la web por defecto está en <code>/var/www/html</code> (el <b>DocumentRoot</b>) y la configuración, en <code>/etc/apache2</code> o <code>/etc/nginx</code>. Antes de reiniciar, comprueba que no hay errores: <code>apachectl configtest</code> o <code>nginx -t</code>.</p>"
  },
  {
   "h": "Hosts virtuales",
   "html": "\n<p>Un mismo servidor, con una sola IP, puede alojar muchas webs. El navegador envía en cada petición la cabecera <code>Host</code> con el nombre del sitio, y el servidor elige qué web servir.</p>\n<pre><code><span class=\"c\"># /etc/apache2/sites-available/tienda.conf</span>\n&lt;VirtualHost *:80&gt;\n    ServerName tienda.ejemplo.com\n    DocumentRoot /var/www/tienda\n    ErrorLog ${APACHE_LOG_DIR}/tienda-error.log\n&lt;/VirtualHost&gt;</code></pre>\n<pre><code>sudo a2ensite tienda.conf\nsudo systemctl reload apache2</code></pre>\n<p>Para que funcione, el nombre <code>tienda.ejemplo.com</code> debe apuntar a la IP del servidor en el DNS (o en el archivo <code>hosts</code> si son pruebas).</p>"
  },
  {
   "h": "HTTPS y certificados",
   "html": "\n<p><b>HTTPS</b> es HTTP cifrado con <b>TLS</b>. Usa el puerto <b>443</b> y necesita un <b>certificado</b> que demuestre que el servidor es quien dice ser. El certificado lo firma una <b>autoridad de certificación (CA)</b> en la que confían los navegadores.</p>\n<ul>\n<li><b>Let's Encrypt</b> emite certificados gratuitos. Con <code>certbot</code> se obtienen y se renuevan automáticamente: <code>sudo certbot --apache -d tienda.ejemplo.com</code>.</li>\n<li>Un certificado <b>autofirmado</b> cifra, pero el navegador muestra un aviso porque nadie lo avala. Solo sirve para pruebas.</li>\n<li>Conviene redirigir todo el tráfico del puerto 80 al 443.</li>\n</ul>"
  },
  {
   "h": "Desplegar aplicaciones y Docker",
   "html": "\n<p>Las aplicaciones no se prueban en producción. Lo habitual es tener tres entornos: <b>desarrollo</b>, <b>pruebas</b> (preproducción) y <b>producción</b>.</p>\n<ul>\n<li>Las aplicaciones <b>Java</b> se despliegan en un servidor de aplicaciones como <b>Tomcat</b> (archivos <code>.war</code>).</li>\n<li>Las aplicaciones <b>PHP</b> suelen ejecutarse con <b>PHP-FPM</b> detrás de Nginx o Apache.</li>\n</ul>\n<p><b>Docker</b> empaqueta una aplicación con todo lo que necesita en una <b>imagen</b>. Al ejecutarla se crea un <b>contenedor</b>, que funciona igual en cualquier servidor.</p>\n<pre><code><span class=\"c\"># Dockerfile</span>\n<span class=\"k\">FROM</span> nginx:alpine\n<span class=\"k\">COPY</span> ./web /usr/share/nginx/html</code></pre>\n<pre><code>docker build -t miweb .\ndocker run -d -p 8080:80 miweb   <span class=\"c\"># puerto 8080 del servidor → 80 del contenedor</span>\ndocker ps                         <span class=\"c\"># contenedores en marcha</span></code></pre>\n<p>Con <b>Docker Compose</b> se definen en un archivo varios contenedores que trabajan juntos (por ejemplo, la web y su base de datos).</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué código HTTP indica que el recurso no existe?",
   "o": [
    "200",
    "301",
    "404",
    "500"
   ],
   "a": 2,
   "e": "404 Not Found."
  },
  {
   "q": "¿Qué código indica un error interno del servidor?",
   "o": [
    "403",
    "404",
    "500",
    "301"
   ],
   "a": 2,
   "e": "Los 5xx son errores del servidor; 500 es el genérico."
  },
  {
   "q": "¿Cómo se alojan varias webs en un servidor con una sola IP?",
   "o": [
    "Con varias tarjetas de red",
    "Con hosts virtuales",
    "Con un RAID",
    "No es posible"
   ],
   "a": 1,
   "e": "El servidor elige el sitio según la cabecera Host de la petición."
  },
  {
   "q": "¿Qué puerto usa HTTPS?",
   "o": [
    "80",
    "8080",
    "443",
    "22"
   ],
   "a": 2,
   "e": "HTTPS usa el 443 por defecto."
  },
  {
   "q": "¿Qué ofrece Let's Encrypt?",
   "o": [
    "Hosting gratuito",
    "Certificados TLS gratuitos",
    "Un servidor web",
    "Un cortafuegos"
   ],
   "a": 1,
   "e": "Emite certificados gratuitos y renovables automáticamente con certbot."
  },
  {
   "q": "¿Qué hace docker run -p 8080:80 miweb?",
   "o": [
    "Abre el puerto 80 del servidor",
    "Conecta el puerto 8080 del servidor con el 80 del contenedor",
    "Crea 80 contenedores",
    "Descarga la imagen 8080"
   ],
   "a": 1,
   "e": "El formato es puerto_del_host:puerto_del_contenedor."
  },
  {
   "q": "¿Para qué se usa Tomcat?",
   "o": [
    "Para desplegar aplicaciones Java",
    "Para gestionar DNS",
    "Para bases de datos",
    "Para correo"
   ],
   "a": 0,
   "e": "Tomcat es un servidor de aplicaciones Java (servlets y JSP)."
  },
  {
   "q": "¿Cuál es la diferencia principal entre GET y POST?",
   "o": [
    "GET es más seguro",
    "GET envía los datos en la URL y POST en el cuerpo",
    "POST solo envía texto",
    "No hay diferencia"
   ],
   "a": 1,
   "e": "Por eso las contraseñas y los formularios se envían con POST."
  }
 ]
});
