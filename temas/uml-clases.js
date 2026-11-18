TEMA("uml-clases", {
 "title": "Diagramas de clases UML",
 "mins": 13,
 "intro": "Cómo representar la estructura de un programa con un diagrama de clases: clases, atributos, métodos, visibilidad y los distintos tipos de relación entre clases.",
 "sections": [
  {
   "h": "Representar una clase",
   "html": "\n<p>Una clase se dibuja como una caja con tres partes: nombre, atributos y métodos.</p>\n<pre><code>┌──────────────────────────┐\n│ Cuenta                   │\n├──────────────────────────┤\n│ - titular : String       │\n│ - saldo : double         │\n├──────────────────────────┤\n│ + ingresar(c : double)   │\n│ + retirar(c : double) : boolean │\n│ + getSaldo() : double    │\n└──────────────────────────┘</code></pre>\n<table>\n<tr><th>Símbolo</th><th>Visibilidad</th></tr>\n<tr><td><code>+</code></td><td>public</td></tr>\n<tr><td><code>-</code></td><td>private</td></tr>\n<tr><td><code>#</code></td><td>protected</td></tr>\n<tr><td><code>~</code></td><td>de paquete</td></tr>\n</table>\n<p>Lo estático se subraya y lo abstracto se escribe en cursiva.</p>\n<p>Los símbolos de visibilidad son: <b>+</b> público, <b>-</b> privado, <b>#</b> protegido y <b>~</b> de paquete.</p>\n",
   "check": {
    "q": "¿Qué símbolo indica un atributo privado en UML?",
    "o": [
     "+",
     "-",
     "#",
     "~"
    ],
    "a": 1,
    "e": "+ público, - privado, # protegido, ~ paquete."
   }
  },
  {
   "h": "Relaciones",
   "html": "\n<p>Las clases de un programa no están aisladas: unas heredan de otras, unas contienen a otras o simplemente se usan. Cada relación se dibuja de una forma.</p>\n<table>\n<tr><th>Relación</th><th>Dibujo</th><th>Significado</th><th>Ejemplo</th></tr>\n<tr><td>Herencia (generalización)</td><td>Línea con triángulo hueco hacia el padre</td><td>«Es un»</td><td>Perro es un Animal</td></tr>\n<tr><td>Realización</td><td>Línea discontinua con triángulo hueco</td><td>Implementa una interfaz</td><td>Alumno implementa Comparable</td></tr>\n<tr><td>Asociación</td><td>Línea continua</td><td>Se conocen</td><td>Profesor imparte Curso</td></tr>\n<tr><td>Agregación</td><td>Rombo hueco en el «todo»</td><td>Tiene, pero las partes pueden existir solas</td><td>Equipo tiene Jugadores</td></tr>\n<tr><td>Composición</td><td>Rombo relleno en el «todo»</td><td>Las partes no existen sin el todo</td><td>Factura tiene Líneas</td></tr>\n<tr><td>Dependencia</td><td>Flecha discontinua</td><td>Usa temporalmente</td><td>Un método recibe un objeto como parámetro</td></tr>\n</table>\n<p>En los extremos de las asociaciones se indica la <b>multiplicidad</b>: <code>1</code>, <code>0..1</code>, <code>*</code> (muchos), <code>1..*</code> (uno o más).</p>\n<p>La <b>multiplicidad</b> indica cuántos objetos participan: <code>1</code> (exactamente uno), <code>0..1</code> (cero o uno), <code>*</code> o <code>0..*</code> (cero o más) y <code>1..*</code> (uno o más).</p>\n",
   "check": {
    "q": "Si se borra una factura, se borran sus líneas. ¿Qué relación es?",
    "o": [
     "Agregación",
     "Composición",
     "Herencia",
     "Dependencia"
    ],
    "a": 1,
    "e": "En la composición, las partes no existen sin el todo (rombo relleno)."
   }
  },
  {
   "h": "Del diagrama al código",
   "html": "\n<p>Una asociación «Profesor 1 — * Curso» se traduce en atributos:</p>\n<pre><code><span class=\"k\">class</span> Profesor { <span class=\"k\">private</span> List&lt;Curso&gt; cursos; }\n<span class=\"k\">class</span> Curso    { <span class=\"k\">private</span> Profesor profesor; }</code></pre>\n<p>Herramientas para dibujar UML: <b>draw.io</b> (diagrams.net), <b>PlantUML</b> (diagramas escritos como texto), StarUML, Visual Paradigm; y plugins de los IDE que generan el diagrama desde el código.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuántas secciones tiene una clase en UML?",
   "o": [
    "Una",
    "Tres: nombre, atributos y métodos",
    "Cinco",
    "Depende"
   ],
   "a": 1,
   "e": "Las secciones de atributos o métodos pueden omitirse si no interesan."
  },
  {
   "q": "¿Cómo se representa la herencia?",
   "o": [
    "Rombo relleno",
    "Línea con triángulo hueco apuntando al padre",
    "Flecha discontinua",
    "Línea simple"
   ],
   "a": 1,
   "e": "Se lee «es un»."
  },
  {
   "q": "¿Qué diferencia hay entre agregación y composición?",
   "o": [
    "Ninguna",
    "En la composición las partes no existen sin el todo",
    "La agregación es herencia",
    "La composición es una interfaz"
   ],
   "a": 1,
   "e": "Rombo hueco frente a rombo relleno."
  },
  {
   "q": "¿Qué multiplicidad indica «uno o más»?",
   "o": [
    "0..1",
    "1",
    "1..*",
    "*"
   ],
   "a": 2,
   "e": "* significa cero o más."
  },
  {
   "q": "¿Cómo se representa que una clase implementa una interfaz?",
   "o": [
    "Línea continua",
    "Línea discontinua con triángulo hueco",
    "Rombo",
    "No se representa"
   ],
   "a": 1,
   "e": "Es la relación de realización."
  },
  {
   "q": "¿Qué herramienta crea diagramas UML a partir de texto?",
   "o": [
    "PlantUML",
    "Excel",
    "GIMP",
    "Wireshark"
   ],
   "a": 0,
   "e": "Ideal para guardar los diagramas con el código en Git."
  }
 ]
});
