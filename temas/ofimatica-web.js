TEMA("ofimatica-web", {
title:"Ofimática web y aplicaciones web de escritorio", mins:10,
intro:"Cómo se trabaja con documentos desde el navegador, qué ventajas tiene la coedición, cómo se despliegan estas herramientas en una organización y qué son las aplicaciones web instalables.",
sections:[
{h:"Ofimática en el navegador", html:`
<ul>
<li><b>Microsoft 365</b> (Word, Excel y PowerPoint en la web) y <b>Google Workspace</b> (Documentos, Hojas de cálculo, Presentaciones).</li>
<li>Libres y autoalojables: <b>Collabora Online</b> (basado en LibreOffice) y <b>OnlyOffice</b>, que se integran con Nextcloud o Moodle.</li>
</ul>
<p>Ventajas: nada que instalar, acceso desde cualquier equipo, <b>coedición en tiempo real</b>, comentarios e historial de versiones. Inconvenientes: dependen de la conexión y algunas funciones avanzadas solo están en las versiones de escritorio.</p>`},
{h:"Administrarla en una organización", html:`
<ul>
<li>Alta de usuarios y licencias, normalmente sincronizados con el directorio de la empresa.</li>
<li>Políticas de compartición: si se permite compartir fuera de la organización y con qué límites.</li>
<li>Retención y copias de los documentos.</li>
<li>Plantillas corporativas comunes para todos.</li>
<li>Formación de los usuarios: la mayoría de incidencias son de uso, no técnicas.</li>
</ul>`,
check:{q:"¿Qué es la coedición?", o:["Imprimir a doble cara","Varias personas editando el mismo documento a la vez","Traducir un documento","Convertir a PDF"], a:1, e:"Cada uno ve en tiempo real los cambios de los demás."}},
{h:"Aplicaciones web de escritorio (PWA)", html:`
<p>Una <b>PWA</b> (aplicación web progresiva) es una web que se puede <b>instalar</b> desde el navegador: tiene su propio icono y ventana, puede funcionar sin conexión y enviar notificaciones. Ejemplos: Outlook web, Spotify web o Google Docs sin conexión.</p>
<p>Otras «apps de escritorio» están hechas con tecnologías web dentro de <b>Electron</b>: Visual Studio Code, Slack o Discord son, por dentro, una web empaquetada.</p>
<div class="caso"><b>Lo verás en soporte</b>Muchos «programas» que usan los empleados son en realidad aplicaciones web. Cuando fallan, la primera prueba es la de cualquier web: borrar la caché del navegador, probar en ventana privada o en otro navegador.</div>`}
],
quiz:[
{q:"¿Qué alternativas libres de ofimática web se integran con Nextcloud?", o:["Collabora Online y OnlyOffice","Word y Excel","Photoshop","Thunderbird"], a:0, e:"Permiten editar documentos en el navegador en tu propio servidor."},
{q:"¿Qué inconveniente tiene la ofimática web?", o:["No permite compartir","Depende de la conexión a Internet","No guarda versiones","No funciona en Windows"], a:1, e:"Aunque algunas permiten trabajar sin conexión."},
{q:"¿Qué es una PWA?", o:["Un tipo de virus","Una web que se puede instalar como aplicación","Un formato de documento","Un protocolo"], a:1, e:"Aplicación web progresiva."},
{q:"¿Qué tecnología usan apps como Visual Studio Code o Slack?", o:["Electron","Java Swing","Flash","COBOL"], a:0, e:"Son aplicaciones web empaquetadas como programas de escritorio."},
{q:"Una aplicación web de la empresa falla en un equipo. ¿Qué pruebas primero?", o:["Reinstalar Windows","Borrar la caché o probar en ventana privada u otro navegador","Cambiar el monitor","Llamar al fabricante"], a:1, e:"Muchos fallos vienen de datos antiguos guardados en el navegador."},
{q:"¿Por qué conviene sincronizar las cuentas de la ofimática web con el directorio?", o:["No conviene","Para dar de alta y baja usuarios en un solo sitio","Para que vaya más rápido","Para imprimir"], a:1, e:"Evita cuentas olvidadas de personas que ya no están."}
]});
