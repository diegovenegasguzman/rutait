TEMA("js-async", {
title:"Comunicación asíncrona: fetch, promesas y AJAX", mins:14,
intro:"Cómo una página pide y envía datos al servidor sin recargarse: el modelo asíncrono de JavaScript, promesas, async/await, fetch, gestión de errores y el lado del servidor.",
sections:[
{h:"Por qué asíncrono", html:`
<p>JavaScript en el navegador tiene un solo hilo. Si esperase de forma bloqueante a que llegue la respuesta de un servidor, la página se congelaría. Por eso las operaciones lentas son <b>asíncronas</b>: se lanzan, el código sigue, y cuando llega el resultado se ejecuta lo que corresponda.</p>
<p>A esta técnica de actualizar partes de la página con datos del servidor sin recargarla se le llamó <b>AJAX</b>; hoy se hace con <code>fetch</code>.</p>
<p>Una <b>promesa</b> representa un resultado que llegará más tarde: puede quedar <b>cumplida</b> (con un valor) o <b>rechazada</b> (con un error).</p>`},
{h:"fetch con async/await", html:`
<pre><code><span class="k">async function</span> cargarNotas() {
    <span class="k">try</span> {
        <span class="k">const</span> resp = <span class="k">await</span> fetch(<span class="s">"/api/notas?curso=daw2"</span>);
        <span class="k">if</span> (!resp.ok) <span class="k">throw new</span> Error(<span class="s">"HTTP "</span> + resp.status);
        <span class="k">const</span> notas = <span class="k">await</span> resp.json();
        pintar(notas);
    } <span class="k">catch</span> (err) {
        mostrarAviso(<span class="s">"No se pudieron cargar las notas. Inténtalo de nuevo."</span>);
    }
}

<span class="c">// Enviar datos (POST con JSON)</span>
<span class="k">await</span> fetch(<span class="s">"/api/notas"</span>, {
    method: <span class="s">"POST"</span>,
    headers: { <span class="s">"Content-Type"</span>: <span class="s">"application/json"</span> },
    body: JSON.stringify({ modulo: <span class="s">"DWEC"</span>, nota: <span class="s">8.5</span> })
});</code></pre>
<ul>
<li><code>fetch</code> solo rechaza la promesa si falla la red. Un 404 o un 500 <b>no</b> es un error para fetch: hay que comprobar <code>resp.ok</code>.</li>
<li>Varias peticiones a la vez: <code>await Promise.all([fetch(a), fetch(b)])</code>.</li>
<li>Mientras carga, muestra un indicador; cuando falla, un mensaje útil.</li>
</ul>`,
check:{q:"El servidor responde con un 404. ¿Entra fetch en el catch?", o:["Sí, siempre","No: fetch solo falla por errores de red; hay que comprobar resp.ok","Solo en Chrome","Solo con POST"], a:1, e:"Por eso se comprueba resp.ok y se lanza el error manualmente."}},
{h:"El lado del servidor y CORS", html:`
<p>El servidor devuelve JSON en lugar de HTML. En PHP:</p>
<pre><code>&lt;?php
header(<span class="s">'Content-Type: application/json'</span>);
$datos = json_decode(file_get_contents(<span class="s">'php://input'</span>), <span class="k">true</span>);  <span class="c">// leer JSON recibido</span>
<span class="k">echo</span> json_encode([<span class="s">'ok'</span> =&gt; <span class="k">true</span>, <span class="s">'id'</span> =&gt; 42]);</code></pre>
<p>Por seguridad, el navegador bloquea las peticiones a <b>otro dominio</b> salvo que ese servidor lo permita con cabeceras <b>CORS</b> (<code>Access-Control-Allow-Origin</code>). Es un error muy frecuente al empezar.</p>
<div class="caso"><b>Depurar</b>En F12 → Red ves cada petición: URL, método, código de respuesta, cabeceras y el JSON que llegó. Casi todos los problemas de AJAX se resuelven ahí.</div>`}
],
quiz:[
{q:"¿Por qué las peticiones al servidor son asíncronas en el navegador?", o:["Por estética","Para no congelar la página mientras se espera la respuesta","Porque HTTP lo exige","Para cifrar"], a:1, e:"JavaScript tiene un solo hilo en la página."},
{q:"¿Qué representa una promesa?", o:["Un error","Un resultado que llegará más tarde","Un tipo de bucle","Un servidor"], a:1, e:"Puede cumplirse o rechazarse."},
{q:"¿Qué método convierte la respuesta de fetch en un objeto?", o:["resp.text()","resp.json()","JSON.stringify","resp.parse()"], a:1, e:"También devuelve una promesa."},
{q:"¿Cómo se lanzan varias peticiones a la vez y se espera a todas?", o:["Promise.all","setTimeout","for await siempre","No se puede"], a:0, e:"Es más rápido que hacerlas una detrás de otra."},
{q:"¿Qué cabecera envía el cliente al mandar JSON?", o:["Accept: text/html","Content-Type: application/json","Authorization","Host"], a:1, e:"Así el servidor sabe cómo leer el cuerpo."},
{q:"¿Qué mecanismo permite que una web llame a una API de otro dominio?", o:["DNS","CORS","NAT","SSH"], a:1, e:"El servidor de la API debe autorizarlo con sus cabeceras."}
]});
