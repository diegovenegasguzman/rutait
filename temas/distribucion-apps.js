TEMA("distribucion-apps", {
title:"Empaquetado y distribución de aplicaciones", mins:11,
intro:"Cómo se convierte un proyecto en algo que el usuario puede instalar: empaquetado, instaladores, firma de código, actualizaciones y distribución por tiendas.",
sections:[
{h:"Empaquetar", html:`
<ul>
<li><b>JAR ejecutable:</b> el programa Java en un solo archivo, que necesita Java instalado.</li>
<li><b>jlink</b> crea un entorno de ejecución Java mínimo con solo los módulos que usa tu aplicación.</li>
<li><b>jpackage</b> genera un instalador nativo (<code>.msi</code> o <code>.exe</code> en Windows, <code>.deb</code> o <code>.rpm</code> en Linux, <code>.dmg</code> en macOS) que incluye Java: el usuario no tiene que instalar nada más.</li>
</ul>
<pre><code>jpackage --name GestorNotas --input target/ --main-jar gestor.jar --type msi --win-shortcut</code></pre>
<p>Con Maven o Gradle, el empaquetado se automatiza en el proceso de construcción.</p>`},
{h:"Instaladores y firma", html:`
<p>Un buen instalador crea accesos directos, registra la aplicación para poder desinstalarla, elige carpeta y comprueba requisitos. Herramientas: WiX (MSI), Inno Setup, NSIS.</p>
<p>La <b>firma de código</b> con un certificado demuestra quién publica el programa y que no se ha modificado. Sin firma, Windows SmartScreen o macOS Gatekeeper avisan o bloquean la instalación.</p>`,
check:{q:"¿Qué genera jpackage?", o:["Un JAR","Un instalador nativo que incluye el entorno Java","Un informe","Un test"], a:1, e:".msi, .exe, .deb, .rpm o .dmg según el sistema."}},
{h:"Actualizaciones y distribución", html:`
<ul>
<li><b>Versionado semántico</b> (MAYOR.MENOR.PARCHE, por ejemplo 2.4.1): el mayor cambia si se rompe la compatibilidad; el menor, con funciones nuevas; el parche, con correcciones.</li>
<li><b>Notas de la versión</b> (changelog) con los cambios.</li>
<li><b>Actualización automática</b>: la aplicación comprueba si hay una versión nueva.</li>
<li><b>Canales:</b> web propia, repositorios (GitHub Releases), tiendas (Microsoft Store, Google Play) y, en empresas, despliegue centralizado (Intune, GPO).</li>
</ul>
<div class="caso"><b>Lo que espera el usuario</b>Instalar con doble clic, sin avisos de seguridad y recibir las actualizaciones solas. Cada paso manual que le pidas es un motivo para que abandone.</div>`}
],
quiz:[
{q:"¿Qué necesita un JAR ejecutable para funcionar?", o:["Nada","Java instalado en el equipo","Internet","Un servidor"], a:1, e:"jpackage evita esa dependencia incluyendo el runtime."},
{q:"¿Qué hace jlink?", o:["Firma el código","Crea un entorno Java mínimo con solo los módulos necesarios","Hace pruebas","Comprime imágenes"], a:1, e:"Reduce mucho el tamaño de la distribución."},
{q:"¿Para qué sirve la firma de código?", o:["Para comprimir","Para demostrar quién publica el programa y que no se ha modificado","Para traducir","Para depurar"], a:1, e:"Evita avisos y bloqueos de seguridad."},
{q:"En la versión 2.4.1, ¿qué indica el 1?", o:["La versión mayor","Una corrección (parche)","Una función nueva","El año"], a:1, e:"MAYOR.MENOR.PARCHE."},
{q:"¿Qué herramienta crea instaladores MSI?", o:["WiX","Git","JUnit","Maven Surefire"], a:0, e:"También Inno Setup o NSIS para .exe."},
{q:"¿Cuándo se incrementa la versión mayor?", o:["Con cada corrección","Cuando se rompe la compatibilidad","Cada mes","Nunca"], a:1, e:"Avisa a los usuarios de que puede haber cambios importantes."}
]});
