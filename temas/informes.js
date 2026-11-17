TEMA("informes", {
title:"Confección de informes", mins:10,
intro:"Cómo generar desde una aplicación informes profesionales para imprimir o exportar a PDF: estructura de un informe, herramientas como JasperReports y buenas prácticas.",
sections:[
{h:"Estructura de un informe", html:`
<p>Un informe presenta datos de forma organizada. Sus secciones típicas (bandas):</p>
<table>
<tr><th>Sección</th><th>Contenido</th></tr>
<tr><td>Título</td><td>Una vez, al principio: nombre del informe, logotipo, fecha</td></tr>
<tr><td>Cabecera de página</td><td>Se repite en cada página</td></tr>
<tr><td>Cabecera de grupo</td><td>Al empezar cada grupo (por ejemplo, cada curso)</td></tr>
<tr><td>Detalle</td><td>Una vez por cada registro</td></tr>
<tr><td>Pie de grupo</td><td>Subtotales del grupo</td></tr>
<tr><td>Pie de página</td><td>Número de página («Página 2 de 5»)</td></tr>
<tr><td>Resumen</td><td>Totales generales y gráficos</td></tr>
</table>
<p>Elementos: campos de datos, <b>variables</b> calculadas (sumas, medias, contadores), <b>parámetros</b> que se pasan al generarlo (fechas, filtro), subinformes y gráficos.</p>`},
{h:"JasperReports", html:`
<ul>
<li>El diseño se hace con <b>Jaspersoft Studio</b> y se guarda en un archivo <code>.jrxml</code> (XML), que se compila a <code>.jasper</code>.</li>
<li>Desde Java se rellena con datos (una conexión JDBC o una colección de objetos) y se exporta a PDF, Excel, HTML…</li>
</ul>
<pre><code>JasperReport r = JasperCompileManager.compileReport(<span class="s">"notas.jrxml"</span>);
Map&lt;String, Object&gt; params = Map.of(<span class="s">"CURSO"</span>, <span class="s">"2º DAM"</span>);
JasperPrint p = JasperFillManager.fillReport(r, params, conexion);
JasperExportManager.exportReportToPdfFile(p, <span class="s">"notas.pdf"</span>);</code></pre>`,
check:{q:"¿En qué sección de un informe se calculan los subtotales de cada grupo?", o:["Título","Detalle","Pie de grupo","Cabecera de página"], a:2, e:"Se muestran al terminar los registros de cada grupo."}},
{h:"Buenas prácticas", html:`
<ul>
<li>Pensar en quién lo lee: un directivo quiere totales y gráficos; un administrativo, el detalle.</li>
<li>Indicar siempre los <b>filtros</b> aplicados y la fecha de generación.</li>
<li>Paginación correcta: que un grupo no quede cortado sin cabecera.</li>
<li>Formatos de número y fecha según el idioma (1.234,56 € en España).</li>
<li>Para informes en la web se pueden generar en HTML o usar herramientas de inteligencia de negocio (Power BI, Metabase).</li>
</ul>
<div class="caso"><b>Lo verás en el trabajo</b>Casi toda aplicación de gestión necesita informes: facturas, albaranes, listados de stock, certificados. Es de las primeras cosas que te piden en una empresa.</div>`}
],
quiz:[
{q:"¿Qué sección de un informe se repite una vez por cada registro?", o:["Título","Detalle","Resumen","Pie de página"], a:1, e:"Es el cuerpo del informe."},
{q:"¿Dónde va el número de página?", o:["En el detalle","En el pie de página","En el título","En el resumen"], a:1, e:"Se repite en cada página."},
{q:"¿Qué herramienta se usa para diseñar informes de JasperReports?", o:["Jaspersoft Studio","Scene Builder","Excel","Paint"], a:0, e:"Genera archivos .jrxml."},
{q:"¿Qué formato tiene el diseño de un informe Jasper?", o:["JSON","XML (.jrxml)","CSV","Texto plano"], a:1, e:"Se compila a .jasper."},
{q:"¿Para qué sirven los parámetros de un informe?", o:["Para el color","Para pasar valores al generarlo, como un filtro de fechas","Para la impresora","Para la contraseña"], a:1, e:"Así el mismo informe sirve para distintos casos."},
{q:"¿Qué debe indicar siempre un informe para evitar malentendidos?", o:["El autor del programa","Los filtros aplicados y la fecha de generación","El color corporativo","El tamaño del archivo"], a:1, e:"Así se sabe exactamente qué datos muestra."}
]});
