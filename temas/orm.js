TEMA("orm", {
 "title": "Mapeo objeto-relacional con JPA e Hibernate",
 "mins": 14,
 "intro": "Cómo un ORM elimina la mayoría del SQL de tu aplicación: entidades, relaciones, el EntityManager, consultas JPQL y los errores de rendimiento más típicos.",
 "sections": [
  {
   "h": "Entidades",
   "html": "\n<pre><code>@Entity\n@Table(name = <span class=\"s\">\"alumnos\"</span>)\n<span class=\"k\">public class</span> Alumno {\n    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n    <span class=\"k\">private</span> Long id;\n\n    @Column(nullable = <span class=\"k\">false</span>, length = <span class=\"s\">80</span>)\n    <span class=\"k\">private</span> String nombre;\n\n    @ManyToOne\n    @JoinColumn(name = <span class=\"s\">\"id_curso\"</span>)\n    <span class=\"k\">private</span> Curso curso;\n    <span class=\"c\">// constructor vacío, getters y setters</span>\n}\n\n@Entity\n<span class=\"k\">public class</span> Curso {\n    @Id <span class=\"k\">private</span> Long id;\n    @OneToMany(mappedBy = <span class=\"s\">\"curso\"</span>)\n    <span class=\"k\">private</span> List&lt;Alumno&gt; alumnos;\n}</code></pre>\n<p><b>JPA</b> es el estándar (anotaciones e interfaces) y <b>Hibernate</b>, la implementación más usada. La conexión se configura en <code>persistence.xml</code> o, con Spring Boot, en <code>application.properties</code>.</p>\n<p>La anotación <code>@Id</code> indica la clave primaria de la entidad, y <code>@GeneratedValue</code>, que la genera la base de datos.</p>\n"
  },
  {
   "h": "Operaciones y consultas",
   "html": "\n<pre><code>EntityManager em = emf.createEntityManager();\nem.getTransaction().begin();\nem.persist(<span class=\"k\">new</span> Alumno(<span class=\"s\">\"Laia\"</span>, curso));        <span class=\"c\">// INSERT</span>\nAlumno a = em.find(Alumno.<span class=\"k\">class</span>, <span class=\"s\">5L</span>);        <span class=\"c\">// SELECT por id</span>\na.setNombre(<span class=\"s\">\"Laia M.\"</span>);                       <span class=\"c\">// UPDATE automático al confirmar</span>\nem.remove(a);                                   <span class=\"c\">// DELETE</span>\nem.getTransaction().commit();\n\n<span class=\"c\">// JPQL: consultas sobre clases y atributos, no sobre tablas</span>\nList&lt;Alumno&gt; lista = em.createQuery(\n    <span class=\"s\">\"SELECT a FROM Alumno a WHERE a.curso.nombre = :c ORDER BY a.nombre\"</span>, Alumno.<span class=\"k\">class</span>)\n  .setParameter(<span class=\"s\">\"c\"</span>, <span class=\"s\">\"2º DAM\"</span>).getResultList();</code></pre>\n<p>Los objetos <b>gestionados</b> por el EntityManager se sincronizan solos: si cambias un atributo dentro de una transacción, el ORM genera el UPDATE al hacer commit.</p>",
   "check": {
    "q": "¿Sobre qué se escriben las consultas JPQL?",
    "o": [
     "Sobre tablas y columnas",
     "Sobre clases de entidad y sus atributos",
     "Sobre ficheros XML",
     "Sobre JSON"
    ],
    "a": 1,
    "e": "El ORM las traduce al SQL de la base de datos concreta."
   }
  },
  {
   "h": "Carga perezosa y el problema N+1",
   "html": "\n<p>Cuando una entidad tiene relaciones, hay que decidir cuándo se cargan los objetos relacionados. Decidirlo mal es la causa más típica de lentitud con un ORM.</p>\n<ul>\n<li><b>LAZY</b> (perezosa): las relaciones no se cargan hasta que se usan. Es lo recomendable para colecciones.</li>\n<li><b>EAGER</b> (ansiosa): se cargan siempre, aunque no se necesiten.</li>\n</ul>\n<p>El <b>problema N+1</b>: cargas 100 cursos (1 consulta) y luego, al recorrerlos, se lanza una consulta por curso para traer sus alumnos (100 más). Se soluciona con <code>JOIN FETCH</code> en la consulta.</p>\n<p>El <b>problema N+1</b> consiste en lanzar una consulta extra por cada elemento de una lista: 1 consulta para traer 100 pedidos y 100 más para traer el cliente de cada uno.</p>\n<div class=\"caso\"><b>Consejo</b>Activa el registro del SQL generado (<code>hibernate.show_sql</code>) mientras desarrollas. Verás enseguida si una pantalla lanza cientos de consultas.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué relación hay entre JPA e Hibernate?",
   "o": [
    "Son competidores",
    "JPA es el estándar e Hibernate una implementación",
    "Hibernate es una base de datos",
    "No tienen relación"
   ],
   "a": 1,
   "e": "Puedes cambiar de implementación sin cambiar el código JPA."
  },
  {
   "q": "¿Qué anotación indica la clave primaria?",
   "o": [
    "@Entity",
    "@Id",
    "@Column",
    "@Table"
   ],
   "a": 1,
   "e": "@GeneratedValue indica cómo se genera."
  },
  {
   "q": "¿Qué método del EntityManager inserta un objeto nuevo?",
   "o": [
    "find",
    "persist",
    "remove",
    "merge"
   ],
   "a": 1,
   "e": "find busca, remove borra."
  },
  {
   "q": "¿Qué anotación representa «muchos alumnos pertenecen a un curso» desde Alumno?",
   "o": [
    "@OneToMany",
    "@ManyToOne",
    "@OneToOne",
    "@ManyToMany"
   ],
   "a": 1,
   "e": "Desde Curso sería @OneToMany."
  },
  {
   "q": "¿Qué es el problema N+1?",
   "o": [
    "Un error de compilación",
    "Lanzar una consulta extra por cada elemento de una lista",
    "Tener N tablas",
    "Un tipo de índice"
   ],
   "a": 1,
   "e": "Se resuelve con JOIN FETCH."
  },
  {
   "q": "¿Qué tipo de carga es la recomendada para colecciones?",
   "o": [
    "EAGER",
    "LAZY",
    "Ninguna",
    "Manual"
   ],
   "a": 1,
   "e": "Solo se cargan cuando realmente se usan."
  }
 ]
});
