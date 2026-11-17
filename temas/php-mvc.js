TEMA("php-mvc", {
title:"Generación dinámica de páginas: POO, MVC y frameworks", mins:14,
intro:"Cómo pasar de páginas PHP sueltas a una aplicación ordenada: programación orientada a objetos en PHP, el patrón MVC, plantillas, rutas y cómo lo resuelven Laravel y Symfony.",
sections:[
{h:"PHP orientado a objetos", html:`
<pre><code>&lt;?php
<span class="k">namespace</span> App\\Modelo;

<span class="k">class</span> Producto {
    <span class="k">public function</span> __construct(
        <span class="k">private</span> string $nombre,
        <span class="k">private</span> float $precio
    ) {}
    <span class="k">public function</span> conIva(): float { <span class="k">return</span> $this-&gt;precio * 1.21; }
    <span class="k">public function</span> getNombre(): string { <span class="k">return</span> $this-&gt;nombre; }
}

$p = <span class="k">new</span> Producto(<span class="s">'Ratón'</span>, 15.90);
<span class="k">echo</span> $p-&gt;conIva();</code></pre>
<ul>
<li>Los <b>espacios de nombres</b> organizan las clases.</li>
<li><b>Composer</b> gestiona las dependencias y la <b>carga automática</b> de clases (autoload): no hace falta un <code>require</code> por archivo.</li>
<li>Tipado de parámetros y retornos para detectar errores antes.</li>
</ul>`},
{h:"El patrón MVC", html:`
<table>
<tr><th>Parte</th><th>Responsabilidad</th><th>Ejemplo</th></tr>
<tr><td>Modelo</td><td>Datos y reglas de negocio</td><td>Clase Producto y su acceso a la base de datos</td></tr>
<tr><td>Vista</td><td>Presentación: genera el HTML</td><td>Plantilla del listado de productos</td></tr>
<tr><td>Controlador</td><td>Recibe la petición, usa el modelo y elige la vista</td><td>ProductoController::listar()</td></tr>
</table>
<p>Un <b>controlador frontal</b> (<code>index.php</code>) recibe todas las peticiones y un <b>enrutador</b> decide qué controlador atiende cada URL (<code>/productos</code>, <code>/productos/7</code>).</p>
<p>Las vistas usan <b>plantillas</b> que escapan automáticamente las variables y separan el HTML del código: <b>Blade</b> (Laravel) o <b>Twig</b> (Symfony).</p>
<pre><code>{{-- Blade --}}
@foreach ($productos as $p)
  &lt;li&gt;{{ $p-&gt;getNombre() }}: {{ number_format($p-&gt;conIva(), 2, ',', '.') }} €&lt;/li&gt;
@endforeach</code></pre>`,
check:{q:"En MVC, ¿qué parte recibe la petición y decide qué vista mostrar?", o:["El modelo","La vista","El controlador","La base de datos"], a:2, e:"El controlador coordina modelo y vista."}},
{h:"Frameworks", html:`
<pre><code><span class="c">// Laravel: ruta → controlador</span>
Route::get(<span class="s">'/productos'</span>, [ProductoController::<span class="k">class</span>, <span class="s">'index'</span>]);

<span class="k">class</span> ProductoController <span class="k">extends</span> Controller {
    <span class="k">public function</span> index() {
        $productos = Producto::orderBy(<span class="s">'nombre'</span>)-&gt;paginate(20);   <span class="c">// ORM Eloquent</span>
        <span class="k">return</span> view(<span class="s">'productos.index'</span>, compact(<span class="s">'productos'</span>));
    }
}</code></pre>
<p>Un framework aporta rutas, ORM, plantillas, validación, autenticación, protección CSRF, migraciones de base de datos y pruebas. Se instala con Composer: <code>composer create-project laravel/laravel tienda</code>.</p>
<div class="caso"><b>Por qué usarlos</b>Escribir todo a mano es buena forma de aprender; en un proyecto real, el framework evita reinventar (y equivocarse en) seguridad y estructura.</div>`}
],
quiz:[
{q:"¿Qué herramienta gestiona las dependencias y la carga automática de clases en PHP?", o:["npm","Composer","Maven","pip"], a:1, e:"Genera vendor/autoload.php."},
{q:"¿Qué parte de MVC contiene las reglas de negocio y el acceso a datos?", o:["Vista","Modelo","Controlador","Enrutador"], a:1, e:"La vista solo presenta."},
{q:"¿Qué es un controlador frontal?", o:["Un mando","Un único punto de entrada que recibe todas las peticiones","Un tipo de vista","Una base de datos"], a:1, e:"Normalmente index.php."},
{q:"¿Qué motor de plantillas usa Laravel?", o:["Twig","Blade","Smarty","JSP"], a:1, e:"Symfony usa Twig."},
{q:"¿Qué ventaja tienen las plantillas como Blade o Twig?", o:["Más velocidad de red","Escapan automáticamente las variables y separan HTML y código","No necesitan PHP","Cifran la base de datos"], a:1, e:"Reducen el riesgo de XSS."},
{q:"¿Cómo se llama el ORM de Laravel?", o:["Doctrine","Eloquent","Hibernate","Sequelize"], a:1, e:"Symfony usa Doctrine."}
]});
