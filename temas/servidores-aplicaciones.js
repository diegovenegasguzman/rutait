TEMA("servidores-aplicaciones", {
 "title": "Servidores de aplicaciones y arquitecturas web",
 "mins": 13,
 "intro": "Qué piezas hay detrás de una aplicación web moderna, qué hace un servidor de aplicaciones y cómo se combinan con un servidor web como proxy inverso.",
 "sections": [
  {
   "h": "Arquitecturas web",
   "html": "\n<p>Una aplicación web se puede repartir en más o menos piezas. Estas son las arquitecturas habituales.</p>\n<table>\n<tr><th>Arquitectura</th><th>Cómo es</th></tr>\n<tr><td>Cliente-servidor</td><td>El navegador pide y el servidor responde</td></tr>\n<tr><td>En tres capas</td><td><b>Presentación</b> (servidor web), <b>lógica</b> (servidor de aplicaciones) y <b>datos</b> (base de datos), cada una en su máquina o contenedor</td></tr>\n<tr><td>Microservicios</td><td>La aplicación se divide en servicios pequeños e independientes que se comunican por API</td></tr>\n<tr><td>Sin servidor (serverless)</td><td>Funciones que ejecuta el proveedor de nube solo cuando se llaman</td></tr>\n</table>\n<p>Separar capas permite escalar cada una por separado y aislar la base de datos de Internet.</p>"
  },
  {
   "h": "Servidores de aplicaciones",
   "html": "\n<p>Un servidor web entrega archivos estáticos (HTML, imágenes). Un <b>servidor de aplicaciones</b> ejecuta el código de la aplicación:</p>\n<table>\n<tr><th>Lenguaje</th><th>Servidor de aplicaciones</th></tr>\n<tr><td>Java</td><td><b>Tomcat</b> (aplicaciones <code>.war</code>), WildFly, Payara</td></tr>\n<tr><td>PHP</td><td><b>PHP-FPM</b></td></tr>\n<tr><td>Python</td><td>Gunicorn, uWSGI</td></tr>\n<tr><td>JavaScript</td><td><b>Node.js</b></td></tr>\n</table>\n<p>En Tomcat, una aplicación se despliega copiando su <code>.war</code> en la carpeta <code>webapps</code> o desde la consola <b>Manager</b>. Por defecto escucha en el puerto <b>8080</b>.</p>\n<p>En Tomcat se despliegan archivos <b>.war</b> (Web Application Archive), que empaquetan una aplicación web Java completa.</p>\n",
   "check": {
    "q": "¿Qué archivo se despliega en Tomcat?",
    "o": [
     ".exe",
     ".war",
     ".msi",
     ".deb"
    ],
    "a": 1,
    "e": "Un .war (Web Application Archive) empaqueta una aplicación web Java."
   }
  },
  {
   "h": "Proxy inverso y balanceo",
   "html": "\n<p>Lo habitual es poner delante un servidor web como <b>proxy inverso</b>: recibe las peticiones en los puertos 80/443, gestiona HTTPS y las reenvía al servidor de aplicaciones.</p>\n<pre><code><span class=\"c\"># Nginx delante de Tomcat</span>\nserver {\n    listen 443 ssl;\n    server_name app.empresa.es;\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host;\n    }\n}</code></pre>\n<p>Con varias instancias, el proxy reparte la carga (<b>balanceo</b>). Así el servidor de aplicaciones no queda expuesto directamente a Internet.</p>\n<div class=\"caso\"><b>Caso real</b>Una aplicación Java va lenta en horas punta. Se levantan dos instancias más de Tomcat y Nginx reparte las peticiones entre las tres, sin que los usuarios noten nada.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuáles son las tres capas de la arquitectura clásica?",
   "o": [
    "Red, transporte y aplicación",
    "Presentación, lógica y datos",
    "Cliente, router y servidor",
    "HTML, CSS y JS"
   ],
   "a": 1,
   "e": "Cada capa se puede escalar y proteger por separado."
  },
  {
   "q": "¿Qué diferencia hay entre un servidor web y uno de aplicaciones?",
   "o": [
    "Ninguna",
    "El de aplicaciones ejecuta el código de la aplicación",
    "El web es más moderno",
    "El de aplicaciones solo sirve imágenes"
   ],
   "a": 1,
   "e": "El servidor web sirve contenido estático y suele hacer de proxy."
  },
  {
   "q": "¿En qué puerto escucha Tomcat por defecto?",
   "o": [
    "80",
    "8080",
    "3306",
    "22"
   ],
   "a": 1,
   "e": "Por eso se pone detrás de Nginx o Apache."
  },
  {
   "q": "¿Qué ejecuta las aplicaciones PHP detrás de Nginx?",
   "o": [
    "Tomcat",
    "PHP-FPM",
    "Node.js",
    "IIS Express"
   ],
   "a": 1,
   "e": "Nginx le pasa las peticiones .php."
  },
  {
   "q": "¿Qué es un proxy inverso?",
   "o": [
    "Un proxy para navegar",
    "Un servidor que recibe las peticiones y las reenvía a los servidores internos",
    "Un antivirus",
    "Un DNS"
   ],
   "a": 1,
   "e": "Gestiona HTTPS, balanceo y protege a los servidores internos."
  },
  {
   "q": "¿Qué son los microservicios?",
   "o": [
    "Servidores pequeños",
    "Dividir la aplicación en servicios independientes que se comunican por API",
    "Servicios de Windows",
    "Aplicaciones móviles"
   ],
   "a": 1,
   "e": "Cada servicio se despliega y escala por separado."
  }
 ]
});
