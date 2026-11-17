TEMA("edicion-datos", {
title:"Edición de datos e integridad", mins:14,
intro:"Cómo insertar, modificar y borrar datos de forma segura: inserciones masivas, modificaciones con subconsultas, qué pasa con las claves foráneas al borrar y cómo usar transacciones para no romper nada.",
sections:[
{h:"Insertar datos", html:`
<pre><code><span class="c">-- Varias filas de una vez</span>
<span class="k">INSERT INTO</span> productos (nombre, precio, categoria) <span class="k">VALUES</span>
  (<span class="s">'Ratón'</span>, 15.90, <span class="s">'Periféricos'</span>),
  (<span class="s">'Teclado'</span>, 29.00, <span class="s">'Periféricos'</span>),
  (<span class="s">'Monitor 24"'</span>, 139.00, <span class="s">'Pantallas'</span>);

<span class="c">-- Copiar filas de otra tabla</span>
<span class="k">INSERT INTO</span> clientes_historico (id, nombre, email)
<span class="k">SELECT</span> id, nombre, email <span class="k">FROM</span> clientes <span class="k">WHERE</span> activo = 0;</code></pre>
<ul>
<li>Indica siempre la <b>lista de columnas</b>: si mañana se añade una columna a la tabla, tu <code>INSERT</code> seguirá funcionando.</li>
<li>Las columnas no indicadas toman su valor <code>DEFAULT</code> o <code>NULL</code>; si son <code>NOT NULL</code> sin valor por defecto, el <code>INSERT</code> falla.</li>
</ul>`},
{h:"Modificar y borrar", html:`
<pre><code><span class="c">-- Subir un 10 % los periféricos</span>
<span class="k">UPDATE</span> productos <span class="k">SET</span> precio = precio * 1.10 <span class="k">WHERE</span> categoria = <span class="s">'Periféricos'</span>;

<span class="c">-- Modificar usando una subconsulta</span>
<span class="k">UPDATE</span> clientes <span class="k">SET</span> vip = 1
<span class="k">WHERE</span> id <span class="k">IN</span> (<span class="k">SELECT</span> id_cliente <span class="k">FROM</span> pedidos <span class="k">GROUP BY</span> id_cliente <span class="k">HAVING SUM</span>(total) &gt; 1000);

<span class="c">-- Borrar</span>
<span class="k">DELETE FROM</span> pedidos <span class="k">WHERE</span> fecha &lt; <span class="s">'2020-01-01'</span>;</code></pre>
<p><code>DELETE</code> borra filas y se puede deshacer dentro de una transacción. <code>TRUNCATE TABLE</code> vacía la tabla entera mucho más rápido, pero en la mayoría de SGBD no se puede deshacer.</p>
<div class="note exam"><b>Hábito profesional</b>Antes de un <code>UPDATE</code> o <code>DELETE</code>, ejecuta un <code>SELECT</code> con el mismo <code>WHERE</code> y comprueba cuántas filas salen.</div>`,
check:{q:"Quieres vaciar por completo una tabla de registros temporales de millones de filas lo más rápido posible. ¿Qué usas?", o:["DELETE FROM tabla","TRUNCATE TABLE tabla","DROP DATABASE","UPDATE tabla SET ... = NULL"], a:1, e:"TRUNCATE vacía la tabla sin borrar fila a fila. Ojo: normalmente no se puede deshacer."}},
{h:"Integridad referencial al borrar o modificar", html:`
<p>¿Qué pasa si borras un cliente que tiene pedidos? Depende de cómo se definió la clave foránea:</p>
<table>
<tr><th>Opción</th><th>Al borrar el cliente…</th></tr>
<tr><td><code>RESTRICT</code> / <code>NO ACTION</code></td><td>Da error: no se puede borrar mientras tenga pedidos (es lo habitual por defecto)</td></tr>
<tr><td><code>CASCADE</code></td><td>Se borran también todos sus pedidos</td></tr>
<tr><td><code>SET NULL</code></td><td>Sus pedidos quedan con <code>id_cliente</code> a NULL</td></tr>
</table>
<pre><code><span class="k">FOREIGN KEY</span> (id_cliente) <span class="k">REFERENCES</span> clientes(id)
  <span class="k">ON DELETE RESTRICT ON UPDATE CASCADE</span></code></pre>
<div class="caso"><b>Caso real</b>Alguien define todas las claves con <code>ON DELETE CASCADE</code> «para que no den error». Meses después, un administrativo borra un cliente duplicado… y desaparecen con él cinco años de facturas. <code>CASCADE</code> se usa solo cuando de verdad tiene sentido, como las líneas de una factura.</div>`},
{h:"Transacciones y bloqueos", html:`
<p>Cuando varias modificaciones deben ir juntas, se agrupan en una transacción (<code>START TRANSACTION</code> … <code>COMMIT</code> o <code>ROLLBACK</code>).</p>
<ul>
<li>Mientras una transacción modifica filas, el SGBD las <b>bloquea</b> para que otra transacción no las cambie a la vez.</li>
<li>Si dos transacciones se esperan mutuamente, se produce un <b>interbloqueo (deadlock)</b>. El SGBD lo detecta y cancela una de ellas.</li>
<li>El <b>nivel de aislamiento</b> decide qué ve una transacción de los cambios de otras que aún no se han confirmado.</li>
</ul>
<p>En MySQL/MariaDB, las transacciones solo funcionan con el motor <b>InnoDB</b>, que es el predeterminado.</p>`,
check:{q:"¿Qué ocurre si borras un cliente con pedidos y la clave foránea tiene ON DELETE RESTRICT?", o:["Se borran sus pedidos","El SGBD no deja borrar el cliente","Los pedidos quedan a NULL","Se borra la tabla de pedidos"], a:1, e:"RESTRICT impide borrar una fila a la que otras hacen referencia."}}
],
quiz:[
{q:"¿Por qué conviene indicar la lista de columnas en un INSERT?", o:["Porque es más rápido","Para que siga funcionando aunque cambie la estructura de la tabla","Porque es obligatorio en SQL","Para ahorrar espacio"], a:1, e:"Sin la lista, depende del orden y número exacto de columnas."},
{q:"¿Cómo copias filas de una tabla a otra?", o:["COPY","INSERT INTO … SELECT …","UPDATE … FROM","MOVE"], a:1, e:"El SELECT proporciona las filas a insertar."},
{q:"¿Qué diferencia hay entre DELETE y TRUNCATE?", o:["Ninguna","TRUNCATE vacía la tabla entera de golpe y normalmente no se puede deshacer","DELETE borra la tabla","TRUNCATE solo borra una fila"], a:1, e:"DELETE permite WHERE y rollback; TRUNCATE no."},
{q:"¿Qué hace ON DELETE CASCADE?", o:["Impide borrar","Borra también las filas que hacen referencia a la borrada","Pone NULL","Duplica las filas"], a:1, e:"Útil para entidades dependientes, peligroso si se usa sin pensar."},
{q:"¿Qué hace ON DELETE SET NULL?", o:["Borra las filas hijas","Deja a NULL la clave foránea de las filas hijas","Da error","Borra la tabla"], a:1, e:"Las filas relacionadas se conservan, pero sin referencia."},
{q:"¿Qué haces antes de un UPDATE o DELETE importante?", o:["Nada","Un SELECT con el mismo WHERE para ver qué filas se afectan","Reiniciar el servidor","Borrar los índices"], a:1, e:"Evita sorpresas desagradables."},
{q:"¿Qué es un deadlock en una base de datos?", o:["Un índice dañado","Dos transacciones que se esperan mutuamente","Una tabla vacía","Un usuario bloqueado"], a:1, e:"El SGBD lo detecta y cancela una de las dos."},
{q:"¿Qué motor de MySQL/MariaDB admite transacciones?", o:["MyISAM","InnoDB","CSV","Memory"], a:1, e:"InnoDB es el motor transaccional y el predeterminado."}
]});
