TEMA("diseno-planificacion", {
title:"Planificación de interfaces gráficas web", mins:12,
intro:"Todo lo que se decide antes de escribir el CSS: objetivos y usuarios, arquitectura de la información, wireframes y prototipos, y la guía de estilo con colores, tipografía y componentes.",
sections:[
{h:"Antes de diseñar", html:`
<ul>
<li><b>Objetivo:</b> ¿qué debe conseguir la web? (vender, informar, que el usuario se registre).</li>
<li><b>Usuarios:</b> quiénes son, qué necesitan y desde qué dispositivo entran. Se resumen en <b>personas</b> (perfiles ficticios representativos).</li>
<li><b>Contenido:</b> qué hay que mostrar y con qué prioridad.</li>
<li><b>Arquitectura de la información:</b> cómo se organiza y se nombra el contenido; se plasma en un <b>mapa del sitio</b>.</li>
</ul>`},
{h:"Wireframes y prototipos", html:`
<table>
<tr><th>Fase</th><th>Qué es</th><th>Para qué</th></tr>
<tr><td>Boceto</td><td>Dibujo rápido a mano</td><td>Explorar muchas ideas en poco tiempo</td></tr>
<tr><td>Wireframe</td><td>Esquema en gris de cada pantalla, sin colores ni imágenes</td><td>Decidir la estructura y la jerarquía</td></tr>
<tr><td>Mockup</td><td>Diseño visual con colores, tipografía e imágenes</td><td>Ver el aspecto final</td></tr>
<tr><td>Prototipo</td><td>Mockup navegable, con clics y transiciones</td><td>Probar con usuarios antes de programar</td></tr>
</table>
<p>Herramientas: <b>Figma</b> (la más usada), Penpot (libre), Adobe XD. Cambiar un prototipo cuesta minutos; cambiar una web ya programada, días.</p>`,
check:{q:"¿Qué es un wireframe?", o:["La web terminada","Un esquema de la estructura de una pantalla sin diseño visual","Un tipo de cable","Un logotipo"], a:1, e:"Sirve para decidir qué va dónde antes de pensar en colores."}},
{h:"La guía de estilo", html:`
<p>Una <b>guía de estilo</b> (o sistema de diseño) recoge las decisiones visuales para que toda la web sea coherente:</p>
<ul>
<li><b>Color:</b> principal, secundario, neutros y colores de estado (éxito, aviso, error), con contraste suficiente.</li>
<li><b>Tipografía:</b> una o dos familias, una escala de tamaños y la altura de línea.</li>
<li><b>Espaciado:</b> una escala fija (4, 8, 16, 24, 32 px…).</li>
<li><b>Componentes:</b> botones, formularios, tarjetas, menús, con sus estados (normal, encima, foco, desactivado).</li>
<li><b>Iconografía e imágenes</b>, y el tono de los textos.</li>
</ul>
<p>En el código se traduce a <b>variables CSS</b>: <code>--color-principal: #1864AB; --espacio-2: 16px;</code></p>
<div class="caso"><b>Lo ves en esta web</b>Cicloteca tiene un color por curso, una escala de espacios y los mismos componentes (tarjetas, botones, tests) en todas las páginas. Es una pequeña guía de estilo aplicada.</div>`}
],
quiz:[
{q:"¿Qué son las «personas» en diseño?", o:["Los empleados","Perfiles ficticios que representan a los usuarios típicos","Los clientes reales","Los diseñadores"], a:1, e:"Ayudan a diseñar pensando en necesidades concretas."},
{q:"¿Qué documento muestra cómo se organizan las páginas de un sitio?", o:["El mapa del sitio","El CSS","El README","La factura"], a:0, e:"Es parte de la arquitectura de la información."},
{q:"¿Qué diferencia hay entre un mockup y un prototipo?", o:["Ninguna","El prototipo es navegable; el mockup es estático","El mockup tiene código","El prototipo es en papel"], a:1, e:"El prototipo permite probar con usuarios."},
{q:"¿Qué herramienta de diseño de interfaces es la más usada?", o:["Excel","Figma","Notepad","GIMP"], a:1, e:"Penpot es una alternativa libre."},
{q:"¿Qué recoge una guía de estilo?", o:["Solo el logotipo","Colores, tipografía, espaciado, componentes y tono","El código del servidor","Las contraseñas"], a:1, e:"Garantiza la coherencia de todo el sitio."},
{q:"¿Cómo se traslada la guía de estilo al CSS?", o:["Con variables CSS","Con tablas","Con imágenes","No se traslada"], a:0, e:"Así un cambio de color se hace en un solo sitio."}
]});
