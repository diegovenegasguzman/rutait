TEMA("sql-avanzado", {
title:"SQL avanzado: JOIN, subconsultas, vistas y transacciones", mins:18,
intro:"El SQL que se usa en el trabajo real: combinar tablas de todas las formas, consultas dentro de consultas, vistas para simplificar, transacciones para no dejar datos a medias y triggers que actúan solos.",
sections:[
{h:"Tipos de JOIN", html:`
<p>Partimos de dos tablas: ALUMNOS y MATRICULAS. Algunos alumnos aún no se han matriculado en nada.</p>
<table>
<tr><th>JOIN</th><th>Devuelve</th></tr>
<tr><td><code>INNER JOIN</code></td><td>Solo las filas que tienen pareja en las dos tablas</td></tr>
<tr><td><code>LEFT JOIN</code></td><td>Todas las filas de la tabla izquierda; si no tienen pareja, las columnas de la derecha salen a <code>NULL</code></td></tr>
<tr><td><code>RIGHT JOIN</code></td><td>Lo mismo, pero con la tabla derecha</td></tr>
</table>
<pre><code><span class="c">-- Alumnos que todavía no tienen ninguna matrícula</span>
<span class="k">SELECT</span> a.nombre
<span class="k">FROM</span> alumnos a
<span class="k">LEFT JOIN</span> matriculas m <span class="k">ON</span> a.id_alumno = m.id_alumno
<span class="k">WHERE</span> m.id_alumno <span class="k">IS NULL</span>;</code></pre>
<p>Este truco de <code>LEFT JOIN</code> + <code>IS NULL</code> sirve para encontrar «lo que falta»: clientes sin pedidos, productos que nunca se han vendido…</p>`,
check:{q:"Quieres un listado de TODOS los productos con sus ventas, incluidos los que no se han vendido nunca. ¿Qué JOIN usas (productos a la izquierda)?", o:["INNER JOIN","LEFT JOIN","Ninguno","CROSS JOIN"], a:1, e:"LEFT JOIN conserva todos los productos aunque no tengan ventas; sus columnas de ventas saldrán a NULL."}},
{h:"Subconsultas", html:`
<p>Una subconsulta es un <code>SELECT</code> dentro de otro. Se ejecuta primero y su resultado se usa en la consulta principal.</p>
<pre><code><span class="c">-- Matrículas con nota superior a la media</span>
<span class="k">SELECT</span> id_alumno, nota <span class="k">FROM</span> matriculas
<span class="k">WHERE</span> nota &gt; (<span class="k">SELECT AVG</span>(nota) <span class="k">FROM</span> matriculas);

<span class="c">-- Alumnos matriculados en algún curso de redes</span>
<span class="k">SELECT</span> nombre <span class="k">FROM</span> alumnos
<span class="k">WHERE</span> id_alumno <span class="k">IN</span> (
  <span class="k">SELECT</span> m.id_alumno <span class="k">FROM</span> matriculas m
  <span class="k">JOIN</span> cursos c <span class="k">ON</span> c.id_curso = m.id_curso
  <span class="k">WHERE</span> c.titulo <span class="k">LIKE</span> <span class="s">'%redes%'</span>
);</code></pre>
<ul>
<li>Si la subconsulta devuelve <b>un solo valor</b>, se compara con <code>=</code>, <code>&gt;</code>, <code>&lt;</code>…</li>
<li>Si devuelve <b>una lista</b>, se usa <code>IN</code>, <code>ANY</code> o <code>ALL</code>.</li>
<li><code>EXISTS</code> solo comprueba si la subconsulta devuelve alguna fila.</li>
</ul>`},
{h:"Vistas", html:`
<p>Una <b>vista</b> es una consulta guardada con nombre que se usa como si fuera una tabla:</p>
<pre><code><span class="k">CREATE VIEW</span> notas_alumnos <span class="k">AS</span>
<span class="k">SELECT</span> a.nombre, c.titulo, m.nota
<span class="k">FROM</span> matriculas m
<span class="k">JOIN</span> alumnos a <span class="k">ON</span> a.id_alumno = m.id_alumno
<span class="k">JOIN</span> cursos c  <span class="k">ON</span> c.id_curso = m.id_curso;

<span class="k">SELECT</span> * <span class="k">FROM</span> notas_alumnos <span class="k">WHERE</span> nota &lt; 5;</code></pre>
<ul>
<li><b>Simplifica:</b> la consulta complicada se escribe una vez.</li>
<li><b>Protege:</b> puedes dar permiso sobre la vista, que solo enseña ciertas columnas, sin dar acceso a las tablas originales (por ejemplo, ocultando los DNI).</li>
<li>No guarda datos: cada vez que la consultas, se ejecuta su <code>SELECT</code>.</li>
</ul>`},
{h:"Transacciones", html:`
<p>Una transferencia bancaria son dos operaciones: restar de una cuenta y sumar a otra. Si el servidor se cae entre las dos, el dinero desaparece. Una <b>transacción</b> agrupa varias operaciones para que se hagan <b>todas o ninguna</b>:</p>
<pre><code><span class="k">START TRANSACTION</span>;
<span class="k">UPDATE</span> cuentas <span class="k">SET</span> saldo = saldo - 100 <span class="k">WHERE</span> id = 1;
<span class="k">UPDATE</span> cuentas <span class="k">SET</span> saldo = saldo + 100 <span class="k">WHERE</span> id = 2;
<span class="k">COMMIT</span>;      <span class="c">-- confirma los cambios</span>
<span class="c">-- ROLLBACK;  deshace todo lo hecho desde START TRANSACTION</span></code></pre>
<p>Las transacciones cumplen las propiedades <b>ACID</b>:</p>
<table>
<tr><th>Propiedad</th><th>Significa</th></tr>
<tr><td><b>A</b>tomicidad</td><td>Se hace todo o nada</td></tr>
<tr><td><b>C</b>onsistencia</td><td>La base de datos pasa de un estado válido a otro válido</td></tr>
<tr><td><b>I</b>solamiento</td><td>Las transacciones simultáneas no se estorban entre sí</td></tr>
<tr><td><b>D</b>urabilidad</td><td>Lo confirmado no se pierde aunque se caiga el servidor</td></tr>
</table>`,
check:{q:"A mitad de una transacción detectas un error. ¿Qué sentencia deshace los cambios?", o:["COMMIT","ROLLBACK","DELETE","DROP"], a:1, e:"ROLLBACK devuelve los datos al estado anterior a START TRANSACTION."}},
{h:"Procedimientos y triggers", html:`
<ul>
<li><b>Procedimiento almacenado:</b> un bloque de SQL con nombre y parámetros que se ejecuta con <code>CALL</code>. Útil para operaciones que se repiten.</li>
<li><b>Función:</b> parecida, pero devuelve un valor y se puede usar dentro de un <code>SELECT</code>.</li>
<li><b>Trigger (disparador):</b> se ejecuta automáticamente cuando ocurre un <code>INSERT</code>, <code>UPDATE</code> o <code>DELETE</code> en una tabla.</li>
</ul>
<pre><code><span class="c">-- Guardar un historial cada vez que cambia el precio de un producto</span>
<span class="k">CREATE TRIGGER</span> historial_precio
<span class="k">AFTER UPDATE ON</span> productos <span class="k">FOR EACH ROW</span>
  <span class="k">INSERT INTO</span> cambios_precio (id_producto, precio_antiguo, precio_nuevo, fecha)
  <span class="k">VALUES</span> (OLD.id, OLD.precio, NEW.precio, NOW());</code></pre>
<p>Dentro del trigger, <code>OLD</code> son los valores antes del cambio y <code>NEW</code>, los nuevos.</p>`}
],
quiz:[
{q:"¿Qué devuelve un INNER JOIN?", o:["Todas las filas de las dos tablas","Solo las filas con coincidencia en ambas tablas","Solo la tabla izquierda","Las filas sin coincidencia"], a:1, e:"Las filas que no tienen pareja quedan fuera."},
{q:"¿Cómo encuentras los clientes que no han hecho ningún pedido?", o:["INNER JOIN y WHERE pedido = 0","LEFT JOIN y WHERE pedidos.id IS NULL","RIGHT JOIN sin condición","GROUP BY cliente"], a:1, e:"El LEFT JOIN mantiene a todos los clientes y los que no tienen pedido quedan con NULL."},
{q:"Una subconsulta devuelve una lista de valores. ¿Qué operador usas para comparar?", o:["=","IN","LIKE","BETWEEN"], a:1, e:"IN comprueba si el valor está en la lista."},
{q:"¿Qué es una vista?", o:["Una copia de una tabla","Una consulta guardada que se usa como una tabla","Un índice","Un usuario de solo lectura"], a:1, e:"No almacena datos; ejecuta su SELECT cada vez."},
{q:"¿Qué ventaja de seguridad aporta una vista?", o:["Cifra los datos","Permite mostrar solo ciertas columnas sin dar acceso a la tabla","Hace copias automáticas","Impide los JOIN"], a:1, e:"Puedes dar permiso sobre la vista y no sobre la tabla original."},
{q:"¿Qué propiedad ACID garantiza que una transacción se hace entera o no se hace?", o:["Atomicidad","Consistencia","Isolamiento","Durabilidad"], a:0, e:"Atomicidad: todo o nada."},
{q:"¿Qué sentencia confirma una transacción?", o:["SAVE","COMMIT","END","ROLLBACK"], a:1, e:"COMMIT hace permanentes los cambios."},
{q:"¿Cuándo se ejecuta un trigger?", o:["Cuando lo llamas con CALL","Automáticamente al producirse un INSERT, UPDATE o DELETE","Cada hora","Al arrancar el servidor"], a:1, e:"Se dispara solo ante el evento para el que se definió."}
]});
