TEMA("uml-comportamiento", {
title:"Diagramas de comportamiento UML", mins:12,
intro:"Cómo representar lo que hace un sistema y cómo se comporta en el tiempo: casos de uso, diagramas de secuencia, de actividad y de estados.",
sections:[
{h:"Casos de uso", html:`
<p>Muestran <b>qué</b> puede hacer cada tipo de usuario con el sistema, sin entrar en cómo.</p>
<ul>
<li><b>Actor:</b> un monigote; quien interactúa (Alumno, Profesor, sistema externo).</li>
<li><b>Caso de uso:</b> un óvalo con una acción («Hacer test», «Consultar notas»).</li>
<li><b>&lt;&lt;include&gt;&gt;:</b> un caso que siempre se ejecuta dentro de otro («Hacer test» incluye «Iniciar sesión»).</li>
<li><b>&lt;&lt;extend&gt;&gt;:</b> un caso opcional que amplía otro en ciertas condiciones («Ver explicación» extiende «Responder pregunta»).</li>
</ul>
<p>Cada caso de uso se documenta con su flujo principal, sus flujos alternativos y sus condiciones previas.</p>`,
check:{q:"«Pagar pedido» siempre requiere «Validar tarjeta». ¿Qué relación los une?", o:["<<extend>>","<<include>>","Herencia","Ninguna"], a:1, e:"include indica que el caso incluido se ejecuta siempre."}},
{h:"Diagrama de secuencia", html:`
<p>Muestra los <b>mensajes</b> entre objetos en orden temporal, de arriba abajo:</p>
<pre><code>Usuario      :Formulario      :ServicioLogin      :BaseDatos
   │  entrar()      │                 │                  │
   │───────────────▶│ validar(u, c)   │                  │
   │                │────────────────▶│ buscar(u)        │
   │                │                 │─────────────────▶│
   │                │                 │◀─ ─ ─ usuario ─ ─│
   │                │◀─ ─ ─ ok ─ ─ ─ ─│                  │
   │◀─ ─ bienvenida─│                 │                  │</code></pre>
<ul>
<li>Cada participante tiene una <b>línea de vida</b> vertical.</li>
<li>Las flechas continuas son llamadas; las discontinuas, respuestas.</li>
<li>Los <b>fragmentos</b> <code>alt</code> (alternativa), <code>opt</code> (opcional) y <code>loop</code> (repetición) representan condiciones y bucles.</li>
</ul>`},
{h:"Actividad y estados", html:`
<ul>
<li><b>Diagrama de actividad:</b> un flujo de trabajo, como un diagrama de flujo: acciones, decisiones (rombos), bifurcaciones en paralelo y calles (swimlanes) para indicar quién hace cada cosa.</li>
<li><b>Diagrama de estados:</b> los estados por los que pasa un objeto y qué eventos le hacen cambiar. Un pedido: Creado → Pagado → Enviado → Entregado, o Cancelado.</li>
</ul>
<div class="caso"><b>Para qué sirve en el trabajo</b>Un diagrama de estados de un ticket de soporte (Abierto → En curso → En espera → Resuelto → Cerrado) evita discusiones sobre qué se puede hacer en cada momento.</div>`,
check:{q:"¿Qué diagrama usarías para mostrar los estados por los que pasa un pedido?", o:["Casos de uso","Diagrama de estados","Diagrama de clases","Diagrama de despliegue"], a:1, e:"Representa estados y los eventos que provocan los cambios."}}
],
quiz:[
{q:"¿Cómo se representa un actor en un diagrama de casos de uso?", o:["Con un rectángulo","Con un monigote","Con un rombo","Con una flecha"], a:1, e:"Representa a quien interactúa con el sistema."},
{q:"¿Qué indica <<extend>>?", o:["Un caso que siempre se ejecuta","Un caso opcional que amplía otro en ciertas condiciones","Herencia","Un error"], a:1, e:"Se ejecuta solo si se da la condición."},
{q:"¿Qué muestra un diagrama de secuencia?", o:["La estructura de clases","Los mensajes entre objetos en orden temporal","La base de datos","Los servidores"], a:1, e:"Se lee de arriba abajo."},
{q:"¿Qué fragmento de un diagrama de secuencia representa una repetición?", o:["alt","opt","loop","ref"], a:2, e:"alt es alternativa y opt, opcional."},
{q:"¿Qué son las calles (swimlanes) en un diagrama de actividad?", o:["Bucles","Columnas que indican quién realiza cada acción","Estados","Clases"], a:1, e:"Por ejemplo: Cliente, Tienda, Almacén."},
{q:"¿Qué tipo de diagramas son los de casos de uso, secuencia, actividad y estados?", o:["De estructura","De comportamiento","De despliegue","De datos"], a:1, e:"Los de clases son diagramas de estructura."}
]});
