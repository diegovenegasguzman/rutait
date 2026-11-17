TEMA("directivas-auditoria", {
title:"Directivas de seguridad y auditorías", mins:14,
intro:"Cómo se obliga a usar contraseñas seguras, se bloquean los ataques de fuerza bruta y se registra quién hace qué en los sistemas para poder investigar un incidente.",
sections:[
{h:"Directivas de contraseñas y bloqueo", html:`
<p>Se configuran en la GPO del dominio (Configuración del equipo → Directivas → Configuración de Windows → Configuración de seguridad → Directivas de cuenta):</p>
<table>
<tr><th>Directiva</th><th>Para qué sirve</th></tr>
<tr><td>Longitud mínima</td><td>Cuanto más larga, más difícil de adivinar. Hoy se recomiendan 12 caracteres o más</td></tr>
<tr><td>Complejidad</td><td>Exige mezclar mayúsculas, minúsculas, números y símbolos</td></tr>
<tr><td>Historial</td><td>Impide reutilizar las últimas contraseñas</td></tr>
<tr><td>Vigencia máxima</td><td>Cada cuánto obliga a cambiarla</td></tr>
<tr><td>Umbral de bloqueo</td><td>Tras cuántos intentos fallidos se bloquea la cuenta</td></tr>
<tr><td>Duración del bloqueo</td><td>Cuánto tiempo permanece bloqueada</td></tr>
</table>
<p>Las recomendaciones actuales priorizan la <b>longitud</b> (frases de contraseña) y la <b>autenticación multifactor</b>, y desaconsejan forzar cambios periódicos sin motivo, porque llevan a contraseñas previsibles («Verano2026!», «Otono2026!»…).</p>`,
check:{q:"¿Qué directiva frena un ataque de fuerza bruta contra una cuenta?", o:["El historial de contraseñas","El umbral de bloqueo de cuenta","La vigencia máxima","El fondo de escritorio"], a:1, e:"Tras varios intentos fallidos, la cuenta se bloquea y el atacante no puede seguir probando."}},
{h:"Asignación de derechos y otras directivas", html:`
<ul>
<li><b>Derechos de usuario:</b> quién puede iniciar sesión localmente, por Escritorio remoto, apagar el sistema o cambiar la hora.</li>
<li><b>Opciones de seguridad:</b> mostrar o no el último usuario en la pantalla de inicio, mensaje legal antes del inicio de sesión, desactivar cuentas de invitado.</li>
<li><b>Restricción de software (AppLocker):</b> qué programas se pueden ejecutar.</li>
<li><b>LAPS:</b> asigna a cada equipo una contraseña de administrador local distinta y la rota automáticamente. Así, si un atacante consigue la de un equipo, no le sirve para los demás.</li>
</ul>`},
{h:"Auditoría de eventos", html:`
<p>Auditar es <b>registrar</b> acciones para poder revisarlas después. En Windows se activa por GPO (Directiva de auditoría avanzada) y los eventos aparecen en el registro de <b>Seguridad</b> del Visor de eventos.</p>
<table>
<tr><th>Id. de evento</th><th>Significado</th></tr>
<tr><td>4624</td><td>Inicio de sesión correcto</td></tr>
<tr><td>4625</td><td>Inicio de sesión fallido</td></tr>
<tr><td>4740</td><td>Cuenta bloqueada</td></tr>
<tr><td>4720</td><td>Cuenta de usuario creada</td></tr>
<tr><td>4663</td><td>Acceso a un objeto (archivo o carpeta auditado)</td></tr>
</table>
<p>Para auditar el acceso a una carpeta concreta, además de activar la directiva hay que configurar la <b>auditoría</b> en las propiedades de seguridad de esa carpeta (pestaña Auditoría).</p>
<div class="caso"><b>Caso real</b>Un usuario se bloquea cada mañana sin haber fallado la contraseña. En el evento 4740 del controlador de dominio aparece el equipo de origen: un móvil antiguo con la contraseña vieja guardada que intenta sincronizar el correo cada pocos minutos.</div>`,
check:{q:"¿Qué id. de evento de Windows indica un inicio de sesión fallido?", o:["4624","4625","4720","1102"], a:1, e:"4624 es correcto y 4625, fallido. Muchos 4625 seguidos pueden indicar un ataque."}},
{h:"Registros en Linux y centralización", html:`
<ul>
<li>Los inicios de sesión y el uso de <code>sudo</code> quedan en <code>/var/log/auth.log</code> (Debian/Ubuntu) o <code>/var/log/secure</code> (Red Hat). Con <code>journalctl</code> se consultan los registros de systemd.</li>
<li><code>last</code> muestra los últimos inicios de sesión y <code>lastb</code>, los fallidos.</li>
<li><b>auditd</b> permite auditar con detalle accesos a archivos y llamadas al sistema.</li>
</ul>
<p>En una organización, los registros se envían a un servidor central (<b>syslog</b>, o un <b>SIEM</b> como Wazuh o Splunk) para que un atacante no pueda borrarlos del equipo comprometido y para correlacionar lo que pasa en todos los sistemas.</p>`}
],
quiz:[
{q:"¿Qué directiva impide reutilizar contraseñas anteriores?", o:["Longitud mínima","Historial de contraseñas","Umbral de bloqueo","Complejidad"], a:1, e:"Guarda las últimas contraseñas y no permite repetirlas."},
{q:"¿Qué priorizan las recomendaciones actuales sobre contraseñas?", o:["Cambiarlas cada mes","La longitud y la autenticación multifactor","Que sean cortas y fáciles","Escribirlas en papel"], a:1, e:"Los cambios forzados frecuentes llevan a contraseñas previsibles."},
{q:"¿Para qué sirve LAPS?", o:["Para cifrar discos","Para que cada equipo tenga una contraseña de administrador local distinta y rotada","Para auditar archivos","Para crear usuarios"], a:1, e:"Evita que una contraseña robada sirva en todos los equipos."},
{q:"¿En qué registro del Visor de eventos aparecen los eventos de auditoría?", o:["Aplicación","Sistema","Seguridad","Instalación"], a:2, e:"El registro de Seguridad guarda inicios de sesión, accesos auditados, etc."},
{q:"¿Qué id. de evento indica que una cuenta se ha bloqueado?", o:["4624","4625","4740","4720"], a:2, e:"Indica también desde qué equipo se produjeron los intentos."},
{q:"Para auditar quién accede a una carpeta, además de la directiva hay que…", o:["Compartirla","Configurar la auditoría en las propiedades de seguridad de la carpeta","Moverla al escritorio","Cifrarla"], a:1, e:"La directiva activa la categoría; la carpeta indica qué se audita."},
{q:"¿En qué archivo de Debian/Ubuntu se registran los inicios de sesión y el uso de sudo?", o:["/var/log/auth.log","/etc/passwd","/var/log/apache2","/etc/sudoers"], a:0, e:"En Red Hat el equivalente es /var/log/secure."},
{q:"¿Por qué se envían los registros a un servidor central?", o:["Para ahorrar disco","Para que un atacante no pueda borrarlos y para correlacionar eventos","Porque es obligatorio en Linux","Para acelerar los equipos"], a:1, e:"Un SIEM centraliza y analiza los registros de toda la organización."}
]});
