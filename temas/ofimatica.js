TEMA("ofimatica", {
title:"Procesador de textos y hoja de cálculo", mins:15,
intro:"Las funciones de ofimática que más se usan en el trabajo y que más caen en el módulo: estilos e índices, combinar correspondencia, fórmulas, referencias y funciones de hoja de cálculo.",
sections:[
{h:"Procesador de textos: estilos e índices", html:`
<p>La diferencia entre un documento hecho deprisa y uno profesional está en los <b>estilos</b>. En lugar de poner el texto en negrita y más grande a mano, aplica el estilo <b>Título 1</b>, <b>Título 2</b>, etc.</p>
<ul>
<li>Si cambias el estilo, cambian todos los títulos del documento a la vez.</li>
<li>Con los estilos de título puedes generar un <b>índice automático</b> que se actualiza con un clic.</li>
<li>El <b>panel de navegación</b> muestra la estructura del documento para moverte rápido.</li>
</ul>
<p>Otras herramientas clave: <b>saltos de página</b> (en lugar de pulsar Intro muchas veces), <b>saltos de sección</b> (para tener partes con distinta orientación o numeración) y <b>encabezados y pies de página</b>.</p>
<p>Formatos: <code>.docx</code> (Microsoft Word), <code>.odt</code> (formato abierto de LibreOffice Writer) y <b>PDF</b> para enviar documentos que no deben modificarse.</p>`},
{h:"Combinar correspondencia", html:`
<p>Sirve para crear muchos documentos personalizados a partir de una plantilla y una lista de datos. Por ejemplo, 200 cartas con el nombre y la dirección de cada cliente.</p>
<div class="work">
<div class="stepn"><i>1</i><span>Prepara la lista de datos (una hoja de cálculo con columnas Nombre, Dirección, etc.).</span></div>
<div class="stepn"><i>2</i><span>Escribe la carta e inserta los <b>campos combinados</b> donde irá cada dato: «Estimado/a «Nombre»».</span></div>
<div class="stepn"><i>3</i><span>Combina: el programa genera un documento por cada fila, o los envía por correo.</span></div>
</div>
<p>Se usa también para etiquetas, sobres y diplomas.</p>`},
{h:"Hoja de cálculo: fórmulas y referencias", html:`
<p>Una hoja está formada por <b>celdas</b> que se identifican por columna y fila: <code>B3</code>. Toda fórmula empieza por <code>=</code>: <code>=B3*C3</code>.</p>
<p>Al copiar una fórmula a otras celdas, las referencias cambian según su tipo:</p>
<table>
<tr><th>Tipo</th><th>Ejemplo</th><th>Al copiar…</th></tr>
<tr><td>Relativa</td><td><code>A1</code></td><td>Cambian fila y columna</td></tr>
<tr><td>Absoluta</td><td><code>$A$1</code></td><td>No cambia nada</td></tr>
<tr><td>Mixta</td><td><code>$A1</code> o <code>A$1</code></td><td>Se fija solo la parte con <code>$</code></td></tr>
</table>
<p><b>Ejemplo:</b> tienes precios en B2:B20 y el IVA (21 %) en la celda E1. En C2 escribes <code>=B2*$E$1</code> y la copias hacia abajo. B2 pasa a B3, B4…, pero <code>$E$1</code> sigue apuntando al IVA.</p>
<div class="note"><b>Atajo</b>Pulsa F4 mientras editas una referencia para alternar entre relativa, absoluta y mixta.</div>`},
{h:"Funciones imprescindibles", html:`
<p>En la versión en español de Excel y LibreOffice, los argumentos se separan con <code>;</code>.</p>
<table>
<tr><th>Función</th><th>Qué hace</th><th>Ejemplo</th></tr>
<tr><td>SUMA, PROMEDIO</td><td>Suma o media de un rango</td><td><code>=PROMEDIO(B2:B30)</code></td></tr>
<tr><td>MAX, MIN</td><td>Valor máximo o mínimo</td><td><code>=MAX(B2:B30)</code></td></tr>
<tr><td>CONTAR / CONTARA</td><td>Cuenta celdas con números / no vacías</td><td><code>=CONTARA(A2:A30)</code></td></tr>
<tr><td>SI</td><td>Devuelve un valor u otro según una condición</td><td><code>=SI(B2>=5;"Apto";"No apto")</code></td></tr>
<tr><td>CONTAR.SI</td><td>Cuenta las celdas que cumplen una condición</td><td><code>=CONTAR.SI(B2:B30;">=5")</code></td></tr>
<tr><td>SUMAR.SI</td><td>Suma las que cumplen una condición</td><td><code>=SUMAR.SI(A2:A30;"Madrid";C2:C30)</code></td></tr>
<tr><td>BUSCARV</td><td>Busca un valor en la primera columna de una tabla y devuelve el de otra columna</td><td><code>=BUSCARV(E2;A2:C50;3;FALSO)</code></td></tr>
</table>
<p>En <code>BUSCARV</code>, el último argumento <code>FALSO</code> pide una coincidencia exacta; es lo que querrás casi siempre. Las versiones modernas de Excel tienen <b>BUSCARX</b>, más flexible.</p>`},
{h:"Presentaciones y bases de datos ofimáticas", html:`
<ul>
<li><b>Presentaciones:</b> usa el <b>patrón de diapositivas</b> para que todas tengan el mismo diseño. Pon poco texto por diapositiva, con letra grande, y deja que tú expliques el resto.</li>
<li><b>Bases de datos ofimáticas</b> (Access, LibreOffice Base): guardan la información en <b>tablas</b>, se consultan con <b>consultas</b>, se rellenan con <b>formularios</b> y se imprimen con <b>informes</b>. Son el paso previo a las bases de datos que verás en otros módulos.</li>
</ul>`}
],
quiz:[
{q:"¿Qué referencia no cambia al copiar la fórmula a otra celda?", o:["A1","$A1","A$1","$A$1"], a:3, e:"Con $ delante de la columna y de la fila, la referencia queda fija."},
{q:"¿Con qué carácter empieza toda fórmula?", o:["#","=","+","@"], a:1, e:"El signo igual indica a la hoja que lo que sigue es una fórmula."},
{q:"B2 contiene 4,5. ¿Qué devuelve =SI(B2>=5;\"Apto\";\"No apto\")?", o:["Apto","No apto","4,5","Error"], a:1, e:"4,5 no es mayor ni igual que 5, así que devuelve el segundo valor."},
{q:"¿Qué función busca un valor en la primera columna de una tabla y devuelve otro de la misma fila?", o:["SUMAR.SI","CONTAR.SI","BUSCARV","PROMEDIO"], a:2, e:"BUSCARV hace búsquedas verticales en tablas."},
{q:"¿Qué necesitas para generar un índice automático en Word o Writer?", o:["Poner los títulos en negrita","Aplicar estilos de título","Numerar las páginas","Usar tablas"], a:1, e:"El índice se construye a partir de los estilos Título 1, Título 2, etc."},
{q:"¿Para qué sirve combinar correspondencia?", o:["Para unir dos documentos en uno","Para crear documentos personalizados a partir de una lista de datos","Para comparar versiones","Para traducir textos"], a:1, e:"Genera una carta, etiqueta o correo por cada fila de la lista."},
{q:"¿Qué hace =CONTAR.SI(A1:A10;\">5\")?", o:["Suma los valores mayores que 5","Cuenta las celdas con valores mayores que 5","Devuelve el mayor valor","Cuenta las celdas vacías"], a:1, e:"CONTAR.SI cuenta las celdas que cumplen la condición."},
{q:"¿Cuál es el formato abierto de LibreOffice Writer?", o:[".docx",".odt",".pdf",".txt"], a:1, e:".odt pertenece al estándar abierto OpenDocument."}
]});
