TEMA("js-dom", {
title:"El modelo de objetos del documento (DOM)", mins:13,
intro:"Cómo JavaScript ve la página como un árbol de nodos y cómo se buscan, crean, modifican y eliminan elementos de forma eficiente y segura.",
sections:[
{h:"El árbol del DOM", html:`
<p>El navegador convierte el HTML en un <b>árbol</b> de nodos: el documento, los elementos, sus atributos y el texto. JavaScript accede a él con el objeto <code>document</code>.</p>
<pre><code>document
 └── html
      ├── head → title → "Mi web"
      └── body
           ├── h1 → "Notas"
           └── ul#lista
                ├── li → "Redes"
                └── li → "Bases de datos"</code></pre>
<p>Para moverse: <code>parentElement</code>, <code>children</code>, <code>firstElementChild</code>, <code>nextElementSibling</code> y <code>closest(selector)</code> (el antepasado más cercano que coincide).</p>`},
{h:"Buscar y modificar", html:`
<pre><code><span class="k">const</span> titulo = document.querySelector(<span class="s">"h1"</span>);
<span class="k">const</span> items = document.querySelectorAll(<span class="s">"#lista li"</span>);

titulo.textContent = <span class="s">"Mis notas"</span>;              <span class="c">// texto (seguro)</span>
titulo.classList.add(<span class="s">"destacado"</span>);               <span class="c">// clases: add, remove, toggle, contains</span>
titulo.style.color = <span class="s">"#1864AB"</span>;                  <span class="c">// estilo en línea (mejor usar clases)</span>
titulo.setAttribute(<span class="s">"aria-live"</span>, <span class="s">"polite"</span>);
titulo.dataset.id = <span class="s">"7"</span>;                         <span class="c">// atributo data-id="7"</span>
items.forEach(li =&gt; li.classList.toggle(<span class="s">"hecho"</span>));</code></pre>
<div class="note exam"><b>textContent frente a innerHTML</b>innerHTML interpreta el texto como HTML. Si el texto viene del usuario, podría incluir un <code>&lt;script&gt;</code> o una imagen con código: es un ataque <b>XSS</b>. Para texto, usa siempre textContent.</div>`,
check:{q:"¿Qué propiedad debes usar para mostrar un texto escrito por el usuario?", o:["innerHTML","textContent","outerHTML","document.write"], a:1, e:"textContent nunca interpreta el texto como HTML, así que evita XSS."}},
{h:"Crear y eliminar elementos", html:`
<pre><code><span class="k">const</span> li = document.createElement(<span class="s">"li"</span>);
li.textContent = <span class="s">"Programación"</span>;
li.className = <span class="s">"modulo"</span>;
document.querySelector(<span class="s">"#lista"</span>).append(li);    <span class="c">// al final (prepend, before, after…)</span>

li.remove();                                      <span class="c">// eliminar</span>

<span class="c">// Muchos elementos: construir fuera y añadir de una vez</span>
<span class="k">const</span> frag = document.createDocumentFragment();
datos.forEach(d =&gt; { <span class="k">const</span> el = document.createElement(<span class="s">"li"</span>); el.textContent = d; frag.append(el); });
lista.append(frag);</code></pre>
<p>Cada cambio en el DOM puede obligar al navegador a recalcular la página. Agrupar los cambios (con un fragmento o cambiando una clase en el contenedor) mejora el rendimiento.</p>
<div class="caso"><b>Más allá del DOM a mano</b>En proyectos grandes, frameworks como React o Vue actualizan el DOM por ti a partir del estado de la aplicación. Pero entender el DOM es imprescindible para usarlos bien y depurarlos.</div>`}
],
quiz:[
{q:"¿Qué es el DOM?", o:["Un servidor","La representación de la página como árbol de nodos accesible desde JavaScript","Un tipo de CSS","Una base de datos"], a:1, e:"Document Object Model."},
{q:"¿Qué método devuelve todos los elementos que coinciden con un selector?", o:["querySelector","querySelectorAll","getElementById","closest"], a:1, e:"querySelector devuelve solo el primero."},
{q:"¿Qué método de classList añade la clase si no está y la quita si está?", o:["add","remove","toggle","contains"], a:2, e:"Muy útil para mostrar u ocultar."},
{q:"¿Qué método crea un elemento nuevo?", o:["document.createElement","document.new","element.make","append"], a:0, e:"Luego se inserta con append, prepend, before o after."},
{q:"¿A qué atributo HTML corresponde li.dataset.id?", o:["id","data-id","dataset-id","name"], a:1, e:"Los atributos data-* sirven para guardar datos propios."},
{q:"¿Para qué sirve un DocumentFragment?", o:["Para borrar","Para construir muchos elementos fuera del DOM y añadirlos de una vez","Para cifrar","Para estilos"], a:1, e:"Reduce los recálculos de la página."}
]});
