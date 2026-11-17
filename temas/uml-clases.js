TEMA("uml-clases", {
title:"Diagramas de clases UML", mins:13,
intro:"Cómo representar la estructura de un programa con un diagrama de clases: clases, atributos, métodos, visibilidad y los distintos tipos de relación entre clases.",
sections:[
{h:"Representar una clase", html:`
<p>Una clase se dibuja como una caja con tres partes: nombre, atributos y métodos.</p>
<pre><code>┌──────────────────────────┐
│ Cuenta                   │
├──────────────────────────┤
│ - titular : String       │
│ - saldo : double         │
├──────────────────────────┤
│ + ingresar(c : double)   │
│ + retirar(c : double) : boolean │
│ + getSaldo() : double    │
└──────────────────────────┘</code></pre>
<table>
<tr><th>Símbolo</th><th>Visibilidad</th></tr>
<tr><td><code>+</code></td><td>public</td></tr>
<tr><td><code>-</code></td><td>private</td></tr>
<tr><td><code>#</code></td><td>protected</td></tr>
<tr><td><code>~</code></td><td>de paquete</td></tr>
</table>
<p>Lo estático se subraya y lo abstracto se escribe en cursiva.</p>`,
check:{q:"¿Qué símbolo indica un atributo privado en UML?", o:["+","-","#","~"], a:1, e:"+ público, - privado, # protegido, ~ paquete."}},
{h:"Relaciones", html:`
<table>
<tr><th>Relación</th><th>Dibujo</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>Herencia (generalización)</td><td>Línea con triángulo hueco hacia el padre</td><td>«Es un»</td><td>Perro es un Animal</td></tr>
<tr><td>Realización</td><td>Línea discontinua con triángulo hueco</td><td>Implementa una interfaz</td><td>Alumno implementa Comparable</td></tr>
<tr><td>Asociación</td><td>Línea continua</td><td>Se conocen</td><td>Profesor imparte Curso</td></tr>
<tr><td>Agregación</td><td>Rombo hueco en el «todo»</td><td>Tiene, pero las partes pueden existir solas</td><td>Equipo tiene Jugadores</td></tr>
<tr><td>Composición</td><td>Rombo relleno en el «todo»</td><td>Las partes no existen sin el todo</td><td>Factura tiene Líneas</td></tr>
<tr><td>Dependencia</td><td>Flecha discontinua</td><td>Usa temporalmente</td><td>Un método recibe un objeto como parámetro</td></tr>
</table>
<p>En los extremos de las asociaciones se indica la <b>multiplicidad</b>: <code>1</code>, <code>0..1</code>, <code>*</code> (muchos), <code>1..*</code> (uno o más).</p>`,
check:{q:"Si se borra una factura, se borran sus líneas. ¿Qué relación es?", o:["Agregación","Composición","Herencia","Dependencia"], a:1, e:"En la composición, las partes no existen sin el todo (rombo relleno)."}},
{h:"Del diagrama al código", html:`
<p>Una asociación «Profesor 1 — * Curso» se traduce en atributos:</p>
<pre><code><span class="k">class</span> Profesor { <span class="k">private</span> List&lt;Curso&gt; cursos; }
<span class="k">class</span> Curso    { <span class="k">private</span> Profesor profesor; }</code></pre>
<p>Herramientas para dibujar UML: <b>draw.io</b> (diagrams.net), <b>PlantUML</b> (diagramas escritos como texto), StarUML, Visual Paradigm; y plugins de los IDE que generan el diagrama desde el código.</p>`}
],
quiz:[
{q:"¿Cuántas secciones tiene una clase en UML?", o:["Una","Tres: nombre, atributos y métodos","Cinco","Depende"], a:1, e:"Las secciones de atributos o métodos pueden omitirse si no interesan."},
{q:"¿Cómo se representa la herencia?", o:["Rombo relleno","Línea con triángulo hueco apuntando al padre","Flecha discontinua","Línea simple"], a:1, e:"Se lee «es un»."},
{q:"¿Qué diferencia hay entre agregación y composición?", o:["Ninguna","En la composición las partes no existen sin el todo","La agregación es herencia","La composición es una interfaz"], a:1, e:"Rombo hueco frente a rombo relleno."},
{q:"¿Qué multiplicidad indica «uno o más»?", o:["0..1","1","1..*","*"], a:2, e:"* significa cero o más."},
{q:"¿Cómo se representa que una clase implementa una interfaz?", o:["Línea continua","Línea discontinua con triángulo hueco","Rombo","No se representa"], a:1, e:"Es la relación de realización."},
{q:"¿Qué herramienta crea diagramas UML a partir de texto?", o:["PlantUML","Excel","GIMP","Wireshark"], a:0, e:"Ideal para guardar los diagramas con el código en Git."}
]});
