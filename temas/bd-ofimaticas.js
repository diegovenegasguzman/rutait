TEMA("bd-ofimaticas", {
title:"Bases de datos ofimáticas", mins:12,
intro:"Cómo crear y usar una base de datos con Access o LibreOffice Base: tablas, relaciones, consultas, formularios e informes, sin programar.",
sections:[
{h:"Tablas y relaciones", html:`
<p>Una base de datos ofimática guarda la información en <b>tablas</b>. Cada columna es un <b>campo</b> con su tipo (texto, número, fecha, sí/no) y cada fila, un <b>registro</b>.</p>
<ul>
<li>Cada tabla necesita una <b>clave principal</b>: un campo que identifique cada registro sin repetirse (por ejemplo, un autonumérico).</li>
<li>Las tablas se <b>relacionan</b> por campos comunes. En una biblioteca: LIBROS, SOCIOS y PRESTAMOS (con el id del libro y el del socio).</li>
<li>Activar la <b>integridad referencial</b> impide prestar un libro que no existe.</li>
</ul>
<p>¿Por qué no hacerlo todo en una hoja de cálculo? Porque con muchos datos relacionados aparecen repeticiones y errores; la base de datos los evita.</p>`},
{h:"Consultas", html:`
<p>Una <b>consulta</b> muestra los datos que cumplen unas condiciones, combinando tablas si hace falta. Se crea con la <b>vista diseño</b> (arrastrando campos y escribiendo criterios) y por debajo genera SQL.</p>
<ul>
<li><b>De selección:</b> «préstamos sin devolver de más de 15 días».</li>
<li><b>Con parámetros:</b> preguntan un dato al ejecutarse («¿Qué socio?»).</li>
<li><b>De totales:</b> «número de préstamos por mes».</li>
<li><b>De acción:</b> actualizan o borran registros de golpe. Haz copia antes de usarlas.</li>
</ul>`,
check:{q:"¿Qué tipo de consulta pide un dato al usuario cada vez que se ejecuta?", o:["De totales","De parámetros","De acción","De eliminación"], a:1, e:"Por ejemplo, pide el nombre del socio para mostrar sus préstamos."}},
{h:"Formularios e informes", html:`
<ul>
<li><b>Formularios:</b> pantallas para introducir y consultar datos cómodamente, sin ver la tabla. Pueden incluir listas desplegables y subformularios (los préstamos de un socio dentro de su ficha).</li>
<li><b>Informes:</b> presentación de los datos para imprimir o exportar a PDF, con agrupaciones y totales (listado de préstamos agrupado por mes).</li>
</ul>
<div class="caso"><b>Cuándo se quedan cortas</b>Access y Base sirven para departamentos pequeños. Si muchos usuarios trabajan a la vez o hay muchos datos, se pasa a un SGBD de servidor (MySQL, SQL Server). Es justo lo que verás en los módulos de bases de datos.</div>`}
],
quiz:[
{q:"¿Cómo se llama cada columna de una tabla?", o:["Registro","Campo","Informe","Formulario"], a:1, e:"Cada fila es un registro."},
{q:"¿Para qué sirve la clave principal?", o:["Para ordenar","Para identificar cada registro sin repetirse","Para imprimir","Para dar color"], a:1, e:"Suele ser un campo autonumérico."},
{q:"¿Qué impide la integridad referencial?", o:["Imprimir","Que haya registros que apunten a otros que no existen","Crear tablas","Usar fechas"], a:1, e:"No puedes registrar un préstamo de un libro inexistente."},
{q:"¿Qué objeto se usa para introducir datos cómodamente?", o:["Informe","Formulario","Consulta","Macro"], a:1, e:"Los informes son para presentar e imprimir."},
{q:"¿Qué tipo de consulta modifica o borra registros?", o:["De selección","De acción","De parámetros","De totales"], a:1, e:"Conviene hacer copia antes de ejecutarla."},
{q:"¿Qué genera por debajo la vista diseño de una consulta?", o:["HTML","SQL","Java","XML"], a:1, e:"Se puede ver y editar en la vista SQL."}
]});
