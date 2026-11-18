TEMA("js-objetos", {
 "title": "Objetos predefinidos de JavaScript",
 "mins": 12,
 "intro": "Los objetos que JavaScript y el navegador ya traen: String, Number, Math, Date, y los del navegador como window, location, history, localStorage y los temporizadores.",
 "sections": [
  {
   "h": "Objetos del lenguaje",
   "html": "\n<p>JavaScript trae objetos ya hechos con métodos muy útiles para trabajar con texto, números, fechas y cálculos. No hace falta programarlos.</p>\n<table>\n<tr><th>Objeto</th><th>Ejemplos útiles</th></tr>\n<tr><td>String</td><td><code>\"hola\".toUpperCase()</code>, <code>s.includes(\"a\")</code>, <code>s.split(\",\")</code>, <code>s.trim()</code>, <code>s.padStart(2, \"0\")</code></td></tr>\n<tr><td>Number</td><td><code>Number(\"42\")</code>, <code>parseInt(\"42px\")</code>, <code>(3.14159).toFixed(2)</code>, <code>Number.isNaN(x)</code></td></tr>\n<tr><td>Math</td><td><code>Math.round</code>, <code>Math.max</code>, <code>Math.floor(Math.random() * 6) + 1</code> (dado)</td></tr>\n<tr><td>Date</td><td><code>new Date()</code>, <code>d.getFullYear()</code>, <code>d.toLocaleDateString(\"es-ES\")</code></td></tr>\n<tr><td>JSON</td><td><code>JSON.stringify(obj)</code>, <code>JSON.parse(texto)</code></td></tr>\n<tr><td>Intl</td><td><code>new Intl.NumberFormat(\"es-ES\", {style:\"currency\", currency:\"EUR\"}).format(1234.5)</code> → «1.234,50 €»</td></tr>\n</table>\n<div class=\"note exam\"><b>Ojo con Date</b>En <code>getMonth()</code> los meses van de 0 (enero) a 11 (diciembre). Es una fuente clásica de errores.</div>\n<p>Por ejemplo, <code>trim()</code> elimina los espacios al principio y al final de un texto, muy útil al leer lo que escribe el usuario.</p>\n",
   "check": {
    "q": "¿Qué devuelve new Date(2026, 0, 15).getMonth()?",
    "o": [
     "1",
     "0",
     "15",
     "Enero"
    ],
    "a": 1,
    "e": "Los meses empiezan en 0: enero es 0."
   }
  },
  {
   "h": "Objetos del navegador (BOM)",
   "html": "\n<p>Además de los objetos del lenguaje, el navegador ofrece los suyos para controlar la ventana, la dirección y el historial. Es el BOM (Browser Object Model).</p>\n<ul>\n<li><b>window:</b> la ventana; es el objeto global. <code>window.innerWidth</code> da el ancho.</li>\n<li><b>location:</b> la URL actual. <code>location.href</code>, <code>location.hash</code>, <code>location.reload()</code>.</li>\n<li><b>history:</b> <code>history.back()</code> y la API de historial para las SPA.</li>\n<li><b>navigator:</b> información del navegador e idioma (<code>navigator.language</code>).</li>\n<li><b>document:</b> la página (el DOM).</li>\n</ul>"
  },
  {
   "h": "Temporizadores y almacenamiento",
   "html": "\n<pre><code><span class=\"k\">const</span> id = setTimeout(() =&gt; aviso(<span class=\"s\">\"¡Tiempo!\"</span>), <span class=\"s\">3000</span>);   <span class=\"c\">// una vez, a los 3 s</span>\n<span class=\"k\">const</span> reloj = setInterval(actualizarHora, <span class=\"s\">1000</span>);       <span class=\"c\">// cada segundo</span>\nclearInterval(reloj);                                     <span class=\"c\">// pararlo</span>\n\nlocalStorage.setItem(<span class=\"s\">\"tema\"</span>, <span class=\"s\">\"oscuro\"</span>);\n<span class=\"k\">const</span> tema = localStorage.getItem(<span class=\"s\">\"tema\"</span>);              <span class=\"c\">// \"oscuro\"</span>\nlocalStorage.setItem(<span class=\"s\">\"carrito\"</span>, JSON.stringify(carrito)); <span class=\"c\">// objetos, como texto JSON</span></code></pre>\n<ul>\n<li><b>localStorage</b> guarda datos en el navegador sin caducidad; <b>sessionStorage</b>, hasta cerrar la pestaña.</li>\n<li>Solo guardan texto: los objetos se convierten con JSON.</li>\n<li>Nunca guardes datos sensibles en ellos: cualquier script de la página puede leerlos.</li>\n</ul>\n<p><code>setTimeout</code> ejecuta una función <b>una vez</b> pasado un tiempo; <code>setInterval</code> la ejecuta <b>repetidamente</b> cada cierto tiempo, hasta que la paras con <code>clearInterval</code>.</p>\n<div class=\"caso\"><b>Lo usa esta misma web</b>Tu progreso en los tests de ITeca se guarda en localStorage. Por eso, si cambias de navegador, no aparece.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué método elimina los espacios al principio y al final de un texto?",
   "o": [
    "trim()",
    "split()",
    "slice()",
    "pad()"
   ],
   "a": 0,
   "e": "Muy útil al leer formularios."
  },
  {
   "q": "¿Cómo se simula un dado de 6 caras?",
   "o": [
    "Math.random(6)",
    "Math.floor(Math.random() * 6) + 1",
    "Math.round(6)",
    "Math.dice()"
   ],
   "a": 1,
   "e": "random() da un número entre 0 y 1 (sin incluir el 1)."
  },
  {
   "q": "¿Qué objeto del navegador contiene la URL actual?",
   "o": [
    "window.url",
    "location",
    "history",
    "navigator"
   ],
   "a": 1,
   "e": "location.href, location.hash…"
  },
  {
   "q": "¿Qué diferencia hay entre setTimeout y setInterval?",
   "o": [
    "Ninguna",
    "setTimeout se ejecuta una vez; setInterval, repetidamente",
    "setInterval es más rápido",
    "setTimeout no existe"
   ],
   "a": 1,
   "e": "Se paran con clearTimeout y clearInterval."
  },
  {
   "q": "¿Qué tipo de datos guarda localStorage?",
   "o": [
    "Cualquier objeto",
    "Solo texto",
    "Solo números",
    "Imágenes"
   ],
   "a": 1,
   "e": "Los objetos se convierten con JSON.stringify."
  },
  {
   "q": "¿Cuándo se borra sessionStorage?",
   "o": [
    "Nunca",
    "Al cerrar la pestaña",
    "Cada hora",
    "Al apagar el servidor"
   ],
   "a": 1,
   "e": "localStorage, en cambio, persiste."
  }
 ]
});
