TEMA("hilos", {
 "title": "Procesos, hilos y sockets",
 "mins": 17,
 "intro": "Cómo hacer que un programa haga varias cosas a la vez sin errores, y cómo comunicar programas por la red con sockets: la base de cualquier servicio cliente-servidor.",
 "sections": [
  {
   "h": "Programas, procesos e hilos",
   "html": "\n<p>Para entender la programación concurrente hay que distinguir tres conceptos que a menudo se confunden.</p>\n<ul>\n<li><b>Programa:</b> el archivo con el código, guardado en el disco.</li>\n<li><b>Proceso:</b> un programa en ejecución. Tiene su propia memoria y el sistema operativo lo aísla de los demás.</li>\n<li><b>Hilo (thread):</b> una línea de ejecución dentro de un proceso. Un proceso puede tener varios hilos que <b>comparten su memoria</b>.</li>\n</ul>\n<p>Crear hilos es más ligero que crear procesos y comunicarlos es más fácil (comparten variables), pero compartir memoria también trae los problemas de la concurrencia.</p>\n<p><b>Concurrencia</b> es que varias tareas avancen a la vez, aunque se turnen en el mismo núcleo. <b>Paralelismo</b> es que se ejecuten literalmente a la vez, en núcleos distintos.</p>"
  },
  {
   "h": "Hilos en Java",
   "html": "\n<pre><code>Runnable tarea = () -&gt; {\n    <span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"s\">0</span>; i &lt; <span class=\"s\">3</span>; i++)\n        System.out.println(Thread.currentThread().getName() + <span class=\"s\">\" \"</span> + i);\n};\n\nThread h1 = <span class=\"k\">new</span> Thread(tarea, <span class=\"s\">\"A\"</span>);\nThread h2 = <span class=\"k\">new</span> Thread(tarea, <span class=\"s\">\"B\"</span>);\nh1.start();\nh2.start();\nh1.join();   <span class=\"c\">// espera a que termine h1</span>\nh2.join();</code></pre>\n<ul>\n<li><code>start()</code> crea un hilo nuevo y ejecuta en él el método <code>run()</code>. Si llamas a <code>run()</code> directamente, se ejecuta en el hilo actual, sin concurrencia.</li>\n<li><code>join()</code> espera a que el hilo termine.</li>\n<li>El orden en que se intercalan A y B <b>no está garantizado</b>: puede cambiar en cada ejecución.</li>\n</ul>\n<p>En lugar de crear hilos a mano, lo habitual es un <b>ExecutorService</b>, un grupo (pool) de hilos que reutiliza para ejecutar tareas: <code>Executors.newFixedThreadPool(4)</code>.</p>"
  },
  {
   "h": "Problemas de la concurrencia",
   "html": "\n<p><b>Condición de carrera:</b> dos hilos modifican el mismo dato a la vez y el resultado depende de quién llegue antes.</p>\n<pre><code><span class=\"c\">// Dos hilos ejecutan esto 1.000 veces cada uno</span>\ncontador++;   <span class=\"c\">// leer, sumar 1 y escribir: no es una operación atómica</span>\n<span class=\"c\">// Resultado esperado: 2.000. Resultado real: a veces menos</span></code></pre>\n<p>Solución: que solo un hilo a la vez pueda ejecutar esa parte (la <b>sección crítica</b>):</p>\n<pre><code><span class=\"k\">public synchronized void</span> incrementar() { contador++; }</code></pre>\n<p>También existen clases atómicas como <code>AtomicInteger</code>.</p>\n<p><b>Interbloqueo (deadlock):</b> el hilo 1 tiene el recurso A y espera el B; el hilo 2 tiene el B y espera el A. Ninguno avanza nunca. Se evita pidiendo siempre los recursos en el mismo orden.</p>\n<p>Un <b>interbloqueo</b> (deadlock) ocurre cuando dos o más hilos esperan recursos que tienen otros, y ninguno avanza.</p>\n"
  },
  {
   "h": "Sockets: comunicación por red",
   "html": "\n<p>Un <b>socket</b> es el extremo de una conexión de red, identificado por una IP y un puerto. Con TCP:</p>\n<pre><code><span class=\"c\">// Servidor</span>\nServerSocket servidor = <span class=\"k\">new</span> ServerSocket(<span class=\"s\">5000</span>);\n<span class=\"k\">while</span> (<span class=\"k\">true</span>) {\n    Socket cliente = servidor.accept();          <span class=\"c\">// espera una conexión</span>\n    <span class=\"k\">new</span> Thread(() -&gt; atender(cliente)).start(); <span class=\"c\">// un hilo por cliente</span>\n}\n\n<span class=\"c\">// Cliente</span>\nSocket s = <span class=\"k\">new</span> Socket(<span class=\"s\">\"192.168.1.20\"</span>, <span class=\"s\">5000</span>);\nPrintWriter out = <span class=\"k\">new</span> PrintWriter(s.getOutputStream(), <span class=\"k\">true</span>);\nout.println(<span class=\"s\">\"Hola, servidor\"</span>);</code></pre>\n<ul>\n<li><code>ServerSocket</code> escucha en un puerto; <code>accept()</code> bloquea hasta que llega un cliente.</li>\n<li>Atender a cada cliente en su propio hilo permite servir a muchos a la vez.</li>\n<li>Con UDP se usan <code>DatagramSocket</code> y <code>DatagramPacket</code>, sin conexión.</li>\n</ul>"
  },
  {
   "h": "Servicios en red",
   "html": "\n<p>Hoy, la mayoría de servicios se exponen como <b>API REST</b> sobre HTTP: el cliente pide una URL (<code>GET /alumnos/5</code>) y recibe los datos en JSON. En Java se crean con frameworks como <b>Spring Boot</b>.</p>\n<p>Por seguridad, la comunicación se <b>cifra con TLS</b> (HTTPS o <code>SSLSocket</code>) y las contraseñas se guardan con un <b>hash</b> resistente, como bcrypt, nunca en texto plano.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué comparten los hilos de un mismo proceso?",
   "o": [
    "Nada",
    "La memoria del proceso",
    "Solo el nombre",
    "El procesador exclusivamente"
   ],
   "a": 1,
   "e": "Por eso es fácil comunicarlos y también por eso aparecen condiciones de carrera."
  },
  {
   "q": "¿Qué diferencia hay entre start() y run() en un Thread?",
   "o": [
    "Ninguna",
    "start() crea un hilo nuevo; run() se ejecuta en el hilo actual",
    "run() es más rápido",
    "start() solo funciona una vez al día"
   ],
   "a": 1,
   "e": "Solo start() lanza la ejecución concurrente."
  },
  {
   "q": "Dos hilos incrementan el mismo contador y el total sale menor de lo esperado. ¿Qué ha ocurrido?",
   "o": [
    "Un deadlock",
    "Una condición de carrera",
    "Un error de compilación",
    "Un desbordamiento"
   ],
   "a": 1,
   "e": "Los incrementos se pisan porque contador++ no es atómico."
  },
  {
   "q": "¿Qué es un interbloqueo (deadlock)?",
   "o": [
    "Un hilo muy lento",
    "Hilos que esperan recursos que tienen otros, sin que ninguno avance",
    "Un error de red",
    "Un hilo que termina antes de tiempo"
   ],
   "a": 1,
   "e": "Cada hilo retiene un recurso y espera el del otro indefinidamente."
  },
  {
   "q": "¿Qué palabra clave de Java hace que solo un hilo a la vez ejecute un método?",
   "o": [
    "static",
    "volatile",
    "synchronized",
    "final"
   ],
   "a": 2,
   "e": "synchronized protege la sección crítica."
  },
  {
   "q": "¿Qué clase usa un servidor TCP para esperar conexiones en Java?",
   "o": [
    "Socket",
    "ServerSocket",
    "DatagramSocket",
    "URLConnection"
   ],
   "a": 1,
   "e": "ServerSocket escucha en un puerto y accept() devuelve un Socket por cliente."
  },
  {
   "q": "¿Qué hace join()?",
   "o": [
    "Une dos hilos en uno",
    "Espera a que el hilo termine",
    "Inicia el hilo",
    "Detiene el hilo"
   ],
   "a": 1,
   "e": "El hilo que llama a join() se queda esperando."
  },
  {
   "q": "¿Qué ventaja tiene usar un ExecutorService?",
   "o": [
    "Elimina las condiciones de carrera",
    "Reutiliza un grupo de hilos para ejecutar tareas",
    "Hace el programa monohilo",
    "Cifra las comunicaciones"
   ],
   "a": 1,
   "e": "Evita crear y destruir hilos continuamente."
  }
 ]
});
