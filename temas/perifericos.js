TEMA("perifericos", {
title:"Mantenimiento de periféricos", mins:11,
intro:"Cómo funcionan, se conectan y se mantienen los periféricos más habituales, sobre todo las impresoras, que generan buena parte de las incidencias de soporte.",
sections:[
{h:"Conexiones", html:`
<table>
<tr><th>Conexión</th><th>Uso</th></tr>
<tr><td>USB-A / USB-C</td><td>Casi todo. USB-C es reversible y puede llevar datos, vídeo y carga</td></tr>
<tr><td>Thunderbolt / USB4</td><td>Bases de conexión, pantallas y almacenamiento muy rápido</td></tr>
<tr><td>HDMI / DisplayPort</td><td>Vídeo y audio a monitores y proyectores</td></tr>
<tr><td>Bluetooth</td><td>Teclados, ratones y auriculares inalámbricos</td></tr>
<tr><td>Red (Ethernet / Wi-Fi)</td><td>Impresoras y escáneres compartidos</td></tr>
</table>`},
{h:"Impresoras", html:`
<table>
<tr><th>Tipo</th><th>Funcionamiento</th><th>Mantenimiento típico</th></tr>
<tr><td>Láser</td><td>Tóner fijado con calor por el fusor</td><td>Cambiar tóner, tambor y kit de fusor; limpiar restos de tóner</td></tr>
<tr><td>Inyección de tinta</td><td>Gotas de tinta por cabezales</td><td>Limpieza de cabezales; se secan si no se usa</td></tr>
<tr><td>Térmica</td><td>Papel sensible al calor</td><td>Limpiar el cabezal; tickets y etiquetas</td></tr>
<tr><td>Matricial</td><td>Agujas que golpean una cinta</td><td>Cambiar cinta; aún se usa para copias en papel autocopiativo</td></tr>
</table>
<p>Atascos: abrir siguiendo las indicaciones de la propia impresora, tirar del papel en el sentido de avance y comprobar que no quedan trozos. Usar papel del gramaje adecuado y bien guardado (la humedad causa atascos).</p>`,
check:{q:"¿Qué pieza de una impresora láser fija el tóner al papel con calor?", o:["El tambor","El fusor","El cabezal","La bandeja"], a:1, e:"Por eso el papel sale caliente; el fusor es un consumible de larga duración."}},
{h:"Limpieza y otros periféricos", html:`
<ul>
<li><b>Teclado y ratón:</b> aire comprimido y paño con alcohol isopropílico, con el equipo apagado.</li>
<li><b>Pantallas:</b> paño de microfibra seco o ligeramente húmedo; nunca productos con amoniaco.</li>
<li><b>Escáneres:</b> cristal limpio; calibración si los colores salen mal.</li>
<li><b>Monitores:</b> comprobar cable, entrada seleccionada y resolución nativa.</li>
</ul>
<div class="caso"><b>Caso real</b>Las copias de una láser salen con una raya negra vertical siempre en el mismo sitio. Suele ser el tambor rayado o sucio, no el tóner. Cambiar el tambor lo resuelve.</div>`}
],
quiz:[
{q:"¿Qué conector es reversible y puede llevar datos, vídeo y carga?", o:["USB-A","USB-C","VGA","PS/2"], a:1, e:"Además, con Thunderbolt o USB4 alcanza velocidades muy altas."},
{q:"¿Qué consumible usa una impresora láser?", o:["Cartuchos de tinta","Tóner","Cinta","Papel térmico"], a:1, e:"El tóner es polvo que se fija con calor."},
{q:"¿Qué tipo de impresora se usa para tickets?", o:["Láser","Térmica","Plotter","3D"], a:1, e:"No necesita tinta: usa papel sensible al calor."},
{q:"¿Cómo se retira un papel atascado?", o:["Tirando hacia atrás con fuerza","En el sentido de avance y comprobando que no quedan trozos","Con un cuchillo","Apagando y esperando"], a:1, e:"Así no se dañan los rodillos."},
{q:"¿Con qué se limpia una pantalla?", o:["Limpiacristales con amoniaco","Paño de microfibra","Estropajo","Lejía"], a:1, e:"El amoniaco daña el recubrimiento."},
{q:"Una láser imprime una raya en el mismo sitio de cada hoja. ¿Qué revisas?", o:["El cable USB","El tambor","El driver","La red"], a:1, e:"Un tambor rayado o sucio deja marcas repetidas."}
]});
