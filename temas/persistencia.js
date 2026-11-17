TEMA("persistencia", {
title:"Persistencia de objetos", mins:11,
intro:"Cómo hacer que los objetos de un programa sobrevivan cuando se cierra: serialización binaria, formatos de texto como CSV y JSON, y cuándo pasar a una base de datos.",
sections:[
{h:"Qué es persistir", html:`
<p>Los objetos viven en la memoria RAM y desaparecen al cerrar el programa. <b>Persistir</b> es guardarlos en un almacenamiento permanente para recuperarlos después. Opciones:</p>
<table>
<tr><th>Opción</th><th>Ventaja</th><th>Inconveniente</th></tr>
<tr><td>Serialización Java</td><td>Muy sencilla</td><td>Solo la lee Java, y es frágil si cambia la clase</td></tr>
<tr><td>CSV / texto</td><td>Legible, abre en Excel</td><td>Hay que convertir a mano</td></tr>
<tr><td>JSON / XML</td><td>Estándar, lo entiende cualquier lenguaje</td><td>Necesita una librería</td></tr>
<tr><td>Base de datos</td><td>Consultas, concurrencia, integridad</td><td>Más compleja</td></tr>
</table>`},
{h:"Serialización", html:`
<pre><code><span class="k">public class</span> Alumno <span class="k">implements</span> Serializable {
    <span class="k">private static final long</span> serialVersionUID = 1L;
    <span class="k">private</span> String nombre;
    <span class="k">private transient</span> String contrasena;    <span class="c">// no se guarda</span>
}

<span class="c">// Guardar</span>
<span class="k">try</span> (ObjectOutputStream out = <span class="k">new</span> ObjectOutputStream(<span class="k">new</span> FileOutputStream(<span class="s">"alumnos.dat"</span>))) {
    out.writeObject(listaAlumnos);
}
<span class="c">// Recuperar</span>
<span class="k">try</span> (ObjectInputStream in = <span class="k">new</span> ObjectInputStream(<span class="k">new</span> FileInputStream(<span class="s">"alumnos.dat"</span>))) {
    List&lt;Alumno&gt; lista = (List&lt;Alumno&gt;) in.readObject();
}</code></pre>
<ul>
<li>La clase debe implementar <code>Serializable</code>.</li>
<li>Los atributos <code>transient</code> no se guardan.</li>
<li><code>serialVersionUID</code> identifica la versión de la clase.</li>
<li>Nunca deserialices datos de origen no confiable: es una vía de ataque conocida.</li>
</ul>`,
check:{q:"¿Qué palabra evita que un atributo se guarde al serializar?", o:["static","final","transient","private"], a:2, e:"Útil para contraseñas o datos que se recalculan."}},
{h:"JSON con una librería", html:`
<pre><code><span class="c">// Con Gson</span>
Gson gson = <span class="k">new</span> Gson();
String json = gson.toJson(alumno);                    <span class="c">// {"nombre":"Laia","nota":8.5}</span>
Alumno a = gson.fromJson(json, Alumno.<span class="k">class</span>);</code></pre>
<p>Las librerías (Gson, Jackson) se añaden al proyecto con <b>Maven</b> o <b>Gradle</b>. Cuando los datos crecen, hay que buscar por ellos o varios usuarios los comparten, el siguiente paso es una base de datos.</p>
<div class="caso"><b>En la práctica</b>Las preferencias de una aplicación de escritorio suelen guardarse en JSON; los datos de negocio (clientes, pedidos), en una base de datos.</div>`}
],
quiz:[
{q:"¿Qué significa persistir un objeto?", o:["Borrarlo","Guardarlo de forma permanente para recuperarlo después","Duplicarlo","Ocultarlo"], a:1, e:"Que sobreviva al cierre del programa."},
{q:"¿Qué interfaz debe implementar una clase para serializarse?", o:["Comparable","Serializable","Runnable","Cloneable"], a:1, e:"Es una interfaz marcadora, sin métodos."},
{q:"¿Qué clase escribe objetos serializados?", o:["ObjectOutputStream","PrintWriter","Scanner","FileReader"], a:0, e:"ObjectInputStream los lee."},
{q:"¿Qué inconveniente tiene la serialización nativa de Java?", o:["Es lenta siempre","Solo la entiende Java y es frágil ante cambios de la clase","No funciona con listas","Ocupa demasiado"], a:1, e:"Para intercambiar datos es mejor JSON o XML."},
{q:"¿Qué librerías convierten objetos Java a JSON?", o:["Gson y Jackson","JUnit y Mockito","Swing y AWT","Log4j"], a:0, e:"toJson y fromJson."},
{q:"¿Por qué no se deben deserializar datos de origen no confiable?", o:["Porque es lento","Porque es una vía conocida de ataque","Porque ocupa espacio","No hay problema"], a:1, e:"Puede ejecutar código malicioso."}
]});
