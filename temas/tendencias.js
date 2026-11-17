TEMA("tendencias", {
title:"Nuevas tendencias en equipos informáticos", mins:10,
intro:"Hacia dónde va el hardware: procesadores ARM, mini PC, equipos para IA, informática en la nube, dispositivos conectados y sostenibilidad.",
sections:[
{h:"Nuevos formatos y arquitecturas", html:`
<ul>
<li><b>ARM en PC:</b> procesadores muy eficientes (Apple M, Snapdragon X) que dan gran autonomía en portátiles. Windows y Linux ya funcionan en ARM, con emulación para programas x86.</li>
<li><b>Mini PC y NUC:</b> equipos del tamaño de un libro, suficientes para oficina; ahorran espacio y energía.</li>
<li><b>Todo en uno</b> y <b>clientes ligeros</b>: el procesamiento se hace en un servidor y el equipo solo muestra la pantalla (escritorios virtuales, VDI).</li>
<li><b>NPU:</b> unidades de procesamiento neuronal integradas en los procesadores para tareas de inteligencia artificial en local.</li>
</ul>`},
{h:"La nube y el borde", html:`
<ul>
<li><b>Cloud computing:</b> servidores, almacenamiento y aplicaciones como servicio (IaaS, PaaS, SaaS). Pagas por uso y escalas en minutos.</li>
<li><b>Edge computing:</b> procesar los datos cerca de donde se generan (fábricas, cámaras, coches) para reducir latencia.</li>
<li><b>IoT</b> (Internet de las cosas): sensores y dispositivos conectados. Multiplican los equipos que hay que gestionar y proteger.</li>
</ul>`,
check:{q:"¿Qué modelo de nube ofrece aplicaciones listas para usar, como Microsoft 365?", o:["IaaS","PaaS","SaaS","On-premise"], a:2, e:"Software como servicio: el usuario solo usa la aplicación."}},
{h:"Sostenibilidad", html:`
<ul>
<li><b>Eficiencia energética:</b> fuentes 80 PLUS, procesadores de bajo consumo, apagado automático.</li>
<li><b>Reparabilidad y reutilización:</b> alargar la vida útil con ampliaciones (RAM, SSD) y mercado de reacondicionados.</li>
<li><b>Economía circular</b> y gestión correcta de los RAEE.</li>
<li>Centros de datos con refrigeración eficiente y energía renovable.</li>
</ul>
<div class="caso"><b>Lo verás en el trabajo</b>Muchas organizaciones están sustituyendo torres por mini PC o portátiles con base de conexión: menos consumo, menos espacio y el usuario puede llevarse el equipo.</div>`}
],
quiz:[
{q:"¿Qué ventaja principal tienen los portátiles con procesador ARM?", o:["Más puertos","Gran eficiencia energética y autonomía","Son más grandes","No necesitan sistema operativo"], a:1, e:"Consumen mucho menos para el mismo trabajo."},
{q:"¿Qué es una NPU?", o:["Un tipo de RAM","Una unidad para tareas de inteligencia artificial","Un disco","Una fuente"], a:1, e:"Neural Processing Unit."},
{q:"¿Qué es un cliente ligero?", o:["Un portátil pequeño","Un equipo que muestra un escritorio que se ejecuta en un servidor","Un móvil","Una impresora"], a:1, e:"Se usa con infraestructuras de escritorios virtuales (VDI)."},
{q:"¿Qué es el edge computing?", o:["Procesar datos cerca de donde se generan","Un navegador","Un tipo de cable","Un antivirus"], a:0, e:"Reduce la latencia y el tráfico hacia la nube."},
{q:"¿Qué significa IoT?", o:["Internet de las cosas","Interfaz de órdenes","Instalación por teclado","Índice de temperatura"], a:0, e:"Dispositivos y sensores conectados a la red."},
{q:"¿Qué práctica alarga la vida útil de un equipo?", o:["Tirarlo cada año","Ampliar RAM o cambiar a SSD","Desconectar el ventilador","No actualizarlo"], a:1, e:"Es la opción más sostenible."}
]});
