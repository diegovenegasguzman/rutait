TEMA("multiproceso", {
title:"Programación multiproceso", mins:11,
intro:"Cómo un programa lanza y controla otros procesos del sistema operativo, se comunica con ellos y espera su resultado, con ejemplos en Java.",
sections:[
{h:"Procesos e hilos", html:`
<p>Un <b>proceso</b> es un programa en ejecución con su propia memoria aislada. Lanzar otro proceso es útil para:</p>
<ul>
<li>Ejecutar programas o comandos del sistema (comprimir con 7-Zip, hacer un <code>ping</code>).</li>
<li>Aislar tareas: si el proceso hijo falla, el principal sigue funcionando.</li>
<li>Aprovechar varios núcleos con tareas independientes.</li>
</ul>
<p>A diferencia de los hilos, los procesos <b>no comparten memoria</b>: se comunican por entrada/salida, ficheros, tuberías o red.</p>`},
{h:"Lanzar procesos en Java", html:`
<pre><code>ProcessBuilder pb = <span class="k">new</span> ProcessBuilder(<span class="s">"ping"</span>, <span class="s">"-c"</span>, <span class="s">"3"</span>, <span class="s">"8.8.8.8"</span>);
pb.redirectErrorStream(<span class="k">true</span>);                <span class="c">// juntar errores con la salida</span>
Process p = pb.start();

<span class="k">try</span> (BufferedReader br = p.inputReader()) {    <span class="c">// leer la salida del hijo</span>
    br.lines().forEach(System.out::println);
}
<span class="k">int</span> codigo = p.waitFor();                      <span class="c">// esperar a que termine</span>
System.out.println(<span class="s">"Terminó con código "</span> + codigo);</code></pre>
<ul>
<li><code>ProcessBuilder</code> configura el comando, el directorio de trabajo y las variables de entorno.</li>
<li><code>waitFor()</code> espera y devuelve el <b>código de salida</b>: 0 suele indicar éxito.</li>
<li><code>destroy()</code> termina el proceso.</li>
<li>Escribir en <code>p.getOutputStream()</code> envía datos a la entrada del hijo.</li>
</ul>`,
check:{q:"¿Qué método espera a que termine el proceso hijo y devuelve su código de salida?", o:["start()","waitFor()","destroy()","join()"], a:1, e:"Un código 0 indica normalmente que todo ha ido bien."}},
{h:"Buenas prácticas", html:`
<ul>
<li>Pasar los argumentos como lista separada, nunca construyendo un comando con texto del usuario: evita la <b>inyección de comandos</b>.</li>
<li>Leer siempre la salida del proceso: si el búfer se llena, el hijo se queda bloqueado.</li>
<li>Poner un tiempo máximo: <code>p.waitFor(30, TimeUnit.SECONDS)</code>.</li>
<li>Tener en cuenta las diferencias entre sistemas operativos (comandos, rutas, separadores).</li>
</ul>
<div class="caso"><b>Lo verás en el trabajo</b>Una aplicación de copias de seguridad que lanza <code>mysqldump</code> o <code>tar</code> como procesos externos, captura su salida para el registro y comprueba el código de salida para saber si la copia ha ido bien.</div>`}
],
quiz:[
{q:"¿Comparten memoria dos procesos distintos?", o:["Sí","No, cada uno tiene su memoria aislada","Solo en Linux","Solo si son Java"], a:1, e:"Se comunican por E/S, ficheros, tuberías o red."},
{q:"¿Qué clase de Java configura y lanza procesos?", o:["Thread","ProcessBuilder","Runtime.gc","Executor"], a:1, e:"start() devuelve un objeto Process."},
{q:"¿Qué indica normalmente un código de salida 0?", o:["Error","Éxito","Que sigue ejecutándose","Que no existe"], a:1, e:"Cualquier otro valor suele indicar un error."},
{q:"¿Qué método termina un proceso?", o:["stop()","destroy()","exit()","close()"], a:1, e:"destroyForcibly() lo fuerza."},
{q:"¿Por qué hay que leer la salida del proceso hijo?", o:["Por estética","Porque si el búfer se llena, el hijo se bloquea","Porque lo exige Windows","No hace falta"], a:1, e:"Es un error clásico al lanzar procesos."},
{q:"¿Cómo se evita la inyección de comandos?", o:["Concatenando texto","Pasando los argumentos como una lista separada","Usando mayúsculas","No se puede"], a:1, e:"El texto del usuario nunca se interpreta como comando."}
]});
