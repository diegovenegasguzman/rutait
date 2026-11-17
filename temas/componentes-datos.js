TEMA("componentes-datos", {
title:"Componentes de acceso a datos", mins:11,
intro:"Cómo se organiza el acceso a datos en aplicaciones reales: patrones DAO y Repository, componentes reutilizables, y cómo Spring Data los genera casi solos.",
sections:[
{h:"Separar el acceso a datos", html:`
<p>Una aplicación bien organizada separa capas: la interfaz, la lógica de negocio y el acceso a datos. La lógica no debería saber si los datos vienen de MySQL, de un fichero o de una API.</p>
<pre><code><span class="k">public interface</span> AlumnoDAO {
    Optional&lt;Alumno&gt; buscar(<span class="k">long</span> id);
    List&lt;Alumno&gt; listar();
    <span class="k">void</span> guardar(Alumno a);
    <span class="k">void</span> borrar(<span class="k">long</span> id);
}
<span class="k">public class</span> AlumnoDAOJdbc <span class="k">implements</span> AlumnoDAO { ... }   <span class="c">// con JDBC</span>
<span class="k">public class</span> AlumnoDAOJpa  <span class="k">implements</span> AlumnoDAO { ... }   <span class="c">// con JPA</span></code></pre>
<p>Al programar contra la <b>interfaz</b>, puedes cambiar la implementación (o usar una falsa en las pruebas) sin tocar el resto.</p>`},
{h:"Componentes reutilizables: JavaBeans", html:`
<p>Un <b>JavaBean</b> es una clase que sigue unas convenciones para que otras herramientas puedan usarla automáticamente:</p>
<ul>
<li>Constructor público sin parámetros.</li>
<li>Atributos privados con <b>getters y setters</b> (<code>getNombre</code>, <code>setNombre</code>, <code>isActivo</code>).</li>
<li>Serializable.</li>
</ul>
<p>Los componentes se empaquetan en un <b>.jar</b> y se reutilizan en otros proyectos como una dependencia más de Maven o Gradle.</p>`,
check:{q:"¿Qué ventaja da programar la lógica contra una interfaz DAO?", o:["Más velocidad","Poder cambiar la implementación de acceso a datos sin tocar el resto","Menos código siempre","No necesitar base de datos"], a:1, e:"También permite usar implementaciones falsas en las pruebas."}},
{h:"Spring Data", html:`
<p>Con <b>Spring Data JPA</b> basta con declarar una interfaz y el framework genera la implementación:</p>
<pre><code><span class="k">public interface</span> AlumnoRepository <span class="k">extends</span> JpaRepository&lt;Alumno, Long&gt; {
    List&lt;Alumno&gt; findByCursoNombreOrderByNombre(String curso);   <span class="c">// la consulta se deduce del nombre</span>
}</code></pre>
<p>Ya trae <code>save</code>, <code>findById</code>, <code>findAll</code>, <code>delete</code>, paginación y ordenación. Es el estándar en aplicaciones Java empresariales.</p>
<div class="caso"><b>En el trabajo</b>La mayoría de ofertas para desarrolladores Java piden Spring Boot y Spring Data. Este patrón lo verás desde el primer día.</div>`}
],
quiz:[
{q:"¿Qué hace un DAO?", o:["Dibuja la interfaz","Encapsula el acceso a datos de una entidad","Compila el código","Gestiona usuarios"], a:1, e:"Data Access Object."},
{q:"¿Qué requisito tiene un JavaBean?", o:["Ser abstracto","Constructor público sin parámetros, y getters y setters","No tener atributos","Ser estático"], a:1, e:"Así las herramientas pueden manipularlo automáticamente."},
{q:"¿En qué formato se empaqueta un componente Java para reutilizarlo?", o:[".exe",".jar",".zip de imágenes",".sql"], a:1, e:"Y se añade como dependencia."},
{q:"¿Qué genera Spring Data JPA?", o:["La base de datos","La implementación de los repositorios a partir de la interfaz","La interfaz gráfica","Los tests"], a:1, e:"Incluso deduce consultas a partir del nombre del método."},
{q:"¿Qué devuelve un método que puede no encontrar resultado, como buscar(id)?", o:["null siempre","Optional","Una excepción siempre","void"], a:1, e:"Optional obliga a tratar el caso de «no encontrado»."},
{q:"¿De qué interfaz se extiende un repositorio de Spring Data JPA?", o:["JpaRepository","Runnable","Serializable","Comparable"], a:0, e:"JpaRepository<Entidad, TipoId>."}
]});
