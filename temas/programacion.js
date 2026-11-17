TEMA("programacion", {
 "title": "Primeros pasos en programación",
 "mins": 16,
 "intro": "Qué es un programa, cómo se guardan los datos en variables y cómo se controla el flujo con condiciones y bucles. Los ejemplos están en Java, el lenguaje habitual en DAM y DAW.",
 "sections": [
  {
   "h": "Algoritmos y programas",
   "html": "\n      <p>Un <b>algoritmo</b> es una secuencia ordenada de pasos para resolver un problema. Una receta de cocina es un algoritmo. Un <b>programa</b> es ese algoritmo escrito en un lenguaje que el ordenador puede ejecutar.</p>\n      <p>Antes de programar, conviene pensar el algoritmo: ¿qué datos entran?, ¿qué tengo que hacer con ellos?, ¿qué resultado debe salir?</p>"
  },
  {
   "h": "Variables y tipos de datos",
   "html": "\n      <p>Una <b>variable</b> es un espacio con nombre donde se guarda un dato que puede cambiar. En Java hay que indicar su <b>tipo</b>:</p>\n      <table>\n        <tr><th>Tipo</th><th>Guarda</th><th>Ejemplo</th></tr>\n        <tr><td><code>int</code></td><td>Números enteros</td><td><code>int edad = 19;</code></td></tr>\n        <tr><td><code>double</code></td><td>Números con decimales</td><td><code>double nota = 7.5;</code></td></tr>\n        <tr><td><code>boolean</code></td><td>Verdadero o falso</td><td><code>boolean aprobado = true;</code></td></tr>\n        <tr><td><code>char</code></td><td>Un solo carácter</td><td><code>char letra = 'A';</code></td></tr>\n        <tr><td><code>String</code></td><td>Texto</td><td><code>String nombre = \"Laia\";</code></td></tr>\n      </table>\n      <p>Una <b>constante</b> es una variable cuyo valor no puede cambiar. En Java se declara con <code>final</code>: <code>final double IVA = 0.21;</code></p>"
  },
  {
   "h": "Operadores",
   "html": "\n      <ul>\n        <li><b>Aritméticos:</b> <code>+ - * /</code> y <code>%</code>, que da el <b>resto</b> de una división. <code>7 % 3</code> vale 1. Sirve, por ejemplo, para saber si un número es par: <code>n % 2 == 0</code>.</li>\n        <li><b>De comparación:</b> <code>==</code> (igual), <code>!=</code> (distinto), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> y <code>&gt;=</code>. Devuelven <code>true</code> o <code>false</code>.</li>\n        <li><b>Lógicos:</b> <code>&amp;&amp;</code> (Y: verdadero solo si ambas condiciones lo son), <code>||</code> (O: verdadero si al menos una lo es) y <code>!</code> (NO: invierte el valor).</li>\n      </ul>\n      <div class=\"note\"><b>Error típico</b>Con dos enteros, <code>7 / 2</code> da 3, no 3,5: la división entre <code>int</code> descarta los decimales. Para obtener 3,5 al menos uno de los dos debe ser <code>double</code>: <code>7.0 / 2</code>.</div>"
  },
  {
   "h": "Condicionales",
   "html": "\n      <p>Permiten ejecutar un código u otro según una condición:</p>\n<pre><code><span class=\"k\">double</span> nota = <span class=\"s\">6.2</span>;\n\n<span class=\"k\">if</span> (nota &gt;= <span class=\"s\">9</span>) {\n    System.out.println(<span class=\"s\">\"Sobresaliente\"</span>);\n} <span class=\"k\">else if</span> (nota &gt;= <span class=\"s\">5</span>) {\n    System.out.println(<span class=\"s\">\"Aprobado\"</span>);   <span class=\"c\">// se ejecuta esta</span>\n} <span class=\"k\">else</span> {\n    System.out.println(<span class=\"s\">\"Suspendido\"</span>);\n}</code></pre>\n      <p>Las condiciones se comprueban en orden y solo se ejecuta el primer bloque que se cumple.</p>"
  },
  {
   "h": "Bucles",
   "html": "\n      <p>Repiten un bloque de código. Usa <code>for</code> cuando sabes cuántas veces hay que repetir, y <code>while</code> cuando depende de una condición.</p>\n<pre><code><span class=\"c\">// Sumar los números del 1 al 10</span>\n<span class=\"k\">int</span> suma = <span class=\"s\">0</span>;\n<span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"s\">1</span>; i &lt;= <span class=\"s\">10</span>; i++) {\n    suma = suma + i;\n}\nSystem.out.println(suma);   <span class=\"c\">// 55</span></code></pre>\n      <p>El <code>for</code> tiene tres partes: <b>inicio</b> (<code>int i = 1</code>), <b>condición</b> para seguir (<code>i &lt;= 10</code>) e <b>incremento</b> tras cada vuelta (<code>i++</code>).</p>\n<pre><code><span class=\"c\">// Pedir contraseña hasta que sea correcta</span>\n<span class=\"k\">while</span> (!clave.equals(<span class=\"s\">\"1234\"</span>)) {\n    clave = teclado.nextLine();\n}</code></pre>\n      <div class=\"note\"><b>Bucle infinito</b>Si la condición de un <code>while</code> nunca llega a ser falsa, el programa no termina. Comprueba siempre que algo dentro del bucle cambia la condición.</div>"
  },
  {
   "h": "Compilado o interpretado",
   "html": "\n      <ul>\n        <li><b>Compilado:</b> un compilador traduce todo el código a lenguaje máquina antes de ejecutarlo (C, C++).</li>\n        <li><b>Interpretado:</b> un intérprete lee y ejecuta el código línea a línea (Python, JavaScript).</li>\n        <li><b>Java</b> usa un sistema mixto: se compila a <b>bytecode</b> (archivos <code>.class</code>) y la <b>máquina virtual de Java (JVM)</b> lo ejecuta. Por eso el mismo programa funciona en Windows, Linux o macOS.</li>\n      </ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuánto vale 7 % 3?",
   "o": [
    "2",
    "1",
    "2,33",
    "0"
   ],
   "a": 1,
   "e": "% devuelve el resto: 7 = 3 × 2 + 1."
  },
  {
   "q": "¿Qué tipo usarías para guardar si un alumno ha aprobado?",
   "o": [
    "int",
    "String",
    "boolean",
    "char"
   ],
   "a": 2,
   "e": "boolean guarda true o false, justo lo que necesitas."
  },
  {
   "q": "¿Qué muestra este código?",
   "code": "int x = 5;\nif (x > 3) System.out.println(\"A\");\nelse System.out.println(\"B\");",
   "o": [
    "A",
    "B",
    "AB",
    "Nada"
   ],
   "a": 0,
   "e": "5 > 3 es verdadero, así que se ejecuta el primer bloque."
  },
  {
   "q": "¿Cuándo es verdadera la expresión a && b?",
   "o": [
    "Si a es verdadera",
    "Si una de las dos es verdadera",
    "Solo si las dos son verdaderas",
    "Nunca"
   ],
   "a": 2,
   "e": "&& (Y) solo es verdadero si ambas condiciones lo son."
  },
  {
   "q": "¿Cuántas veces se repite este bucle?",
   "code": "for (int i = 0; i < 3; i++) { ... }",
   "o": [
    "2",
    "3",
    "4",
    "Infinitas"
   ],
   "a": 1,
   "e": "i toma los valores 0, 1 y 2; con 3 la condición i < 3 ya es falsa."
  },
  {
   "q": "¿Qué resultado da 7 / 2 si los dos son int?",
   "o": [
    "3,5",
    "3",
    "4",
    "Error"
   ],
   "a": 1,
   "e": "La división entre enteros descarta la parte decimal."
  },
  {
   "q": "¿En qué se compila un programa Java?",
   "o": [
    "Directamente en código máquina",
    "En bytecode que ejecuta la JVM",
    "En JavaScript",
    "No se compila"
   ],
   "a": 1,
   "e": "javac genera bytecode (.class), que ejecuta la máquina virtual de Java."
  },
  {
   "q": "Necesitas repetir algo hasta que el usuario escriba «salir». ¿Qué bucle es más adecuado?",
   "o": [
    "for",
    "while",
    "if",
    "switch"
   ],
   "a": 1,
   "e": "No sabes cuántas veces se repetirá: depende de una condición, así que es un while."
  }
 ]
});
