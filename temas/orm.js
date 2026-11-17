TEMA("orm", {
title:"Mapeo objeto-relacional con JPA e Hibernate", mins:14,
intro:"Cómo un ORM elimina la mayoría del SQL de tu aplicación: entidades, relaciones, el EntityManager, consultas JPQL y los errores de rendimiento más típicos.",
sections:[
{h:"Entidades", html:`
<pre><code>@Entity
@Table(name = <span class="s">"alumnos"</span>)
<span class="k">public class</span> Alumno {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    <span class="k">private</span> Long id;

    @Column(nullable = <span class="k">false</span>, length = <span class="s">80</span>)
    <span class="k">private</span> String nombre;

    @ManyToOne
    @JoinColumn(name = <span class="s">"id_curso"</span>)
    <span class="k">private</span> Curso curso;
    <span class="c">// constructor vacío, getters y setters</span>
}

@Entity
<span class="k">public class</span> Curso {
    @Id <span class="k">private</span> Long id;
    @OneToMany(mappedBy = <span class="s">"curso"</span>)
    <span class="k">private</span> List&lt;Alumno&gt; alumnos;
}</code></pre>
<p><b>JPA</b> es el estándar (anotaciones e interfaces) y <b>Hibernate</b>, la implementación más usada. La conexión se configura en <code>persistence.xml</code> o, con Spring Boot, en <code>application.properties</code>.</p>`},
{h:"Operaciones y consultas", html:`
<pre><code>EntityManager em = emf.createEntityManager();
em.getTransaction().begin();
em.persist(<span class="k">new</span> Alumno(<span class="s">"Laia"</span>, curso));        <span class="c">// INSERT</span>
Alumno a = em.find(Alumno.<span class="k">class</span>, <span class="s">5L</span>);        <span class="c">// SELECT por id</span>
a.setNombre(<span class="s">"Laia M."</span>);                       <span class="c">// UPDATE automático al confirmar</span>
em.remove(a);                                   <span class="c">// DELETE</span>
em.getTransaction().commit();

<span class="c">// JPQL: consultas sobre clases y atributos, no sobre tablas</span>
List&lt;Alumno&gt; lista = em.createQuery(
    <span class="s">"SELECT a FROM Alumno a WHERE a.curso.nombre = :c ORDER BY a.nombre"</span>, Alumno.<span class="k">class</span>)
  .setParameter(<span class="s">"c"</span>, <span class="s">"2º DAM"</span>).getResultList();</code></pre>
<p>Los objetos <b>gestionados</b> por el EntityManager se sincronizan solos: si cambias un atributo dentro de una transacción, el ORM genera el UPDATE al hacer commit.</p>`,
check:{q:"¿Sobre qué se escriben las consultas JPQL?", o:["Sobre tablas y columnas","Sobre clases de entidad y sus atributos","Sobre ficheros XML","Sobre JSON"], a:1, e:"El ORM las traduce al SQL de la base de datos concreta."}},
{h:"Carga perezosa y el problema N+1", html:`
<ul>
<li><b>LAZY</b> (perezosa): las relaciones no se cargan hasta que se usan. Es lo recomendable para colecciones.</li>
<li><b>EAGER</b> (ansiosa): se cargan siempre, aunque no se necesiten.</li>
</ul>
<p>El <b>problema N+1</b>: cargas 100 cursos (1 consulta) y luego, al recorrerlos, se lanza una consulta por curso para traer sus alumnos (100 más). Se soluciona con <code>JOIN FETCH</code> en la consulta.</p>
<div class="caso"><b>Consejo</b>Activa el registro del SQL generado (<code>hibernate.show_sql</code>) mientras desarrollas. Verás enseguida si una pantalla lanza cientos de consultas.</div>`}
],
quiz:[
{q:"¿Qué relación hay entre JPA e Hibernate?", o:["Son competidores","JPA es el estándar e Hibernate una implementación","Hibernate es una base de datos","No tienen relación"], a:1, e:"Puedes cambiar de implementación sin cambiar el código JPA."},
{q:"¿Qué anotación indica la clave primaria?", o:["@Entity","@Id","@Column","@Table"], a:1, e:"@GeneratedValue indica cómo se genera."},
{q:"¿Qué método del EntityManager inserta un objeto nuevo?", o:["find","persist","remove","merge"], a:1, e:"find busca, remove borra."},
{q:"¿Qué anotación representa «muchos alumnos pertenecen a un curso» desde Alumno?", o:["@OneToMany","@ManyToOne","@OneToOne","@ManyToMany"], a:1, e:"Desde Curso sería @OneToMany."},
{q:"¿Qué es el problema N+1?", o:["Un error de compilación","Lanzar una consulta extra por cada elemento de una lista","Tener N tablas","Un tipo de índice"], a:1, e:"Se resuelve con JOIN FETCH."},
{q:"¿Qué tipo de carga es la recomendada para colecciones?", o:["EAGER","LAZY","Ninguna","Manual"], a:1, e:"Solo se cargan cuando realmente se usan."}
]});
