TEMA("colecciones", {
title:"Arrays y colecciones", mins:14,
intro:"Cómo guardar muchos datos en una sola variable: arrays de tamaño fijo, y las colecciones de Java (List, Set y Map) que crecen según las necesitas.",
sections:[
{h:"Arrays", html:`
<pre><code><span class="k">int</span>[] notas = <span class="k">new int</span>[<span class="s">5</span>];          <span class="c">// 5 posiciones, de la 0 a la 4</span>
notas[<span class="s">0</span>] = <span class="s">7</span>;
String[] dias = {<span class="s">"lun"</span>, <span class="s">"mar"</span>, <span class="s">"mié"</span>};

<span class="k">for</span> (<span class="k">int</span> i = <span class="s">0</span>; i &lt; notas.length; i++) { ... }
<span class="k">for</span> (String d : dias) System.out.println(d);

<span class="k">int</span>[][] tablero = <span class="k">new int</span>[<span class="s">3</span>][<span class="s">3</span>];     <span class="c">// matriz (array de 2 dimensiones)</span>
Arrays.sort(notas);</code></pre>
<ul>
<li>El primer índice es <b>0</b> y el último, <code>length - 1</code>. Acceder fuera lanza <code>ArrayIndexOutOfBoundsException</code>.</li>
<li>Su tamaño <b>no puede cambiar</b> una vez creado.</li>
</ul>`,
check:{q:"Un array tiene length 5. ¿Cuál es su último índice válido?", o:["5","4","6","0"], a:1, e:"Los índices van de 0 a length - 1."}},
{h:"Colecciones: List, Set y Map", html:`
<table>
<tr><th>Interfaz</th><th>Características</th><th>Implementación habitual</th></tr>
<tr><td>List</td><td>Ordenada por posición, admite repetidos</td><td>ArrayList</td></tr>
<tr><td>Set</td><td>Sin repetidos</td><td>HashSet (sin orden), TreeSet (ordenado)</td></tr>
<tr><td>Map</td><td>Pares clave → valor, claves únicas</td><td>HashMap, TreeMap</td></tr>
</table>
<pre><code>List&lt;String&gt; alumnos = <span class="k">new</span> ArrayList&lt;&gt;();
alumnos.add(<span class="s">"Laia"</span>); alumnos.add(<span class="s">"Marc"</span>);
alumnos.get(<span class="s">0</span>);  alumnos.size();  alumnos.remove(<span class="s">"Marc"</span>);

Set&lt;String&gt; ciudades = <span class="k">new</span> HashSet&lt;&gt;(List.of(<span class="s">"Lleida"</span>, <span class="s">"Girona"</span>, <span class="s">"Lleida"</span>));  <span class="c">// 2 elementos</span>

Map&lt;String, Integer&gt; notas = <span class="k">new</span> HashMap&lt;&gt;();
notas.put(<span class="s">"Laia"</span>, <span class="s">8</span>);
notas.get(<span class="s">"Laia"</span>);                 <span class="c">// 8</span>
notas.getOrDefault(<span class="s">"Pau"</span>, <span class="s">0</span>);      <span class="c">// 0</span></code></pre>
<p>Las colecciones solo guardan objetos: para números se usan <code>Integer</code>, <code>Double</code>… (Java convierte automáticamente: <b>autoboxing</b>).</p>`},
{h:"Recorrer, ordenar y filtrar", html:`
<pre><code>Collections.sort(alumnos);
alumnos.sort(Comparator.comparing(String::length));

<span class="k">for</span> (Map.Entry&lt;String, Integer&gt; e : notas.entrySet())
    System.out.println(e.getKey() + <span class="s">": "</span> + e.getValue());

<span class="c">// Streams: filtrar y transformar de forma declarativa</span>
List&lt;String&gt; aprobados = notas.entrySet().stream()
    .filter(e -&gt; e.getValue() &gt;= <span class="s">5</span>)
    .map(Map.Entry::getKey)
    .toList();</code></pre>
<div class="caso"><b>Elegir bien</b>¿Necesitas buscar por un identificador? Map. ¿Evitar duplicados? Set. ¿Mantener el orden de inserción y acceder por posición? List.</div>`}
],
quiz:[
{q:"¿Puede cambiar el tamaño de un array después de crearlo?", o:["Sí","No","Solo si es de String","Solo con sort"], a:1, e:"Para tamaño variable se usan colecciones como ArrayList."},
{q:"¿Qué colección no admite elementos repetidos?", o:["List","Set","ArrayList","Array"], a:1, e:"Un HashSet ignora los duplicados."},
{q:"¿Qué colección guarda pares clave → valor?", o:["List","Set","Map","Queue"], a:2, e:"HashMap es la implementación más habitual."},
{q:"¿Qué método devuelve el número de elementos de una List?", o:["length","size()","count()","length()"], a:1, e:"Los arrays usan la propiedad length."},
{q:"¿Qué devuelve getOrDefault(\"Pau\", 0) si \"Pau\" no está en el Map?", o:["null","0","Error","\"Pau\""], a:1, e:"Devuelve el valor por defecto indicado."},
{q:"¿Qué es el autoboxing?", o:["Comprimir colecciones","La conversión automática entre int e Integer","Un tipo de bucle","Ordenar"], a:1, e:"Permite usar números en colecciones de objetos."}
]});
