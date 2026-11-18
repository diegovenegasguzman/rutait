TEMA("web-interactiva", {
 "title": "Contenido interactivo: transiciones, animaciones y componentes",
 "mins": 12,
 "intro": "Cómo dar vida a una interfaz web con CSS y un poco de JavaScript: estados interactivos, transiciones, animaciones con keyframes, componentes como menús o modales, y cuándo no animar.",
 "sections": [
  {
   "h": "Estados y transiciones",
   "html": "\n<pre><code>.boton {\n  background: var(--color-principal);\n  transition: background-color .2s ease, transform .1s;\n}\n.boton:hover        { background: var(--color-principal-oscuro); }\n.boton:active       { transform: scale(.97); }\n.boton:focus-visible { outline: 3px solid var(--color-foco); outline-offset: 2px; }</code></pre>\n<ul>\n<li>Las pseudoclases <code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code> dan respuesta visual a la interacción.</li>\n<li><code>transition</code> suaviza el cambio entre estados.</li>\n<li>Anima preferentemente <code>transform</code> y <code>opacity</code>: el navegador las mueve sin recalcular la página, así que van fluidas.</li>\n</ul>"
  },
  {
   "h": "Animaciones con keyframes",
   "html": "\n<pre><code>@keyframes aparecer {\n  from { opacity: 0; transform: translateY(10px); }\n  to   { opacity: 1; transform: none; }\n}\n.aviso { animation: aparecer .4s ease-out; }\n\n@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; transition: none !important; }\n}</code></pre>\n<p>Usa la animación para algo: confirmar una acción, mostrar qué ha cambiado, dirigir la atención. Demasiado movimiento distrae y puede marear. Por eso se respeta la preferencia del sistema <code>prefers-reduced-motion</code>.</p>",
   "check": {
    "q": "¿Qué propiedades conviene animar para que la animación sea fluida?",
    "o": [
     "width y height",
     "transform y opacity",
     "margin y padding",
     "top y left"
    ],
    "a": 1,
    "e": "No obligan al navegador a recalcular la posición de los demás elementos."
   }
  },
  {
   "h": "Componentes interactivos",
   "html": "\n<p>HTML ya trae componentes interactivos que antes había que programar en JavaScript. Son más ligeros y accesibles por defecto.</p>\n<ul>\n<li><b>Desplegables sin JavaScript:</b> <code>&lt;details&gt;&lt;summary&gt;Pregunta&lt;/summary&gt;Respuesta&lt;/details&gt;</code>.</li>\n<li><b>Ventanas modales:</b> el elemento <code>&lt;dialog&gt;</code> con <code>dialog.showModal()</code> gestiona el foco y la tecla Escape.</li>\n<li><b>Menú móvil:</b> un botón que alterna una clase con <code>classList.toggle</code> y actualiza <code>aria-expanded</code>.</li>\n<li>Pestañas, carruseles y acordeones: deben funcionar también con teclado.</li>\n<li>Librerías: animaciones complejas con GSAP; gráficos con Chart.js; mapas con Leaflet.</li>\n</ul>\n<pre><code>btnMenu.addEventListener(<span class=\"s\">\"click\"</span>, () =&gt; {\n  <span class=\"k\">const</span> abierto = menu.classList.toggle(<span class=\"s\">\"abierto\"</span>);\n  btnMenu.setAttribute(<span class=\"s\">\"aria-expanded\"</span>, abierto);\n});</code></pre>\n<p>Un <code>&lt;dialog&gt;</code> se abre como ventana modal con el método <code>showModal()</code> y se cierra con <code>close()</code>.</p>\n<div class=\"caso\"><b>Lo ves en esta web</b>Las partículas al acertar una pregunta en ITeca son una animación con propósito: confirman que has acertado. Y se desactivan si tienes activada la opción de reducir movimiento.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué pseudoclase muestra el foco solo cuando se navega con teclado?",
   "o": [
    ":hover",
    ":focus-visible",
    ":active",
    ":checked"
   ],
   "a": 1,
   "e": "Es la forma correcta de mantener el foco visible sin molestar al usar el ratón."
  },
  {
   "q": "¿Qué propiedad CSS suaviza el cambio entre dos estados?",
   "o": [
    "animation",
    "transition",
    "transform",
    "filter"
   ],
   "a": 1,
   "e": "animation con @keyframes define animaciones más complejas."
  },
  {
   "q": "¿Qué consulta respeta a quien desactiva las animaciones en su sistema?",
   "o": [
    "prefers-color-scheme",
    "prefers-reduced-motion",
    "max-width",
    "hover: none"
   ],
   "a": 1,
   "e": "Algunas personas se marean con el movimiento."
  },
  {
   "q": "¿Qué elemento HTML crea un desplegable sin JavaScript?",
   "o": [
    "<dialog>",
    "<details> con <summary>",
    "<menu>",
    "<select>"
   ],
   "a": 1,
   "e": "Es accesible por defecto."
  },
  {
   "q": "¿Qué método abre un <dialog> como ventana modal?",
   "o": [
    "open()",
    "showModal()",
    "display()",
    "modal()"
   ],
   "a": 1,
   "e": "Gestiona el foco y cierra con Escape."
  },
  {
   "q": "¿Qué atributo indica a los lectores de pantalla si un menú está abierto?",
   "o": [
    "aria-hidden",
    "aria-expanded",
    "alt",
    "title"
   ],
   "a": 1,
   "e": "Hay que actualizarlo al abrir y cerrar."
  }
 ]
});
