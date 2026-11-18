TEMA("jdbc", {
 "title": "Bases de datos desde Java con JDBC",
 "mins": 13,
 "intro": "Cómo un programa Java se conecta a una base de datos relacional, ejecuta consultas seguras, recorre resultados y gestiona transacciones con JDBC.",
 "sections": [
  {
   "h": "Conectar",
   "html": "\n<p>Para que un programa Java hable con una base de datos necesita una conexión. JDBC es la forma estándar de abrirla.</p>\n<ul>\n<li><b>JDBC</b> es la API estándar de Java para bases de datos. Cada SGBD aporta su <b>driver</b> (un .jar que se añade con Maven/Gradle).</li>\n<li>La conexión se hace con una <b>URL JDBC</b>: <code>jdbc:mysql://localhost:3306/instituto</code>, <code>jdbc:postgresql://…</code>, <code>jdbc:sqlite:datos.db</code>.</li>\n</ul>\n<pre><code><span class=\"k\">try</span> (Connection con = DriverManager.getConnection(url, usuario, clave)) {\n    <span class=\"c\">// trabajar con la base de datos</span>\n} <span class=\"k\">catch</span> (SQLException e) {\n    System.err.println(<span class=\"s\">\"Error de base de datos: \"</span> + e.getMessage());\n}</code></pre>\n<p>En aplicaciones reales se usa un <b>pool de conexiones</b> (HikariCP) para no abrir una nueva en cada operación.</p>"
  },
  {
   "h": "Consultas y resultados",
   "html": "\n<pre><code>String sql = <span class=\"s\">\"SELECT id, nombre, nota FROM alumnos WHERE nota &gt;= ? ORDER BY nota DESC\"</span>;\n<span class=\"k\">try</span> (PreparedStatement ps = con.prepareStatement(sql)) {\n    ps.setDouble(<span class=\"s\">1</span>, <span class=\"s\">5.0</span>);\n    <span class=\"k\">try</span> (ResultSet rs = ps.executeQuery()) {\n        <span class=\"k\">while</span> (rs.next()) {\n            System.out.println(rs.getString(<span class=\"s\">\"nombre\"</span>) + <span class=\"s\">\": \"</span> + rs.getDouble(<span class=\"s\">\"nota\"</span>));\n        }\n    }\n}\n\n<span class=\"c\">// Modificar: devuelve las filas afectadas</span>\nPreparedStatement up = con.prepareStatement(<span class=\"s\">\"UPDATE alumnos SET nota = ? WHERE id = ?\"</span>);\nup.setDouble(<span class=\"s\">1</span>, <span class=\"s\">9</span>); up.setInt(<span class=\"s\">2</span>, <span class=\"s\">7</span>);\n<span class=\"k\">int</span> filas = up.executeUpdate();</code></pre>\n<p>Usa siempre <code>PreparedStatement</code> con <code>?</code>: los datos se envían separados y se evita la <b>inyección SQL</b>.</p>\n<p>Las sentencias <code>SELECT</code> se ejecutan con <code>executeQuery()</code>, que devuelve un <code>ResultSet</code>; las que modifican datos, con <code>executeUpdate()</code>. El método <code>next()</code> mueve el <code>ResultSet</code> a la siguiente fila y devuelve <code>false</code> cuando no hay más.</p>\n",
   "check": {
    "q": "¿Qué método mueve el ResultSet a la siguiente fila y devuelve false cuando no hay más?",
    "o": [
     "hasNext()",
     "next()",
     "fetch()",
     "read()"
    ],
    "a": 1,
    "e": "Por eso se recorre con while (rs.next())."
   }
  },
  {
   "h": "Transacciones y diseño",
   "html": "\n<pre><code>con.setAutoCommit(<span class=\"k\">false</span>);\n<span class=\"k\">try</span> {\n    <span class=\"c\">// varias operaciones</span>\n    con.commit();\n} <span class=\"k\">catch</span> (SQLException e) {\n    con.rollback();\n}</code></pre>\n<p>Por defecto, cada sentencia se confirma sola (<b>autocommit</b>). Para agrupar varias, se desactiva y se confirma al final.</p>\n<p>Buena práctica: separar el acceso a datos en clases <b>DAO</b> (Data Access Object), como <code>AlumnoDAO</code> con <code>buscar()</code>, <code>guardar()</code> y <code>borrar()</code>. El resto del programa no sabe nada de SQL.</p>\n<p>Para agrupar varias operaciones en una transacción se llama a <code>setAutoCommit(false)</code>, se ejecutan las operaciones y luego <code>commit()</code>; si algo falla, <code>rollback()</code>. Es habitual reunir todo el acceso a datos de una entidad en un <b>DAO</b>, una clase que lo encapsula.</p>\n<div class=\"caso\"><b>Lo verás en 2º</b>En Acceso a datos se sustituye mucho de este código por un ORM como Hibernate, que genera el SQL automáticamente.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué necesita JDBC para conectarse a un SGBD concreto?",
   "o": [
    "Un navegador",
    "Su driver",
    "Un servidor web",
    "Nada"
   ],
   "a": 1,
   "e": "Cada SGBD proporciona su driver JDBC."
  },
  {
   "q": "¿Qué método ejecuta un SELECT?",
   "o": [
    "executeUpdate()",
    "executeQuery()",
    "run()",
    "select()"
   ],
   "a": 1,
   "e": "executeUpdate es para INSERT, UPDATE y DELETE."
  },
  {
   "q": "¿Qué devuelve executeUpdate()?",
   "o": [
    "Un ResultSet",
    "El número de filas afectadas",
    "true o false",
    "Nada"
   ],
   "a": 1,
   "e": "Útil para comprobar que se modificó algo."
  },
  {
   "q": "¿Por qué usar PreparedStatement?",
   "o": [
    "Es obligatorio",
    "Evita la inyección SQL y reutiliza la consulta",
    "Es más corto",
    "Cifra la conexión"
   ],
   "a": 1,
   "e": "Los parámetros se envían separados de la consulta."
  },
  {
   "q": "¿Qué hay que hacer para agrupar varias operaciones en una transacción?",
   "o": [
    "Nada",
    "setAutoCommit(false) y luego commit()",
    "Abrir varias conexiones",
    "Usar Statement"
   ],
   "a": 1,
   "e": "Y rollback() si algo falla."
  },
  {
   "q": "¿Qué es un DAO?",
   "o": [
    "Un driver",
    "Una clase que encapsula el acceso a datos de una entidad",
    "Una base de datos",
    "Un tipo de consulta"
   ],
   "a": 1,
   "e": "Separa la lógica de negocio del SQL."
  }
 ]
});
