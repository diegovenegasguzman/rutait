TEMA("multimedia-web", {
title:"Contenido multimedia en la web", mins:12,
intro:"Cómo incluir imágenes, audio y vídeo en una web de forma que carguen rápido en cualquier dispositivo, se vean nítidas y respeten los derechos de autor.",
sections:[
{h:"Imágenes optimizadas", html:`
<ul>
<li><b>Formato:</b> WebP o AVIF para fotos (mucho más ligeros que JPEG), SVG para iconos y logotipos, PNG si necesitas transparencia y no puedes usar los anteriores.</li>
<li><b>Tamaño:</b> nunca subas una foto de 4000 px para mostrarla a 400 px.</li>
<li><b>Carga diferida:</b> <code>loading="lazy"</code> para las imágenes que están más abajo.</li>
<li>Indica <code>width</code> y <code>height</code> para que la página no «salte» al cargar.</li>
<li>Texto alternativo (<code>alt</code>) siempre.</li>
</ul>
<pre><code>&lt;picture&gt;
  &lt;source srcset=<span class="s">"aula.avif"</span> type=<span class="s">"image/avif"</span>&gt;
  &lt;source srcset=<span class="s">"aula.webp"</span> type=<span class="s">"image/webp"</span>&gt;
  &lt;img src=<span class="s">"aula.jpg"</span> alt=<span class="s">"Alumnos montando un ordenador en el aula"</span>
       width=<span class="s">"800"</span> height=<span class="s">"533"</span> loading=<span class="s">"lazy"</span>
       srcset=<span class="s">"aula-400.jpg 400w, aula-800.jpg 800w, aula-1600.jpg 1600w"</span>
       sizes=<span class="s">"(max-width: 600px) 100vw, 800px"</span>&gt;
&lt;/picture&gt;</code></pre>
<p>Con <code>srcset</code> y <code>sizes</code>, el navegador elige la imagen más adecuada al tamaño de pantalla y su densidad de píxeles.</p>`,
check:{q:"¿Qué atributo retrasa la carga de las imágenes que no están a la vista?", o:["defer","loading=\"lazy\"","async","hidden"], a:1, e:"Ahorra datos y acelera la carga inicial."}},
{h:"Audio y vídeo", html:`
<pre><code>&lt;video controls width=<span class="s">"720"</span> poster=<span class="s">"portada.jpg"</span> preload=<span class="s">"metadata"</span>&gt;
  &lt;source src=<span class="s">"clase.webm"</span> type=<span class="s">"video/webm"</span>&gt;
  &lt;source src=<span class="s">"clase.mp4"</span> type=<span class="s">"video/mp4"</span>&gt;
  &lt;track kind=<span class="s">"captions"</span> src=<span class="s">"clase.es.vtt"</span> srclang=<span class="s">"es"</span> label=<span class="s">"Español"</span>&gt;
&lt;/video&gt;</code></pre>
<ul>
<li>Varias fuentes para compatibilidad: el navegador usa la primera que entienda.</li>
<li><code>poster</code>: imagen antes de reproducir. <code>preload="metadata"</code>: no descarga todo el vídeo al cargar la página.</li>
<li>Subtítulos con <code>&lt;track&gt;</code> en formato WebVTT.</li>
<li>Nunca reproducción automática con sonido: molesta y los navegadores la bloquean. Si es automática, con <code>muted</code>.</li>
<li>Para vídeos largos o con mucho tráfico, mejor una plataforma de vídeo o streaming adaptativo (HLS).</li>
</ul>`},
{h:"Derechos y licencias", html:`
<ul>
<li>Todo contenido tiene autor y derechos, aunque esté en Internet.</li>
<li>Las licencias <b>Creative Commons</b> indican qué se puede hacer: BY (citar al autor), SA (compartir igual), NC (no comercial), ND (sin obras derivadas).</li>
<li>Bancos de recursos libres: Unsplash, Pexels, Wikimedia Commons, Openverse; música con licencia libre para vídeos.</li>
</ul>
<div class="caso"><b>Caso real</b>Una empresa recibe una reclamación por usar en su web una foto sacada de un buscador de imágenes. Las fotos se toman de bancos con licencia clara o se compran.</div>`}
],
quiz:[
{q:"¿Qué formatos de imagen son más ligeros para fotos en la web?", o:["BMP y TIFF","WebP y AVIF","GIF","PSD"], a:1, e:"Ofrecen la misma calidad con mucho menos peso que JPEG."},
{q:"¿Para qué sirven srcset y sizes?", o:["Para añadir filtros","Para que el navegador elija la imagen adecuada al tamaño y densidad de la pantalla","Para comprimir","Para el alt"], a:1, e:"Así un móvil no descarga una imagen enorme."},
{q:"¿Por qué indicar width y height en las imágenes?", o:["Por estética","Para que la página no salte al cargar","Para comprimir","Es obligatorio en HTML"], a:1, e:"El navegador reserva el espacio desde el principio."},
{q:"¿En qué formato van los subtítulos de un vídeo HTML?", o:["SRT obligatoriamente","WebVTT","PDF","TXT"], a:1, e:"Se enlazan con la etiqueta <track>."},
{q:"¿Cómo debe ser un vídeo con reproducción automática?", o:["Con sonido alto","Silenciado (muted)","Sin controles","No se puede"], a:1, e:"Los navegadores bloquean la reproducción automática con sonido."},
{q:"¿Qué indica la licencia Creative Commons NC?", o:["Que no hay que citar","Que no se permite el uso comercial","Que se puede vender","Que es de dominio público"], a:1, e:"BY obliga a citar al autor."}
]});
