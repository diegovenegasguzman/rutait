TEMA("js-dom", {
 "title": "El modelo de objetos del documento (DOM)",
 "mins": 13,
 "intro": "Cómo JavaScript ve la página como un árbol de nodos y cómo se buscan, crean, modifican y eliminan elementos de forma eficiente y segura.",
 "sections": [
  {
   "h": "El árbol del DOM",
   "html": "\n<p>El navegador convierte el HTML en un <b>árbol</b> de nodos: el documento, los elementos, sus atributos y el texto. JavaScript accede a él con el objeto <code>document</code>.</p>\n<pre><code>document\n └── html\n      ├── head → title → \"Mi web\"\n      └── body\n           ├── h1 → \"Notas\"\n           └── ul#lista\n                ├── li → \"Redes\"\n                └── li → \"Bases de datos\"</code></pre>\n<p>Para moverse: <code>parentElement</code>, <code>children</code>, <code>firstElementChild</code>, <code>nextElementSibling</code> y <code>closest(selector)</code> (el antepasado más cercano que coincide).</p>"
  },
  {
   "h": "Buscar y modificar",
   "html": "\n<pre><code><span class=\"k\">const</span> titulo = document.querySelector(<span class=\"s\">\"h1\"</span>);\n<span class=\"k\">const</span> items = document.querySelectorAll(<span class=\"s\">\"#lista li\"</span>);\n\ntitulo.textContent = <span class=\"s\">\"Mis notas\"</span>;              <span class=\"c\">// texto (seguro)</span>\ntitulo.classList.add(<span class=\"s\">\"destacado\"</span>);               <span class=\"c\">// clases: add, remove, toggle, contains</span>\ntitulo.style.color = <span class=\"s\">\"#1864AB\"</span>;                  <span class=\"c\">// estilo en línea (mejor usar clases)</span>\ntitulo.setAttribute(<span class=\"s\">\"aria-live\"</span>, <span class=\"s\">\"polite\"</span>);\ntitulo.dataset.id = <span class=\"s\">\"7\"</span>;                         <span class=\"c\">// atributo data-id=\"7\"</span>\nitems.forEach(li =&gt; li.classList.toggle(<span class=\"s\">\"hecho\"</span>));</code></pre>\n<div class=\"note exam\"><b>textContent frente a innerHTML</b>innerHTML interpreta el texto como HTML. Si el texto viene del usuario, podría incluir un <code>&lt;script&gt;</code> o una imagen con código: es un ataque <b>XSS</b>. Para texto, usa siempre textContent.</div>\n<p><code>querySelector()</code> devuelve el primer elemento que coincide con el selector; <code>querySelectorAll()</code> devuelve todos.</p>\n",
   "check": {
    "q": "¿Qué propiedad debes usar para mostrar un texto escrito por el usuario?",
    "o": [
     "innerHTML",
     "textContent",
     "outerHTML",
     "document.write"
    ],
    "a": 1,
    "e": "textContent nunca interpreta el texto como HTML, así que evita XSS."
   }
  },
  {
   "h": "Crear y eliminar elementos",
   "html": "\n<pre><code><span class=\"k\">const</span> li = document.createElement(<span class=\"s\">\"li\"</span>);\nli.textContent = <span class=\"s\">\"Programación\"</span>;\nli.className = <span class=\"s\">\"modulo\"</span>;\ndocument.querySelector(<span class=\"s\">\"#lista\"</span>).append(li);    <span class=\"c\">// al final (prepend, before, after…)</span>\n\nli.remove();                                      <span class=\"c\">// eliminar</span>\n\n<span class=\"c\">// Muchos elementos: construir fuera y añadir de una vez</span>\n<span class=\"k\">const</span> frag = document.createDocumentFragment();\ndatos.forEach(d =&gt; { <span class=\"k\">const</span> el = document.createElement(<span class=\"s\">\"li\"</span>); el.textContent = d; frag.append(el); });\nlista.append(frag);</code></pre>\n<p>Cada cambio en el DOM puede obligar al navegador a recalcular la página. Agrupar los cambios (con un fragmento o cambiando una clase en el contenedor) mejora el rendimiento.</p>\n<div class=\"caso\"><b>Más allá del DOM a mano</b>En proyectos grandes, frameworks como React o Vue actualizan el DOM por ti a partir del estado de la aplicación. Pero entender el DOM es imprescindible para usarlos bien y depurarlos.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es el DOM?",
   "o": [
    "Un servidor",
    "La representación de la página como árbol de nodos accesible desde JavaScript",
    "Un tipo de CSS",
    "Una base de datos"
   ],
   "a": 1,
   "e": "Document Object Model."
  },
  {
   "q": "¿Qué método devuelve todos los elementos que coinciden con un selector?",
   "o": [
    "querySelector",
    "querySelectorAll",
    "getElementById",
    "closest"
   ],
   "a": 1,
   "e": "querySelector devuelve solo el primero."
  },
  {
   "q": "¿Qué método de classList añade la clase si no está y la quita si está?",
   "o": [
    "add",
    "remove",
    "toggle",
    "contains"
   ],
   "a": 2,
   "e": "Muy útil para mostrar u ocultar."
  },
  {
   "q": "¿Qué método crea un elemento nuevo?",
   "o": [
    "document.createElement",
    "document.new",
    "element.make",
    "append"
   ],
   "a": 0,
   "e": "Luego se inserta con append, prepend, before o after."
  },
  {
   "q": "¿A qué atributo HTML corresponde li.dataset.id?",
   "o": [
    "id",
    "data-id",
    "dataset-id",
    "name"
   ],
   "a": 1,
   "e": "Los atributos data-* sirven para guardar datos propios."
  },
  {
   "q": "¿Para qué sirve un DocumentFragment?",
   "o": [
    "Para borrar",
    "Para construir muchos elementos fuera del DOM y añadirlos de una vez",
    "Para cifrar",
    "Para estilos"
   ],
   "a": 1,
   "e": "Reduce los recálculos de la página."
  }
 ]
});
