TEMA("php-mvc", {
 "title": "Generación dinámica de páginas: POO, MVC y frameworks",
 "mins": 14,
 "intro": "Cómo pasar de páginas PHP sueltas a una aplicación ordenada: programación orientada a objetos en PHP, el patrón MVC, plantillas, rutas y cómo lo resuelven Laravel y Symfony.",
 "sections": [
  {
   "h": "PHP orientado a objetos",
   "html": "\n<pre><code>&lt;?php\n<span class=\"k\">namespace</span> App\\Modelo;\n\n<span class=\"k\">class</span> Producto {\n    <span class=\"k\">public function</span> __construct(\n        <span class=\"k\">private</span> string $nombre,\n        <span class=\"k\">private</span> float $precio\n    ) {}\n    <span class=\"k\">public function</span> conIva(): float { <span class=\"k\">return</span> $this-&gt;precio * 1.21; }\n    <span class=\"k\">public function</span> getNombre(): string { <span class=\"k\">return</span> $this-&gt;nombre; }\n}\n\n$p = <span class=\"k\">new</span> Producto(<span class=\"s\">'Ratón'</span>, 15.90);\n<span class=\"k\">echo</span> $p-&gt;conIva();</code></pre>\n<ul>\n<li>Los <b>espacios de nombres</b> organizan las clases.</li>\n<li><b>Composer</b> gestiona las dependencias y la <b>carga automática</b> de clases (autoload): no hace falta un <code>require</code> por archivo.</li>\n<li>Tipado de parámetros y retornos para detectar errores antes.</li>\n</ul>"
  },
  {
   "h": "El patrón MVC",
   "html": "\n<p>MVC (modelo-vista-controlador) es una forma de organizar una aplicación separando los datos, la presentación y la lógica que los une. Cada parte tiene su responsabilidad:</p>\n<table>\n<tr><th>Parte</th><th>Responsabilidad</th><th>Ejemplo</th></tr>\n<tr><td>Modelo</td><td>Datos y reglas de negocio</td><td>Clase Producto y su acceso a la base de datos</td></tr>\n<tr><td>Vista</td><td>Presentación: genera el HTML</td><td>Plantilla del listado de productos</td></tr>\n<tr><td>Controlador</td><td>Recibe la petición, usa el modelo y elige la vista</td><td>ProductoController::listar()</td></tr>\n</table>\n<p>Un <b>controlador frontal</b> (<code>index.php</code>) recibe todas las peticiones y un <b>enrutador</b> decide qué controlador atiende cada URL (<code>/productos</code>, <code>/productos/7</code>).</p>\n<p>Las vistas usan <b>plantillas</b> que escapan automáticamente las variables y separan el HTML del código: <b>Blade</b> (Laravel) o <b>Twig</b> (Symfony).</p>\n<pre><code>{{-- Blade --}}\n@foreach ($productos as $p)\n  &lt;li&gt;{{ $p-&gt;getNombre() }}: {{ number_format($p-&gt;conIva(), 2, ',', '.') }} €&lt;/li&gt;\n@endforeach</code></pre>",
   "check": {
    "q": "En MVC, ¿qué parte recibe la petición y decide qué vista mostrar?",
    "o": [
     "El modelo",
     "La vista",
     "El controlador",
     "La base de datos"
    ],
    "a": 2,
    "e": "El controlador coordina modelo y vista."
   }
  },
  {
   "h": "Frameworks",
   "html": "\n<pre><code><span class=\"c\">// Laravel: ruta → controlador</span>\nRoute::get(<span class=\"s\">'/productos'</span>, [ProductoController::<span class=\"k\">class</span>, <span class=\"s\">'index'</span>]);\n\n<span class=\"k\">class</span> ProductoController <span class=\"k\">extends</span> Controller {\n    <span class=\"k\">public function</span> index() {\n        $productos = Producto::orderBy(<span class=\"s\">'nombre'</span>)-&gt;paginate(20);   <span class=\"c\">// ORM Eloquent</span>\n        <span class=\"k\">return</span> view(<span class=\"s\">'productos.index'</span>, compact(<span class=\"s\">'productos'</span>));\n    }\n}</code></pre>\n<p>Un framework aporta rutas, ORM, plantillas, validación, autenticación, protección CSRF, migraciones de base de datos y pruebas. Se instala con Composer: <code>composer create-project laravel/laravel tienda</code>.</p>\n<p>Los frameworks usan un <b>controlador frontal</b>: un único punto de entrada (normalmente <code>index.php</code>) que recibe todas las peticiones y decide qué controlador las atiende.</p>\n<div class=\"caso\"><b>Por qué usarlos</b>Escribir todo a mano es buena forma de aprender; en un proyecto real, el framework evita reinventar (y equivocarse en) seguridad y estructura.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué herramienta gestiona las dependencias y la carga automática de clases en PHP?",
   "o": [
    "npm",
    "Composer",
    "Maven",
    "pip"
   ],
   "a": 1,
   "e": "Genera vendor/autoload.php."
  },
  {
   "q": "¿Qué parte de MVC contiene las reglas de negocio y el acceso a datos?",
   "o": [
    "Vista",
    "Modelo",
    "Controlador",
    "Enrutador"
   ],
   "a": 1,
   "e": "La vista solo presenta."
  },
  {
   "q": "¿Qué es un controlador frontal?",
   "o": [
    "Un mando",
    "Un único punto de entrada que recibe todas las peticiones",
    "Un tipo de vista",
    "Una base de datos"
   ],
   "a": 1,
   "e": "Normalmente index.php."
  },
  {
   "q": "¿Qué motor de plantillas usa Laravel?",
   "o": [
    "Twig",
    "Blade",
    "Smarty",
    "JSP"
   ],
   "a": 1,
   "e": "Symfony usa Twig."
  },
  {
   "q": "¿Qué ventaja tienen las plantillas como Blade o Twig?",
   "o": [
    "Más velocidad de red",
    "Escapan automáticamente las variables y separan HTML y código",
    "No necesitan PHP",
    "Cifran la base de datos"
   ],
   "a": 1,
   "e": "Reducen el riesgo de XSS."
  },
  {
   "q": "¿Cómo se llama el ORM de Laravel?",
   "o": [
    "Doctrine",
    "Eloquent",
    "Hibernate",
    "Sequelize"
   ],
   "a": 1,
   "e": "Symfony usa Doctrine."
  }
 ]
});
