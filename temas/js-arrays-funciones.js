TEMA("js-arrays-funciones", {
title:"Arrays, funciones y objetos propios en JavaScript", mins:15,
intro:"Las herramientas con las que se escribe JavaScript moderno: métodos de arrays como map y filter, funciones y su ámbito, objetos literales, desestructuración y clases.",
sections:[
{h:"Arrays y sus métodos", html:`
<pre><code><span class="k">const</span> notas = [<span class="s">7</span>, <span class="s">4</span>, <span class="s">9</span>, <span class="s">5</span>];
notas.push(<span class="s">8</span>);                                   <span class="c">// añadir al final</span>
<span class="k">const</span> aprobadas = notas.filter(n =&gt; n &gt;= <span class="s">5</span>);    <span class="c">// [7, 9, 5, 8]</span>
<span class="k">const</span> dobles = notas.map(n =&gt; n * <span class="s">2</span>);            <span class="c">// [14, 8, 18, 10, 16]</span>
<span class="k">const</span> suma = notas.reduce((acc, n) =&gt; acc + n, <span class="s">0</span>); <span class="c">// 33</span>
<span class="k">const</span> hayDiez = notas.some(n =&gt; n === <span class="s">10</span>);       <span class="c">// false</span>
<span class="k">const</span> primera = notas.find(n =&gt; n &gt; <span class="s">8</span>);         <span class="c">// 9</span>
notas.sort((a, b) =&gt; a - b);                       <span class="c">// ordenar numéricamente</span></code></pre>
<p><code>map</code>, <code>filter</code> y <code>reduce</code> no modifican el array original: devuelven uno nuevo. <code>push</code> y <code>sort</code> sí lo modifican.</p>
<div class="note exam"><b>Trampa clásica</b><code>[10, 9, 1].sort()</code> devuelve <code>[1, 10, 9]</code>, porque por defecto ordena como texto. Para números hace falta la función <code>(a, b) =&gt; a - b</code>.</div>`,
check:{q:"¿Qué devuelve [1, 2, 3].map(n => n * 10)?", o:["[10, 20, 30]","60","[1, 2, 3]","30"], a:0, e:"map aplica la función a cada elemento y devuelve un array nuevo."}},
{h:"Funciones y ámbito", html:`
<pre><code><span class="k">function</span> saludar(nombre = <span class="s">"invitado"</span>) { <span class="k">return</span> <span class="s">"Hola, "</span> + nombre; }
<span class="k">const</span> cuadrado = x =&gt; x * x;                 <span class="c">// función flecha</span>
<span class="k">const</span> sumarTodo = (...nums) =&gt; nums.reduce((a, b) =&gt; a + b, <span class="s">0</span>);   <span class="c">// parámetros rest</span>

<span class="c">// Las funciones son valores: se pasan como argumento (callbacks)</span>
boton.addEventListener(<span class="s">"click"</span>, () =&gt; console.log(cuadrado(<span class="s">4</span>)));</code></pre>
<ul>
<li><code>let</code> y <code>const</code> tienen ámbito de <b>bloque</b> (entre llaves); <code>var</code>, de función. Por eso se evita <code>var</code>.</li>
<li>Una <b>clausura</b> (closure) es una función que recuerda las variables del lugar donde se creó.</li>
</ul>`},
{h:"Objetos y clases", html:`
<pre><code><span class="k">const</span> alumno = { nombre: <span class="s">"Laia"</span>, nota: <span class="s">8</span>, aprobado() { <span class="k">return this</span>.nota &gt;= <span class="s">5</span>; } };
alumno.curso = <span class="s">"2º DAW"</span>;                       <span class="c">// añadir propiedad</span>

<span class="k">const</span> { nombre, nota } = alumno;              <span class="c">// desestructuración</span>
<span class="k">const</span> copia = { ...alumno, nota: <span class="s">9</span> };        <span class="c">// copia con un cambio (spread)</span>

<span class="k">class</span> Producto {
    #stock = <span class="s">0</span>;                                <span class="c">// campo privado</span>
    <span class="k">constructor</span>(nombre, precio) { <span class="k">this</span>.nombre = nombre; <span class="k">this</span>.precio = precio; }
    <span class="k">get</span> conIva() { <span class="k">return this</span>.precio * <span class="s">1.21</span>; }
}
<span class="k">class</span> Libro <span class="k">extends</span> Producto { ... }</code></pre>
<p>La sintaxis <code>...</code> sirve tanto para copiar y combinar (spread) como para recoger varios parámetros (rest).</p>`}
],
quiz:[
{q:"¿Qué método devuelve solo los elementos que cumplen una condición?", o:["map","filter","reduce","forEach"], a:1, e:"Devuelve un array nuevo."},
{q:"¿Qué método reduce un array a un único valor, como una suma?", o:["reduce","map","some","find"], a:0, e:"Recibe un acumulador y cada elemento."},
{q:"¿Qué devuelve [10, 9, 1].sort() sin función de comparación?", o:["[1, 9, 10]","[1, 10, 9]","[10, 9, 1]","Error"], a:1, e:"Ordena como texto: «1», «10», «9»."},
{q:"¿Qué ámbito tienen let y const?", o:["Global siempre","De bloque","De función","De archivo"], a:1, e:"var tiene ámbito de función."},
{q:"¿Qué hace const { nombre } = alumno?", o:["Borra nombre","Crea una variable nombre con el valor de alumno.nombre","Copia el objeto","Crea un objeto nuevo"], a:1, e:"Es la desestructuración de objetos."},
{q:"¿Cómo se declara un campo privado en una clase de JavaScript?", o:["private stock","#stock","_stock obligatoriamente","stock!"], a:1, e:"No se puede acceder a él desde fuera de la clase."}
]});
