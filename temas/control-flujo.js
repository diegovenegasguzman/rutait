TEMA("control-flujo", {
 "title": "Estructuras de control y excepciones",
 "mins": 14,
 "intro": "Todas las formas de controlar qué se ejecuta y cuántas veces: if, switch, los tres bucles, break y continue, y cómo gestionar los errores con excepciones.",
 "sections": [
  {
   "h": "Selección: if y switch",
   "html": "\n<pre><code><span class=\"c\">// switch moderno (Java 14+)</span>\nString tipo = <span class=\"k\">switch</span> (dia) {\n    <span class=\"k\">case</span> <span class=\"s\">\"sábado\"</span>, <span class=\"s\">\"domingo\"</span> -&gt; <span class=\"s\">\"fin de semana\"</span>;\n    <span class=\"k\">default</span> -&gt; <span class=\"s\">\"laborable\"</span>;\n};\n\n<span class=\"c\">// Operador ternario: condición ? valor_si : valor_no</span>\nString estado = nota &gt;= <span class=\"s\">5</span> ? <span class=\"s\">\"Aprobado\"</span> : <span class=\"s\">\"Suspendido\"</span>;</code></pre>\n<p>En el <code>switch</code> clásico (con <code>case X:</code>), si olvidas el <code>break</code>, la ejecución «cae» al siguiente caso. Con la flecha <code>-&gt;</code> no pasa.</p>"
  },
  {
   "h": "Bucles, break y continue",
   "html": "\n<p>Un bucle repite un bloque de código. Java tiene tres, y elegir bien cuál usar hace el código más claro.</p>\n<table>\n<tr><th>Bucle</th><th>Cuándo usarlo</th></tr>\n<tr><td><code>for</code></td><td>Sabes cuántas veces repetir</td></tr>\n<tr><td><code>while</code></td><td>Repetir mientras se cumpla algo; puede no ejecutarse nunca</td></tr>\n<tr><td><code>do … while</code></td><td>Se ejecuta <b>al menos una vez</b> (menús, pedir datos hasta que sean válidos)</td></tr>\n<tr><td><code>for-each</code></td><td>Recorrer todos los elementos de un array o colección</td></tr>\n</table>\n<pre><code><span class=\"k\">int</span> n;\n<span class=\"k\">do</span> {\n    System.out.print(<span class=\"s\">\"Nota (0-10): \"</span>);\n    n = teclado.nextInt();\n} <span class=\"k\">while</span> (n &lt; <span class=\"s\">0</span> || n &gt; <span class=\"s\">10</span>);</code></pre>\n<p><code>break</code> sale del bucle; <code>continue</code> salta a la siguiente vuelta.</p>",
   "check": {
    "q": "¿Qué bucle garantiza que su cuerpo se ejecuta al menos una vez?",
    "o": [
     "for",
     "while",
     "do … while",
     "for-each"
    ],
    "a": 2,
    "e": "La condición se comprueba al final de cada vuelta."
   }
  },
  {
   "h": "Excepciones",
   "html": "\n<p>Una <b>excepción</b> es un error durante la ejecución. Si no se captura, el programa termina.</p>\n<pre><code><span class=\"k\">try</span> {\n    <span class=\"k\">int</span> edad = Integer.parseInt(texto);\n    System.out.println(<span class=\"s\">100</span> / edad);\n} <span class=\"k\">catch</span> (NumberFormatException e) {\n    System.out.println(<span class=\"s\">\"Eso no es un número\"</span>);\n} <span class=\"k\">catch</span> (ArithmeticException e) {\n    System.out.println(<span class=\"s\">\"No se puede dividir entre cero\"</span>);\n} <span class=\"k\">finally</span> {\n    System.out.println(<span class=\"s\">\"Esto se ejecuta siempre\"</span>);\n}</code></pre>\n<ul>\n<li><b>Comprobadas</b> (checked, como <code>IOException</code>): el compilador obliga a capturarlas o declararlas con <code>throws</code>.</li>\n<li><b>No comprobadas</b> (unchecked, como <code>NullPointerException</code>): suelen ser errores de programación.</li>\n<li>Puedes lanzar las tuyas: <code>throw new IllegalArgumentException(\"La edad no puede ser negativa\");</code></li>\n</ul>\n<p>El bloque <code>finally</code> se ejecuta <b>siempre</b>, haya excepción o no. Por eso se usa para liberar recursos, como cerrar un archivo o una conexión.</p>\n"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué pasa en un switch clásico si olvidas el break?",
   "o": [
    "Da error",
    "La ejecución continúa en el siguiente case",
    "Sale del programa",
    "Nada"
   ],
   "a": 1,
   "e": "Por eso el switch con flecha es más seguro."
  },
  {
   "q": "¿Qué devuelve nota >= 5 ? \"Aprobado\" : \"Suspendido\" si nota vale 4?",
   "o": [
    "Aprobado",
    "Suspendido",
    "4",
    "Error"
   ],
   "a": 1,
   "e": "La condición es falsa, así que devuelve el segundo valor."
  },
  {
   "q": "¿Qué hace continue dentro de un bucle?",
   "o": [
    "Sale del bucle",
    "Salta a la siguiente iteración",
    "Repite la actual",
    "Termina el programa"
   ],
   "a": 1,
   "e": "break, en cambio, sale del bucle."
  },
  {
   "q": "¿Cuándo se ejecuta el bloque finally?",
   "o": [
    "Solo si hay error",
    "Solo si no hay error",
    "Siempre",
    "Nunca"
   ],
   "a": 2,
   "e": "Se usa para liberar recursos."
  },
  {
   "q": "¿Qué tipo de excepción obliga el compilador a capturar o declarar?",
   "o": [
    "Unchecked",
    "Checked (comprobada)",
    "Todas",
    "Ninguna"
   ],
   "a": 1,
   "e": "Por ejemplo, IOException."
  },
  {
   "q": "¿Qué excepción lanza Integer.parseInt(\"hola\")?",
   "o": [
    "NullPointerException",
    "NumberFormatException",
    "IOException",
    "ArithmeticException"
   ],
   "a": 1,
   "e": "El texto no tiene formato numérico."
  }
 ]
});
