TEMA("sindicacion", {
 "title": "Sindicación de contenidos: RSS y Atom",
 "mins": 11,
 "intro": "Cómo una web puede publicar sus novedades en un formato XML estándar para que cualquiera las reciba automáticamente, y cómo se crea y valida un canal RSS o Atom.",
 "sections": [
  {
   "h": "Qué es la sindicación",
   "html": "\n<p><b>Sindicar</b> es publicar las novedades de una web en un archivo XML con formato estándar (un <b>canal</b> o <i>feed</i>). Un programa lector consulta ese archivo cada cierto tiempo y te muestra lo nuevo, sin que tengas que visitar la web.</p>\n<ul>\n<li><b>Podcasts:</b> todos se distribuyen mediante un canal RSS; las apps de podcasts son lectores de RSS.</li>\n<li><b>Lectores de noticias</b> como Feedly, Inoreader o Thunderbird.</li>\n<li><b>Automatizaciones:</b> publicar en redes sociales cada nueva entrada de un blog.</li>\n</ul>\n<p>Hay dos formatos principales: <b>RSS 2.0</b> y <b>Atom</b>.</p>"
  },
  {
   "h": "Un canal RSS 2.0",
   "html": "\n<pre><code>&lt;?xml version=<span class=\"s\">\"1.0\"</span> encoding=<span class=\"s\">\"UTF-8\"</span>?&gt;\n&lt;rss version=<span class=\"s\">\"2.0\"</span>&gt;\n  &lt;channel&gt;\n    &lt;title&gt;Noticias del ciclo&lt;/title&gt;\n    &lt;link&gt;https://ejemplo.es&lt;/link&gt;\n    &lt;description&gt;Novedades para el alumnado&lt;/description&gt;\n    &lt;language&gt;es&lt;/language&gt;\n    &lt;item&gt;\n      &lt;title&gt;Publicadas las notas de redes&lt;/title&gt;\n      &lt;link&gt;https://ejemplo.es/notas-redes&lt;/link&gt;\n      &lt;description&gt;Ya puedes consultarlas en el campus.&lt;/description&gt;\n      &lt;pubDate&gt;Tue, 17 Nov 2026 10:00:00 +0100&lt;/pubDate&gt;\n      &lt;guid&gt;https://ejemplo.es/notas-redes&lt;/guid&gt;\n    &lt;/item&gt;\n  &lt;/channel&gt;\n&lt;/rss&gt;</code></pre>\n<ul>\n<li><code>&lt;channel&gt;</code> describe el canal y debe tener <code>title</code>, <code>link</code> y <code>description</code>.</li>\n<li>Cada <code>&lt;item&gt;</code> es una novedad.</li>\n<li><code>guid</code> identifica de forma única cada elemento, para que el lector no lo muestre dos veces.</li>\n<li>Las fechas siguen el formato RFC 822, en inglés.</li>\n</ul>\n<p>RSS y Atom son vocabularios de <b>XML</b>. En RSS 2.0, cada noticia o entrada es un elemento <code>&lt;item&gt;</code> dentro de <code>&lt;channel&gt;</code>.</p>\n",
   "check": {
    "q": "En RSS 2.0, ¿qué elemento representa cada noticia o entrada?",
    "o": [
     "<channel>",
     "<item>",
     "<entry>",
     "<feed>"
    ],
    "a": 1,
    "e": "<item> en RSS; en Atom se llama <entry>."
   }
  },
  {
   "h": "Atom",
   "html": "\n<p><b>Atom</b> surgió para resolver ambigüedades de RSS y es un estándar del IETF (RFC 4287). Es más estricto:</p>\n<pre><code>&lt;feed xmlns=<span class=\"s\">\"http://www.w3.org/2005/Atom\"</span>&gt;\n  &lt;title&gt;Noticias del ciclo&lt;/title&gt;\n  &lt;id&gt;https://ejemplo.es/&lt;/id&gt;\n  &lt;updated&gt;2026-11-17T10:00:00+01:00&lt;/updated&gt;\n  &lt;entry&gt;\n    &lt;title&gt;Publicadas las notas de redes&lt;/title&gt;\n    &lt;id&gt;https://ejemplo.es/notas-redes&lt;/id&gt;\n    &lt;updated&gt;2026-11-17T10:00:00+01:00&lt;/updated&gt;\n    &lt;link href=<span class=\"s\">\"https://ejemplo.es/notas-redes\"</span>/&gt;\n  &lt;/entry&gt;\n&lt;/feed&gt;</code></pre>\n<table>\n<tr><th></th><th>RSS 2.0</th><th>Atom</th></tr>\n<tr><td>Raíz</td><td><code>&lt;rss&gt;</code> con <code>&lt;channel&gt;</code></td><td><code>&lt;feed&gt;</code></td></tr>\n<tr><td>Cada novedad</td><td><code>&lt;item&gt;</code></td><td><code>&lt;entry&gt;</code></td></tr>\n<tr><td>Fechas</td><td>RFC 822</td><td>ISO 8601 (RFC 3339)</td></tr>\n<tr><td>Espacio de nombres</td><td>No obligatorio</td><td>Obligatorio</td></tr>\n</table>"
  },
  {
   "h": "Publicar y validar un canal",
   "html": "\n<p>Un canal solo sirve si los lectores lo encuentran y si está bien escrito.</p>\n<ul>\n<li>Los CMS como WordPress generan el canal automáticamente (por ejemplo, <code>/feed/</code>).</li>\n<li>Se anuncia en el <code>&lt;head&gt;</code> de la web para que los navegadores y lectores lo encuentren:</li>\n</ul>\n<pre><code>&lt;link rel=<span class=\"s\">\"alternate\"</span> type=<span class=\"s\">\"application/rss+xml\"</span> title=<span class=\"s\">\"Noticias\"</span> href=<span class=\"s\">\"/feed.xml\"</span>&gt;</code></pre>\n<ul>\n<li>El validador del W3C (validator.w3.org/feed) comprueba que el canal cumple el formato.</li>\n</ul>\n<div class=\"caso\"><b>Truco útil</b>Muchas webs siguen teniendo canal RSS aunque no lo anuncien. Prueba a añadir <code>/feed</code> o <code>/rss</code> a la dirección de un blog.</div>",
   "check": {
    "q": "¿Qué etiqueta en el <head> permite que los navegadores y lectores descubran el canal RSS?",
    "o": [
     "<meta name=\"rss\">",
     "<link rel=\"alternate\" type=\"application/rss+xml\">",
     "<script src=\"feed.xml\">",
     "<rss>"
    ],
    "a": 1,
    "e": "Es el mecanismo estándar de autodescubrimiento de canales."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es la sindicación de contenidos?",
   "o": [
    "Copiar webs ajenas",
    "Publicar las novedades en un formato estándar para recibirlas automáticamente",
    "Un tipo de virus",
    "Un servidor web"
   ],
   "a": 1,
   "e": "Los lectores consultan el canal y muestran lo nuevo."
  },
  {
   "q": "¿En qué formato se basan RSS y Atom?",
   "o": [
    "JSON",
    "XML",
    "CSV",
    "HTML"
   ],
   "a": 1,
   "e": "Ambos son vocabularios XML."
  },
  {
   "q": "¿Qué elementos obligatorios tiene <channel> en RSS 2.0?",
   "o": [
    "title, link y description",
    "id y updated",
    "author y date",
    "item y entry"
   ],
   "a": 0,
   "e": "Los tres describen el canal."
  },
  {
   "q": "¿Para qué sirve guid en un item?",
   "o": [
    "Para la fecha",
    "Para identificar de forma única el elemento",
    "Para el autor",
    "Para la imagen"
   ],
   "a": 1,
   "e": "Evita que el lector muestre la misma noticia dos veces."
  },
  {
   "q": "¿Cómo se llama cada novedad en Atom?",
   "o": [
    "<item>",
    "<entry>",
    "<news>",
    "<post>"
   ],
   "a": 1,
   "e": "En RSS es <item>."
  },
  {
   "q": "¿Qué formato de fecha usa Atom?",
   "o": [
    "RFC 822",
    "ISO 8601 / RFC 3339",
    "DD/MM/AAAA",
    "Unix"
   ],
   "a": 1,
   "e": "Por ejemplo, 2026-11-17T10:00:00+01:00."
  },
  {
   "q": "¿Cómo se distribuyen los podcasts?",
   "o": [
    "Por correo",
    "Mediante canales RSS",
    "Por FTP",
    "Por DNS"
   ],
   "a": 1,
   "e": "Cada podcast publica un canal RSS con los episodios."
  },
  {
   "q": "¿Qué organismo estandarizó Atom?",
   "o": [
    "El W3C",
    "El IETF",
    "La ISO",
    "Microsoft"
   ],
   "a": 1,
   "e": "Atom se define en la RFC 4287 del IETF."
  }
 ]
});
