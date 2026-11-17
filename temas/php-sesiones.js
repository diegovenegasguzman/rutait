TEMA("php-sesiones", {
title:"Aplicaciones web con PHP: autenticación y sesiones", mins:14,
intro:"Cómo construir el núcleo de cualquier aplicación web: registro e inicio de sesión seguros, control de acceso a páginas, cookies y protección frente a los ataques más habituales.",
sections:[
{h:"Registro e inicio de sesión", html:`
<pre><code><span class="c">// Registro</span>
$hash = password_hash($_POST[<span class="s">'pass'</span>], PASSWORD_DEFAULT);
$pdo-&gt;prepare(<span class="s">'INSERT INTO usuarios (email, hash) VALUES (?, ?)'</span>)-&gt;execute([$email, $hash]);

<span class="c">// Inicio de sesión</span>
session_start();
$st = $pdo-&gt;prepare(<span class="s">'SELECT id, hash, rol FROM usuarios WHERE email = ?'</span>);
$st-&gt;execute([$email]);
$u = $st-&gt;fetch();
<span class="k">if</span> ($u &amp;&amp; password_verify($_POST[<span class="s">'pass'</span>], $u[<span class="s">'hash'</span>])) {
    session_regenerate_id(<span class="k">true</span>);              <span class="c">// evita la fijación de sesión</span>
    $_SESSION[<span class="s">'uid'</span>] = $u[<span class="s">'id'</span>];
    $_SESSION[<span class="s">'rol'</span>] = $u[<span class="s">'rol'</span>];
    header(<span class="s">'Location: /panel.php'</span>); exit;
}
$error = <span class="s">'Correo o contraseña incorrectos'</span>;     <span class="c">// sin decir cuál de los dos falla</span></code></pre>`},
{h:"Proteger páginas y cerrar sesión", html:`
<pre><code><span class="c">// auth.php, incluido al principio de cada página privada</span>
session_start();
<span class="k">if</span> (<span class="k">empty</span>($_SESSION[<span class="s">'uid'</span>])) { header(<span class="s">'Location: /login.php'</span>); exit; }

<span class="c">// Solo administradores</span>
<span class="k">if</span> ($_SESSION[<span class="s">'rol'</span>] !== <span class="s">'admin'</span>) { http_response_code(403); exit(<span class="s">'Acceso denegado'</span>); }

<span class="c">// logout.php</span>
session_start(); $_SESSION = []; session_destroy();</code></pre>
<p>Tras un <code>header('Location: …')</code> hay que hacer <code>exit</code>: si no, el resto de la página se sigue ejecutando.</p>`,
check:{q:"¿Por qué se llama a session_regenerate_id(true) al iniciar sesión?", o:["Para cerrar la sesión","Para cambiar el identificador de sesión y evitar ataques de fijación de sesión","Para cifrar la contraseña","Para enviar una cookie nueva al servidor de correo"], a:1, e:"Un atacante no puede aprovechar un identificador que conocía de antes del inicio de sesión."}},
{h:"Cookies y ataques habituales", html:`
<pre><code>session_set_cookie_params([<span class="s">'secure'</span> =&gt; <span class="k">true</span>, <span class="s">'httponly'</span> =&gt; <span class="k">true</span>, <span class="s">'samesite'</span> =&gt; <span class="s">'Lax'</span>]);</code></pre>
<table>
<tr><th>Ataque</th><th>Defensa</th></tr>
<tr><td>Inyección SQL</td><td>Consultas preparadas</td></tr>
<tr><td>XSS</td><td><code>htmlspecialchars()</code> al mostrar; cookies <code>HttpOnly</code></td></tr>
<tr><td>CSRF (otra web hace que tu navegador envíe un formulario)</td><td>Token aleatorio en cada formulario, comprobado en el servidor; <code>SameSite</code></td></tr>
<tr><td>Fuerza bruta</td><td>Limitar intentos, retrasos, CAPTCHA, MFA</td></tr>
<tr><td>Robo de sesión</td><td>HTTPS (<code>secure</code>), regenerar el id, caducidad</td></tr>
</table>
<div class="caso"><b>Buena práctica</b>En proyectos reales no se reinventa la autenticación: frameworks como Laravel o Symfony la traen hecha, probada y con protección CSRF incluida.</div>`}
],
quiz:[
{q:"¿Qué función de PHP genera el hash de una contraseña?", o:["md5","password_hash","base64_encode","crypt_simple"], a:1, e:"Y password_verify la comprueba."},
{q:"¿Qué hay que poner después de header('Location: …')?", o:["Nada","exit","echo","return true"], a:1, e:"Si no, el resto del script sigue ejecutándose."},
{q:"¿Por qué el mensaje de error no dice si falla el correo o la contraseña?", o:["Por pereza","Para no revelar qué correos están registrados","Porque PHP no lo sabe","Por el idioma"], a:1, e:"Evita la enumeración de usuarios."},
{q:"¿Qué opción de cookie impide que JavaScript la lea?", o:["secure","httponly","samesite","path"], a:1, e:"Protege la sesión ante ataques XSS."},
{q:"¿Qué defensa protege frente a CSRF?", o:["Un token aleatorio en cada formulario comprobado en el servidor","Un antivirus","Usar GET","Cambiar de navegador"], a:0, e:"También ayuda la opción SameSite de las cookies."},
{q:"¿Qué código HTTP indica acceso prohibido?", o:["200","301","403","500"], a:2, e:"401 indica que falta autenticarse."}
]});
