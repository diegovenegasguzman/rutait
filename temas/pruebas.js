TEMA("pruebas", {
 "title": "Diseño y realización de pruebas",
 "mins": 14,
 "intro": "Cómo comprobar que un programa funciona de verdad: técnicas para diseñar casos de prueba, pruebas unitarias con JUnit y los distintos niveles de prueba.",
 "sections": [
  {
   "h": "Diseñar casos de prueba",
   "html": "\n<p><b>Caja negra</b> (sin mirar el código):</p>\n<ul>\n<li><b>Clases de equivalencia:</b> divide las entradas en grupos que se comportan igual y prueba uno de cada. Para una nota de 0 a 10: válida (7), negativa (−1), mayor de 10 (11).</li>\n<li><b>Valores límite:</b> los errores se esconden en los bordes. Prueba −1, 0, 1, 9, 10 y 11.</li>\n</ul>\n<p><b>Caja blanca</b> (mirando el código):</p>\n<ul>\n<li><b>Cobertura:</b> que las pruebas ejecuten todas las líneas y todos los caminos (cada rama de cada <code>if</code>).</li>\n<li><b>Complejidad ciclomática:</b> número de caminos independientes del código; indica cuántas pruebas mínimas hacen falta.</li>\n</ul>\n<p>Con la técnica de <b>valores límite</b> se prueba justo en los bordes de cada rango y justo fuera. Si se aceptan edades de 18 a 65, se prueban 17, 18, 65 y 66.</p>\n",
   "check": {
    "q": "Un campo acepta edades de 18 a 65. Con la técnica de valores límite, ¿qué valores pruebas?",
    "o": [
     "Solo 30",
     "17, 18, 65 y 66",
     "0 y 100",
     "18 y 65 solamente"
    ],
    "a": 1,
    "e": "Justo dentro y justo fuera de cada límite."
   }
  },
  {
   "h": "Pruebas unitarias con JUnit",
   "html": "\n<pre><code><span class=\"k\">class</span> CalculadoraTest {\n    Calculadora calc;\n\n    @BeforeEach <span class=\"k\">void</span> preparar() { calc = <span class=\"k\">new</span> Calculadora(); }\n\n    @Test <span class=\"k\">void</span> sumaDosPositivos() {\n        assertEquals(<span class=\"s\">5</span>, calc.sumar(<span class=\"s\">2</span>, <span class=\"s\">3</span>));\n    }\n\n    @Test <span class=\"k\">void</span> dividirEntreCeroLanzaExcepcion() {\n        assertThrows(ArithmeticException.<span class=\"k\">class</span>, () -&gt; calc.dividir(<span class=\"s\">5</span>, <span class=\"s\">0</span>));\n    }\n}</code></pre>\n<ul>\n<li>Aserciones: <code>assertEquals</code>, <code>assertTrue</code>, <code>assertNull</code>, <code>assertThrows</code>.</li>\n<li>Patrón <b>AAA</b>: Arrange (preparar), Act (ejecutar), Assert (comprobar).</li>\n<li>Cada prueba debe ser independiente de las demás.</li>\n<li>Herramientas como <b>JaCoCo</b> miden la cobertura.</li>\n</ul>"
  },
  {
   "h": "Niveles y tipos de prueba",
   "html": "\n<p>Las pruebas se hacen a distintos niveles, desde un método suelto hasta el sistema completo con el usuario delante.</p>\n<table>\n<tr><th>Nivel</th><th>Qué comprueba</th></tr>\n<tr><td>Unitarias</td><td>Cada método o clase por separado</td></tr>\n<tr><td>De integración</td><td>Que las partes funcionan juntas (la clase con la base de datos)</td></tr>\n<tr><td>De sistema</td><td>El programa completo, incluido rendimiento y seguridad</td></tr>\n<tr><td>De aceptación</td><td>Que hace lo que pidió el cliente</td></tr>\n<tr><td>De regresión</td><td>Que un cambio nuevo no ha roto lo que ya funcionaba</td></tr>\n</table>\n<div class=\"caso\"><b>Por qué automatizar</b>Las pruebas automáticas se ejecutan en segundos con cada cambio. Así, la regresión se detecta en el momento y no cuando el cliente la sufre.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué técnica de caja negra divide las entradas en grupos que se comportan igual?",
   "o": [
    "Valores límite",
    "Clases de equivalencia",
    "Cobertura",
    "Complejidad ciclomática"
   ],
   "a": 1,
   "e": "Se prueba un valor representativo de cada grupo."
  },
  {
   "q": "¿Qué mide la cobertura de código?",
   "o": [
    "La velocidad",
    "Qué parte del código ejecutan las pruebas",
    "El número de clases",
    "Los errores de sintaxis"
   ],
   "a": 1,
   "e": "Es una técnica de caja blanca."
  },
  {
   "q": "¿Qué anotación marca un método de prueba en JUnit?",
   "o": [
    "@Prueba",
    "@Test",
    "@Check",
    "@Run"
   ],
   "a": 1,
   "e": "@BeforeEach se ejecuta antes de cada prueba."
  },
  {
   "q": "¿Qué aserción comprueba que se lanza una excepción?",
   "o": [
    "assertEquals",
    "assertThrows",
    "assertTrue",
    "assertNull"
   ],
   "a": 1,
   "e": "Recibe el tipo de excepción y el código a ejecutar."
  },
  {
   "q": "¿Qué tipo de prueba comprueba que un cambio no rompió lo anterior?",
   "o": [
    "De aceptación",
    "De regresión",
    "Unitaria",
    "De carga"
   ],
   "a": 1,
   "e": "Por eso conviene tener pruebas automáticas."
  },
  {
   "q": "¿Qué significa el patrón AAA?",
   "o": [
    "Analizar, Arreglar, Aprobar",
    "Arrange, Act, Assert",
    "Alta, Alta, Alta",
    "Ninguno"
   ],
   "a": 1,
   "e": "Preparar, ejecutar y comprobar."
  }
 ]
});
