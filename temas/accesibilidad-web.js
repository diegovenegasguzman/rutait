TEMA("accesibilidad-web", {
title:"Diseño de webs accesibles", mins:14,
intro:"Cómo hacer webs que pueda usar todo el mundo, incluidas las personas con discapacidad visual, auditiva, motora o cognitiva: las pautas WCAG, la normativa española y cómo comprobarlo.",
sections:[
{h:"Por qué y para quién", html:`
<p>Una web accesible la pueden usar personas ciegas (con lector de pantalla), con baja visión, daltonismo, sordera, movilidad reducida (solo teclado o control por voz) o dificultades cognitivas. Y beneficia a todos: quien usa el móvil al sol, quien tiene un brazo escayolado, las personas mayores.</p>
<p>En España, las webs del sector público deben cumplir el <b>Real Decreto 1112/2018</b>, que remite a la norma UNE-EN 301 549 (basada en <b>WCAG</b>). Además, la normativa europea de accesibilidad extiende obligaciones a muchos servicios privados, como el comercio electrónico.</p>`},
{h:"Las pautas WCAG", html:`
<p>Las WCAG se organizan en cuatro principios (<b>POUR</b>) y tres niveles (A, AA y AAA); el objetivo habitual es el <b>AA</b>.</p>
<table>
<tr><th>Principio</th><th>Ejemplos</th></tr>
<tr><td><b>Perceptible</b></td><td>Texto alternativo en imágenes, subtítulos en vídeos, contraste de 4,5:1 en el texto, no transmitir información solo con color</td></tr>
<tr><td><b>Operable</b></td><td>Todo funciona con teclado, foco visible, sin trampas de foco, tiempo suficiente, nada que parpadee más de 3 veces por segundo</td></tr>
<tr><td><b>Comprensible</b></td><td>Idioma de la página indicado (<code>lang="es"</code>), etiquetas en los formularios, mensajes de error claros, navegación coherente</td></tr>
<tr><td><b>Robusto</b></td><td>HTML válido y semántico, roles ARIA correctos cuando hacen falta</td></tr>
</table>
<div class="note exam"><b>Primera regla de ARIA</b>Si existe un elemento HTML nativo que hace lo que necesitas (<code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;dialog&gt;</code>), úsalo en lugar de un <code>&lt;div&gt;</code> con atributos ARIA.</div>`,
check:{q:"¿Qué nivel de las WCAG se suele exigir?", o:["A","AA","AAA","Ninguno"], a:1, e:"AA es el nivel de referencia de la normativa."}},
{h:"Comprobar la accesibilidad", html:`
<ul>
<li><b>Herramientas automáticas:</b> Lighthouse (en F12), WAVE, axe. Detectan en torno a un tercio de los problemas.</li>
<li><b>Prueba con teclado:</b> recorre la página solo con Tab, Mayús+Tab, Intro y Espacio. ¿Ves siempre dónde estás? ¿Llegas a todo?</li>
<li><b>Lector de pantalla:</b> NVDA (libre, Windows), VoiceOver (Mac y iPhone), TalkBack (Android).</li>
<li><b>Contraste:</b> comprobadores de contraste de color.</li>
<li><b>Zoom al 200 %:</b> el contenido debe seguir siendo usable.</li>
</ul>
<div class="caso"><b>Caso real</b>Un formulario de cita médica usa un «botón» hecho con un <code>&lt;div&gt;</code> que solo responde al ratón. Una persona ciega con lector de pantalla no puede pedir cita. Cambiarlo por un <code>&lt;button&gt;</code> real lo arregla en un minuto.</div>`}
],
quiz:[
{q:"¿Cuáles son los cuatro principios de las WCAG?", o:["Rápido, bonito, barato y seguro","Perceptible, operable, comprensible y robusto","HTML, CSS, JS y PHP","A, AA, AAA y AAAA"], a:1, e:"Se resumen con las siglas POUR."},
{q:"¿Qué contraste mínimo exige el nivel AA para el texto normal?", o:["2:1","3:1","4,5:1","7:1"], a:2, e:"3:1 para texto grande; 7:1 es el nivel AAA."},
{q:"¿Qué norma española regula la accesibilidad de las webs del sector público?", o:["RD 1112/2018","LSSI","RGPD","RD 1691/2007"], a:0, e:"Remite a la norma UNE-EN 301 549."},
{q:"¿Qué dice la primera regla de ARIA?", o:["Usar ARIA en todo","Si existe un elemento HTML nativo adecuado, usarlo en lugar de ARIA","No usar HTML","Usar solo divs"], a:1, e:"Los elementos nativos ya son accesibles."},
{q:"¿Qué lector de pantalla libre se usa en Windows?", o:["NVDA","VoiceOver","TalkBack","Lighthouse"], a:0, e:"VoiceOver es el de Apple y TalkBack, el de Android."},
{q:"¿Qué porcentaje aproximado de problemas detectan las herramientas automáticas?", o:["Todos","Aproximadamente un tercio","Ninguno","El 99 %"], a:1, e:"Hay que completar con pruebas manuales con teclado y lector de pantalla."}
]});
