TEMA("colecciones", {
 "title": "Arrays y colecciones",
 "mins": 14,
 "intro": "Cómo guardar muchos datos en una sola variable: arrays de tamaño fijo, y las colecciones de Java (List, Set y Map) que crecen según las necesitas.",
 "sections": [
  {
   "h": "Arrays",
   "html": "\n<pre><code><span class=\"k\">int</span>[] notas = <span class=\"k\">new int</span>[<span class=\"s\">5</span>];          <span class=\"c\">// 5 posiciones, de la 0 a la 4</span>\nnotas[<span class=\"s\">0</span>] = <span class=\"s\">7</span>;\nString[] dias = {<span class=\"s\">\"lun\"</span>, <span class=\"s\">\"mar\"</span>, <span class=\"s\">\"mié\"</span>};\n\n<span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"s\">0</span>; i &lt; notas.length; i++) { ... }\n<span class=\"k\">for</span> (String d : dias) System.out.println(d);\n\n<span class=\"k\">int</span>[][] tablero = <span class=\"k\">new int</span>[<span class=\"s\">3</span>][<span class=\"s\">3</span>];     <span class=\"c\">// matriz (array de 2 dimensiones)</span>\nArrays.sort(notas);</code></pre>\n<ul>\n<li>El primer índice es <b>0</b> y el último, <code>length - 1</code>. Acceder fuera lanza <code>ArrayIndexOutOfBoundsException</code>.</li>\n<li>Su tamaño <b>no puede cambiar</b> una vez creado.</li>\n</ul>\n<p>Los índices empiezan en 0. Por eso en un array de <code>length</code> 5 el último índice válido es <b>4</b>; pedir el 5 lanza <code>ArrayIndexOutOfBoundsException</code>.</p>\n",
   "check": {
    "q": "Un array tiene length 5. ¿Cuál es su último índice válido?",
    "o": [
     "5",
     "4",
     "6",
     "0"
    ],
    "a": 1,
    "e": "Los índices van de 0 a length - 1."
   }
  },
  {
   "h": "Colecciones: List, Set y Map",
   "html": "\n<p>Los arrays tienen un tamaño fijo. Cuando no sabes cuántos elementos tendrás, se usan colecciones, que crecen solas. Hay tres tipos principales.</p>\n<table>\n<tr><th>Interfaz</th><th>Características</th><th>Implementación habitual</th></tr>\n<tr><td>List</td><td>Ordenada por posición, admite repetidos</td><td>ArrayList</td></tr>\n<tr><td>Set</td><td>Sin repetidos</td><td>HashSet (sin orden), TreeSet (ordenado)</td></tr>\n<tr><td>Map</td><td>Pares clave → valor, claves únicas</td><td>HashMap, TreeMap</td></tr>\n</table>\n<pre><code>List&lt;String&gt; alumnos = <span class=\"k\">new</span> ArrayList&lt;&gt;();\nalumnos.add(<span class=\"s\">\"Laia\"</span>); alumnos.add(<span class=\"s\">\"Marc\"</span>);\nalumnos.get(<span class=\"s\">0</span>);  alumnos.size();  alumnos.remove(<span class=\"s\">\"Marc\"</span>);\n\nSet&lt;String&gt; ciudades = <span class=\"k\">new</span> HashSet&lt;&gt;(List.of(<span class=\"s\">\"Lleida\"</span>, <span class=\"s\">\"Girona\"</span>, <span class=\"s\">\"Lleida\"</span>));  <span class=\"c\">// 2 elementos</span>\n\nMap&lt;String, Integer&gt; notas = <span class=\"k\">new</span> HashMap&lt;&gt;();\nnotas.put(<span class=\"s\">\"Laia\"</span>, <span class=\"s\">8</span>);\nnotas.get(<span class=\"s\">\"Laia\"</span>);                 <span class=\"c\">// 8</span>\nnotas.getOrDefault(<span class=\"s\">\"Pau\"</span>, <span class=\"s\">0</span>);      <span class=\"c\">// 0</span></code></pre>\n<p>Las colecciones solo guardan objetos: para números se usan <code>Integer</code>, <code>Double</code>… (Java convierte automáticamente: <b>autoboxing</b>).</p>\n<p>En una <code>List</code>, <code>size()</code> devuelve el número de elementos. En un <code>Map</code>, <code>getOrDefault(clave, valor)</code> devuelve el valor de esa clave o, si no existe, el valor por defecto indicado.</p>\n"
  },
  {
   "h": "Recorrer, ordenar y filtrar",
   "html": "\n<pre><code>Collections.sort(alumnos);\nalumnos.sort(Comparator.comparing(String::length));\n\n<span class=\"k\">for</span> (Map.Entry&lt;String, Integer&gt; e : notas.entrySet())\n    System.out.println(e.getKey() + <span class=\"s\">\": \"</span> + e.getValue());\n\n<span class=\"c\">// Streams: filtrar y transformar de forma declarativa</span>\nList&lt;String&gt; aprobados = notas.entrySet().stream()\n    .filter(e -&gt; e.getValue() &gt;= <span class=\"s\">5</span>)\n    .map(Map.Entry::getKey)\n    .toList();</code></pre>\n<div class=\"caso\"><b>Elegir bien</b>¿Necesitas buscar por un identificador? Map. ¿Evitar duplicados? Set. ¿Mantener el orden de inserción y acceder por posición? List.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Puede cambiar el tamaño de un array después de crearlo?",
   "o": [
    "Sí",
    "No",
    "Solo si es de String",
    "Solo con sort"
   ],
   "a": 1,
   "e": "Para tamaño variable se usan colecciones como ArrayList."
  },
  {
   "q": "¿Qué colección no admite elementos repetidos?",
   "o": [
    "List",
    "Set",
    "ArrayList",
    "Array"
   ],
   "a": 1,
   "e": "Un HashSet ignora los duplicados."
  },
  {
   "q": "¿Qué colección guarda pares clave → valor?",
   "o": [
    "List",
    "Set",
    "Map",
    "Queue"
   ],
   "a": 2,
   "e": "HashMap es la implementación más habitual."
  },
  {
   "q": "¿Qué método devuelve el número de elementos de una List?",
   "o": [
    "length",
    "size()",
    "count()",
    "length()"
   ],
   "a": 1,
   "e": "Los arrays usan la propiedad length."
  },
  {
   "q": "¿Qué devuelve getOrDefault(\"Pau\", 0) si \"Pau\" no está en el Map?",
   "o": [
    "null",
    "0",
    "Error",
    "\"Pau\""
   ],
   "a": 1,
   "e": "Devuelve el valor por defecto indicado."
  },
  {
   "q": "¿Qué es el autoboxing?",
   "o": [
    "Comprimir colecciones",
    "La conversión automática entre int e Integer",
    "Un tipo de bucle",
    "Ordenar"
   ],
   "a": 1,
   "e": "Permite usar números en colecciones de objetos."
  }
 ]
});
