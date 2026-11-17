TEMA("bd-sql", {
title:"Bases de datos relacionales y SQL", mins:18,
intro:"Cómo se organiza la información en tablas relacionadas y cómo se crean, modifican y consultan con SQL, el lenguaje que usan todas las bases de datos relacionales.",
sections:[
{h:"Bases de datos y SGBD", html:`
<p>Una <b>base de datos</b> es un conjunto de datos organizados para guardarlos y consultarlos de forma eficiente. El programa que la gestiona es el <b>SGBD</b> (sistema gestor de bases de datos): MySQL, MariaDB, PostgreSQL, Oracle o SQL Server.</p>
<p>En el <b>modelo relacional</b>, los datos se guardan en <b>tablas</b>:</p>
<ul>
<li>Cada <b>fila</b> (registro o tupla) es un elemento: un alumno.</li>
<li>Cada <b>columna</b> (campo o atributo) es una característica: su nombre, su fecha de nacimiento.</li>
</ul>`},
{h:"Claves y relaciones", html:`
<ul>
<li><b>Clave primaria (PK):</b> la columna que identifica de forma única cada fila. No puede repetirse ni estar vacía. Por ejemplo, <code>id_alumno</code>.</li>
<li><b>Clave foránea (FK):</b> una columna que apunta a la clave primaria de otra tabla. Garantiza la <b>integridad referencial</b>: no puedes matricular a un alumno que no existe.</li>
</ul>
<p>Tipos de relación entre tablas:</p>
<table>
<tr><th>Relación</th><th>Ejemplo</th><th>Cómo se implementa</th></tr>
<tr><td>1:1</td><td>Una persona, un DNI</td><td>FK única en una de las tablas</td></tr>
<tr><td>1:N</td><td>Un curso tiene muchos alumnos</td><td>FK en la tabla del lado «muchos»</td></tr>
<tr><td>N:M</td><td>Un alumno cursa muchos módulos y un módulo tiene muchos alumnos</td><td><b>Tabla intermedia</b> (matriculas) con las dos FK</td></tr>
</table>`},
{h:"Crear tablas (DDL)", html:`
<p>El <b>DDL</b> (lenguaje de definición de datos) crea y modifica la estructura: <code>CREATE</code>, <code>ALTER</code> y <code>DROP</code>.</p>
<pre><code><span class="k">CREATE TABLE</span> alumnos (
  id_alumno  <span class="k">INT</span> AUTO_INCREMENT <span class="k">PRIMARY KEY</span>,
  nombre     <span class="k">VARCHAR</span>(50) <span class="k">NOT NULL</span>,
  email      <span class="k">VARCHAR</span>(100) <span class="k">UNIQUE</span>,
  fecha_nac  <span class="k">DATE</span>
);

<span class="k">CREATE TABLE</span> matriculas (
  id_alumno  <span class="k">INT</span>,
  id_modulo  <span class="k">INT</span>,
  nota       <span class="k">DECIMAL</span>(4,2),
  <span class="k">PRIMARY KEY</span> (id_alumno, id_modulo),
  <span class="k">FOREIGN KEY</span> (id_alumno) <span class="k">REFERENCES</span> alumnos(id_alumno)
);</code></pre>`},
{h:"Insertar, modificar y borrar (DML)", html:`
<pre><code><span class="k">INSERT INTO</span> alumnos (nombre, email) <span class="k">VALUES</span> (<span class="s">'Laia'</span>, <span class="s">'laia@correo.es'</span>);

<span class="k">UPDATE</span> alumnos <span class="k">SET</span> email = <span class="s">'nuevo@correo.es'</span> <span class="k">WHERE</span> id_alumno = 3;

<span class="k">DELETE FROM</span> alumnos <span class="k">WHERE</span> id_alumno = 3;</code></pre>
<div class="note exam"><b>El error más peligroso</b>Un <code>UPDATE</code> o <code>DELETE</code> sin <code>WHERE</code> afecta a <b>todas</b> las filas de la tabla. Antes de ejecutarlo, prueba el <code>WHERE</code> con un <code>SELECT</code>.</div>`},
{h:"Consultar datos", html:`
<pre><code><span class="c">-- Alumnos cuyo nombre empieza por A, ordenados</span>
<span class="k">SELECT</span> nombre, email <span class="k">FROM</span> alumnos
<span class="k">WHERE</span> nombre <span class="k">LIKE</span> <span class="s">'A%'</span>
<span class="k">ORDER BY</span> nombre;

<span class="c">-- Nota media de cada módulo, solo los que superan el 6</span>
<span class="k">SELECT</span> id_modulo, <span class="k">AVG</span>(nota) <span class="k">AS</span> media
<span class="k">FROM</span> matriculas
<span class="k">GROUP BY</span> id_modulo
<span class="k">HAVING</span> <span class="k">AVG</span>(nota) &gt; 6;

<span class="c">-- Unir tablas: nombre del alumno junto a sus notas</span>
<span class="k">SELECT</span> a.nombre, m.id_modulo, m.nota
<span class="k">FROM</span> alumnos a
<span class="k">JOIN</span> matriculas m <span class="k">ON</span> a.id_alumno = m.id_alumno;</code></pre>
<ul>
<li><code>WHERE</code> filtra filas <b>antes</b> de agrupar; <code>HAVING</code> filtra grupos <b>después</b> de agrupar.</li>
<li>Funciones de agregado: <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MAX</code> y <code>MIN</code>.</li>
<li><code>LIKE</code> usa <code>%</code> (cualquier texto) y <code>_</code> (un carácter).</li>
<li><code>JOIN</code> (o <code>INNER JOIN</code>) devuelve solo las filas con coincidencia; <code>LEFT JOIN</code> incluye también las de la tabla izquierda sin coincidencia.</li>
</ul>`}
],
quiz:[
{q:"¿Qué es una clave primaria?", o:["Una columna que puede repetirse","La columna que identifica de forma única cada fila","La primera columna de la tabla","Una contraseña de la base de datos"], a:1, e:"La clave primaria es única y no puede ser nula."},
{q:"¿Cómo se implementa una relación N:M?", o:["Con una FK en cada tabla","Con una tabla intermedia","Con una sola tabla","No se puede implementar"], a:1, e:"La tabla intermedia contiene las claves foráneas de las dos tablas."},
{q:"¿Qué hace DELETE FROM alumnos; sin WHERE?", o:["Da error","Borra la tabla","Borra todas las filas","Borra la primera fila"], a:2, e:"Elimina todas las filas; la tabla sigue existiendo, pero vacía."},
{q:"¿Qué cláusula filtra los grupos después de un GROUP BY?", o:["WHERE","HAVING","ORDER BY","LIMIT"], a:1, e:"WHERE filtra filas antes de agrupar; HAVING, grupos después."},
{q:"¿Qué nombres devuelve WHERE nombre LIKE 'A%'?", o:["Los que terminan en A","Los que contienen una A","Los que empiezan por A","Solo 'A%'"], a:2, e:"% sustituye cualquier texto, así que 'A%' es «empieza por A»."},
{q:"¿A qué parte de SQL pertenece CREATE TABLE?", o:["DML","DDL","DCL","TCL"], a:1, e:"DDL define la estructura; DML manipula los datos."},
{q:"¿Para qué sirve JOIN?", o:["Para borrar tablas","Para combinar filas de varias tablas relacionadas","Para ordenar resultados","Para crear usuarios"], a:1, e:"JOIN une tablas a través de las columnas que las relacionan."},
{q:"¿Qué devuelve SELECT COUNT(*) FROM alumnos;?", o:["Los nombres de los alumnos","El número de filas de la tabla","La suma de los id","El último alumno"], a:1, e:"COUNT(*) cuenta todas las filas."}
]});
