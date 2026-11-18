TEMA("html5", {
 "title": "Lenguajes de marcas en la web: HTML5 y CSS",
 "mins": 15,
 "intro": "Cómo se construye una página web con HTML5: estructura semántica, formularios con validación, tablas, multimedia, y cómo se le da estilo con CSS.",
 "sections": [
  {
   "h": "Estructura semántica",
   "html": "\n<p>HTML5 introdujo etiquetas que describen <b>qué es</b> cada parte de la página, no solo cómo se ve:</p>\n<table>\n<tr><th>Etiqueta</th><th>Contenido</th></tr>\n<tr><td><code>&lt;header&gt;</code></td><td>Cabecera: logotipo, título</td></tr>\n<tr><td><code>&lt;nav&gt;</code></td><td>Menú de navegación</td></tr>\n<tr><td><code>&lt;main&gt;</code></td><td>Contenido principal (uno por página)</td></tr>\n<tr><td><code>&lt;article&gt;</code></td><td>Contenido independiente: una noticia, una entrada</td></tr>\n<tr><td><code>&lt;section&gt;</code></td><td>Una sección temática con su propio título</td></tr>\n<tr><td><code>&lt;aside&gt;</code></td><td>Contenido complementario: barra lateral</td></tr>\n<tr><td><code>&lt;footer&gt;</code></td><td>Pie: contacto, avisos legales</td></tr>\n</table>\n<p>Los títulos van de <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> en orden, sin saltarse niveles. Los buscadores y los lectores de pantalla usan esta estructura para entender la página.</p>\n<p><code>&lt;nav&gt;</code> agrupa los enlaces de navegación principales. Solo debe haber <b>un</b> <code>&lt;main&gt;</code> por página, porque marca su contenido principal y único.</p>\n"
  },
  {
   "h": "Formularios",
   "html": "\n<pre><code>&lt;form action=<span class=\"s\">\"/registro\"</span> method=<span class=\"s\">\"post\"</span>&gt;\n  &lt;label for=<span class=\"s\">\"email\"</span>&gt;Correo&lt;/label&gt;\n  &lt;input id=<span class=\"s\">\"email\"</span> name=<span class=\"s\">\"email\"</span> type=<span class=\"s\">\"email\"</span> required&gt;\n\n  &lt;label for=<span class=\"s\">\"edad\"</span>&gt;Edad&lt;/label&gt;\n  &lt;input id=<span class=\"s\">\"edad\"</span> name=<span class=\"s\">\"edad\"</span> type=<span class=\"s\">\"number\"</span> min=<span class=\"s\">\"16\"</span> max=<span class=\"s\">\"99\"</span>&gt;\n\n  &lt;label for=<span class=\"s\">\"ciclo\"</span>&gt;Ciclo&lt;/label&gt;\n  &lt;select id=<span class=\"s\">\"ciclo\"</span> name=<span class=\"s\">\"ciclo\"</span>&gt;\n    &lt;option&gt;SMR&lt;/option&gt;&lt;option&gt;ASIR&lt;/option&gt;\n  &lt;/select&gt;\n\n  &lt;button type=<span class=\"s\">\"submit\"</span>&gt;Registrarme&lt;/button&gt;\n&lt;/form&gt;</code></pre>\n<ul>\n<li>Cada campo lleva su <code>&lt;label&gt;</code> asociado con <code>for</code> e <code>id</code>: mejora la accesibilidad y, al pulsar el texto, se activa el campo.</li>\n<li>Los tipos <code>email</code>, <code>number</code>, <code>date</code>, <code>tel</code> o <code>url</code> validan el formato y muestran el teclado adecuado en el móvil.</li>\n<li><code>required</code>, <code>min</code>, <code>max</code> y <code>pattern</code> validan antes de enviar. Aun así, el servidor siempre debe volver a validar.</li>\n<li>El atributo <code>name</code> es el que llega al servidor.</li>\n</ul>",
   "check": {
    "q": "¿Qué atributo de un campo es el nombre con el que llega el dato al servidor?",
    "o": [
     "id",
     "name",
     "label",
     "value"
    ],
    "a": 1,
    "e": "El servidor recibe pares name=valor; id sirve para enlazar con el label y para CSS/JavaScript."
   }
  },
  {
   "h": "Tablas y multimedia",
   "html": "\n<p>Las tablas son para <b>datos tabulares</b>, nunca para maquetar la página:</p>\n<pre><code>&lt;table&gt;\n  &lt;caption&gt;Notas del primer trimestre&lt;/caption&gt;\n  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Módulo&lt;/th&gt;&lt;th&gt;Nota&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;\n  &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Redes&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;\n&lt;/table&gt;</code></pre>\n<p>HTML5 integra audio y vídeo sin complementos:</p>\n<pre><code>&lt;video src=<span class=\"s\">\"demo.mp4\"</span> controls width=<span class=\"s\">\"640\"</span> poster=<span class=\"s\">\"portada.jpg\"</span>&gt;\n  &lt;track kind=<span class=\"s\">\"captions\"</span> src=<span class=\"s\">\"subtitulos.vtt\"</span> srclang=<span class=\"s\">\"es\"</span>&gt;\n&lt;/video&gt;</code></pre>\n<p><code>&lt;track&gt;</code> añade subtítulos, importantes para la accesibilidad.</p>\n<p>Los subtítulos de un vídeo se añaden con <code>&lt;track&gt;</code>, que enlaza un archivo de subtítulos en formato <b>.vtt</b> (WebVTT).</p>\n"
  },
  {
   "h": "Dar estilo con CSS",
   "html": "\n<p>HTML define la estructura y <b>CSS</b> el aspecto. Hay tres formas de aplicarlo; la recomendada es una hoja externa:</p>\n<pre><code>&lt;link rel=<span class=\"s\">\"stylesheet\"</span> href=<span class=\"s\">\"estilos.css\"</span>&gt;</code></pre>\n<pre><code><span class=\"c\">/* estilos.css */</span>\nbody { font-family: system-ui, sans-serif; line-height: 1.6; }\nnav a { color: #1864AB; text-decoration: none; }\n.aviso { background: #FFF7E0; padding: 12px; border-radius: 8px; }</code></pre>\n<p>Un selector indica a qué elementos se aplica (etiqueta, <code>.clase</code> o <code>#id</code>) y entre llaves van las propiedades. Lo verás a fondo en el módulo de diseño de interfaces web.</p>\n<div class=\"caso\"><b>Comprobar tu HTML</b>El validador oficial del W3C (validator.w3.org) revisa si tu página cumple el estándar: etiquetas sin cerrar, atributos mal escritos, IDs repetidos…</div>",
   "check": {
    "q": "¿Cuál es la forma recomendada de aplicar CSS a un sitio web?",
    "o": [
     "Atributo style en cada etiqueta",
     "Una hoja de estilos externa enlazada con <link>",
     "Etiquetas <font>",
     "Tablas"
    ],
    "a": 1,
    "e": "Una hoja externa se reutiliza en todas las páginas y separa contenido y presentación."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué etiqueta marca el menú de navegación?",
   "o": [
    "<menu>",
    "<nav>",
    "<aside>",
    "<header>"
   ],
   "a": 1,
   "e": "<nav> agrupa los enlaces principales de navegación."
  },
  {
   "q": "¿Cuántos <main> debe haber por página?",
   "o": [
    "Ninguno",
    "Uno",
    "Uno por sección",
    "Ilimitados"
   ],
   "a": 1,
   "e": "<main> marca el único contenido principal."
  },
  {
   "q": "¿Para qué sirve <label for=\"email\">?",
   "o": [
    "Para dar estilo",
    "Para asociar un texto descriptivo al campo con id email",
    "Para validar",
    "Para enviar"
   ],
   "a": 1,
   "e": "Mejora la accesibilidad y la usabilidad."
  },
  {
   "q": "¿Qué tipo de input muestra el teclado de correo en el móvil y valida el formato?",
   "o": [
    "text",
    "email",
    "mail",
    "string"
   ],
   "a": 1,
   "e": "type=\"email\" comprueba que haya una @ y un dominio."
  },
  {
   "q": "¿Basta la validación HTML5 del formulario para garantizar datos correctos?",
   "o": [
    "Sí",
    "No, el servidor también debe validar",
    "Solo con required",
    "Solo en Chrome"
   ],
   "a": 1,
   "e": "El usuario puede saltarse la validación del navegador."
  },
  {
   "q": "¿Para qué deben usarse las tablas en HTML?",
   "o": [
    "Para maquetar la página",
    "Para mostrar datos tabulares",
    "Para menús",
    "Para imágenes"
   ],
   "a": 1,
   "e": "La maquetación se hace con CSS."
  },
  {
   "q": "¿Qué etiqueta añade subtítulos a un vídeo?",
   "o": [
    "<sub>",
    "<track>",
    "<caption>",
    "<text>"
   ],
   "a": 1,
   "e": "<track kind=\"captions\"> enlaza un archivo de subtítulos VTT."
  },
  {
   "q": "¿Qué selector CSS aplica estilos a los elementos con class=\"aviso\"?",
   "o": [
    "#aviso",
    "aviso",
    ".aviso",
    "*aviso"
   ],
   "a": 2,
   "e": "El punto selecciona clases; la almohadilla, IDs."
  }
 ]
});
