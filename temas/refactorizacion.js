TEMA("refactorizacion", {
title:"Optimización, refactorización y documentación", mins:11,
intro:"Cómo mantener el código limpio y comprensible: detectar malos olores, refactorizar con seguridad, seguir convenciones y documentar con Javadoc.",
sections:[
{h:"Malos olores del código", html:`
<table>
<tr><th>Mal olor</th><th>Señal</th></tr>
<tr><td>Código duplicado</td><td>El mismo bloque copiado en varios sitios</td></tr>
<tr><td>Método largo</td><td>Un método que hace demasiadas cosas</td></tr>
<tr><td>Clase grande</td><td>Una clase con demasiadas responsabilidades</td></tr>
<tr><td>Lista de parámetros larga</td><td>Métodos con 6 u 8 parámetros</td></tr>
<tr><td>Nombres poco claros</td><td><code>x</code>, <code>aux2</code>, <code>datos</code></td></tr>
<tr><td>Números mágicos</td><td>Un <code>0.21</code> suelto en vez de la constante <code>IVA</code></td></tr>
</table>`},
{h:"Refactorizar", html:`
<p><b>Refactorizar</b> es mejorar la estructura sin cambiar lo que hace el programa. Los IDE lo automatizan:</p>
<ul>
<li><b>Renombrar</b> una variable, método o clase en todo el proyecto.</li>
<li><b>Extraer método:</b> convertir un bloque en un método con nombre descriptivo.</li>
<li><b>Extraer constante</b> o <b>variable</b>.</li>
<li><b>Mover</b> un método a la clase donde tiene más sentido.</li>
</ul>
<p>Regla de oro: <b>refactoriza con pruebas</b>. Si las pruebas siguen pasando después del cambio, no has roto nada.</p>
<p>Herramientas de análisis estático como <b>SonarQube</b> o los avisos del IDE detectan problemas automáticamente.</p>`,
check:{q:"¿Qué es refactorizar?", o:["Añadir funciones","Mejorar la estructura del código sin cambiar su comportamiento","Borrar el código","Compilar"], a:1, e:"Las pruebas automáticas garantizan que el comportamiento no cambia."}},
{h:"Convenciones y documentación", html:`
<ul>
<li>Convenciones de Java: clases en <code>PascalCase</code>, métodos y variables en <code>camelCase</code>, constantes en <code>MAYUSCULAS_CON_GUIONES</code>.</li>
<li>Comentarios que expliquen el <b>porqué</b>, no el qué (el qué ya lo dice el código).</li>
</ul>
<pre><code><span class="c">/**
 * Calcula el precio final aplicando el IVA.
 * @param base precio sin impuestos, mayor o igual que 0
 * @return precio con IVA
 * @throws IllegalArgumentException si base es negativa
 */</span>
<span class="k">public double</span> precioFinal(<span class="k">double</span> base) { ... }</code></pre>
<p><b>Javadoc</b> genera documentación HTML a partir de estos comentarios. Además, todo proyecto debería tener un <b>README</b> con qué es, cómo se instala y cómo se usa.</p>`}
],
quiz:[
{q:"¿Qué es un número mágico?", o:["Un número aleatorio","Un valor literal sin explicación en el código","Una constante","Un número primo"], a:1, e:"Mejor usar una constante con nombre."},
{q:"¿Qué refactorización convierte un bloque en un método con nombre?", o:["Renombrar","Extraer método","Mover clase","Inline"], a:1, e:"Hace el código más legible y reutilizable."},
{q:"¿Qué garantiza que una refactorización no rompe nada?", o:["Compilar","Tener pruebas automáticas que siguen pasando","Comentarlo","Hacerlo de noche"], a:1, e:"Por eso se refactoriza con pruebas."},
{q:"¿Cómo se nombran los métodos en Java?", o:["PascalCase","camelCase","MAYUSCULAS","snake_case"], a:1, e:"Por ejemplo, calcularTotal()."},
{q:"¿Qué deberían explicar los comentarios?", o:["Qué hace cada línea","El porqué de las decisiones","Nada","El nombre del autor"], a:1, e:"El código bien escrito ya dice qué hace."},
{q:"¿Qué etiqueta Javadoc describe el valor devuelto?", o:["@param","@return","@throws","@see"], a:1, e:"@param describe parámetros."}
]});
