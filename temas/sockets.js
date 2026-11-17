TEMA("sockets", {
title:"Comunicaciones en red con sockets", mins:13,
intro:"Cómo dos programas se comunican por la red: sockets TCP y UDP en Java, un servidor que atiende a varios clientes a la vez y cómo diseñar un protocolo sencillo.",
sections:[
{h:"TCP y UDP", html:`
<table>
<tr><th></th><th>TCP</th><th>UDP</th></tr>
<tr><td>Conexión</td><td>Sí, se establece antes de enviar</td><td>No</td></tr>
<tr><td>Fiabilidad</td><td>Entrega garantizada y en orden</td><td>Puede perder o desordenar</td></tr>
<tr><td>Java</td><td><code>ServerSocket</code>, <code>Socket</code></td><td><code>DatagramSocket</code>, <code>DatagramPacket</code></td></tr>
<tr><td>Uso</td><td>Chat, ficheros, web</td><td>Juegos, voz, descubrimiento en la red local</td></tr>
</table>`},
{h:"Servidor TCP multicliente", html:`
<pre><code><span class="k">try</span> (ServerSocket servidor = <span class="k">new</span> ServerSocket(<span class="s">5000</span>)) {
    ExecutorService pool = Executors.newFixedThreadPool(<span class="s">20</span>);
    <span class="k">while</span> (<span class="k">true</span>) {
        Socket cliente = servidor.accept();             <span class="c">// espera a un cliente</span>
        pool.execute(() -&gt; atender(cliente));            <span class="c">// lo atiende otro hilo</span>
    }
}

<span class="k">static void</span> atender(Socket s) {
    <span class="k">try</span> (s;
         BufferedReader in = <span class="k">new</span> BufferedReader(<span class="k">new</span> InputStreamReader(s.getInputStream()));
         PrintWriter out = <span class="k">new</span> PrintWriter(s.getOutputStream(), <span class="k">true</span>)) {
        String linea;
        <span class="k">while</span> ((linea = in.readLine()) != <span class="k">null</span>) {
            out.println(linea.toUpperCase());           <span class="c">// responde en mayúsculas</span>
        }
    } <span class="k">catch</span> (IOException e) { <span class="c">/* el cliente se desconectó */</span> }
}</code></pre>
<p>El cliente: <code>new Socket("localhost", 5000)</code> y los mismos flujos de lectura y escritura.</p>`,
check:{q:"¿Por qué el servidor atiende cada cliente en un hilo distinto?", o:["Por seguridad","Para poder atender a varios clientes a la vez","Porque TCP lo exige","Para ahorrar memoria"], a:1, e:"Si lo atendiera en el hilo principal, no podría aceptar otro cliente hasta terminar con el primero."}},
{h:"Diseñar un protocolo", html:`
<p>Cliente y servidor deben acordar qué se envía y en qué orden. Un protocolo de texto sencillo:</p>
<pre><code>Cliente → LOGIN laia
Servidor → OK Bienvenida
Cliente → MSG Hola a todos
Servidor → OK
Cliente → QUIT</code></pre>
<ul>
<li>Define comandos, respuestas y errores.</li>
<li>Fija un <b>tiempo de espera</b>: <code>socket.setSoTimeout(30000)</code>.</li>
<li>Cifra con TLS (<code>SSLSocket</code>) si viajan datos sensibles.</li>
<li>Para probarlo: <code>telnet localhost 5000</code> o <code>nc localhost 5000</code>.</li>
</ul>
<div class="caso"><b>Hoy en día</b>Muchas aplicaciones usan <b>WebSocket</b>: una conexión permanente sobre HTTP, ideal para chats y notificaciones en tiempo real desde el navegador.</div>`}
],
quiz:[
{q:"¿Qué protocolo garantiza la entrega en orden?", o:["UDP","TCP","IP","ICMP"], a:1, e:"UDP no garantiza nada, pero es más rápido."},
{q:"¿Qué clase de Java escucha conexiones TCP en un puerto?", o:["Socket","ServerSocket","DatagramSocket","URL"], a:1, e:"accept() devuelve un Socket por cliente."},
{q:"¿Qué hace accept()?", o:["Envía datos","Bloquea hasta que llega un cliente y devuelve su Socket","Cierra el servidor","Cifra"], a:1, e:"Por eso suele estar dentro de un bucle."},
{q:"¿Qué clases se usan para UDP en Java?", o:["ServerSocket y Socket","DatagramSocket y DatagramPacket","HttpClient","URLConnection"], a:1, e:"Sin conexión: se envían paquetes independientes."},
{q:"¿Qué método fija un tiempo máximo de espera en la lectura?", o:["setTimeout","setSoTimeout","wait","sleep"], a:1, e:"Lanza SocketTimeoutException si se supera."},
{q:"¿Qué tecnología permite conexiones permanentes en tiempo real desde el navegador?", o:["FTP","WebSocket","SMTP","DNS"], a:1, e:"Ideal para chats y notificaciones."}
]});
