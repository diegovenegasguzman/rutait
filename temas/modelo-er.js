TEMA("modelo-er", {
title:"Diseño de bases de datos: modelo E-R y normalización", mins:17,
intro:"Cómo pasar de un problema real a unas tablas bien diseñadas: el modelo entidad-relación, su traducción a tablas y la normalización para evitar datos repetidos e incoherentes.",
sections:[
{h:"Las tres fases del diseño", html:`
<p>Una base de datos mal diseñada da problemas durante años. Por eso se diseña en tres fases:</p>
<div class="work">
<div class="stepn"><i>1</i><span><b>Conceptual:</b> qué información hay y cómo se relaciona, sin pensar todavía en tablas. Se hace con el <b>modelo entidad-relación (E-R)</b>.</span></div>
<div class="stepn"><i>2</i><span><b>Lógica:</b> se traduce el E-R a tablas, claves primarias y claves foráneas (modelo relacional).</span></div>
<div class="stepn"><i>3</i><span><b>Física:</b> se crean las tablas en un SGBD concreto con SQL, eligiendo tipos de datos e índices.</span></div>
</div>`},
{h:"El modelo entidad-relación", html:`
<ul>
<li><b>Entidad:</b> algo de lo que queremos guardar información. Se dibuja como un <b>rectángulo</b>: ALUMNO, CURSO, PROFESOR.</li>
<li><b>Atributo:</b> una característica de la entidad (<b>óvalo</b>): nombre, email. El atributo que identifica cada elemento es el <b>identificador</b> o clave, y se subraya.</li>
<li><b>Relación:</b> cómo se conectan las entidades (<b>rombo</b>): un ALUMNO <i>se matricula en</i> un CURSO.</li>
<li><b>Cardinalidad:</b> cuántos elementos de cada lado participan: <b>1:1</b>, <b>1:N</b> o <b>N:M</b>.</li>
</ul>
<p><b>Ejemplo de una academia:</b> un profesor imparte muchos cursos, pero cada curso lo imparte un solo profesor (1:N). Un alumno se matricula en muchos cursos y un curso tiene muchos alumnos (N:M). La relación N:M puede tener sus propios atributos, como la <b>fecha de matrícula</b> o la <b>nota</b>, que no son ni del alumno ni del curso, sino de la matrícula.</p>
<p>Una <b>entidad débil</b> no puede existir sin otra: las LÍNEAS de una FACTURA no tienen sentido si se borra la factura.</p>`,
check:{q:"Un empleado trabaja en un solo departamento y un departamento tiene muchos empleados. ¿Qué cardinalidad tiene la relación?", o:["1:1","1:N","N:M","N:1:M"], a:1, e:"Un departamento tiene N empleados y cada empleado pertenece a 1 departamento."}},
{h:"Del E-R a tablas", html:`
<table>
<tr><th>En el E-R</th><th>En tablas</th></tr>
<tr><td>Entidad</td><td>Una tabla, con su identificador como clave primaria</td></tr>
<tr><td>Relación 1:N</td><td>La clave primaria del lado «1» pasa como <b>clave foránea</b> a la tabla del lado «N»</td></tr>
<tr><td>Relación N:M</td><td>Una <b>tabla nueva</b> con las claves de las dos entidades (y los atributos de la relación)</td></tr>
<tr><td>Relación 1:1</td><td>La clave de una tabla pasa como foránea a la otra, normalmente a la que es opcional</td></tr>
</table>
<p>La academia quedaría así:</p>
<pre><code>PROFESOR  (<u>id_profesor</u>, nombre, email)
CURSO     (<u>id_curso</u>, titulo, horas, id_profesor → PROFESOR)
ALUMNO    (<u>id_alumno</u>, nombre, email)
MATRICULA (<u>id_alumno</u> → ALUMNO, <u>id_curso</u> → CURSO, fecha, nota)</code></pre>`,
check:{q:"¿Dónde pones la clave foránea en una relación 1:N entre CLIENTE (1) y PEDIDO (N)?", o:["En CLIENTE","En PEDIDO","En una tabla nueva","En las dos"], a:1, e:"Cada pedido guarda el id del cliente que lo hizo. Al revés no se puede: un cliente tendría muchos pedidos en un solo campo."}},
{h:"Normalización", html:`
<p>Imagina esta tabla:</p>
<table>
<tr><th>id_pedido</th><th>cliente</th><th>tel_cliente</th><th>productos</th></tr>
<tr><td>1</td><td>Ana</td><td>600111222</td><td>Ratón, Teclado</td></tr>
<tr><td>2</td><td>Ana</td><td>600111222</td><td>Monitor</td></tr>
</table>
<p>Tiene problemas, llamados <b>anomalías</b>: si Ana cambia de teléfono hay que cambiarlo en todas sus filas (y si se olvida una, hay datos contradictorios); no se puede guardar un cliente que aún no ha comprado; y «Ratón, Teclado» no se puede buscar ni contar bien. La <b>normalización</b> lo arregla por pasos:</p>
<table>
<tr><th>Forma normal</th><th>Regla</th><th>En el ejemplo</th></tr>
<tr><td>1FN</td><td>Cada celda tiene un solo valor (atributos <b>atómicos</b>) y no hay grupos repetidos</td><td>Los productos pasan a una tabla LINEA_PEDIDO, una fila por producto</td></tr>
<tr><td>2FN</td><td>1FN y cada atributo depende de <b>toda</b> la clave primaria, no solo de una parte (importa cuando la clave es compuesta)</td><td>En LINEA_PEDIDO(id_pedido, id_producto, cantidad, precio_producto), el precio depende solo del producto: va a PRODUCTO</td></tr>
<tr><td>3FN</td><td>2FN y ningún atributo depende de otro que no sea clave (sin <b>dependencias transitivas</b>)</td><td>tel_cliente depende del cliente, no del pedido: va a la tabla CLIENTE</td></tr>
</table>
<div class="note exam"><b>Para recordarlo</b>Cada atributo debe depender de «la clave (1FN), de toda la clave (2FN) y de nada más que la clave (3FN)».</div>`}
],
quiz:[
{q:"¿Cómo se representa una entidad en un diagrama E-R?", o:["Con un rombo","Con un rectángulo","Con un óvalo","Con una flecha"], a:1, e:"Rectángulo para entidades, óvalo para atributos y rombo para relaciones."},
{q:"¿Qué cardinalidad tiene «un alumno cursa muchas asignaturas y una asignatura tiene muchos alumnos»?", o:["1:1","1:N","N:M","0:1"], a:2, e:"Muchos a muchos."},
{q:"¿Cómo se traduce a tablas una relación N:M?", o:["Con una FK en cualquiera de las dos","Con una tabla intermedia con las dos claves","Juntando las dos entidades","No se puede"], a:1, e:"La tabla intermedia puede llevar además los atributos propios de la relación."},
{q:"¿Qué es una entidad débil?", o:["Una con pocos atributos","Una que no puede existir sin otra entidad","Una sin relaciones","Una tabla vacía"], a:1, e:"Ejemplo clásico: las líneas de una factura."},
{q:"Una celda contiene «Ratón, Teclado». ¿Qué forma normal se incumple?", o:["1FN","2FN","3FN","Ninguna"], a:0, e:"La 1FN exige valores atómicos: un solo valor por celda."},
{q:"¿Qué exige la 2FN además de la 1FN?", o:["Que no haya claves foráneas","Que cada atributo dependa de toda la clave primaria","Que no haya tablas intermedias","Que haya índices"], a:1, e:"Solo afecta a tablas con clave compuesta."},
{q:"El teléfono del cliente está en la tabla de pedidos. ¿Qué forma normal se incumple?", o:["1FN","2FN","3FN","Ninguna"], a:2, e:"Es una dependencia transitiva: pedido → cliente → teléfono."},
{q:"¿En qué fase del diseño se escriben las sentencias CREATE TABLE?", o:["Conceptual","Lógica","Física","Ninguna"], a:2, e:"El diseño físico se implementa en un SGBD concreto."}
]});
