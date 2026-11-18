TEMA("js-eventos", {
 "title": "Eventos y formularios en JavaScript",
 "mins": 13,
 "intro": "Cómo reaccionar a lo que hace el usuario: tipos de eventos, el objeto evento, propagación y delegación, y cómo validar formularios en el navegador de forma útil.",
 "sections": [
  {
   "h": "Escuchar eventos",
   "html": "\n<pre><code><span class=\"k\">const</span> boton = document.querySelector(<span class=\"s\">\"#enviar\"</span>);\nboton.addEventListener(<span class=\"s\">\"click\"</span>, (e) =&gt; {\n    console.log(e.type, e.target);   <span class=\"c\">// \"click\" y el elemento pulsado</span>\n});\n\ndocument.addEventListener(<span class=\"s\">\"keydown\"</span>, (e) =&gt; {\n    <span class=\"k\">if</span> (e.key === <span class=\"s\">\"Escape\"</span>) cerrarModal();\n});</code></pre>\n<table>\n<tr><th>Tipo</th><th>Eventos</th></tr>\n<tr><td>Ratón y puntero</td><td><code>click</code>, <code>dblclick</code>, <code>pointerdown</code>, <code>mouseover</code></td></tr>\n<tr><td>Teclado</td><td><code>keydown</code>, <code>keyup</code></td></tr>\n<tr><td>Formularios</td><td><code>input</code>, <code>change</code>, <code>submit</code>, <code>focus</code>, <code>blur</code></td></tr>\n<tr><td>Página</td><td><code>DOMContentLoaded</code>, <code>load</code>, <code>resize</code>, <code>scroll</code></td></tr>\n</table>\n<p>No se usan atributos como <code>onclick=\"...\"</code> en el HTML: se separa el comportamiento en el JavaScript.</p>"
  },
  {
   "h": "Propagación y delegación",
   "html": "\n<p>Un evento se produce en un elemento y luego <b>sube</b> (burbujea) por sus antepasados. Gracias a eso, se puede escuchar en un contenedor en vez de en cada elemento: es la <b>delegación de eventos</b>.</p>\n<pre><code><span class=\"c\">// Un solo listener para todos los botones \"borrar\" de la lista, incluso los que se añadan después</span>\ndocument.querySelector(<span class=\"s\">\"#lista\"</span>).addEventListener(<span class=\"s\">\"click\"</span>, (e) =&gt; {\n    <span class=\"k\">const</span> btn = e.target.closest(<span class=\"s\">\".borrar\"</span>);\n    <span class=\"k\">if</span> (btn) btn.closest(<span class=\"s\">\"li\"</span>).remove();\n});</code></pre>\n<ul>\n<li><code>e.preventDefault()</code> cancela la acción por defecto (enviar formulario, seguir enlace).</li>\n<li><code>e.stopPropagation()</code> detiene la subida del evento.</li>\n</ul>\n<p>La ventaja de la delegación: un solo listener en el contenedor sirve para todos sus hijos, incluso los que se añadan después.</p>\n",
   "check": {
    "q": "¿Qué ventaja tiene la delegación de eventos?",
    "o": [
     "Es más bonita",
     "Un solo listener en el contenedor sirve para todos los hijos, incluso los añadidos después",
     "Evita usar JavaScript",
     "Bloquea los clics"
    ],
    "a": 1,
    "e": "Aprovecha que los eventos suben por el árbol del DOM."
   }
  },
  {
   "h": "Validar formularios",
   "html": "\n<pre><code><span class=\"k\">const</span> form = document.querySelector(<span class=\"s\">\"#registro\"</span>);\nform.addEventListener(<span class=\"s\">\"submit\"</span>, (e) =&gt; {\n    <span class=\"k\">const</span> pass = form.elements.pass;\n    <span class=\"k\">if</span> (pass.value.length &lt; <span class=\"s\">12</span>) {\n        e.preventDefault();\n        pass.setCustomValidity(<span class=\"s\">\"La contraseña debe tener al menos 12 caracteres\"</span>);\n        pass.reportValidity();\n    }\n});\nform.elements.pass.addEventListener(<span class=\"s\">\"input\"</span>, (e) =&gt; e.target.setCustomValidity(<span class=\"s\">\"\"</span>));</code></pre>\n<ul>\n<li>Aprovecha primero la validación de HTML5 (<code>required</code>, <code>type=\"email\"</code>, <code>pattern</code>) y complétala con JavaScript.</li>\n<li>Mensajes junto al campo, claros y en el momento (al salir del campo o al escribir).</li>\n<li>Con <code>new FormData(form)</code> se recogen todos los valores para enviarlos con fetch.</li>\n</ul>\n<div class=\"caso\"><b>Recuerda</b>La validación en el navegador es para ayudar al usuario. El servidor vuelve a validar todo, siempre.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué método se recomienda para asociar eventos?",
   "o": [
    "onclick en el HTML",
    "addEventListener",
    "document.write",
    "alert"
   ],
   "a": 1,
   "e": "Separa el comportamiento del HTML y permite varios listeners."
  },
  {
   "q": "¿Qué propiedad del evento indica el elemento donde se produjo?",
   "o": [
    "e.type",
    "e.target",
    "e.key",
    "e.value"
   ],
   "a": 1,
   "e": "e.currentTarget es el elemento que tiene el listener."
  },
  {
   "q": "¿Qué evento se dispara cada vez que cambia el contenido de un campo mientras se escribe?",
   "o": [
    "change",
    "input",
    "submit",
    "blur"
   ],
   "a": 1,
   "e": "change se dispara al perder el foco tras modificarlo."
  },
  {
   "q": "¿Qué hace e.stopPropagation()?",
   "o": [
    "Cancela el envío",
    "Detiene la subida del evento a los elementos padre",
    "Borra el elemento",
    "Recarga la página"
   ],
   "a": 1,
   "e": "preventDefault cancela la acción por defecto."
  },
  {
   "q": "¿Qué objeto recoge todos los valores de un formulario?",
   "o": [
    "FormData",
    "JSON",
    "Map",
    "Date"
   ],
   "a": 0,
   "e": "new FormData(form)."
  },
  {
   "q": "¿Qué evento indica que el HTML ya está cargado y se puede manipular?",
   "o": [
    "load",
    "DOMContentLoaded",
    "ready",
    "start"
   ],
   "a": 1,
   "e": "load espera además a imágenes y estilos."
  }
 ]
});
