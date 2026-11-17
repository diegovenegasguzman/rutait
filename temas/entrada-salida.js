TEMA("entrada-salida", {
title:"Lectura y escritura de información", mins:12,
intro:"Cómo un programa se comunica con el exterior: leer del teclado, mostrar resultados con formato y trabajar con ficheros de texto.",
sections:[
{h:"Teclado y consola", html:`
<pre><code>Scanner teclado = <span class="k">new</span> Scanner(System.in);
System.out.print(<span class="s">"Nombre: "</span>);
String nombre = teclado.nextLine();
System.out.print(<span class="s">"Edad: "</span>);
<span class="k">int</span> edad = teclado.nextInt();
teclado.nextLine();                 <span class="c">// consume el salto de línea pendiente</span>

System.out.printf(<span class="s">"%s tiene %d años y paga %.2f €%n"</span>, nombre, edad, <span class="s">12.5</span>);</code></pre>
<ul>
<li><code>printf</code> da formato: <code>%s</code> texto, <code>%d</code> entero, <code>%.2f</code> decimal con 2 cifras, <code>%n</code> salto de línea.</li>
<li><code>System.err</code> es la salida de errores.</li>
</ul>
<div class="caso"><b>El fallo más típico</b>Después de <code>nextInt()</code>, el Intro se queda en el búfer. Si a continuación llamas a <code>nextLine()</code>, devuelve una línea vacía. Solución: un <code>nextLine()</code> extra, o leer todo con <code>nextLine()</code> y convertir con <code>Integer.parseInt</code>.</div>`,
check:{q:"¿Qué muestra printf(\"%.2f\", 3.14159)?", o:["3.14159","3.14","3","3,1"], a:1, e:"%.2f redondea a 2 decimales (con configuración regional española puede mostrar 3,14)."}},
{h:"Ficheros de texto", html:`
<pre><code><span class="c">// Escribir (true = añadir al final)</span>
<span class="k">try</span> (PrintWriter pw = <span class="k">new</span> PrintWriter(<span class="k">new</span> FileWriter(<span class="s">"notas.txt"</span>, <span class="k">true</span>))) {
    pw.println(<span class="s">"Laia;8.5"</span>);
}

<span class="c">// Leer con la API moderna</span>
List&lt;String&gt; lineas = Files.readAllLines(Path.of(<span class="s">"notas.txt"</span>));
<span class="k">for</span> (String l : lineas) {
    String[] partes = l.split(<span class="s">";"</span>);
    System.out.println(partes[<span class="s">0</span>] + <span class="s">" → "</span> + partes[<span class="s">1</span>]);
}</code></pre>
<ul>
<li>Los <b>flujos</b> (streams) de caracteres son Reader/Writer; los de bytes, InputStream/OutputStream.</li>
<li>Con <b>try-with-resources</b> el fichero se cierra solo.</li>
<li>Las operaciones con ficheros pueden lanzar <code>IOException</code>, que hay que gestionar.</li>
<li>Indica la codificación si hace falta: <code>Files.readAllLines(ruta, StandardCharsets.UTF_8)</code>.</li>
</ul>`}
],
quiz:[
{q:"¿Qué clase se usa habitualmente para leer del teclado?", o:["Scanner","PrintWriter","File","Math"], a:0, e:"new Scanner(System.in)."},
{q:"¿Qué formato de printf muestra un número entero?", o:["%s","%d","%f","%n"], a:1, e:"%s texto, %f decimal, %n salto de línea."},
{q:"Tras nextInt(), nextLine() devuelve una cadena vacía. ¿Por qué?", o:["Por un error del teclado","Porque quedó pendiente el salto de línea","Porque Scanner está cerrado","Por la codificación"], a:1, e:"nextInt no consume el Intro."},
{q:"¿Qué hace el segundo parámetro true en new FileWriter(\"f.txt\", true)?", o:["Borra el fichero","Añade al final en vez de sobrescribir","Cifra","Lo abre en solo lectura"], a:1, e:"Modo append."},
{q:"¿Qué método lee todas las líneas de un fichero en una lista?", o:["Files.readAllLines","Scanner.all","File.read","System.in.read"], a:0, e:"Parte de la API java.nio.file."},
{q:"¿Qué excepción pueden lanzar las operaciones con ficheros?", o:["IOException","ArithmeticException","ClassCastException","Ninguna"], a:0, e:"Fichero inexistente, sin permisos, etc."}
]});
