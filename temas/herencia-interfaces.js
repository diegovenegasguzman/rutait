TEMA("herencia-interfaces", {
 "title": "Uso avanzado de clases: abstractas, interfaces y genéricos",
 "mins": 14,
 "intro": "Las herramientas para diseñar jerarquías de clases flexibles: clases abstractas, interfaces, la clase Object y sus métodos, y los tipos genéricos.",
 "sections": [
  {
   "h": "Clases abstractas",
   "html": "\n<p>Una clase <b>abstracta</b> no se puede instanciar: sirve de base común y puede obligar a las hijas a implementar ciertos métodos.</p>\n<pre><code><span class=\"k\">public abstract class</span> Figura {\n    <span class=\"k\">public abstract double</span> area();               <span class=\"c\">// sin cuerpo</span>\n    <span class=\"k\">public</span> String describir() { <span class=\"k\">return</span> <span class=\"s\">\"Área: \"</span> + area(); }\n}\n<span class=\"k\">public class</span> Circulo <span class=\"k\">extends</span> Figura {\n    <span class=\"k\">private double</span> r;\n    <span class=\"k\">public</span> Circulo(<span class=\"k\">double</span> r) { <span class=\"k\">this</span>.r = r; }\n    @Override <span class=\"k\">public double</span> area() { <span class=\"k\">return</span> Math.PI * r * r; }\n}\n\nList&lt;Figura&gt; figuras = List.of(<span class=\"k\">new</span> Circulo(<span class=\"s\">1</span>), <span class=\"k\">new</span> Cuadrado(<span class=\"s\">2</span>));\n<span class=\"k\">for</span> (Figura f : figuras) System.out.println(f.describir());   <span class=\"c\">// polimorfismo</span></code></pre>"
  },
  {
   "h": "Interfaces",
   "html": "\n<p>Una <b>interfaz</b> es un contrato: dice qué métodos debe tener una clase, sin importar de quién herede. Una clase puede implementar varias.</p>\n<pre><code><span class=\"k\">public interface</span> Exportable { String aCSV(); }\n<span class=\"k\">public class</span> Alumno <span class=\"k\">extends</span> Persona <span class=\"k\">implements</span> Exportable, Comparable&lt;Alumno&gt; {\n    <span class=\"k\">public</span> String aCSV() { <span class=\"k\">return</span> nombre + <span class=\"s\">\";\"</span> + nota; }\n    <span class=\"k\">public int</span> compareTo(Alumno o) { <span class=\"k\">return</span> Double.compare(nota, o.nota); }\n}</code></pre>\n<table>\n<tr><th></th><th>Clase abstracta</th><th>Interfaz</th></tr>\n<tr><td>Herencia</td><td>Solo una</td><td>Varias</td></tr>\n<tr><td>Atributos</td><td>Puede tener estado</td><td>Solo constantes</td></tr>\n<tr><td>Uso</td><td>«Es un» con código común</td><td>«Puede hacer» una capacidad</td></tr>\n</table>\n<p>Interfaces muy usadas: <code>Comparable</code> (orden natural), <code>Comparator</code>, <code>Runnable</code>, <code>Iterable</code>.</p>\n<p>Una clase Java solo puede heredar de <b>una</b> clase, pero puede implementar <b>todas las interfaces que quiera</b>.</p>\n",
   "check": {
    "q": "¿Puede una clase Java implementar varias interfaces?",
    "o": [
     "No",
     "Sí",
     "Solo dos",
     "Solo si es abstracta"
    ],
    "a": 1,
    "e": "Solo puede heredar de una clase, pero implementar todas las interfaces que quiera."
   }
  },
  {
   "h": "La clase Object y los genéricos",
   "html": "\n<p>Todas las clases heredan de <code>Object</code>. Conviene sobrescribir:</p>\n<ul>\n<li><code>toString()</code>: texto que representa al objeto (lo usa <code>println</code>).</li>\n<li><code>equals()</code> y <code>hashCode()</code>: cuándo dos objetos son iguales. Se sobrescriben <b>siempre juntos</b>; si no, HashSet y HashMap fallan.</li>\n</ul>\n<p>Los <b>genéricos</b> permiten escribir clases que funcionan con cualquier tipo, comprobado en compilación:</p>\n<pre><code><span class=\"k\">public class</span> Caja&lt;T&gt; {\n    <span class=\"k\">private</span> T contenido;\n    <span class=\"k\">public void</span> guardar(T x) { contenido = x; }\n    <span class=\"k\">public</span> T sacar() { <span class=\"k\">return</span> contenido; }\n}\nCaja&lt;String&gt; c = <span class=\"k\">new</span> Caja&lt;&gt;();</code></pre>\n<p>Los <b>records</b> (Java 16+) crean clases de datos inmutables con constructor, getters, equals, hashCode y toString automáticos: <code>record Punto(int x, int y) {}</code></p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Se puede crear un objeto de una clase abstracta con new?",
   "o": [
    "Sí",
    "No",
    "Solo si no tiene métodos",
    "Solo con genéricos"
   ],
   "a": 1,
   "e": "Se crean objetos de sus clases hijas concretas."
  },
  {
   "q": "¿Qué debe hacer una clase hija con los métodos abstractos del padre?",
   "o": [
    "Nada",
    "Implementarlos (o ser también abstracta)",
    "Borrarlos",
    "Hacerlos estáticos"
   ],
   "a": 1,
   "e": "Si no, no compila."
  },
  {
   "q": "¿Qué interfaz define el orden natural de los objetos?",
   "o": [
    "Runnable",
    "Comparable",
    "Serializable",
    "Iterable"
   ],
   "a": 1,
   "e": "Con compareTo."
  },
  {
   "q": "¿Qué métodos de Object deben sobrescribirse juntos?",
   "o": [
    "toString y clone",
    "equals y hashCode",
    "finalize y wait",
    "getClass y notify"
   ],
   "a": 1,
   "e": "Si no, las colecciones hash no funcionan bien."
  },
  {
   "q": "¿Para qué sirven los genéricos?",
   "o": [
    "Para comprimir",
    "Para escribir clases que funcionan con cualquier tipo, comprobado en compilación",
    "Para hilos",
    "Para ficheros"
   ],
   "a": 1,
   "e": "List<String> es un ejemplo."
  },
  {
   "q": "¿Qué genera automáticamente un record?",
   "o": [
    "Una base de datos",
    "Constructor, getters, equals, hashCode y toString",
    "Una interfaz gráfica",
    "Un hilo"
   ],
   "a": 1,
   "e": "Ideal para clases que solo guardan datos."
  }
 ]
});
