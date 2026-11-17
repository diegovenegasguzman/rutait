TEMA("wifi-empresa", {
title:"Despliegue de redes inalámbricas", mins:13,
intro:"Cómo se monta una red Wi-Fi profesional: planificación de cobertura y canales, puntos de acceso gestionados, seguridad empresarial con 802.1X y red de invitados.",
sections:[
{h:"Planificar la cobertura", html:`
<ul>
<li><b>Estudio de cobertura (site survey):</b> recorrer el edificio midiendo la señal o simularlo con un plano. Paredes de hormigón, ascensores y metal atenúan mucho.</li>
<li><b>Densidad:</b> en salas con muchos usuarios (aulas, auditorios) hacen falta más puntos de acceso, no más potencia.</li>
<li><b>Canales en 2,4 GHz:</b> solo <b>1, 6 y 11</b> no se solapan entre sí. Los puntos de acceso vecinos deben ir en canales distintos.</li>
<li><b>5 y 6 GHz:</b> muchos más canales libres y más velocidad, con menos alcance.</li>
<li><b>Roaming:</b> que los dispositivos pasen de un punto a otro sin cortes; los puntos deben solaparse ligeramente.</li>
</ul>`,
check:{q:"En 2,4 GHz, ¿qué tres canales no se solapan entre sí?", o:["1, 2 y 3","1, 6 y 11","5, 10 y 15","2, 7 y 12"], a:1, e:"Usar canales que se solapan provoca interferencias entre los puntos de acceso."}},
{h:"Puntos de acceso gestionados", html:`
<p>En una empresa no se configura cada punto de acceso por separado: se usa un <b>controlador</b> (físico, virtual o en la nube) que aplica la misma configuración a todos, ajusta canales y potencias y muestra quién está conectado. Ejemplos: UniFi, Aruba, Cisco Meraki, Omada.</p>
<p>Se suelen alimentar por el propio cable de red con <b>PoE</b> (Power over Ethernet), así que el switch debe ser PoE.</p>
<p>Cada <b>SSID</b> (nombre de red) se asocia a una <b>VLAN</b>: la red corporativa a la VLAN interna y la de invitados a una VLAN aislada.</p>`},
{h:"Seguridad", html:`
<table>
<tr><th>Modo</th><th>Cómo funciona</th><th>Dónde</th></tr>
<tr><td>WPA2/WPA3-Personal (PSK)</td><td>Una contraseña compartida por todos</td><td>Casas y pequeñas oficinas</td></tr>
<tr><td>WPA2/WPA3-Enterprise (802.1X)</td><td>Cada usuario se autentica con sus credenciales o certificado contra un servidor <b>RADIUS</b></td><td>Empresas</td></tr>
</table>
<p>Con Enterprise, si un empleado se va, se desactiva su cuenta y deja de tener Wi-Fi. Con una contraseña compartida habría que cambiarla en todos los equipos.</p>
<ul>
<li><b>Red de invitados:</b> aislada de la red interna, con portal cautivo y límite de ancho de banda.</li>
<li>Desactivar <b>WPS</b>, que es vulnerable.</li>
<li>Vigilar puntos de acceso no autorizados (<b>rogue AP</b>) conectados a la red.</li>
</ul>
<div class="caso"><b>Caso real</b>En un hospital, la Wi-Fi de pacientes y visitantes va en una VLAN completamente separada de la red clínica. Un móvil infectado de un visitante no puede llegar nunca a los equipos médicos.</div>`}
],
quiz:[
{q:"¿Qué es un site survey?", o:["Una encuesta a usuarios","Un estudio de cobertura del edificio","Un tipo de antena","Una VLAN"], a:1, e:"Determina cuántos puntos de acceso hacen falta y dónde."},
{q:"¿Qué tecnología alimenta los puntos de acceso por el cable de red?", o:["USB","PoE","SAI","NFC"], a:1, e:"Power over Ethernet."},
{q:"¿Qué servidor autentica a los usuarios en WPA2/WPA3-Enterprise?", o:["DHCP","RADIUS","DNS","FTP"], a:1, e:"Normalmente integrado con Active Directory."},
{q:"¿Qué ventaja tiene el modo Enterprise frente a una contraseña compartida?", o:["Es más rápido","Cada usuario tiene sus credenciales y se puede dar de baja individualmente","No necesita contraseña","Funciona sin puntos de acceso"], a:1, e:"Es mucho más seguro y fácil de gestionar."},
{q:"¿Cómo se separa la red de invitados de la interna?", o:["Con otro router en casa","Con un SSID asociado a una VLAN aislada","Con un cable más largo","No se puede"], a:1, e:"El tráfico de invitados no llega a la red interna."},
{q:"¿Qué función conviene desactivar por ser vulnerable?", o:["WPA3","WPS","5 GHz","Roaming"], a:1, e:"WPS permite ataques de fuerza bruta al PIN."}
]});
