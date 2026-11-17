TEMA("javascript", {
title:"JavaScript en el navegador", mins:17,
intro:"El lenguaje que da vida a las páginas web: variables y funciones, cómo leer y cambiar la página con el DOM, cómo reaccionar a lo que hace el usuario y cómo pedir datos a un servidor.",
sections:[
{h:"Qué hace JavaScript", html:`
<p>HTML define la estructura de la página, CSS su aspecto y <b>JavaScript</b> su comportamiento: validar un formulario antes de enviarlo, mostrar un menú, cargar datos sin recargar la página…</p>
<p>Se ejecuta <b>en el navegador del usuario</b> (entorno cliente). Se añade a la página con <code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code>; <code>defer</code> hace que se ejecute cuando el HTML ya se ha cargado. Para probar código y ver errores, usa la <b>consola</b> de las herramientas de desarrollo (F12).</p>`},
{h:"Variables, tipos y funciones", html:`
<pre><code><span class="k">const</span> IVA = <span class="s">0.21</span>;          <span class="c">// no se puede reasignar</span>
<span class="k">let</span> total = <span class="s">0</span>;             <span class="c">// sí se puede reasignar</span>
<span class="c">// var es la forma antigua: evítala</span>

<span class="k">const</span> nombres = [<span class="s">"Ana"</span>, <span class="s">"Luis"</span>];            <span class="c">// array</span>
<span class="k">const</span> alumno = { nombre: <span class="s">"Ana"</span>, nota: <span class="s">8</span> };  <span class="c">// objeto</span>

<span class="k">function</span> conIva(precio) { <span class="k">return</span> precio * (<span class="s">1</span> + IVA); }
<span class="k">const</span> doble = n =&gt; n * <span class="s">2</span>;    <span class="c">// función flecha</span>

console.log(\`Total: \${conIva(<span class="s">100</span>)} €\`);   <span class="c">// plantilla de texto</span></code></pre>
<div class="note exam"><b>== frente a ===</b><code>==</code> convierte los tipos antes de comparar: <code>"5" == 5</code> es <code>true</code>. <code>===</code> compara también el tipo: <code>"5" === 5</code> es <code>false</code>. Usa siempre <code>===</code>.</div>`},
{h:"El DOM", html:`
<p>El <b>DOM</b> es la representación de la página como un árbol de objetos que JavaScript puede leer y modificar.</p>
<pre><code><span class="k">const</span> titulo = document.querySelector(<span class="s">"h1"</span>);          <span class="c">// el primer h1</span>
<span class="k">const</span> items  = document.querySelectorAll(<span class="s">".item"</span>);   <span class="c">// todos los .item</span>

titulo.textContent = <span class="s">"Nuevo título"</span>;     <span class="c">// cambiar el texto</span>
titulo.classList.add(<span class="s">"destacado"</span>);       <span class="c">// añadir una clase CSS</span>

<span class="k">const</span> li = document.createElement(<span class="s">"li"</span>);   <span class="c">// crear un elemento</span>
li.textContent = <span class="s">"Elemento nuevo"</span>;
document.querySelector(<span class="s">"ul"</span>).append(li);</code></pre>
<p><code>querySelector</code> usa los mismos selectores que CSS. Usa <code>textContent</code> para poner texto que viene del usuario: <code>innerHTML</code> interpretaría el HTML y podría abrir la puerta a ataques <b>XSS</b>.</p>`},
{h:"Eventos", html:`
<pre><code><span class="k">const</span> form = document.querySelector(<span class="s">"#registro"</span>);

form.addEventListener(<span class="s">"submit"</span>, (e) =&gt; {
  e.preventDefault();                       <span class="c">// no recargar la página</span>
  <span class="k">const</span> email = form.email.value.trim();
  <span class="k">if</span> (!email.includes(<span class="s">"@"</span>)) {
    document.querySelector(<span class="s">"#error"</span>).textContent = <span class="s">"Escribe un correo válido"</span>;
    <span class="k">return</span>;
  }
  enviar(email);
});</code></pre>
<p>Eventos habituales: <code>click</code>, <code>input</code> (cada vez que cambia un campo), <code>submit</code>, <code>keydown</code> y <code>DOMContentLoaded</code>. <code>preventDefault()</code> cancela el comportamiento por defecto, como enviar el formulario o seguir un enlace.</p>
<div class="note"><b>Validar dos veces</b>La validación en JavaScript mejora la experiencia, pero el usuario puede saltársela. El servidor siempre debe volver a validar los datos.</div>`},
{h:"Pedir datos al servidor: fetch y async", html:`
<p>Muchas operaciones (pedir datos a un servidor, leer un archivo) tardan. JavaScript no se queda esperando: usa <b>promesas</b>, que representan un resultado que llegará más tarde. Con <code>async</code> y <code>await</code> se escriben como si fueran código normal:</p>
<pre><code><span class="k">async function</span> cargarAlumnos() {
  <span class="k">try</span> {
    <span class="k">const</span> resp = <span class="k">await</span> fetch(<span class="s">"/api/alumnos"</span>);
    <span class="k">if</span> (!resp.ok) <span class="k">throw new</span> Error(<span class="s">"Error "</span> + resp.status);
    <span class="k">const</span> alumnos = <span class="k">await</span> resp.json();     <span class="c">// convierte el JSON en objetos</span>
    alumnos.forEach(a =&gt; console.log(a.nombre));
  } <span class="k">catch</span> (err) {
    console.error(<span class="s">"No se pudieron cargar:"</span>, err);
  }
}</code></pre>
<ul>
<li><code>fetch</code> devuelve una promesa con la respuesta HTTP.</li>
<li><code>await</code> solo puede usarse dentro de funciones <code>async</code>.</li>
<li><code>JSON.parse()</code> convierte texto JSON en objetos y <code>JSON.stringify()</code> hace lo contrario.</li>
</ul>`}
],
quiz:[
{q:"¿Qué diferencia hay entre const y let?", o:["Ninguna","Una variable const no se puede reasignar","let es más rápido","const solo vale para números"], a:1, e:"const impide reasignar la variable; let lo permite."},
{q:"¿Cuánto vale \"5\" === 5?", o:["true","false","Error","undefined"], a:1, e:"=== compara también el tipo: texto y número son distintos."},
{q:"¿Qué método devuelve el primer elemento que coincide con un selector CSS?", o:["getElementsByClassName","querySelector","querySelectorAll","createElement"], a:1, e:"querySelectorAll devuelve todos; querySelector, solo el primero."},
{q:"¿Cómo se reacciona a un clic en un botón?", o:["boton.click = true","boton.addEventListener(\"click\", ...)","boton.on(\"click\")","boton.event(\"click\")"], a:1, e:"addEventListener asocia una función a un evento."},
{q:"¿Qué devuelve fetch()?", o:["Directamente el JSON","Una promesa con la respuesta","Un string","Nada"], a:1, e:"fetch es asíncrono: devuelve una promesa que se resuelve con la respuesta."},
{q:"¿Dónde se puede usar await?", o:["En cualquier sitio","Dentro de funciones async","Solo en bucles","Solo en el HTML"], a:1, e:"await pausa una función async hasta que la promesa se resuelve."},
{q:"¿Qué hace JSON.parse()?", o:["Convierte objetos en texto JSON","Convierte texto JSON en objetos","Valida un formulario","Envía datos al servidor"], a:1, e:"stringify hace la operación contraria."},
{q:"¿Para qué sirve e.preventDefault() en el evento submit?", o:["Para borrar el formulario","Para evitar que el formulario se envíe y recargue la página","Para validar el email","Para cerrar la página"], a:1, e:"Cancela el comportamiento por defecto para gestionarlo con JavaScript."}
]});
