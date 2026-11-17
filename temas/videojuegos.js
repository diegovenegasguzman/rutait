TEMA("videojuegos", {
title:"Motores de juegos y desarrollo 2D y 3D", mins:14,
intro:"Qué es un motor de juegos y qué componentes tiene, cómo funciona el bucle de juego, y los conceptos clave para crear juegos 2D y 3D con Unity, Godot u otros motores.",
sections:[
{h:"Motores de juegos", html:`
<p>Un motor de juegos ya trae resuelto lo común a todos los juegos:</p>
<ul>
<li><b>Renderizado</b> 2D y 3D (gráficos, luces, sombras).</li>
<li><b>Motor de físicas</b>: gravedad, colisiones, fuerzas.</li>
<li><b>Audio</b>, <b>entrada</b> (teclado, mando, táctil), <b>animación</b>, <b>red</b> y exportación a varias plataformas.</li>
</ul>
<table>
<tr><th>Motor</th><th>Lenguaje</th><th>Comentario</th></tr>
<tr><td>Unity</td><td>C#</td><td>Muy usado en móvil e indie</td></tr>
<tr><td>Godot</td><td>GDScript, C#</td><td>Libre y ligero</td></tr>
<tr><td>Unreal Engine</td><td>C++, Blueprints</td><td>Gráficos de máxima calidad</td></tr>
<tr><td>libGDX</td><td>Java/Kotlin</td><td>Framework para 2D</td></tr>
</table>
<p>Plataformas como Roblox incluyen su propio motor y lenguaje (Luau).</p>`},
{h:"El bucle de juego", html:`
<p>Todo juego repite muchas veces por segundo: <b>leer entrada → actualizar el estado → dibujar</b>.</p>
<pre><code><span class="c">// Unity (C#): Update se llama una vez por fotograma</span>
<span class="k">void</span> Update() {
    <span class="k">float</span> h = Input.GetAxis(<span class="s">"Horizontal"</span>);
    transform.Translate(h * velocidad * Time.deltaTime, 0, 0);
}</code></pre>
<p><b>deltaTime</b> es el tiempo transcurrido desde el fotograma anterior. Multiplicar por él hace que el movimiento sea igual de rápido a 30 o a 144 fotogramas por segundo.</p>
<p>Organización típica: una <b>escena</b> contiene <b>objetos</b> (GameObjects o nodos) que tienen <b>componentes</b> (transformación, sprite o malla, colisionador, scripts).</p>`,
check:{q:"¿Para qué se multiplica el movimiento por deltaTime?", o:["Para que vaya más rápido","Para que la velocidad sea la misma independientemente de los fotogramas por segundo","Para ahorrar memoria","Para las colisiones"], a:1, e:"Sin él, en un equipo más potente el personaje iría más deprisa."}},
{h:"2D y 3D", html:`
<table>
<tr><th></th><th>2D</th><th>3D</th></tr>
<tr><td>Gráficos</td><td>Sprites, hojas de sprites, mapas de tiles</td><td>Mallas (modelos de Blender), materiales y texturas</td></tr>
<tr><td>Cámara</td><td>Ortográfica</td><td>En perspectiva</td></tr>
<tr><td>Física</td><td>Rigidbody2D, colisionadores 2D</td><td>Rigidbody, colisionadores 3D</td></tr>
<tr><td>Animación</td><td>Por fotogramas o esqueletal 2D</td><td>Esqueletal, con máquinas de estados de animación</td></tr>
</table>
<p>Otros conceptos: <b>prefabs</b> (plantillas de objetos reutilizables), <b>IA</b> sencilla con máquinas de estados o navegación por mallas (NavMesh), y <b>optimización</b> (agrupar dibujados, reducir polígonos, objetos reutilizados en lugar de crear y destruir).</p>
<div class="caso"><b>Del prototipo a la tienda</b>Un juego se prueba en varios dispositivos, se optimiza para móviles de gama baja y se publica en Google Play, App Store, Steam o itch.io, cada uno con sus requisitos.</div>`}
],
quiz:[
{q:"¿Qué componente de un motor gestiona la gravedad y las colisiones?", o:["El renderizador","El motor de físicas","El audio","La red"], a:1, e:"Calcula fuerzas y colisiones en cada fotograma."},
{q:"¿Qué lenguaje se usa en Unity?", o:["Java","C#","Python","PHP"], a:1, e:"Godot usa GDScript o C#."},
{q:"¿Qué tres pasos repite el bucle de juego?", o:["Compilar, probar, publicar","Leer entrada, actualizar estado y dibujar","Abrir, guardar, cerrar","Cargar, borrar, salir"], a:1, e:"Decenas de veces por segundo."},
{q:"¿Qué es un sprite?", o:["Un modelo 3D","Una imagen 2D que representa un elemento del juego","Un sonido","Un script"], a:1, e:"Varias se agrupan en una hoja de sprites."},
{q:"¿Qué tipo de cámara se usa normalmente en 2D?", o:["En perspectiva","Ortográfica","Panorámica","Estéreo"], a:1, e:"No hay sensación de profundidad."},
{q:"¿Qué es un prefab?", o:["Un error","Una plantilla de objeto reutilizable","Un nivel","Un tipo de luz"], a:1, e:"Se instancian copias desde el código o el editor."}
]});
