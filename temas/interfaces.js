TEMA("interfaces", {
title:"Desarrollo de interfaces gráficas", mins:15,
intro:"Cómo se construyen las ventanas de una aplicación de escritorio: componentes, contenedores, eventos, la separación entre diseño y lógica, y las reglas de usabilidad y accesibilidad.",
sections:[
{h:"Componentes y tecnologías", html:`
<p>Una interfaz gráfica (GUI) está formada por <b>componentes</b> o controles: botones, campos de texto, etiquetas, listas, menús, tablas…</p>
<table>
<tr><th>Tecnología</th><th>Lenguaje</th></tr>
<tr><td>JavaFX (y la antigua Swing)</td><td>Java</td></tr>
<tr><td>WPF, WinUI, .NET MAUI</td><td>C#</td></tr>
<tr><td>Qt</td><td>C++ y Python</td></tr>
<tr><td>Electron</td><td>JavaScript, HTML y CSS</td></tr>
</table>`},
{h:"Contenedores y layouts", html:`
<p>Los componentes se colocan dentro de <b>contenedores</b> que deciden su posición y su tamaño. Así la ventana se adapta cuando el usuario la redimensiona. En JavaFX:</p>
<table>
<tr><th>Contenedor</th><th>Coloca los elementos…</th></tr>
<tr><td><code>VBox</code> / <code>HBox</code></td><td>En columna / en fila</td></tr>
<tr><td><code>BorderPane</code></td><td>En cinco zonas: arriba, abajo, izquierda, derecha y centro</td></tr>
<tr><td><code>GridPane</code></td><td>En una cuadrícula de filas y columnas (ideal para formularios)</td></tr>
<tr><td><code>StackPane</code></td><td>Unos encima de otros</td></tr>
</table>`},
{h:"Eventos", html:`
<p>Una GUI es un programa <b>dirigido por eventos</b>: no sigue un orden fijo, sino que espera a que el usuario haga algo (pulsar un botón, escribir, mover el ratón) y reacciona.</p>
<pre><code>Button btn = <span class="k">new</span> Button(<span class="s">"Guardar"</span>);
btn.setOnAction(e -&gt; {
    guardarDatos();
    lblEstado.setText(<span class="s">"Datos guardados"</span>);
});</code></pre>
<p>El código que reacciona a un evento se llama <b>manejador</b> o <b>listener</b>. Aquí está escrito como una expresión lambda (<code>e -&gt; { ... }</code>).</p>
<div class="note"><b>No bloquees la interfaz</b>Si un manejador tarda mucho (descargar un archivo, consultar una base de datos lenta), la ventana se congela. Las tareas largas se lanzan en un hilo aparte.</div>`},
{h:"Separar diseño y lógica", html:`
<p>En JavaFX el diseño se puede escribir en <b>FXML</b>, un XML que describe la ventana, y la lógica en una clase <b>controlador</b>. Herramientas como <b>Scene Builder</b> permiten diseñar arrastrando componentes.</p>
<pre><code>&lt;VBox fx:controller=<span class="s">"app.LoginController"</span> spacing=<span class="s">"10"</span>&gt;
  &lt;TextField fx:id=<span class="s">"txtUsuario"</span> promptText=<span class="s">"Usuario"</span>/&gt;
  &lt;Button text=<span class="s">"Entrar"</span> onAction=<span class="s">"#entrar"</span>/&gt;
&lt;/VBox&gt;</code></pre>
<p>Este reparto sigue el patrón <b>MVC</b> (Modelo-Vista-Controlador): el <b>modelo</b> son los datos, la <b>vista</b> es lo que se ve y el <b>controlador</b> conecta ambos. Cambiar el aspecto no obliga a tocar la lógica.</p>`},
{h:"Usabilidad y accesibilidad", html:`
<p>Algunos de los principios de usabilidad de Jakob Nielsen:</p>
<ul>
<li><b>Mostrar el estado del sistema:</b> indicar que algo se está guardando o cargando.</li>
<li><b>Consistencia:</b> los mismos elementos se comportan igual en toda la aplicación.</li>
<li><b>Prevenir errores:</b> desactivar «Guardar» hasta que el formulario esté completo, pedir confirmación antes de borrar.</li>
<li><b>Mensajes de error útiles:</b> decir qué ha fallado y cómo arreglarlo.</li>
</ul>
<p>Accesibilidad: <b>contraste</b> suficiente entre texto y fondo, que todo pueda usarse <b>con el teclado</b> (orden de tabulación lógico), textos que se puedan agrandar y no transmitir información <b>solo con el color</b>.</p>
<p>Por último, la aplicación se entrega con <b>informes</b> (generados, por ejemplo, con JasperReports), <b>ayuda</b> para el usuario y un <b>instalador</b>.</p>`}
],
quiz:[
{q:"¿Cómo se llama el código que se ejecuta cuando el usuario pulsa un botón?", o:["Constructor","Manejador de eventos (listener)","Layout","Modelo"], a:1, e:"El listener reacciona a un evento concreto, como un clic."},
{q:"¿Qué contenedor de JavaFX es ideal para un formulario con etiquetas y campos alineados?", o:["StackPane","GridPane","HBox","Canvas"], a:1, e:"GridPane organiza los elementos en filas y columnas."},
{q:"¿Qué es FXML?", o:["Un lenguaje de programación","Un XML para describir la interfaz en JavaFX","Una base de datos","Un tipo de evento"], a:1, e:"Permite separar el diseño de la ventana del código Java."},
{q:"En el patrón MVC, ¿qué parte representa los datos?", o:["El modelo","La vista","El controlador","El layout"], a:0, e:"El modelo contiene los datos y las reglas de negocio."},
{q:"¿Qué ocurre si un manejador de eventos hace una tarea muy larga en el hilo de la interfaz?", o:["Nada","La ventana se congela hasta que termina","La tarea se cancela","Se abre otra ventana"], a:1, e:"Las tareas largas deben ejecutarse en otro hilo."},
{q:"¿Cuál de estas es una buena práctica de usabilidad?", o:["Mostrar errores con códigos internos","Pedir confirmación antes de borrar","Cambiar la posición de los botones en cada pantalla","Usar solo el color para indicar errores"], a:1, e:"Prevenir errores es uno de los principios de Nielsen."},
{q:"¿Por qué no se debe transmitir información solo con el color?", o:["Porque ocupa memoria","Porque las personas con daltonismo pueden no distinguirla","Porque no funciona en Linux","Porque es lento"], a:1, e:"Hay que acompañar el color de texto o iconos."},
{q:"¿Qué tipo de programa es una aplicación con interfaz gráfica?", o:["Secuencial","Dirigido por eventos","Por lotes","De consola"], a:1, e:"Espera a que el usuario actúe y reacciona a cada evento."}
]});
