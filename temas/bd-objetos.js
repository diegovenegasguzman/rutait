TEMA("bd-objetos", {
 "title": "Bases de datos objeto-relacionales y orientadas a objetos",
 "mins": 11,
 "intro": "Qué ocurre cuando las tablas se quedan cortas para representar objetos: tipos definidos por el usuario en bases objeto-relacionales y bases de datos que guardan objetos directamente.",
 "sections": [
  {
   "h": "El desajuste objeto-relacional",
   "html": "\n<p>Los programas trabajan con objetos (herencia, listas dentro de objetos, referencias) y las bases relacionales con tablas planas. Traducir entre ambos mundos es el <b>desajuste de impedancia</b>. Hay tres soluciones:</p>\n<ul>\n<li>Un <b>ORM</b> que traduzca (JPA/Hibernate).</li>\n<li>Una base de datos <b>objeto-relacional</b>: relacional, pero con tipos de objeto.</li>\n<li>Una base de datos <b>orientada a objetos</b>: guarda los objetos tal cual.</li>\n</ul>"
  },
  {
   "h": "Bases de datos objeto-relacionales",
   "html": "\n<p>PostgreSQL y Oracle amplían SQL con características de objetos:</p>\n<pre><code><span class=\"c\">-- PostgreSQL: tipo compuesto y array</span>\n<span class=\"k\">CREATE TYPE</span> direccion <span class=\"k\">AS</span> (calle TEXT, ciudad TEXT, cp CHAR(5));\n\n<span class=\"k\">CREATE TABLE</span> clientes (\n  id SERIAL <span class=\"k\">PRIMARY KEY</span>,\n  nombre TEXT,\n  domicilio direccion,\n  telefonos TEXT[]\n);\n\n<span class=\"k\">SELECT</span> nombre, (domicilio).ciudad, telefonos[1] <span class=\"k\">FROM</span> clientes;\n\n<span class=\"c\">-- Herencia de tablas</span>\n<span class=\"k\">CREATE TABLE</span> empleados (sueldo NUMERIC) <span class=\"k\">INHERITS</span> (clientes);</code></pre>\n<p>También admiten tipos <b>JSON/JSONB</b>, que permiten guardar documentos dentro de una columna y consultarlos.</p>\n<p>PostgreSQL permite crear <b>tipos compuestos</b>: por ejemplo, un tipo <code>direccion</code> que agrupa calle, ciudad y código postal en una sola columna. También tiene la columna <code>JSONB</code>, que guarda documentos JSON en formato binario y permite consultarlos e indexarlos.</p>\n",
   "check": {
    "q": "¿Qué permite un tipo compuesto como «direccion» en PostgreSQL?",
    "o": [
     "Cifrar columnas",
     "Agrupar varios campos en un solo tipo de columna",
     "Crear índices",
     "Hacer copias"
    ],
    "a": 1,
    "e": "Es una de las características objeto-relacionales."
   }
  },
  {
   "h": "Bases de datos orientadas a objetos",
   "html": "\n<p>Guardan los objetos del lenguaje directamente, con sus referencias, sin tablas ni ORM. Ejemplos: <b>ObjectDB</b> (compatible con JPA), db4o (descontinuada) o ZODB en Python.</p>\n<ul>\n<li><b>Ventajas:</b> sin traducción, muy naturales para estructuras complejas.</li>\n<li><b>Inconvenientes:</b> menos extendidas, menos herramientas, ligadas a un lenguaje.</li>\n</ul>\n<p>El estándar histórico fue el de la <b>ODMG</b>, con su lenguaje de consulta <b>OQL</b>. Hoy se usan sobre todo en nichos; en la mayoría de proyectos se combina base de datos relacional y ORM, o una documental como MongoDB.</p>\n<p>El grupo <b>ODMG</b> definió un estándar para las bases de datos orientadas a objetos. Su lenguaje de consulta es <b>OQL</b> (Object Query Language), parecido a SQL.</p>\n"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es el desajuste de impedancia objeto-relacional?",
   "o": [
    "Un error eléctrico",
    "La dificultad de traducir entre objetos y tablas",
    "Un tipo de índice",
    "Una vulnerabilidad"
   ],
   "a": 1,
   "e": "Lo resuelven ORM o bases de datos con objetos."
  },
  {
   "q": "¿Qué SGBD es un ejemplo de objeto-relacional?",
   "o": [
    "SQLite",
    "PostgreSQL",
    "Redis",
    "Excel"
   ],
   "a": 1,
   "e": "Oracle también tiene características objeto-relacionales."
  },
  {
   "q": "¿Qué palabra de PostgreSQL crea una tabla que hereda de otra?",
   "o": [
    "EXTENDS",
    "INHERITS",
    "UNDER",
    "CHILD"
   ],
   "a": 1,
   "e": "La tabla hija incluye las columnas de la padre."
  },
  {
   "q": "¿Qué guarda una base de datos orientada a objetos?",
   "o": [
    "Tablas planas",
    "Los objetos del programa directamente",
    "Solo texto",
    "Imágenes"
   ],
   "a": 1,
   "e": "Sin necesidad de ORM."
  },
  {
   "q": "¿Qué lenguaje de consulta definió la ODMG?",
   "o": [
    "SQL",
    "OQL",
    "XPath",
    "JPQL"
   ],
   "a": 1,
   "e": "Object Query Language."
  },
  {
   "q": "¿Qué tipo de columna permite guardar documentos en PostgreSQL?",
   "o": [
    "BLOB",
    "JSONB",
    "VARCHAR(2)",
    "BOOLEAN"
   ],
   "a": 1,
   "e": "Se puede consultar e indexar su contenido."
  }
 ]
});
