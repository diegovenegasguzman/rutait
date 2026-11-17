TEMA("css", {
title:"CSS y diseño web adaptable", mins:17,
intro:"Cómo se da estilo a una web: selectores y especificidad, el modelo de caja, Flexbox y Grid para maquetar, diseño que se adapta al móvil y reglas básicas de accesibilidad.",
sections:[
{h:"Selectores, cascada y especificidad", html:`
<pre><code>p { color: #333; }                  <span class="c">/* etiqueta */</span>
.aviso { color: darkred; }          <span class="c">/* clase */</span>
#cabecera { background: navy; }     <span class="c">/* id */</span>
nav a:hover { text-decoration: underline; }  <span class="c">/* descendiente + estado */</span></code></pre>
<p>Si varias reglas afectan al mismo elemento, gana la de mayor <b>especificidad</b>:</p>
<table>
<tr><th>Selector</th><th>Peso</th></tr>
<tr><td>Estilo en línea (<code>style="..."</code>)</td><td>El más alto</td></tr>
<tr><td>Id (<code>#cabecera</code>)</td><td>Alto</td></tr>
<tr><td>Clase, atributo o pseudoclase (<code>.aviso</code>, <code>:hover</code>)</td><td>Medio</td></tr>
<tr><td>Etiqueta (<code>p</code>)</td><td>Bajo</td></tr>
</table>
<p>Con la misma especificidad, gana la regla escrita <b>más abajo</b> (la cascada). <code>!important</code> se salta todo; úsalo solo como último recurso.</p>`},
{h:"El modelo de caja", html:`
<p>Todo elemento es una caja con cuatro capas, de dentro afuera:</p>
<ul>
<li><b>content:</b> el contenido.</li>
<li><b>padding:</b> el relleno, espacio <b>interior</b> entre el contenido y el borde.</li>
<li><b>border:</b> el borde.</li>
<li><b>margin:</b> el margen, espacio <b>exterior</b> que separa la caja de las demás.</li>
</ul>
<p>Por defecto, <code>width</code> solo mide el contenido: una caja de <code>width: 300px</code> con 20 px de padding y 2 px de borde ocupa 344 px. Con <code>box-sizing: border-box</code>, el ancho incluye padding y borde, y la caja mide exactamente 300 px. Por eso casi todas las webs empiezan con:</p>
<pre><code>*, *::before, *::after { box-sizing: border-box; }</code></pre>`},
{h:"Flexbox y Grid", html:`
<p><b>Flexbox</b> coloca elementos en <b>una dimensión</b> (una fila o una columna):</p>
<pre><code>.menu {
  display: flex;
  justify-content: space-between;  <span class="c">/* reparto en el eje principal */</span>
  align-items: center;             <span class="c">/* alineación en el eje cruzado */</span>
  gap: 16px;
}</code></pre>
<p><b>Grid</b> coloca elementos en <b>dos dimensiones</b> (filas y columnas):</p>
<pre><code>.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}</code></pre>
<p>Esa línea de Grid crea tantas columnas de al menos 220 px como quepan, sin necesidad de media queries. Regla práctica: Flexbox para componentes (menús, barras), Grid para la estructura de la página y las cuadrículas.</p>`},
{h:"Diseño adaptable (responsive)", html:`
<p>La misma web debe verse bien en un móvil y en un monitor grande:</p>
<pre><code>&lt;meta name=<span class="s">"viewport"</span> content=<span class="s">"width=device-width, initial-scale=1"</span>&gt;</code></pre>
<pre><code>.columnas { display: grid; grid-template-columns: 1fr; }

<span class="k">@media</span> (min-width: 768px) {
  .columnas { grid-template-columns: 1fr 1fr; }   <span class="c">/* dos columnas en pantallas anchas */</span>
}</code></pre>
<ul>
<li><b>Mobile first:</b> se escribe primero el estilo del móvil y se amplía con <code>min-width</code>.</li>
<li><b>Unidades relativas:</b> <code>rem</code> (relativa al tamaño de letra de la raíz), <code>%</code>, <code>vw</code> y <code>vh</code> (porcentaje del ancho y el alto de la ventana).</li>
<li>Imágenes que no se salen de su contenedor: <code>img { max-width: 100%; height: auto; }</code></li>
</ul>`},
{h:"Accesibilidad y usabilidad", html:`
<p>Las pautas <b>WCAG</b> marcan cómo hacer webs que todo el mundo pueda usar:</p>
<ul>
<li><b>Contraste</b> mínimo de <b>4,5:1</b> entre el texto normal y el fondo (3:1 para texto grande).</li>
<li><b>Foco visible:</b> quien navega con teclado debe ver dónde está. Nunca pongas <code>outline: none</code> sin un estilo alternativo.</li>
<li><b>Tamaño táctil:</b> botones y enlaces de unos 44 × 44 px como mínimo en móvil.</li>
<li><b>Texto alternativo</b> en las imágenes y etiquetas <code>&lt;label&gt;</code> en los campos de formulario.</li>
<li>Respetar a quien desactiva las animaciones: <code>@media (prefers-reduced-motion: reduce)</code>.</li>
</ul>
<p>Prepara además el diseño con una <b>guía de estilo</b>: colores, tipografías y componentes definidos una vez y reutilizados en toda la web, a menudo con <b>variables CSS</b>: <code>--color-principal: #1864AB;</code></p>`}
],
quiz:[
{q:"¿Qué selector tiene más especificidad?", o:["p","div p",".aviso","#cabecera"], a:3, e:"Un id pesa más que cualquier número de clases o etiquetas."},
{q:"¿Qué hace box-sizing: border-box?", o:["Añade un borde","Hace que width incluya padding y borde","Quita el margen","Centra la caja"], a:1, e:"Así la caja mide exactamente lo que indica width."},
{q:"¿Cuál es la diferencia entre padding y margin?", o:["Ninguna","Padding es espacio interior; margin, espacio exterior","Margin es interior; padding, exterior","Padding solo existe en Flexbox"], a:1, e:"El padding queda dentro del borde y el margin, fuera."},
{q:"En Flexbox, ¿qué propiedad reparte los elementos a lo largo del eje principal?", o:["align-items","justify-content","flex-wrap","gap"], a:1, e:"justify-content trabaja en el eje principal; align-items, en el cruzado."},
{q:"¿Qué herramienta de CSS aplica estilos distintos según el ancho de la pantalla?", o:["@import","Media queries","!important","z-index"], a:1, e:"@media (min-width: …) aplica reglas a partir de cierto ancho."},
{q:"¿Qué contraste mínimo piden las WCAG para el texto normal?", o:["2:1","3:1","4,5:1","10:1"], a:2, e:"4,5:1 para texto normal y 3:1 para texto grande."},
{q:"¿Respecto a qué es relativa la unidad rem?", o:["Al elemento padre","Al tamaño de letra del elemento raíz (html)","Al ancho de la ventana","Al alto de la ventana"], a:1, e:"rem = root em: toma como referencia el tamaño de letra del html."},
{q:"¿Qué sistema de maquetación trabaja en dos dimensiones (filas y columnas)?", o:["Flexbox","Grid","Float","Inline"], a:1, e:"Grid controla filas y columnas a la vez; Flexbox, una sola dirección."}
]});
