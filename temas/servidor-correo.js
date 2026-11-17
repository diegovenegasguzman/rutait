TEMA("servidor-correo", {
title:"Servidores de correo electrónico", mins:13,
intro:"Cómo viaja un correo desde que pulsas «Enviar» hasta que llega a la bandeja del destinatario, qué piezas tiene un servidor de correo y cómo se evita que tus mensajes acaben en spam.",
sections:[
{h:"El viaje de un correo", html:`
<div class="work">
<div class="stepn"><i>1</i><span>Tu cliente (Outlook, Thunderbird) envía el mensaje a tu servidor por <b>SMTP</b> (puerto 587, autenticado y cifrado).</span></div>
<div class="stepn"><i>2</i><span>Tu servidor consulta el registro <b>MX</b> del dominio de destino para saber a qué servidor entregarlo.</span></div>
<div class="stepn"><i>3</i><span>Se lo entrega por SMTP (puerto 25) al servidor de destino.</span></div>
<div class="stepn"><i>4</i><span>El destinatario lo lee con <b>IMAP</b> (993) o POP3 (995), o por webmail.</span></div>
</div>
<p>Las piezas de un servidor: el <b>MTA</b> (agente de transferencia, como Postfix o Exim) mueve el correo entre servidores; el <b>MDA</b> lo deja en el buzón; y el servidor IMAP/POP (como Dovecot) lo sirve al usuario. Microsoft Exchange integra todo.</p>`},
{h:"Que no acabe en spam: SPF, DKIM y DMARC", html:`
<table>
<tr><th>Registro DNS</th><th>Qué hace</th></tr>
<tr><td><b>SPF</b></td><td>Lista qué servidores pueden enviar correo en nombre de tu dominio</td></tr>
<tr><td><b>DKIM</b></td><td>Firma digitalmente cada mensaje; el receptor comprueba la firma con la clave pública publicada en el DNS</td></tr>
<tr><td><b>DMARC</b></td><td>Dice qué hacer si fallan SPF o DKIM (nada, cuarentena o rechazar) y a quién enviar informes</td></tr>
</table>
<pre><code>empresa.es.  TXT  "v=spf1 mx include:_spf.google.com -all"
_dmarc.empresa.es. TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@empresa.es"</code></pre>
<p>Además, el servidor necesita un registro <b>PTR</b> (DNS inverso) coherente con su nombre.</p>`,
check:{q:"¿Qué registro indica qué servidores pueden enviar correo en nombre de tu dominio?", o:["MX","SPF","PTR","CNAME"], a:1, e:"MX dice dónde se recibe; SPF, quién puede enviar."}},
{h:"Montarlo o contratarlo", html:`
<p>Montar un servidor de correo propio (Postfix + Dovecot + antispam + antivirus) es buena práctica para aprender, pero en producción exige mucho mantenimiento: reputación de la IP, listas negras, seguridad, copias.</p>
<p>Por eso la mayoría de empresas usan servicios en la nube (Microsoft 365, Google Workspace) y el administrador gestiona usuarios, buzones compartidos, alias y los registros DNS.</p>
<div class="caso"><b>Caso real</b>Los correos de una empresa llegan a spam en Gmail. Revisando las cabeceras se ve «SPF: fail»: habían cambiado de proveedor de correo y no actualizaron el registro SPF.</div>`}
],
quiz:[
{q:"¿Qué protocolo envía el correo entre servidores?", o:["IMAP","POP3","SMTP","HTTP"], a:2, e:"SMTP, puerto 25 entre servidores y 587 para clientes."},
{q:"¿Qué registro DNS consulta un servidor para saber a quién entregar un correo?", o:["A","MX","TXT","SRV"], a:1, e:"El MX del dominio de destino."},
{q:"¿Qué es Postfix?", o:["Un cliente de correo","Un MTA, servidor de transferencia de correo","Un antivirus","Un webmail"], a:1, e:"Junto con Dovecot forma un servidor de correo completo en Linux."},
{q:"¿Qué hace DKIM?", o:["Cifra el buzón","Firma digitalmente los mensajes","Bloquea virus","Asigna IP"], a:1, e:"Demuestra que el mensaje no se ha alterado y viene del dominio."},
{q:"¿Qué indica DMARC?", o:["La IP del servidor","Qué hacer si fallan SPF o DKIM","El tamaño máximo del buzón","El puerto"], a:1, e:"Y adónde enviar los informes."},
{q:"¿Qué puerto usa IMAP cifrado?", o:["143","993","110","25"], a:1, e:"143 es IMAP sin cifrar; 995, POP3 cifrado."}
]});
