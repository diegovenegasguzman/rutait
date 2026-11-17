TEMA("acceso-datos", {
title:"Acceso a datos: ficheros, JDBC y ORM", mins:17,
intro:"Cómo guarda y recupera datos una aplicación Java: ficheros de texto y binarios, formatos de intercambio, conexión a bases de datos con JDBC, mapeo objeto-relacional y bases de datos NoSQL.",
sections:[
{h:"Ficheros de texto y binarios", html:`
<ul>
<li><b>Texto:</b> se pueden abrir con cualquier editor (CSV, TXT, JSON). Se leen por caracteres o por líneas.</li>
<li><b>Binarios:</b> guardan los datos tal como están en memoria (imágenes, objetos serializados). Ocupan menos, pero no se leen a simple vista.</li>
</ul>
<pre><code><span class="c">// Leer un fichero de texto línea a línea</span>
<span class="k">try</span> (BufferedReader br = <span class="k">new</span> BufferedReader(<span class="k">new</span> FileReader(<span class="s">"alumnos.csv"</span>))) {
    String linea;
    <span class="k">while</span> ((linea = br.readLine()) != <span class="k">null</span>) {
        String[] campos = linea.split(<span class="s">";"</span>);
        System.out.println(campos[<span class="s">0</span>]);
    }
} <span class="k">catch</span> (IOException e) {
    System.err.println(<span class="s">"No se pudo leer: "</span> + e.getMessage());
}</code></pre>
<p>El bloque <b>try-with-resources</b> (<code>try (...)</code>) cierra el fichero automáticamente al terminar, aunque haya un error. <code>readLine()</code> devuelve <code>null</code> cuando ya no quedan líneas.</p>`},
{h:"Serialización y formatos de intercambio", html:`
<p><b>Serializar</b> es convertir un objeto en una secuencia de bytes o de texto para guardarlo o enviarlo; deserializar es reconstruirlo.</p>
<ul>
<li>Serialización nativa de Java: la clase implementa <code>Serializable</code> y se usa <code>ObjectOutputStream</code>. Solo la entiende Java.</li>
<li><b>JSON</b> (con librerías como Jackson o Gson) y <b>XML</b> (con JAXB o DOM): los entiende cualquier lenguaje. Son los formatos habituales para intercambiar datos.</li>
</ul>`},
{h:"JDBC: conectar con una base de datos", html:`
<p><b>JDBC</b> es la API estándar de Java para hablar con bases de datos relacionales. Cada SGBD aporta su <b>driver</b>.</p>
<pre><code>String url = <span class="s">"jdbc:mysql://localhost:3306/instituto"</span>;
<span class="k">try</span> (Connection con = DriverManager.getConnection(url, <span class="s">"app"</span>, <span class="s">"clave"</span>);
     PreparedStatement ps = con.prepareStatement(
         <span class="s">"SELECT nombre FROM alumnos WHERE id_curso = ?"</span>)) {

    ps.setInt(<span class="s">1</span>, cursoId);                 <span class="c">// rellena el primer ?</span>
    ResultSet rs = ps.executeQuery();
    <span class="k">while</span> (rs.next()) {
        System.out.println(rs.getString(<span class="s">"nombre"</span>));
    }
}</code></pre>
<ul>
<li><code>Connection</code>: la conexión. <code>PreparedStatement</code>: la consulta. <code>ResultSet</code>: los resultados, que se recorren con <code>next()</code>.</li>
<li><code>executeQuery()</code> para consultas <code>SELECT</code>; <code>executeUpdate()</code> para <code>INSERT</code>, <code>UPDATE</code> y <code>DELETE</code>.</li>
</ul>
<div class="note exam"><b>Inyección SQL</b>Nunca construyas la consulta pegando texto del usuario: <code>"... WHERE nombre = '" + nombre + "'"</code>. Un atacante podría escribir SQL en ese campo. Con <code>PreparedStatement</code> y <code>?</code> los datos se envían por separado y no se pueden ejecutar como código.</div>`},
{h:"Mapeo objeto-relacional (ORM)", html:`
<p>Un <b>ORM</b> traduce automáticamente entre objetos Java y filas de tablas, así que no hace falta escribir SQL para las operaciones habituales. El estándar en Java es <b>JPA</b> y la implementación más usada, <b>Hibernate</b>.</p>
<pre><code>@Entity
<span class="k">public class</span> Alumno {
    @Id @GeneratedValue
    <span class="k">private</span> Long id;
    <span class="k">private</span> String nombre;
    @ManyToOne
    <span class="k">private</span> Curso curso;
}

<span class="c">// Guardar un alumno: el ORM genera el INSERT</span>
em.persist(<span class="k">new</span> Alumno(<span class="s">"Laia"</span>, curso));</code></pre>
<ul>
<li><code>@Entity</code>: la clase se corresponde con una tabla.</li>
<li><code>@Id</code>: el atributo que es clave primaria.</li>
<li><code>@ManyToOne</code>, <code>@OneToMany</code>…: las relaciones entre tablas.</li>
</ul>`},
{h:"Bases de datos NoSQL", html:`
<p>Las bases de datos <b>NoSQL</b> no usan tablas relacionales. Las más habituales:</p>
<table>
<tr><th>Tipo</th><th>Cómo guarda</th><th>Ejemplo</th></tr>
<tr><td>Documentales</td><td>Documentos tipo JSON, cada uno con su propia estructura</td><td>MongoDB</td></tr>
<tr><td>Clave-valor</td><td>Pares clave → valor, muy rápidos</td><td>Redis</td></tr>
<tr><td>De grafos</td><td>Nodos y relaciones</td><td>Neo4j</td></tr>
</table>
<p>Son útiles cuando los datos no tienen una estructura fija o cuando hay volúmenes enormes que reparten entre muchos servidores. Para datos muy relacionados y transacciones (bancos, facturación), lo normal sigue siendo una base de datos relacional.</p>`}
],
quiz:[
{q:"¿Qué clase de JDBC evita la inyección SQL?", o:["Statement","PreparedStatement","ResultSet","DriverManager"], a:1, e:"Envía los datos por separado de la consulta, de modo que no se interpretan como SQL."},
{q:"¿Qué objeto contiene las filas devueltas por una consulta?", o:["Connection","ResultSet","PreparedStatement","Driver"], a:1, e:"Se recorre con next() y se leen las columnas con getString, getInt…"},
{q:"¿Qué hace un ORM?", o:["Cifra la base de datos","Traduce entre objetos y filas de tablas","Hace copias de seguridad","Crea interfaces gráficas"], a:1, e:"Mapea objetos a tablas y genera el SQL automáticamente."},
{q:"En JPA, ¿qué anotación indica que una clase se guarda en una tabla?", o:["@Table","@Entity","@Id","@Column"], a:1, e:"@Entity marca la clase como entidad persistente."},
{q:"¿Qué ventaja tiene try-with-resources?", o:["Hace el código más rápido","Cierra los recursos automáticamente","Evita todas las excepciones","Lee los ficheros en paralelo"], a:1, e:"Aunque se produzca un error, el fichero o la conexión se cierran."},
{q:"¿Qué tipo de datos guarda MongoDB?", o:["Tablas relacionales","Documentos tipo JSON","Grafos","Solo texto plano"], a:1, e:"MongoDB es una base de datos documental."},
{q:"¿Qué método de JDBC usarías para ejecutar un INSERT?", o:["executeQuery()","executeUpdate()","next()","getConnection()"], a:1, e:"executeQuery es para SELECT; executeUpdate, para modificar datos."},
{q:"¿Qué devuelve readLine() cuando no quedan más líneas?", o:["Una cadena vacía","null","-1","Una excepción"], a:1, e:"Por eso el bucle típico es while ((linea = br.readLine()) != null)."}
]});
