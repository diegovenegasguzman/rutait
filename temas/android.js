TEMA("android", {
title:"Desarrollo de aplicaciones Android", mins:16,
intro:"Las bases para programar apps móviles en Android: herramientas, el ciclo de vida de una pantalla, cómo se diseña la interfaz, cómo se navega entre pantallas y cómo se guardan los datos.",
sections:[
{h:"La plataforma Android", html:`
<ul>
<li><b>Lenguaje:</b> <b>Kotlin</b> es el recomendado por Google; Java sigue siendo compatible.</li>
<li><b>Entorno:</b> <b>Android Studio</b>, con emulador para probar sin móvil.</li>
<li><b>Compilación:</b> Gradle genera un <b>APK</b> (para instalar directamente) o un <b>AAB</b> (el formato que pide Google Play).</li>
<li><b>Versiones:</b> en la configuración se indica el <code>minSdk</code>, la versión mínima de Android en la que funcionará la app. Cuanto más baja, más dispositivos, pero menos funciones modernas disponibles.</li>
</ul>
<p>El archivo <b>AndroidManifest.xml</b> describe la app: su nombre, sus pantallas, los permisos que necesita y cuál se abre al iniciarla.</p>`},
{h:"Activities y su ciclo de vida", html:`
<p>Una <b>Activity</b> es una pantalla de la app. Android llama a sus métodos según lo que ocurre:</p>
<table>
<tr><th>Método</th><th>Cuándo se llama</th></tr>
<tr><td><code>onCreate()</code></td><td>Al crearse. Aquí se carga la interfaz y se inicializa todo.</td></tr>
<tr><td><code>onStart()</code></td><td>Cuando se hace visible.</td></tr>
<tr><td><code>onResume()</code></td><td>Cuando el usuario puede interactuar con ella.</td></tr>
<tr><td><code>onPause()</code></td><td>Cuando pierde el primer plano (llega una llamada, se abre otra app).</td></tr>
<tr><td><code>onStop()</code></td><td>Cuando deja de verse.</td></tr>
<tr><td><code>onDestroy()</code></td><td>Antes de destruirse.</td></tr>
</table>
<div class="note"><b>El giro de pantalla</b>Al girar el móvil, Android destruye y vuelve a crear la Activity. Si no guardas el estado (por ejemplo, con un <b>ViewModel</b>), se pierde lo que el usuario había escrito.</div>`},
{h:"Diseñar la interfaz", html:`
<p>Hay dos formas de crear pantallas:</p>
<ul>
<li><b>Layouts XML</b> con vistas (<code>TextView</code>, <code>Button</code>, <code>EditText</code>, <code>RecyclerView</code> para listas) dentro de contenedores como <code>ConstraintLayout</code> o <code>LinearLayout</code>.</li>
<li><b>Jetpack Compose</b>, la forma moderna: la interfaz se escribe en Kotlin con funciones.</li>
</ul>
<pre><code>@Composable
<span class="k">fun</span> Saludo(nombre: String) {
    Column {
        Text(<span class="s">"Hola, $nombre"</span>)
        Button(onClick = { <span class="c">/* acción */</span> }) { Text(<span class="s">"Continuar"</span>) }
    }
}</code></pre>
<p>Las medidas se dan en <b>dp</b> (píxeles independientes de la densidad) y los textos en <b>sp</b>, para que se vean igual en pantallas distintas.</p>`},
{h:"Intents y permisos", html:`
<p>Un <b>Intent</b> es un mensaje para pedir que se haga algo:</p>
<ul>
<li><b>Explícito:</b> abre una pantalla concreta de tu app. <code>startActivity(Intent(this, DetalleActivity::class.java))</code></li>
<li><b>Implícito:</b> pide una acción y Android elige qué app la hace: abrir una web, compartir un texto, hacer una foto.</li>
</ul>
<p>Los <b>permisos</b> se declaran en el manifiesto. Los peligrosos (cámara, ubicación, micrófono, contactos) además se piden al usuario <b>en el momento de usarlos</b>, y la app debe seguir funcionando si los rechaza.</p>`},
{h:"Guardar datos y multimedia", html:`
<table>
<tr><th>Opción</th><th>Para qué</th></tr>
<tr><td>SharedPreferences / DataStore</td><td>Pares clave-valor pequeños: ajustes, tema oscuro, último usuario</td></tr>
<tr><td>Room</td><td>Base de datos SQLite local con objetos, para datos estructurados</td></tr>
<tr><td>Archivos</td><td>Imágenes, documentos descargados</td></tr>
<tr><td>Servidor (API REST)</td><td>Datos compartidos entre usuarios o dispositivos</td></tr>
</table>
<p>Para multimedia: <b>MediaPlayer</b> o <b>ExoPlayer</b> reproducen audio y vídeo; <b>CameraX</b> facilita el uso de la cámara.</p>`}
],
quiz:[
{q:"¿Qué lenguaje recomienda Google para desarrollar en Android?", o:["Swift","Kotlin","C#","PHP"], a:1, e:"Kotlin es el lenguaje preferente desde 2019, aunque Java sigue funcionando."},
{q:"¿En qué método de una Activity se carga normalmente la interfaz?", o:["onStart()","onCreate()","onResume()","onStop()"], a:1, e:"onCreate se ejecuta al crear la pantalla y es donde se inicializa."},
{q:"Entra una llamada mientras usas la app. ¿Qué método se llama primero?", o:["onDestroy()","onPause()","onCreate()","onStart()"], a:1, e:"La Activity pierde el primer plano y se llama a onPause."},
{q:"¿Qué tipo de Intent usarías para abrir otra pantalla de tu propia app?", o:["Implícito","Explícito","De sistema","Broadcast"], a:1, e:"El explícito indica exactamente qué Activity abrir."},
{q:"¿En qué archivo se declaran los permisos de la app?", o:["build.gradle","AndroidManifest.xml","MainActivity.kt","strings.xml"], a:1, e:"El manifiesto declara permisos, pantallas y la Activity de inicio."},
{q:"¿Qué usarías para guardar si el usuario prefiere el tema oscuro?", o:["Room","SharedPreferences o DataStore","Un servidor","Un archivo de vídeo"], a:1, e:"Para ajustes sencillos se usan pares clave-valor."},
{q:"¿Qué es Room?", o:["Un emulador","Una capa sobre SQLite para guardar datos estructurados","Un tipo de layout","Un servicio de Google Play"], a:1, e:"Room simplifica el uso de la base de datos SQLite local."},
{q:"¿Qué indica minSdk?", o:["El tamaño mínimo de la app","La versión mínima de Android en la que funciona","La memoria mínima","El número de pantallas"], a:1, e:"Por debajo de esa versión, la app no se puede instalar."}
]});
