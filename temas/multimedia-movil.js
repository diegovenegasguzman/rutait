TEMA("multimedia-movil", {
title:"Librerías multimedia en dispositivos móviles", mins:11,
intro:"Cómo una app móvil reproduce audio y vídeo, usa la cámara, carga imágenes de forma eficiente y aprovecha los sensores del dispositivo.",
sections:[
{h:"Audio y vídeo", html:`
<ul>
<li><b>Media3 / ExoPlayer</b>: la librería recomendada en Android para reproducir audio y vídeo, local o por streaming (HLS, DASH).</li>
<li><b>MediaPlayer</b>: la clase clásica, más sencilla y limitada.</li>
<li><b>SoundPool</b>: efectos de sonido cortos con poca latencia (juegos).</li>
<li>Para seguir sonando con la app en segundo plano (música, podcasts) se usa un <b>servicio en primer plano</b> con notificación.</li>
<li>Hay que gestionar el <b>foco de audio</b>: pausar si entra una llamada u otra app empieza a sonar.</li>
</ul>
<pre><code><span class="k">val</span> player = ExoPlayer.Builder(context).build()
player.setMediaItem(MediaItem.fromUri(<span class="s">"https://ejemplo.es/video.m3u8"</span>))
player.prepare(); player.play()
<span class="c">// liberar al salir: player.release()</span></code></pre>`},
{h:"Cámara e imágenes", html:`
<ul>
<li><b>CameraX</b> simplifica el uso de la cámara: vista previa, foto, vídeo y análisis de imagen (lectura de códigos QR, por ejemplo).</li>
<li>La forma más sencilla de pedir una foto es lanzar la app de cámara del sistema con un Intent.</li>
<li>Requiere el permiso <code>CAMERA</code>, pedido en tiempo de ejecución.</li>
<li>Para cargar imágenes (sobre todo de Internet) se usan <b>Coil</b> o Glide: redimensionan, cachean y evitan quedarse sin memoria.</li>
</ul>`,
check:{q:"¿Por qué usar una librería como Coil o Glide para mostrar imágenes de Internet?", o:["Por estética","Porque redimensionan, cachean y evitan errores de memoria","Porque es obligatorio","Porque cifran las imágenes"], a:1, e:"Cargar imágenes grandes a mano provoca OutOfMemoryError y descargas repetidas."}},
{h:"Sensores y buenas prácticas", html:`
<ul>
<li>El <b>SensorManager</b> da acceso a acelerómetro, giroscopio, magnetómetro, luz o proximidad. La ubicación se obtiene con el proveedor de ubicación de Google Play Services.</li>
<li>Registrar los sensores en <code>onResume</code> y liberarlos en <code>onPause</code> para no gastar batería.</li>
<li>Liberar siempre los reproductores y la cámara al salir de la pantalla.</li>
<li>Respetar los permisos: pedir solo lo necesario y explicar para qué.</li>
</ul>
<div class="caso"><b>Caso real</b>Una app de fitness que no libera el acelerómetro al pasar a segundo plano agota la batería en unas horas. Los usuarios la desinstalan y le ponen una estrella.</div>`}
],
quiz:[
{q:"¿Qué librería se recomienda para reproducir vídeo en Android?", o:["SoundPool","Media3 / ExoPlayer","Room","Retrofit"], a:1, e:"Admite streaming HLS y DASH."},
{q:"¿Qué clase es adecuada para efectos de sonido cortos en un juego?", o:["MediaPlayer","SoundPool","ExoPlayer","AudioRecord"], a:1, e:"Tiene muy poca latencia."},
{q:"¿Qué librería simplifica el uso de la cámara?", o:["CameraX","Glide","Gson","Navigation"], a:0, e:"Vista previa, fotos, vídeo y análisis."},
{q:"¿Qué es el foco de audio?", o:["El volumen","El mecanismo para que las apps no suenen a la vez","Un ecualizador","Un formato"], a:1, e:"La app debe pausar o bajar el volumen cuando lo pierde."},
{q:"¿Cuándo se deben liberar los sensores?", o:["Nunca","En onPause, al dejar de estar visible","Al instalar","Al reiniciar el móvil"], a:1, e:"Así no consumen batería en segundo plano."},
{q:"¿Qué permiso necesita una app para usar la cámara?", o:["INTERNET","CAMERA","VIBRATE","WAKE_LOCK"], a:1, e:"Y debe pedirse en tiempo de ejecución."}
]});
