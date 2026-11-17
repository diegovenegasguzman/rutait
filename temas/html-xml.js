TEMA("html-xml", {
title:"HTML, XML y JSON", mins:16,
intro:"Los lenguajes de marcas que describen documentos y datos: la estructura de una página HTML, las reglas de un XML bien formado y válido, el formato JSON y cómo se consultan con XPath.",
sections:[
{h:"Qué es un lenguaje de marcas", html:`
<p>Un lenguaje de marcas añade <b>etiquetas</b> al texto para describir su estructura o su significado. No es un lenguaje de programación: no tiene bucles ni condiciones.</p>
<table>
<tr><th>Lenguaje</th><th>Para qué se usa</th></tr>
<tr><td>HTML</td><td>Estructurar páginas web</td></tr>
<tr><td>XML</td><td>Guardar e intercambiar datos con una estructura propia</td></tr>
<tr><td>JSON</td><td>Intercambiar datos entre aplicaciones (no es de marcas, pero cumple la misma función que XML)</td></tr>
<tr><td>Markdown, YAML</td><td>Documentación y archivos de configuración</td></tr>
</table>`},
{h:"HTML", html:`
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=<span class="s">"es"</span>&gt;
&lt;head&gt;
  &lt;meta charset=<span class="s">"UTF-8"</span>&gt;
  &lt;title&gt;Mi página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;&lt;h1&gt;Bienvenida&lt;/h1&gt;&lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;Texto con un &lt;a href=<span class="s">"https://ejemplo.com"</span>&gt;enlace&lt;/a&gt;.&lt;/p&gt;
    &lt;img src=<span class="s">"foto.jpg"</span> alt=<span class="s">"Aula de informática con diez ordenadores"</span>&gt;
  &lt;/main&gt;
  &lt;footer&gt;Contacto&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<ul>
<li><code>&lt;head&gt;</code> contiene información sobre la página; <code>&lt;body&gt;</code>, lo que se ve.</li>
<li>Las <b>etiquetas semánticas</b> (<code>header</code>, <code>nav</code>, <code>main</code>, <code>article</code>, <code>footer</code>) dicen qué es cada parte. Ayudan a los buscadores y a los lectores de pantalla.</li>
<li>El atributo <code>alt</code> describe la imagen para quien no puede verla. Es obligatorio por accesibilidad.</li>
</ul>`},
{h:"XML: bien formado y válido", html:`
<pre><code>&lt;?xml version=<span class="s">"1.0"</span> encoding=<span class="s">"UTF-8"</span>?&gt;
&lt;biblioteca&gt;
  &lt;libro isbn=<span class="s">"978-84-0000-000-1"</span>&gt;
    &lt;titulo&gt;Redes locales&lt;/titulo&gt;
    &lt;autor&gt;M. Pérez&lt;/autor&gt;
    &lt;anio&gt;2024&lt;/anio&gt;
  &lt;/libro&gt;
&lt;/biblioteca&gt;</code></pre>
<p>Un documento XML está <b>bien formado</b> si cumple las reglas de sintaxis:</p>
<ul>
<li>Tiene un <b>único elemento raíz</b> (<code>biblioteca</code>).</li>
<li>Toda etiqueta que se abre se cierra.</li>
<li>Las etiquetas se cierran en orden inverso al que se abrieron: <code>&lt;b&gt;&lt;i&gt;texto&lt;/i&gt;&lt;/b&gt;</code>, nunca <code>&lt;b&gt;&lt;i&gt;texto&lt;/b&gt;&lt;/i&gt;</code>.</li>
<li>Distingue mayúsculas y minúsculas: <code>&lt;Libro&gt;</code> y <code>&lt;libro&gt;</code> son etiquetas distintas.</li>
<li>Los valores de los atributos van entre comillas.</li>
</ul>
<p>Además, es <b>válido</b> si cumple las reglas de una gramática: una <b>DTD</b> o un <b>XML Schema (XSD)</b>, que indican qué elementos puede haber, en qué orden y de qué tipo. Todo XML válido está bien formado, pero no al revés.</p>`},
{h:"JSON", html:`
<pre><code>{
  <span class="s">"titulo"</span>: <span class="s">"Redes locales"</span>,
  <span class="s">"anio"</span>: 2024,
  <span class="s">"disponible"</span>: true,
  <span class="s">"autores"</span>: [<span class="s">"M. Pérez"</span>, <span class="s">"J. Soler"</span>]
}</code></pre>
<ul>
<li>Los <b>objetos</b> van entre llaves <code>{}</code> con pares <code>"clave": valor</code>.</li>
<li>Las <b>listas</b> (arrays) van entre corchetes <code>[]</code>.</li>
<li>Tipos: texto (entre comillas dobles), número, <code>true</code>/<code>false</code>, <code>null</code>, objeto y lista.</li>
</ul>
<p>Es más ligero y fácil de leer que XML, y es el formato estándar de las <b>API web</b>.</p>`},
{h:"Consultar y transformar: XPath y XSLT", html:`
<p><b>XPath</b> selecciona partes de un XML con rutas parecidas a las de un sistema de archivos:</p>
<table>
<tr><th>Expresión</th><th>Selecciona</th></tr>
<tr><td><code>/biblioteca/libro/titulo</code></td><td>Los títulos de todos los libros</td></tr>
<tr><td><code>//autor</code></td><td>Todos los autores, estén donde estén</td></tr>
<tr><td><code>//libro[anio&gt;2020]</code></td><td>Los libros posteriores a 2020</td></tr>
<tr><td><code>//libro/@isbn</code></td><td>El atributo isbn de cada libro</td></tr>
</table>
<p><b>XSLT</b> usa XPath para transformar un XML en otro documento, por ejemplo en una página HTML. <b>XQuery</b> permite hacer consultas más complejas, parecidas a SQL.</p>`}
],
quiz:[
{q:"¿Qué condición debe cumplir todo XML bien formado?", o:["Tener una DTD","Tener un único elemento raíz","Usar solo minúsculas","Tener atributos"], a:1, e:"Un XML bien formado tiene una sola raíz que contiene todo lo demás."},
{q:"¿Qué significa que un XML sea válido?", o:["Que se abre en el navegador","Que cumple una DTD o un XML Schema","Que no tiene atributos","Que ocupa poco"], a:1, e:"Válido = bien formado y, además, conforme a una gramática (DTD o XSD)."},
{q:"¿Para qué sirve el atributo alt en una imagen HTML?", o:["Para cambiar su tamaño","Para describir la imagen a quien no puede verla","Para añadir un enlace","Para darle un título visible"], a:1, e:"El texto alternativo lo leen los lectores de pantalla y aparece si la imagen no carga."},
{q:"¿Qué etiqueta semántica marca el contenido principal de una página?", o:["<div>","<section>","<main>","<span>"], a:2, e:"<main> indica el contenido principal; solo debe haber uno por página."},
{q:"¿Con qué caracteres se delimita una lista en JSON?", o:["{ }","[ ]","( )","< >"], a:1, e:"Las listas van entre corchetes; los objetos, entre llaves."},
{q:"¿Qué error tiene <b><i>texto</b></i>?", o:["Ninguno","Las etiquetas están mal anidadas","Falta la raíz","Faltan comillas"], a:1, e:"Se abrió <i> después de <b>, así que <i> debe cerrarse antes."},
{q:"¿Para qué sirve XPath?", o:["Para validar un XML","Para seleccionar nodos de un XML","Para dar estilo a una web","Para comprimir archivos"], a:1, e:"XPath es un lenguaje de rutas para localizar partes de un documento XML."},
{q:"¿Cuál de estos lenguajes distingue entre mayúsculas y minúsculas en las etiquetas?", o:["HTML","XML","Los dos","Ninguno"], a:1, e:"En XML, <Libro> y <libro> son distintas; HTML no las distingue."}
]});
