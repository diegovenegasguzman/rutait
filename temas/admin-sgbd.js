TEMA("admin-sgbd", {
 "title": "Administración de MySQL y MariaDB",
 "mins": 16,
 "intro": "Lo que hace el administrador de bases de datos: instalar y asegurar el servidor, crear usuarios con los permisos justos, hacer copias de seguridad, mejorar el rendimiento y replicar los datos.",
 "sections": [
  {
   "h": "Instalación y configuración",
   "html": "\n<pre><code>sudo apt install mariadb-server\nsudo mysql_secure_installation   <span class=\"c\"># contraseña de root, quitar usuarios anónimos y la base de pruebas</span>\nsudo mysql                       <span class=\"c\"># entrar como administrador</span></code></pre>\n<ul>\n<li>El servidor escucha en el puerto <b>3306</b>.</li>\n<li>La configuración está en <code>/etc/mysql/</code> (archivos <code>my.cnf</code> y la carpeta <code>conf.d</code>).</li>\n<li>La directiva <code>bind-address = 127.0.0.1</code> hace que solo acepte conexiones del propio servidor. Si la web y la base de datos están en el mismo equipo, déjalo así.</li>\n</ul>"
  },
  {
   "h": "Usuarios y privilegios",
   "html": "\n<p>En MySQL, un usuario se identifica por su nombre <b>y por el equipo desde el que se conecta</b>:</p>\n<pre><code><span class=\"k\">CREATE USER</span> <span class=\"s\">'tienda_app'</span>@<span class=\"s\">'localhost'</span> <span class=\"k\">IDENTIFIED BY</span> <span class=\"s\">'Contraseña-Larga-2026'</span>;\n<span class=\"k\">GRANT</span> SELECT, INSERT, UPDATE, DELETE <span class=\"k\">ON</span> tienda.* <span class=\"k\">TO</span> <span class=\"s\">'tienda_app'</span>@<span class=\"s\">'localhost'</span>;\n<span class=\"k\">SHOW GRANTS FOR</span> <span class=\"s\">'tienda_app'</span>@<span class=\"s\">'localhost'</span>;\n<span class=\"k\">REVOKE</span> DELETE <span class=\"k\">ON</span> tienda.* <span class=\"k\">FROM</span> <span class=\"s\">'tienda_app'</span>@<span class=\"s\">'localhost'</span>;</code></pre>\n<ul>\n<li><code>'usuario'@'localhost'</code>: solo desde el propio servidor.</li>\n<li><code>'usuario'@'192.168.1.%'</code>: desde esa red.</li>\n<li><code>'usuario'@'%'</code>: desde cualquier equipo. Úsalo con mucho cuidado.</li>\n</ul>\n<div class=\"note\"><b>Principio de mínimo privilegio</b>Cada aplicación tiene su propio usuario con permisos solo sobre su base de datos y solo los que necesita. Nunca conectes una aplicación como root.</div>"
  },
  {
   "h": "Copias de seguridad",
   "html": "\n<p>Una base de datos se puede copiar de dos formas: exportando las sentencias SQL que la recrean o copiando los archivos donde el SGBD guarda los datos.</p>\n<table>\n<tr><th>Tipo</th><th>Cómo es</th><th>Herramienta</th></tr>\n<tr><td>Lógica</td><td>Un archivo de texto con las sentencias SQL para recrear la base de datos. Portable, pero lenta con bases grandes.</td><td><code>mysqldump</code></td></tr>\n<tr><td>Física</td><td>Copia de los archivos de datos. Rápida para bases grandes.</td><td>Mariabackup, Percona XtraBackup</td></tr>\n</table>\n<pre><code>mysqldump -u root -p tienda &gt; tienda-2026-11-17.sql   <span class=\"c\"># copiar</span>\nmysql -u root -p tienda &lt; tienda-2026-11-17.sql       <span class=\"c\"># restaurar</span></code></pre>\n<p>Con el <b>registro binario</b> (binlog) activado, se puede restaurar la última copia completa y después aplicar los cambios hasta un momento concreto, por ejemplo hasta un minuto antes de un borrado accidental.</p>\n<div class=\"note exam\"><b>Una copia que no se ha probado no es una copia</b>Restaura periódicamente en un servidor de pruebas para comprobar que funciona.</div>"
  },
  {
   "h": "Rendimiento e índices",
   "html": "\n<p>Un <b>índice</b> funciona como el índice de un libro: permite encontrar filas sin recorrer toda la tabla.</p>\n<pre><code><span class=\"k\">CREATE INDEX</span> idx_email <span class=\"k\">ON</span> clientes(email);\n<span class=\"k\">EXPLAIN SELECT</span> * <span class=\"k\">FROM</span> clientes <span class=\"k\">WHERE</span> email = <span class=\"s\">'ana@correo.es'</span>;</code></pre>\n<ul>\n<li><code>EXPLAIN</code> muestra el <b>plan de ejecución</b>: si la consulta usa un índice o recorre toda la tabla.</li>\n<li>Los índices aceleran las búsquedas, pero <b>ralentizan las inserciones y modificaciones</b> y ocupan espacio. Se crean en las columnas que más se usan en <code>WHERE</code> y <code>JOIN</code>.</li>\n<li>El registro de <b>consultas lentas</b> (slow query log) ayuda a encontrar las consultas que hay que optimizar.</li>\n</ul>"
  },
  {
   "h": "Replicación",
   "html": "\n<p>La <b>replicación</b> mantiene una copia de los datos en otro servidor, actualizada continuamente:</p>\n<ul>\n<li>El servidor <b>origen</b> (antes llamado maestro) recibe las escrituras y las anota en el binlog.</li>\n<li>Las <b>réplicas</b> leen ese registro y aplican los mismos cambios.</li>\n</ul>\n<p>Sirve para repartir las consultas de lectura, para tener un servidor listo si el principal falla y para hacer copias de seguridad desde la réplica sin cargar el origen. La replicación <b>no sustituye a las copias</b>: un <code>DROP TABLE</code> se replica también.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿En qué puerto escucha MySQL o MariaDB por defecto?",
   "o": [
    "1433",
    "3306",
    "5432",
    "8080"
   ],
   "a": 1,
   "e": "3306. PostgreSQL usa el 5432 y SQL Server, el 1433."
  },
  {
   "q": "¿Qué sentencia da permisos a un usuario?",
   "o": [
    "CREATE USER",
    "GRANT",
    "REVOKE",
    "ALLOW"
   ],
   "a": 1,
   "e": "GRANT concede privilegios; REVOKE los retira."
  },
  {
   "q": "¿Desde dónde puede conectarse el usuario 'ana'@'%'?",
   "o": [
    "Solo desde el servidor",
    "Desde cualquier equipo",
    "Solo desde la red local",
    "Desde ninguno"
   ],
   "a": 1,
   "e": "% es un comodín: cualquier host."
  },
  {
   "q": "¿Qué tipo de copia hace mysqldump?",
   "o": [
    "Física",
    "Lógica",
    "Incremental",
    "De disco"
   ],
   "a": 1,
   "e": "Genera un archivo con las sentencias SQL necesarias para recrear los datos."
  },
  {
   "q": "¿Qué efecto tiene un índice?",
   "o": [
    "Acelera todo",
    "Acelera las búsquedas, pero ralentiza las escrituras",
    "Solo ahorra espacio",
    "Cifra los datos"
   ],
   "a": 1,
   "e": "Cada inserción o modificación tiene que actualizar también el índice."
  },
  {
   "q": "¿Para qué sirve EXPLAIN?",
   "o": [
    "Para documentar una tabla",
    "Para mostrar el plan de ejecución de una consulta",
    "Para crear índices",
    "Para restaurar copias"
   ],
   "a": 1,
   "e": "Indica si la consulta usa índices y cuántas filas recorre."
  },
  {
   "q": "¿Qué principio debes seguir al crear el usuario de una aplicación?",
   "o": [
    "Darle todos los permisos por si acaso",
    "Mínimo privilegio",
    "Usar root",
    "Compartirlo entre aplicaciones"
   ],
   "a": 1,
   "e": "Solo los permisos que necesita, sobre la base de datos que necesita."
  },
  {
   "q": "¿Protege la replicación de un DROP TABLE accidental?",
   "o": [
    "Sí, siempre",
    "No, el borrado también se replica",
    "Solo si hay dos réplicas",
    "Solo en MariaDB"
   ],
   "a": 1,
   "e": "Las réplicas aplican los mismos cambios, también los errores. Para eso están las copias."
  }
 ]
});
