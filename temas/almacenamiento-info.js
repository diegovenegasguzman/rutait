TEMA("almacenamiento-info", {
title:"Sistemas de almacenamiento de la información", mins:13,
intro:"Por qué existen las bases de datos, qué problemas resuelven frente a los simples ficheros, qué tipos de SGBD hay y cómo se organiza un sistema gestor por dentro.",
sections:[
{h:"De los ficheros a las bases de datos", html:`
<p>Antes de las bases de datos, cada programa guardaba sus datos en sus propios ficheros. Esto causaba problemas:</p>
<ul>
<li><b>Redundancia:</b> el mismo cliente aparecía en el fichero de ventas y en el de facturación.</li>
<li><b>Inconsistencia:</b> si se cambiaba la dirección en uno y no en otro, había dos versiones de la verdad.</li>
<li><b>Dependencia:</b> cambiar el formato del fichero obligaba a cambiar todos los programas que lo usaban.</li>
<li><b>Accesos simultáneos</b> que se pisaban y <b>poca seguridad</b>.</li>
</ul>
<p>Una <b>base de datos</b> guarda la información en un solo lugar, organizada, y un <b>SGBD</b> controla quién accede, cómo y garantiza que los datos sean coherentes.</p>`,
check:{q:"El teléfono de un cliente está guardado en tres ficheros y en uno de ellos está desactualizado. ¿Qué problema es?", o:["Seguridad","Inconsistencia de los datos","Rendimiento","Concurrencia"], a:1, e:"La redundancia ha provocado datos contradictorios."}},
{h:"Funciones de un SGBD", html:`
<ul>
<li><b>Definir</b> la estructura (DDL) y <b>manipular</b> los datos (DML).</li>
<li><b>Controlar el acceso</b> con usuarios y permisos (DCL).</li>
<li><b>Mantener la integridad:</b> claves, restricciones y transacciones.</li>
<li><b>Gestionar la concurrencia:</b> que muchos usuarios trabajen a la vez sin pisarse.</li>
<li><b>Recuperación</b> ante fallos y copias de seguridad.</li>
</ul>
<p>Se suele describir con la arquitectura <b>ANSI/SPARC</b> de tres niveles: <b>externo</b> (lo que ve cada usuario), <b>conceptual</b> (la estructura completa de los datos) e <b>interno</b> (cómo se guardan físicamente en disco). Gracias a esta separación, se puede cambiar cómo se almacenan los datos sin tocar las aplicaciones (<b>independencia de datos</b>).</p>`},
{h:"Tipos de bases de datos", html:`
<table>
<tr><th>Modelo</th><th>Cómo organiza los datos</th><th>Ejemplos</th></tr>
<tr><td>Relacional</td><td>Tablas relacionadas, consultadas con SQL</td><td>MySQL, MariaDB, PostgreSQL, Oracle, SQL Server, SQLite</td></tr>
<tr><td>Documental</td><td>Documentos tipo JSON</td><td>MongoDB</td></tr>
<tr><td>Clave-valor</td><td>Pares clave → valor</td><td>Redis</td></tr>
<tr><td>Columnar</td><td>Por columnas, para análisis masivo</td><td>Cassandra, ClickHouse</td></tr>
<tr><td>Grafos</td><td>Nodos y relaciones</td><td>Neo4j</td></tr>
</table>
<p>También se clasifican por su <b>licencia</b> (libres como PostgreSQL o MariaDB, propietarias como Oracle) y por su <b>ubicación</b>: centralizadas o <b>distribuidas</b> entre varios servidores.</p>
<div class="caso"><b>Lo verás en todas partes</b>Tu móvil tiene decenas de bases de datos SQLite: los contactos, los mensajes de WhatsApp o el historial del navegador están guardados así.</div>`},
{h:"Ficheros por dentro", html:`
<p>Aunque uses un SGBD, por debajo todo acaba en ficheros. Según cómo se organizan:</p>
<ul>
<li><b>Secuencial:</b> los registros uno tras otro. Para encontrar uno hay que recorrerlos todos.</li>
<li><b>Directo o aleatorio:</b> se calcula la posición del registro y se va directamente.</li>
<li><b>Indexado:</b> un índice ordenado apunta a la posición de cada registro, como el índice de un libro. Es lo que usan los SGBD para buscar rápido.</li>
</ul>`,
check:{q:"¿Qué organización de ficheros usan los SGBD para encontrar registros rápidamente?", o:["Secuencial","Indexada","Aleatoria sin índice","Comprimida"], a:1, e:"Los índices permiten localizar un registro sin recorrer todo el fichero."}}
],
quiz:[
{q:"¿Qué problema de los ficheros tradicionales es repetir los mismos datos en varios sitios?", o:["Inconsistencia","Redundancia","Dependencia","Concurrencia"], a:1, e:"La redundancia suele acabar causando inconsistencias."},
{q:"¿Qué es un SGBD?", o:["Un tipo de disco","El software que gestiona la base de datos","Un lenguaje de marcas","Un sistema operativo"], a:1, e:"Sistema gestor de bases de datos."},
{q:"¿Qué parte de SQL gestiona usuarios y permisos?", o:["DDL","DML","DCL","TCL"], a:2, e:"DCL: GRANT y REVOKE."},
{q:"¿Cuántos niveles tiene la arquitectura ANSI/SPARC?", o:["2","3","4","7"], a:1, e:"Externo, conceptual e interno."},
{q:"¿Qué permite la independencia de datos?", o:["Que cada usuario tenga su propia copia","Cambiar cómo se almacenan los datos sin modificar las aplicaciones","Que no haga falta SQL","Que no haya claves"], a:1, e:"Es una de las grandes ventajas de separar los niveles."},
{q:"¿Qué tipo de base de datos es MongoDB?", o:["Relacional","Documental","De grafos","Columnar"], a:1, e:"Guarda documentos tipo JSON."},
{q:"¿Qué base de datos relacional está integrada en casi todos los móviles?", o:["Oracle","SQLite","SQL Server","Cassandra"], a:1, e:"SQLite es una base de datos en un solo archivo, sin servidor."},
{q:"¿Qué organización de ficheros obliga a recorrerlo todo para encontrar un registro?", o:["Secuencial","Indexada","Directa","Hash"], a:0, e:"En la secuencial hay que leer registro a registro."}
]});
