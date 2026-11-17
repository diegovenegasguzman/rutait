TEMA("optimizacion-bd", {
title:"Monitorizar y optimizar una base de datos", mins:13,
intro:"Cómo averiguar por qué una base de datos va lenta y cómo arreglarlo: consultas lentas, planes de ejecución, índices bien elegidos y ajustes del servidor.",
sections:[
{h:"Encontrar el problema", html:`
<ul>
<li><b>Registro de consultas lentas</b> (slow query log): guarda las que superan un tiempo.</li>
<li><code>SHOW PROCESSLIST;</code> muestra qué consultas se están ejecutando ahora mismo.</li>
<li><code>SHOW GLOBAL STATUS;</code> da contadores del servidor (conexiones, consultas, uso de caché).</li>
<li>El esquema <b>performance_schema</b> y la vista <code>sys</code> resumen qué consultas consumen más.</li>
</ul>
<pre><code><span class="c"># my.cnf</span>
slow_query_log = 1
long_query_time = 1          <span class="c"># consultas de más de 1 segundo</span>
slow_query_log_file = /var/log/mysql/lentas.log</code></pre>`},
{h:"Leer el plan de ejecución", html:`
<pre><code><span class="k">EXPLAIN SELECT</span> * <span class="k">FROM</span> pedidos <span class="k">WHERE</span> id_cliente = 25 <span class="k">AND</span> fecha &gt;= <span class="s">'2026-01-01'</span>;</code></pre>
<table>
<tr><th>Columna de EXPLAIN</th><th>Qué mirar</th></tr>
<tr><td><code>type</code></td><td><b>ALL</b> = recorre toda la tabla (malo en tablas grandes); <b>ref</b>, <b>range</b> o <b>const</b> = usa índice</td></tr>
<tr><td><code>key</code></td><td>Qué índice usa (NULL = ninguno)</td></tr>
<tr><td><code>rows</code></td><td>Cuántas filas calcula que tendrá que leer</td></tr>
</table>
<p>Solución típica: un índice compuesto en las columnas del <code>WHERE</code>:</p>
<pre><code><span class="k">CREATE INDEX</span> idx_cliente_fecha <span class="k">ON</span> pedidos(id_cliente, fecha);</code></pre>
<p>El orden importa: este índice sirve para buscar por <code>id_cliente</code>, o por <code>id_cliente</code> y <code>fecha</code>, pero no solo por <code>fecha</code>.</p>`,
check:{q:"EXPLAIN muestra type = ALL y key = NULL en una tabla de un millón de filas. ¿Qué significa?", o:["Que la consulta es óptima","Que recorre toda la tabla sin usar ningún índice","Que la tabla está vacía","Que hay un error"], a:1, e:"Es la señal típica de que falta un índice adecuado."}},
{h:"Buenas prácticas y ajustes", html:`
<ul>
<li>Pedir solo las columnas necesarias, no <code>SELECT *</code>.</li>
<li>Evitar funciones sobre columnas indexadas en el <code>WHERE</code>: <code>WHERE YEAR(fecha) = 2026</code> no usa el índice; <code>WHERE fecha &gt;= '2026-01-01' AND fecha &lt; '2027-01-01'</code>, sí.</li>
<li>No crear índices en todo: cada uno ralentiza las escrituras.</li>
<li>Ajustar la memoria del motor: en InnoDB, <code>innodb_buffer_pool_size</code> (en un servidor dedicado, suele ser una parte grande de la RAM).</li>
<li>Mantener estadísticas al día: <code>ANALYZE TABLE</code>.</li>
</ul>
<div class="caso"><b>Caso real</b>Un informe tardaba 40 segundos. EXPLAIN mostró que recorría 3 millones de filas. Con un índice compuesto bien ordenado bajó a 0,2 segundos.</div>`}
],
quiz:[
{q:"¿Qué registro guarda las consultas que tardan más de cierto tiempo?", o:["El binlog","El slow query log","El error log","El general log"], a:1, e:"Se configura con long_query_time."},
{q:"¿Qué comando muestra las consultas que se ejecutan en este momento?", o:["SHOW TABLES","SHOW PROCESSLIST","SHOW GRANTS","EXPLAIN"], a:1, e:"Permite ver consultas bloqueadas o muy largas."},
{q:"En EXPLAIN, ¿qué indica type = ALL?", o:["Usa todos los índices","Recorre la tabla completa","Devuelve todas las columnas","Es la mejor opción"], a:1, e:"Full table scan."},
{q:"Un índice en (id_cliente, fecha), ¿sirve para buscar solo por fecha?", o:["Sí","No, el índice compuesto se usa empezando por la primera columna","Solo los lunes","Depende del motor"], a:1, e:"Funciona de izquierda a derecha."},
{q:"¿Por qué WHERE YEAR(fecha) = 2026 puede no usar el índice de fecha?", o:["Porque YEAR no existe","Porque aplica una función a la columna","Porque 2026 es un número","Siempre lo usa"], a:1, e:"Mejor un rango de fechas sobre la columna tal cual."},
{q:"¿Qué parámetro de InnoDB fija la memoria para datos e índices en caché?", o:["max_connections","innodb_buffer_pool_size","long_query_time","bind-address"], a:1, e:"Es el ajuste de rendimiento más importante de InnoDB."}
]});
