TEMA("android-avanzado", {
title:"Programación de aplicaciones móviles", mins:14,
intro:"Cómo se construye una app Android completa con la arquitectura recomendada: navegación entre pantallas, ViewModel, listas, datos locales con Room y conexión a una API.",
sections:[
{h:"Arquitectura recomendada", html:`
<p>Google recomienda separar la app en capas:</p>
<table>
<tr><th>Capa</th><th>Contiene</th></tr>
<tr><td>Interfaz (UI)</td><td>Pantallas en Jetpack Compose (o vistas XML) y su <b>ViewModel</b></td></tr>
<tr><td>Datos</td><td><b>Repositorios</b> que deciden si los datos vienen de la base local o de la red</td></tr>
</table>
<p>El <b>ViewModel</b> guarda el estado de la pantalla y sobrevive a los giros del móvil. La interfaz solo observa ese estado y lo pinta: si cambia el estado, la pantalla se redibuja sola.</p>
<pre><code><span class="k">class</span> NotasViewModel(<span class="k">private val</span> repo: NotasRepository) : ViewModel() {
    <span class="k">val</span> notas = repo.observarNotas().stateIn(viewModelScope, SharingStarted.Lazily, emptyList())
    <span class="k">fun</span> borrar(id: Int) = viewModelScope.launch { repo.borrar(id) }
}</code></pre>`},
{h:"Navegación y listas", html:`
<ul>
<li><b>Navigation Compose</b> define las pantallas como rutas (<code>"lista"</code>, <code>"detalle/{id}"</code>) y gestiona el botón Atrás.</li>
<li>Las listas largas se muestran con <b>LazyColumn</b> (Compose) o <b>RecyclerView</b> (vistas), que solo crean los elementos visibles.</li>
<li>Las tareas lentas (red, base de datos) se hacen fuera del hilo principal con <b>corrutinas</b> de Kotlin. Si bloqueas el hilo principal, aparece el error «La aplicación no responde» (ANR).</li>
</ul>`,
check:{q:"¿Qué componente guarda el estado de una pantalla y sobrevive al giro del móvil?", o:["Activity","ViewModel","Intent","Toast"], a:1, e:"La Activity se destruye y recrea al girar; el ViewModel no."}},
{h:"Datos locales y en red", html:`
<pre><code>@Entity <span class="k">data class</span> Nota(@PrimaryKey(autoGenerate = <span class="k">true</span>) <span class="k">val</span> id: Int = 0, <span class="k">val</span> texto: String)

@Dao <span class="k">interface</span> NotaDao {
    @Query(<span class="s">"SELECT * FROM Nota"</span>) <span class="k">fun</span> todas(): Flow&lt;List&lt;Nota&gt;&gt;
    @Insert <span class="k">suspend fun</span> insertar(n: Nota)
}</code></pre>
<ul>
<li><b>Room</b>: base de datos local SQLite con anotaciones.</li>
<li><b>Retrofit</b>: cliente HTTP para consumir APIs REST, convirtiendo el JSON en objetos.</li>
<li>Permiso de Internet en el manifiesto: <code>android.permission.INTERNET</code>.</li>
<li>Patrón <b>offline first</b>: se muestra lo guardado en local y se actualiza desde la red cuando hay conexión.</li>
</ul>
<div class="caso"><b>Error típico</b>Hacer una petición de red directamente en la Activity. Android lanza NetworkOnMainThreadException. Va en una corrutina dentro del ViewModel o del repositorio.</div>`}
],
quiz:[
{q:"¿Qué ventaja tiene el ViewModel?", o:["Dibuja la interfaz","Guarda el estado y sobrevive a cambios de configuración","Accede a la red","Firma la app"], a:1, e:"Por ejemplo, al girar la pantalla."},
{q:"¿Qué componente muestra listas largas de forma eficiente en Compose?", o:["Column","LazyColumn","Row","Box"], a:1, e:"Solo crea los elementos visibles."},
{q:"¿Qué ocurre si bloqueas el hilo principal con una tarea larga?", o:["Nada","La app deja de responder (ANR)","Se acelera","Se cierra Android"], a:1, e:"Las tareas lentas van en corrutinas."},
{q:"¿Qué librería se usa para consumir APIs REST en Android?", o:["Room","Retrofit","Gson solo","Glide"], a:1, e:"Retrofit convierte las respuestas JSON en objetos."},
{q:"¿Qué permiso necesita una app para usar Internet?", o:["CAMERA","INTERNET","LOCATION","STORAGE"], a:1, e:"Se declara en el AndroidManifest."},
{q:"¿Qué significa offline first?", o:["Que no usa Internet","Mostrar primero los datos locales y sincronizar con la red cuando sea posible","Que solo funciona sin conexión","Que no guarda datos"], a:1, e:"La app es rápida y funciona sin cobertura."}
]});
