TEMA("seguridad-datos", {
title:"Seguridad de los datos: usuarios, roles y protección", mins:14,
intro:"Cómo se protege la información de una base de datos: usuarios y roles con los permisos justos, vistas para ocultar datos, cifrado, copias y lo que exige la ley cuando hay datos personales.",
sections:[
{h:"Usuarios y privilegios", html:`
<pre><code><span class="k">CREATE USER</span> <span class="s">'contable'</span>@<span class="s">'192.168.1.%'</span> <span class="k">IDENTIFIED BY</span> <span class="s">'Frase-Larga-y-Segura'</span>;
<span class="k">GRANT SELECT</span>, <span class="k">INSERT ON</span> empresa.facturas <span class="k">TO</span> <span class="s">'contable'</span>@<span class="s">'192.168.1.%'</span>;
<span class="k">GRANT SELECT</span> (nombre, email) <span class="k">ON</span> empresa.clientes <span class="k">TO</span> <span class="s">'contable'</span>@<span class="s">'192.168.1.%'</span>;  <span class="c">-- solo dos columnas</span>
<span class="k">REVOKE INSERT ON</span> empresa.facturas <span class="k">FROM</span> <span class="s">'contable'</span>@<span class="s">'192.168.1.%'</span>;</code></pre>
<p>Los permisos se pueden dar a varios niveles: todo el servidor (<code>*.*</code>), una base de datos (<code>empresa.*</code>), una tabla o incluso columnas concretas.</p>
<p><code>WITH GRANT OPTION</code> permite al usuario dar a otros los permisos que tiene. Úsalo con mucha cautela.</p>`,
check:{q:"¿A qué nivel da permiso GRANT SELECT ON empresa.* TO …?", o:["A todo el servidor","A todas las tablas de la base de datos empresa","A una sola tabla","A una columna"], a:1, e:"empresa.* abarca todas las tablas de esa base de datos."}},
{h:"Roles", html:`
<p>Igual que en Active Directory se dan permisos a grupos y no a personas, en las bases de datos se usan <b>roles</b>:</p>
<pre><code><span class="k">CREATE ROLE</span> lectura_ventas;
<span class="k">GRANT SELECT ON</span> ventas.* <span class="k">TO</span> lectura_ventas;
<span class="k">GRANT</span> lectura_ventas <span class="k">TO</span> <span class="s">'ana'</span>@<span class="s">'%'</span>, <span class="s">'luis'</span>@<span class="s">'%'</span>;
<span class="k">SET DEFAULT ROLE</span> lectura_ventas <span class="k">TO</span> <span class="s">'ana'</span>@<span class="s">'%'</span>;</code></pre>
<p>Cuando entra alguien nuevo en el departamento, basta con asignarle el rol.</p>`},
{h:"Ocultar y proteger datos", html:`
<ul>
<li><b>Vistas:</b> se da acceso a una vista con solo las columnas necesarias y no a la tabla con todo (por ejemplo, ocultando el DNI y la cuenta bancaria).</li>
<li><b>Contraseñas de usuarios de la aplicación:</b> nunca en texto plano; se guarda un <b>hash</b> con algoritmos lentos y con sal, como bcrypt o Argon2.</li>
<li><b>Cifrado en reposo:</b> los ficheros de la base de datos cifrados en disco (TDE). Si roban el disco o la copia, no pueden leerlos.</li>
<li><b>Cifrado en tránsito:</b> conexiones a la base de datos con TLS.</li>
<li><b>Seudonimización y anonimización:</b> sustituir los datos identificativos en entornos de pruebas o de análisis. Nunca se prueba con datos reales de clientes.</li>
</ul>
<div class="caso"><b>Caso real</b>Un desarrollador copia la base de datos de producción a su portátil para probar. Pierde el portátil. Si la copia tenía datos reales de pacientes o clientes, la empresa tiene una brecha de seguridad que debe notificar.</div>`},
{h:"Lo que dice la ley: RGPD y LOPDGDD", html:`
<p>Si la base de datos contiene <b>datos personales</b>, se aplican el <b>Reglamento General de Protección de Datos (RGPD)</b> europeo y, en España, la <b>LOPDGDD</b> (Ley Orgánica 3/2018). Algunas obligaciones clave:</p>
<ul>
<li><b>Minimización:</b> guardar solo los datos necesarios y solo el tiempo necesario.</li>
<li><b>Medidas de seguridad</b> adecuadas al riesgo: control de acceso, cifrado, copias, registro de accesos.</li>
<li><b>Derechos de las personas:</b> acceso, rectificación, supresión, oposición, portabilidad…</li>
<li><b>Brechas de seguridad:</b> se deben notificar a la autoridad de control (en España, la AEPD) en un máximo de <b>72 horas</b> desde que se conocen, cuando supongan un riesgo para las personas.</li>
</ul>
<p>Los datos de salud son una <b>categoría especial</b> y exigen una protección todavía mayor.</p>`,
check:{q:"¿En qué plazo máximo hay que notificar a la AEPD una brecha de datos personales con riesgo para las personas?", o:["24 horas","72 horas","Un mes","No hay que notificarla"], a:1, e:"El RGPD fija un máximo de 72 horas desde que se tiene constancia."}}
],
quiz:[
{q:"¿Qué sentencia retira un permiso?", o:["GRANT","REVOKE","DENY","DROP"], a:1, e:"REVOKE privilegio ON objeto FROM usuario."},
{q:"¿Se pueden dar permisos sobre columnas concretas en MySQL?", o:["No","Sí, indicando las columnas entre paréntesis","Solo con vistas","Solo al root"], a:1, e:"GRANT SELECT (col1, col2) ON tabla TO usuario."},
{q:"¿Qué ventaja tienen los roles?", o:["Cifran los datos","Agrupan permisos y se asignan de una vez a varios usuarios","Hacen copias","Aceleran las consultas"], a:1, e:"Simplifican la gestión cuando hay muchos usuarios."},
{q:"¿Cómo deben guardarse las contraseñas de los usuarios de una aplicación?", o:["En texto plano","Con un hash lento y con sal, como bcrypt","Cifradas con una clave en el código","En una columna oculta"], a:1, e:"Así, aunque roben la tabla, no pueden obtener las contraseñas fácilmente."},
{q:"¿Qué protege el cifrado en reposo?", o:["Los datos mientras viajan por la red","Los ficheros de la base de datos si roban el disco o la copia","Las contraseñas de Windows","La pantalla"], a:1, e:"El cifrado en tránsito protege los datos en la red."},
{q:"¿Qué principio del RGPD obliga a guardar solo los datos necesarios?", o:["Transparencia","Minimización","Portabilidad","Exactitud"], a:1, e:"Cuantos menos datos, menos riesgo."},
{q:"¿Qué ley complementa al RGPD en España?", o:["LSSI","LOPDGDD (Ley Orgánica 3/2018)","Ley de Propiedad Intelectual","Estatuto de los Trabajadores"], a:1, e:"Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales."},
{q:"¿Con qué datos se deben hacer las pruebas de una aplicación?", o:["Con los reales de producción","Con datos ficticios o anonimizados","Con los de la competencia","Sin datos"], a:1, e:"Copiar datos personales reales a entornos de pruebas multiplica el riesgo."}
]});
