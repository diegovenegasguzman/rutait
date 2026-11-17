TEMA("objetos-java", {
title:"Utilización de objetos en Java", mins:13,
intro:"Antes de crear tus propias clases, aprenderás a usar las que ya trae Java: crear objetos, llamar a sus métodos, trabajar con String, Math y las clases envoltorio, y entender qué es una referencia.",
sections:[
{h:"Crear y usar objetos", html:`
<pre><code>String nombre = <span class="k">new</span> String(<span class="s">"Laia"</span>);   <span class="c">// crear un objeto con new</span>
Scanner teclado = <span class="k">new</span> Scanner(System.in);
LocalDate hoy = LocalDate.now();               <span class="c">// método estático que devuelve un objeto</span>

<span class="k">int</span> largo = nombre.length();                  <span class="c">// llamar a un método del objeto</span>
LocalDate enUnMes = hoy.plusMonths(<span class="s">1</span>);</code></pre>
<ul>
<li>Un objeto se crea con <code>new</code>, que llama al <b>constructor</b> de la clase.</li>
<li>Con el punto (<code>.</code>) se accede a sus métodos.</li>
<li>Los métodos <b>estáticos</b> pertenecen a la clase, no a un objeto: <code>Math.sqrt(16)</code>, <code>LocalDate.now()</code>.</li>
<li>Para usar clases de otros paquetes hay que importarlas: <code>import java.util.Scanner;</code></li>
</ul>`},
{h:"Referencias y null", html:`
<p>Una variable de tipo objeto no guarda el objeto, sino una <b>referencia</b> (la dirección donde está en memoria).</p>
<pre><code>StringBuilder a = <span class="k">new</span> StringBuilder(<span class="s">"hola"</span>);
StringBuilder b = a;          <span class="c">// b apunta al MISMO objeto</span>
b.append(<span class="s">"!"</span>);
System.out.println(a);        <span class="c">// hola!</span></code></pre>
<ul>
<li>Una referencia que no apunta a nada vale <code>null</code>. Llamar a un método sobre null lanza <b>NullPointerException</b>.</li>
<li>Para comparar el <b>contenido</b> de dos objetos se usa <code>equals()</code>; <code>==</code> compara si son el mismo objeto.</li>
<li>Los objetos que nadie referencia los elimina automáticamente el <b>recolector de basura</b>.</li>
</ul>`,
check:{q:"¿Cómo se comprueba si dos String tienen el mismo texto?", o:["a == b","a.equals(b)","a = b","a.same(b)"], a:1, e:"== compara referencias; equals compara el contenido."}},
{h:"Clases útiles de Java", html:`
<table>
<tr><th>Clase</th><th>Para qué</th><th>Ejemplo</th></tr>
<tr><td>String</td><td>Texto (inmutable)</td><td><code>s.toUpperCase()</code>, <code>s.substring(0,3)</code>, <code>s.contains("a")</code></td></tr>
<tr><td>StringBuilder</td><td>Texto que se modifica mucho</td><td><code>sb.append("x")</code></td></tr>
<tr><td>Math</td><td>Operaciones matemáticas</td><td><code>Math.max(a,b)</code>, <code>Math.pow(2,10)</code>, <code>Math.random()</code></td></tr>
<tr><td>Integer, Double…</td><td>Envoltorios de los tipos primitivos</td><td><code>Integer.parseInt("42")</code></td></tr>
<tr><td>LocalDate, LocalDateTime</td><td>Fechas y horas</td><td><code>LocalDate.of(2026, 11, 17)</code></td></tr>
<tr><td>Scanner</td><td>Leer del teclado</td><td><code>teclado.nextInt()</code></td></tr>
</table>
<div class="caso"><b>Error típico</b><code>String s = null; if (s.equals("hola"))</code> lanza NullPointerException. Escribirlo al revés, <code>"hola".equals(s)</code>, evita el error porque el literal nunca es null.</div>`}
],
quiz:[
{q:"¿Qué palabra crea un objeto en Java?", o:["create","new","make","object"], a:1, e:"new llama al constructor."},
{q:"¿Qué guarda una variable de tipo objeto?", o:["El objeto completo","Una referencia al objeto","Solo su nombre","Nada"], a:1, e:"Por eso dos variables pueden apuntar al mismo objeto."},
{q:"¿Qué excepción se produce al llamar a un método sobre null?", o:["ArithmeticException","NullPointerException","IOException","IndexOutOfBounds"], a:1, e:"Es el error más común en Java."},
{q:"¿Cómo se convierte el texto \"42\" en un int?", o:["(int) \"42\"","Integer.parseInt(\"42\")","\"42\".toInt()","Math.int(\"42\")"], a:1, e:"Las clases envoltorio tienen métodos de conversión."},
{q:"¿Qué clase conviene para un texto que se modifica muchas veces en un bucle?", o:["String","StringBuilder","Math","Scanner"], a:1, e:"String es inmutable y crearía un objeto nuevo en cada cambio."},
{q:"¿Qué es un método estático?", o:["Uno que no cambia","Uno que pertenece a la clase y se llama sin crear objeto","Uno privado","Uno que no devuelve nada"], a:1, e:"Por ejemplo, Math.sqrt()."}
]});
