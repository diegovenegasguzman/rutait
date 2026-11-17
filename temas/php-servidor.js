TEMA("php-servidor", {
title:"Programación en el servidor con PHP", mins:17,
intro:"Cómo se generan páginas en el servidor: sintaxis de PHP, cómo procesar formularios de forma segura, sesiones para recordar al usuario, acceso a la base de datos con PDO y la organización con MVC.",
sections:[
{h:"Qué hace el servidor", html:`
<p>Cuando el navegador pide una página PHP, el servidor <b>ejecuta el código</b> y envía solo el HTML resultante. El usuario nunca ve el código PHP. Así se pueden mostrar datos de una base de datos, comprobar contraseñas o procesar pagos de forma segura.</p>
<pre><code>&lt;h1&gt;Hola, &lt;?php <span class="k">echo</span> htmlspecialchars($nombre); ?&gt;&lt;/h1&gt;
&lt;p&gt;Hoy es &lt;?= date(<span class="s">'d/m/Y'</span>) ?&gt;&lt;/p&gt;</code></pre>
<p>Otros lenguajes de servidor: Java (Spring), Python (Django, Flask), JavaScript (Node.js) y C# (ASP.NET).</p>`},
{h:"Sintaxis básica", html:`
<pre><code>&lt;?php
$nombre = <span class="s">"Laia"</span>;                     <span class="c">// las variables empiezan por $</span>
$notas  = [<span class="s">7.5</span>, <span class="s">8</span>, <span class="s">6</span>];              <span class="c">// array</span>
$alumno = [<span class="s">"nombre"</span> =&gt; <span class="s">"Laia"</span>, <span class="s">"curso"</span> =&gt; <span class="s">"2º DAW"</span>];  <span class="c">// array asociativo</span>

<span class="k">function</span> media(<span class="k">array</span> $n): <span class="k">float</span> {
    <span class="k">return</span> array_sum($n) / count($n);
}

<span class="k">foreach</span> ($notas <span class="k">as</span> $nota) {
    <span class="k">echo</span> <span class="s">"Nota: $nota&lt;br&gt;"</span>;
}
<span class="k">echo</span> <span class="s">"Media: "</span> . media($notas);    <span class="c">// el punto concatena</span></code></pre>`},
{h:"Formularios", html:`
<p>Los datos de un formulario llegan en <code>$_GET</code> (si se envían por la URL) o en <code>$_POST</code> (si van en el cuerpo de la petición):</p>
<pre><code>&lt;form method=<span class="s">"post"</span> action=<span class="s">"registro.php"</span>&gt;
  &lt;input name=<span class="s">"email"</span> type=<span class="s">"email"</span>&gt;
  &lt;button&gt;Registrarme&lt;/button&gt;
&lt;/form&gt;</code></pre>
<pre><code>&lt;?php
$email = trim($_POST[<span class="s">'email'</span>] ?? <span class="s">''</span>);
<span class="k">if</span> (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = <span class="s">"El correo no es válido"</span>;
}
<span class="k">echo</span> htmlspecialchars($email);   <span class="c">// al mostrarlo, siempre escapado</span></code></pre>
<div class="note exam"><b>Nunca te fíes de los datos del usuario</b>Valídalos siempre en el servidor. Al mostrarlos en la página, pásalos por <code>htmlspecialchars()</code>: convierte <code>&lt;</code> y <code>&gt;</code> en texto, de modo que nadie pueda inyectar código JavaScript (ataque <b>XSS</b>).</div>`},
{h:"Sesiones y cookies", html:`
<p>HTTP no recuerda nada entre una petición y la siguiente. Para saber que el usuario ya ha iniciado sesión se usan:</p>
<ul>
<li><b>Cookies:</b> pequeños datos que se guardan <b>en el navegador</b> y se envían en cada petición. El usuario puede verlos y modificarlos.</li>
<li><b>Sesiones:</b> los datos se guardan <b>en el servidor</b>. El navegador solo guarda una cookie con un identificador de sesión.</li>
</ul>
<pre><code>session_start();
<span class="k">if</span> (password_verify($clave, $hashGuardado)) {
    session_regenerate_id(<span class="k">true</span>);
    $_SESSION[<span class="s">'usuario'</span>] = $email;
}</code></pre>
<p>Las contraseñas se guardan con <code>password_hash()</code> y se comprueban con <code>password_verify()</code>. Nunca se guardan en texto plano.</p>`},
{h:"Base de datos con PDO y MVC", html:`
<pre><code>$pdo = <span class="k">new</span> PDO(<span class="s">'mysql:host=localhost;dbname=tienda;charset=utf8mb4'</span>, <span class="s">'app'</span>, <span class="s">'clave'</span>);
$st = $pdo-&gt;prepare(<span class="s">'SELECT * FROM productos WHERE categoria = ?'</span>);
$st-&gt;execute([$categoria]);
$productos = $st-&gt;fetchAll(PDO::FETCH_ASSOC);</code></pre>
<p>Con <b>consultas preparadas</b> (<code>prepare</code> y <code>?</code>), los datos del usuario nunca se mezclan con el SQL, lo que evita la <b>inyección SQL</b>.</p>
<p>En aplicaciones grandes, el código se organiza con el patrón <b>MVC</b>: el <b>modelo</b> accede a los datos, la <b>vista</b> genera el HTML y el <b>controlador</b> recibe la petición y decide qué hacer. Los frameworks <b>Laravel</b> y <b>Symfony</b> ya traen esta estructura, además de rutas, validación y protección contra ataques habituales.</p>`}
],
quiz:[
{q:"¿Con qué carácter empiezan las variables en PHP?", o:["#","@","$","&"], a:2, e:"Todas las variables de PHP empiezan por $."},
{q:"¿Dónde llegan los datos de un formulario enviado con method=\"post\"?", o:["$_GET","$_POST","$_SESSION","$_COOKIE"], a:1, e:"Los formularios POST rellenan el array $_POST."},
{q:"¿Qué función hay que llamar antes de usar $_SESSION?", o:["session_start()","session_open()","start()","cookie_start()"], a:0, e:"session_start() inicia o recupera la sesión del usuario."},
{q:"¿Qué ataque evita htmlspecialchars() al mostrar datos del usuario?", o:["Inyección SQL","XSS","DDoS","Fuerza bruta"], a:1, e:"Impide que el texto del usuario se interprete como HTML o JavaScript."},
{q:"¿Qué evita usar consultas preparadas con PDO?", o:["XSS","La inyección SQL","Los errores 404","Los virus"], a:1, e:"Los datos se envían separados de la consulta y no se ejecutan como SQL."},
{q:"¿Dónde se guardan los datos de una sesión?", o:["En el navegador","En el servidor","En la URL","En el DNS"], a:1, e:"El navegador solo guarda el identificador de sesión en una cookie."},
{q:"¿Cómo se deben guardar las contraseñas de los usuarios?", o:["En texto plano","Cifradas con una clave fija","Con password_hash()","En una cookie"], a:2, e:"password_hash() genera un hash seguro con sal; se comprueba con password_verify()."},
{q:"¿Qué son Laravel y Symfony?", o:["Bases de datos","Frameworks de PHP","Servidores web","Editores de código"], a:1, e:"Son frameworks que organizan la aplicación con MVC y aportan herramientas ya hechas."}
]});
