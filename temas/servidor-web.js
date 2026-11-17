TEMA("servidor-web", {
title:"Servidores web y despliegue", mins:17,
intro:"Cómo funciona HTTP, cómo se configuran Apache y Nginx para alojar varios sitios, cómo se activa HTTPS y cómo se ponen en producción las aplicaciones, incluidos los contenedores Docker.",
sections:[
{h:"El protocolo HTTP", html:`
<p>El navegador envía una <b>petición</b> y el servidor devuelve una <b>respuesta</b> con un código de estado y el contenido.</p>
<table>
<tr><th>Método</th><th>Uso</th></tr>
<tr><td>GET</td><td>Pedir un recurso. Los datos van en la URL (<code>?id=5</code>).</td></tr>
<tr><td>POST</td><td>Enviar datos, por ejemplo un formulario. Van en el cuerpo de la petición.</td></tr>
<tr><td>PUT / PATCH</td><td>Modificar un recurso.</td></tr>
<tr><td>DELETE</td><td>Borrar un recurso.</td></tr>
</table>
<table>
<tr><th>Código</th><th>Significado</th></tr>
<tr><td>200</td><td>OK</td></tr>
<tr><td>301 / 302</td><td>Redirección permanente / temporal</td></tr>
<tr><td>401 / 403</td><td>Hace falta autenticarse / acceso prohibido</td></tr>
<tr><td>404</td><td>No encontrado</td></tr>
<tr><td>500</td><td>Error interno del servidor</td></tr>
<tr><td>503</td><td>Servicio no disponible (sobrecargado o en mantenimiento)</td></tr>
</table>
<p>Regla rápida: los <b>4xx</b> son errores del cliente y los <b>5xx</b>, del servidor.</p>`},
{h:"Apache y Nginx", html:`
<ul>
<li><b>Apache:</b> muy configurable mediante módulos; permite configuración por carpeta con archivos <code>.htaccess</code>.</li>
<li><b>Nginx:</b> muy eficiente con muchas conexiones simultáneas. Se usa mucho como <b>proxy inverso</b>: recibe las peticiones y las reenvía a la aplicación que hay detrás.</li>
</ul>
<p>En Debian y Ubuntu, la web por defecto está en <code>/var/www/html</code> (el <b>DocumentRoot</b>) y la configuración, en <code>/etc/apache2</code> o <code>/etc/nginx</code>. Antes de reiniciar, comprueba que no hay errores: <code>apachectl configtest</code> o <code>nginx -t</code>.</p>`},
{h:"Hosts virtuales", html:`
<p>Un mismo servidor, con una sola IP, puede alojar muchas webs. El navegador envía en cada petición la cabecera <code>Host</code> con el nombre del sitio, y el servidor elige qué web servir.</p>
<pre><code><span class="c"># /etc/apache2/sites-available/tienda.conf</span>
&lt;VirtualHost *:80&gt;
    ServerName tienda.ejemplo.com
    DocumentRoot /var/www/tienda
    ErrorLog \${APACHE_LOG_DIR}/tienda-error.log
&lt;/VirtualHost&gt;</code></pre>
<pre><code>sudo a2ensite tienda.conf
sudo systemctl reload apache2</code></pre>
<p>Para que funcione, el nombre <code>tienda.ejemplo.com</code> debe apuntar a la IP del servidor en el DNS (o en el archivo <code>hosts</code> si son pruebas).</p>`},
{h:"HTTPS y certificados", html:`
<p><b>HTTPS</b> es HTTP cifrado con <b>TLS</b>. Usa el puerto <b>443</b> y necesita un <b>certificado</b> que demuestre que el servidor es quien dice ser. El certificado lo firma una <b>autoridad de certificación (CA)</b> en la que confían los navegadores.</p>
<ul>
<li><b>Let's Encrypt</b> emite certificados gratuitos. Con <code>certbot</code> se obtienen y se renuevan automáticamente: <code>sudo certbot --apache -d tienda.ejemplo.com</code>.</li>
<li>Un certificado <b>autofirmado</b> cifra, pero el navegador muestra un aviso porque nadie lo avala. Solo sirve para pruebas.</li>
<li>Conviene redirigir todo el tráfico del puerto 80 al 443.</li>
</ul>`},
{h:"Desplegar aplicaciones y Docker", html:`
<p>Las aplicaciones no se prueban en producción. Lo habitual es tener tres entornos: <b>desarrollo</b>, <b>pruebas</b> (preproducción) y <b>producción</b>.</p>
<ul>
<li>Las aplicaciones <b>Java</b> se despliegan en un servidor de aplicaciones como <b>Tomcat</b> (archivos <code>.war</code>).</li>
<li>Las aplicaciones <b>PHP</b> suelen ejecutarse con <b>PHP-FPM</b> detrás de Nginx o Apache.</li>
</ul>
<p><b>Docker</b> empaqueta una aplicación con todo lo que necesita en una <b>imagen</b>. Al ejecutarla se crea un <b>contenedor</b>, que funciona igual en cualquier servidor.</p>
<pre><code><span class="c"># Dockerfile</span>
<span class="k">FROM</span> nginx:alpine
<span class="k">COPY</span> ./web /usr/share/nginx/html</code></pre>
<pre><code>docker build -t miweb .
docker run -d -p 8080:80 miweb   <span class="c"># puerto 8080 del servidor → 80 del contenedor</span>
docker ps                         <span class="c"># contenedores en marcha</span></code></pre>
<p>Con <b>Docker Compose</b> se definen en un archivo varios contenedores que trabajan juntos (por ejemplo, la web y su base de datos).</p>`}
],
quiz:[
{q:"¿Qué código HTTP indica que el recurso no existe?", o:["200","301","404","500"], a:2, e:"404 Not Found."},
{q:"¿Qué código indica un error interno del servidor?", o:["403","404","500","301"], a:2, e:"Los 5xx son errores del servidor; 500 es el genérico."},
{q:"¿Cómo se alojan varias webs en un servidor con una sola IP?", o:["Con varias tarjetas de red","Con hosts virtuales","Con un RAID","No es posible"], a:1, e:"El servidor elige el sitio según la cabecera Host de la petición."},
{q:"¿Qué puerto usa HTTPS?", o:["80","8080","443","22"], a:2, e:"HTTPS usa el 443 por defecto."},
{q:"¿Qué ofrece Let's Encrypt?", o:["Hosting gratuito","Certificados TLS gratuitos","Un servidor web","Un cortafuegos"], a:1, e:"Emite certificados gratuitos y renovables automáticamente con certbot."},
{q:"¿Qué hace docker run -p 8080:80 miweb?", o:["Abre el puerto 80 del servidor","Conecta el puerto 8080 del servidor con el 80 del contenedor","Crea 80 contenedores","Descarga la imagen 8080"], a:1, e:"El formato es puerto_del_host:puerto_del_contenedor."},
{q:"¿Para qué se usa Tomcat?", o:["Para desplegar aplicaciones Java","Para gestionar DNS","Para bases de datos","Para correo"], a:0, e:"Tomcat es un servidor de aplicaciones Java (servlets y JSP)."},
{q:"¿Cuál es la diferencia principal entre GET y POST?", o:["GET es más seguro","GET envía los datos en la URL y POST en el cuerpo","POST solo envía texto","No hay diferencia"], a:1, e:"Por eso las contraseñas y los formularios se envían con POST."}
]});
