TEMA("correo-agenda", {
title:"Gestión de correo y agenda electrónica", mins:10,
intro:"Cómo configurar y aprovechar un cliente de correo y su agenda: cuentas, carpetas y reglas, firmas, calendarios compartidos y buenas prácticas.",
sections:[
{h:"Configurar el cliente", html:`
<p>Clientes habituales: <b>Outlook</b>, <b>Thunderbird</b> (libre) y los webmail. Para añadir una cuenta se necesitan:</p>
<ul>
<li>Servidor de <b>entrada</b>: IMAP (puerto 993) o POP3 (995).</li>
<li>Servidor de <b>salida</b>: SMTP (587), con autenticación.</li>
<li>Usuario y contraseña (o inicio de sesión moderno con verificación en dos pasos).</li>
</ul>
<p>Con <b>IMAP</b> los correos se quedan en el servidor y se ven igual en el móvil y en el PC. Con <b>POP3</b> se descargan a un solo equipo. Hoy lo normal es IMAP o Exchange.</p>`},
{h:"Organizar el correo", html:`
<ul>
<li><b>Carpetas</b> y <b>etiquetas</b> por proyecto o cliente.</li>
<li><b>Reglas</b> o filtros: mover automáticamente los correos de un remitente, marcar como importante, etc.</li>
<li><b>Firma</b> con nombre, cargo y contacto; y la <b>respuesta automática</b> para vacaciones.</li>
<li><b>Contactos</b> y <b>listas</b> de distribución.</li>
<li>Exportar o hacer copia del buzón (archivos .pst en Outlook, .mbox en Thunderbird).</li>
</ul>`,
check:{q:"¿Qué protocolo permite ver los mismos correos en el móvil y en el PC?", o:["POP3","IMAP","SMTP","FTP"], a:1, e:"Con IMAP los mensajes permanecen en el servidor y se sincronizan."}},
{h:"Agenda y buenas prácticas", html:`
<ul>
<li><b>Calendario:</b> citas, reuniones con invitaciones, recordatorios y tareas.</li>
<li><b>Calendarios compartidos:</b> ver la disponibilidad de compañeros o reservar salas.</li>
<li>Sincronización con el móvil mediante Exchange, CalDAV/CardDAV o la cuenta en la nube.</li>
</ul>
<p>Buenas prácticas: asunto claro, <b>CCO</b> (copia oculta) al escribir a muchas personas externas para no revelar sus direcciones, cuidado con los adjuntos y desconfianza ante enlaces y adjuntos inesperados.</p>
<div class="caso"><b>Caso real</b>Un aviso a 300 clientes enviado con todos en el campo «Para» expone sus correos a los demás: es una brecha de datos personales. Con CCO no habría pasado.</div>`}
],
quiz:[
{q:"¿Qué servidor se configura para enviar correo?", o:["IMAP","POP3","SMTP","DNS"], a:2, e:"SMTP, normalmente por el puerto 587 con autenticación."},
{q:"¿Para qué sirven las reglas en un cliente de correo?", o:["Para cifrar","Para organizar automáticamente los mensajes entrantes","Para enviar más rápido","Para hacer copias"], a:1, e:"Mover, marcar o reenviar según condiciones."},
{q:"¿Qué campo usarías al escribir a muchos destinatarios externos?", o:["Para","CC","CCO","Asunto"], a:2, e:"La copia oculta no revela las direcciones a los demás."},
{q:"¿Qué es la respuesta automática?", o:["Un virus","Un mensaje que se envía solo, por ejemplo durante las vacaciones","Una regla de spam","Una firma"], a:1, e:"Indica cuándo vuelves y a quién dirigirse."},
{q:"¿Qué protocolos sincronizan calendarios y contactos de forma estándar?", o:["CalDAV y CardDAV","SMTP y POP3","FTP y SSH","HTTP y DNS"], a:0, e:"Los usan Nextcloud, Thunderbird y muchos móviles."},
{q:"¿En qué formato guarda Outlook las copias de un buzón?", o:[".pst",".docx",".mbz",".iso"], a:0, e:"Thunderbird usa el formato mbox."}
]});
