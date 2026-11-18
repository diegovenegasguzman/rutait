TEMA("xquery", {
 "title": "Almacenar y consultar XML: bases de datos XML y XQuery",
 "mins": 13,
 "intro": "Dónde se guardan los documentos XML cuando son muchos, qué son las bases de datos XML nativas y cómo se consultan con XQuery, el «SQL del XML».",
 "sections": [
  {
   "h": "Cómo se almacena el XML",
   "html": "\n<p>Cuando hay muchos documentos XML, guardarlos y consultarlos como archivos sueltos se queda corto. Hay tres opciones.</p>\n<table>\n<tr><th>Opción</th><th>Cómo funciona</th><th>Cuándo conviene</th></tr>\n<tr><td>Ficheros</td><td>Cada documento es un archivo</td><td>Pocos documentos y consultas sencillas</td></tr>\n<tr><td>Base de datos relacional</td><td>El XML se guarda en una columna (tipo XML) o se descompone en tablas</td><td>Cuando la mayoría de datos ya son relacionales</td></tr>\n<tr><td>Base de datos XML nativa</td><td>Guarda los documentos tal cual, con índices sobre su estructura</td><td>Muchos documentos XML con estructura variable</td></tr>\n</table>\n<p>Bases de datos XML nativas libres: <b>BaseX</b> y <b>eXist-db</b>. También bases relacionales como Oracle, SQL Server o PostgreSQL tienen un tipo de dato XML y permiten consultas XPath sobre él.</p>"
  },
  {
   "h": "XQuery: expresiones FLWOR",
   "html": "\n<p><b>XQuery</b> es el lenguaje estándar del W3C para consultar XML. Usa XPath para localizar nodos y añade una estructura parecida a SQL llamada <b>FLWOR</b>:</p>\n<table>\n<tr><th>Cláusula</th><th>Equivale en SQL a…</th></tr>\n<tr><td><code>for</code></td><td>Recorrer filas (FROM)</td></tr>\n<tr><td><code>let</code></td><td>Asignar una variable</td></tr>\n<tr><td><code>where</code></td><td>WHERE</td></tr>\n<tr><td><code>order by</code></td><td>ORDER BY</td></tr>\n<tr><td><code>return</code></td><td>SELECT (lo que se devuelve)</td></tr>\n</table>\n<pre><code><span class=\"c\">(: Productos de periféricos con stock, ordenados por precio :)</span>\n<span class=\"k\">for</span> $p <span class=\"k\">in</span> doc(<span class=\"s\">\"tienda.xml\"</span>)//producto\n<span class=\"k\">where</span> $p/@categoria = <span class=\"s\">\"perifericos\"</span> <span class=\"k\">and</span> $p/stock &gt; 0\n<span class=\"k\">order by</span> number($p/precio)\n<span class=\"k\">return</span> $p/nombre</code></pre>\n<p>Las variables empiezan por <code>$</code> y los comentarios se escriben entre <code>(:</code> y <code>:)</code>.</p>\n<p>En XQuery la división se escribe con <code>div</code>, porque la barra <code>/</code> ya se usa en las rutas de XPath.</p>\n",
   "check": {
    "q": "¿Qué cláusula de una expresión FLWOR indica lo que se devuelve?",
    "o": [
     "for",
     "let",
     "where",
     "return"
    ],
    "a": 3,
    "e": "return equivale a la lista de columnas del SELECT."
   }
  },
  {
   "h": "Construir resultados nuevos",
   "html": "\n<p>XQuery puede devolver XML o HTML nuevo, mezclando etiquetas con expresiones entre llaves:</p>\n<pre><code>&lt;ul&gt;{\n  <span class=\"k\">for</span> $p <span class=\"k\">in</span> doc(<span class=\"s\">\"tienda.xml\"</span>)//producto\n  <span class=\"k\">let</span> $iva := $p/precio * 1.21\n  <span class=\"k\">return</span> &lt;li&gt;{ $p/nombre/text() }: { round($iva * 100) div 100 } €&lt;/li&gt;\n}&lt;/ul&gt;</code></pre>\n<p>Funciones útiles: <code>count()</code>, <code>sum()</code>, <code>avg()</code>, <code>max()</code>, <code>contains()</code>, <code>distinct-values()</code>. Ojo: en XQuery, la división se escribe <code>div</code>, porque <code>/</code> es el separador de rutas.</p>"
  },
  {
   "h": "Modificar documentos",
   "html": "\n<p>La extensión <b>XQuery Update</b> permite modificar los documentos almacenados:</p>\n<pre><code>insert node &lt;producto id=<span class=\"s\">\"p4\"</span>&gt;&lt;nombre&gt;Webcam&lt;/nombre&gt;&lt;/producto&gt;\n  into doc(<span class=\"s\">\"tienda.xml\"</span>)/tienda\n\nreplace value of node doc(<span class=\"s\">\"tienda.xml\"</span>)//producto[@id=<span class=\"s\">\"p2\"</span>]/stock with 25\n\ndelete node doc(<span class=\"s\">\"tienda.xml\"</span>)//producto[stock = 0]</code></pre>\n<div class=\"caso\"><b>Para practicar</b>BaseX tiene una interfaz gráfica gratuita: creas una base de datos a partir de tus archivos XML y pruebas las consultas viendo el resultado al momento.</div>",
   "check": {
    "q": "¿Cómo se escribe una división en XQuery?",
    "o": [
     "/",
     "div",
     "%",
     "divide()"
    ],
    "a": 1,
    "e": "La barra / ya se usa para las rutas de XPath."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es una base de datos XML nativa?",
   "o": [
    "Una base relacional con una tabla",
    "Una base que guarda los documentos XML tal cual, con índices sobre su estructura",
    "Un fichero de texto",
    "Un tipo de NoSQL clave-valor"
   ],
   "a": 1,
   "e": "Ejemplos: BaseX y eXist-db."
  },
  {
   "q": "¿Qué lenguaje estándar se usa para consultar XML de forma parecida a SQL?",
   "o": [
    "XSLT",
    "XQuery",
    "DTD",
    "JSON"
   ],
   "a": 1,
   "e": "XQuery es un estándar del W3C."
  },
  {
   "q": "¿Qué significan las siglas FLWOR?",
   "o": [
    "For, Let, Where, Order by, Return",
    "File, Line, Word, Output, Read",
    "Find, List, Write, Open, Run",
    "Ninguna"
   ],
   "a": 0,
   "e": "Son las cláusulas de una expresión XQuery."
  },
  {
   "q": "¿Con qué carácter empiezan las variables en XQuery?",
   "o": [
    "@",
    "$",
    "#",
    "%"
   ],
   "a": 1,
   "e": "Por ejemplo, $p."
  },
  {
   "q": "¿Cómo se escriben los comentarios en XQuery?",
   "o": [
    "// comentario",
    "(: comentario :)",
    "<!-- comentario -->",
    "# comentario"
   ],
   "a": 1,
   "e": "Entre (: y :)."
  },
  {
   "q": "¿Qué función devuelve valores sin repetir?",
   "o": [
    "unique()",
    "distinct-values()",
    "count()",
    "group()"
   ],
   "a": 1,
   "e": "distinct-values() elimina duplicados."
  },
  {
   "q": "¿Qué extensión permite insertar, modificar y borrar nodos?",
   "o": [
    "XQuery Update",
    "XPath 3",
    "XSLT 2",
    "DOM"
   ],
   "a": 0,
   "e": "insert node, replace value of node y delete node."
  },
  {
   "q": "¿Qué base de datos XML nativa tiene interfaz gráfica y es libre?",
   "o": [
    "MySQL",
    "BaseX",
    "Redis",
    "Oracle"
   ],
   "a": 1,
   "e": "BaseX es ideal para practicar XQuery."
  }
 ]
});
