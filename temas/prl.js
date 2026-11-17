TEMA("prl", {
title:"Prevención de riesgos y protección ambiental en informática", mins:11,
intro:"Los riesgos reales del trabajo con equipos informáticos (eléctricos, posturales, en el CPD) y qué hacer con los aparatos y baterías al final de su vida útil.",
sections:[
{h:"Riesgo eléctrico", html:`
<ul>
<li><b>Desconecta siempre</b> el equipo de la corriente antes de abrirlo, y pulsa el botón de encendido unos segundos para descargar la energía que quede.</li>
<li><b>No abras nunca</b> fuentes de alimentación ni monitores: sus condensadores pueden mantener tensiones peligrosas aunque estén desenchufados.</li>
<li>Usa la <b>pulsera antiestática</b>. No te protege a ti, protege a los componentes de tu electricidad estática.</li>
<li>No sobrecargues regletas ni encadenes una regleta con otra.</li>
</ul>`,
check:{q:"¿Por qué no debes abrir una fuente de alimentación aunque esté desenchufada?", o:["Porque pierde la garantía y nada más","Porque sus condensadores pueden conservar carga peligrosa","Porque tiene virus","Porque se desconfigura"], a:1, e:"Los condensadores almacenan energía y pueden dar una descarga grave."}},
{h:"Ergonomía en el puesto de trabajo", html:`
<p>Los problemas más comunes del trabajo con pantallas son musculares y visuales. Las medidas básicas:</p>
<ul>
<li>Parte superior del monitor a la <b>altura de los ojos</b> o un poco por debajo, a unos 50–70 cm.</li>
<li>Silla regulable, espalda apoyada, pies en el suelo o en un reposapiés.</li>
<li>Antebrazos apoyados y muñecas rectas al teclear.</li>
<li>Pantalla <b>perpendicular a las ventanas</b> para evitar reflejos.</li>
<li><b>Pausas</b> breves y frecuentes; mirar a lo lejos de vez en cuando para descansar la vista.</li>
</ul>
<p>En España, el trabajo con pantallas de visualización está regulado específicamente (Real Decreto 488/1997).</p>`},
{h:"Riesgos en el CPD y al manipular equipos", html:`
<ul>
<li><b>Cargas:</b> servidores y SAI pesan mucho. Levanta con las piernas, no con la espalda, y entre dos personas si hace falta.</li>
<li><b>Ruido y frío:</b> los CPD son ruidosos y están refrigerados; si trabajas mucho tiempo dentro, protégete.</li>
<li><b>Sistemas de extinción por gas:</b> algunos CPD apagan incendios reduciendo el oxígeno o con gases especiales. Si suena la alarma, sal inmediatamente.</li>
<li><b>Cables por el suelo:</b> riesgo de caídas; deben ir canalizados.</li>
<li><b>Baterías de litio</b> hinchadas o dañadas: no se perforan ni se cargan; riesgo de incendio.</li>
</ul>
<div class="caso"><b>Caso real</b>Un portátil con la batería hinchada levanta el teclado o el panel táctil. No se sigue usando ni se carga: se apaga, se retira la batería con cuidado si es posible y se lleva a un punto de recogida específico.</div>`},
{h:"Residuos electrónicos (RAEE)", html:`
<p>Los aparatos eléctricos y electrónicos al final de su vida útil son <b>RAEE</b>. Contienen metales pesados y otras sustancias contaminantes, pero también materiales valiosos que se pueden recuperar.</p>
<ul>
<li>No se tiran a la basura normal: van a un <b>gestor autorizado</b>, a un punto limpio o se devuelven al vendedor.</li>
<li>Pilas, baterías y tóneres tienen su propia recogida.</li>
<li>Antes de retirar un equipo hay que <b>borrar los datos de forma segura</b> o destruir el disco. Un formateo rápido no basta.</li>
<li>Reutilizar y alargar la vida de los equipos (ampliar RAM, cambiar a SSD) es la opción más sostenible.</li>
</ul>`,
check:{q:"La empresa retira 20 ordenadores viejos. ¿Qué debes hacer antes de entregarlos al gestor de residuos?", o:["Nada","Borrar los datos de forma segura o destruir los discos","Formatear rápido","Quitar el teclado"], a:1, e:"Los discos pueden contener datos personales y de la empresa; un formateo rápido no los elimina."}}
],
quiz:[
{q:"¿Qué haces antes de abrir un ordenador?", o:["Nada","Desconectarlo de la corriente","Apagar el monitor","Quitar el ratón"], a:1, e:"Primero, siempre, desenchufarlo."},
{q:"¿A quién protege la pulsera antiestática?", o:["Al técnico de descargas","A los componentes de la electricidad estática","Al monitor","A la red"], a:1, e:"Evita que la estática de tu cuerpo dañe los circuitos."},
{q:"¿Dónde debe quedar la parte superior del monitor?", o:["Muy por encima de los ojos","A la altura de los ojos o un poco por debajo","En el suelo","Da igual"], a:1, e:"Así no fuerzas el cuello."},
{q:"¿Cómo se coloca la pantalla respecto a las ventanas?", o:["De frente","De espaldas","Perpendicular","Da igual"], a:2, e:"Así se evitan los reflejos y deslumbramientos."},
{q:"¿Qué haces con un portátil con la batería hinchada?", o:["Seguir usándolo con cuidado","Dejar de usarlo y no cargarlo; llevar la batería a un punto específico","Pincharla para desinflarla","Tirarlo a la basura"], a:1, e:"Una batería de litio dañada puede incendiarse."},
{q:"¿Qué significa RAEE?", o:["Red de Acceso a Equipos Electrónicos","Residuos de Aparatos Eléctricos y Electrónicos","Registro de Averías","Reglamento de Alta Eficiencia"], a:1, e:"Deben gestionarse en circuitos de reciclaje específicos."},
{q:"¿Basta un formateo rápido para borrar los datos de un disco que se va a retirar?", o:["Sí","No, hay que borrar de forma segura o destruir el disco","Solo en SSD","Solo en Linux"], a:1, e:"Un formateo rápido no elimina los datos y pueden recuperarse."},
{q:"¿Cuál es la opción más sostenible con un equipo lento pero funcional?", o:["Tirarlo","Ampliarlo y reutilizarlo","Guardarlo en un armario","Venderlo como chatarra"], a:1, e:"Alargar la vida útil evita residuos y consumo de recursos."}
]});
