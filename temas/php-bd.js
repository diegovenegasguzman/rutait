TEMA("php-bd", {
title:"Acceso a bases de datos desde el servidor", mins:13,
intro:"Cómo una aplicación web lee y guarda datos en MySQL desde PHP de forma segura: conexión con PDO, consultas preparadas, transacciones y buenas prácticas.",
sections:[
{h:"Conectar con PDO", html:`
<pre><code>&lt;?php
$dsn = <span class="s">'mysql:host=localhost;dbname=tienda;charset=utf8mb4'</span>;
<span class="k">try</span> {
    $pdo = <span class="k">new</span> PDO($dsn, <span class="s">'tienda_app'</span>, getenv(<span class="s">'DB_PASS'</span>), [
        PDO::ATTR_ERRMODE =&gt; PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE =&gt; PDO::FETCH_ASSOC,
    ]);
} <span class="k">catch</span> (PDOException $e) {
    error_log($e-&gt;getMessage());
    exit(<span class="s">'Error de conexión'</span>);
}</code></pre>
<ul>
<li><b>PDO</b> funciona con muchos SGBD (MySQL, PostgreSQL, SQLite); cambiar de base de datos apenas exige tocar el código.</li>
<li>La contraseña no se escribe en el código: va en una <b>variable de entorno</b> o en un archivo de configuración fuera de la carpeta pública.</li>
<li>Al usuario no se le muestran los detalles técnicos del error; se guardan en el registro.</li>
</ul>`},
{h:"Consultar y modificar con consultas preparadas", html:`
<pre><code><span class="c">// Leer</span>
$st = $pdo-&gt;prepare(<span class="s">'SELECT id, nombre, precio FROM productos WHERE categoria = :cat ORDER BY precio'</span>);
$st-&gt;execute([<span class="s">'cat'</span> =&gt; $_GET[<span class="s">'cat'</span>] ?? <span class="s">''</span>]);
<span class="k">foreach</span> ($st <span class="k">as</span> $p) {
    <span class="k">echo</span> htmlspecialchars($p[<span class="s">'nombre'</span>]) . <span class="s">' — '</span> . $p[<span class="s">'precio'</span>] . <span class="s">' €&lt;br&gt;'</span>;
}

<span class="c">// Insertar</span>
$st = $pdo-&gt;prepare(<span class="s">'INSERT INTO productos (nombre, precio) VALUES (?, ?)'</span>);
$st-&gt;execute([$nombre, $precio]);
$nuevoId = $pdo-&gt;lastInsertId();</code></pre>
<p>Los marcadores (<code>?</code> o <code>:nombre</code>) separan los datos de la consulta: nunca se ejecutan como SQL. Es la defensa principal contra la <b>inyección SQL</b>.</p>`,
check:{q:"¿Qué es lo que protege de la inyección SQL en el código de ejemplo?", o:["htmlspecialchars","Las consultas preparadas con marcadores","El ORDER BY","El try/catch"], a:1, e:"Los datos se envían aparte y no se interpretan como código SQL. htmlspecialchars protege de XSS al mostrar."}},
{h:"Transacciones y buenas prácticas", html:`
<pre><code>$pdo-&gt;beginTransaction();
<span class="k">try</span> {
    $pdo-&gt;prepare(<span class="s">'UPDATE stock SET cantidad = cantidad - ? WHERE id_producto = ?'</span>)-&gt;execute([$n, $id]);
    $pdo-&gt;prepare(<span class="s">'INSERT INTO pedidos (id_producto, cantidad) VALUES (?, ?)'</span>)-&gt;execute([$id, $n]);
    $pdo-&gt;commit();
} <span class="k">catch</span> (Exception $e) {
    $pdo-&gt;rollBack();
}</code></pre>
<ul>
<li>Usuario de base de datos propio para la aplicación, con los permisos mínimos.</li>
<li>Paginación (<code>LIMIT</code>) en listados largos.</li>
<li>Escapar siempre al mostrar (<code>htmlspecialchars</code>) y validar al recibir.</li>
</ul>
<div class="caso"><b>Caso real</b>Una tienda descontaba el stock y luego fallaba al crear el pedido: desaparecían unidades «fantasma». Con una transacción, o se hacen las dos operaciones o ninguna.</div>`}
],
quiz:[
{q:"¿Qué ventaja tiene PDO frente a funciones específicas de un SGBD?", o:["Es más rápido siempre","Funciona con varios SGBD con el mismo código","No necesita contraseña","Cifra los datos"], a:1, e:"Cambiar de MySQL a PostgreSQL apenas exige cambios."},
{q:"¿Dónde no debe estar la contraseña de la base de datos?", o:["En una variable de entorno","Escrita en el código publicado en la carpeta web","En un archivo fuera de la carpeta pública","En un gestor de secretos"], a:1, e:"Si el código se filtra, la contraseña también."},
{q:"¿Qué hace PDO::ERRMODE_EXCEPTION?", o:["Oculta los errores","Lanza excepciones cuando hay errores de base de datos","Reinicia la conexión","Cifra los errores"], a:1, e:"Permite capturarlos con try/catch."},
{q:"¿Qué método obtiene el id generado por el último INSERT?", o:["lastInsertId()","getId()","insertId","newId()"], a:0, e:"Útil con columnas AUTO_INCREMENT."},
{q:"¿Qué método deshace una transacción en PDO?", o:["undo()","rollBack()","cancel()","revert()"], a:1, e:"beginTransaction, commit y rollBack."},
{q:"¿Por qué se usa LIMIT en los listados?", o:["Por seguridad","Para paginar y no cargar miles de filas de golpe","Porque es obligatorio","Para ordenar"], a:1, e:"Mejora el rendimiento y la experiencia del usuario."}
]});
