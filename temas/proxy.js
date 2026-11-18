TEMA("proxy", {
 "title": "Servidores proxy",
 "mins": 11,
 "intro": "Qué hace un servidor proxy, los tipos que existen y cómo se configura Squid para controlar y acelerar la navegación de una organización.",
 "sections": [
  {
   "h": "Tipos de proxy",
   "html": "\n<p>Un proxy es un intermediario: las peticiones pasan por él antes de llegar a su destino. Según dónde se coloque y a quién sirva, hay varios tipos.</p>\n<table>\n<tr><th>Tipo</th><th>Qué hace</th></tr>\n<tr><td>Proxy directo (forward)</td><td>Los equipos internos navegan a través de él: filtra, registra y guarda caché</td></tr>\n<tr><td>Proxy transparente</td><td>Igual, pero sin configurar nada en los equipos: el router le desvía el tráfico</td></tr>\n<tr><td>Proxy inverso</td><td>Está delante de los servidores y recibe las peticiones de Internet (Nginx, HAProxy)</td></tr>\n<tr><td>Proxy anónimo</td><td>Oculta la IP del cliente ante el destino</td></tr>\n</table>\n<p>Con HTTPS, el proxy solo ve el dominio de destino, no el contenido, salvo que haga <b>inspección TLS</b> (requiere instalar en los equipos un certificado de la empresa y avisar a los usuarios).</p>"
  },
  {
   "h": "Configurar Squid",
   "html": "\n<pre><code><span class=\"c\"># /etc/squid/squid.conf</span>\nhttp_port 3128\n\nacl red_local src 192.168.1.0/24\nacl bloqueadas dstdomain \"/etc/squid/bloqueadas.txt\"\nacl horario_laboral time MTWHF 08:00-15:00\n\nhttp_access deny bloqueadas horario_laboral\nhttp_access allow red_local\nhttp_access deny all\n\ncache_dir ufs /var/spool/squid 2000 16 256   <span class=\"c\"># 2 GB de caché en disco</span></code></pre>\n<ul>\n<li>Las <b>ACL</b> definen condiciones (red de origen, dominio, horario…).</li>\n<li>Las reglas <code>http_access</code> se evalúan <b>en orden</b> y se aplica la primera que coincide.</li>\n<li>La última, <code>deny all</code>, cierra todo lo que no se haya permitido.</li>\n<li>Los accesos quedan en <code>/var/log/squid/access.log</code>.</li>\n</ul>",
   "check": {
    "q": "¿Cómo evalúa Squid las reglas http_access?",
    "o": [
     "Todas a la vez",
     "En orden, aplicando la primera que coincide",
     "De abajo arriba",
     "Al azar"
    ],
    "a": 1,
    "e": "Por eso el orden de las reglas es fundamental."
   }
  },
  {
   "h": "Configurar los clientes",
   "html": "\n<p>Para que los equipos naveguen a través del proxy, hay que decírselo. Hay varias formas, de la manual a la automática.</p>\n<ul>\n<li><b>Manual:</b> en la configuración de red o del navegador (IP del proxy y puerto 3128).</li>\n<li><b>Por GPO</b> en un dominio.</li>\n<li><b>Autoconfiguración:</b> un archivo <b>PAC</b> o el protocolo <b>WPAD</b> indican a los navegadores qué proxy usar.</li>\n<li><b>Transparente:</b> el router redirige el puerto 80 al proxy.</li>\n</ul>\n<div class=\"caso\"><b>Legalidad</b>Registrar la navegación de los empleados es legal si se les informa previamente y se respeta la proporcionalidad. Hay que incluirlo en la política de uso de los recursos informáticos.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué tipo de proxy no requiere configurar los equipos?",
   "o": [
    "Directo",
    "Transparente",
    "Anónimo",
    "SOCKS manual"
   ],
   "a": 1,
   "e": "El router desvía el tráfico hacia él."
  },
  {
   "q": "¿Dónde se sitúa un proxy inverso?",
   "o": [
    "En cada PC",
    "Delante de los servidores, recibiendo las peticiones de Internet",
    "En el móvil",
    "En el DNS"
   ],
   "a": 1,
   "e": "Protege y balancea los servidores internos."
  },
  {
   "q": "¿Qué puerto usa Squid por defecto?",
   "o": [
    "80",
    "3128",
    "8080",
    "443"
   ],
   "a": 1,
   "e": "Se configura con http_port."
  },
  {
   "q": "¿Qué ve un proxy del tráfico HTTPS sin inspección TLS?",
   "o": [
    "Todo el contenido",
    "Solo el dominio de destino",
    "Las contraseñas",
    "Nada"
   ],
   "a": 1,
   "e": "El contenido va cifrado de extremo a extremo."
  },
  {
   "q": "¿Qué archivo o protocolo permite autoconfigurar el proxy en los navegadores?",
   "o": [
    "PAC o WPAD",
    "DHCP",
    "DNSSEC",
    "SNMP"
   ],
   "a": 0,
   "e": "Indican qué proxy usar para cada destino."
  },
  {
   "q": "¿En qué archivo registra Squid las páginas visitadas?",
   "o": [
    "/var/log/squid/access.log",
    "/etc/squid/users",
    "/var/www/log",
    "/etc/hosts"
   ],
   "a": 0,
   "e": "Cada línea es una petición."
  }
 ]
});
