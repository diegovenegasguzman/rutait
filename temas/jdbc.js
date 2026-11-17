TEMA("jdbc", {
title:"Bases de datos desde Java con JDBC", mins:13,
intro:"Cómo un programa Java se conecta a una base de datos relacional, ejecuta consultas seguras, recorre resultados y gestiona transacciones con JDBC.",
sections:[
{h:"Conectar", html:`
<ul>
<li><b>JDBC</b> es la API estándar de Java para bases de datos. Cada SGBD aporta su <b>driver</b> (un .jar que se añade con Maven/Gradle).</li>
<li>La conexión se hace con una <b>URL JDBC</b>: <code>jdbc:mysql://localhost:3306/instituto</code>, <code>jdbc:postgresql://…</code>, <code>jdbc:sqlite:datos.db</code>.</li>
</ul>
<pre><code><span class="k">try</span> (Connection con = DriverManager.getConnection(url, usuario, clave)) {
    <span class="c">// trabajar con la base de datos</span>
} <span class="k">catch</span> (SQLException e) {
    System.err.println(<span class="s">"Error de base de datos: "</span> + e.getMessage());
}</code></pre>
<p>En aplicaciones reales se usa un <b>pool de conexiones</b> (HikariCP) para no abrir una nueva en cada operación.</p>`},
{h:"Consultas y resultados", html:`
<pre><code>String sql = <span class="s">"SELECT id, nombre, nota FROM alumnos WHERE nota &gt;= ? ORDER BY nota DESC"</span>;
<span class="k">try</span> (PreparedStatement ps = con.prepareStatement(sql)) {
    ps.setDouble(<span class="s">1</span>, <span class="s">5.0</span>);
    <span class="k">try</span> (ResultSet rs = ps.executeQuery()) {
        <span class="k">while</span> (rs.next()) {
            System.out.println(rs.getString(<span class="s">"nombre"</span>) + <span class="s">": "</span> + rs.getDouble(<span class="s">"nota"</span>));
        }
    }
}

<span class="c">// Modificar: devuelve las filas afectadas</span>
PreparedStatement up = con.prepareStatement(<span class="s">"UPDATE alumnos SET nota = ? WHERE id = ?"</span>);
up.setDouble(<span class="s">1</span>, <span class="s">9</span>); up.setInt(<span class="s">2</span>, <span class="s">7</span>);
<span class="k">int</span> filas = up.executeUpdate();</code></pre>
<p>Usa siempre <code>PreparedStatement</code> con <code>?</code>: los datos se envían separados y se evita la <b>inyección SQL</b>.</p>`,
check:{q:"¿Qué método mueve el ResultSet a la siguiente fila y devuelve false cuando no hay más?", o:["hasNext()","next()","fetch()","read()"], a:1, e:"Por eso se recorre con while (rs.next())."}},
{h:"Transacciones y diseño", html:`
<pre><code>con.setAutoCommit(<span class="k">false</span>);
<span class="k">try</span> {
    <span class="c">// varias operaciones</span>
    con.commit();
} <span class="k">catch</span> (SQLException e) {
    con.rollback();
}</code></pre>
<p>Por defecto, cada sentencia se confirma sola (<b>autocommit</b>). Para agrupar varias, se desactiva y se confirma al final.</p>
<p>Buena práctica: separar el acceso a datos en clases <b>DAO</b> (Data Access Object), como <code>AlumnoDAO</code> con <code>buscar()</code>, <code>guardar()</code> y <code>borrar()</code>. El resto del programa no sabe nada de SQL.</p>
<div class="caso"><b>Lo verás en 2º</b>En Acceso a datos se sustituye mucho de este código por un ORM como Hibernate, que genera el SQL automáticamente.</div>`}
],
quiz:[
{q:"¿Qué necesita JDBC para conectarse a un SGBD concreto?", o:["Un navegador","Su driver","Un servidor web","Nada"], a:1, e:"Cada SGBD proporciona su driver JDBC."},
{q:"¿Qué método ejecuta un SELECT?", o:["executeUpdate()","executeQuery()","run()","select()"], a:1, e:"executeUpdate es para INSERT, UPDATE y DELETE."},
{q:"¿Qué devuelve executeUpdate()?", o:["Un ResultSet","El número de filas afectadas","true o false","Nada"], a:1, e:"Útil para comprobar que se modificó algo."},
{q:"¿Por qué usar PreparedStatement?", o:["Es obligatorio","Evita la inyección SQL y reutiliza la consulta","Es más corto","Cifra la conexión"], a:1, e:"Los parámetros se envían separados de la consulta."},
{q:"¿Qué hay que hacer para agrupar varias operaciones en una transacción?", o:["Nada","setAutoCommit(false) y luego commit()","Abrir varias conexiones","Usar Statement"], a:1, e:"Y rollback() si algo falla."},
{q:"¿Qué es un DAO?", o:["Un driver","Una clase que encapsula el acceso a datos de una entidad","Una base de datos","Un tipo de consulta"], a:1, e:"Separa la lógica de negocio del SQL."}
]});
