TEMA("componentes-visuales", {
title:"Componentes visuales personalizados", mins:11,
intro:"Cómo crear tus propios componentes de interfaz reutilizables: combinar controles existentes, añadirles propiedades y eventos, y darles estilo con CSS en JavaFX.",
sections:[
{h:"Por qué crear componentes", html:`
<p>Si en diez pantallas aparece el mismo «campo de búsqueda con botón y contador de resultados», se crea un componente una vez y se reutiliza. Cualquier mejora se aplica en todas partes.</p>
<p>Formas de crear un componente:</p>
<ul>
<li><b>Extender</b> un control existente (un TextField que solo acepta números).</li>
<li><b>Componer</b> varios controles en uno nuevo.</li>
<li><b>Dibujar</b> uno desde cero en un Canvas (un gráfico, un reloj).</li>
</ul>`},
{h:"Un componente compuesto en JavaFX", html:`
<pre><code><span class="k">public class</span> CampoBusqueda <span class="k">extends</span> HBox {
    <span class="k">private final</span> TextField texto = <span class="k">new</span> TextField();
    <span class="k">private final</span> StringProperty consulta = <span class="k">new</span> SimpleStringProperty();

    <span class="k">public</span> CampoBusqueda() {
        Button buscar = <span class="k">new</span> Button(<span class="s">"Buscar"</span>);
        getChildren().addAll(texto, buscar);
        getStyleClass().add(<span class="s">"campo-busqueda"</span>);
        buscar.setOnAction(e -&gt; consulta.set(texto.getText()));
    }
    <span class="k">public</span> StringProperty consultaProperty() { <span class="k">return</span> consulta; }
}

<span class="c">// Uso: reaccionar cuando cambia la consulta</span>
campo.consultaProperty().addListener((obs, viejo, nuevo) -&gt; filtrar(nuevo));</code></pre>
<p>Las <b>propiedades</b> observables (<code>StringProperty</code>, <code>IntegerProperty</code>…) permiten que otros componentes se enteren de los cambios o se enlacen (<b>binding</b>) con ellos.</p>`,
check:{q:"¿Para qué sirven las propiedades observables de JavaFX?", o:["Para guardar en disco","Para que otros se enteren de los cambios o se enlacen con ellas","Para cifrar datos","Para compilar"], a:1, e:"Es la base del binding: dos valores que se mantienen sincronizados."}},
{h:"Estilo y empaquetado", html:`
<pre><code><span class="c">/* estilos.css */</span>
.campo-busqueda { -fx-spacing: 8; -fx-padding: 6; }
.campo-busqueda .button { -fx-background-color: #1864AB; -fx-text-fill: white; }</code></pre>
<ul>
<li>JavaFX usa una variante de CSS con propiedades que empiezan por <code>-fx-</code>.</li>
<li>Los componentes se pueden usar en FXML y añadir a la paleta de <b>Scene Builder</b>.</li>
<li>Se empaquetan en un .jar para reutilizarlos en otros proyectos.</li>
</ul>
<div class="caso"><b>Buena práctica</b>Documenta el componente (propiedades, eventos, ejemplo de uso) y pruébalo aislado antes de integrarlo.</div>`}
],
quiz:[
{q:"¿Qué ventaja tiene crear un componente reutilizable?", o:["Ninguna","Se escribe una vez y las mejoras se aplican en todas partes","Ocupa menos memoria siempre","No necesita pruebas"], a:1, e:"Evita duplicar código de interfaz."},
{q:"¿Qué tres formas hay de crear un componente?", o:["Extender, componer o dibujar desde cero","Copiar, pegar y borrar","Solo extender","Solo con FXML"], a:0, e:"Según lo que necesites."},
{q:"¿Qué es el binding en JavaFX?", o:["Un error","Enlazar dos valores para que se mantengan sincronizados","Compilar","Un tipo de layout"], a:1, e:"Por ejemplo, el texto de una etiqueta enlazado a una propiedad."},
{q:"¿Con qué prefijo empiezan las propiedades CSS de JavaFX?", o:["--","-fx-","fx:","$"], a:1, e:"Por ejemplo, -fx-background-color."},
{q:"¿Qué herramienta visual permite añadir componentes propios a su paleta?", o:["Scene Builder","Wireshark","GIMP","Excel"], a:0, e:"Facilita reutilizarlos en el diseño de pantallas."},
{q:"¿Qué método se usa para reaccionar al cambio de una propiedad?", o:["addListener","setOnAction","print","close"], a:0, e:"Recibe el valor antiguo y el nuevo."}
]});
