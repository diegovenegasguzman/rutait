TEMA("entornos", {
title:"Entornos de desarrollo, Git y pruebas", mins:16,
intro:"Las herramientas con las que se trabaja en cualquier equipo de desarrollo: el IDE, el depurador, el control de versiones con Git, las pruebas unitarias y la documentación con UML.",
sections:[
{h:"El IDE", html:`
<p>Un <b>IDE</b> (entorno de desarrollo integrado) reúne en un programa lo necesario para programar:</p>
<ul>
<li><b>Editor</b> con resaltado de sintaxis y autocompletado.</li>
<li><b>Compilador</b> o intérprete integrado.</li>
<li><b>Depurador</b>.</li>
<li>Integración con Git, gestores de dependencias (Maven, Gradle) y pruebas.</li>
</ul>
<p>Los más usados: <b>IntelliJ IDEA</b>, <b>Eclipse</b> y <b>NetBeans</b> para Java; <b>Visual Studio Code</b> para casi todo; <b>Android Studio</b> para Android.</p>`},
{h:"Depuración", html:`
<p>Depurar es encontrar y corregir errores ejecutando el programa paso a paso:</p>
<ul>
<li><b>Punto de ruptura (breakpoint):</b> una marca en una línea donde el programa se detiene.</li>
<li><b>Paso a paso por encima (step over):</b> ejecuta la línea actual sin entrar en los métodos que llama.</li>
<li><b>Paso a paso por dentro (step into):</b> entra en el método para seguirlo por dentro.</li>
<li><b>Inspeccionar variables:</b> ver su valor en ese momento.</li>
</ul>
<p>Tipos de error: de <b>compilación</b> (sintaxis, el programa no arranca), de <b>ejecución</b> (falla mientras funciona, como dividir entre cero) y <b>lógicos</b> (funciona, pero da un resultado incorrecto; son los más difíciles de encontrar).</p>`},
{h:"Control de versiones con Git", html:`
<p><b>Git</b> guarda el historial de cambios de un proyecto. Cada cambio guardado es un <b>commit</b>, y puedes volver a cualquiera de ellos. <b>GitHub</b> o <b>GitLab</b> alojan el repositorio en la nube para compartirlo.</p>
<pre><code>git init                         <span class="c"># crear un repositorio en la carpeta</span>
git add .                        <span class="c"># preparar los cambios</span>
git commit -m <span class="s">"Añade login"</span>      <span class="c"># guardarlos en el historial</span>
git push                         <span class="c"># subirlos al repositorio remoto</span>
git pull                         <span class="c"># descargar los cambios de otros</span>

git branch nueva-funcion         <span class="c"># crear una rama</span>
git switch nueva-funcion         <span class="c"># cambiarse a ella</span>
git merge nueva-funcion          <span class="c"># unirla a la rama actual</span></code></pre>
<p>Una <b>rama</b> permite trabajar en algo nuevo sin tocar la versión estable (<code>main</code>). Cuando está listo, se une con un <b>merge</b>. En GitHub, se propone la unión con una <b>pull request</b> para que otra persona revise el código.</p>`},
{h:"Pruebas", html:`
<ul>
<li><b>Caja negra:</b> se prueba qué hace el programa (entradas y salidas) sin mirar el código.</li>
<li><b>Caja blanca:</b> se diseñan las pruebas mirando el código, para recorrer todos los caminos (cada <code>if</code>, cada bucle).</li>
</ul>
<p>Las <b>pruebas unitarias</b> comprueban automáticamente que cada método hace lo que debe. En Java se usa <b>JUnit</b>:</p>
<pre><code>@Test
<span class="k">void</span> retirarMasDelSaldoNoSePermite() {
    Cuenta c = <span class="k">new</span> Cuenta(<span class="s">"Laia"</span>);
    c.ingresar(<span class="s">50</span>);
    assertFalse(c.retirar(<span class="s">100</span>));
    assertEquals(<span class="s">50</span>, c.getSaldo());
}</code></pre>
<p>Otros niveles de prueba: de <b>integración</b> (varias partes juntas), de <b>sistema</b> (todo el programa) y de <b>aceptación</b> (el cliente comprueba que es lo que pidió).</p>`},
{h:"Documentación y UML", html:`
<p><b>Javadoc</b> genera documentación HTML a partir de los comentarios del código:</p>
<pre><code><span class="c">/**
 * Retira dinero de la cuenta.
 * @param cantidad importe a retirar, mayor que 0
 * @return true si se ha podido retirar
 */</span></code></pre>
<p><b>UML</b> es un lenguaje gráfico para diseñar software. Los diagramas más usados:</p>
<ul>
<li><b>De clases:</b> clases con sus atributos, métodos y relaciones (herencia, asociación). Es el más importante.</li>
<li><b>De casos de uso:</b> qué puede hacer cada tipo de usuario con el sistema.</li>
<li><b>De secuencia:</b> el orden de los mensajes entre objetos en una operación.</li>
</ul>
<p><b>Refactorizar</b> es mejorar la estructura del código sin cambiar lo que hace: renombrar, extraer métodos, eliminar duplicados. Las pruebas unitarias garantizan que no se rompe nada al hacerlo.</p>`}
],
quiz:[
{q:"¿Cómo se llama la marca que detiene el programa en una línea durante la depuración?", o:["Commit","Punto de ruptura (breakpoint)","Assert","Rama"], a:1, e:"El breakpoint pausa la ejecución para inspeccionar el estado del programa."},
{q:"¿Qué comando de Git guarda los cambios preparados en el historial?", o:["git add","git commit","git push","git init"], a:1, e:"add prepara los cambios, commit los guarda y push los sube al remoto."},
{q:"¿Qué hace git push?", o:["Descarga cambios","Sube los commits al repositorio remoto","Crea una rama","Borra el historial"], a:1, e:"Envía los commits locales a GitHub, GitLab u otro remoto."},
{q:"¿Cómo se llaman las pruebas que se hacen sin mirar el código?", o:["De caja blanca","De caja negra","Unitarias","De integración"], a:1, e:"En caja negra solo importan las entradas y las salidas."},
{q:"¿Qué framework se usa para pruebas unitarias en Java?", o:["Maven","JUnit","Javadoc","Tomcat"], a:1, e:"JUnit permite escribir pruebas automáticas con @Test y aserciones."},
{q:"¿Qué diagrama UML muestra las clases, sus atributos y sus relaciones?", o:["De casos de uso","De secuencia","De clases","De despliegue"], a:2, e:"El diagrama de clases describe la estructura estática del programa."},
{q:"¿Para qué sirve una rama en Git?", o:["Para borrar commits","Para trabajar en cambios sin afectar a la versión principal","Para subir archivos","Para comprimir el proyecto"], a:1, e:"Las ramas aíslan el trabajo nuevo hasta que se une con merge."},
{q:"Un programa funciona pero calcula mal un total. ¿Qué tipo de error es?", o:["De compilación","De ejecución","Lógico","De sintaxis"], a:2, e:"El programa no falla, pero el resultado es incorrecto: es un error lógico."}
]});
